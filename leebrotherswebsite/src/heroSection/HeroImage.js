import { useState } from "react";
import './HeroImage.css';

const HeroImage = (props) => {

    const [hoveredImage, expandingHeroHandler] = useState();

    const heroImageHandler = (event,number) => {

        if(number === 0){
            document.getElementById("firstHeroImg").style.width = "50%";
            document.getElementById("secondHeroImg").style.width="50%";
            document.getElementById("firstHeroImg").style.backgroundPosition = "left center";
            document.getElementById("secondHeroImg").style.backgroundPosition = "right center";
        }

        if(number === 1){
            document.getElementById("firstHeroImg").style.width = "100%";
            document.getElementById("secondHeroImg").style.width="0%";
            document.getElementById("firstHeroImg").style.backgroundPosition = "center";
        }

        if(number === 2){
            document.getElementById("firstHeroImg").style.width = "0%";
            document.getElementById("secondHeroImg").style.width="100%";
            document.getElementById("secondHeroImg").style.backgroundPosition = "center";
        }

        expandingHeroHandler(event.target.id);
        props.brotherPicker(hoveredImage);
    };

    const brotherNavigator = () => {
        if(hoveredImage === "firstHeroImg"){
            console.log("1");
        }

        if(hoveredImage === "secondHeroImg"){
            console.log("2");
        }

    };

    return (
        <div className="heroImgContainer">
            <div id="firstHeroImg" className="backgrounds"
            onMouseEnter={event => heroImageHandler(event,1)}
            onMouseLeave={event => heroImageHandler(event,0)}
            onClick={() => brotherNavigator}/>
            <div id="secondHeroImg" className="backgrounds"
            onMouseEnter={event => heroImageHandler(event,2)}
            onMouseLeave={event => heroImageHandler(event,0)}
            onClick={() => brotherNavigator}/>
        </div>
    );

};

export default HeroImage;