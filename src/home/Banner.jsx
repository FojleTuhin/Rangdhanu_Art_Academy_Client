import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'



const Banner = () => {
    return (
        <div>
            <Carousel className="text-center">
                <div>
                    <img src={img3} />
                </div>
                <div className="relative">
                    <img src={img2} />
                </div>
            </Carousel>

        </div>
    );
};

export default Banner;