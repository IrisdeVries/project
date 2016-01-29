#Final Report
“Wonen  in Amsterdam”
Iris de Vries – 10367675

#Beschrijving van “Wonen in Amsterdam”
Het doel van het project was om de Amsterdamse huizenmarkt vanuit een andere hoek te belichten. Over het algemeen worden woningwaarde en woningoppervlakte gezien als twee heel belangrijke factoren (de belangrijkste?) terwijl ervaring leert dat de omgeving waarin je woont ook van grote invloed is op het woonplezier. Informatie over de bevolkingsdichtheid, de veiligheid en de leeftijdsgroepen is meegenomen naast de standaard woningwaarde.

De visualisatie verstrekt informatie aan ten minste aan twee doelgroepen. 1) Mensen die een huis willen kopen of huren in Amsterdam 2) Mensen die geïnteresseerd zijn in gegevens over buurt (in Amsterdam) waar ze in wonen.

De visualisatie bestaat uit twee pagina’s die ik aan de hand van de foto’s ga doorspreken.

![Alt text](https://raw.githubusercontent.com/IrisdeVries/project/master/doc/Schermafbeelding%202016-01-29%20om%2008.08.54.png)

Op de hoofdpagina is te zien:
- Google maps met “daarop” de 22 gebieden waaruit Amsterdam is opgebouwd
Je kan over de map hoveren en wanneer je over een gebied gaat verschijnt de naam van het gebied en verandert de opacity van de polygoon. Het is mogelijk om slechts een beetje in en uit te zoomen. Door op een gebied te klikken scroll je automatisch naar beneden voor gedetailleerde informatie over het gebied.

- Linksboven zie je de naam van de visualisatie met het “logo” van Amsterdam
- Daaronder staat uitleg over de visualisatie

- Op die vier knoppen staan de variabelen die aanwezig zijn  in deze visualisatie
Door op deze knoppen te klikken wordt de kaart “ingevuld” en is duidelijk te zien welke gebieden bijvoorbeeld een hoge woningwaarde hebben. Als je op leeftijdsgroepen klikt verschijnt er een een dropdownmenu waarna een keuze kan worden gemaakt uit verschillende leeftijdscategorieën. Als je over de knoppen hovert worden ze lichtgrijs.

- Daaronder staat een “adviesmenu” 
Hier kan je je voorkeuren aangeven wat betreft woonomgeving. Dit gedeelte is dus voor de mensen die opzoek zijn naar een woning. Door op de … te klikken verschijnt er een dropdownmenu en er kan bij alle drie de menu’s worden gekozen uit: “laag”, “gemiddeld”, “hoog” of “maakt niet uit”. In de textarea daaronder verschijnt jouw adviesgebied. Daarnaast worden de adviesgebieden in het rood gehighlight op de map zodat je er gemakkelijk op kunt klikken en verdere informatie kan verkrijgen. Als je over de knoppen hovert worden ze lichtgrijs.

Dat brengt ons tot het tweede gedeelte van de visualisatie. 

![Alt text](https://raw.githubusercontent.com/IrisdeVries/project/master/doc/Schermafbeelding%202016-01-29%20om%2008.09.20.png)

- Linksboven is een knop de zien
Als je op deze knop drukt smooth scrollt hij je terug naar boven

- Bovenaan in het midden zijn de naam van het aangeklikte gebied en een verhaal over dat gebied te zien.

- De drie bar charts representeren respectievelijk: woningwaarde per m2, bevolkingsdichtheid per km2 en de veiligheidsscore.
Als je over de charts hovert verschijnt er een tooltip met de naam van het gebied. De bars zijn ingekleurd op basis van de waarde die aan de bar gekoppeld is. Bijvoorbeeld: een rode bar betekent dat de woningwaarde relatief hoog is, een oranje bar betekent dat de woningwaarde gemiddeld is en een groene bar betekent dat de woningwaarde relatief laag is. Onder de bars wordt uitleg gegeven over de verdeling van de data en specifiek over de positie van het aangeklikte gebied ten opzichte van alle gebieden.

#Technical Design
De directory waarin in werkte:/project/map/huidigeproject/

Ik heb gebruik gemaakt van een aantal files:
- amsterdammap.html: html, functie die zorgt dat pagina na verversen bovenaan begint, D3 charts, inladen data, functie smooth scroll, canvas met text
Data wordt ingeladen met d3.tsv(). Ints of Foats die nu als string worden ingelezen worden omgezet in Ints of Floats. 

- GM_basistopo.js: Google Maps opties geïnitialiseerd  
- kaartOpties.js: functies geefKaart (laadt maps) , constructPolygon (tekent polygonen op maps en voegt mouse events toe)  en verhaalGebied (voegt verhaal toe specifiek aangeklikt gebied).
- MapsLatLng.js: de coördinaten van de omlijning van de gebieden
- amsterdammap.css: de css
- verhalen.js: de verhalen over de gebieden, en de informatie over de charts specifiek voor de gebieden
- WOZ.tsv: 
uit deze file wordt data ingeladen met d3.tsv

- Data files:
- bevolkingsdichtheid.tsv
- veiligheid.tsv
- woningwaarde.tsv


APIs/Frameworks:
Google Maps API
Javascript
D3.js
JQuery.js
CSS/HTML

#Keuzes en uitdagingen
Het eerste obstakel na het bedenken van het onderwerp van de visualisatie was het vinden van data. Amsterdam heeft veel dataset beschikbaar gesteld voor veel verschillende opdelingen van Amsterdam. Door de grote hoeveelheid aan data was het moeilijk om overzicht te houden. 

Daarom heb ik ervoor gekozen om eerst een beslissing te maken over op “welk niveau” ik Amsterdam wil opdelen. Amsterdam is namelijk op te delen in stadsdelen, 22 gebieden, wijken etc. Factoren die meespelen bij deze beslissing zijn: 
- Welke data wil ik visualiseren en op welk “niveau” zijn deze data beschikbaar?
- Wat is prettig om naar te kijken? Het heeft niet zo veel zin om heel kleine gebiedjes te kleuren als dat toch  niet zichtbaar is
- Wat is informatief en voor wie? De doelgroep is natuurlijk al beperkt tot mensen die geïnteresseerd zijn (in woningen) in Amsterdam. Te kleine of te grote gebieden kunnen ervoor zorgen dat mensen minder geïnteresseerd raken -> te globaal en zegt niks over waar ik woon/wil wonen vs. Te specifiek en al die informatie boeit me niet.

Ik heb ervoor gekozen om Amsterdam op te delen in 22 gebieden. Ik denk dat dit de perfecte middenweg was en er was redelijk wat data beschikbaar voor deze opdeling.

Vervolgens ben ik heel lang opzoek geweest naar coordinaten om de grenzen van deze gebieden te kunnen visualiseren op de map. Na heel veel zoektochten op het internet, meerdere e-mails aan de gemeente Amsterdam en zelfs een bezoek aan het Amsterdam Economic Board (Jodenbreestraat 25, Amsterdam) heb ik besloten om een manier te vinden waarop ik deze data zelf kon verkrijgen. Ik zag het niet meer gebeuren dat de gemeente zou reageren op mijn mails en andere verzoeken (dat klopt ook, want ik heb nog steeds geen reactie). Op de website: http://www.doogal.co.uk/ is het mogelijk om op een map figuren te tekenen. Je krijgt dan de Lat en Lng waarden terug. Met deze waarden is het mogelijk om deze polygonen ook in mijn eigen visualisatie te laten zien. Het tekenen van de figuren, in dit geval de omlijning van de 22 gebieden, ziet er als volgt uit.

Ik tekende de grenzen na van een voorbeeld

De grootste tegenslag tijdens dit project was dat het nog veel langer duurde dan gedacht om al deze gebieden in te tekenen. Dit heeft mij anderhalve week (“parttime”) beziggehouden. Omdat het heel erg nauwkeurig werk is, ben ik er naar schatting wel vier volle werkdagen aan kwijtgeraakt.

Bij het maken van de legenda’s en de kleurenschema’s die ik heb gebruikt om de kaarten mee te kleuren heb ik uiteindelijk gekozen voor twee schema’s. Een van groen naar oranje naar rood en een van lichtrood naar donkerrood. Dit heb ik gedaan omdat ik van mening ben dat een hoge veiligheid en een lage woningwaarde over het algemeen positief wordt gezien. Positiviteit kan goed worden uitgerukt met de kleur groen. Bevolkingsdichtheid en relatieve leeftijdsgroependichtheid zijn niet per se goed of slecht. Daarom heb ik gekozen voor een graduele kleurschaal. De kleuren zijn uitgezocht op colorbrewer.

Ik wilde heel graag dat de scrollfunctie smooth zou verlopen en niet in één sprong. Ik wilde de gebruiker een gevoel geven van waar ze zich op de pagina bevonden als zij op een gebied klikte. Op die manier wordt de indeling van de pagina (boven algemene informatie en beneden specifieke informatie) voor de gebruiker duidelijk. Ik heb gekozen voor een “top”-button zodat gebruikers niet zelf hoeven te scrollen, dat is wel zo makkelijk.

#Discussie en (Zelf)reflectie
Het eindproduct is niet helemaal af. Ik heb te weinig tijd gehad/ik had meer tijd nodig om echt te maken wat ik op dag een voor ogen had. Daarom geef ik hieronder een lijst met zaken die nog niet goed zijn of die ik had willen implementeren.

- Respository is niet netjes, ik had geen tijd meer om het op te schonen

- Files is niet overal even netjes. Bovendien heb ik veel gebruik gemaakt van if-else-statements achterelkaar terwijl dat waarschijnlijk veel efficiënter had gekund. Ook hier had ik geen tijd meer voor. Sommige variabele namen zijn raar of te lang, er zijn veel magic numbers die ik nog had willen veranderen. De CSS staat soms nog door de pagina verspreid ipv allemaal in de CSS file. Ook de namen en de indeling van alle files had ik nog willen veranderen. Zo staat er bijvoorbeeld een <script> in de html pagina die ik daar niet wilde hebben.

- De data is niet netjes en voor de charts gebruik ik losse tsv files. Ik had voor alles een groot bestand willen maken dat ik kon inladen.


- Bar charts:
Ik zou willen dat de kleuren niet in drie categorieën waren opgedeeld, maar in de categorieën waarin de map ook is opgedeeld
- y-as label is niet zichtbaar
- opmaak tooltip (lettertype, kleur etc. Zou ik veranderen in iets wat meer bij de rest past)

- De verhalen bij de gebieden bevatten soms nog rare tekens en voor twee gebieden is er zelfs geen verhaal beschikbaar (er was geen analyse beschikbaar). Ik wilde zelf nog wat opzoeken over deze gebieden.

- Ik had geen tijd meer om de specifieke gebiedsinformatie over veiligheid toe te voegen onder de chart.

- Het was de bedoeling om de grootte van de labels van de gebieden dynamisch te maken en onder dat label nog informatie te plaatsen over bv. De woningwaarde van dat gebied.

- Ik heb leeftijdsgroepen niet verwerkt in het advies en in de specifieke informatie omdat dat te veel tijd zou kosten (zeven verschillende leeftijdsgroepen). Ik wilde een tabel toevoegen aan de pagina met gekleurde cijfers (licht-donkerrood) om aan de geven hoe veel procent van de bevolking in een bepaald gebied uit een bepaalde leeftijdscategorie kwam. 

- Ik wilde nog een “bepaal opnieuw”-knop maken zodat je het advies nog eens kon bepalen zonder dat het advies verkeerd werd weergegeven in de textarea.

- Het advies wordt nu gegeven in een textarea omdat je op die manier makkelijk door een lange lijst kan scrollen en het ook niet erg is als er maar een naam in komt te staan. Bij het geven van het advies kleurt nu ook de kaart. Dat duurt wel lang, maar dat neem ik maar voor lief. Eerst sloeg hij helemaal op hol als je meerdere buttons aanklikte. Opgelost door aan te geven dat een button niet meer aangeklikt is nadat info is verwerkt, maar omdat dat zo snel gaat zie je niet meer dat een button aangevinkt is. Ik wilde een manier bedenken waarop je de radiobuttons wel kan blijven selecteren

- Het was de bedoeling om de bar te selecteren die correspondeert met het aangeklikte gebied. Dit wilde ik doen door de bar te omlijnen met een zwarte rand. Dit is helaas niet gelukt. Daarnaast wilde ik nog een animatie toevoegen waarbij er de mogelijkheid was om te kiezen tussen geordende data van klein naar groot of geordend op gebieden. 

Hoewel ik niet tevreden ben met de visualisatie ben ik wel tevreden over het leerproces. Een half jaar geleden wist ik helemaal niks af van programmeren en nu heb ik een half-werkende visualisatie gemaakt. Dat is toch vooruitgang ;). Ik hoop in de toekomst meer te leren en beter te worden zodat ik iets kan maken waar ik trots op ben.
#Bronnen
Zet csv om in Json
http://www.convertcsv.com/csv-to-json.htm
smooth scroll functie
https://coderwall.com/p/hujlhg/smooth-scrolling-without-jquery
Data Amsterdam
http://www.amsterdamopendata.nl/home
Gebiedsanalyses Amsterdam
http://www.ois.amsterdam.nl/nieuws/gebiedsanalyses-gebiedsgericht-werken
Gebiedsindeling voorbeeld Amsterdam
http://maps.amsterdam.nl/gebiedsindeling/?LANG=nl
Site voor polygonen
http://www.doogal.co.uk/
