"use strict";

var root = ReactDOM.createRoot(document.getElementById("root"));
var app = {
  title: "React App",
  desc: "Lorem, ipsum dolor.",
  items: ["item 1", "item 2", "item 3"]
};

// React
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), /*#__PURE__*/React.createElement("div", null, app.desc), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum.")), /*#__PURE__*/React.createElement("p", null, app.items.length), /*#__PURE__*/React.createElement("form", {
  onSubmit: onFormSubmit
}, /*#__PURE__*/React.createElement("input", {
  type: "text",
  name: "txtItem"
}), /*#__PURE__*/React.createElement("button", {
  type: "submit"
}, "Add Item")));
var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();
  var item = event.target.elements.txtItem.value;
  alert("This ".concat(item, " has been added"));
  console.log("This ".concat(item, " has been added"));
  // event.stopImmediatePropagation();
};

root.render(template);
