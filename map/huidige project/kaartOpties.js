var kaartOpties = {
	center: BASIS_CENTRUM_LATLNG,
	zoom: BASIS_INZOOM,
	mapTypeControlOptions: {
		maptypeIds: ['BASISTOPO']
	}
};

function geefKaart(gebiedData) {
	var map = new google.maps.Map(document.getElementById('map_canvas'), kaartOpties);
	map.mapTypes.set('BASISTOPO, basisTopoMapType')
	map.data.loadGeoJson('https://storage.googleapis.com/maps-devrel/google.json');

	// construct the polygon with labels
	function constructPolygon(x, y, polyLabel, opacityFirst, opacitySecond, gebiedExtra) {
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

		var bermudaTriangle = new google.maps.Polygon({
		    paths: x,
		    strokeColor: 'black',
		    strokeOpacity: 0.7,
		    strokeWeight: 1,
		    fillColor: y,
		    fillOpacity: opacitySecond
		  });
	  	bermudaTriangle.setMap(map);

	  	// event listener -> mouseover
	  	google.maps.event.addListener(bermudaTriangle,"mouseover",function(e){
			this.setOptions({fillColor: y, fillOpacity: opacityFirst});
			marker.setPosition(e.latLng);
        	marker.setVisible(true);
		}); 

	  	// event listener -> mouseout
		google.maps.event.addListener(bermudaTriangle,"mouseout",function(e){
			this.setOptions({fillColor: y, fillOpacity: opacitySecond});
			marker.setVisible(false);
		});

		// event listener -> click
		google.maps.event.addListener(bermudaTriangle,"click",function(e){
			d3.select("svg").remove()	
			d3.select("svg").remove()	
			d3.select("svg").remove()
			d3Bar()
			// window.scroll(0,1000)
			smooth_scroll_to(document.body, 1000, 1800);
			document.getElementById("p2").innerHTML = polyLabel;
			function verhaalGebied(gebiedNaam){
				var imageMap = ["CentrumWestMap", "CentrumOostMap", "WesterparkMap", "BOLOMap", "OudWestDeBaarsjesMap", 
				"GeuzenveldSlotermeerMap", "OsdorpMap", "DeAkerNieuwSlotenMap", "SlotervaartMap", "OudZuidMap", "BuitenveldertZuidasMap", 
				"DePijpRivierenbuurtMap", "OudOostMap", "IndischeBuurtOostelijkHavengebiedMap", "WatergraafsmeerMap", "IJburgZeeburgereilandMap", 
				"NoordWestMap", "OudNoordMap", "NoordOostMap", "BijlmerCentrumMap", "BijlmerOostMap", "GaasperdamDriemondMap", "WestpoortMap"]
				for (var i = 0; i < 23; i++){
					if (polyLabel == gebiedNaam[i]){
						console.log(imageMap[i])
						image = imageMap[i]
						document.getElementById("p3").innerHTML = verhalen[i]
						showImage(image)
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

	// // namen van gebieden
	// gebiedNaam = ["Noord-West", "Noord-Oost", "Oud-Noord", "Westpoort", "Geuzenveld/Slotermeer", "YOLO IN BOLO", "Westerpark", "Centrum-West", 
	// "Centrum-Oost", "Indische Buurt/Oostelijk Havengebied", "IJburg/Zeeburgereiland", "Oud-Oost", "Watergraafsmeer", "De Pijp/ Rivierenbuurt", 
	// "Oud-Zuid", "Oud-West/ De Baarsjes", "Slotervaart", "Osdorp", "De Aker/ Nieuwsloten", "Buitenveldert/ Zuidas", "Bijlmer-Centrum",
	//  "Gaasperdam/ Driemond", "Bijlmer-Oost"]
	
	// var kleurMap = ["#1a9850", "#91cf60", "#d9ef8b", "#fee08b", "#fc8d59", "#d73027", "green"]	
	// var grenzen = [1700, 1800, 2100, 2500, 3000, 3500, 4200]
	// var opacityFirst = 0.9;
	// var opacitySecond = 0.7;

	// for (var i = 0; i < 23; i++){
	// 	gebied_i = gebied[i]
	// 	polyLabel = gebiedNaam[i]
	// 	gebiedExtra_i = gebiedExtra[i]
	// 	console.log(gebiedData[i])
	// 	if (gebiedData[i] > grenzen[0] && < grenzen[1]) {
	// 		constructPolygon(gebied_i, kleurMap[0], polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
	// 	}
	// 	else if (gebiedData[i] > grenzen[1] && gebiedData[i] < grenzen[2]) {
	// 		constructPolygon(gebied_i, kleurMap[1], polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
	// 	}
	// 	else if (gebiedData[i] > grenzen[2] && gebiedData[i] < grenzen[3]) {
	// 		constructPolygon(gebied_i, kleurMap[2], polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
	// 	}
	// 	else if (gebiedData[i] > grenzen[3] && gebiedData[i] < grenzen[4]) {
	// 		constructPolygon(gebied_i, kleurMap[3], polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
	// 	}
	// 	else if (gebiedData[i] > grenzen[4] && gebiedData[i] < grenzen[5]) {
	// 		constructPolygon(gebied_i, kleurMap[4], polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
	// 	}
	// 	else if (gebiedData[i] > grenzen[5] && gebiedData[i] < grenzen[6]) {
	// 		constructPolygon(gebied_i, kleurMap[5], polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
	// 	}
	// 	else {
	// 		opacityFirst = 0.2;
	// 		opacitySecond = 0.1;
	// 		constructPolygon(gebied_i, kleurMap[6], polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
	// 	}
	// }



	// loop door alle gebieden en vul kaart in
	// als je op knop drukt voor woningwaarde
	opacityFirst = 0.9;
	opacitySecond = 0.7;
	if (gebiedData == woningwaardem2){
		for (i = 0; i < 23; i++){
			gebied_i = gebied[i]
			polyLabel = gebiedNaam[i]
			gebiedExtra_i = gebiedExtra[i]
			opacityFirst = 0.9;
			opacitySecond = 0.7;
			if (gebiedData[i] < 1800) {
				kleur = "#1a9850"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 1800 && gebiedData[i] < 2100) {
				kleur = "#91cf60"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 2100 && gebiedData[i] < 2500) {
				kleur = "#d9ef8b"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 2500 && gebiedData[i] < 3000) {
				kleur = "#fee08b"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 3000 && gebiedData[i] < 3500) {
				kleur = "#fc8d59"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 3500 && gebiedData[i] < 4200) {
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
			gebied_i = gebied[i]
			polyLabel = gebiedNaam[i]
			gebiedExtra_i = gebiedExtra[i]
			if (gebiedData[i] > 1000 && gebiedData[i] < 1500) {
				kleur = "#fee5d9"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 1499 && gebiedData[i] < 3000) {
				kleur = "#fcbba1"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 2999 && gebiedData[i] < 10000) {
				kleur = "#fc9272"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 9999 && gebiedData[i] < 15000) {
				kleur = "#fb6a4a"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 14999 && gebiedData[i] < 20000) {
				kleur = "#de2d26"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 20000) {
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

	else if (gebiedData == leeftijdEen){
		for (i = 0; i < 23; i++){
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
			gebied_i = gebied[i]
			polyLabel = gebiedNaam[i]
			gebiedExtra_i = gebiedExtra[i]
			if (gebiedData[i] > 0.99 && gebiedData[i] < 1.5) {
				kleur = "#fee5d9"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 1.5 && gebiedData[i] < 2.5) {
				kleur = "#fcbba1"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 2.5 && gebiedData[i] < 3.0) {
				kleur = "#fc9272"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 3.5 && gebiedData[i] < 3.5) {
				kleur = "#fb6a4a"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 3.5 && gebiedData[i] < 4.5) {
				kleur = "#de2d26"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 4.5) {
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
			gebied_i = gebied[i]
			polyLabel = gebiedNaam[i]
			gebiedExtra_i = gebiedExtra[i]
			if (gebiedData[i] > 32 && gebiedData[i] < 33) {
				kleur = "#fee5d9"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 33 && gebiedData[i] < 35) {
				kleur = "#fcbba1"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 35 && gebiedData[i] < 40) {
				kleur = "#fc9272"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 40 && gebiedData[i] < 45) {
				kleur = "#fb6a4a"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 45 && gebiedData[i] < 50) {
				kleur = "#de2d26"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 50) {
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
			gebied_i = gebied[i]
			polyLabel = gebiedNaam[i]
			gebiedExtra_i = gebiedExtra[i]
			if (gebiedData[i] > 12 && gebiedData[i] < 15) {
				kleur = "#fee5d9"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 15 && gebiedData[i] < 18) {
				kleur = "#fcbba1"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 18 && gebiedData[i] < 21) {
				kleur = "#fc9272"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 21 && gebiedData[i] < 23) {
				kleur = "#fb6a4a"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 23 && gebiedData[i] < 26) {
				kleur = "#de2d26"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 26) {
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
			gebied_i = gebied[i]
			polyLabel = gebiedNaam[i]
			gebiedExtra_i = gebiedExtra[i]
			if (gebiedData[i] > 7 && gebiedData[i] < 10) {
				kleur = "#fee5d9"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 10 && gebiedData[i] < 13) {
				kleur = "#fcbba1"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 13 && gebiedData[i] < 16) {
				kleur = "#fc9272"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 16 && gebiedData[i] < 20) {
				kleur = "#fb6a4a"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 10 && gebiedData[i] < 24) {
				kleur = "#de2d26"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 24) {
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
	else if (gebiedData == veiligheid){
		for (i = 0; i < 23; i++){
			gebied_i = gebied[i]
			polyLabel = gebiedNaam[i]
			gebiedExtra_i = gebiedExtra[i]
			if (gebiedData[i] > 55 && gebiedData[i] < 70) {
				kleur = "#fee5d9"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 70 && gebiedData[i] < 80) {
				kleur = "#fcbba1"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 80 && gebiedData[i] < 90) {
				kleur = "#fc9272"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 90 && gebiedData[i] < 100) {
				kleur = "#fb6a4a"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 100 && gebiedData[i] < 110) {
				kleur = "#de2d26"
				constructPolygon(gebied_i, kleur, polyLabel, opacityFirst, opacitySecond, gebiedExtra_i)
			}
			else if (gebiedData[i] > 110) {
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

// woningwaarde = [2220, 2119, 2562, 1854, 2179, 2881, 3617, 4194, 3897, 3098, 2755, 3272, 3293, 3813, 4027]
// huishoudenstypenData = [2220, 2119, 2562, 1854, 2179, 2881, 3617, 4194, 3897, 3098, 2755, 3272, 3293, 3813, 4027]
// bevolkingsdichtheidData = [2220, 2119, 2562, 1854, 2179, 2881, 3617, 4194, 3897, 3098, 2755, 3272, 3293, 3813, 4027]
postcode = []
kleurenWoningwaarde = ["#1a9850", "#91cf60", "#d9ef8b", "#fee08b", "#fc8d59", "#d73027"]
kleurenBevolkingsdichtheid = ["#fee5d9", "#fcbba1", "#fc9272", "#fb6a4a", "#de2d26", "#a50f15"]
dataLegendaWoningwaarde = ["1500 - 1800", "1800 - 2100", "2100 - 2500", "2500 - 3000", "3000 - 3500", "3500 - 4000"]
dataLegendaBevolkingsdichtheid = ["1000-1500", "1500-3000", "3000-10000", " 10000-15000", "15000-20000", "20000-30000"]

knoppen = ["woningwaardeKnop", "veiligheidKnop", "bevolkingsdichtheidKnop"]
knoppenText = ["woningwaarde per m\&sup2", "Veiligheid", "Bevolkingsdichtheid"]
knoppenId = []

// werkt pas bij tweede klik

// function knop() {
// 	for (var i = 0; i <3; i++){
// 		document.getElementById(knoppen[i]).onclick = function() {
//    			geefKaart(woningwaardem2)
//    			drawLegend(kleurenWoningwaarde, dataLegendaWoningwaarde)
// 			document.getElementById("p1").innerHTML = knoppenText[i];
// 		};

// 	}
// }

function woningwaardeKnop() {
	drawLegend(kleurenWoningwaarde, dataLegendaWoningwaarde)
	geefKaart(woningwaardem2)
	document.getElementById("p1").innerHTML = "Woningwaarde per m\&sup2";
}

function veiligheidKnop() {
	geefKaart(veiligheid)
	document.getElementById("p1").innerHTML = "Veiligheid";
	drawLegend(kleurenWoningwaarde, dataLegendaWoningwaarde)
}

function bevolkingsdichtheidKnop() {
	geefKaart(bevolkingsdichtheidkm2)
	document.getElementById("p1").innerHTML = "Bevolkingsdichtheid per km\&sup2";
	drawLegend(kleurenBevolkingsdichtheid, dataLegendaBevolkingsdichtheid)
}

function leeftijdsgroepenKnopEen() {
	geefKaart(leeftijdEen)
	document.getElementById("p1").innerHTML = "Leeftijdsgroep 0-3";
}

function leeftijdsgroepenKnopTwee() {
	geefKaart(leeftijdTwee)
	document.getElementById("p1").innerHTML = "Leeftijdsgroepen 4-12";
}

function leeftijdsgroepenKnopDrie() {
	geefKaart(leeftijdDrie)
	document.getElementById("p1").innerHTML = "Leeftijdsgroepen 12-17";
}

function leeftijdsgroepenKnopVier() {
	geefKaart(leeftijdVier)
	document.getElementById("p1").innerHTML = "Leeftijdsgroepen 18-24";
}

function leeftijdsgroepenKnopVijf() {
	geefKaart(leeftijdVijf)
	document.getElementById("p1").innerHTML = "Leeftijdsgroepen 25-49";
}

function leeftijdsgroepenKnopZes() {
	geefKaart(leeftijdZes)
	document.getElementById("p1").innerHTML = "Leeftijdsgroepen 49-64";
}
function leeftijdsgroepenKnopZeven() {
	geefKaart(leeftijdZeven)
	document.getElementById("p1").innerHTML = "Leeftijdsgroepen 65+";
}

// function postcodeFunction() {
// 	if (document.getElementById("inputPostcode").value == "1031"){
// 		postcode.push(1031)
// 		geefKaart(postcode)
// 		d3Bar()
// 	}
// }

function backTop() {
	smooth_scroll_to(document.body, 0, 1800);			
	// window.scroll(0,0)
	// location.reload();
}

// var idRadio = [radioVoorkeurWoningwaardeLaag, radioVoorkeurWoningwaardeGemiddeld, radioVoorkeurWoningwaardeHoog,radioVoorkeurWoningwaardeGeen, 
// 	radioVoorkeurBevolkingsdichtheidLaag, radioVoorkeurBevolkingsdichtheidGemiddeld, radioVoorkeurBevolkingsdichtheidHoog, radioVoorkeurBevolkingsdichtheidGeen, 
// 	radioVoorkeurVeiligheidLaag, radioVoorkeurVeiligheidGemiddeld, radioVoorkeurVeiligheidHoog, radioVoorkeurVeiligheidGeen]


function arrHasDupes(A) {                          // finds any duplicate array elements using the fewest possible comparison
	var n=A.length;
                                                     // to ensure the fewest possible comparisons
	for (var i=0; i<n; i++) {                        // outer loop uses each item i at 0 through n
		for (var j=i+1; j<n; j++) {              // inner loop only compares items j at i+1 to n
			if (A[i]==A[j]){
				dupArray.push(A[i])	
			}
		}	
	}
	document.getElementById("p4").innerHTML = dupArray;
}

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}


// push allemaal in aparte arrays
// vergelijk 12 en push naar nieuwe array
// vergelijk nieuwe array met 3

var voorkeurWoningwaardeArray = []
var voorkeurBevolkingsdichtheidArray = []
var voorkeurVeiligheidArray = []
var voorkeurAllesArray = []
var advies = []

var woningwaardeVoorkeur = [1, 1, 1, 2, 2, 2, 3, 3, 3, 1, 1, 1, 2, 2, 2, 3, 3, 3, 1, 1, 1, 2 ]
var bevolkingsdichtheidVoorkeur = [1, 3, 3, 2, 2, 2, 1, 1, 1, 3, 3, 3, 2, 2, 2, 1, 1, 1, 3, 3, 1, 1]
var veiligheidVoorkeur = [1, 2, 2, 1, 1, 1, 1, 1, 1, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 3]

	function voorkeurWoningwaarde() {
	var arrays = []
	d3.tsv("arrays.tsv", function(data) {
				for (j = 0; j < 12; j++){
					data[j].arrays = data[j].arrays.split(" ")
					arrays.push(data[j].arrays)
				}
				console.log(arrays)
			});

		var radioId = ["radioVoorkeurWoningwaardeLaag", "radioVoorkeurWoningwaardeGemiddeld", "radioVoorkeurWoningwaardeHoog", "radioVoorkeurWoningwaardeGeen", "radioVoorkeurBevolkingsdichtheidLaag",
				"radioVoorkeurBevolkingsdichtheidGemiddeld", "radioVoorkeurBevolkingsdichtheidHoog", "radioVoorkeurBevolkingsdichtheidGeen", "radioVoorkeurVeiligheidLaag", "radioVoorkeurVeiligheidGemiddeld",
				"radioVoorkeurVeiligheidHoog", "radioVoorkeurVeiligheidGeen"]
		for (var i = 0; i < 12; i++){
			array = arrays[i].split(" ")
			if (document.getElementById(radioId[i]).checked){
				if (array.length > 0){
					array = []
				}
				for (var i = 0; i < 22; i++){
					if (woningwaardeVoorkeur[i] == 1){
						array.push(gebiedNaam[i])
					}
				}
				document.getElementById("radioVoorkeurWoningwaardeLaag").checked = false;
			}
		}
		if (voorkeurWoningwaardeArray.length > 0 && voorkeurVeiligheidArray.length > 0 && voorkeurVeiligheidArray.length > 0){
			// console.log("assholes")
		for (var i = 0; i < voorkeurWoningwaardeArray.length; i++){
			if (isInArray(voorkeurWoningwaardeArray[i], voorkeurBevolkingsdichtheidArray)){
				if (voorkeurAllesArray.length > 0){
					voorkeurAllesArray = []
				}
				voorkeurAllesArray.push(voorkeurWoningwaardeArray[i])
				console.log(voorkeurAllesArray)
			}
			if (isInArray(voorkeurVeiligheidArray[i], voorkeurAllesArray)){
				if (advies.length > 0){
					advies = []
				}
				advies.push(voorkeurVeiligheidArray[i])
				console.log(voorkeurVeiligheidArray[i])
				console.log(advies)
				document.getElementById("p5").innerHTML = advies;
			}
		}
	}
	}

// function voorkeurWoningwaarde(){
// 	if (document.getElementById("radioVoorkeurWoningwaardeLaag").checked){
// 		if (voorkeurWoningwaardeArray.length > 0){
// 			voorkeurWoningwaardeArray = []
// 		}
// 		for (var i = 0; i < 22; i++){
// 			if (woningwaardeVoorkeur[i] == 1){
// 				voorkeurWoningwaardeArray.push(gebiedNaam[i])
// 			}
// 		}
// 		document.getElementById("radioVoorkeurWoningwaardeLaag").checked = false;
// 	}
// 	else if (document.getElementById("radioVoorkeurWoningwaardeGemiddeld").checked){
// 		for (var i = 0; i < 22; i++){
// 			if (woningwaardeVoorkeur[i] == 2){
// 				voorkeurWoningwaardeArray.push(gebiedNaam[i])
// 			}
// 		}
// 		document.getElementById("radioVoorkeurWoningwaardeGemiddeld").checked = false;
// 	}	
// 	else if (document.getElementById("radioVoorkeurWoningwaardeHoog").checked){
// 		for (var i = 0; i <22; i++){
// 			if (woningwaardeVoorkeur[i] == 3 ){
// 				voorkeurWoningwaardeArray.push(gebiedNaam[i])
// 			}
// 		}
// 		document.getElementById("radioVoorkeurWoningwaardeHoog").checked = false;
// 	}
// 	else if (document.getElementById("radioVoorkeurWoningwaardeGeen").checked){
// 		for (var i = 0; i <22; i++){
// 			voorkeurWoningwaardeArray.push(gebiedNaam[i])
// 		}
// 		document.getElementById("radioVoorkeurWoningwaardeGeen").checked = false;
// 	}

// 	else if (document.getElementById("radioVoorkeurBevolkingsdichtheidLaag").checked){
// 		if (voorkeurBevolkingsdichtheidArray.length > 0){
// 			voorkeurBevolkingsdichtheidArray = []
// 		}
// 		for (var i = 0; i <22; i++){
// 			if (bevolkingsdichtheidVoorkeur[i] == 1 ){
// 				voorkeurBevolkingsdichtheidArray.push(gebiedNaam[i])
// 			}
// 		}
// 		document.getElementById("radioVoorkeurBevolkingsdichtheidLaag").checked = false;
// 	}
// 	else if (document.getElementById("radioVoorkeurBevolkingsdichtheidGemiddeld").checked){
// 		for (var i = 0; i <22; i++){
// 			if (bevolkingsdichtheidVoorkeur[i] == 2 ){
// 				voorkeurBevolkingsdichtheidArray.push(gebiedNaam[i])
// 			}
// 		}
// 		document.getElementById("radioVoorkeurBevolkingsdichtheidGemiddeld").checked = false;
// 	}
// 	else if (document.getElementById("radioVoorkeurBevolkingsdichtheidHoog").checked){
// 		for (var i = 0; i <22; i++){
// 			if (bevolkingsdichtheidVoorkeur[i] == 3 ){
// 				voorkeurBevolkingsdichtheidArray.push(gebiedNaam[i])
// 			}
// 		}
// 		document.getElementById("radioVoorkeurBevolkingsdichtheidHoog").checked = false;
// 	}
// 	else if (document.getElementById("radioVoorkeurBevolkingsdichtheidGeen").checked){
// 		for (var i = 0; i <22; i++){
// 			voorkeurBevolkingsdichtheidArray.push(gebiedNaam[i])
// 		}
// 		document.getElementById("radioVoorkeurBevolkingsdichtheidGeen").checked = false;
// 	}	
// 	else if (document.getElementById("radioVoorkeurVeiligheidLaag").checked){
// 		if (voorkeurVeiligheidArray.length > 0){
// 			voorkeurVeiligheidArray = []
// 		}
// 		for (var i = 0; i <22; i++){
// 			if (veiligheidVoorkeur[i] == 1 ){
// 				voorkeurVeiligheidArray.push(gebiedNaam[i])
// 			}
// 		}
// 		document.getElementById("radioVoorkeurVeiligheidLaag").checked = false;
// 	}
// 	else if (document.getElementById("radioVoorkeurVeiligheidGemiddeld").checked){
// 		for (var i = 0; i <22; i++){
// 			if (veiligheidVoorkeur[i] == 2 ){
// 				voorkeurVeiligheidArray.push(gebiedNaam[i])
// 			}
// 		}
// 		document.getElementById("radioVoorkeurVeiligheidGemiddeld").checked = false;
// 	}
// 	else if (document.getElementById("radioVoorkeurVeiligheidHoog").checked){
// 		for (var i = 0; i <22; i++){
// 			if (veiligheidVoorkeur[i] == 3 ){
// 				voorkeurVeiligheidArray.push(gebiedNaam[i])
// 			}
// 		}
// 		document.getElementById("radioVoorkeurVeiligheidHoog").checked = false;
// 	}
// 	else if (document.getElementById("radioVoorkeurVeiligheidGeen").checked){
// 		for (var i = 0; i <22; i++){
// 			voorkeurVeiligheidArray.push(gebiedNaam[i])
// 		}
// 		document.getElementById("radioVoorkeurVeiligheidGeen").checked = false;
// 	}	

// 	if (voorkeurWoningwaardeArray.length > 0 && voorkeurVeiligheidArray.length > 0 && voorkeurVeiligheidArray.length > 0){
// 		for (var i = 0; i < voorkeurWoningwaardeArray.length; i++){
// 			if (isInArray(voorkeurWoningwaardeArray[i], voorkeurBevolkingsdichtheidArray)){
// 				if (voorkeurAllesArray.length > 0){
// 					voorkeurAllesArray = []
// 				}
// 				voorkeurAllesArray.push(voorkeurWoningwaardeArray[i])
// 				console.log(voorkeurAllesArray)
// 			}
// 			if (isInArray(voorkeurVeiligheidArray[i], voorkeurAllesArray)){
// 				if (advies.length > 0){
// 					advies = []
// 				}
// 				advies.push(voorkeurVeiligheidArray[i])
// 				console.log(voorkeurVeiligheidArray[i])
// 				console.log(advies)
// 				document.getElementById("p5").innerHTML = advies;
// 			}
// 		}
// 	}
// }


// function showImage(IdImage){
//     document.getElementById(IdImage).style.visibility="visible";
// }	

// function hideImage(IdImage){
// 	document.getElementById(IdImage).style.visibility="hidden";
// }
