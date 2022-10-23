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
    <form onSubmit={onFormSubmit}>
      <input type="text" name="txtItem" />
      <button type="submit">Add Item</button>
    </form>
  </div>
);

let onFormSubmit = (event) => {
  let item = event.target.elements.txtItem.value;
  alert(`This ${item} has been added`);
  console.log(`This ${item} has been added`);
  event.preventDefault();
  // event.stopImmediatePropagation();
};

root.render(template);
