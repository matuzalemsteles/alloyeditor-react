# AlloyEditor v1.5.1

Example for use AlloyEditor with React v16.3.1

### Loader AlloyEditor

In React `16.x.x` `PropTypes` and `createReactClass` have been deprecated, currently in the version of AlloyEditor is used React `15.x.x` and in order to use AlloyEditor in versions of the latest React 16.x.x it is recommended that you install `prop-types` and `create-react-class`. You can look at `loader-utils.js` in this repository. Just add `prop-types` and `create-react-class` to `window`.

You need to import the `PropTypes` and `createReactClass` before importing the `AlloyEditor` so that it can see.
```
window.PropTypes = PropTypes;
window.createReactClass = createReactClass;
```

Ainda podem ter alguns casos de uso que apenas adicionando o `prop-types` e `create-react-class` no `window` o AlloyEditor não consegue enxergar. Você ainda pode tentar modificando o `loader-utils.js` modificando o invez de `window` para `React`.
```
React.PropTypes = PropTypes;
React.createClass = createReactClass;
```
