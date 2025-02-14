import './App.css';
import Meter from './Meter';
import TitleOne from './TitleOne';
import PersonalInfo from './PersonalInfo';

function App() {
  return (
    <div className="App"> 
     <h1>React Custom Hook Example 1</h1>
      <TitleOne/> {/* sayfanın başlığını değiştiren buton */  }
      <hr />
      <h1>React Custom Hook Example 2</h1>
      <Meter/> {/* sayfada sayaç örneği */  }
      <hr />
      <h1>React Custom Hook Example 3</h1>
      <PersonalInfo/> {/* sayfanın kullanıcı bilgilerini değiştiren form */  }  

    </div>
  );
}

export default App;
