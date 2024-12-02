import React from "react";
import icon1 from "../../assets/img/icon1.png";
import icon2 from "../../assets/img/icon3.png";
import icon3 from "../../assets/img/icon3.png";
import icon4 from "../../assets/img/icon4.png";
import icon5 from "../../assets/img/icon5.png";
import icon6 from "../../assets/img/icon6.png";
import icon7 from "../../assets/img/icon7.png";

const BannerIcon = () => {
    const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon1];

    return (
        <div className=" max-w-4xl mx-auto py-10 " >
            <div className="flex items-center space-x-8 animate-marquee">
                {icons.map((icon, index) => (
                    <div
                        key={index}
                        className="group flex-shrink-0 transform transition-all duration-300 hover:scale-110"
                    >
                        <img
                            src={icon}
                            alt={`Icon ${index + 1}`}
                            className="w-24 h-24 mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BannerIcon;
