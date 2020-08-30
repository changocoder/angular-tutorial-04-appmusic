"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ArtistComponent = void 0;
var core_1 = require("@angular/core");
var ArtistComponent = /** @class */ (function () {
    function ArtistComponent(router, spotifyService) {
        var _this = this;
        this.router = router;
        this.spotifyService = spotifyService;
        this.artist = {};
        this.loadingArtist = true;
        this.router.params.subscribe(function (params) {
            _this.getArtist(params['id']);
        });
    }
    ArtistComponent.prototype.getArtist = function (id) {
        var _this = this;
        this.loadingArtist = true;
        this.spotifyService.getArtist(id)
            .subscribe(function (data) {
            _this.artist = data;
            console.log(_this.artist);
            _this.loadingArtist = false;
        });
    };
    ArtistComponent = __decorate([
        core_1.Component({
            selector: 'app-artist',
            templateUrl: 'artist.component.html'
        })
    ], ArtistComponent);
    return ArtistComponent;
}());
exports.ArtistComponent = ArtistComponent;
