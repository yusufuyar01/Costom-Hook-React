import './App.css';
import Meter from './Meter';
import TitleOne from './TitleOne';

function App() {
  return (
    <div className="App"> 
     <h1>React Custom Hook Example 1</h1>
      <TitleOne/> {/* sayfanın başlığını değiştiren buton */  }
      <hr />
      <h1>React Custom Hook Example 2</h1>
      <Meter/>
      <hr />

    </div>
  );
}

export default App;
