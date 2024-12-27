import Header_class from "./Header_class";
import Category_class from "./Category_class";
import Banner from "./Banner";
import Main_content from "./Main_content";
import Footer from "./Footer";

export default function Home_page() {
  return (
    <div className="bg-slate-300 ">
      <div className="">
        <Header_class />
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
      <div>
        <Footer />
      </div>
    </div>
  );
}
