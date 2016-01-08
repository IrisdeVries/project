Use the decomposition you made earlier to map parts of the solution on the framework(s) that you are using. Think about and fully express how the user interface will be handled, where the data is coming from, and how the various parts will work together to form a complete application. Remember, it is expected that you separate the user interface from the data provider whenever possible.

Some parts that you may describe here:

a list of classes and public methods (and their return types and/or arguments) that you’ve decided to implement
advanced sketches of UIs that clearly explain which features are connected to which underlying classes
a list of APIs and frameworks that you will be using to provide functionality in your app
a list of data sources, and database tables and fields (and their types) that you’ve decided to implement
If your application has multiple independent programs working together (e.g. to clean your dataset) you need to provide a high-level overview of these components and then provide a lowel-level overview of the inner workings of each component.



UI: de user interface bestaat uit google maps met een aantal venster over maps heen.
Ik ben van plan een opdeling te maken: 
- legenda voor de gekleurde kaarten
- Algemene info
- Ik woon in Adam en ik wil informatie over het gebied waar ik in woon -> "wat voor gebied woon ik?"
- Ik wil een huis huren of kopen en waar kan ik het beste gaan wonen? -> "wat voor gebied wil ik wonen?"

Voor het venster dat hoort bij algemene info:
- info visualisatie
- algemene filters. Als je aanklikt: kaart kleurt in

Voor het venster dat hoort bij "wat voor gebied woon ik?":
- postcode invullen. Bijbehorende gebied wordt omrand en informatie over gebied wordt laten zien in vensters beneden op pagina.

Voor het venster dat hoort bij "wat voor gebied wil ik wonen?":
- mogelijkheid tot aanklikken drie belangrijkste features van een gebied. Beste woonlocatie wordt berekend.
- top gebieden worden laten zien

Ook wil ik dat het mogelijk is om over de kaart te hoveren en gebieden te selecteren. Dan gebeurt er hetzelfde als bij het invullen van postcode.

![Alt text](https://github.com/IrisdeVries/project/blob/master/doc/IMG_3715.JPG)


data: de gevonden data komt van www.amsterdamopendata.nl
data die ik ga gebuiken:
- bevolkingdsdichtheid
- leeftijdsgroepen
- gemiddelde woningwaarde
- criminaliteitsscore

Deze data wordt gebruikt voor het inkleuren van de kaart en als filter.