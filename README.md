# react-loading-components
Easy to use loading animations for React projects. Uses SVG animations from SamHerbert [SVG-Loaders](https://github.com/SamHerbert/SVG-Loaders) project.

## Installation

```
npm i react-loading-components
```
or

```
yarn add react-loading-components
```

## Demo

[DEMO](https://safeimuslim.github.io/react-loading-components-demo/)

## Loading Types
* audio
* ball_triangle
* bars
* circles
* grid
* hearts
* oval
* puff
* rings
* spinning_circles
* tail_spin
* three_dots

## Example

```javascript
import React from 'react';
import Loading from 'react-loading-components';

const Example = () => (
  <Loading type='ball_triangle' width={100} height={100} fill='#f44242' />
);

export default Example;
```

### Props

| Name | Type | Default Value |
|:------:|:------:|:---------------:|
| type | String | audio |
| fill | String | `#ffffff` |
| height | Number or String | 64 (px) |
| width | Number or String | 64 (px) |

## License

ISC

