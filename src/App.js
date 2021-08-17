import Card from "./components/card/Card";
import './App.css';
import HeaderFunc from "./components/Header";


function App() {
  return (
    <>

      <div className="app container-fluid d-flex flex-column align-item-center ">
        <HeaderFunc />
        <Card />
      </div>
    </>
  );
}

export default App;
