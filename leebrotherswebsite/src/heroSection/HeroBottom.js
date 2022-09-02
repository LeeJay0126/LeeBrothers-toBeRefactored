import htmlLogo from "./heroImages/heroBottomImages/Jay/download.png";
import cssLogo from "./heroImages/heroBottomImages/Jay/css3.png";
import jsLogo from "./heroImages/heroBottomImages/Jay/javascript.png";
import nodeLogo from "./heroImages/heroBottomImages/Jay/nodejs.png";
import reactLogo from "./heroImages/heroBottomImages/Jay/react.png";

const HeroBottom = (props) => {

    const id = props.number;

    if(id === "firstHeroImage"){
        return (
            <div className="heroBottomFlexBox">
                <img src={htmlLogo} alt="logo of html 5"></img>
                <img src={cssLogo} alt="logo of css 3"></img>
                <img src={jsLogo} alt="logo of javascript"></img>
                <img src={nodeLogo} alt="logo of node js"></img>
                <img src={reactLogo} alt="logo of react "></img>
            </div>
        );
    }

    if(id === "secondHeroImage"){
        return (
            <div className="heroBottomFlexBox">
                <p>Need to add WC's languages</p>
            </div>
        );
    }

    return (
        <div className="heroBottomFlexBox">
            <p> some words</p>
        </div>
    );

}

export default HeroBottom;