import './App.css';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Chart from './components/Chart/Chart';
import Item from './components/Item/Item';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="Container">
        <Filter></Filter>
        <Chart></Chart>  
        <Item></Item>
        <Item></Item>
        <Item></Item>

      </div>
    </div>
  );
}

export default App;
