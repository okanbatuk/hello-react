const root = ReactDOM.createRoot(document.getElementById("root"));

const app = {
  title: "React App",
  desc: "Lorem, ipsum dolor.",
  items: ["item 1", "item 2", "item 3"],
};

// React
let template = (
  <div>
    <h1>{app.title}</h1>
    <div>{app.desc}</div>
    <ul>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
    </ul>
    <p>{app.items.length}</p>

    <form onSubmit={onFormSubmit}>
      <input type="text" name="txtItem" />
      <button type="submit">Add Item</button>
    </form>
  </div>
);

let onFormSubmit = (event) => {
  event.preventDefault();
  let item = event.target.elements.txtItem.value;
  alert(`This ${item} has been added`);
  console.log(`This ${item} has been added`);
  // event.stopImmediatePropagation();
};

root.render(template);
