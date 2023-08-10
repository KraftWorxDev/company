import { A } from "@solidjs/router";
import { Component } from "solid-js";
import { IoArrowDownOutline, IoMenuOutline } from 'solid-icons/io'
import LinkedIn from "../../assets/img/linkedin (1).png"
import InstGram from "../../assets/img/instagram.png"
import Facebook from "../../assets/img/facebook-app-symbol.png"

const Nav:Component = () => {
    return (
        <nav class="fixed p-4 bg-black flex z-50 justify-between flex-col top-0 left-0 h-screen">
            <ul class="text-white flex flex-col gap-y-5">
                <A href="/">
                    <li>Home</li>
                </A>
                <A href="/about">
                    <li>About us</li>
                </A>
                <A href="/services">
                    <li>Services</li>
                </A>
                <A href="/portfolio">
                    <li>Portfolio</li>
                </A>
                <A href="/contact">
                    <li>Contact us</li>
                </A>
            </ul>
            <div class="w-full flex justify-center text-white">
                <IoMenuOutline class="text-4xl" />
            </div>
            <div class="w-full px-4 flex pb-5 flex-col gap-10 justify-center text-white">
                <img src={LinkedIn} class="w-5"/>
                <img src={InstGram} class="w-5"/>
                <img src={Facebook} class="w-5"/>
            </div>
        </nav>
    )
}

export default Nav;