import "./App.css";
import Header_class from "./components/MainPages/Header_class";
import Category_class from "./components/MainPages/Category_class";
import Banner from "./components/MainPages/Banner";
import Main_content from "./components/MainPages/Main_content";

function App() {
  let slides=[
    "https://img.freepik.com/free-vector/sport-equipment-banner_1284-32611.jpg",
    "https://img.freepik.com/free-vector/sale-landing-page-template-with-photo_23-2148271371.jpg",
    "https://www.tcscricket.com/wp-content/uploads/2021/03/new-balance-banner-3.jpg",
    "https://www.iworkinsport.com/iwis-admin/uploads/2592101527738293.jpg",
  ];


  return (
    <div class="bg-slate-100
    ">
      <div className="sticky top-0"><Header_class /></div>
      
      <Category_class />
      <div className="w-[70%] m-auto"><Banner slides={slides} /></div>
      <Main_content />
    </div>
  );
}

export default App;
