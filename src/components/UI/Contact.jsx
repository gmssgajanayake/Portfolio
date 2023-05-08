import React from "react";

export const Contact = () => {
    return (
        <section id={"contact"} className={"pb-16"}>
            <div className={"container"}>
                <h2 className={"text-headingColor font-[700] mb-8 text-[2.5rem]"}>
                    Get in touch
                </h2>
                <div className="md:flex justify-between items-center">
                    <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4047240.6069315253!2d78.0628626382731!3d7.854881729408483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2slk!4v1683365820068!5m2!1sen!2slk"
                            allowFullScreen="" loading="lazy" className={"border-0 w-full h-full"}
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div
                        className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
                        <form className={"w-full"}>
                            <div className="mb-5">
                                <input type="text" placeholder={"Enter your name"}
                                       className="w-full p-3 focus:outline-none rounded-[5px]"/>
                            </div>
                            <div className="mb-5">
                                <input type="email" placeholder={"Enter your email"}
                                       className="w-full p-3 focus:outline-none rounded-[5px]"/>
                            </div>
                            <div className="mb-5">
                                <input type="text" placeholder={"Address"}
                                       className="w-full p-3 focus:outline-none rounded-[5px]"/>
                            </div>
                            <div className="mb-5">
                                <textarea rows={3} placeholder={"Subject"}
                                          className="w-full p-3 focus:outline-none rounded-[5px]"/>
                            </div>
                            <button
                                className={"w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150 tracking-wide"}>Send
                                Messages
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}