import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContex";

const PlaceOrder = () => {
  const [method,setMethod]=useState('cod')
  const {navigate}=useContext(ShopContext)
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* left side  */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="my-3 text-xl sm:text-2xl">
          <Title text1={"BELIVERY"} text2={"INFORMAION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border px-4 rounded-md w-full border-gray-500 py-3"
            placeholder="First name"
            type="text"
          />
          <input
            className="border px-4 rounded-md w-full border-gray-500 py-3"
            placeholder="Last name"
            type="text"
          />
        </div>
        <div>
        <input
            className="border w-full px-4 rounded-md border-gray-500 py-3"
            placeholder="Email address"
            type="email"
          />
        </div>
        <div>
        <input
            className="border w-full px-4 rounded-md border-gray-500 py-3"
            placeholder="Street"
            type="text"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border px-4 rounded-md w-full border-gray-500 py-3"
            placeholder="City"
            type="text"
          />
          <input
            className="border px-4 rounded-md w-full border-gray-500 py-3"
            placeholder="State"
            type="text"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border px-4 rounded-md w-full border-gray-500 py-3"
            placeholder="Zip code"
            type="number"
          />
          <input
            className="border px-4 rounded-md w-full border-gray-500 py-3"
            placeholder="Country"
            type="text"
          />
        </div>
        <div>
        <input
            className="border w-full px-4 rounded-md border-gray-500 py-3"
            placeholder="Phone"
            type="number"
          />
        </div>
      </div>

      {/* right side  */}
      <div className="mt-8">
<div className="mt-8 min-w-80">
<CartTotal/>
</div>
<div className="text-[18px] mt-10">
  <Title text1={"PAYMENT"} text2={'METHORD'}/>
<div className="flex flex-col lg:flex-row gap-3 ">
<div onClick={()=>setMethod('stripe')} className="flex items-center gap-3 border p-2  px-3  cursor-pointer">
  <p className={`min-w-3.5 h-3.5 border rounded-full ${method=== "stripe"? "bg-green-400" : ""}`}></p>
  <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
</div>
<div onClick={()=>setMethod('rezarpay')} className="flex items-center gap-3 border p-2  px-3 cursor-pointer">
  <p className={`min-w-3.5 h-3.5 border rounded-full ${method=== "rezarpay"? "bg-green-400" : ""}`}></p>
  <img className="h-5 " src={assets.razorpay_logo} alt="" />
</div>
<div onClick={()=>setMethod('cod')} className=" flex items-center gap-3 border p-2 px-3  cursor-pointer">
  <p className={`min-w-3.5 h-3.5 border rounded-full ${method=== "cod"? "bg-green-400" : ""}`}></p>
<p className="text-gray-500 text-sm font-medium  ">CASH ON DELIVERY</p>
</div>
</div>
</div>
<div  className="mt-6 flex justify-end">
<button onClick={()=>navigate('/order')} className="btn btn-neutral px-8">Place Order</button>
</div>
      </div>
    </div>
  );
};

export default PlaceOrder;
