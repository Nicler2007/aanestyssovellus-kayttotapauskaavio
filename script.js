// Simple client-side prototype with localStorage persistence
const el = (sel, root=document) => root.querySelector(sel);
const els = (sel, root=document) => Array.from(root.querySelectorAll(sel));

const tabs = els('.tab-btn');
tabs.forEach(b => b.addEventListener('click', () => {
  tabs.forEach(t => t.classList.remove('active'));
  els('.tab').forEach(s => s.classList.remove('active'));
  b.classList.add('active');
  el(`#${b.dataset.tab}`).classList.add('active');
}));

// Admin switch (no auth in prototype)
el('#isAdmin').addEventListener('change', e => {
  document.body.classList.toggle('admin', e.target.checked);
});

// Demo data
const seedData = [
  { id: 'p1', title: 'Paras koodieditori?', desc: 'Valitse suosikkisi', options: ['VS Code','IntelliJ','Vim','Neovim'], votes: [5,3,4,2] },
  { id: 'p2', title: 'Kahvi vai tee?', desc: 'Ikuinen klassikko', options: ['Kahvi','Tee'], votes: [7,6] }
];

function loadPolls() {
  const data = localStorage.getItem('polls');
  return data ? JSON.parse(data) : [];
}
function savePolls(polls) {
  localStorage.setItem('polls', JSON.stringify(polls));
}
function ensureSeed() {
  if (!localStorage.getItem('polls')) savePolls(seedData);
}
ensureSeed();

// Render list
function renderList() {
  const q = el('#search').value.trim().toLowerCase();
  const polls = loadPolls();
  const container = el('#pollList');
  const empty = el('#emptyList');
  container.innerHTML = '';
  let filtered = polls.filter(p => p.title.toLowerCase().includes(q) || (p.desc||'').toLowerCase().includes(q));
  if (!filtered.length) {
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  filtered.forEach(p => {
    const tmpl = el('#pollCardTmpl');
    const node = tmpl.content.firstElementChild.cloneNode(true);
    el('.title', node).textContent = p.title;
    el('.desc', node).textContent = p.desc || '';
    el('.open', node).addEventListener('click', () => openPoll(p.id));
    el('.showResults', node).addEventListener('click', () => openPoll(p.id, true));
    container.appendChild(node);
  });
}
el('#search').addEventListener('input', renderList);
el('#resetData').addEventListener('click', () => {
  localStorage.clear();
  ensureSeed();
  renderList();
  renderAdminList();
});

// Dialog open
const dlg = el('#pollDialog');
let currentPollId = null;
function openPoll(id, showResults=false) {
  const p = loadPolls().find(x => x.id === id);
  if (!p) return alert('Äänestystä ei löydy');
  currentPollId = id;
  el('#dlgTitle').textContent = p.title;
  el('#dlgDesc').textContent = p.desc || '';
  const wrap = el('#dlgOptions');
  wrap.innerHTML = '';
  p.options.forEach((opt, i) => {
    const row = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'vote';
    input.value = i;
    row.appendChild(input);
    row.appendChild(document.createTextNode(' ' + opt));
    wrap.appendChild(row);
  });
  el('#results').innerHTML = '';
  el('#voteBtn').disabled = false;
  if (!dlg.open) dlg.showModal();
  if (showResults) showPollResults(p);
}

el('#resultsBtn').addEventListener('click', () => {
  const p = loadPolls().find(x => x.id === currentPollId);
  if (p) showPollResults(p);
});
el('#pollDialog').addEventListener('close', () => {
  currentPollId = null;
});

function showPollResults(p) {
  const total = p.votes.reduce((a,b)=>a+b,0);
  const res = el('#results');
  res.innerHTML = '<h4>Tulokset</h4>';
  p.options.forEach((opt, i) => {
    const count = p.votes[i] || 0;
    const pct = total ? Math.round((count/total)*100) : 0;
    const line = document.createElement('div');
    line.className = 'small';
    line.textContent = `${opt} — ${count} ääntä (${pct}%)`;
    const bar = document.createElement('div');
    bar.className = 'bar';
    const fill = document.createElement('span');
    fill.style.width = pct + '%';
    bar.appendChild(fill);
    res.appendChild(line);
    res.appendChild(bar);
  });
}

// Voting
el('#voteBtn').addEventListener('click', (e) => {
  e.preventDefault();
  if (!currentPollId) return;
  const selected = el('input[name="vote"]:checked');
  if (!selected) return alert('Valitse yksi vaihtoehto');
  const votedKey = 'voted_'+currentPollId;
  if (localStorage.getItem(votedKey)) {
    alert('Olet jo äänestänyt');
    return;
  }
  const idx = parseInt(selected.value,10);
  const polls = loadPolls();
  const p = polls.find(x => x.id === currentPollId);
  if (!p) return;
  p.votes[idx] = (p.votes[idx]||0)+1;
  savePolls(polls);
  localStorage.setItem(votedKey, '1');
  el('#voteBtn').disabled = true;
  showPollResults(p);
});

// Admin create
el('#addOption').addEventListener('click', () => {
  const row = document.createElement('div');
  row.className = 'opt-row';
  const input = document.createElement('input');
  input.className = 'opt';
  input.placeholder = 'Uusi vaihtoehto';
  row.appendChild(input);
  el('#optionsWrap').appendChild(row);
});

el('#createForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = el('#title').value.trim();
  const desc = el('#desc').value.trim();
  const opts = els('.opt').map(o => o.value.trim()).filter(Boolean);
  if (!title) return alert('Otsikko on pakollinen');
  if (opts.length < 2) return alert('Tarvitaan vähintään 2 vaihtoehtoa');
  const polls = loadPolls();
  const id = 'p' + Math.random().toString(36).slice(2,9);
  polls.push({ id, title, desc, options: opts, votes: opts.map(()=>0) });
  savePolls(polls);
  e.target.reset();
  el('#optionsWrap').innerHTML = '<div class="opt-row"><input class="opt" placeholder="Vaihtoehto 1" required /></div><div class="opt-row"><input class="opt" placeholder="Vaihtoehto 2" required /></div>';
  renderList();
  renderAdminList();
  alert('Äänestys luotu');
});

function renderAdminList() {
  const container = el('#adminList');
  const polls = loadPolls();
  container.innerHTML = '';
  if (!polls.length) {
    const d = document.createElement('div');
    d.className = 'empty';
    d.textContent = 'Ei äänestyksiä. Luo ensimmäinen yllä olevalla lomakkeella.';
    container.appendChild(d);
    return;
  }
  polls.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    const h = document.createElement('h3'); h.textContent = p.title;
    const d = document.createElement('p'); d.className='desc'; d.textContent = p.desc || '';
    const del = document.createElement('button'); del.textContent = 'Poista'; del.className = 'danger';
    del.addEventListener('click', () => {
      if (confirm(`Poistetaanko äänestys: "${p.title}"?`)) {
        const arr = loadPolls().filter(x => x.id !== p.id);
        savePolls(arr);
        renderList();
        renderAdminList();
      }
    });
    card.append(h,d,del);
    container.appendChild(card);
  });
}

function init() {
  renderList();
  renderAdminList();
}
init();
