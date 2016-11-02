# zssport match
[![Build Status](https://travis-ci.org/zsagia/zssport-match.svg?branch=master)](https://travis-ci.org/zsagia/zssport-match)
[![npm version](https://badge.fury.io/js/zssport-match.svg)](http://badge.fury.io/js/zssport-match)
[![devDependency Status](https://david-dm.org/zsagia/zssport-match/dev-status.svg)](https://david-dm.org/zsagia/zssport-match#info=devDependencies)
[![GitHub issues](https://img.shields.io/github/issues/zsagia/zssport-match.svg)](https://github.com/zsagia/zssport-match/issues)
[![GitHub stars](https://img.shields.io/github/stars/zsagia/zssport-match.svg)](https://github.com/zsagia/zssport-match/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/zsagia/zssport-match/master/LICENSE)

## Demo
https://zsagia.github.io/zssport-match/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#licence)

## About



## Installation

Install through npm:
```
npm install --save zssport-match
```

Then use it in your app like so:

```typescript
import {Component} from '@angular/core';
import {HelloWorld} from 'zssport-match';

@Component({
  selector: 'demo-app',
  directives: [HelloWorld],
  template: '<hello-world></hello-world>'
})
export class DemoApp {}
```

You may also find it useful to view the [demo source](https://github.com/zsagia/zssport-match/blob/master/demo/demo.ts).

### Usage without a module bundler
```
<script src="node_modules/dist/umd/zssport-match/zssport-match.js"></script>
<script>
    // everything is exported zssportMatch namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via typedoc and can be viewed here:
https://zsagia.github.io/zssport-match/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
