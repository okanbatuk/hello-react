const root = ReactDOM.createRoot(document.getElementById("root"));

// import React from "react";
// const Navi = require("./Navi");

const app = {
  title: "React App",
  desc: "Lorem, ipsum dolor.",
  items: [],
};

const Navi = ({ msg, age }) => (
  <div className="message">
    {msg} {age}
  </div>
);


// ? Those PropTypes are validation of props passed
// https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.8.1/prop-types.js
const PropTypes = {
  string(props, propName, componentName) {
    if (typeof props[propName] !== "string") {
      return new Error("Invalid propName");
    }
  },
  number(props, propName, componentName) {
    if (typeof props[propName] !== "number") {
      return new Error("Please provide a number");
    }
  },
};
Navi.propTypes = {
  msg: PropTypes.string,
  age: PropTypes.number,
};

let template = (
  <div>
    <h2>Hello, World</h2>

    <Navi msg={"Hello Okan"} age={15} />
  </div>
);
root.render(template);
