const root = ReactDOM.createRoot(document.getElementById("root"));

// React
let template = (
  <div>
    <h1 id="header">My First React App</h1>
    <div>Lorem, ipsum dolor.</div>
    <ul>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
    </ul>
  </div>
);

//? #region  Product Details
let product = {
  // model: "Xiaomi Note 8 PRO",
  model: "",
  price: 6000,
  // price: "",
  // desc: "iyi bir telefon",
  desc: "",
};

const formatPrice = (p) => {
  return !p.price || p.price == "" ? (p.price = 0) : p.price;
};

const getDesc = (desc) => {
  return desc ? (
    <p id="product-desc">Description: {desc}</p>
  ) : (
    <p id="product-desc">Description: Product has no description</p>
  );
};

let template2 = (
  <div id="product-details">
    // if the product has a model information,
    <h2 id="product-name">
      name: {product.model ? product.model : (product.model = "no-name")}
    </h2>
    // if the product has a price,
    {product.price && product.price != "" && product.price > 0 && (
      <p id="product-price">Price = {formatPrice(product)} TL </p>
    )}
    {getDesc(product.desc)}
  </div>
);

//#endregion


