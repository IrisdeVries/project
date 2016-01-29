#Process book
“Wonen  in Amsterdam”
Iris de Vries - 10367675

#week 1

#maandag 04-01
Plan gemaakt. Eerst wilde ik veryupping binnen Amsterdam in kaart brengen, maar ik had niet genoeg data van meerdere jaren. Bezig met data zoeken. In eerste instantie is dit mijn doel: de Amsterdamse huizenmarkt vanuit een andere hoek belichten, informatie over de buurt is hierbij de belangrijkste factor naast de huur- of koopprijs. De visualisatie die ik wil maken gaat in de basis bestaan uit een kaart van Amsterdam met vensters waarin data wordt gevisualiseerd. Reden voor deze keuze: er wordt altijd veel nadruk gelegd op woningprijs en oppervlakte van woningen terwijl het naar mijn mening minstens net zo belangrijk is in welke buurt je woont.

#dinsdag 05-01
Nog steeds alleen maar data gezocht. Bezig met bepalen wat voor indeling ik wil gebruiken om Amsterdam op te delen. Er is verschillende data beschikbaar voor verschillende indelingen. Bijvoorbeeld: stadsdelen, 22 gebieden, buurten etc. Ik moet onderzoeken wat de beste indeling is. Factoren die meespelen zijn: 
- Welke data wil ik visualiseren en op welk “niveau” zijn deze data beschikbaar?
- Wat is prettig om naar te kijken? Het heeft niet zo veel zin om heel kleine gebiedjes te kleuren als dat toch  niet zichtbaar is
- Wat is informatief en voor wie? De doelgroep is natuurlijk al beperkt tot mensen die geïnteresseerd zijn (in woningen) in Amsterdam. Te kleine of te grote gebieden kunnen ervoor zorgen dat mensen minder geïnteresseerd raken -> te globaal en zegt niks over waar ik woon/wil wonen vs. Te specifiek en al die informatie boeit me niet

#woensdag 06-01
Verder met waar ik gister ben gebleven (nadenken over visualisatie en data zoeken). Verder opzet html gemaakt. Google maps toegevoegd aan pagina. Zoom level en locatie van maps ingesteld. Ik heb een voorbeeld gevonden op de site van amsterdam open data (https://www.amsterdam.nl/stelselpedia/producten-stelsel/webservices/). 

#donderdag 07-01
Besloten om op te delen in 22 gebieden, want is niet te veel en niet te weinig onderscheid. Er is niet heel veel data beschikbaar. Ik heb gevonden: woningwaarde, huishoudenstypen, bevolkingsdichtheid, leeftijdsgroepen. Misschien wil ik nog meer, maar dat komt later. Ik zal de data nog veel moeten bewerken.

#vrijdag 08-01
Bezig geweest met zoeken van extra data en voorbeelden van visualisaties Amsterdam. Opzoek naar data coördinaten. Lang geweest bij bureau dat data regelt van A’dam. Moest een afspraak maken, dus duurt eigenlijk te lang. Ik heb uiteindelijk besloten om de coördinaten van de polygonen zelf te verkrijgen, omdat contact krijgen met de gemeente waarschijnlijk heel lang gaat duren. Op de website: http://www.doogal.co.uk/ is het mogelijk om op een map figuren te tekenen. Je krijgt dan de Lat en Lng waarden terug. Met deze waarden is het mogelijk om deze polygonen ook in mijn eigen visualisatie te laten zien. Het tekenen van de figuren, in dit geval de omlijning van de 22 gebieden, ziet er als volgt uit.

![Alt text](https://raw.githubusercontent.com/IrisdeVries/project/master/doc/Schermafbeelding%202016-01-27%20om%2022.59.51.png)
![Alt text](https://raw.githubusercontent.com/IrisdeVries/project/master/doc/Schermafbeelding%202016-01-27%20om%2023.00.01.png)

Alles moet nu handmatig en daar gaat waarschijnlijk veel tijd inzitten.

#zaterdag 09-01
Begonnen met “tekenen”. Dit is een screenshot van mijn allereerste getekende vlak.
 


#zondag 10-10
verder met tekenen en canvas toegevoegd in html. Gedoe met z-index, maar is gelukt (canvas wilde niet over map). Een soort wrap-functie zodat text op canvas zetten makkelijk wordt.

 

#week 2
De hele week heel erg veel bezig geweest met tekenen.

#maandag 11-01
Tekenen + knoppen toegevoegd en gekoppeld aan functies.

#dinsdag 12-01
Alle coördinaten die ik had getekend gewist, probleem opgelost door opgeslagen coördinaten in te voeren en toen kreeg ik een deel van de lijnen op de map terug.

#woensdag 13-01
Postcodebalk + “ga-knop”toegevoegd aan pagina.

#donderdag 14-01
Veel tijd besteed aan css en positionering etc. van o.a. de knoppen

#vrijdag 15-01
lay-out weer een beetje veranderd. veel geprobeerd, maar niet veel is gelukt. Heb een bar chart gemaakt, maar ik krijg hem niet op m’n pagina. Werkt alleen als ik hem in een aparte html zet.

#zaterdag 16-01

#zondag 17-01
Ik heb alle knoppen aan functies gebonden. Nagedacht over kleurenschema’s en inspiratie opgedaan op color brewer. Aan de ene kant is het inzichtelijk om van groen naar geel naar rood te gaan om te laten zien dat het een “goed” is (bijvoorbeeld een lage woningwaarde) en het ander “slecht”. Maar bij bijvoorbeeld bevolkingsdichtheid weet ik niet of je echt kan spreken van “goed” en “slecht”. De een vind het misschien wel leuk als het druk is en de ander niet. Daarom wil ik voor dat soort variabelen een graduele kleurverandering als intensiteitsindicatie. Ik twijfel over of ik de schema’s voor alle variabelen hetzelfde moet houden.

postcode werkt met een console.log

Bijna klaar met coördinaten intekenen.

#week 3
Over het algemeen ben ik veel bezig geweest met het bruikbaar maken van data, dat kosste veel tijd. Bijvoorbeeld het omzetten van inwonersaantallen in percentage's. Ook zaken als komma's veranderen in punten. 

#maandag 18-01
Alle gebieden getekend

#dinsdag 19-01
Tabel gemaakt, data van leeftijdsgroepen omgezet in percentages en in tabel gezet. 

#woensdag 20-01
Heel veel bezig met posities van grafieken etc. Probleem met hoe ik dingen moet visualiseren. In documenten van de gemeente Amsterdam informatie opgezocht over elk gebied (elk jaar worden er analyses gemaakt over o.a. gebieden). Ook van elk gebied een screenshot genomen om toe te voegen als afbeelding in pagina, lukt nog niet.

#donderdag 21-01
besloten om radio buttons toe te voegen zodat leeftijd kan worden laten zien in categorieën op de map

#vrijdag 22-01
sliders toegevoegd, buttons daarin. Toch verdelen over twee pagina’s. Ander gaan alle grafieken en info niet passen.

#zaterdag 23-01

#zondag 24-01
Bezig met opmaak, alles werkend krijgen. Beta-versie geprobeerd af te krijgen. Besloten om postcode niet te doen -> te veel werk om alles weer handmatig te doen en mensen weten toch wel ongeveer in welk gebied ze wonen. Bar charts werken niet als ik er meerdere op een pagina wil.

#week 4
Hele week heel erg veel tijd gestoken ik nadenken hoe ik de oneindig lange if-else-statementreeksen mooier kan opschrijven. Uiteindelijk is het niet echt gelukt zondar dat er weer van alles kapot ging, daarom heb ik het nu maar zo gehouden.

#maandag 25-01
Positionering van de onderdelen bepaald/veranderd. Ik probeer een mooie indeling van de pagina te maken, maar vind het best wel lastig. Ik heb geprobeerd om een soort 1/3 2/3 verhouding aan te houden (gulden snede = pretty). Legenda gemaakt.

#dinsdag 26-01
Als je een gebied aanklikt verspringt hij automatisch naar beneden. Wil dat het scrollend gaat, maar lukt niet. Het lukt nu om meerdere bar charts in m’n pagina te hebben.

#woensdag 27-01
Werkt nu mooi en scrollend ☺. Bar charts kunnen nu kleurtje apart kleurtje krijgen door de .style("fill", function(d) { return d.color; }). 

#donderdag 28-01
Met SPSS gem en SD berekend.

Laatste loodjes. Adviesfunctie werkend gekregen. Als je klikt op de dropdowns kan je voor woningwaarde, bevolkingsdichtheid en veiligheid aangeven wat het beste bij jou past (bv. wil je het heel veilig? Of maakt het niet zo veel uit?). Het advies wordt nu gegeven in een textarea omdat je op die manier makkelijk door een lange lijst kan scrollen en het ook niet erg is als er maar een naam in komt te staan. Bij het geven van het advies kleurt nu ook de kaart. Dat duurt wel lang, maar dat neem ik maar voor lief. Eerst sloeg hij helemaal op hol als je meerdere buttons aanklikte. Opgelost door aan te geven dat een button niet meer aangeklikt is nadat info is verwerkt, maar omdat dat zo snel gaat zie je niet meer dat een button aangevinkt is. Dat heb ik niet meer weten op  te lossen. Daarnaast leeg ik de arrays als ze al waardes bevatten voordat ik nieuwe waardes ga pushen, zo krijg je niks dubbel.

Soms werkte het inkleuren van de kaart niet helemaal -> gefixt door de opacity’s elke keer opnieuw te definieren (soms waren ze veranderd als er geen data beschikbaar was van een bepaald gebied of als de waarde van die data te laag of te hoog was)/ van alle < en > operators <= en >= gemaakt zodat alle waarden worden meegenomen.

Beetje opschonen/commenten van files. ID-namen/variabele-namen veranderd in logische namen. Heel veel problemen met de cache en (python server?). Bij het veranderen van files/namen voerde chrome niet alles door, ook niet na herhaaldelijke cmnd+R. Oplossing was laptop opnieuw opstarten en een andere server op een andere plek aanroepen. Hier was ik vanzelfsprekend debiel veel tijd aan kwijt.

minZoom en maxZoom werkte niet (dat je niet oneindig kan in- en uitzoomen, dat wil ik omdat wanneer je te ver inzoomt zie je dat ik de polygonen zelf heb getekend + als je maximaal kan uitzoomen en je scrollt omhoog dan kom je “vast te zitten” in maps. minZoom en maxZoom toegevoegd aan kaartOpties.

Tekst 

#vrijdag 29-01
- PROCESS laatste update
- REPORT schrijven
- Presentatie
