// Initialize the map and set its view to our chosen geographical coordinates and a zoom level
var map = L.map('map', {
minZoom: 12, // Set the minimum zoom level
maxBoundsViscosity: 1.0, // Make the bounds "sticky"
}).setView([48.210033, 16.363449], 13); //Set view to Vienna
// Set the maximum bounds of the map
map.setMaxBounds([
[48.125, 16.175], // Southwest coordinates
[48.285, 16.550] // Northeast coordinates
]);

//initialize MarkerIcons
var size = [38, 50];

var icons = {
    booksharingMarker: L.icon({
        iconUrl: 'booksharingMarker.png',
        iconSize: size,
        iconAnchor: [15, 40],
        popupAnchor: [5, -35]
    }),
    foodsharingMarker: L.icon({
        iconUrl: 'foodsharingMarker.png',
        iconSize: size,
        iconAnchor: [15, 40],
        popupAnchor: [5, -35]
    }),
    parkletMarker: L.icon({
        iconUrl: 'parkletMarker.png',
        iconSize: size,
        iconAnchor: [15, 40],
        popupAnchor: [5, -35]
    }),
    workingTogetherMarker: L.icon({
        iconUrl: 'workingTogetherMarker.png',
        iconSize: size, 
        iconAnchor: [15, 40], 
        popupAnchor: [5, -35] 
    }),
    urbanGardeningMarker: L.icon({
        iconUrl: 'urbanGardeningMarker.png',
        iconSize: size,
        iconAnchor: [15, 40],
        popupAnchor: [5, -35]
    }),
    urbanSpaceMarker: L.icon({
        iconUrl: 'urbanSpaceMarker.png',
        iconSize: size,
        iconAnchor: [15, 40],
        popupAnchor: [5, -35]
    })
};

var biggerSize = [38, 50];
var outlineIcons = {
    booksharingMarker: L.icon({
        iconUrl: 'booksharingOutlineMarker.png',
        iconSize: biggerSize,
        iconAnchor: [15, 40],
        popupAnchor: [5, -35]
    }),
    foodsharingMarker: L.icon({
        iconUrl: 'foodsharingOutlineMarker.png',
        iconSize: biggerSize,
        iconAnchor: [15, 40],
        popupAnchor: [5, -35]
    }),
    parkletMarker: L.icon({
        iconUrl: 'parkletOutlineMarker.png',
        iconSize: biggerSize,
        iconAnchor: [15, 40],
        popupAnchor: [5, -35]
    }),
    workingTogetherMarker: L.icon({
        iconUrl: 'workingTogetherOutlineMarker.png',
        iconSize: biggerSize, 
        iconAnchor: [15, 40], 
        popupAnchor: [5, -35] 
    }),
    urbanGardeningMarker: L.icon({
        iconUrl: 'urbanGardeningOutlineMarker.png',
        iconSize: biggerSize,
        iconAnchor: [15, 40],
        popupAnchor: [5, -35]
    }),
    urbanSpaceMarker: L.icon({
        iconUrl: 'urbanSpaceOutlineMarker.png',
        iconSize: biggerSize,
        iconAnchor: [15, 40],
        popupAnchor: [5, -35]
    })
};

//Get the content from GeoJSON files

//booksharing
var booksharing = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"@id":"node/617152862","amenity":"public_bookcase","description":"Bücher- und Dingetausch Schrank"},"geometry":{"type":"Point","coordinates":[16.35687,48.188111]},"id":"A5MzQ"},{"type":"Feature","properties":{"@id":"node/1298502479","amenity":"public_bookcase","website":"https://www.offener-buecherschrank.at/alsergrund-heinz-heger-park/","wheelchair":"yes"},"geometry":{"type":"Point","coordinates":[16.343401,48.216737]},"id":"A0ODY"},{"type":"Feature","properties":{"@id":"node/5520039186","amenity":"public_bookcase","covered":"booth"},"geometry":{"type":"Point","coordinates":[16.532202,48.249098]},"id":"E5NTk"},{"type":"Feature","properties":{"@id":"node/6234527052","amenity":"public_bookcase","check_date":"2021-06-04"},"geometry":{"type":"Point","coordinates":[16.400764,48.261913]},"id":"Y3Mjg"},{"type":"Feature","properties":{"@id":"node/6343483069","amenity":"public_bookcase","check_date":"2022-05-30","wikimedia_commons":"File:Buecherschrank Sobieskiplatz Wien.jpg"},"geometry":{"type":"Point","coordinates":[16.353397,48.22678]},"id":"gwMjI"},{"type":"Feature","properties":{"@id":"node/6685658414","amenity":"public_bookcase","check_date":"2022-09-24","lit":"no","opening_hours":"24/7","operator":"MIGRA, ARWAG &amp; Schwarzatal","public_bookcase:type":"wooden_cabinet","wheelchair":"yes"},"geometry":{"type":"Point","coordinates":[16.422297,48.17888]},"id":"A2NDI"},{"type":"Feature","properties":{"@id":"node/8296168262","amenity":"public_bookcase"},"geometry":{"type":"Point","coordinates":[16.385705,48.223006]},"id":"M3ODE"},{"type":"Feature","properties":{"@id":"node/8361274062","amenity":"public_bookcase","check_date":"2024-01-15","opening_hours":"24/7","public_bookcase:type":"phone_box"},"geometry":{"type":"Point","coordinates":[16.303583,48.196487]},"id":"A5Nzg"},{"type":"Feature","properties":{"@id":"node/8530699046","amenity":"public_bookcase","check_date":"2023-09-23"},"geometry":{"type":"Point","coordinates":[16.331406,48.212397]},"id":"A4ODc"},{"type":"Feature","properties":{"@id":"node/8569193717","amenity":"public_bookcase","check_date":"2024-03-02","colour":"grey","public_bookcase:type":"phone_box"},"geometry":{"type":"Point","coordinates":[16.283676,48.176612]},"id":"kxNTI"},{"type":"Feature","properties":{"@id":"node/8821312537","amenity":"public_bookcase"},"geometry":{"type":"Point","coordinates":[16.485887,48.241401]},"id":"ExODc"},{"type":"Feature","properties":{"@id":"node/8898359352","amenity":"public_bookcase","opening_hours":"\"in den Öffnungszeiten den Mistplatzes\"","operator":"Mistplatz Hetzendorf"},"geometry":{"type":"Point","coordinates":[16.304119,48.161042]},"id":"E2MDA"},{"type":"Feature","properties":{"@id":"node/8934158076","amenity":"public_bookcase","operator":"Pfadfindergruppe Wien 39","public_bookcase:type":"phone_box"},"geometry":{"type":"Point","coordinates":[16.267782,48.187992]},"id":"k0ODE"},{"type":"Feature","properties":{"@id":"node/9084869397","amenity":"public_bookcase","colour":"dark red","man_made":"telephone_box","public_bookcase:type":"phone_box"},"geometry":{"type":"Point","coordinates":[16.362624,48.185717]},"id":"I2Mjk"},{"type":"Feature","properties":{"@id":"node/9085056068","amenity":"public_bookcase","man_made":"telephone_box","public_bookcase:type":"phone_box"},"geometry":{"type":"Point","coordinates":[16.464151,48.15459]},"id":"A3ODc"},{"type":"Feature","properties":{"@id":"node/9445063190","amenity":"public_bookcase","location":"outdoor","operator":"MA48","public_bookcase:type":"phone_box","wikimedia_commons":"File:Offener Bücherschrank der MA48 am Schuhmeierplatz, Vienna.jpg"},"geometry":{"type":"Point","coordinates":[16.319478,48.210405]},"id":"I1MzU"},{"type":"Feature","properties":{"@id":"node/9471548018","amenity":"public_bookcase","public_bookcase:type":"phone_box","survey:date":"2022-02-03"},"geometry":{"type":"Point","coordinates":[16.363645,48.189816]},"id":"A0NjI"},{"type":"Feature","properties":{"@id":"node/9580761029","amenity":"public_bookcase"},"geometry":{"type":"Point","coordinates":[16.316939,48.2212]},"id":"U0ODQ"},{"type":"Feature","properties":{"@id":"node/9706294298","amenity":"public_bookcase"},"geometry":{"type":"Point","coordinates":[16.282997,48.195438]},"id":"I5OTU"},{"type":"Feature","properties":{"@id":"node/9761700805","amenity":"public_bookcase"},"geometry":{"type":"Point","coordinates":[16.330497,48.189702]},"id":"MzNjM"},{"type":"Feature","properties":{"@id":"node/9967833246","amenity":"public_bookcase","artwork_type":"sculpture","public_bookcase:type":"phone_box","tourism":"artwork","wikimedia_commons":"File:Bücherschrank Meidlinger Markt Wien.jpg"},"geometry":{"type":"Point","coordinates":[16.333164,48.181125]},"id":"M3MTg"},{"type":"Feature","properties":{"@id":"node/9967847540","amenity":"public_bookcase","operator":"Evangelischer Friedhof Matzleinsdorf","public_bookcase:type":"tombstone"},"geometry":{"type":"Point","coordinates":[16.361073,48.177754]},"id":"kxNTc"},{"type":"Feature","properties":{"@id":"node/9967847541","amenity":"public_bookcase","operator":"Evangelischer Friedhof Matzleinsdorf","public_bookcase:type":"tombstone"},"geometry":{"type":"Point","coordinates":[16.360663,48.179093]},"id":"UxNTc"},{"type":"Feature","properties":{"@id":"node/9967847542","amenity":"public_bookcase","operator":"Evangelischer Friedhof Matzleinsdorf","public_bookcase:type":"tombstone"},"geometry":{"type":"Point","coordinates":[16.36096,48.179282]},"id":"kwMzM"},{"type":"Feature","properties":{"@id":"node/9967847543","amenity":"public_bookcase","operator":"Evangelischer Friedhof Matzleinsdorf","public_bookcase:type":"tombstone"},"geometry":{"type":"Point","coordinates":[16.359298,48.178302]},"id":"Q0NTQ"},{"type":"Feature","properties":{"@id":"node/9967847544","amenity":"public_bookcase","operator":"Evangelischer Friedhof Matzleinsdorf","public_bookcase:type":"tombstone"},"geometry":{"type":"Point","coordinates":[16.359598,48.179168]},"id":"k0MTM"},{"type":"Feature","properties":{"@id":"node/9990829683","amenity":"public_bookcase","public_bookcase:type":"shelter"},"geometry":{"type":"Point","coordinates":[16.363868,48.195717]},"id":"E3NDc"},{"type":"Feature","properties":{"@id":"node/10008533917","amenity":"public_bookcase","contact:instagram":"https://www.instagram.com/buecher_1080/","public_bookcase:type":"wooden_cabinet","survey:date":"2022-09-08"},"geometry":{"type":"Point","coordinates":[16.352535,48.208141]},"id":"I2NDY"},{"type":"Feature","properties":{"@id":"node/10082914054","amenity":"public_bookcase","fixme":"location"},"geometry":{"type":"Point","coordinates":[16.330482,48.189541]},"id":"k3NTI"},{"type":"Feature","properties":{"@id":"node/10559927723","amenity":"public_bookcase","operator":"Verein Kunstraum18","website":"https://xn--bcherschrnke-whring-owbf72c.at/"},"geometry":{"type":"Point","coordinates":[16.328675,48.231538]},"id":"U2MTQ"},{"type":"Feature","properties":{"@id":"node/10559927724","amenity":"public_bookcase","lit":"no","opening_hours":"24/7","operator":"Verein Kunstraum18","website":"https://xn--bcherschrnke-whring-owbf72c.at/"},"geometry":{"type":"Point","coordinates":[16.336517,48.223593]},"id":"g0NjE"},{"type":"Feature","properties":{"@id":"node/10676419045","amenity":"public_bookcase","image":"https://i.imgur.com/QUnUwOB.jpg","image:0":"https://i.imgur.com/wx2TbAs.jpg"},"geometry":{"type":"Point","coordinates":[16.328275,48.165285]},"id":"UyMTE"},{"type":"Feature","properties":{"@id":"node/10676913463","amenity":"public_bookcase","image":"https://i.imgur.com/OEloXCA.jpg","public_bookcase:type":"phone_box"},"geometry":{"type":"Point","coordinates":[16.309097,48.167615]},"id":"M3MTc"},{"type":"Feature","properties":{"@id":"node/10712532299","amenity":"public_bookcase","public_bookcase:type":"glass_cabinet"},"geometry":{"type":"Point","coordinates":[16.407642,48.213468]},"id":"k3Njc"},{"type":"Feature","properties":{"@id":"node/10935236740","amenity":"public_bookcase","noname":"yes"},"geometry":{"type":"Point","coordinates":[16.370293,48.192913]},"id":"gyOTY"},{"type":"Feature","properties":{"@id":"node/10936644432","amenity":"public_bookcase","operator":"Bezirk Neubau"},"geometry":{"type":"Point","coordinates":[16.354298,48.203821]},"id":"EzODA"},{"type":"Feature","properties":{"@id":"node/10961750696","amenity":"public_bookcase","public_bookcase:type":"phone_box"},"geometry":{"type":"Point","coordinates":[16.320849,48.22491]},"id":"A4NjA"},{"type":"Feature","properties":{"@id":"node/10965459635","addr:city":"Wien","addr:postcode":"1220","addr:street":"Süßenbrunner Straße","amenity":"public_bookcase","lit":"yes","public_bookcase:type":"phone_box","source":"survey"},"geometry":{"type":"Point","coordinates":[16.478198,48.253824]},"id":"g3MTc"},{"type":"Feature","properties":{"@id":"node/11027673359","amenity":"public_bookcase","operator":"Agenda Margareten","public_bookcase:type":"phone_box","website":"https://www.agendamargareten.at/projekte-detail/offener-buecherschrank.html"},"geometry":{"type":"Point","coordinates":[16.356751,48.188163]},"id":"g2MzU"},{"type":"Feature","properties":{"@id":"node/11076079951","access":"yes","amenity":"public_bookcase","location":"outdoor","source":"survey"},"geometry":{"type":"Point","coordinates":[16.324666,48.166212]},"id":"c5Mjk"},{"type":"Feature","properties":{"@id":"node/11118627734","amenity":"public_bookcase","opening_hours":"24/7","public_bookcase:type":"phone_box"},"geometry":{"type":"Point","coordinates":[16.417358,48.211467]},"id":"UwODk"},{"type":"Feature","properties":{"@id":"node/11165618265","amenity":"public_bookcase"},"geometry":{"type":"Point","coordinates":[16.342704,48.207597]},"id":"A5MDI"},{"type":"Feature","properties":{"@id":"node/11203389148","amenity":"public_bookcase","public_bookcase:type":"phone_box"},"geometry":{"type":"Point","coordinates":[16.342068,48.224118]},"id":"I5ODk"},{"type":"Feature","properties":{"@id":"node/11215851986","amenity":"public_bookcase","public_bookcase:type":"phone_box","wheelchair":"yes"},"geometry":{"type":"Point","coordinates":[16.318011,48.224762]},"id":"czMTk"},{"type":"Feature","properties":{"@id":"node/11279642394","amenity":"public_bookcase","survey:date":"2023-10-21"},"geometry":{"type":"Point","coordinates":[16.299321,48.149916]},"id":"I1ODU"},{"type":"Feature","properties":{"@id":"node/11296503877","amenity":"public_bookcase","lit":"no","public_bookcase:type":"phone_box"},"geometry":{"type":"Point","coordinates":[16.33288,48.219891]},"id":"M1Nzc"},{"type":"Feature","properties":{"@id":"node/11646397208","amenity":"public_bookcase","public_bookcase:type":"metal_cabinet"},"geometry":{"type":"Point","coordinates":[16.344712,48.225213]},"id":"M2NjE"},{"type":"Feature","properties":{"@id":"node/11787955396","amenity":"public_bookcase"},"geometry":{"type":"Point","coordinates":[16.348522,48.195065]},"id":"k0NTc"},{"type":"Feature","properties":{"@id":"node/11810120333","amenity":"public_bookcase"},"geometry":{"type":"Point","coordinates":[16.332227,48.193659]},"id":"A1NDM"},{"type":"Feature","properties":{"@id":"node/10779950210","amenity":"public_bookcase","indoor":"yes","name":"48-Tandler Bücherschrank"},"geometry":{"type":"Point","coordinates":[16.264145,48.20266]},"id":"U2OTA"},{"type":"Feature","properties":{"@id":"node/11076911947","amenity":"public_bookcase","name":"Book2go"},"geometry":{"type":"Point","coordinates":[16.415598,48.213834]},"id":"c1NjQ"},{"type":"Feature","properties":{"@id":"node/1361482407","amenity":"public_bookcase","check_date":"2023-12-30","name":"Bookhaufen","source":"survey"},"geometry":{"type":"Point","coordinates":[16.403972,48.242084]},"id":"gwNjM"},{"type":"Feature","properties":{"@id":"node/11304912036","alt_name":"Büchertausch in der Meißauergasse","amenity":"public_bookcase","name":"Bücher Ecke"},"geometry":{"type":"Point","coordinates":[16.438098,48.248957]},"id":"I3NTk"},{"type":"Feature","properties":{"@id":"node/10607776689","access":"yes","amenity":"public_bookcase","covered":"yes","indoor":"no","name":"Bücherbox","public_bookcase:type":"wooden_cabinet"},"geometry":{"type":"Point","coordinates":[16.345065,48.228435]},"id":"Y2MDQ"},{"type":"Feature","properties":{"@id":"node/2813205030","addr:city":"Wien","addr:country":"AT","addr:postcode":"1080","addr:street":"Josef-Matthias-Hauer-Platz","amenity":"public_bookcase","check_date":"2023-10-26","name":"Bücherschrank Wien 8","website":"https://www.wien.gv.at/bezirke/josefstadt/geschichte-kultur/buecherschrank.html","wheelchair":"yes"},"geometry":{"type":"Point","coordinates":[16.344295,48.210778]},"id":"QwNzE"},{"type":"Feature","properties":{"@id":"node/10969213886","amenity":"public_bookcase","name":"Büchertasche"},"geometry":{"type":"Point","coordinates":[16.350425,48.212621]},"id":"UwNzI"},{"type":"Feature","properties":{"@id":"node/1716505802","amenity":"public_bookcase","check_date":"2022-10-06","name":"Bücherzelle"},"geometry":{"type":"Point","coordinates":[16.400334,48.220987]},"id":"kyMDQ"},{"type":"Feature","properties":{"@id":"node/4111164063","amenity":"public_bookcase","brand":"Bücherzelle","check_date":"2022-10-29","lit":"no","name":"Bücherzelle","note":"Offene Bücherzelle","opening_hours":"24/7","public_bookcase:type":"phone_box"},"geometry":{"type":"Point","coordinates":[16.391155,48.197983]},"id":"gzNDY"},{"type":"Feature","properties":{"@id":"node/11215805576","amenity":"public_bookcase","brand":"Bücherzelle","name":"Bücherzelle"},"geometry":{"type":"Point","coordinates":[16.395434,48.22526]},"id":"YxNTE"},{"type":"Feature","properties":{"@id":"node/10618454545","amenity":"public_bookcase","covered":"yes","indoor":"yes","name":"Döblinger Bücherregal","wheelchair":"yes"},"geometry":{"type":"Point","coordinates":[16.358061,48.250813]},"id":"E1MTY"},{"type":"Feature","properties":{"@id":"node/10684127207","amenity":"public_bookcase","capacity":"150","colour":"grey","man_made":"telephone_box","name":"Hietzing Folkschule","public_bookcase:type":"phone_box"},"geometry":{"type":"Point","coordinates":[16.301723,48.185556]},"id":"Y5OTQ"},{"type":"Feature","properties":{"@id":"node/10739590352","amenity":"public_bookcase","indoor":"yes","name":"Kaufhaus Alterlaa Bücherschrank"},"geometry":{"type":"Point","coordinates":[16.31576,48.151377]},"id":"gxOTc"},{"type":"Feature","properties":{"@id":"node/10872929322","amenity":"public_bookcase","name":"Kunstbox","public_bookcase:type":"phone_box"},"geometry":{"type":"Point","coordinates":[16.401287,48.197293]},"id":"k5NzE"},{"type":"Feature","properties":{"@id":"node/5313333560","amenity":"public_bookcase","check_date":"2024-02-29","indoor":"no","name":"Nachbarschaftsregal","website":"https://www.aspern-seestadt.at/city-news/nachbarschaftsregal"},"geometry":{"type":"Point","coordinates":[16.501685,48.224177]},"id":"Y3MDg"},{"type":"Feature","properties":{"@id":"node/10676491833","amenity":"public_bookcase","brand":"BookCrossing","brand:wikidata":"Q324286","name":"OBCZ","operator":"Bookcrossing","public_bookcase:type":"reading_box"},"geometry":{"type":"Point","coordinates":[16.369817,48.209262]},"id":"I2OTQ"},{"type":"Feature","properties":{"@id":"node/10676491835","amenity":"public_bookcase","brand":"BookCrossing","brand:wikidata":"Q324286","name":"OBCZ","operator":"Flanagans","public_bookcase:type":"shelf"},"geometry":{"type":"Point","coordinates":[16.373649,48.20319]},"id":"k0MDY"},{"type":"Feature","properties":{"@id":"node/4341854789","amenity":"public_bookcase","check_date":"2023-02-04","name":"Offene Bibliothek Margareten"},"geometry":{"type":"Point","coordinates":[16.358919,48.19193]},"id":"E3MDA"},{"type":"Feature","properties":{"@id":"node/686405852","addr:city":"Wien","addr:country":"AT","addr:postcode":"1070","amenity":"public_bookcase","check_date":"2023-05-26","name":"Offener Bücherschrank","operator":"Frank Gassner","public_bookcase:type":"metal_cabinet","website":"https://www.offener-buecherschrank.at/neubau-der-erste/"},"geometry":{"type":"Point","coordinates":[16.345103,48.201939]},"id":"M2MzE"},{"type":"Feature","properties":{"@id":"node/2484040031","amenity":"public_bookcase","name":"Offener Bücherschrank","website":"https://www.offener-buecherschrank.at/ottakring-brunnenmarkt/"},"geometry":{"type":"Point","coordinates":[16.335762,48.209814]},"id":"YzOTM"},{"type":"Feature","properties":{"@id":"node/9085067391","amenity":"public_bookcase","man_made":"telephone_box","name":"offener Bücherschrank","public_bookcase:type":"phone_box"},"geometry":{"type":"Point","coordinates":[16.304984,48.222734]},"id":"A2MDQ"},{"type":"Feature","properties":{"@id":"node/7611751595","addr:housenumber":"10","addr:street":"Schubertgasse","amenity":"public_bookcase","name":"Offener Kinder-Bücherschrank"},"geometry":{"type":"Point","coordinates":[16.353919,48.227444]},"id":"Q4ODY"},{"type":"Feature","properties":{"@id":"node/10225739939","amenity":"public_bookcase","name":"Offenes Bücherrad"},"geometry":{"type":"Point","coordinates":[16.387835,48.214762]},"id":"g0NjI"},{"type":"Feature","properties":{"@id":"node/11258508218","access":"yes","amenity":"public_bookcase","name":"Wieden-Buch","opening_hours":"24/7","wheelchair":"limited"},"geometry":{"type":"Point","coordinates":[16.373301,48.186977]},"id":"MzNjM"},{"type":"Feature","properties":{"@id":"node/9445063189","amenity":"public_bookcase","name":"WiedenTausch","operator":"kaesch","website":"https://kaesch.at/"},"geometry":{"type":"Point","coordinates":[16.36829,48.195294]},"id":"U5ODU"},{"type":"Feature","properties":{"@id":"node/8775247987","amenity":"public_bookcase","name":"Wiedner Bücherschrank"},"geometry":{"type":"Point","coordinates":[16.375123,48.190652]},"id":"I0NTY"}],"_umap_options":{"displayOnLoad":true,"inCaption":true,"browsable":true,"editMode":"advanced","remoteData":{},"name":"book sharing","iconUrl":"/uploads/pictogram/books.svg","color":"DarkKhaki"}};


L.geoJSON(booksharing, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: icons.booksharingMarker});
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
        } else {
            layer.bindPopup("Offener Bücherschrank");
        }
    }
}).addTo(map);

//foodsharing
var foodsharing = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"Badeschiff"},"geometry":{"type":"Point","coordinates":[16.381592,48.211801]},"id":"A3MjQ"},{"type":"Feature","properties":{"name":"Das Jetzt"},"geometry":{"type":"Point","coordinates":[16.327693,48.216581]},"id":"U4NzE"},{"type":"Feature","properties":{"name":"Tafel Österreich"},"geometry":{"type":"Point","coordinates":[16.357634,48.135378]},"id":"E5NDQ"},{"type":"Feature","properties":{"name":"Fair-Teiler"},"geometry":{"type":"Point","coordinates":[16.37476,48.190685]},"id":"Y1ODY"},{"type":"Feature","properties":{"name":"GB* Stadtteilbüro"},"geometry":{"type":"Point","coordinates":[16.400692,48.262317]},"id":"c3NzA"},{"type":"Feature","properties":{"name":"Hannovergasse"},"geometry":{"type":"Point","coordinates":[16.368006,48.231352]},"id":"UzMDQ"},{"type":"Feature","properties":{"name":"mdw – Universität für Musik und darstellende Kunst"},"geometry":{"type":"Point","coordinates":[16.385298,48.201954]},"id":"gzMzE"},{"type":"Feature","properties":{"name":"Semmel Karussell"},"geometry":{"type":"Point","coordinates":[16.320711,48.236597]},"id":"c1OTI"},{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[16.502629,48.223972]},"id":"g2MTc"},{"type":"Feature","properties":{"name":"VHS Donaustadt"},"geometry":{"type":"Point","coordinates":[16.438519,48.240828]},"id":"k4MTg"},{"type":"Feature","properties":{"name":"VHS Erlaa (Dacapo)"},"geometry":{"type":"Point","coordinates":[16.320078,48.150314]},"id":"g3NDM"},{"type":"Feature","properties":{"name":"VHS Hietzing"},"geometry":{"type":"Point","coordinates":[16.281711,48.191054]},"id":"MxOTI"},{"type":"Feature","properties":{"name":"VHS Landstrasse"},"geometry":{"type":"Point","coordinates":[16.396019,48.200195]},"id":"M3NDE"},{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[16.28269,48.134699]},"id":"k2MTI"},{"type":"Feature","properties":{"name":"VHS Stöbergasse 11"},"geometry":{"type":"Point","coordinates":[16.354917,48.185464]},"id":"gwNjI"}],"_umap_options":{"displayOnLoad":true,"inCaption":true,"browsable":true,"editMode":"advanced","remoteData":{},"name":"foodsharing","color":"Crimson","iconUrl":"/uploads/pictogram/restaurant.svg","id":"4192d971-1127-41c3-b425-4cc4580eaa58","permissions":{"edit_status":0}}};


L.geoJSON(foodsharing, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: icons.foodsharingMarker});
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
        }
    }
}).addTo(map);

//parklets
var parklets = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7497","OBJECTID":3288,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Fahrradieschen","BEZIRK":20,"STRASSE":null,"BEGINN_DATUM":"2021-07-30","ENDE_DATUM":"2099-01-01","ADR_ID":10147555,"ADRESSE":"20., Treustraße 15","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.367421,48.227796]},"id":"c5Mzc"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7496","OBJECTID":3287,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"REGRÄTZL","BEZIRK":2,"STRASSE":null,"BEGINN_DATUM":"2021-08-14","ENDE_DATUM":"2099-01-01","ADR_ID":10054521,"ADRESSE":"02., Malzgasse 3","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.375497,48.220069]},"id":"EwMjk"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7495","OBJECTID":3286,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Veranda 16","BEZIRK":16,"STRASSE":null,"BEGINN_DATUM":"2021-07-02","ENDE_DATUM":"2099-01-01","ADR_ID":10224717,"ADRESSE":"16., Hyrtlgasse 18","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.326278,48.207327]},"id":"gxMTg"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7494","OBJECTID":3285,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"neunerhaus Grätzlbeet","BEZIRK":5,"STRASSE":null,"BEGINN_DATUM":"2021-01-01","ENDE_DATUM":"2099-01-01","ADR_ID":10065940,"ADRESSE":"05., Margaretenstraße 166","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.344919,48.186103]},"id":"U0Mzk"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7493","OBJECTID":3284,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Mitten im Dritten 3.0","BEZIRK":3,"STRASSE":null,"BEGINN_DATUM":"2021-06-27","ENDE_DATUM":"2099-01-01","ADR_ID":10061071,"ADRESSE":"03., Baumannstraße 5","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.387408,48.204109]},"id":"Y2MzQ"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7492","OBJECTID":3283,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"„Chill deine Basis“ – Jugendterrasse Heiligenstadt","BEZIRK":19,"STRASSE":null,"BEGINN_DATUM":"2021-07-20","ENDE_DATUM":"2099-01-01","ADR_ID":10141598,"ADRESSE":"19., Boschstraße 24/3/1, 1190 Wien","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.366077,48.252286]},"id":"QwOTY"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7491","OBJECTID":3282,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Parhamers-go-Green","BEZIRK":17,"STRASSE":null,"BEGINN_DATUM":"2021-06-22","ENDE_DATUM":"2099-01-01","ADR_ID":10131289,"ADRESSE":"17., Parhamerplatz 11","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.32721,48.216047]},"id":"MyMDE"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7490","OBJECTID":3281,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Kind und Kegel Parklet","BEZIRK":2,"STRASSE":null,"BEGINN_DATUM":"2021-06-21","ENDE_DATUM":"2099-01-01","ADR_ID":10056408,"ADRESSE":"02., Praterstraße 14/8","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.382116,48.213189]},"id":"I0MDg"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_748f","OBJECTID":3280,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Grüne Oase am Bauernmarkt","BEZIRK":1,"STRASSE":null,"BEGINN_DATUM":"2021-07-26","ENDE_DATUM":"2099-01-01","ADR_ID":10052273,"ADRESSE":"01., Bauernmarkt 8","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.372471,48.209765]},"id":"M1OTA"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_748e","OBJECTID":3279,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Freunde Diwan","BEZIRK":9,"STRASSE":null,"BEGINN_DATUM":"2021-07-04","ENDE_DATUM":"2099-01-01","ADR_ID":10075592,"ADRESSE":"09., Rotenhausgasse 10","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.356416,48.216674]},"id":"M3MzU"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_748d","OBJECTID":3278,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Adamsgarten","BEZIRK":3,"STRASSE":null,"BEGINN_DATUM":"2021-04-01","ENDE_DATUM":"2099-01-01","ADR_ID":10059000,"ADRESSE":"03., Adamsgasse 11","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.392763,48.210208]},"id":"UxNzE"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_748b","OBJECTID":3276,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Kunst und Grün","BEZIRK":16,"STRASSE":null,"BEGINN_DATUM":"2021-07-09","ENDE_DATUM":"2099-01-01","ADR_ID":10125318,"ADRESSE":"16., Thaliastrasse 93","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.320706,48.211161]},"id":"c2NzM"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_748a","OBJECTID":3275,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Schattenbankerl - Kiste51","BEZIRK":16,"STRASSE":null,"BEGINN_DATUM":"2020-06-05","ENDE_DATUM":"2099-01-01","ADR_ID":10123888,"ADRESSE":"16., Kirchstetterngasse 51","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.333104,48.210082]},"id":"M4NDU"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7489","OBJECTID":3274,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Hasneroase","BEZIRK":16,"STRASSE":null,"BEGINN_DATUM":"2020-10-05","ENDE_DATUM":"2099-01-01","ADR_ID":10123065,"ADRESSE":"16., Hasnerstrasse 3","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.33668,48.20737]},"id":"I1MzA"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7488","OBJECTID":3273,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Die Wohnung wie zu Hause","BEZIRK":16,"STRASSE":null,"BEGINN_DATUM":"2021-06-30","ENDE_DATUM":"2099-01-01","ADR_ID":10127275,"ADRESSE":"16., Landsteinergasse 2","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.308423,48.208636]},"id":"k1MjU"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7487","OBJECTID":3272,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Daollacher","BEZIRK":16,"STRASSE":null,"BEGINN_DATUM":"2021-06-05","ENDE_DATUM":"2099-01-01","ADR_ID":10123245,"ADRESSE":"16., Gaullachergasse 14","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.334901,48.211999]},"id":"c4MDg"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7485","OBJECTID":3270,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Sechshauser Stadtgarten","BEZIRK":15,"STRASSE":null,"BEGINN_DATUM":"2021-06-22","ENDE_DATUM":"2099-01-01","ADR_ID":10120891,"ADRESSE":"15., Sechshauser Straße 26","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.334379,48.189033]},"id":"M5NzM"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7484","OBJECTID":3269,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Lady MS CumberLand","BEZIRK":14,"STRASSE":null,"BEGINN_DATUM":"2020-05-10","ENDE_DATUM":"2099-01-01","ADR_ID":10110107,"ADRESSE":"14., Cumberlandstraße 54","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.299214,48.192235]},"id":"E1NjQ"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7483","OBJECTID":3268,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"MEI MEIDLING","BEZIRK":12,"STRASSE":null,"BEGINN_DATUM":"2021-08-10","ENDE_DATUM":"2099-01-01","ADR_ID":10094600,"ADRESSE":"12., Rosaliagasse 3","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.333619,48.180799]},"id":"EzNTY"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7482","OBJECTID":3267,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Pusteblume","BEZIRK":18,"STRASSE":null,"BEGINN_DATUM":"2021-01-01","ENDE_DATUM":"2099-01-01","ADR_ID":10134812,"ADRESSE":"18., Theresiengasse 45","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.342128,48.221483]},"id":"Y2NTU"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7481","OBJECTID":3266,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Platz für neue Hoffnung","BEZIRK":9,"STRASSE":null,"BEGINN_DATUM":"2021-01-01","ENDE_DATUM":"2099-01-01","ADR_ID":10075080,"ADRESSE":"09., Sechsschimmelgasse 21","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.35128,48.22572]},"id":"cyNzc"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7480","OBJECTID":3265,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Planet 9","BEZIRK":9,"STRASSE":null,"BEGINN_DATUM":"2012-06-05","ENDE_DATUM":"2099-01-01","ADR_ID":10074132,"ADRESSE":"09., Marktgasse 35","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.357381,48.2276]},"id":"IwMTY"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_747f","OBJECTID":3264,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Pink Shade","BEZIRK":18,"STRASSE":null,"BEGINN_DATUM":"2021-06-27","ENDE_DATUM":"2099-01-01","ADR_ID":10135857,"ADRESSE":"18., Kutschkergasse 4","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.343854,48.22242]},"id":"Y3NDg"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_747e","OBJECTID":3263,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Parklet Klesheimgasse","BEZIRK":8,"STRASSE":null,"BEGINN_DATUM":"2021-06-06","ENDE_DATUM":"2099-01-01","ADR_ID":10072644,"ADRESSE":"08., Klesheimgasse 2","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.346884,48.211254]},"id":"Y3Mjk"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_747c","OBJECTID":3261,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Oasenstattgasse","BEZIRK":18,"STRASSE":null,"BEGINN_DATUM":"2021-07-07","ENDE_DATUM":"2099-01-01","ADR_ID":10136295,"ADRESSE":"18., Hofstattgasse 2","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.341182,48.228261]},"id":"Y1MTQ"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_747b","OBJECTID":3260,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Oasenflächen","BEZIRK":3,"STRASSE":null,"BEGINN_DATUM":"2021-04-24","ENDE_DATUM":"2099-01-01","ADR_ID":10061955,"ADRESSE":"03., Salesianergasse 10/17, 1030 Wien","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.380888,48.198783]},"id":"U3MjY"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_747a","OBJECTID":3259,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Oase Rudolfscrime","BEZIRK":15,"STRASSE":null,"BEGINN_DATUM":"2021-06-18","ENDE_DATUM":"2099-01-01","ADR_ID":10121263,"ADRESSE":"15., Anschützgasse 6a","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.323939,48.185936]},"id":"QyNDU"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7479","OBJECTID":3258,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Möglichkeits(T)raum Kochgasse","BEZIRK":8,"STRASSE":null,"BEGINN_DATUM":"2021-05-19","ENDE_DATUM":"2099-01-01","ADR_ID":10072310,"ADRESSE":"08., Kochgasse 25","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.349251,48.214215]},"id":"kyOTg"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7478","OBJECTID":3257,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Mobiles Scheibtruhen Grätzlwohnzimmer","BEZIRK":14,"STRASSE":null,"BEGINN_DATUM":"2021-01-01","ENDE_DATUM":"2099-01-01","ADR_ID":10110888,"ADRESSE":"14., Matznergasse 26","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.303967,48.196239]},"id":"U1MDY"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7477","OBJECTID":3256,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Machs selbst","BEZIRK":7,"STRASSE":null,"BEGINN_DATUM":"2021-05-19","ENDE_DATUM":"2099-01-01","ADR_ID":10071192,"ADRESSE":"07., Kandlgasse 15","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.342813,48.202689]},"id":"Y1NzA"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7476","OBJECTID":3255,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Gretl-Parklet","BEZIRK":5,"STRASSE":null,"BEGINN_DATUM":"2021-07-07","ENDE_DATUM":"2099-01-01","ADR_ID":10066404,"ADRESSE":"05., Einsiedlerplatz 7","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.351039,48.186026]},"id":"U5MzI"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7475","OBJECTID":3254,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"logins_Treffbank","BEZIRK":15,"STRASSE":null,"BEGINN_DATUM":"2021-04-28","ENDE_DATUM":"2099-01-01","ADR_ID":10123022,"ADRESSE":"15., Weiglgasse 19","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.321477,48.186961]},"id":"c3NTg"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7474","OBJECTID":3253,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Living Living Room","BEZIRK":8,"STRASSE":null,"BEGINN_DATUM":"2021-05-02","ENDE_DATUM":"2099-01-01","ADR_ID":10071913,"ADRESSE":"08., Tulpengasse 3","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.354527,48.211278]},"id":"U2MzA"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7473","OBJECTID":3252,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"OAG! A Oase!","BEZIRK":5,"STRASSE":null,"BEGINN_DATUM":"2021-06-30","ENDE_DATUM":"2099-01-01","ADR_ID":10067404,"ADRESSE":"05., Obere Amtshausgasse 10-12, 1050 Wien","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.353482,48.182936]},"id":"Q5MjE"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7472","OBJECTID":3251,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"treecycle","BEZIRK":2,"STRASSE":null,"BEGINN_DATUM":"2020-05-05","ENDE_DATUM":"2099-01-01","ADR_ID":10055692,"ADRESSE":"02., Taborstrasse 51","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.381264,48.220982]},"id":"cxNTk"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7471","OBJECTID":3250,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Hali Gali","BEZIRK":9,"STRASSE":null,"BEGINN_DATUM":"2021-06-21","ENDE_DATUM":"2099-01-01","ADR_ID":10075019,"ADRESSE":"09., Galileigasse 5","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.354043,48.2259]},"id":"E0NTY"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7470","OBJECTID":3249,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Grün für die Seele","BEZIRK":10,"STRASSE":null,"BEGINN_DATUM":"2021-06-08","ENDE_DATUM":"2099-01-01","ADR_ID":10079587,"ADRESSE":"10., Columbusgasse 78","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.374089,48.172653]},"id":"A2NjU"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_746f","OBJECTID":3248,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Spieloase Naschgarten MINIS","BEZIRK":2,"STRASSE":null,"BEGINN_DATUM":"2021-07-01","ENDE_DATUM":"2099-01-01","ADR_ID":10055785,"ADRESSE":"02., Pillersdorfgasse 7","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.38448,48.219963]},"id":"UwODk"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_746e","OBJECTID":3247,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"F104 Vom Ich zum Uns","BEZIRK":15,"STRASSE":null,"BEGINN_DATUM":"2021-05-26","ENDE_DATUM":"2099-01-01","ADR_ID":10122566,"ADRESSE":"15., Felberstraße 104 /5-6","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.320329,48.19338]},"id":"kxODQ"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_746d","OBJECTID":3246,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Die Zuzibaumoase","BEZIRK":15,"STRASSE":null,"BEGINN_DATUM":"2021-03-25","ENDE_DATUM":"2099-01-01","ADR_ID":10122157,"ADRESSE":"15., Huglgasse 6","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.326725,48.195691]},"id":"M2NTU"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_746c","OBJECTID":3245,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Kneippterrasse","BEZIRK":2,"STRASSE":null,"BEGINN_DATUM":"2021-07-30","ENDE_DATUM":"2099-01-01","ADR_ID":10057101,"ADRESSE":"02., Sebastian-Kneipp Gasse 10","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.407552,48.218727]},"id":"kxODI"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_746b","OBJECTID":3244,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Auf den zweiten Blick","BEZIRK":8,"STRASSE":null,"BEGINN_DATUM":"2021-05-28","ENDE_DATUM":"2099-01-01","ADR_ID":10072002,"ADRESSE":"08., Lammgasse 10-12","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.352054,48.212839]},"id":"Q0MTU"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_746a","OBJECTID":3243,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Art Oasis","BEZIRK":15,"STRASSE":null,"BEGINN_DATUM":"2021-06-06","ENDE_DATUM":"2099-01-01","ADR_ID":10121451,"ADRESSE":"15., Reindorfgasse 42","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.330186,48.190854]},"id":"QyMDc"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7469","OBJECTID":3309,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Voller Leben Oase","BEZIRK":21,"STRASSE":null,"BEGINN_DATUM":"2021-07-30","ENDE_DATUM":"2099-01-01","ADR_ID":10229255,"ADRESSE":"21., Großbauerstraße 60, 1210 Wien","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.419508,48.281055]},"id":"c4MjU"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7468","OBJECTID":3308,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Schraubgarten","BEZIRK":2,"STRASSE":null,"BEGINN_DATUM":"2020-05-05","ENDE_DATUM":"2099-01-01","ADR_ID":10057702,"ADRESSE":"02., Ybbsstraße 26, 1020 Wien","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.399892,48.22165]},"id":"c3NTE"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7467","OBJECTID":3307,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Oase der 2000 Gedanken","BEZIRK":7,"STRASSE":null,"BEGINN_DATUM":"2021-07-04","ENDE_DATUM":"2099-01-01","ADR_ID":10070539,"ADRESSE":"07., Neustiftgasse 36, 1070 Wien","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.350906,48.205409]},"id":"k0MzI"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7466","OBJECTID":3306,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"PAUSENHOF 2.0","BEZIRK":5,"STRASSE":null,"BEGINN_DATUM":"2021-05-14","ENDE_DATUM":"2099-01-01","ADR_ID":10066663,"ADRESSE":"05., Viktor-Christ-Gasse 10, 1050 Wien","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.358934,48.188793]},"id":"M0NDk"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7465","OBJECTID":3305,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"KlangOase","BEZIRK":8,"STRASSE":null,"BEGINN_DATUM":"2021-03-15","ENDE_DATUM":"2099-01-01","ADR_ID":10207571,"ADRESSE":"08., Zeltgasse 9, vor dem Umspannwerk","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.349728,48.207879]},"id":"A2MTk"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7464","OBJECTID":3304,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Luftbadwelle","BEZIRK":6,"STRASSE":null,"BEGINN_DATUM":"2021-05-07","ENDE_DATUM":"2099-01-01","ADR_ID":10069446,"ADRESSE":"06., Luftbadgasse 6, 1060 Wien","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.355557,48.197906]},"id":"AxNDM"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7463","OBJECTID":3303,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Lebensfragenoase","BEZIRK":19,"STRASSE":null,"BEGINN_DATUM":"2020-05-10","ENDE_DATUM":"2099-01-01","ADR_ID":10143756,"ADRESSE":"19., Alfred-Wegener-Gasse 21, 1190 Wien","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.338689,48.251226]},"id":"c5Mjg"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7462","OBJECTID":3302,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Kontaktgarten","BEZIRK":5,"STRASSE":null,"BEGINN_DATUM":"2020-05-10","ENDE_DATUM":"2099-01-01","ADR_ID":10066401,"ADRESSE":"05., Gießaufgasse 13, 1050 Wien","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.350761,48.186378]},"id":"QyNjY"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7461","OBJECTID":3301,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"sous-bois plage","BEZIRK":7,"STRASSE":null,"BEGINN_DATUM":"2020-05-05","ENDE_DATUM":"2099-01-01","ADR_ID":10070468,"ADRESSE":"07., Neustiftgasse 33, 1070 Wien","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.352008,48.205183]},"id":"I0NDI"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7460","OBJECTID":3300,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Novaragasse","BEZIRK":2,"STRASSE":null,"BEGINN_DATUM":"2021-05-28","ENDE_DATUM":"2099-01-01","ADR_ID":10055566,"ADRESSE":"02., Novaragasse 30 , 1020","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.385443,48.218702]},"id":"IxNTU"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_745f","OBJECTID":3299,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Löwenzahn Grätzloase","BEZIRK":12,"STRASSE":null,"BEGINN_DATUM":"2021-05-24","ENDE_DATUM":"2099-01-01","ADR_ID":10094361,"ADRESSE":"12., Gierstergasse 7, 1120 Wien","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.334714,48.183532]},"id":"g0MDA"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_745e","OBJECTID":3298,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Biodiversitätsoase Meidling","BEZIRK":12,"STRASSE":null,"BEGINN_DATUM":"2020-05-10","ENDE_DATUM":"2099-01-01","ADR_ID":10094586,"ADRESSE":"12., Mandlgasse 20, 1120 Wien","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.334253,48.180046]},"id":"k1MDA"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_745d","OBJECTID":3297,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Favourite Oase","BEZIRK":10,"STRASSE":null,"BEGINN_DATUM":"2021-06-11","ENDE_DATUM":"2099-01-01","ADR_ID":10076667,"ADRESSE":"10., Alxingergasse 31, 1100 Wien","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.368381,48.176884]},"id":"IwODA"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_745c","OBJECTID":3296,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Hagenoase","BEZIRK":3,"STRASSE":null,"BEGINN_DATUM":"2021-03-04","ENDE_DATUM":"2099-01-01","ADR_ID":10059895,"ADRESSE":"03., Hagenmüllergasse 10, 1030 Wien","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.400662,48.199135]},"id":"k1NDI"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_745b","OBJECTID":3295,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Fleckerlteppich","BEZIRK":5,"STRASSE":null,"BEGINN_DATUM":"2021-07-06","ENDE_DATUM":"2099-01-01","ADR_ID":10065633,"ADRESSE":"05., Schönbrunnerstraße 83, 1050 Wien","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.353421,48.19006]},"id":"kxNDI"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_745a","OBJECTID":3294,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Lern-Oase","BEZIRK":2,"STRASSE":null,"BEGINN_DATUM":"2021-06-21","ENDE_DATUM":"2099-01-01","ADR_ID":10055939,"ADRESSE":"02., Volkertplatz 13, 1020 Wien","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.386186,48.222524]},"id":"AwMDI"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7459","OBJECTID":3293,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Darwin Oase","BEZIRK":2,"STRASSE":null,"BEGINN_DATUM":"2021-06-25","ENDE_DATUM":"2099-01-01","ADR_ID":10055972,"ADRESSE":"02., Darwingasse 23, 1020 Wien","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.386255,48.222104]},"id":"k2NTg"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7458","OBJECTID":3292,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Puxlet","BEZIRK":10,"STRASSE":null,"BEGINN_DATUM":"2021-01-01","ENDE_DATUM":"2099-01-01","ADR_ID":10078420,"ADRESSE":"10., Puchsbaumgasse 49, 1100 Wien","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.381306,48.173642]},"id":"A0NjA"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7457","OBJECTID":3291,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Kulturgarten Max","BEZIRK":17,"STRASSE":null,"BEGINN_DATUM":"2021-03-28","ENDE_DATUM":"2099-01-01","ADR_ID":10131105,"ADRESSE":"17., Mariengasse 1, 1170 Wien","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.327077,48.218329]},"id":"c3Nzk"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7456","OBJECTID":3290,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"1x Erdbeeren mit Schnittlauch, bitte!","BEZIRK":2,"STRASSE":null,"BEGINN_DATUM":"2020-10-01","ENDE_DATUM":"2099-01-01","ADR_ID":10055568,"ADRESSE":"02., Zirkusgasse 45, 1020 Wien","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.385802,48.218605]},"id":"k0NjI"},{"type":"Feature","properties":{"FID":"PARKLETSOGD.fid-2885a53f_17ca8bcf28f_7455","OBJECTID":3289,"ORT":"Parkspur","TAETIGKEIT":"Parklet","NAME":"Knotenpunkt","BEZIRK":20,"STRASSE":null,"BEGINN_DATUM":"2021-07-30","ENDE_DATUM":"2099-01-01","ADR_ID":10148949,"ADRESSE":"20., Petraschgasse 7","WEBLINK1":"https://www.graetzloase.at/","WEBLINK2":null,"SE_ANNO_CAD_DATA":null},"geometry":{"type":"Point","coordinates":[16.372082,48.228694]},"id":"g0NDA"}],"_umap_options":{"displayOnLoad":true,"inCaption":true,"browsable":true,"editMode":"advanced","name":"parklets","remoteData":{}}};

L.geoJSON(parklets, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: icons.parkletMarker});
    },
    onEachFeature: function (feature, layer) {
        var name = feature.properties.name || feature.properties.NAME;
        if (feature.properties && name) {
            layer.bindPopup(name);
        }
    }
}).addTo(map);


//working_together
var working_together = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"Bildungswerkstatt am Barbenhaufel"},"geometry":{"type":"Point","coordinates":[16.454519,48.205211]},"id":"k1NzQ"},{"type":"Feature","properties":{"name":"Gemeinschaftliches Kompostieren Floridsdorf"},"geometry":{"type":"Point","coordinates":[16.407365,48.255276]},"id":"k2ODU"}],"_umap_options":{"displayOnLoad":true,"inCaption":true,"browsable":true,"editMode":"advanced","remoteData":{},"name":"working together","iconUrl":"/uploads/pictogram/pitch.svg","color":"Maroon","id":"19c9525e-449a-4dca-ba87-b9c09e8e56fa","permissions":{"edit_status":0}}};

L.geoJSON(working_together, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: icons.workingTogetherMarker});
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
        }
    }
}).addTo(map);


//urban_gardening
var urban_gardening = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"Gemeinschaftsgarten Leopold-Rosenmayr-Park","description":"Die Gruppe \"Zusammen wachsen\", die von der Lokalen Agenda Währing betreut wird, hat einen Gemeinschaftsgarten gegründet, um mehr Menschen die Möglichkeit zu geben nachbarschaftlich zusammen zu kommen und zu Garteln. Der Garten ist auf einem Teil der Wiese angelegt, die aber nicht durch Beete und Kistln \"zugestellt\" werden soll. Ein gestalterisches Gesamtkonzept inklusive kleiner Wege und einem zentralen Platz, sorgt dafür, dass sich alle Interessierten zum Verweilen im Garten eingeladen fühlen."},"geometry":{"type":"Point","coordinates":[16.318084,48.231445]},"id":"YyNjg"},{"type":"Feature","properties":{"name":"Naschgarten","description":"Auf Initiative der GB*21 wurde im Floridsdorfer Donaufeld gemeinsam mit BewohnerInnen ein Garten mit Obstbäumen, Beerensträuchern, Wildobst und Raritäten angelegt, deren Früchte im Sommer genascht werden können. Der Naschgarten liegt auf einem ehemaligen Gemüsefeld der MA 49 - Forstamt und Landwirtschaftsbetrieb der Stadt Wien und ist als Gemeingut (Allmende) konzipiert. Sie wohnen im Stadtteil oder sind am Projekt interessiert? Ganz im Sinne von \"Share the City\" sind alle eingeladen, diesen öffentlichen Freiraum gemeinsam zu pflegen und zu nutzen!"},"geometry":{"type":"Point","coordinates":[16.424832,48.254506]},"id":"A3MDc"},{"type":"Feature","properties":{"description":"","name":"Gemeinschaftsgarten Norwegerviertel"},"geometry":{"type":"Point","coordinates":[16.477178,48.213564]},"id":"U1NTc"},{"type":"Feature","properties":{"description":"https://gartenpolylog.org/gartenprojekt/haengender-kraeutergarten","name":"Hängender Kräutergarten"},"geometry":{"type":"Point","coordinates":[16.392957,48.181125]},"id":"I4Mjk"},{"type":"Feature","properties":{"name":"Sensengarten"},"geometry":{"type":"Point","coordinates":[16.354244,48.220331]},"id":"g5Mjk"},{"type":"Feature","properties":{"name":" Erna-Popper-Garten"},"geometry":{"type":"Point","coordinates":[16.395695,48.225034]},"id":"E5MTQ"},{"type":"Feature","properties":{"name":"Garten SAMBA"},"geometry":{"type":"Point","coordinates":[16.385817,48.22562]},"id":"Y1NDE"},{"type":"Feature","properties":{"name":"Gemeinschaftsgarten Donaukanal"},"geometry":{"type":"Point","coordinates":[16.374022,48.216424]},"id":"MwNDg"},{"type":"Feature","properties":{"name":"Gemeinschaftsgarten PAN"},"geometry":{"type":"Point","coordinates":[16.397106,48.224696]},"id":"YyNzk"},{"type":"Feature","properties":{"name":"Gemeinschaftsgarten Sonnenblume"},"geometry":{"type":"Point","coordinates":[16.394394,48.231783]},"id":"E4NjQ"},{"type":"Feature","properties":{"name":"Gemeinschaftsgarten Stadtraum Nordwestbahnhof-"},"geometry":{"type":"Point","coordinates":[16.377509,48.232822]},"id":"c0MTY"},{"type":"Feature","properties":{"name":"Gemeinschaftsgarten Wechselkröte"},"geometry":{"type":"Point","coordinates":[16.390412,48.231045]},"id":"Q2ODE"},{"type":"Feature","properties":{"name":"Maxigarten Nachbarschaftsgarten am Max-Winter Platz"},"geometry":{"type":"Point","coordinates":[16.400201,48.220851]},"id":"Q3Mzg"},{"type":"Feature","properties":{"name":"Mintzgarten"},"geometry":{"type":"Point","coordinates":[16.394987,48.225598]},"id":"Q1Njk"},{"type":"Feature","properties":{"name":"Nachbarschaftsgarten Wohnprojekt"},"geometry":{"type":"Point","coordinates":[16.395172,48.226406]},"id":"Y0OTE"},{"type":"Feature","properties":{"name":"Urban Gardening beim Augarten"},"geometry":{"type":"Point","coordinates":[16.377314,48.221598]},"id":"MxMTU"},{"type":"Feature","properties":{"name":"Fliedergarten"},"geometry":{"type":"Point","coordinates":[16.39449,48.196591]},"id":"kxNDA"},{"type":"Feature","properties":{"name":"Garten Arenbergpark"},"geometry":{"type":"Point","coordinates":[16.390797,48.197877]},"id":"U1OTI"},{"type":"Feature","properties":{"name":"Nachbarschaftsgarten Sophiengarten"},"geometry":{"type":"Point","coordinates":[16.396824,48.204943]},"id":"YzNzc"},{"type":"Feature","properties":{"name":"Neu Marx Garten"},"geometry":{"type":"Point","coordinates":[16.405393,48.188478]},"id":"A5ODk"},{"type":"Feature","properties":{"name":"Gemeinschaftsgarten Junges Gemüse Wieden"},"geometry":{"type":"Point","coordinates":[16.363318,48.18978]},"id":"kxNjU"},{"type":"Feature","properties":{"name":"Nachbarschaftsgarten Klieberpark"},"geometry":{"type":"Point","coordinates":[16.363133,48.184654]},"id":"A5MzQ"},{"type":"Feature","properties":{"name":"GartenWerkStadt"},"geometry":{"type":"Point","coordinates":[16.35588,48.198736]},"id":"UyNjQ"},{"type":"Feature","properties":{"name":"Miteinander Garteln am Loquaiplatz"},"geometry":{"type":"Point","coordinates":[16.348182,48.195049]},"id":"AzMTQ"},{"type":"Feature","properties":{"name":"Nachbarschaftsgarten im Fritz-Immhoff Park"},"geometry":{"type":"Point","coordinates":[16.339441,48.189602]},"id":"A2MzE"},{"type":"Feature","properties":{"name":"Alsergarten"},"geometry":{"type":"Point","coordinates":[16.366839,48.225356]},"id":"Y1NTY"},{"type":"Feature","properties":{"name":"Wurzeln.Rossau"},"geometry":{"type":"Point","coordinates":[16.364055,48.220542]},"id":"I1MjY"},{"type":"Feature","properties":{"name":"Die Insel: Kreta"},"geometry":{"type":"Point","coordinates":[16.393961,48.174705]},"id":"k2NTI"},{"type":"Feature","properties":{"name":"Pioniergarten in der Pioniersiedlung"},"geometry":{"type":"Point","coordinates":[16.382819,48.155356]},"id":"E1MzY"},{"type":"Feature","properties":{"name":"11er Garten"},"geometry":{"type":"Point","coordinates":[16.418027,48.181995]},"id":"E0MzE"},{"type":"Feature","properties":{"name":"Carsonypark"},"geometry":{"type":"Point","coordinates":[16.418729,48.166608]},"id":"MwOTM"},{"type":"Feature","properties":{"name":"Nachbarschaftsgarten Macondo"},"geometry":{"type":"Point","coordinates":[16.473784,48.166265]},"id":"A0NDY"},{"type":"Feature","properties":{"name":"Garten Wolfganggasse"},"geometry":{"type":"Point","coordinates":[16.343932,48.180935]},"id":"U0NTc"},{"type":"Feature","properties":{"name":"Längenfeld – Garten – Gemeinschafts-Guerilla-Garten am Wienfluss"},"geometry":{"type":"Point","coordinates":[16.333532,48.184187]},"id":"IzMTg"},{"type":"Feature","properties":{"name":"Gartenprojekt im Haus WohnenPlus RIGA des Arbeiter-Samariter-Bund Wien"},"geometry":{"type":"Point","coordinates":[16.28831,48.162322]},"id":"M2MTc"},{"type":"Feature","properties":{"name":"Matznergarten"},"geometry":{"type":"Point","coordinates":[16.303648,48.196233]},"id":"g1MDc"},{"type":"Feature","properties":{"name":"Brunnenviertel Nachbarn garteln"},"geometry":{"type":"Point","coordinates":[16.331951,48.212386]},"id":"czMzE"},{"type":"Feature","properties":{"name":"Gemeinschaftsgarten Rosenacker"},"geometry":{"type":"Point","coordinates":[16.303483,48.223617]},"id":"IxMDY"},{"type":"Feature","properties":{"name":"Grünstück PEPH"},"geometry":{"type":"Point","coordinates":[16.331514,48.212346]},"id":"QwNzg"},{"type":"Feature","properties":{"name":"Nachbarschaftsgarten Heigerlein"},"geometry":{"type":"Point","coordinates":[16.311979,48.21891]},"id":"UyNDA"},{"type":"Feature","properties":{"name":"Gemeinschaftsgarten Diepoldpark"},"geometry":{"type":"Point","coordinates":[16.330241,48.22297]},"id":"QzNDY"},{"type":"Feature","properties":{"name":"Gemeinschaftsgarten im Frederic-Morton-Park"},"geometry":{"type":"Point","coordinates":[16.334299,48.219083]},"id":"c3OTI"},{"type":"Feature","properties":{"name":"Gemeinschaftsgarten Rosenberg"},"geometry":{"type":"Point","coordinates":[16.302992,48.229342]},"id":"MxNDQ"},{"type":"Feature","properties":{"name":"Nachbarschaftsgarten Beethafen"},"geometry":{"type":"Point","coordinates":[16.339095,48.226247]},"id":"E2MTM"},{"type":"Feature","properties":{"name":"Nachbarschaftsgarten Zaunkönig"},"geometry":{"type":"Point","coordinates":[16.349705,48.232531]},"id":"c2MTM"},{"type":"Feature","properties":{"name":"Gemeinschaftsgarten Krottenbach"},"geometry":{"type":"Point","coordinates":[16.329567,48.241576]},"id":"c4MzA"},{"type":"Feature","properties":{"name":"Nachbarschaftsgarten Hugo Wolf Park"},"geometry":{"type":"Point","coordinates":[16.331807,48.239873]},"id":"I0Mzk"},{"type":"Feature","properties":{"name":"BOKU-Gemeinschaftsgarten"},"geometry":{"type":"Point","coordinates":[16.428015,48.288327]},"id":"k5NjU"},{"type":"Feature","properties":{"name":"Gemeinschaftsgarten trifft Fußballverein"},"geometry":{"type":"Point","coordinates":[16.410086,48.283228]},"id":"E3NzE"},{"type":"Feature","properties":{"name":"Interkultureller Garten Bruno-Kreisky-Haus der Volkshilfe Wien"},"geometry":{"type":"Point","coordinates":[16.412174,48.253841]},"id":"M2NDA"},{"type":"Feature","properties":{"name":"Nachbarschaftsgarten Florasdorf"},"geometry":{"type":"Point","coordinates":[16.395732,48.266155]},"id":"kxNDQ"},{"type":"Feature","properties":{"name":"Vereinsgarten"},"geometry":{"type":"Point","coordinates":[16.399873,48.310503]},"id":"E4Mjc"},{"type":"Feature","properties":{"name":"Gemeinschaftsgarten Madame d’Ora"},"geometry":{"type":"Point","coordinates":[16.498139,48.223226]},"id":"QwOTc"},{"type":"Feature","properties":{"name":"Nachbarschaftsgarten Donaucity/Kaisermühlen"},"geometry":{"type":"Point","coordinates":[16.425633,48.220064]},"id":"g3NTY"},{"type":"Feature","properties":{"name":"Paradiesgartl Neue Lobau"},"geometry":{"type":"Point","coordinates":[16.496562,48.211735]},"id":"c2NTQ"},{"type":"Feature","properties":{"name":"Seestadtgarten"},"geometry":{"type":"Point","coordinates":[16.498257,48.222633]},"id":"A4Mzk"},{"type":"Feature","properties":{"name":"Garten Helene"},"geometry":{"type":"Point","coordinates":[16.318134,48.146108]},"id":"UzMjc"},{"type":"Feature","properties":{"name":"Nachbarschaftsgarten Willergasse"},"geometry":{"type":"Point","coordinates":[16.256543,48.137169]},"id":"Y0NDU"},{"type":"Feature","properties":{"name":"Sonnengarten Wiener Flur"},"geometry":{"type":"Point","coordinates":[16.314837,48.13182]},"id":"UwMzY"}],"_umap_options":{"displayOnLoad":true,"inCaption":true,"browsable":true,"editMode":"advanced","remoteData":{},"name":"urban gardening","color":"Green","iconUrl":"/uploads/pictogram/spring.svg","id":"a0148c22-a698-40f3-8082-5b2d95b33cb2","permissions":{"edit_status":0}}};

L.geoJSON(urban_gardening, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: icons.urbanGardeningMarker});
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
        }
    }
}).addTo(map);


//urban_space
var urban_space = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"Spielstrasse Kleistgasse"},"geometry":{"type":"Point","coordinates":[16.389579,48.191197]},"id":"gzNTU"},{"type":"Feature","properties":{"name":"Krongarten"},"geometry":{"type":"Point","coordinates":[16.361617,48.193163]},"id":"kzNTU"},{"type":"Feature","properties":{"name":"Initiative Schwendermarkt"},"geometry":{"type":"Point","coordinates":[16.326365,48.190959]},"id":"E5NjM"}],"_umap_options":{"displayOnLoad":true,"inCaption":true,"browsable":true,"editMode":"advanced","remoteData":{},"name":"urban space","iconUrl":"/uploads/pictogram/guidepost.svg","color":"Blue","id":"1973d821-b36a-4685-ab7c-fcbc9c6a6c49","permissions":{"edit_status":0}}};

L.geoJSON(urban_space, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: icons.urbanSpaceMarker});
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
        }
    }
}).addTo(map);


//All real life collected Markers
var markerInfo = {
    'parkletSchuhmeierplatz': {
        title: 'Parklet Schuhmeierplatz',
        image: 'images/parklet_Schuhmeierplatz.jpg',
        details: 'Ein paar ehemalige Parkplätze wurden in ein gemütliches Plätzchen unter einem Baum umgewandelt, wo man sich hinsetzen und den Tag genießen kann.',
        coordinates: [48.211330421772104, 16.320188894470093],
        type: 'parklet'
    },
    'parkletKriemhildplatz': {
        title: 'Sommer, Sonne und Reisen im Kopf',
        image: 'images/parklet_Kriemhildplatz.jpg',
        details: 'Die Holzbänke mit den dazugehörigen Tischen haben zwei Parkplätze ersetzt und einen neuen Platz für Fußgänger geschaffen.',
        coordinates: [48.20235358524121, 16.329574574549415],
        type: 'parklet'
    },
    'parkletAlberichgasse': {
        title: 'Parklet Allmunde',
        image: 'images/parklet_Alberichgasse.jpg',
        details: 'Dieses Parklet wurde dank und für Allmunde, Verein für solidarökonomische Lebenskultur, erstellt. Nehmen Sie Platz oder treten Sie ein, um mehr über den Verein zu erfahren, der für seine Mitglieder kollektiv Lebensmittelbestellungen direkt bei regionalen Erzeugern organisiert.',
        coordinates: [48.201665079148256, 16.330600920935527],
        type: 'parklet'
    },
    'parkletHasnerstrasse': {
        title: '*peppaoase - Platz zum Durchatmen und Kraft tanken',
        image: 'images/parklet_Hasnerstrasse.jpg',
        details: 'Neben *peppa - Zentrum für Mädchen* und junge Frauen* finden Sie hier ein gemütliches Plätzchen, um mit Freunden zusammenzusitzen, Ihr Essen zu genießen oder einfach nur das Grün der Umgebung zu betrachten.',
        coordinates: [48.209074704817795, 16.326151386240877],
        type: 'parklet'
    },
    'ibsengarten': {
        title: 'Ibsengarten',
        image: 'images/56.jpg',
        details: 'Der Ibsengarten wird vom Zentrum für Inklusion und Sonderpädagogik Kienmayergasse betrieben, spacelab_girls und einigen Anrainern betrieben. Die Fläche ist 230 m² groß und wurde im Rahmen von Garteln ums Eck durch eine Gestaltungsvereinbarung zur Verfügung gestellt.',
        coordinates: [48.203036, 16.311699],
        type: 'urbanGardening'
    },
    'lambertgarten': {
        title: 'Lambertgarten',
        image: 'images/58.jpg',
        details: 'In der Lambertgasse wurde ein kleiner wenig genutzter Park zu einem Garten für Nachbar*innen umgewandelt. Auf Einzelparzellen und im Gemeinschaftsbeet werden Gemüse, Kräuter und Blumen angebaut. Der Park steht anderen Nutzer*innen nach wie vor zum Verweilen offen.',
        coordinates: [48.21296,16.319547],
        type: 'urbanGardening'
    },
    'parkguel': {
        title: 'Park GuEL',
        image: 'images/80.jpg',
        details: 'Ich freue mich über Dein Interesse am Gemeinschaftsgarten Park GuEL, ein Hochbeet zu bewirtschaften und damit das Grätzel Laurentiusplatz\Breitensee zu beleben, Lebens- und Liebenswerter zu machen!',
        coordinates: [48.203633, 16.312169],
        type: 'urbanGardening'
    },
    'erstesWienerWohnstrassenGratzel': {
        title: 'Erstes Wiener Wohnstraßengrätzel',
        image: 'images/90.jpg',
        details: 'Im Grätzel hinter der Stadthalle befinden sich gleich sieben Wohnstraßen in unmittelbarer Nähe, drei zu jeder Seite des Burjanplatzes und eine sozusagen als Verbindungsstraße. Zwei sind durch die Bemalung als Blumen-Wohnstraße als besondere Straßen gut gekennzeichnet.',
        description: 'Im Grätzel hinter der Stadthalle befinden sich gleich sieben Wohnstraßen in unmittelbarer Nähe, drei zu jeder Seite des Burjanplatzes und eine sozusagen als Verbindungsstraße. Zwei sind durch die Bemalung als Blumen-Wohnstraße als besondere Straßen gut gekennzeichnet.In dieser räumlichen Konstellation erkennen wir eine große Chance, dass Wien ganz nach dem Vorbild der Superblocks in Barcelona ein richtiges Wohnstraßen-Grätzel bekommt. Daher haben wir hier das „Erste Wiener Wohnstraßen-Grätzel“ ausgerufen und bringen es mit vielfältigen Aktivitäten seit 2018 zum Erblühen. Um das Potenzial dieses Grätzels voll auszuschöpfen, haben wir auch eine Petition gestartet, um das Erste Wiener Wohnstraßen-Grätzel um zwei weitere Wohnstraßen zu erweitern. Mehr Informationen dazu findet ihr hier. Doch schon jetzt können alle die Wohnstraße als konsumfreien öffentlichen Raum nutzen. So auch Ihr! Ihr könnt Euch etwa Sessel/Liegestühle/Picknickdecken schnappen und Euch zum Kaffeetrinken, auf einen abendlichen Cocktail, zum Lesepicknick treffen. Ihr könnt dort mit dem Rad fahren oder Räder schlagen, Federball spielen, Euer Lauf-ABC trainieren, Tempelhüpfen. Außerdem eignet sich die Straße zum Gesellschaftsspiele spielen, Kleider- und Pflanzentausch, zum Bemalen mit Straßenkreide, um andere Menschen kennenzulernen oder … Und so laden wir Euch ein: Geht selbst hinaus und erobert dieses verborgene Juwel.',
        coordinates: [48.202143, 16.330569],
        type: 'urbanSpace'
    },
    'gemeinschaftlichKompostierenFuenfhaus': {
        title: 'Gemeinschaftlich Kompostieren Fünfhaus',
        image: 'images/95.jpg',
        details: 'Menschen in der Nachbarschaft wurden eingeladen, ihre Bioabfälle gemeinschaftlich und vor Ort in fruchtbaren Biodünger zu verwandeln. Derzeit sind 30 Haushalte beteiligt, die ihre Abfälle regelmäßig zu den Containern bringen.  Gemeinsam schaut die Gruppe darauf, dass es eine gute Mischung aus harten und weichen, feuchten und trockenen Bestandteilen gibt. Bei Aktionstagen wird gemeinsam umgeschaufelt und alle paar Monate wird gemeinsam geerntet. Der fertige Kompost wird zur Düngung von Blumentöpfen, Balkonkisten, Baumscheiben und Gemüsebeeten der Teilnehmer*innen verwendet.',
        coordinates: [48.200689, 16.330249],
        type: 'workingTogether' 
    },
    'booksharingKienmayergasse': {
        title: 'Booksharing Kienmayergasse',
        image: 'images/booksharing_Kienmayergasse.jpg',
        details: 'Ein offener Bücherschrank neben dem Bürgersteig der Straße. Er befindet sich in einer ehemaligen Telefonzelle. Nehmen Sie sich ein Buch von hier mit oder lassen Sie ein paar Bücher liegen, um ihnen ein zweites Zuhause zu geben.',
        coordinates: [48.20006, 16.31489],
        type: 'booksharing'
    },
    'clubLogin': {
        title: 'Club LOGIN',
        image: 'images/clubLogin.jpg',
        details: 'Gegründet im Jahr 2002, ist LOGIN eine gemeinnützige Organisation, die sich der Gesundheitsförderung und der Schaffung unterstützender sozialer Netzwerke widmet. Sie betont ein soziales Verständnis von Gesundheit als einen „Zustand von körperlichem, geistigem und sozialem Wohlbefinden“. LOGIN nutzt Sport und Bewegung zur sozialen Integration und zur Verbesserung der Gesundheit sowie der Gesundheitskompetenz. Die Organisation bietet zudem verschiedene therapeutische, achtsamkeitsbasierte und andere gesundheitsfördernde Aktivitäten an. Durch ihren sozialen Treffpunkt loginBase bietet LOGIN eine umfangreiche Palette an Unterstützungs- und Entwicklungsmöglichkeiten.',
        coordinates: [48.18697, 16.32147],
        type: 'foodsharing'
    },
    'neunerhausCafe': {
        title: 'neunerhaus Café',
        image: 'images/neunerhausCafe.jpg',
        details: 'neunerhaus ist eine Wiener Sozialorganisation, die obdachlosen und armutsgefährdeten Menschen hilft, ein selbstbestimmtes und menschenwürdiges Leben zu führen. Ihr Ziel ist es, durch Hilfe zur Selbsthilfe die Lebenssituation dieser Menschen langfristig zu verbessern und Wohnungslosigkeit zu beenden. Jährlich betreut und berät neunerhaus über 1000 ehemals obdachlose Menschen in drei Wohnhäusern sowie durch Housing First und Mobil betreutes Wohnen. Das Gesundheitszentrum in Wien Margareten bietet medizinische Versorgung für wohnungslose und nichtversicherte Menschen, während ehrenamtliche Tierärzte sich um ihre Haustiere kümmern. Seit 25 Jahren setzt neunerhaus auf innovative Ansätze in der Wohnungslosenhilfe. Highlights sind die Einführung des Housing First-Konzepts in Wien (2012), die Gründung der Tochtergesellschaft neunerimmo (2017), und der Start eines Zertifikatskurses für Peers in der Wohnungslosenhilfe (2019). 2021 eröffnete die neunerhaus Praxis Psychische Gesundheit sowie die Sozial- und Gesundheitspraxis dock. Anfang 2023 wurde ein Wohnhaus in ein Chancenhaus für junge Erwachsene umgewandelt.',
        coordinates: [48.1861, 16.34488],
        type: 'foodsharing'
    },
    'albertgarten': {
        title: 'Albertgarten',
        image: 'images/albertgarten.jpg',
        details: 'Hier garteln BewohnerInnen der Josefstadt, um jeder PassantIn einen kleinen, aber feinen Schaugarten als Grünoase zu bieten. Seit 2015 hat unser Verein das Ziel, das Grätzel mit Farbe und Leben zu füllen. Dazu werden die 18 Beetabschnitte von uns bepflanzt, von Beikraut befreit, mit Komposterde gedüngt, regelmäßig gegossen, und wenn wir damit Erfolg haben, ernten wir unsere gesunden Früchte.',
        coordinates: [48.21418, 16.34412],
        type: 'urbanGardening'
    },
    'bennogarten': {
        title: 'Bennogarten',
        image: 'images/bennogarten.jpg',
        details: 'Alle, die sich für ökologische Themen interessieren und Freude am gemeinschaftlichen Gärtnern haben, können sich um eine Parzelle im Nachbarschaftsgarten bewerben. Der Bennogarten umfasst 9 Beetkästen, die in Einzelbeete und ein Gemeinschaftsbeet aufgeteilt sind. Ziel ist es, jedes Jahr neuen InteressentInnen die Teilnahme an den Stadtgärten zu ermöglichen. Zusätzlich organisiert die Agendagruppe mehrere Veranstaltungen zum Thema urbanes Gärtnern, an denen alle BewohnerInnen der Josefstadt teilnehmen können. Informationen zu den bevorstehenden Treffen finden sich auf den Anschlagtafeln am Eingang der Gärten.',
        coordinates: [48.21204, 16.34235],
        type: 'urbanGardening'
    },
    'gartenAmWerk': {
        title: 'Garten am Werk',
        image: 'images/gartenAmWerk.jpg',
        details: 'Der Garten am Werk im Innenhof des Theater am Werk bietet einen kommerzfreien Raum, der als Ort der Entspannung und Begegnung für alle zugänglich ist. Nachbar_innen können in Hochbeeten Kräuter und Gemüse anbauen. Zudem ist der Garten mit einer Büchertauschzelle und verschiedenen Sitzgelegenheiten zur allgemeinen Nutzung ausgestattet.',
        coordinates: [48.16614, 16.32512],
        type: 'urbanGardening'
    },
    'gemeinschaftsgartenHortensium': {
        title: 'Gemeinschaftsgarten – Hortensium',
        image: 'images/gemeinschaftsgartenHortensium.jpg',
        details: 'Unser Gemeinschaftsgarten ist ein Projekt für alle, die Freude am gemeinschaftlichen Gärtnern haben. Mitten in Wien gelegen, bietet er Stadtbewohner/innen die Möglichkeit, Obst und Gemüse ökologisch anzubauen. Der Gemeinschaftsgarten soll auch ein Ort der Begegnung sein. Hier können Nachbar/innen bei der gemeinsamen Arbeit einander besser kennenlernen, Praxiswissen und Erfahrungen austauschen, ihre Umgebung aktiv mitgestalten und den Austausch zwischen den Generationen fördern.',
        coordinates: [48.17629, 16.33271],
        type: 'urbanGardening'
    },
    'gemeinschaftsgartenJosefStraussPark': {
        title: 'Gemeinschaftsgarten Josef-Strauß-Park',
        image: 'images/gemeinschaftsgartenJosefStraussPark.jpg',
        details: 'Der Josef-Strauß-Park im 7. Bezirk wurde neu gestaltet und im nördlichen Bereich ein kleiner Gemeinschaftsgarten angelegt. In zehn Hochbeeten wird hier gemeinsam gegartelt. Derzeit kümmern sich 16 Familien und Einzelpersonen aus der Nachbarschaft um die Gartenbeete. Vor Ort gibt es zudem einen Wasseranschluss, eine Werkzeugkiste und Bänke zum Verweilen.',
        coordinates: [48.20748, 16.34098],
        type: 'urbanGardening'
    },
    'naHe': {
        title: 'NaHe – Nachbarschaftsgarten Hetzendorf',
        image: 'images/naHe.jpg',
        details: 'Ein Nachbarschaftsgarten ist ein Gemeinschaftsprojekt engagierter GärtnerInnen, die gemeinsam einen Garten betreuen und die Nachbarschaft kennenlernen möchten. Dabei geht es nicht nur um Gartenarbeit, sondern auch um das Knüpfen sozialer Kontakte. Gegenseitige Unterstützung, Wertschätzung sowie das Nutzen der Kompetenzen und Ressourcen aller Mitglieder sind zentrale Merkmale. Im Nachbarschaftsgarten Hetzendorf können die Mitglieder ihre Beetgröße selbst bestimmen, da das Grundstück mit 7500 m² sehr groß ist. Dies ermöglicht eine individuelle Gestaltung der Beete. Ein weiteres Ziel ist es, eine große Gemeinschaftsfläche zu etablieren und mit lokalen Institutionen wie Kindergärten und Schulen zusammenzuarbeiten. Diese sollen den Garten nutzen können, um ihren Alltag abwechslungsreicher zu gestalten. Besonders wichtig ist uns, biologisch und nachhaltig zu gärtnern. Damit leisten wir einen Beitrag zum Schutz der Natur und schaffen ein wertvolles Stück Grün in der Stadt.',
        coordinates: [48.1668, 16.31031],
        type: 'urbanGardening'
    },
    'schmelzgarten': {
        title: 'Schmelzgarten',
        image: 'images/schmelzgarten.jpg',
        details: 'Der Schmelzgarten ist ein gemeinschaftlich genutzter Garten, betrieben von engagierten und interessierten NachbarInnen der Schmelz. Im Sommer 2016 wurde er von FRISCH - Freirauminitiative Schmelz - initiiert, organisiert und geplant. Die Umsetzung des Schmelzgartens erfolgte durch die zukünftigen GärtnerInnen und weitere GartenliebhaberInnen.',
        coordinates: [48.20292, 16.31855],
        type: 'urbanGardening'
    },
    'tigergarten': {
        title: 'Tigergarten',
        image: 'images/tigergarten.jpg',
        details: 'Der Tigergarten ist einer von drei Gemeinschaftsgärten im 8. Bezirk. Diese grüne Oase mitten in der Stadt bietet die Möglichkeit, natürliche Kreisläufe zu beobachten und eigenständig auszuprobieren. Doch es geht nicht nur ums Säen und Ernten, sondern auch um Gemeinschaft, Nachbarschaft, Naturschutz, Klimaschutz und die Verschönerung des Bezirks. Öffentliche Feste und Workshops fördern das Zusammenleben. Hier gärtnern bis zu 50 Erwachsene und viele Kinder. Sie betreuen 19 Hochbeete mit einer Fläche von jeweils 1,2 m x 1,5 m, ein großes Gemeinschaftsbeet, ein Kräuterbeet, ebenerdige Gartenflächen sowie das APCOA-Beet am Tigerplatzerl Ecke Tiger-/Pfeilgasse. Jedes Mitglied übernimmt eine feste Aufgabe und engagiert sich bei Garteneinsätzen. Jedes Jahr organisieren die Gemeinschaftsgärten Josefstadt einen öffentlichen Workshop zum Thema urbanes Gärtnern sowie ein Sommer- und Herbstfest.',
        coordinates: [48.20891, 16.34544],
        type: 'urbanGardening'
    },
    'wohnzimmerAmUhlplatz': {
        title: 'Wohnzimmer am Uhlplatz',
        image: 'images/wohnzimmerAmUhlplatz.jpg',
        details: 'Der Platz hinter der Breitenfelder Kirche kann als Treffpunkt und zusätzlicher gemeinsamer Raum für das Grätzl dienen! Das Projekt „Wohnzimmer am Uhlplatz“ ist mehr als nur eine Idee und erfreut sich großer Beliebtheit im Grätzl! Geplant ist der Bau eines temporären Wohnzimmers im Freien, ausgestattet mit Begrünung, einem Bücherregal, Sitzgelegenheiten und einem Holztisch. Es gibt keinen Konsumationszwang – einfach verweilen und genießen!',
        coordinates: [48.212, 16.33972],
        type: 'urbanSpace'
    },
};
// Create markers for each of the locations
for (var key in markerInfo) {
    var marker = L.marker(markerInfo[key].coordinates, {icon: outlineIcons[markerInfo[key].type + 'Marker']}).addTo(map).bindPopup("<h3>" + markerInfo[key].title + "</h3><p>" + markerInfo[key].details + "</p><button id='openModal'>Mehr Informationen</button>").options.id = key;
}

// Get the modal
var modal = document.getElementById("myModal");
// Get the image and details elements in the modal
var modalImage = document.getElementById("modalImage");
var modalDetails = document.getElementById("modalDetails");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the popup is opened
map.on('popupopen', function(e) {
    // Get the id of the marker
    var markerId = e.popup._source.options.id;

    // Get the information for the marker
    var info = markerInfo[markerId];

    // Get the button that opens the modal
    var btn = document.getElementById("openModal");

    if (btn) {
        btn.onclick = function() {
            modal.style.display = "flex";
            modalTitle.textContent = info.title;
            modalImage.src = info.image; 
            if (info.description) {
                modalDetails.textContent = info.description; 
            } else {
            modalDetails.textContent = info.details; 
            }
        }
    }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    console.log("close");
    modal.style.display = "none";
}
// Get the help button and the help modal
var helpButton = document.getElementById("helpButton");
var helpModal = document.getElementById("helpModal");
var helpSpan = document.getElementsByClassName("helpClose")[0];
// When the user clicks the help button, open the help modal
helpButton.onclick = function() {
    helpModal.style.display = "block";
}
// When the user clicks on <span> (x), close the help modal
helpSpan.onclick = function() {
    helpModal.style.display = "none";
}
// When the user clicks anywhere outside of the modals, close it
window.onclick = function(event) {
    if (event.target == helpModal) {
        helpModal.style.display = "none";
    }
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Check if it's the user's first visit
if (!localStorage.getItem('visitedBefore')) {
    // If it's the first visit, show the help modal and set the flag
    helpModal.style.display = "block";
    localStorage.setItem('visitedBefore', 'true');
}
// Add a tile layer to the map 
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'sirnice/clweso6ft00ha01qsd6vi00dg', 
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1Ijoic2lybmljZSIsImEiOiJjazR5bnU5dmwwMmM2M2xwMmw2YmFhazh1In0.TVElIMMh59ck1p-tG6OKEw' 
}).addTo(map);  

function toggleBurgerMenu() {
    var menu = document.querySelector('.burger-menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

