import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/1.jpg'
import img2 from '../assets/3.jpg'
import img3 from '../assets/4.jpg'


const Banner = () => {
    return (
        <div>
            <Carousel className="text-center">
                <div>
                    <img src={img1} />

                </div>
                <div>
                    <img src={img3} />

                </div>
                <div>
                    <img src={img2} />

                </div>
                <div>
                    <img src={img1} />

                </div>
                <div>
                    <img src={img1} />

                </div>
                <div>
                    <img src={img1} />

                </div>

            </Carousel>

        </div>
    );
};

export default Banner;