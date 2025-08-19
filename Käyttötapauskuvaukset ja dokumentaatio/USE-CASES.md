# Äänestyssovellus – Käyttötapauskuvaukset

Tämä dokumentti kuvaa käyttötapaukset samalle äänestyssovellukselle kuin aiemmassa käyttötapauskaaviossa.

## 1. Selaa äänestyksiä

**Käyttötapauksen nimi:** Selaa äänestyksiä  
**Käyttäjät:** Käyttäjä (ja Ylläpitäjä käyttäjän roolissa)  
**Laukaisija:** Käyttäjä saapuu sovelluksen etusivulle.  
**Esiehto:** Sovellus on käynnissä; äänestyksiä on olemassa (voi olla myös tyhjä lista).  
**Jälkiehto:** Lista äänestyksistä on näytetty käyttäjälle. Ei pysyviä muutoksia dataan.  

**Käyttötapauksen kulku:**  
1. Käyttäjä avaa etusivun.  
2. Sovellus näyttää listan äänestyksistä (otsikko + kuvaus + tila).  
3. Käyttäjä voi suodattaa/järjestää (valinnaista) ja siirtyä valittuun äänestykseen.  

**Poikkeuksellinen toiminta:**  
- 1a. Ei äänestyksiä → Näytetään viesti “Ei vielä änestyksiä”.  
- 2a. Listan lataus epäonnistuu → Näytetään virheilmoitus ja “Yritä uudelleen”.

---

## 2. Katso äänestystilanne

**Käyttötapauksen nimi:** Katso äänestystilanne  
**Käyttäjät:** Käyttäjä (ja Ylläpitäjä käyttäjän roolissa)  
**Laukaisija:** Käyttäjä avaa valitun äänestyksen tai painaa “Näytä tulokset”.  
**Esiehto:** Valittu äänestys on olemassa.  
**Jälkiehto:** Äänestyksen hetkinen äänijakauma on näytetty. Ei muutoksia dataan.  

**Käyttötapauksen kulku:**  
1. Käyttäjä valitsee äänestyksen.  
2. Sovellus hakee äänestyksen vaihtoehdot ja äänten määrät.  
3. Sovellus näyttää tuloksen (pylväs/luettelo/prosentit).  

**Poikkeuksellinen toiminta:**  
- 1a. Äänestystä ei löydy → Näytetään virheilmoitus ja palataan listaan.  

---

## 3. Äänestä

**Käyttötapauksen nimi:** Äänestä  
**Käyttäjät:** Käyttäjä (ja Ylläpitäjä käyttäjän roolissa)  
**Laukaisija:** Käyttäjä painaa “Äänestä”-painiketta äänestyksen sisällä.  
**Esiehto:** Valittu äänestys on olemassa; käyttäjä ei ole jo äänestänyt (tarkistus voidaan toteuttaa selaimen muistissa).  
**Jälkiehto:** Äänet päivittyvät; käyttäjälle näytetään päivitetty tulos.  

**Käyttötapauksen kulku:**  
1. Käyttäjä valitsee vaihtoehdon.  
2. Käyttäjä vahvistaa äänensä.  
3. Sovellus tallentaa äänen.  
4. Sovellus näyttää kiitoksen ja päivitetyn tuloksen.  

**Poikkeuksellinen toiminta:**  
- 1a. Käyttäjä ei valitse vaihtoehtoa → Näytetään ohje “Valitse yksi vaihtoehto”.  
- 3a. Käyttäjä on jo äänestänyt → Näytetään viesti “Olet jo äänestänyt”.  

---

## 4. Luo äänestys

**Käyttötapauksen nimi:** Luo äänestys  
**Käyttäjät:** Ylläpitäjä  
**Laukaisija:** Ylläpitäjä avaa hallintasivun ja painaa “Luo äänestys”.  
**Esiehto:** Ylläpitäjä on tunnistettu hallintanäkymään (tässä prototyypissä yksinkertainen vaihtokytkin riittää).  
**Jälkiehto:** Uusi äänestys on lisätty ja näkyy käyttäjille.  

**Käyttötapauksen kulku:**  
1. Ylläpitäjä syöttää otsikon ja kuvauksen.  
2. Ylläpitäjä syöttää vähintään kaksi vaihtoehtoa.  
3. Ylläpitäjä tallentaa äänestyksen.  
4. Sovellus lisää äänestyksen listaan nollatuilla äänillä.  

**Poikkeuksellinen toiminta:**  
- 2a. Vaihtoehtoja on alle kaksi → Näytetään virheilmoitus.  
- 1a. Otsikko puuttuu → Näytetään virheilmoitus.  

---

## 5. Poista äänestys

**Käyttötapauksen nimi:** Poista äänestys  
**Käyttäjät:** Ylläpitäjä  
**Laukaisija:** Ylläpitäjä valitsee äänestyksen ja painaa “Poista”.  
**Esiehto:** Äänestys on olemassa; ylläpitäjä on hallintanäkymässä.  
**Jälkiehto:** Valittu äänestys on poistettu listasta.  

**Käyttötapauksen kulku:**  
1. Ylläpitäjä avaa hallintalistan.  
2. Ylläpitäjä valitsee poistettavan äänestyksen.  
3. Sovellus näyttää varoituksen ja pyytää vahvistusta.  
4. Ylläpitäjä vahvistaa poistamisen.  
5. Sovellus poistaa änestyksen.  

**Poikkeuksellinen toiminta:**  
- 3a. Ylläpitäjä peruu → Mitään ei tehdä.  
- 2a. Äänestystä ei löydy → Näytetään virheilmoitus.
