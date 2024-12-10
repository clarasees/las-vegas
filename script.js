
var map = L.map('map').setView([36.1173, -115.1761], 14);
var osm = L.tileLayer('https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=IBCKLYY5S4FWKs8guBUE', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);

var Stadia_StamenTonerLite = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.{ext}', {
    minZoom: 0,
    maxZoom: 22,
    attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    ext: 'png'
});

var Stadia_StamenToner = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.{ext}', {
    minZoom: 0,
    maxZoom: 20,
    attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    ext: 'png'
});

// ICONS
var starIcon = L.icon({
    iconUrl: 'img/iconstardust.png',
    // shadowUrl: 'img/stardustshadow.png',
    iconSize: [200, 280], // [width, height]
    shadowSize: [200, 280], // size of the shadow
    iconAnchor: [12, 295], // [-(margin-left), margin-top]
    // shadowAnchor: [120, 0],  // the same for the shadow
    popupAnchor: [88, -280] // point from which the popup should open relative to the iconAnchor
});

var duckIcon = L.icon({
    iconUrl: 'img/duck.png',
    // shadowUrl: 'img/stardustshadow.png',
    iconSize: [185, 130], // size of the icon
    shadowSize: [200, 280], // size of the shadow
    iconAnchor: [200, 0], // point of the icon which will correspond to marker's location
    //shadowAnchor: [120, 0],  // the same for the shadow
    popupAnchor: [-110, 0] // point from which the popup should open relative to the iconAnchor
});

var eatIcon = L.icon({
    iconUrl: 'img/eat.png',
    //shadowUrl: 'img/eatshadow.png',
    iconSize: [139.5, 209], // size of the icon
    //shadowSize: [200, 280], // size of the shadow
    iconAnchor: [80, 250], // point of the icon which will correspond to marker's location
    //shadowAnchor: [120, 0],  // the same for the shadow
    popupAnchor: [10, -210] // point from which the popup should open relative to the iconAnchor
});

var houseIcon = L.icon({
    iconUrl: 'img/house.png',
    // shadowUrl: 'img/stardustshadow.png',
    iconSize: [80, 120], // size of the icon
    // shadowSize: [200, 280], // size of the shadow
    iconAnchor: [40, 120], // point of the icon which will correspond to marker's location
    // shadowAnchor: [120, 0],  // the same for the shadow
    popupAnchor: [0, -80] // point from which the popup should open relative to the iconAnchor
});

var wIcon = L.icon({
    iconUrl: 'img/W.png',
    // shadowUrl: 'img/stardustshadow.png',
    iconSize: [102, 153], // size of the icon
    // shadowSize: [200, 280], // size of the shadow
    iconAnchor: [40, 120], // point of the icon which will correspond to marker's location
    // shadowAnchor: [120, 0],  // the same for the shadow
    popupAnchor: [0, -80] // point from which the popup should open relative to the iconAnchor
});



var deniseIcon = L.icon({
    iconUrl: 'img/denise.png',
    // shadowUrl: 'img/stardustshadow.png',
    iconSize: [110, 225], // size of the icon
    // shadowSize: [200, 280], // size of the shadow
    iconAnchor: [40, 120], // point of the icon which will correspond to marker's location
    // shadowAnchor: [120, 0],  // the same for the shadow
    popupAnchor: [0, -80] // point from which the popup should open relative to the iconAnchor
});

var venturiIcon = L.icon({
    iconUrl: 'img/Venturi.png',
    // shadowUrl: 'img/stardustshadow.png',
    iconSize: [110, 225], // size of the icon
    // shadowSize: [200, 280], // size of the shadow
    iconAnchor: [40, 120], // point of the icon which will correspond to marker's location
    // shadowAnchor: [120, 0],  // the same for the shadow
    popupAnchor: [0, -80] // point from which the popup should open relative to the iconAnchor
});

// MARKERS Create a marker
// var marker = L.marker([36.133832, -115.167282], { icon: starIcon }).addTo(map);
// var marker = L.marker([36.105209, -115.171917], { icon: duckIcon }).addTo(map);
// var marker = L.marker([36.124852, -115.1666866], { icon: eatIcon }).addTo(map);
// var marker = L.marker([36.120856, -115.173903], { icon: houseIcon }).addTo(map);
// var marker = L.marker([36.115055, -115.170999], { icon: wIcon }).addTo(map);

// POPUP Create a custom popup
L.marker([36.133832, -115.167282], {icon: starIcon}).addTo(map).bindPopup("A Significance for A&P Parking Lots, or Learning from Las Vegas. Learning from the existing landscape is a way of being revolutionary for an architect. Not the obvious way, which is to tear down Paris and begin again, as Le Corbusier suggested in the 1920s, but another, more tolerant way; that is, to question how we look at things. The commercial strip, the Las Vegas Strip in particular—the example par excellence—challenges the architect to take a posi­tive, non-chip-on-the-shoulder view. Architects are out of the habit of looking nonjudgmentally at the environment, because orthodox Mod­ern architecture is progressive, if not revolutionary, utopian, and puris­tic; it is dissatisfied with existing conditions. Modern architecture has been anything but permissive; architects have preferred to change the existing environment rather than enhance what is there. But to gain insight from the commonplace is nothing new; fine art often follows folk art. Romantic architects of the eighteenth century discovered an existing and conventional rustic architecture. Early Mod­ern architects appropriated an existing and conventional industrial vocabulary without much adaptation. Le Corbusier loved grain eleva­tors and steamships; the Bauhaus looked like a factory; Mies refined the details of American steel factories for concrete buildings. Modern archi­tects work through analogy, symbol, and image—although they have gone to lengths to disclaim almost all determinants of their forms ex­cept structural necessity and the program—and they derive insights, analogies, and stimulation from unexpected images. There is a perver­sity in the learning process; we look backward at history and tradition to go forward; we can also look downward to go upward. And withholding judgment may be used as a tool to make later judgment more sensitive. This is a way of learning from everything. ");
L.marker([36.105209, -115.171917], {icon: duckIcon}).addTo(map).bindPopup("The Duck and the Decorated Shed. Let us elaborate on the decorated shed by comparing Paul Rudolph’s Crawford Manor with our Guild House (in association with Cope and Lippincott; Figs. 77, 78). These two buildings are comparable in use, size, and date of construction: Both are high-rise apartments for the elderly, consisting of about 90 units, built in the mid-1960s. Their settings vary: Guild House, although freestanding, is a six-story imitation palazzo, analogous in structure and materials to the surrounding buildings and continuing, through its position and form, the street line of the Philadelphia gridiron plan it sits in. Crawford Manor, on the other hand, is unequivocally a soaring tower, unique in its Modern, Ville Radieuse world along New Haven’s limited-access Oak Street Connector.");
L.marker([36.124852, -115.1666866], {icon: eatIcon}).addTo(map).bindPopup("Architects who can accept the lessons of primitive vernacular archi­tecture, so easy to take in an exhibit like “Architecture without Archi­tects,” and of industrial, vernacular architecture, so easy to adapt to an electronic and space vernacular as elaborate neo-Brutalist or neo-Con­structivist megastructures, do not easily acknowledge the validity of the commercial vernacular. For the artist, creating the new may mean choosing the old or the existing. Pop artists have relearned this. Our ac­knowledgment of existing, commercial architecture at the scale of the highway is within this tradition. Modern architecture has not so much excluded the commercial ver­nacular as it has tried to take it over by inventing and enforcing a ver­nacular of its own, improved and universal. It has rejected the combina­tion of fine art and crude art. The Italian landscape has always harmo­nized the vulgar and the Vitruvian: the contorni around the duomo, the portiere’s laundry across the padrone’s portone, Supercortemaggiore against the Romanesque apse. Naked children have never played in our fountains, and I. M. Pei will never be happy on Route 66.");
L.marker([36.120856, -115.173903], {icon: houseIcon}).addTo(map).bindPopup("Symbol in Space Before Form in Space: Las Vegas as a Communication System | The sign for the Motel Monticello, a silhouette of an enormous Chip­pendale highboy, is visible on the highway before the motel itself. This architecture of styles and signs is anti spatial; it is an architecture of communication over space; communication dominates space as an ele­ment in the architecture and in the landscape (Figs. 1-6). But it is for a new scale of landscape. The philosophical associations of the old eclec­ticism evoked subtle and complex meanings to be savored in the docile spaces of a traditional landscape. The commercial persuasion of road­side eclecticism provokes bold impact in the vast and complex setting of a new landscape of big spaces, high speeds, and complex programs. Styles and signs make connections among many elements, far apart and seen fast. The message is basely commercial; the context is basically new. A driver 30 years ago could maintain a sense of orientation in space. At the simple crossroad a little sign with an arrow confirmed what was obvious. One knew where one was. When the crossroads becomes a cloverleaf, one must turn right to turn left, a contradiction poignantly evoked in the print by Allan D’Arcangelo (Fig. 7). But the driver has no time to ponder paradoxical subtleties within a dangerous, sinuous maze. He or she relies on signs for guidance—enormous signs in vast spaces at high speeds. The dominance of signs over space at a pedestrian scale occurs in big airports. Circulation in a big railroad station required little more than a simple axial system from taxi to train, by ticket window, stores, waiting room, and platform—all virtually without signs. Architects object to signs in buildings: “If the plan is clear, you can see where to go.” But complex programs and settings require complex combinations of media beyond the purer architectural triad of structure, form, and light at the service of space. They suggest an architecture of bold communication rather than one of subtle expression.");
L.marker([36.115055, -115.170999], {icon: wIcon}).addTo(map).bindPopup("Architecture as Symbol | Critics and historians, who documented the “decline of popular sym­bols” in art, supported orthodox Modern architects, who shunned sym­bolism of form as an expression or reinforcement of content: meaning was to be communicated, not through allusion to previously known forms, but through the inherent, physiognomic characteristics of form. The creation of architectural form was to be a logical process, free from images of past experience, determined solely by program and structure, with an occasional assist, as Alan Colquhoun has suggested, from in­tuition. But some recent critics have questioned the possible level of content to be derived from abstract forms. Others have demonstrated that the functionalists, despite their protestations, derived a formal vocabulary of their own, mainly from current art movements and the industrial ver­nacular; and latter-day followers such as the Archigram group have turned, while similarly protesting, to Pop Art and the space industry. However, most critics have slighted a continuing iconology in popular commercial art, the persuasive heraldry that pervades our environment from the advertising pages of The New Yorker to the superbillboards of Houston. And their theory of the “debasement” of symbolic architec­ture in nineteenth-century eclecticism has blinded them to the value of the representational architecture along highways. Those who acknowl­edge this roadside eclecticism denigrate it, because it flaunts the cliche of a decade ago as well as the style of a century ago. But why not? Time travels fast today. The Miami Beach Modern motel on a bleak stretch of highway in southern Delaware reminds jaded drivers of the welcome luxury of a tropical resort, persuading them, perhaps, to forgo the gracious planta­tion across the Virginia border called Motel Monticello. The real hotel in Miami alludes to the international stylishness of a Brazilian resort, which, in tum, derives from the International Style of middle Corbu. This evolution from the high source through the middle source to the low source took only 30 years. Today, the middle source, the neo­-Eclectic architecture of the 1940s and the 1950s, is less interesting than its commercial adaptations. Roadside copies of Ed Stone are more in­teresting than the real Ed Stone. ");

L.marker([36.111073, -115.173683], {icon: deniseIcon}).addTo(map).bindPopup("I am Denise.");


L.marker([36.123162, -115.167323], {icon: venturiIcon}).addTo(map).bindPopup("I am Venturi.");


//Leaflet layer control
var baseMaps = {
    'Open Street Map': osm,
    'B & W Lite': Stadia_StamenTonerLite,
    'B & W': Stadia_StamenToner,
}
L.control.layers(baseMaps).addTo(map);