// import "./header.css";
import React from "react";
import style from "./header.module.css";


function Header() {
    return (
        <>
            <div className={style.box}>
                <div id={style.div}>
                    <p><h1>Lamborghini
                </h1>
                Lamborghini is one of the world’s most iconic luxury sports car brands, known for its extreme performance, bold design, and powerful engines. Founded in 1963 by Ferruccio Lamborghini in Italy, the company aimed to build faster and more refined sports cars. Models like the Aventador, Huracán, and Urus are famous for their aggressive styling, advanced technology, and roaring V10/V12 engines. For car lovers, Lamborghini is not just a vehicle — it is a symbol of power, prestige, and pure driving passion.
                /</p></div>
                <img src="src\assets\img.jpg" alt="" />
            </div>
        </>
    );
}

export default Header;