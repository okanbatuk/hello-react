"use strict";

var root = ReactDOM.createRoot(document.getElementById("root"));
var app = {
  title: "React App",
  desc: "Lorem, ipsum dolor.",
  items: []
};
var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();
  var item = event.target.elements.txtItem.value;
  if (item) {
    app.items.push(item);
    event.target.elements.txtItem.value = "";
  }
  console.log("This ".concat(item, " has been added"));
  // event.stopImmediatePropagation();
  renderApp();
};
var clearItems = function clearItems() {
  app.items = [];
  renderApp();
};
var renderApp = function renderApp() {
  //? let listItems = app.items.map((item) => <li key={item}>{item}</li>);

  //* React
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), /*#__PURE__*/React.createElement("div", null, app.desc), /*#__PURE__*/React.createElement("p", null, app.items.length), /*#__PURE__*/React.createElement("ul", null, app.items.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, item);
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "txtItem"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Add Item")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
    onClick: clearItems
  }, "Clear Items"))));
  root.render(template);
};
renderApp();
