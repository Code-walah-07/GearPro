function Mainpage_products() {
  return (
    <div className="bg-slate-300">
      <div class="w-5/5 h-10 pt-3 bg-white rounded-md">
        <label class="m-4 text-xl" htmlFor="">
          <b>Products For You</b>
        </label>
        <div className="flex flex-wrap justify-center">
          <div class="h-1/6 mt-6 ml- mb-12">
            <img className="rounded-xl h-96" src="/product_pic/shoes.png" alt="" />
          </div>
          <div class="h-1/6 mt-6 ml-2 mb-12">
            <img className="rounded-xl h-96" src="/product_pic/bag_collecton.png" alt="" />
            </div>
          <div class="h-1/6 mt-6 ml-2 mb-12">
            <img className="rounded-xl h-96" src="/product_pic/cycle.png" alt="" />
          </div>
          <div class="h-1/6 mt-6 ml-2 mb-12">
            <img className="rounded-xl h-96" src="/product_pic/football.png" alt="" />
          </div>
          <div class="h-1/6 mt-6 ml-2 mb-12">
            <img className="rounded-xl h-96" src="/product_pic/tshirts.png" alt="" />
            </div>
        
         
        </div>
      </div>
    </div>
  );
}

export default Mainpage_products;
