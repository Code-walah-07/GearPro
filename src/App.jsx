import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
//import "./App.css";
import Home_page from "./components/MainPages/Home_page";
import Sign_up from "./components/sub_pages/Sign_up";
import Sign_in from "./components/sub_pages/Sign_in";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home_page />} />
        <Route path="/Home_page" element={<Home_page />} />
        <Route path="/Sign_up" element={<Sign_up />} />
        <Route path="/Sign_in" element={<Sign_in />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
