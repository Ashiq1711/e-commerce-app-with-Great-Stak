import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className=" border-t">
      <div className="text-center my-10">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex gap-8 flex-col sm:flex-row justify-center mt-14">
        {/* left side  */}
        <div className="w-1/2 flex items-end justify-center">
          <img className="w-full md:max-w-[480px]" src={assets.about_img} alt="" />
        </div>
        {/* right side  */}
        <div className="w-1/2 py-3 flex flex-col justify-center items-start gap-5">
          <div>
            <p>
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>
          </div>
          <div>
            <p>
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>
          </div>
          <div>
            <p>
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
        <div className="mt-6 flex flex-col sm:flex-row ">
          <div className="border">
            <div className="p-10">
              <p className="font-bold">Quality Assurance:</p>
              <p className="text-sm py-4">
                We meticulously select and vet each product to ensure it meets
                our stringent quality standards.
              </p>
            </div>
          </div>
          <div className="border ">
            <div className="p-10">
              <p className="font-bold">Quality Assurance:</p>
              <p className="text-sm py-4">
                We meticulously select and vet each product to ensure it meets
                our stringent quality standards.
              </p>
            </div>
          </div>
          <div className="border">
            <div className="p-10">
              <p className="font-bold">Quality Assurance:</p>
              <p className="text-sm py-4">
                We meticulously select and vet each product to ensure it meets
                our stringent quality standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
