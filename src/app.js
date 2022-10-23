const root = document.getElementById("root");

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

let product = {
  // model: "Xiaomi Note 8 PRO",
  model: "",
  // price: "6000",
  price: "",
  // desc: "iyi bir telefon",
  desc: "",
};

const formatPrice = (p) => {
  return p.price ? p.price + " TL" : (p.price = 0) + " TL";
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
    <h2 id="product-name">
      name: {product.model ? product.model : (product.model = "no-name")}
    </h2>
    <p id="product-price">price = {formatPrice(product)}</p>
    {getDesc(product.desc)}
  </div>
);
// var template = React.createElement("h1", null, "My First React App");

//ReactDom
ReactDOM.render(template2, root);
