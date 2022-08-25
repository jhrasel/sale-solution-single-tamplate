import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from "./Pages/Home";
import './style.css';

function App() {

  return (

    <>
    
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />}></Route>

        </Routes>

      </BrowserRouter>

    </>
    
  );

}

export default App;
