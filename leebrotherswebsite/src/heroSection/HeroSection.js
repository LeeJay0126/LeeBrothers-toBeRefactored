import { useState } from "react";
import HeroImage from "./HeroImage";
import HeroBottom from "./HeroBottom";
import "./HeroSection.css"

const HeroSection = () => {

    const [brotherPickerProtocol, brotherPickerSave] = useState(0);

    const brotherPicker = (props) => {
        
        brotherPickerSave(props);
        return brotherPickerProtocol;
    };

    return (
        <div className="heroSectionContainer">
            <HeroImage onBrotherPicker={brotherPicker}></HeroImage>
            <HeroBottom number={brotherPickerProtocol}></HeroBottom>
        </div>
    );
};

export default HeroSection;