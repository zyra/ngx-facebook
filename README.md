# ngx-facebook

This is a wrapper for the official Facebook JavaScript SDK. It makes it easier to use Facebook SDK with Angular by providing components, providers and types.

[![npm](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/ngx-facebook)
[![Build Status](https://drone.zyra.ca/api/badges/zyra/ngx-facebook/status.svg)](https://drone.zyra.ca/zyra/ngx-facebook)
[![npm](https://img.shields.io/npm/dt/ngx-facebook.svg)](https://www.npmjs.com/package/ngx-facebook)
[![npm](https://img.shields.io/npm/dm/ngx-facebook.svg)](https://www.npmjs.com/package/ngx-facebook)

## Installation

#### 1. Install via NPM:

```shell
npm i -S ngx-facebook
```

#### 2. Add the Facebook JavaScript SDK to your index.html

```html
<script type="text/javascript" src="https://connect.facebook.net/en_US/sdk.js"></script>
```

#### 3. Import `FacebookModule` into your app's root module

```typescript
import { FacebookModule } from 'ngx-facebook';

@NgModule({
  ...
  imports: [
    FacebookModule.forRoot()
  ],
  ...
})
export class AppModule { }
```

#### 4. Inject `FacebookService` and call the `init` method (optional):

This method must be called before using [`login`](https://zyra.github.io/ngx-facebook/facebook-service/#login) or [`api`](https://zyra.github.io/ngx-facebook/facebook-service/#api) methods. It is not required for other methods/components.

```typescript
import { FacebookService, InitParams } from 'ngx-facebook';

...

export class MyComponentOrService {

  constructor(private fb: FacebookService) {

    const initParams: InitParams = {
      appId: '1234566778',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);

  }

}
```

## Documentation

You can view complete and detailed documentation by visiting https://zyra.github.io/ngx-facebook/.

## Example Usage

You can view our [example project here](https://zyra.github.io/ngx-facebook-example/) and/or view its [source code here](https://github.com/zyra/ngx-facebook-example/)

### Example of login with Facebook

```typescript
import { FacebookService, LoginResponse } from 'ngx-facebook';

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

### Example of sharing on Facebook

```typescript
import { FacebookService, UIParams, UIResponse } from 'ngx-facebook';

...

share(url: string) {

  const params: UIParams = {
    href: 'https://github.com/zyra/ngx-facebook',
    method: 'share'
  };

  this.fb.ui(params)
    .then((res: UIResponse) => console.log(res))
    .catch((e: any) => console.error(e));

}
```

### Example of adding a Facebook like button

```html
<fb-like href="https://github.com/zyra/ngx-facebook"></fb-like>
```

### Example of playing a Facebook video

#### Basic video component usage:

```html
<fb-video href="https://www.facebook.com/facebook/videos/10153231379946729/"></fb-video>
```

#### Advanced video component usage:

```html
<fb-video href="https://www.facebook.com/facebook/videos/10153231379946729/" (paused)="onVideoPaused($event)"></fb-video>
```

```typescript
import { Component, ViewChild } from '@angular/core';
import { FBVideoComponent } from 'ngx-facebook';

@Component(...)
export class MyComponent {

  @ViewChild(FBVideoComponent) video: FBVideoComponent;

  ngAfterViewInit() {
    this.video.play();
    this.video.pause();
    this.video.getVolume();
  }

  onVideoPaused(ev: any) {
    console.log('User paused the video');
  }

}
```

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/zyra/ngx-facebook/tags).

## Contribution

- **Having an issue**? or looking for support? [Open an issue](https://github.com/zyra/ngx-facebook/issues/new) and we will get you the help you need.
- Got a **new feature or a bug fix**? Fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Support this project

If you find this project useful, please star the repository to let people know that it's reliable. Also, share it with friends and colleagues that might find this useful as well. Thank you :smile:
