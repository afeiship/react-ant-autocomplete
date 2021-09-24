# react-ant-autocomplete3
> Autocomplete for antd with keyword filter for antd v3.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-autocomplete3
```

## usage
1. import css
  ```scss
  @import "~@jswork/boilerplate-react-component/dist/style.css";

  // or use sass
  @import "~@jswork/boilerplate-react-component/dist/style.scss";

  // customize your styles:
  $boilerplate-react-component-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactAntAutocomplete3 from '@jswork/boilerplate-react-component';
  import styled from 'styled-components';

  const Container = styled.div`
    width: 80%;
    margin: 30px auto 0;
  `;

  export default (props: any) => {
    return (
      <Container>
        <ReactAntAutocomplete3 />
      </Container>
    );
  };

  ```

## preview
- https://afeiship.github.io/boilerplate-react-component/

## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-autocomplete3/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-autocomplete3
[version-url]: https://npmjs.org/package/@jswork/react-ant-autocomplete3

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-autocomplete3
[license-url]: https://github.com/afeiship/react-ant-autocomplete3/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-autocomplete3
[size-url]: https://github.com/afeiship/react-ant-autocomplete3/blob/master/dist/react-ant-autocomplete3.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-autocomplete3
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-autocomplete3
