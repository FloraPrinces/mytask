import React from "react";


function Footer() {

const currentyear = new Date().getFullYear()


    return (
        <footer >
        <p>©MyTask<i class="fas fa-pen-fancy"></i>{currentyear}</p>
    <p class="name">FloraPrincekl</p>
        </footer>
    );
}

export default Footer;