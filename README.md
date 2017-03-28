[![npm](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/ng2-facebook-sdk)

[![NPM](https://nodei.co/npm/ng2-facebook-sdk.png?stars&downloads)](https://nodei.co/npm/ng2-facebook-sdk/)
[![NPM](https://nodei.co/npm-dl/ng2-facebook-sdk.png?months=6&height=2)](https://nodei.co/npm/ng2-facebook-sdk/)


# Angular2 Facebook SDK
This is a wrapper for the official Facebook JavaScript SDK. It makes it easier to use Facebook SDK with Angular 2 by providing components, providers and types.

## Installation

- Install via NPM:

```
npm i --save ng2-facebook-sdk
```

- Add the Facebook JavaScript SDK to your index.html
```
<script type="text/javascript" src="https://connect.facebook.net/en_US/sdk.js"></script>
```

- Add `FacebookModule` to your app's module
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

- Inject `FacebookService` and call the `init` method in your app's main component (recommended, but not necessary):
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


## Example Usage

You can view our example project here: https://github.com/zyramedia/ng2-facebook-sdk-example

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


# Disclaimer
A large portion of this module's documentation is copied from the official [Facebook Docs](https://developers.facebook.com/docs/). This is to make sure that everything is as clear as possible, and consistent with the way Facebook explains it.
