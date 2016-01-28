/*Eindproject minor programmeren 2015-2016
Data Visualisatie
"Wonen in Amsterdam"
Iris de Vries
10367675*/

// kaartopties
var kaartOpties = {
	center: BASIS_CENTRUM_LATLNG,
	zoom: BASIS_INZOOM,
	minZoom: BASIS_MINZOOM,
	maxZoom: BASIS_MAXZOOM,
	mapTypeControlOptions: {
		maptypeIds: ['BASISTOPO']
	}
};

// functie roept kaart aan
function geefKaart(gebiedData) {
	var map = new google.maps.Map(document.getElementById('map_canvas'), kaartOpties);
	map.mapTypes.set('BASISTOPO, basisTopoMapType')
	map.data.loadGeoJson('https://storage.googleapis.com/maps-devrel/google.json');

	// construct the polygon with labels
	function constructPolygon(pad, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra) {
		var marker = new MarkerWithLabel({
	        position: new google.maps.LatLng(0,0),
	        draggable: false,
	        raiseOnDrag: false,
	        map: map,
	        labelContent: polyLabel,
	        labelAnchor: new google.maps.Point(30, 20),
	        labelClass: "labels", // the CSS class for the label
	        labelStyle: {opacity: 1.0, width: "200px"}, // make dynamic : http://stackoverflow.com/questions/14852925/get-string-length-in-pixels-using-javascript
	        icon: "http://placehold.it/1x1",
	        visible: false
	    });	

		var gebiedPolygoon = new google.maps.Polygon({
		    paths: pad,
		    strokeColor: 'black',
		    strokeOpacity: 0.7,
		    strokeWeight: 1,
		    fillColor: kleur,
		    fillOpacity: opacitySecond,
		    labelClass: polyLabel
		  });
	  	gebiedPolygoon.setMap(map);

	  	// event listener -> mouseover
	  	google.maps.event.addListener(gebiedPolygoon,"mouseover",function(e){
			this.setOptions({fillColor: kleur, fillOpacity: opacityFirst});
			marker.setPosition(e.latLng);
        	marker.setVisible(true);
		}); 

	  	// event listener -> mouseout
		google.maps.event.addListener(gebiedPolygoon,"mouseout",function(e){
			this.setOptions({fillColor: kleur, fillOpacity: opacitySecond});
			marker.setVisible(false);
		});

		// event listener -> click
		google.maps.event.addListener(gebiedPolygoon,"click",function(e){
			d3.select("svg").remove()	
			d3.select("svg").remove()	
			d3.select("svg").remove()
			d3Bar()

			// scrollt naar beneden
			smooth_scroll_to(document.body, 1000, 1800);

			// verandert titel van pagina in naam gebied
			document.getElementById("titelPagina2").innerHTML = polyLabel;

			// geeft verhaal dat hoort bij gebied
			function verhaalGebied(gebiedNaam){
				var imageMap = ["CentrumWestMap", "CentrumOostMap", "WesterparkMap", "BOLOMap", "OudWestDeBaarsjesMap", 
				"GeuzenveldSlotermeerMap", "OsdorpMap", "DeAkerNieuwSlotenMap", "SlotervaartMap", "OudZuidMap", "BuitenveldertZuidasMap", 
				"DePijpRivierenbuurtMap", "OudOostMap", "IndischeBuurtOostelijkHavengebiedMap", "WatergraafsmeerMap", "IJburgZeeburgereilandMap", 
				"NoordWestMap", "OudNoordMap", "NoordOostMap", "BijlmerCentrumMap", "BijlmerOostMap", "GaasperdamDriemondMap", "WestpoortMap"]
				for (var i = 0; i < 23; i++){
					if (polyLabel == gebiedNaam[i]){
						image = imageMap[i]
						document.getElementById("verhaal").innerHTML = verhalen[i]
						document.getElementById("uitlegChart1").innerHTML = uitlegChart1Verhaal[i];
						document.getElementById("uitlegChart2").innerHTML = uitlegChart2Verhaal[i];
						document.getElementById("uitlegChart3").innerHTML = uitlegChart3Verhaal[i];
						// showImage(image)
					}
				}
			}
			verhaalGebied(gebiedNaam)
		}); 
	}

	// array met gebieden
	gebied = [CentrumWest, CentrumOost, Westerpark, BOLO, OudWestDeBaarsjes, GeuzenveldSlotermeer, Osdorp, 
	DeAkerNieuwSloten, Slotervaart, OudZuid, BuitenveldertZuidas, DePijpRivierenbuurt, OudOost, IndischeBuurtOostelijkHavengebied, 
	Watergraafsmeer, IJburgZeeburgereiland, NoordWest, OudNoord, NoordOost, BijlmerCentrum, BijlmerOost, GaasperdamDriemond, Westpoort]

	// loop door alle gebieden en vul kaart in
	// als je voorkeuren hebt aangegeven
	if (gebiedData == advies){
		for (var i = 0; i<23; i++){
			gebied_i = gebied[i]
			polyLabel = gebiedNaam[i]
			gebiedExtra_i = gebiedExtra[i]
			opacityFirst = 0.0;
			opacitySecond = 0.0;
			constructPolygon(gebied_i, "green", polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			advies.length
		}
		kleur = "red"
		opacityFirst = 0.9;
		opacitySecond = 0.7;
		for (var i = 0; i < advies.length; i++){
		gebied_i = gebied[i] 
		constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
		}
	}

	// als je op knop drukt voor woningwaarde
	if (gebiedData == woningwaardem2){
		for (i = 0; i < 23; i++){
			gebied_i = gebied[i]
			polyLabel = gebiedNaam[i]
			gebiedExtra_i = gebiedExtra[i]
			opacityFirst = 0.9;
			opacitySecond = 0.7;
			if (gebiedData[i] <= 1800) {
				kleur = "#1a9850"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 1800 && gebiedData[i] < 2100) {
				kleur = "#91cf60"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 2100 && gebiedData[i] < 2500) {
				kleur = "#d9ef8b"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 2500 && gebiedData[i] < 3000) {
				kleur = "#fee08b"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 3000 && gebiedData[i] < 3500) {
				kleur = "#fc8d59"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 3500 && gebiedData[i] < 4200) {
				kleur = "#d73027"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else {
				opacityFirst = 0.2;
				opacitySecond = 0.1;
				kleur = "green"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
		}
	}	 
	// als je op knop druk voor bevolkingsdichtheid
	else if (gebiedData == bevolkingsdichtheidkm2){
		for (i = 0; i < 23; i++){
			opacityFirst = 0.9;
			opacitySecond = 0.7;
			gebied_i = gebied[i]
			polyLabel = gebiedNaam[i]
			gebiedExtra_i = gebiedExtra[i]
			if (gebiedData[i] >= 1000 && gebiedData[i] < 4000) {
				kleur = "#fee5d9"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 4000 && gebiedData[i] < 6000) {
				kleur = "#fcbba1"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 6000 && gebiedData[i] < 10000) {
				kleur = "#fc9272"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 10000 && gebiedData[i] < 13000) {
				kleur = "#fb6a4a"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 13000 && gebiedData[i] < 18000) {
				kleur = "#de2d26"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 18000) {
				kleur = "#a50f15"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else {
				opacityFirst = 0.2;
				opacitySecond = 0.1;
				kleur = "green"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
		}
	}
	// als je op knop drukt voor leeftijden
	else if (gebiedData == leeftijdEen){
		for (i = 0; i < 23; i++){
			opacityFirst = 0.9;
			opacitySecond = 0.7;
			gebied_i = gebied[i]
			polyLabel = gebiedNaam[i]
			gebiedExtra_i = gebiedExtra[i]
			if (gebiedData[i] > 1 && gebiedData[i] < 1.5) {
				kleur = "#fee5d9"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 1.5 && gebiedData[i] < 2.5) {
				kleur = "#fcbba1"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 2.5 && gebiedData[i] < 3.5) {
				kleur = "#fc9272"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 3.5 && gebiedData[i] < 4.5) {
				kleur = "#fb6a4a"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 4.5 && gebiedData[i] < 5.5) {
				kleur = "#de2d26"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 5.5) {
				kleur = "#a50f15"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else {
				opacityFirst = 0.2;
				opacitySecond = 0.1;
				kleur = "green"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
		}
	}
	else if (gebiedData == leeftijdTwee){
		for (i = 0; i < 23; i++){
			opacityFirst = 0.9;
			opacitySecond = 0.7;
			gebied_i = gebied[i]
			polyLabel = gebiedNaam[i]
			gebiedExtra_i = gebiedExtra[i]
			if (gebiedData[i] > 4 && gebiedData[i] < 4.5) {
				kleur = "#fee5d9"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 4.5 && gebiedData[i] < 5.5) {
				kleur = "#fcbba1"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 5.5 && gebiedData[i] < 6.5) {
				kleur = "#fc9272"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 6.5 && gebiedData[i] < 8.5) {
				kleur = "#fb6a4a"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 8.5 && gebiedData[i] < 10.5) {
				kleur = "#de2d26"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 10.5) {
				kleur = "#a50f15"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else {
				opacityFirst = 0.2;
				opacitySecond = 0.1;
				kleur = "green"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
		}
	}
	else if (gebiedData == leeftijdDrie){
		for (i = 0; i < 23; i++){
			opacityFirst = 0.9;
			opacitySecond = 0.7;
			gebied_i = gebied[i]
			polyLabel = gebiedNaam[i]
			gebiedExtra_i = gebiedExtra[i]
			if (gebiedData[i] >= 0.99 && gebiedData[i] < 1.5) {
				kleur = "#fee5d9"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 1.5 && gebiedData[i] < 2.5) {
				kleur = "#fcbba1"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 2.5 && gebiedData[i] < 3.0) {
				kleur = "#fc9272"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 3.0 && gebiedData[i] < 3.5) {
				kleur = "#fb6a4a"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 3.5 && gebiedData[i] < 4.5) {
				kleur = "#de2d26"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 4.5) {
				kleur = "#a50f15"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else {
				opacityFirst = 0.2;
				opacitySecond = 0.1;
				kleur = "green"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
		}
	}
	else if (gebiedData == leeftijdVier){
		for (i = 0; i < 23; i++){
			opacityFirst = 0.9;
			opacitySecond = 0.7;
			gebied_i = gebied[i]
			polyLabel = gebiedNaam[i]
			gebiedExtra_i = gebiedExtra[i]
			if (gebiedData[i] > 6 && gebiedData[i] < 7) {
				kleur = "#fee5d9"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 7 && gebiedData[i] < 7.5) {
				kleur = "#fcbba1"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 7.5 && gebiedData[i] < 8.5) {
				kleur = "#fc9272"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 8.5 && gebiedData[i] < 9.4) {
				kleur = "#fb6a4a"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 9.4 && gebiedData[i] < 10.5) {
				kleur = "#de2d26"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 10.5) {
				kleur = "#a50f15"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else {
				opacityFirst = 0.2;
				opacitySecond = 0.1;
				kleur = "green"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
		}
	}
	else if (gebiedData == leeftijdVijf){
		for (i = 0; i < 23; i++){
			opacityFirst = 0.9;
			opacitySecond = 0.7;
			gebied_i = gebied[i]
			polyLabel = gebiedNaam[i]
			gebiedExtra_i = gebiedExtra[i]
			if (gebiedData[i] >= 32 && gebiedData[i] < 34) {
				kleur = "#fee5d9"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 34 && gebiedData[i] < 36) {
				kleur = "#fcbba1"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 36 && gebiedData[i] < 40) {
				kleur = "#fc9272"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 40 && gebiedData[i] < 43) {
				kleur = "#fb6a4a"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 43 && gebiedData[i] < 50) {
				kleur = "#de2d26"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 50) {
				kleur = "#a50f15"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else {
				opacityFirst = 0.2;
				opacitySecond = 0.1;
				kleur = "green"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
		}
	}
	else if (gebiedData == leeftijdZes){
		for (i = 0; i < 23; i++){
			opacityFirst = 0.9;
			opacitySecond = 0.7;
			gebied_i = gebied[i]
			polyLabel = gebiedNaam[i]
			gebiedExtra_i = gebiedExtra[i]
			if (gebiedData[i] >= 10 && gebiedData[i] < 12) {
				kleur = "#fee5d9"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 12 && gebiedData[i] < 15) {
				kleur = "#fcbba1"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 15 && gebiedData[i] < 18) {
				kleur = "#fc9272"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 18 && gebiedData[i] < 20) {
				kleur = "#fb6a4a"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 20 && gebiedData[i] < 26) {
				kleur = "#de2d26"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 26) {
				kleur = "#a50f15"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else {
				opacityFirst = 0.2;
				opacitySecond = 0.1;
				kleur = "green"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
		}
	}
	else if (gebiedData == leeftijdZeven){
		for (i = 0; i < 23; i++){
			opacityFirst = 0.9;
			opacitySecond = 0.7;
			gebied_i = gebied[i]
			polyLabel = gebiedNaam[i]
			gebiedExtra_i = gebiedExtra[i]
			if (gebiedData[i] >= 7 && gebiedData[i] < 9) {
				kleur = "#fee5d9"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 9 && gebiedData[i] < 11) {
				kleur = "#fcbba1"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 11 && gebiedData[i] < 13) {
				kleur = "#fc9272"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 13 && gebiedData[i] < 15) {
				kleur = "#fb6a4a"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 15 && gebiedData[i] < 24) {
				kleur = "#de2d26"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 24) {
				kleur = "#a50f15"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else {
				opacityFirst = 0.2;
				opacitySecond = 0.1;
				kleur = "green"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
		}
	}

	// als je op knop druk van veiligheid
	else if (gebiedData == veiligheid){
		for (i = 0; i < 23; i++){
			opacityFirst = 0.9;
			opacitySecond = 0.7;
			gebied_i = gebied[i]
			polyLabel = gebiedNaam[i]
			gebiedExtra_i = gebiedExtra[i]
			if (gebiedData[i] >= 55 && gebiedData[i] < 70) {
				kleur = "#1a9850"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 70 && gebiedData[i] < 80) {
				kleur = "#91cf60"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 80 && gebiedData[i] < 90) {
				kleur = "#d9ef8b"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 90 && gebiedData[i] < 100) {
				kleur = "#fee08b"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 100 && gebiedData[i] < 110) {
				kleur = "#fc8d59"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] >= 110) {
				kleur = "#d73027"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else {
				opacityFirst = 0.2;
				opacitySecond = 0.1;
				kleur = "green"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
		}
	}

	// anders
	else if (gebiedData == postcode){
		opacityFirst = 0.2;
		opacitySecond = 0.1;
		for (i = 0; i < 23; i++){
			kleur = "green"
			gebied_i = gebied[i]
			gebiedExtra_i = gebiedExtra[i]
			constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
		}
		kleur = "red"
		gebied_i = OudNoord // if postcode == xxxx xxxx xxxx, dan gebied_i = x
		polyLabel = "Oud-Noord" // same
		constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
	}
	else {
		opacityFirst = 0.2;
		opacitySecond = 0.1;
		for (i = 0; i < 23; i++){
			gebiedExtra_i = gebiedExtra[i]
			kleur = "green"
			gebied_i = gebied[i]
			polyLabel = gebiedNaam[i]
			constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
		}
	}
}


postcode = []
kleurenWoningwaarde = ["#1a9850", "#91cf60", "#d9ef8b", "#fee08b", "#fc8d59", "#d73027"]
kleurenBevolkingsdichtheid = ["#fee5d9", "#fcbba1", "#fc9272", "#fb6a4a", "#de2d26", "#a50f15"]
dataLegendaWoningwaarde = ["1500 - 1800", "1800 - 2100", "2100 - 2500", "2500 - 3000", "3000 - 3500", "3500 - 4000"]
dataLegendaBevolkingsdichtheid = ["1000-1500", "1500-3000", "3000-10000", " 10000-15000", "15000-20000", "20000-30000"]

knoppen = ["woningwaardeKnop", "veiligheidKnop", "bevolkingsdichtheidKnop"]
knoppenText = ["woningwaarde per m\&sup2", "Veiligheid", "Bevolkingsdichtheid"]
knoppenId = []


// functies die aan knoppen zijn gebonden
function woningwaardeKnop() {
	drawLegend(kleurenWoningwaarde, dataLegendaWoningwaarde)
	geefKaart(woningwaardem2)
	document.getElementById("titel").innerHTML = "Woningwaarde per m\&sup2";
}

function veiligheidKnop() {
	geefKaart(veiligheid)
	document.getElementById("titel").innerHTML = "Veiligheid";
	drawLegend(kleurenWoningwaarde, dataLegendaWoningwaarde)
}

function bevolkingsdichtheidKnop() {
	geefKaart(bevolkingsdichtheidkm2)
	document.getElementById("titel").innerHTML = "Bevolkingsdichtheid per km\&sup2";
	drawLegend(kleurenBevolkingsdichtheid, dataLegendaBevolkingsdichtheid)
}

function leeftijdsgroepenKnopEen() {
	geefKaart(leeftijdEen)
	document.getElementById("titel").innerHTML = "Leeftijdsgroep 0-3";
	drawLegend(kleurenBevolkingsdichtheid, dataLegendaBevolkingsdichtheid)
}

function leeftijdsgroepenKnopTwee() {
	geefKaart(leeftijdTwee)
	document.getElementById("titel").innerHTML = "Leeftijdsgroepen 4-12";
	drawLegend(kleurenBevolkingsdichtheid, dataLegendaBevolkingsdichtheid)
}

function leeftijdsgroepenKnopDrie() {
	geefKaart(leeftijdDrie)
	document.getElementById("titel").innerHTML = "Leeftijdsgroepen 12-17";
	drawLegend(kleurenBevolkingsdichtheid, dataLegendaBevolkingsdichtheid)
}

function leeftijdsgroepenKnopVier() {
	geefKaart(leeftijdVier)
	document.getElementById("titel").innerHTML = "Leeftijdsgroepen 18-24";
	drawLegend(kleurenBevolkingsdichtheid, dataLegendaBevolkingsdichtheid)
}

function leeftijdsgroepenKnopVijf() {
	geefKaart(leeftijdVijf)
	document.getElementById("titel").innerHTML = "Leeftijdsgroepen 25-49";
	drawLegend(kleurenBevolkingsdichtheid, dataLegendaBevolkingsdichtheid)
}

function leeftijdsgroepenKnopZes() {
	geefKaart(leeftijdZes)
	document.getElementById("titel").innerHTML = "Leeftijdsgroepen 49-64";
	drawLegend(kleurenBevolkingsdichtheid, dataLegendaBevolkingsdichtheid)
}
function leeftijdsgroepenKnopZeven() {
	geefKaart(leeftijdZeven)
	document.getElementById("titel").innerHTML = "Leeftijdsgroepen 65+";
	drawLegend(kleurenBevolkingsdichtheid, dataLegendaBevolkingsdichtheid)
}

function backTop() {
	smooth_scroll_to(document.body, 0, 1800);			
}

// functie die checkt of een waarde in een array zit
function isInArray(value, array) {
  return array.indexOf(value) > -1;
}


// push allemaal in aparte arrays
// vergelijk 12 en push naar nieuwe array
// vergelijk nieuwe array met 3
var voorkeurWoningwaardeArray = []
var voorkeurAllesName = []
var adviesName = []
var voorkeurVeiligheidName = []
var voorkeurBevolkingsdichtheidName = []
var voorkeurBevolkingsdichtheidArray = []
var voorkeurVeiligheidArray = []
var voorkeurAllesArray = []
var advies = []
var voorkeurWoningwaardeName = []

// indeling gebieden voorkeur 3 = hoog, 2 = gem 1 = laag
var woningwaardeVoorkeur = [3,3,3,2,3,2,2,2,2,3,2,3,3,3,3,2,2,2,2,1,1,1,1]
var bevolkingsdichtheidVoorkeur = [3,2,2,2,3,1,1,1,2,2,1,3,3,3,1,1,1,1,1,1,2,1]
var veiligheidVoorkeur = [3,3,2,3,1,3,2,1,3,1,1,1,2,3,2,2,2,3,3,3,3,2,1]

var voorkeurDictionary = {
	"voorkeurWoningwaardeArray":[],
	"voorkeurBevolkingsdichtheidArray":[],
	"voorkeurVeiligheidArray":[],
	"voorkeurAllesArray":[],
	"advies":[]
};

// functie voor voorkeur verwerken
function voorkeurWoningwaarde(){
	if (document.getElementById("radioVoorkeurWoningwaardeLaag").checked){
		if (voorkeurWoningwaardeArray.length > 0){
			voorkeurWoningwaardeArray = []
			voorkeurWoningwaardeName = []
		}
		for (var i = 0; i < 22; i++){
			if (woningwaardeVoorkeur[i] == 1){
				voorkeurWoningwaardeArray.push(gebiedNaam[i])
				voorkeurWoningwaardeName.push(gebiedExtra[i])
			}
		}
		document.getElementById("radioVoorkeurWoningwaardeLaag").checked = false;
	}
	else if (document.getElementById("radioVoorkeurWoningwaardeGemiddeld").checked){
		if (voorkeurWoningwaardeArray.length > 0){
			voorkeurWoningwaardeArray = []
			voorkeurWoningwaardeName = []
		}	
		for (var i = 0; i < 22; i++){
			if (woningwaardeVoorkeur[i] == 2){
				voorkeurWoningwaardeArray.push(gebiedNaam[i])
				voorkeurWoningwaardeName.push(gebiedExtra[i])
			}
		}
		document.getElementById("radioVoorkeurWoningwaardeGemiddeld").checked = false;
	}	
	else if (document.getElementById("radioVoorkeurWoningwaardeHoog").checked){
		if (voorkeurWoningwaardeArray.length > 0){
			voorkeurWoningwaardeArray = []
			voorkeurWoningwaardeName = []
		}
		for (var i = 0; i <22; i++){
			if (woningwaardeVoorkeur[i] == 3 ){
				voorkeurWoningwaardeArray.push(gebiedNaam[i])
				voorkeurWoningwaardeName.push(gebiedExtra[i])
			}
		}
		document.getElementById("radioVoorkeurWoningwaardeHoog").checked = false;
	}
	else if (document.getElementById("radioVoorkeurWoningwaardeGeen").checked){
		if (voorkeurWoningwaardeArray.length > 0){
			voorkeurWoningwaardeArray = []
			voorkeurWoningwaardeName = []
		}	
		for (var i = 0; i <22; i++){
			voorkeurWoningwaardeArray.push(gebiedNaam[i])
			voorkeurWoningwaardeName.push(gebiedExtra[i])
		}
		document.getElementById("radioVoorkeurWoningwaardeGeen").checked = false;
	}

	else if (document.getElementById("radioVoorkeurBevolkingsdichtheidLaag").checked){
		if (voorkeurBevolkingsdichtheidArray.length > 0){
			voorkeurBevolkingsdichtheidArray = []
			voorkeurBevolkingsdichtheidName = []
		}
		for (var i = 0; i <22; i++){
			if (bevolkingsdichtheidVoorkeur[i] == 1 ){
				voorkeurBevolkingsdichtheidArray.push(gebiedNaam[i])
				voorkeurBevolkingsdichtheidName.push(gebiedExtra[i])
			}
		}
		document.getElementById("radioVoorkeurBevolkingsdichtheidLaag").checked = false;
	}
	else if (document.getElementById("radioVoorkeurBevolkingsdichtheidGemiddeld").checked){
		if (voorkeurBevolkingsdichtheidArray.length > 0){
			voorkeurBevolkingsdichtheidArray = []
			voorkeurBevolkingsdichtheidName = []
		}
		for (var i = 0; i <22; i++){
			if (bevolkingsdichtheidVoorkeur[i] == 2 ){
				voorkeurBevolkingsdichtheidArray.push(gebiedNaam[i])
				voorkeurBevolkingsdichtheidName.push(gebiedExtra[i])
			}
		}
		document.getElementById("radioVoorkeurBevolkingsdichtheidGemiddeld").checked = false;
	}
	else if (document.getElementById("radioVoorkeurBevolkingsdichtheidHoog").checked){
		if (voorkeurBevolkingsdichtheidArray.length > 0){
			voorkeurBevolkingsdichtheidArray = []
			voorkeurBevolkingsdichtheidName = []
		}
		for (var i = 0; i <22; i++){
			if (bevolkingsdichtheidVoorkeur[i] == 3 ){
				voorkeurBevolkingsdichtheidArray.push(gebiedNaam[i])
				voorkeurBevolkingsdichtheidName.push(gebiedExtra[i])
			}
		}
		document.getElementById("radioVoorkeurBevolkingsdichtheidHoog").checked = false;
	}
	else if (document.getElementById("radioVoorkeurBevolkingsdichtheidGeen").checked){
		if (voorkeurBevolkingsdichtheidArray.length > 0){
			voorkeurBevolkingsdichtheidArray = []
			voorkeurBevolkingsdichtheidName = []
		}
		for (var i = 0; i <22; i++){
			voorkeurBevolkingsdichtheidArray.push(gebiedNaam[i])
			voorkeurBevolkingsdichtheidName.push(gebiedExtra[i])
		}
		document.getElementById("radioVoorkeurBevolkingsdichtheidGeen").checked = false;
	}	
	else if (document.getElementById("radioVoorkeurVeiligheidLaag").checked){
		if (voorkeurVeiligheidArray.length > 0){
			voorkeurVeiligheidArray = []
			voorkeurVeiligheidName = []
		}
		for (var i = 0; i <22; i++){
			if (veiligheidVoorkeur[i] == 1 ){
				voorkeurVeiligheidArray.push(gebiedNaam[i])
				voorkeurVeiligheidName.push(gebiedExtra[i])
			}
		}
		document.getElementById("radioVoorkeurVeiligheidLaag").checked = false;
	}
	else if (document.getElementById("radioVoorkeurVeiligheidGemiddeld").checked){
		if (voorkeurVeiligheidArray.length > 0){
			voorkeurVeiligheidArray = []
			voorkeurVeiligheidName = []
		}
		for (var i = 0; i <22; i++){
			if (veiligheidVoorkeur[i] == 2 ){
				voorkeurVeiligheidArray.push(gebiedNaam[i])
				voorkeurVeiligheidName.push(gebiedExtra[i])
			}
		}
		document.getElementById("radioVoorkeurVeiligheidGemiddeld").checked = false;
	}
	else if (document.getElementById("radioVoorkeurVeiligheidHoog").checked){
		if (voorkeurVeiligheidArray.length > 0){
			voorkeurVeiligheidArray = []
			voorkeurVeiligheidName = []
		}
		for (var i = 0; i <22; i++){
			if (veiligheidVoorkeur[i] == 3 ){
				voorkeurVeiligheidArray.push(gebiedNaam[i])
				voorkeurVeiligheidName.push(gebiedExtra[i])
			}
		}
		document.getElementById("radioVoorkeurVeiligheidHoog").checked = false;
	}
	else if (document.getElementById("radioVoorkeurVeiligheidGeen").checked){
		if (voorkeurVeiligheidArray.length > 0){
			voorkeurVeiligheidArray = []
			voorkeurVeiligheidName = []
		}
		for (var i = 0; i <22; i++){
			voorkeurVeiligheidArray.push(gebiedNaam[i])
			voorkeurVeiligheidName.push(gebiedExtra[i])
		}
		document.getElementById("radioVoorkeurVeiligheidGeen").checked = false;
	}	

	if (voorkeurWoningwaardeArray.length > 0 && voorkeurVeiligheidArray.length > 0 && voorkeurVeiligheidArray.length > 0){
		for (var i = 0; i < voorkeurWoningwaardeArray.length; i++){
			if (isInArray(voorkeurWoningwaardeArray[i], voorkeurBevolkingsdichtheidArray)){
				voorkeurAllesArray.push(voorkeurWoningwaardeArray[i])
				voorkeurAllesName.push(voorkeurWoningwaardeName[i])
			}
			if (isInArray(voorkeurVeiligheidArray[i], voorkeurAllesArray)){
				advies.push(voorkeurVeiligheidArray[i])
				adviesName.push(voorkeurVeiligheidName[i])
				document.getElementById("textAreaAdvies").innerHTML = "Jouw voorkeur komt overeen met: \n"+ advies;
				geefKaart(advies)
				document.getElementById("titel").innerHTML = "Voorkeur";
			}
		}
	}
}