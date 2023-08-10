import { Component } from "solid-js";
import Logo from "../assets/img/KraftWorx.png"

const Home:Component = () => {
    return (
        <div class="bg-gradient-to-r flex from-black to-stone-700 w-full min-h-screen">
            <div class="m-auto w-1/2">
                <img 
                    src={Logo} 
                    alt="KraftWorx Industries logo" 
                />
            </div>
        </div>
    )
}

export default Home;