# Angular2 Facebook SDK
This is a wrapper for the official Facebook JavaScript SDK. It makes it easier to use Facebook SDK with Angular 2 by providing components, providers and types.

<br><br>

[![NPM](https://nodei.co/npm/ng2-facebook-sdk.png?stars&downloads)](https://nodei.co/npm/ng2-facebook-sdk/)
[![NPM](https://nodei.co/npm-dl/ng2-facebook-sdk.png?months=6&height=2)](https://nodei.co/npm/ng2-facebook-sdk/)

[![npm](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/ng2-facebook-sdk)
[![CircleCI](https://img.shields.io/circleci/project/github/zyramedia/ng2-facebook-sdk.svg)](https://circleci.com/gh/zyramedia/ng2-facebook-sdk)
[![Travis](https://img.shields.io/travis/zyramedia/ng2-facebook-sdk.svg)](https://travis-ci.org/zyramedia/ng2-facebook-sdk)
[![Sauce Test Status](https://saucelabs.com/buildstatus/ng2facebooksdk)](https://saucelabs.com/u/ng2facebooksdk)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/ng2facebooksdk.svg)](https://saucelabs.com/u/ng2facebooksdk)

<br><br>

## Installation

#### 1. Install via NPM:

```shell
npm i --save ng2-facebook-sdk
```

#### 2. Add the Facebook JavaScript SDK to your index.html
```html
<script type="text/javascript" src="https://connect.facebook.net/en_US/sdk.js"></script>
```

#### 3. Import `FacebookModule` into your app's root module
```typescript

import { FacebookModule } from 'ng2-facebook-sdk';

@NgModule({
  ...
  imports: [
    FacebookModule.forRoot()
  ],
  ...
})
export class AppModule { }

```

If you only want to use [FacebookService](https://zyramedia.github.io/ng2-facebook-sdk/FacebookService) only, without using the other components, then you can import it in your app's module instead of `FacebookModule`.

#### 4. Inject `FacebookService` and call the `init` method (optional):
This method must be called before using [`login`](http://zyramedia.github.io/ng2-facebook-sdk/FacebookService/#login) or [`api`](http://zyramedia.github.io/ng2-facebook-sdk/FacebookService/#api) methods. It is not required for other methods/components.

```typescript
import { FacebookService, InitParams } from 'ng2-facebook-sdk';

...

export class MyComponentOrService {

  constructor(private fb: FacebookService) {

    let initParams: InitParams = {
      appId: '1234566778',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);

  }

}
```

<br><br><br><br>

## Documentation
You can view complete and detailed documentation by visiting https://zyramedia.github.io/ng2-facebook-sdk/.

<br><br><br><br>

## Example Usage

You can view our example project here: https://zyramedia.github.io/ng2-facebook-sdk-example/
and/or view its source code here: https://github.com/zyramedia/ng2-facebook-sdk-example/

<br><br>

### Example of login with Facebook

```typescript
import { FacebookService, LoginResponse } from 'ng2-facebook-sdk';

@Component(...)
export class MyComponent {

  constructor(private fb: FacebookService) { }

  loginWithFacebook(): void {

    this.fb.login()
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.error(error));

  }

}
```

<br><br>

### Example of sharing on Facebook
```typescript
import { FacebookService, UIParams, UIResponse } from 'ng2-facebook-sdk';

...

share(url: string) {

  let params: UIParams = {
    href: 'https://github.com/zyramedia/ng2-facebook-sdk',
    method: 'share'
  };

  this.fb.ui(params)
    .then((res: UIResponse) => console.log(res))
    .catch((e: any) => console.error(e));

}
```

<br><br>

### Example of adding a Facebook like button
```html
<fb-like href="https://github.com/zyramedia/ng2-facebook-sdk"></fb-like>
```

<br><br>

### Example of playing a Facebook video

#### Basic video component usage:
```html
<fb-video href="https://www.facebook.com/facebook/videos/10153231379946729/"></fb-video>
```

#### Advanced video component usage:
```html
<fb-video href="https://www.facebook.com/facebook/videos/10153231379946729/" (startPlaying)="onVideoStartPlaying($event)" (paused)="onVideoPaused($event)"></fb-video>
```
```typescript
import { Component, ViewChild } from '@angular/core';
import { FBVideoComponent } from 'ng2-facebook-sdk';

@Component(...)
export class MyComponent {

  @ViewChild(FBVideoComponent) video: FBVideoComponent;

  ngAfterViewInit() {
    this.video.play();
    this.video.pause();
    this.video.getVolume();
  }

  onVideoStartPlaying(ev: any) {
    console.log('User started playing video'):
  }

  onVideoPaused(ev: any) {
    console.log('User paused the video');
  }

}
```

<br><br><br><br>

# Disclaimer
A large portion of this module's documentation is copied from the official [Facebook Docs](https://developers.facebook.com/docs/). This is to make sure that everything is as clear as possible, and consistent with the way Facebook explains it.
