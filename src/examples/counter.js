let number = 0;

let addOne = () => {
  alert("Add one");
};

let minusOne = () => {
  if (number > 0) {
    number--;
    console.log("Minus one");
    renderApp();
  } else console.log("Process is not working");
};

const renderApp = () => {
  let template3 = (
    <div>
      <h1>Number: {number}</h1>

      <button
        id="btnPlusOne"
        className="btnBlue"
        onClick={() => {
          number++;
          console.log("Added one");
          renderApp();
        }}
      >
        +1
      </button>

      <button id="btnMinusOne" className="btnRed" onClick={minusOne}>
        -1
      </button>
    </div>
  );
  root.render(template3);
};

let tick = () => {
  let element = (
    <div>
      <h2>time is: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  root.render(element);
};

setInterval(tick, 1000);

// renderApp();

//ReactDOM.render(template3, root);
