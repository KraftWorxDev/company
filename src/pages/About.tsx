import { Component } from "solid-js";
import JoshImg from "../assets/img/imageedit_3_7000981570.png"
import "solid-slider/slider.css";
import { Slider, createSlider, SliderProvider, SliderButton } from "solid-slider";
import { IoArrowBackOutline, IoArrowForwardOutline } from "solid-icons/io";

const About:Component = () => {
    return (
        <div class="bg-gradient-to-r flex from-black to-stone-700 w-full min-h-screen sm:pl-36">
            <div class="h-[98vh] w-11/12 rounded-b-3xl m-auto bg-opacity-10">
            <SliderProvider>
                <Slider options={{ loop: true }}>
                    <div class="w-full h-full">
                        <h1 class="uppercase pt-12 text-8xl pb-20 text-center text-white font-extrabold">
                            About the kraft
                        </h1>
                        <div class="w-full flex justify-center">
                            <div class="flex w-11/12 m-auto">
                                <img 
                                    src={JoshImg} 
                                    alt="Image of founder" 
                                    class="rounded-r-3xl rounded-tl-md h-[50vh] bg-gray-300"
                                />
                                <div class="px-16 py-5 flex flex-wrap">
                                    <p class="text-white text-2xl">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi illo magni nobis maiores adipisci debitis reiciendis totam cupiditate. Quisquam voluptas, iste harum quia sint veritatis iusto eos tenetur hic. Maiores officiis nulla cumque fugiat quia. Quidem ipsum deleniti, sequi illum omnis voluptatum aperiam, quod nemo beatae cumque, veritatis quibusdam impedit!
                                    </p>
                                    <button class="border-2 rounded-sm mx-auto px-5 mt-10 hover:bg-yellow-600 text-xl duration-500 ease-in-out hover:text-black border-yellow-600 text-yellow-600 h-14">
                                        Get to know more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-full">
                        <h1 class="uppercase pt-12 text-8xl pb-20 text-center text-white font-extrabold">
                            the kraft crew
                        </h1>
                        <div class="w-full flex justify-center">
                            {/* <div class="flex w-11/12 m-auto">
                                <img 
                                    src={JoshImg} 
                                    alt="Image of founder" 
                                    class="rounded-r-3xl rounded-tl-md h-[50vh]"
                                />
                                <div class="px-16 py-10 flex flex-wrap">
                                    <p class="text-white text-2xl">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi illo magni nobis maiores adipisci debitis reiciendis totam cupiditate. Quisquam voluptas, iste harum quia sint veritatis iusto eos tenetur hic. Maiores officiis nulla cumque fugiat quia. Quidem ipsum deleniti, sequi illum omnis voluptatum aperiam, quod nemo beatae cumque, veritatis quibusdam impedit!
                                    </p>
                                    <button class="border-2 rounded-sm mx-auto px-5 mt-14 hover:bg-yellow-600 text-xl duration-500 ease-in-out hover:text-black border-yellow-600 text-yellow-600 h-14">
                                        Get to know more
                                    </button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </Slider>
                <div class="w-full px-5 absolute bottom-5">
                    <SliderButton prev class="float-left">
                        <div class="border-2 rounded-full flex border-black hover:border-yellow-600 hover:text-yellow-600 h-12 w-12">
                            <IoArrowBackOutline class="text-2xl m-auto"/>
                        </div>
                    </SliderButton>
                    <SliderButton next class="float-right">
                        <div class="border-2 rounded-full flex border-black hover:border-yellow-600 hover:text-yellow-600 h-12 w-12">
                            <IoArrowForwardOutline class="text-2xl m-auto"/>
                        </div>
                    </SliderButton>
                </div>
            </SliderProvider>
            </div>
        </div>
    )
}

export default About;