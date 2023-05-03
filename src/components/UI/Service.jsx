import React from "react";
import frontendImage from "../../assets/images/front-end.png"
import UIImage from "../../assets/images/design.png"
import backendImage from "../../assets/images/backend.png"
import appImage from "../../assets/images/apps.png"

export const Service = () => {
    return (
        <section id={"services"}>
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
                        What do I help
                    </h2>
                    <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet est laudantium nemo rerum sunt?
                        Accusantium amet consequuntur deleniti dolores doloribus error hic magni molestiae temporibus
                        ut. Ab numquam quos ut?
                    </p>
                </div>
                <div className="flex flex-col justify-center sm:py-12">
                    <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
                        <div
                            className="relative text-gray-700 antialiased text-sm font-semibold">
                            {/* Vertical line running through the middle */}
                            <div
                                className="border-2 border-primaryColor hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2">

                            </div>
                            {/* Left card */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos={"fade-right"} data-aos-duration={"1200"}
                                                 className="bg-white p-4 rounded shadow-lg group hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 cursor-pointer ease-in duration-150">
                                                <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                                                    Frontend Developer
                                                </h3>
                                                <p className="text-headingColor text-[15px] group-hover:text-white group-hover:font-[500] leading-6">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
                                                    ipsam nam nobis officia ullam vitae.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-4 border-white w-10 h-10 absolute left-1/2
                                     transform -translate-x-1/2 -translate-y-4 sm:translate-y-0  flex items-center justify-center">
                                        <figure>
                                            <img src={frontendImage} alt=""/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            {/* Right card */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div data-aos={"fade-left"}
                                                 data-aos-delay={"50"}
                                                 data-aos-duration={"1300"}
                                                 className="bg-white p-4 rounded shadow-lg group hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 cursor-pointer ease-in duration-150">
                                                <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                                                    Backend Developer
                                                </h3>
                                                <p className="text-headingColor text-[15px] group-hover:text-white group-hover:font-[500] leading-6">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
                                                    ipsam nam nobis officia ullam vitae.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-4 border-white w-10 h-10 absolute left-1/2
                                     transform -translate-x-1/2 -translate-y-4 sm:translate-y-0  flex items-center justify-center">
                                        <figure>
                                            <img src={backendImage} alt=""/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            {/* Left card */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos={"fade-right"}
                                                 data-aos-delay={"100"}
                                                 data-aos-duration={"1400"}
                                                 className="bg-white p-4 rounded shadow-lg group hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 cursor-pointer ease-in duration-150">
                                                <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                                                    UI/UX Design
                                                </h3>
                                                <p className="text-headingColor text-[15px] group-hover:text-white group-hover:font-[500] leading-6">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
                                                    ipsam nam nobis officia ullam vitae.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-4 border-white w-10 h-10 absolute left-1/2
                                     transform -translate-x-1/2 -translate-y-4 sm:translate-y-0  flex items-center justify-center">
                                        <figure>
                                            <img src={UIImage} alt=""/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            {/* Right card */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div data-aos={"fade-left"}
                                                 data-aos-delay={"150"}
                                                 data-aos-duration={"1500"}
                                                 className="bg-white p-4 rounded shadow-lg group hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 cursor-pointer ease-in duration-150">
                                                <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                                                    Apps Developer
                                                </h3>
                                                <p className="text-headingColor text-[15px] group-hover:text-white group-hover:font-[500] leading-6">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
                                                    ipsam nam nobis officia ullam vitae.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-4 border-white w-10 h-10 absolute left-1/2
                                     transform -translate-x-1/2 -translate-y-4 sm:translate-y-0  flex items-center justify-center">
                                        <figure>
                                            <img src={appImage} alt=""/>
                                        </figure>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};