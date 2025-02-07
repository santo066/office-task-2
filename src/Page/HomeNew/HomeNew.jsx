import FaqNew from "./FaqNew/FaqNew";
import FeatureNew from "./Feature/FeatureNew";
import HeroNew from "./Hero/HeroNew";
import OnePlace from "./OnePlace/OnePlace";
import SliderNew from "./SliderNew/SliderNew";

export default function HomeNew() {
    return (
        <div className="bg-[#f7f6f2]">
            <HeroNew></HeroNew>
            <SliderNew></SliderNew>
            <FeatureNew></FeatureNew>
            <FaqNew></FaqNew>
            <OnePlace></OnePlace>
        </div>
    )
}