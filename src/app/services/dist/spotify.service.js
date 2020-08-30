"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SpotifyService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var SpotifyService = /** @class */ (function () {
    function SpotifyService(http) {
        this.http = http;
        this.getNewReleases();
    }
    SpotifyService.prototype.getQuery = function (query) {
        var url = "https://api.spotify.com/v1/" + query;
        var headers = new http_1.HttpHeaders({
            Authorization: 'Bearer BQBWP1XSxF4huJPJKZKE0k51ypSO9ryrSySSRPsMGvRCpdV9vXuggZsFZAM35_9_IwOEJZW8ASRTIWXpcFw'
        });
        return this.http.get(url, { headers: headers });
    };
    SpotifyService.prototype.getNewReleases = function () {
        return this.getQuery('browse/new-releases')
            .pipe(operators_1.map(function (data) { return data['albums'].items; }));
    };
    SpotifyService.prototype.searchArtist = function (query) {
        return this.getQuery("search?q=" + query + "&type=artist&limit=15")
            .pipe(operators_1.map(function (data) { return data['artists'].items; }));
    };
    SpotifyService.prototype.getArtist = function (id) {
        return this.getQuery("artists/" + id);
    };
    SpotifyService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SpotifyService);
    return SpotifyService;
}());
exports.SpotifyService = SpotifyService;
