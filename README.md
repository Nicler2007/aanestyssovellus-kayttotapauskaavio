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

## Kuinka julkaiset GitHubiin
1. Luo uusi tyhjä repo GitHubiin (esim. nimellä `aanestyssovellus-kayttotapauskaavio`).
2. Kloonaa repo ja kopioi tämän kansion tiedostot sinne **tai** pura alla oleva zip suoraan repon juureen.
3. Aja:
   ```bash
   git add .
   git commit -m "Lisää UML-käyttötapauskaavio äänestyssovellukselle"
   git push origin main
   ```

## Huomioita
- Kaavio noudattaa UML-notaatiota: actorit, käyttötapaukset (ellipsit), järjestelmärajaus (rectangle), assosiaatiot (viivat) ja aktorien generalisaatio (ontto kolmio).
- Jos haluat pieniä muutoksia (esim. että Ylläpitäjä **ei** peri Käyttäjää, tai lisätoimintoja kuten sisäänkirjautuminen), muokkaa PlantUML- tai Mermaid-tiedostoa ja renderöi uudelleen.
