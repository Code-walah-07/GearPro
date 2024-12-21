import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header_class from "./components/MainPages/Header_class";
import Category_class from "./components/MainPages/Category_class";
import Banner from "./components/MainPages/Banner";
import Main_content from "./components/MainPages/Main_content";
import Sign_up from "./components/sub_pages/Sign_up";

function App() {
  return (
  <Router>
    <div className="bg-slate-100">
      <div className="">
        <Header_class />
        <Routes>
          <Route path="/login" element={<Sign_up />} />
        </Routes>
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Category_class />
      </div>
      
      <div>
        <Main_content />
      </div>
    </div>
    </Router>
  );
}

export default App;
