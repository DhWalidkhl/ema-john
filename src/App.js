import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

function App() {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  } , [])
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
