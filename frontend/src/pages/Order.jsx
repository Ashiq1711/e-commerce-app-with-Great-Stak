import React, { useContext } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContex";

const Order = () => {
  const { products, delivery_fee, currency } = useContext(ShopContext);
  return (
    <div className="border-t pt-16">
      <div className="text-2xl mb-3">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div className="">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img src={item.image[0]} className="w-16 sm:w-20" alt="" />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-500">
                  <p>Quentity: 1</p>
                  <p>Size: M</p>
                </div>
                <p>
                  Date <span>25,jul,2024</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">

            <div className="flex items-center gap-2 text-gray-500 font-medium">
              <p className=" h-2 w-2 rounded-full bg-green-500"></p>
              <p>Ready to ship</p>
            </div>
            <button className="btn btn-outline">Track Order</button>
            </div>
     

         
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;