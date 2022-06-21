import Navbar from './Navbar';
import Main from './Main';
import data from './Data';
import styles from './App.css';

function App() {
  const cards = data.map(item => {
    return (
      <Main 
        key = {item.id}
        item={item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <div>
      {cards} 
      </div>
    </div>
  );
}

export default App;