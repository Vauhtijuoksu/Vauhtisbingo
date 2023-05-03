let seed = 3246245
let bid = "normal"

let bg_colors = {
    0.0: [21,43,57],
    6.0: [21,43,57],
    9.0: [139,205,250],
    19.0: [139,205,250],
    23.0: [21,43,57],
    24.0: [21,43,57]
}
let mid = ['"Tätä ei oo koskaan tapahtunu aikasemmin"', "Voiko edes puhua speedrun-maratonista jos tätä ei kuulu?"]

let choises = [
    ["Lahjoita Syöpäsäätiölle!", "Olet tehnyt lahjoituksen Syöpäsäätiölle"],
["Chatti bäckseattaa", "Chatti kertoo asiantuntijana, miten jokin asia pitäisi tehdä"],
["Yhdessä yläviistoon", "Joku siteeraa muuan Celeste-runia, jossa Runtu yritti dashata yläviistoon"],
["Katso runi lapsuudensuosikista", "Striimissä pelataan peliä, joka oli yksi suosikeistasi lapsuudessa"],
["Uusi Oma Ennätys", "Pelaaja saa uuden personal bestin eli PB:n eli oman ennätyksen!"],
["Toistuva voiceline pelissä", "Esim. jokin pelin NPC:stä toistaa samaa puheenpätkää useaan otteeseen."],
["Yleisö vilkuttaa kameralle", "Bongaa vilkuttaja yleisöstä"],
["Koe out of bounds -elämys", "Pelissä mennään pelialueen ulkopuolelle, jonne ei kuuluisi päästä"],
["Postaa Vauhtis-tunnelmakuva someen", "Ota kuva omasta Vauhtis-katsomosta ja postaa se sosiaaliseen mediaan"],
["Katso kokonainen runi", "Katso pelisuoritus alusta loppuun"],
["Nappaa snäkki aamu neljältä", "Katso runi neljältä aamuyöstä"],
["Chattaile 03:00 - 06:00", "Viestittele chattiin aamuyön tunteina"],
["Bongaa Vauhtijuoksu-paita", "Pelaajalla tai Toimijalla on Vauhtijuoksu-paita päällään"],
["Teknisiä ongelmia", "Tekniikka pettää, esim. pelaajan ohjain tökkii tai videokuva jäätyy"],
["F", "Pelaaja kuolee pelissä tai jotain muuta traagista tapahtuu. Press F to pay respect"],
["Opi uutta tutusta pelistä", "Speedrun voi opettaa jotain uutta ennaltaan tutusta pelistä"],
["Kaksi pelaajaa yhteistyössä", "Katso co-op runi, jossa 2+ pelaajaa pelaa yhteisen tavoitteen puolesta"],
["Erittäin hyvä RNG", "Pelaajalla käy erittäin hyvä tuuri jonkin asian suhteen"],
["Erittäin huono RNG", "Pelaajalla käy erittäin huono tuuri jonkin asian suhteen"],
["Yli 100€ lahjoitus!", "Joku lahjoittaa yli 100€ Syöpäsäätiölle!"],
["Unskippable cutscene", "Pelissä tulee videonpätkä, jota ei yksinkertaisesti pysty skippaamaan"],
["Pelaajat kisaavat keskenään", "Katso race, jossa 2+ pelaajaa kilpailee keskenään siitä, kuka on nopein"],
["Vauhtisbiisi", "Striimissä soitetaan Vauhtisbiisiä eli 'Deerboy - Medley No.1 (Vauhtijuoksu Edit)'"],
["Näe resetti", "Pelaajalla mokaa ja joutuu sen vuoksi aloittamaan suorituksen alusta"],
["Joku syö striimissä", "Pelaaja tai Toimija on eksynyt keittiöstä striimin puolelle syömään"],
["Uusi maailmanennätys!", "Pelaaja saa uuden maailmanennätyksen eli world recordin eli WR:n!"],
["Hauska lahjoitusviesti", "Joku heittää mieletöntä läppää lahjoitusviestin muodossa"],
["vauhtiJAM-moment", "Striimin musiikit saa chatin suoltamaan vauhtiJAM-emotea"],
["Kootut selitykset pelaajalta", "Pelaaja selittelee jotain virhettä"],
["Äitille terkkuja", "Joku lähettää terveiset äidille, esim. pelaaja runin jälkeisessä haastattelussa"],
["Blink and you miss it", "Vauhdikas asia, jonka voi missata, jos sattuu räpäyttämään silmiä"],
["“Ekalla!“", "Pelaaja pääsee skipin ensimmäisellä yrityksellä"],
["Framen tarkka temppu", "Frame perfect eli tempun aikaikkuna on vain yhden ruudunpäivityksen mittainen"],
["“Oho“", "Jotain odottamatonta tapahtuu ja pelaaja reagoi asianmukaisesti"],
["Täytä palautekysely", "Käy antamassa palautetta Vauhtijuoksu 2023 -tapahtumasta!"],
["En ymmärrä tätä kieltä", "Peliä pelataan jollain muulla kuin englannin tai suomen kielellä"],
["Peli menee rikki", "Peli menee rikki, jolloin se ei osaa käsitellä sen sisällä tapahtuvaa asiaa"],
["*Nappien hakkaamista*", "Pelaajan ohjaimen/näppäimistön hakkaaminen kuuluu striimiin asti"],
["Puhetta aamupalasta", "Joku puhuu aamupalasta, esim. haastattelun aikana"],
["Terveiset kotopuolesta", "Pelaajan kotiväki lähettää terveiset pelaajalle lahjoitusviestin muodossa"],
["Joku haukottelee", "Pelaaja tai Toimija haukottelee striimissä"],
["1337", "Jossakin esiintyy eliittinumero 1337 eli leet"],
["Chatti keittää pastaa", "Joku on keksinyt hyvän copy-pasten, joka leviää chatissa"],
["Tuottajalla menee sanat sekaisin", "Tuottaja sekoilee esim. lahjoitusviestiä lukiessaan"],
["Joku ei osaa käyttää kannustimia", "Lahjoittaja on unohtanut lisätä viestiin kannustinkoodin"],
["Hui sentään!", "Katso peliä, joka on merkattu kauhupeliksi (Kauhu-Viuhti)"],
["Viuhtikas vilahdus", "Maskotti Viuhti vilahtaa ruudussa"],
["Kommentator please", "Runilla on kommentaattori"],
["Kruisaillaan", "Katso runi, jossa ajellaan"],
["Hei, me lennetään!", "Katso runi, jossa lennetään tai liidetään."],
["Tavoite saavutettu", "Ole paikalla, kun lahjoitustavoite täyttyy"],
["Antiikkia, antiikkia", "Katso peliä, joka on tehty viime vuosituhannella"],
["Bongaa energiajuoma", "Pelaaja/Toimija nauttii vauhdikasta juomaa"],
["Ja seuraavaksi mainoksia", "Katso kaupalliset tiedotteet"],
["Bossi ei kiinnosta", "Päävihu kuolee sekunneissa tai se skipataan kokonaan"],
["Yleisö tanssii", "Paikalla oleva yleisö tanssii taukomusiikin tahtiin"],
["WR-runaaja kuvassa", "Jonkin speedrunin wr-haltija spotataan kamerassa"]
]