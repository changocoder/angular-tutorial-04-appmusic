"use strict";
exports.__esModule = true;
exports.ROUTES = void 0;
var home_component_1 = require("./components/home/home.component");
var search_component_1 = require("./components/search/search.component");
var artist_component_1 = require("./components/artist/artist.component");
exports.ROUTES = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'search', component: search_component_1.SearchComponent },
    { path: 'artist/:id', component: artist_component_1.ArtistComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
