import { ElementRef, Renderer2, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { FBMLComponent } from '../fbml-component';
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
export declare class FBVideoComponent extends FBMLComponent implements OnInit, OnDestroy {
    private _instance;
    /**
     * The absolute URL of the video.
     */
    href: string;
    /**
     * Allow the video to be played in fullscreen mode. Can be false or true. Defaults to false;
     */
    allowfullscreen: boolean;
    /**
     * Automatically start playing the video when the page loads. The video will be played without sound (muted). People can turn on sound via the video player controls. This setting does not apply to mobile devices. Can be false or true. Defaults to false.
     */
    autoplay: boolean;
    /**
     * The width of the video container. Min. 220px.
     */
    width: string;
    /**
     * Set to true to include the text from the Facebook post associated with the video, if any.
     */
    showText: boolean;
    /**
     * Set to true to show captions (if available) by default. Captions are only available on desktop.
     */
    showCaptions: boolean;
    /**
     * Fired when video starts to play.
     */
    startedPlaying: EventEmitter<any>;
    /**
     * Fired when video pauses.
     */
    paused: EventEmitter<any>;
    /**
     *
     Fired when video finishes playing.
     */
    finishedPlaying: EventEmitter<any>;
    /**
     * Fired when video starts to buffer.
     */
    startedBuffering: EventEmitter<any>;
    /**
     * Fired when video recovers from buffering.
     */
    finishedBuffering: EventEmitter<any>;
    /**
     * Fired when an error occurs on the video.
     */
    error: EventEmitter<any>;
    private _id;
    private _listeners;
    constructor(el: ElementRef, rnd: Renderer2);
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    /**
     * Plays the video.
     */
    play(): void;
    /**
     * Pauses the video.
     */
    pause(): void;
    /**
     * Seeks to specified position.
     * @param seconds {number}
     */
    seek(seconds: number): void;
    /**
     * Mute the video.
     */
    mute(): void;
    /**
     * Unmute the video.
     */
    unmute(): void;
    /**
     * Returns true if video is muted, false if not.
     */
    isMuted(): boolean;
    /**
     * Set the volume
     * @param volume
     */
    setVolume(volume: number): void;
    /**
     * Get the volume
     */
    getVolume(): number;
    /**
     * Returns the current video time position in seconds
     */
    getCurrentPosition(): void;
    /**
     * Returns the video duration in seconds
     */
    getDuration(): void;
}
