import logo from './logo.svg';
import './App.css';
import Landing from './landing';
import Header from './header';
function App() {
      
  const data={
    name:"kavitha",
  }
  return (
    <div className="App">
    
    <Landing name={data.name} featurs={"Neww add"}></Landing>
    <Header></Header>
    
    </div>
  );
}

export default App;
