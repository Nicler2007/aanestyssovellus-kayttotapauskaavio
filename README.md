# Äänestyssovellus – Kaaviot ja prototyyppi

Katso `kayttotapauskaavio.png` ja `USE-CASES.md`. Avaa `index.html` selaimessa prototyyppiä varten.


Lisätty: käyttötapauskuvaukset (`USE-CASES.md`) ja selainprototyyppi (`index.html`, `style.css`, `script.js`).

---

## 📖 Käyttötapauskuvaukset
Kuvaus jokaisesta käyttötapauksesta löytyy tiedostosta  
👉 [`docs/USE-CASES.md`](docs/USE-CASES.md)

---

## 🖼 UML-kaavio
Käyttötapauskaavio löytyy sekä kuvana että lähdekoodina:  
👉 [`diagrams/kayttotapauskaavio.png`](diagrams/kayttotapauskaavio.png)

---

## 💻 Prototyyppi
Toimiva HTML/CSS/JS-prototyyppi selaimessa.  

### Käynnistys
1. Avaa kansio `prototype/`.  
2. Tuplaklikkaa `index.html` → avaa se selaimessa.  

### Ominaisuudet
- Käyttäjä voi:
  - selata äänestyksiä
  - äänestää
  - katsoa tuloksia
- Ylläpitäjä voi (Ylläpitotila-kytkin → Hallinta-välilehti):
  - luoda uusia äänestyksiä
  - poistaa äänestyksiä
- Äänet tallennetaan selaimen `localStorage`en → toimii ilman taustapalvelinta.

---

## 🛠 Kehitysvinkit
- Jos haluat käyttää **Bootstrapia**, lisää se `index.html`-tiedostoon CDN-linkillä.  
- Voit laajentaa prototyyppiä esimerkiksi lisäämällä kirjautumisen, oikean tietokannan tai erillisen backend-palvelun.