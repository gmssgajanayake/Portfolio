import React from "react";
import data from "../../assets/data/portfolioData.js"


/*const [nextItems, setNextItems] = useState(6);
const [portfolios, setPortfolios] = useState(data);
*/
const loadMoreHandler = () => {
   /* setNextItems(prev => prev + 3);*/
    console.log("wcwe")
};

export const Portfolio = () => {
    return (
        <section id={"portfolio"}>
            <div className="container">
                <div className="flex justify-between items-center flex-wrap">
                    <div className="mb-7 sm:mb-0">
                        <h3 className="text-headingColor font-[700] text-[2rem]">
                            My recent projects
                        </h3>
                    </div>
                    <div className="flex gap-3">
                        <button
                            className="hover:bg-smallTextColor hover:text-white hover:border-smallTextColor text-headingColor border border-headingColor px-4 py-2 rounded-[8px]">
                            All
                        </button>
                        <button
                            className="hover:bg-smallTextColor hover:text-white hover:border-smallTextColor text-headingColor border border-headingColor px-4 py-2 rounded-[8px]">
                            Web Design
                        </button>
                        <button
                            className="hover:bg-smallTextColor hover:text-white hover:border-smallTextColor text-headingColor border border-headingColor px-4 py-2 rounded-[8px]">
                            UI/UX Design
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-12 flex-wrap">
                    {
                        /*portfolios?.slice(0, nextItems)?*/data.map((portfolio, index) => (
                                <div key={index}
                                     data-aos={"zoom-in"}
                                     data-aos-duration={"1200"}
                                     data-aos-delay={portfolio.delayTime}
                                     className={"group max-w-full sm:w-[48.5%] lg:w-[32.2%] relative z-[1] "}>
                                    <figure>
                                        <img className={"rounded-[8px] shadow-lg"} src={portfolio.imgUrl} alt=""/>
                                    </figure>
                                    <div
                                        className="w-full h-full bg-black bg-opacity-20 absolute top-0 left-0 z-[5] rounded-[8px] hidden group-hover:block transition">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <button
                                                className="tracking-wide bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-[8px] py-2 px-4">See
                                                Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
                <div className="mt-6 text-center">
                    <button onClick={loadMoreHandler}
                        className="rounded-[8px] py-2 px-4 text-white bg-headingColor tracking-wider hover:tracking-widest transition-[500] ease-in duration-200">
                        Read More
                    </button>
                </div>
            </div>
        </section>
    );
};