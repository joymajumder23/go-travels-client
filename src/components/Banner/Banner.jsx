import { Typewriter } from "react-simple-typewriter";
import Slider from "../Slider/Slider";

const Banner = () => {
    return (
        <div className="">
            <div className="relative">
            <Slider></Slider>
            </div>
            <h1 className="text-xl text-center items-center lg:text-9xl absolute md:top-60 lg:z-10 text-white font-bold"><Typewriter
            words={['Southeast Asian Nations']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h1>
        </div>
    );
};

export default Banner;