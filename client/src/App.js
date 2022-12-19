import { BrowserRouter, Routes, Route } from "react-router-dom";
//BrowserRouter = wraps everywhere we want to use the router
//Routes = wraps all our individual routes
//Route = to create a single route


//Pages
import Home from "./pages/Home";

//components
import Navbar from './components/navbar'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


//create multiple routes with public and private
//container 