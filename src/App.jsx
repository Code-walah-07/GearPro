import "./App.css";
import Header_class from "./components/MainPages/Header_class";
import Category_class from "./components/MainPages/Category_class";
import Banner from "./components/MainPages/Banner";
import Main_content from "./components/MainPages/Main_content";

function App() {
  
  return (
    <div class="bg-slate-100">
     <div className="sticky top-0"><Header_class /></div>
     <div className="">
      <div><Category_class /></div>
      <div><Banner/></div>
      <Main_content />
      </div>
    </div>
  );
}

export default App;
