import Card from "./components/card/Card";
import './App.css';
import ReactimgFunc from "./components/Reactimg";


function App() {
  return (
    <>

      <div className="app container-fluid d-flex flex-column align-item-center ">
        <ReactimgFunc />
        <Card />
      </div>
    </>
  );
}

export default App;
