import ArtWork from "./ArtWork";
import Banner from "./Banner";
import Counting from "./Counting";

const Home = () => {
   


    return (
        <div className="bg-[#16325B] bg-opacity-85">
            <Banner></Banner>
            <Counting></Counting>
            <ArtWork></ArtWork>
          
        </div>
    );
};

export default Home;