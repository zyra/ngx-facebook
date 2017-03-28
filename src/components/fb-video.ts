import { Component, Input, Output, ElementRef, Renderer, OnInit, EventEmitter } from '@angular/core';
import { FBMLAttribute, FBMLComponent, FBMLInstanceMethod } from './fbml-component';
declare var FB: any;

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
 * <fb-video href="https://www.facebook.com/facebook/videos/10153231379946729/" (startPlaying)="onVideoStartPlaying($event)" (paused)="onVideoPaused($event)"></fb-video>
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
@Component({
  selector: 'fb-video',
  template: ''
})
export class FBVideoComponent extends FBMLComponent implements OnInit {

  private _instance: any;

  /**
   * The absolute URL of the video.
   */
  @Input()
  @FBMLAttribute
  href: string;

  /**
   * Allow the video to be played in fullscreen mode. Can be false or true. Defaults to false;
   */
  @Input()
  @FBMLAttribute
  allowfullscreen: boolean;

  /**
   * Automatically start playing the video when the page loads. The video will be played without sound (muted). People can turn on sound via the video player controls. This setting does not apply to mobile devices. Can be false or true. Defaults to false.
   */
  @Input()
  @FBMLAttribute
  autoplay: boolean;

  /**
   * The width of the video container. Min. 220px.
   */
  @Input()
  @FBMLAttribute
  width: string;

  /**
   * Set to true to include the text from the Facebook post associated with the video, if any.
   */
  @Input()
  @FBMLAttribute
  showText: boolean;

  /**
   * Set to true to show captions (if available) by default. Captions are only available on desktop.
   */
  @Input()
  @FBMLAttribute
  showCaptions: boolean;

  /**
   * Fired when video starts to play.
   */
  @Output()
  startedPlaying: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when video pauses.
   */
  @Output()
  paused: EventEmitter<any> = new EventEmitter<any>();

  /**
   *
   Fired when video finishes playing.
   */
  @Output()
  finishedPlaying: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when video starts to buffer.
   */
  @Output()
  startedBuffering: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when video recovers from buffering.
   */
  @Output()
  finishedBuffering: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when an error occurs on the video.
   */
  @Output()
  error: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    el: ElementRef,
    rnd: Renderer
  ) {
    super(el, rnd, 'fb-video');
  }

  /**
   * @hidden
   */
  ngOnInit() {
    FB.Event.subscribe('xfbml.ready', (msg: any) => {
      if (msg.type === 'video') {
        this._instance = msg.instance;
        console.log(msg);
        // TODO make sure that we getting the right instance, in case we have more than one player

        this._instance.subscribe('startedPlaying', (e: any) => this.startedPlaying.emit(e));
        this._instance.subscribe('paused', (e: any) => this.paused.emit(e));
        this._instance.subscribe('finishedPlaying', (e: any) => this.finishedPlaying.emit(e));
        this._instance.subscribe('startedBuffering', (e: any) => this.startedBuffering.emit(e));
        this._instance.subscribe('finishedBuffering', (e: any) => this.finishedBuffering.emit(e));
        this._instance.subscribe('error', (e: any) => this.error.emit(e));
      }
    });
  }

  /**
   * Plays the video.
   */
  @FBMLInstanceMethod
  play() {}

  /**
   * Pauses the video.
   */
  @FBMLInstanceMethod
  pause() {}

  /**
   * Seeks to specified position.
   * @param seconds {number}
   */
  @FBMLInstanceMethod
  seek(seconds: number) {}

  /**
   * Mute the video.
   */
  @FBMLInstanceMethod
  mute() {}

  /**
   * Unmute the video.
   */
  @FBMLInstanceMethod
  unmute() {}

  /**
   * Returns true if video is muted, false if not.
   */
  @FBMLInstanceMethod
  isMuted(): boolean { return; }

  /**
   * Set the volume
   * @param volume
   */
  @FBMLInstanceMethod
  setVolume(volume: number) {}

  /**
   * Get the volume
   */
  @FBMLInstanceMethod
  getVolume(): number { return; }

  /**
   * Returns the current video time position in seconds
   */
  @FBMLInstanceMethod
  getCurrentPosition() {}

  /**
   * Returns the video duration in seconds
   */
  @FBMLInstanceMethod
  getDuration() {}

}
