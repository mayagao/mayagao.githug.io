'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement('div', null, _react2.default.createElement(_header2.default, null), _react2.default.createElement('div', { className: 'ph4 bt b--navy bw2 pt4 pt5-ns ph5-ns' }, _react2.default.createElement('div', { className: 'mw7 center' }, _react2.default.createElement('div', { className: 'f3 navy ' }, 'Maya Gao'), _react2.default.createElement('div', { className: 'f5 f4 navy lh-copy' }, _react2.default.createElement('p', { className: 'mt4' }, '\uD83D\uDC4B I am a product designer living and working in Washington D.C. Currently I design and build things for Mapbox. I\'ve worked on a wide range of projects here from the ', _react2.default.createElement('a', { className: 'blue dim link', href: 'mapbox-studio' }, 'Mapbox Studio style editor '), ' and ', _react2.default.createElement('a', { className: 'blue dim link', href: 'data-editor' }, 'data editor'), ', to the documentation system and the mobile navigation SDK. I often switch between UI design, communication design, and front-end development in my day-to-day work. '), _react2.default.createElement('p', null, 'Before Mapbox, I was a UI designer at Lonely Planet and a design intern at ', _react2.default.createElement('a', { className: 'blue dim link', href: 'https://www.upstatement.com/' }, 'Upstatement'), '.'), _react2.default.createElement('div', { className: 'pt3' }, _react2.default.createElement('div', { className: 'f4 mb2' }, 'Works'), _react2.default.createElement(_link2.default, { href: '/mapbox-studio' }, _react2.default.createElement('a', { className: 'blue dim link db mt3' }, 'Mapbox Studio')), _react2.default.createElement('div', { className: 'f5 o-80 mt0' }, 'A point-and-click map design interface.'), _react2.default.createElement(_link2.default, { href: '/data-editor ' }, _react2.default.createElement('a', { className: 'blue dim link db mt3' }, 'Dataset Editor')), _react2.default.createElement('div', { className: 'f5 o-80 mt0' }, 'A tool for spatial data editing.')), _react2.default.createElement('div', { className: 'f6 o-50 mt5' }, ' '), _react2.default.createElement('div', { className: 'dib' }, _react2.default.createElement('a', { className: 'blue dim link mr2', href: 'https://dribbble.com/mayagao' }, 'Dribbble')), _react2.default.createElement('div', { className: 'dib' }, _react2.default.createElement('a', { className: 'blue dim link mr2', href: 'https://github.com/mayagao' }, 'Github')), _react2.default.createElement('div', { className: 'dib' }, _react2.default.createElement('a', { className: 'blue dim link', href: 'https://www.linkedin.com/in/mayagq' }, 'LinkedIn'))))));
};