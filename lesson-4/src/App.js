import './App.css';
import TrafficLight from './component/TrafficLight/TracfficLight';
function App() {
  return (
    <div className="App">
    {/* <Light></Light>
    <Light color={"red"} isOn={true}></Light>
    <Light color={"green"} isOn={true}></Light>
    <Light color={"yellow"} isOn={true}></Light> */}

   <TrafficLight></TrafficLight>
    </div>
  );
}

export default App;
