import { _ as _extends } from './objectWithoutPropertiesLoose-2d09fd44.js';
import { d as defaultTheme } from './defaultTheme-2111bb1f.js';
import { m as makeStyles$1 } from './makeStyles-b541edea.js';

function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return makeStyles$1(stylesOrCreator, _extends({
    defaultTheme: defaultTheme
  }, options));
}

export { makeStyles as m };
