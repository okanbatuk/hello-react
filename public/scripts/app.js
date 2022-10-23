"use strict";

var root = ReactDOM.createRoot(document.getElementById("root"));

// React
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "My First React App"), /*#__PURE__*/React.createElement("div", null, "Lorem, ipsum dolor."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum.")), /*#__PURE__*/React.createElement("form", {
  onSubmit: onFormSubmit
}, /*#__PURE__*/React.createElement("input", {
  type: "text",
  name: "txtItem"
}), /*#__PURE__*/React.createElement("button", {
  type: "submit"
}, "Add Item")));
var onFormSubmit = function onFormSubmit(event) {
  var item = event.target.elements.txtItem.value;
  alert("This ".concat(item, " has been added"));
  console.log("This ".concat(item, " has been added"));
  event.preventDefault();
  // event.stopImmediatePropagation();
};

root.render(template);
