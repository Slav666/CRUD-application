import "./App.css";

function App() {
  return (
    <div className="form">
      <h1>CRUD Application</h1>
      <label>Item Name:</label>
      <input type="text" name="itemName" />
      <label>Description:</label>
      <input type="text" name="description" />
      <button>Submit</button>
    </div>
  );
}

export default App;
