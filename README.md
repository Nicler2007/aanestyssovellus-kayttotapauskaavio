# Äänestyssovellus – Käyttötapauskaavio (UML Use Case Diagram)

Tässä repossa on selainkäyttöisen äänestyssovelluksen käyttötapauskaavio. Sovelluksessa on kaksi käyttäjätyyppiä: **Käyttäjä** ja **Ylläpitäjä** (joka on Käyttäjän erikoistapaus).

## Käyttötapaukset
- Käyttäjä:
  - **Selaa äänestyksiä**
  - **Katso äänestystilanne**
  - **Äänestä**
- Ylläpitäjä:
  - **Luo äänestys**
  - **Poista äänestys**

Ylläpitäjän katsotaan perivän (generalization) Käyttäjän toiminnot.

## Tiedostot
- `kayttotapauskaavio.png` – Kaavio kuvana (valmis palautukseen).
- `kayttotapauskaavio.puml` – PlantUML-lähdekoodi (voit generoida PNG/SVG:n itse PlantUML:lla).
- `kayttotapauskaavio.mmd` – Mermaid-versio kaaviosta (esimerkiksi GitHubin, Obsidianin tai mkdocs-mermaidin kanssa).





# Äänestyssovellus – Kaaviot ja prototyyppi

Katso `kayttotapauskaavio.png` ja `USE-CASES.md`. Avaa `index.html` selaimessa prototyyppiä varten.


Lisätty: käyttötapauskuvaukset (`USE-CASES.md`) ja selainprototyyppi (`index.html`, `style.css`, `script.js`).
