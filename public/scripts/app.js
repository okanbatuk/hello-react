"use strict";

var root = ReactDOM.createRoot(document.getElementById("root"));

// React
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "My First React App"), /*#__PURE__*/React.createElement("div", null, "Lorem, ipsum dolor."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum.")));

//? #region  Product Details
var product = {
  // model: "Xiaomi Note 8 PRO",
  model: "",
  price: 6000,
  // price: "",
  // desc: "iyi bir telefon",
  desc: ""
};
var formatPrice = function formatPrice(p) {
  return !p.price || p.price == "" ? p.price = 0 : p.price;
};
var getDesc = function getDesc(desc) {
  return desc ? /*#__PURE__*/React.createElement("p", {
    id: "product-desc"
  }, "Description: ", desc) : /*#__PURE__*/React.createElement("p", {
    id: "product-desc"
  }, "Description: Product has no description");
};
var template2 = /*#__PURE__*/React.createElement("div", {
  id: "product-details"
}, "// if the product has a model information,", /*#__PURE__*/React.createElement("h2", {
  id: "product-name"
}, "name: ", product.model ? product.model : product.model = "no-name"), "// if the product has a price,", product.price && product.price != "" && product.price > 0 && /*#__PURE__*/React.createElement("p", {
  id: "product-price"
}, "Price = ", formatPrice(product), " TL "), getDesc(product.desc));

//#endregion
