'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { charset: 'utf-8' }), _react2.default.createElement('title', null, 'Maya Gao'), _react2.default.createElement('meta', { name: 'description', content: '' }), _react2.default.createElement('meta', { name: 'author', content: '' }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=.25, user-scalable=yes' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'static/site.css' }));
};