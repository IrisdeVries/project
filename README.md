# Eindproject Amsterdam

In mijn eindproject wil ik de Amsterdamse huizenmarkt vanuit een andere hoek belichten, informatie over de buurt is hierbij de belangrijkste factor naast de huur- of koopprijs. De visualisatie die ik wil maken gaat in de basis bestaan uit een kaart van Amsterdam met vensters. 

Ik ben van plan om een visualisatie te maken die informatie verstrekt aan twee doelgroepen. 
1) Mensen die een huis willen kopen of huren
2) Mensen die geïnteresseerd zijn in gegevens over buurt waar ze in wonen

De visualisatie zal bevatten:
- kaart van Amsterdam (beginstand is een niet ingekleurde kaart)

- zoekbalk voor postcode/straatnaam etc. zodat groep 2 gegevens kan opzoeken over (eigen) woonplaats
	* wanneer deel wordt aangeklikt verschijnt onderaan gegevens. Bijvoorbeeld de criminaliteitsscore en de 			kindvriendelijkheid. Dit kan bijvoorbeeld in een grafiek.
- een venster met variabelen. o.a. huur- of koopprijs, criminaliteitsscore, kindvriendelijkheid, drukte. Wanneer een van de variabelen wordt geselecteerd kleurt de map in. Er is ook een „clear-all”-functie waarbij de kaart terug gaat naar de beginstand. 

- een functie waarbij een optimale woonlocatie kan worden berekend door top 3 eisen voor een woonlocatie op te geven. Bijvoorbeeld: een gezin van twee ouders en een peuter zoekt een nieuwe woonplek binnen Amsterdam. De ouders hebben een goed inkomen. Zij vinden belangrijk dat er veel gezinnen wonen in de omgeving, dat er natuur in de buurt is en dat er relatief weinig toerisme is. Deze voorkeren kunnen dan worden geselecteerd en optimale gebieden worden dan gehighlight. Ik vind deze feature heel handig omdat het zoeken naar een woning makkelijker maakt. Naast het exploreren van data heeft deze visualisatie ook een aanbeveling.

Dit is een schets van de visualisatie
![Alt text](https://github.com/IrisdeVries/project/blob/master/doc/schetsProject.jpg)

Er is heel veel data over Amsterdam beschikbaar op http://www.amsterdamopendata.nl/
De datasets zijn allemaal verschillend. Sommige sets zijn al in een goed format, andere moeten nog worden omgezet, maar dat zal denk ik niet heel problematisch zijn.

Ik ga de visualisatie maken in D3. Ik weet nog niet zo goed hoe ik verschillende venster ga maken en of het mogelijk is om schuifbalken en knoppen te maken in D3. Gelukkig krijgen we genoeg begeleiding en bestaat google.

Ik ben op het idee gekomen om iets over Amsterdam te maken omdat ik dit voorbeeld tegen kwam: https://www.ois.amsterdam.nl/visualisatie/veiligheidsindex.html?index=Belevingindex&postcode=1031AA&indeling=buurt&meting=2015-08 In deze visualisatie is de veiligheidsscore te zien van verschillende plekken in Amsterdam. Gebieden zijn ingekleurd aan de hand van deze score. Ik vind de stijl heel mooi en rustig. Dat wil ik ook graag in mijn eigen visualisatie. De aparte schermen op de kaart vind ik ook mooi en dat wil ik zelf ook.  



** data staat nog niet in goede format