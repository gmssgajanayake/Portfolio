import React, {useEffect, useState} from "react";
import data from "../../assets/data/portfolioData.js"

export const Portfolio = () => {

    const [nextItems, setNextItems] = useState(6);
    const [portfolios, setPortfolios] = useState(data);
    const [selectTab, setSelectTab] = useState('all');

    const loadMoreHandler = () => {
        setNextItems(prevState => prevState + 3);
    }

    useEffect(() => {
        if (selectTab === "all") {
            setPortfolios(data)
        }
        if (selectTab === "web-design") {
            const filteredData = data.filter(item => item.category === "Web Design");
            setPortfolios(filteredData);
        }
        if (selectTab === "ui/ux-design") {
            const filteredData = data.filter(item => item.category === "UI/UX Design");
            setPortfolios(filteredData);
        }

    }, [selectTab]);

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
                        <button onClick={()=>setSelectTab("all")}
                            className="hover:bg-smallTextColor hover:text-white hover:border-smallTextColor text-headingColor border border-headingColor px-4 py-2 rounded-[8px]">
                            All
                        </button>
                        <button onClick={()=>setSelectTab("web-design")}
                            className="hover:bg-smallTextColor hover:text-white hover:border-smallTextColor text-headingColor border border-headingColor px-4 py-2 rounded-[8px]">
                            Web Design
                        </button>
                        <button onClick={()=>setSelectTab("ui/ux-design")}
                            className="hover:bg-smallTextColor hover:text-white hover:border-smallTextColor text-headingColor border border-headingColor px-4 py-2 rounded-[8px]">
                            UI/UX Design
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-12 flex-wrap">
                    {
                        portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
                                <div key={index}
                                     data-aos={"zoom-in"}
                                     data-aos-duration={"1200"}
                                     data-aos-delay={portfolio.delayTime - 50}
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
                    {nextItems < portfolios.length && data.length > 6 && (
                        <button onClick={loadMoreHandler}
                                className="rounded-[8px] py-2 px-4 text-white bg-headingColor tracking-wider hover:tracking-widest transition-[500] ease-in duration-200">
                            Load More
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};