import React from "react";
import Hero from "./Hero";
import LeftImg from "./LeftImg";
import Universe from "./Universe";
import RightImg from "./RightImg";
function ProductPage() {
  return (
    <>
      <Hero></Hero>
      <LeftImg
        imageUrl="/media/kite.png"
        productName="Kite"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices"
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      ></LeftImg>
       <RightImg
        imageUrl="/media/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account with in-depth reporting and analytics on your trades and investments."
        learnMore="#"
        ></RightImg>
      <LeftImg
        imageUrl="/media/coin.png"
        productName="Coin"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      ></LeftImg>
       <RightImg
        imageUrl="/media/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="#"
        ></RightImg>
      <LeftImg
        imageUrl="/media/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      ></LeftImg>
      <p className="text-center mt-5 mb-5" style={{fontSize:"25px"}}>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <Universe></Universe>
     
    </>
  );
}

export default ProductPage;
