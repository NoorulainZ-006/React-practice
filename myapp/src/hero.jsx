// import "./hero.css";
import React from "react";
import style from "./hero.module.css";

function Hero() {
  return (
    <>
      <div className={style.box}>
        <div id={style.div}>
            <p><h1>BMW
            </h1>
            BMW is a world-renowned German automobile brand known for its luxury, advanced engineering, and “Ultimate Driving Experience.” Founded in 1916, the company originally made aircraft engines before becoming famous for its high-performance cars. BMW models like the 3 Series, 5 Series, and X Series are admired for their smooth handling, modern technology, and elegant design. With a strong focus on innovation and driving comfort, BMW has become a symbol of premium quality and intelligent engineering.         /</p></div>
           <img src="src\assets\img2.jpg" alt="" />
      </div>
    </>
  );
}

export default Hero;