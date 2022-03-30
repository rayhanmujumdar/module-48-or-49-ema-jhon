import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import 'aos/dist/aos.css'
import AOS  from 'aos';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <div className='App'>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
