"use strict";

var root = ReactDOM.createRoot(document.getElementById("root"));

// import React from "react";
// const Navi = require("./Navi");

var app = {
  title: "React App",
  desc: "Lorem, ipsum dolor.",
  items: []
};
var Navi = function Navi(_ref) {
  var msg = _ref.msg,
    age = _ref.age;
  return /*#__PURE__*/React.createElement("div", {
    className: "message"
  }, msg, " ", age);
};

// ? Those PropTypes are validation of props passed
// https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.8.1/prop-types.js
var PropTypes = {
  string: function string(props, propName, componentName) {
    if (typeof props[propName] !== "string") {
      return new Error("Invalid propName");
    }
  },
  number: function number(props, propName, componentName) {
    if (typeof props[propName] !== "number") {
      return new Error("Please provide a number");
    }
  }
};
Navi.propTypes = {
  msg: PropTypes.string,
  age: PropTypes.number
};
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Hello, World"), /*#__PURE__*/React.createElement(Navi, {
  msg: "Hello Okan",
  age: 15
}));
root.render(template);
