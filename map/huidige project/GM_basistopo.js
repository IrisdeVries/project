var BASIS_TEGEL_URL_PRE = "HTTP://TILES";
var BASIS_TEGEL_URL_POST = ".opdekaart.amsterdam.nl/tegels/";

var BASIS_MINZOOM = 11;
var BASIS_MAXZOOM = 13;
var BASIS_INZOOM = 12;

var BASIS_CENTRUM_LATLNG = new google.maps.LatLng(52.3518055, 4.89514305);
var BASIS_TILESIZE = 256;
var BASIS_FORMAAT_EXT = ".png";

var BASIS_TOPONAME = 'topografie';

var LOADBALANCERAANTAL = 3;
var loadbalancerTeller = 1;

var basisTopoMapTypeOptions = {
	getTileUrl: function (coord, zoom){
		BASIS_TEGEL_URL = BASIS_TEGEL_URL_PRE + loadbalancerTeller + BASIS_TEGEL_URL_POST;

		loadbalancerTeller += 1;

		if (loadbalancerTeller => LOADBALANCERAANTAL){loadbalencerTeller = 1};

		return BASIS_TEGEL_URL + "merc_topo/" + zoom + "/" + coord.x + "_" + coord.y + BASIS_FORMAAT_EXT;
	},
	TileSize: new google.maps.Size(BASIS_TILESIZE, BASIS_TILESIZE),
	maxZoom: BASIS_MAXZOOM,
	minZoom: BASIS_MINZOOM,
	name: BASIS_TOPONAME	
};
console.log(basisTopoMapTypeOptions)
var basisTopoMapType = new google.maps.ImageMapType(basisTopoMapTypeOptions);