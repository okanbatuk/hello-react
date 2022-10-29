let onFormSubmit = (event) => {
  event.preventDefault();
  let item = event.target.elements.txtItem.value;

  if (item) {
    app.items.push(item);
    event.target.elements.txtItem.value = "";
  }

  console.log(`This ${item} has been added`);
  // event.stopImmediatePropagation();
  renderApp();
};

let clearItems = () => {
  app.items = [];
  renderApp();
};

const renderApp = () => {
  //? let listItems = app.items.map((item) => <li key={item}>{item}</li>);

  //* React
  let template = (
    <div>
      <h1>{app.title}</h1>
      <div>{app.desc}</div>
      <p>{app.items.length}</p>

      {
        <ul>
          {app.items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      }

      <form onSubmit={onFormSubmit}>
        <input type="text" name="txtItem" />
        <button type="submit">Add Item</button>
      </form>
      <div>
        <p>
          <button onClick={clearItems}>Clear Items</button>
        </p>
      </div>
    </div>
  );
  root.render(template);
};

renderApp();