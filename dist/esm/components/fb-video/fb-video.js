var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, ElementRef, Renderer2, EventEmitter } from '@angular/core';
import { FBMLAttribute, FBMLComponent, FBMLInstanceMethod } from '../fbml-component';
/**
 * @name Embedded Video
 * @shortdesc Component to embed Facebook videos
 * @fbdoc https://developers.facebook.com/docs/plugins/embedded-video-player
 * @description Component to embed Facebook videos and control them.
 * @usage
 * ```html
 * <!-- basic usage -->
 * <fb-video href="https://www.facebook.com/facebook/videos/10153231379946729/"></fb-video>
 *
 * <!-- event emitters -->
 * <fb-video href="https://www.facebook.com/facebook/videos/10153231379946729/" (paused)="onVideoPaused($event)"></fb-video>
 * ```
 *
 * To manually interact with the video player, fetch it using `ViewChild`.
 *
 * ```ts
 * import { Component, ViewChild } from '@angular/core';
 * import { FBVideoComponent } from 'ng2-facebook-sdk';
 *
 * @Component(...)
 * export class MyComponent {
 *
 *   @ViewChild(FBVideoComponent) video: FBVideoComponent;
 *
 *   ngAfterViewInit() {
 *     this.video.play();
 *     this.video.pause();
 *     this.video.getVolume();
 *   }
 *
 * }
 *
 * ```
 */
var FBVideoComponent = /** @class */ (function (_super) {
    __extends(FBVideoComponent, _super);
    function FBVideoComponent(el, rnd) {
        var _this = _super.call(this, el, rnd, 'fb-video') || this;
        /**
         * Fired when video starts to play.
         */
        _this.startedPlaying = new EventEmitter();
        /**
         * Fired when video pauses.
         */
        _this.paused = new EventEmitter();
        /**
         *
         Fired when video finishes playing.
         */
        _this.finishedPlaying = new EventEmitter();
        /**
         * Fired when video starts to buffer.
         */
        _this.startedBuffering = new EventEmitter();
        /**
         * Fired when video recovers from buffering.
         */
        _this.finishedBuffering = new EventEmitter();
        /**
         * Fired when an error occurs on the video.
         */
        _this.error = new EventEmitter();
        _this._listeners = [];
        _this.nativeElement.id = _this._id = 'video-' + String(Math.floor((Math.random() * 10000) + 1));
        return _this;
    }
    /**
     * @hidden
     */
    FBVideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        FB.Event.subscribe('xfbml.ready', function (msg) {
            if (msg.type === 'video' && msg.id === _this._id) {
                _this._instance = msg.instance;
                _this._listeners.push(_this._instance.subscribe('startedPlaying', function (e) { return _this.startedPlaying.emit(e); }), _this._instance.subscribe('paused', function (e) { return _this.paused.emit(e); }), _this._instance.subscribe('finishedPlaying', function (e) { return _this.finishedPlaying.emit(e); }), _this._instance.subscribe('startedBuffering', function (e) { return _this.startedBuffering.emit(e); }), _this._instance.subscribe('finishedBuffering', function (e) { return _this.finishedBuffering.emit(e); }), _this._instance.subscribe('error', function (e) { return _this.error.emit(e); }));
            }
        });
    };
    /**
     * @hidden
     */
    FBVideoComponent.prototype.ngOnDestroy = function () {
        this._listeners.forEach(function (l) {
            if (typeof l.release === 'function') {
                l.release();
            }
        });
    };
    /**
     * Plays the video.
     */
    FBVideoComponent.prototype.play = function () { };
    /**
     * Pauses the video.
     */
    FBVideoComponent.prototype.pause = function () { };
    /**
     * Seeks to specified position.
     * @param seconds {number}
     */
    FBVideoComponent.prototype.seek = function (seconds) { };
    /**
     * Mute the video.
     */
    FBVideoComponent.prototype.mute = function () { };
    /**
     * Unmute the video.
     */
    FBVideoComponent.prototype.unmute = function () { };
    /**
     * Returns true if video is muted, false if not.
     */
    FBVideoComponent.prototype.isMuted = function () { return; };
    /**
     * Set the volume
     * @param volume
     */
    FBVideoComponent.prototype.setVolume = function (volume) { };
    /**
     * Get the volume
     */
    FBVideoComponent.prototype.getVolume = function () { return; };
    /**
     * Returns the current video time position in seconds
     */
    FBVideoComponent.prototype.getCurrentPosition = function () { };
    /**
     * Returns the video duration in seconds
     */
    FBVideoComponent.prototype.getDuration = function () { };
    FBVideoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fb-video',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    FBVideoComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    FBVideoComponent.propDecorators = {
        'href': [{ type: Input },],
        'allowfullscreen': [{ type: Input },],
        'autoplay': [{ type: Input },],
        'width': [{ type: Input },],
        'showText': [{ type: Input },],
        'showCaptions': [{ type: Input },],
        'startedPlaying': [{ type: Output },],
        'paused': [{ type: Output },],
        'finishedPlaying': [{ type: Output },],
        'startedBuffering': [{ type: Output },],
        'finishedBuffering': [{ type: Output },],
        'error': [{ type: Output },],
    };
    __decorate([
        FBMLAttribute,
        __metadata("design:type", String)
    ], FBVideoComponent.prototype, "href", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", Boolean)
    ], FBVideoComponent.prototype, "allowfullscreen", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", Boolean)
    ], FBVideoComponent.prototype, "autoplay", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", String)
    ], FBVideoComponent.prototype, "width", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", Boolean)
    ], FBVideoComponent.prototype, "showText", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", Boolean)
    ], FBVideoComponent.prototype, "showCaptions", void 0);
    __decorate([
        FBMLInstanceMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FBVideoComponent.prototype, "play", null);
    __decorate([
        FBMLInstanceMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FBVideoComponent.prototype, "pause", null);
    __decorate([
        FBMLInstanceMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], FBVideoComponent.prototype, "seek", null);
    __decorate([
        FBMLInstanceMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FBVideoComponent.prototype, "mute", null);
    __decorate([
        FBMLInstanceMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FBVideoComponent.prototype, "unmute", null);
    __decorate([
        FBMLInstanceMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], FBVideoComponent.prototype, "isMuted", null);
    __decorate([
        FBMLInstanceMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], FBVideoComponent.prototype, "setVolume", null);
    __decorate([
        FBMLInstanceMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], FBVideoComponent.prototype, "getVolume", null);
    __decorate([
        FBMLInstanceMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FBVideoComponent.prototype, "getCurrentPosition", null);
    __decorate([
        FBMLInstanceMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FBVideoComponent.prototype, "getDuration", null);
    return FBVideoComponent;
}(FBMLComponent));
export { FBVideoComponent };
//# sourceMappingURL=fb-video.js.map