import htmlLogo from "./heroImages/heroBottomImages/Jay/download.png";
import cssLogo from "./heroImages/heroBottomImages/Jay/css3.png";
import jsLogo from "./heroImages/heroBottomImages/Jay/javascript.png";
import nodeLogo from "./heroImages/heroBottomImages/Jay/nodejs.png";
import reactLogo from "./heroImages/heroBottomImages/Jay/react.png";
import { useState } from "react";

const HeroBottom = (props) => {

    const id = props.number;
    const [heroBottom, setHeroBottom] = useState("");

    if (id === "firstHeroImage") {
        const firstHero = (
            <div className="heroBottomFlexBox">
                <img src={htmlLogo} alt="logo of html 5"></img>
                <img src={cssLogo} alt="logo of css 3"></img>
                <img src={jsLogo} alt="logo of javascript"></img>
                <img src={nodeLogo} alt="logo of node js"></img>
                <img src={reactLogo} alt="logo of react "></img>
            </div>
        );
        setHeroBottom(firstHero);
    }

    if (id === "secondHeroImage") {
        const secondHero = (
            <div className="heroBottomFlexBox">
                <p>Need to add WC's languages</p>
            </div>
        );
        setHeroBottom(secondHero);

    }

    if (id !== 'firstHeroImage' && id !== 'secondHeroImage') {
        const noHero = (
            <div className="heroBottomFlexBox">
                <p> some words</p>
            </div>
        );
        setHeroBottom(noHero);
    }


    return (
        <div>
            {heroBottom}
        </div>
    );

}

export default HeroBottom;