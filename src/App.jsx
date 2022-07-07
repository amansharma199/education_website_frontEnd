import "./app.css" 
import {Routes, Route} from "react-router-dom";
import Error from "./page/error/Error";
import Home from "./page/home/Home"
import Navbar from "./components/navbar/Navbar";



const App = () => {
  return (
    <div className='app'>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>

    </div>
  )
}

export default App;