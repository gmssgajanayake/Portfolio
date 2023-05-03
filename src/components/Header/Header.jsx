import React from "react";

export const Header = () => {
    return (
        <header className={"w-full h-[80px] flex items-center"}>
            <div className={"container"}>
                <div className={"flex items-center justify-between"}>
                    {/* ------------- Logo start-----------*/}
                    <div className={"flex items-center gap-[10px]"}>
                        <span
                            className={"w-[35px] h-[35px] bg-primaryColor text-white text-[18px] flex items-center justify-center font-[500] rounded-full"}>
                            S
                        </span>
                        <div className={"leading-[20px]"}>
                            <h2 className={"text-xl text-smallTextColor font-[700]"}>Sakuja Shamal</h2>
                            <p className={"text-smallTextColor font-[500] text-[16px]"}>Gajanayake</p>
                        </div>
                    </div>
                    {/* ------------- Logo end-----------*/}
                    {/* ------------- Menu start-----------*/}
                    <div className="menu">
                        <ul className={"flex items-center gap-10"}>
                            <li className={"hover:font-[500] hover:border-b hover:border-black ease-in duration-200"}>
                                <a className={"text-smallTextColor font-[600]"} href="#about">
                                    About
                                </a>
                            </li>
                            <li className={"hover:font-[500] hover:border-b hover:border-black ease-in duration-200"}>
                                <a className={"text-smallTextColor font-[600]"} href="#services">
                                    Services
                                </a>
                            </li>
                            <li className={"hover:font-[500] hover:border-b hover:border-black ease-in duration-200"}>
                                <a className={"text-smallTextColor font-[600]"} href="#portfolio">
                                    Portfolio
                                </a>
                            </li>
                            <li className={"hover:font-[500] hover:border-b hover:border-black ease-in duration-200"}>
                                <a className={"text-smallTextColor font-[600]"} href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* ------------- Menu end-----------*/}
                    {/* ------------- Menu-right start-----------*/}
                    <div className={"flex items-center gap-4"}>
                        <button
                            className={"border border-solid border-smallTextColor rounded-[8px] px-4 py-2 max-h-[40px] flex items-center gap-2 font-[600] text-smallTextColor hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300"}>
                            <i className="ri-send-plane-line"></i>Let's Talk
                        </button>
                    </div>
                    {/* ------------- Menu-right end-----------*/}
                    {/* ------------- Menu-mobile start-----------*/}
                    <span className={"text-smallTextColor text-2xl cursor-pointer md:hidden"}>
                        <i className="ri-menu-line"></i>
                    </span>
                    {/* ------------- Menu-mobile end-----------*/}
                </div>
            </div>
        </header>
    );
}

/*export default Header;*/


