# @xyzdev/ui

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Semantic UI + Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@xyzdev/ui` dependency to your project

```bash
yarn add @xyzdev/ui # or npm install @xyzdev/ui
```

2. Add `@xyzdev/ui` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@xyzdev/ui',

    // With options
    ['@xyzdev/ui', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Baker <root@baker.io>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@xyzdev/ui/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@xyzdev/ui

[npm-downloads-src]: https://img.shields.io/npm/dt/@xyzdev/ui.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@xyzdev/ui

[circle-ci-src]: https://img.shields.io/circleci/project/github/xyzrepo/ui.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/xyzrepo/ui

[codecov-src]: https://img.shields.io/codecov/c/github/xyzrepo/ui.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/xyzrepo/ui

[license-src]: https://img.shields.io/npm/l/@xyzdev/ui.svg?style=flat-square
[license-href]: https://npmjs.com/package/@xyzdev/ui
