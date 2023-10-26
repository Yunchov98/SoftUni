import Navbar from "./components/Navbar/Navbar";
import Spinner from "./components/Spinner/Spinner";
import Topbar from "./components/Topbar/Topbar";
import Carousel from "./components/Carousel/CarouselService";
import CarouselService from "./components/Carousel/CarouselService/CarouselService";
import AboutUs from "./components/AboutUs/AboutUs";
import Facts from "./components/Facts/Facts";

function App() {
    return (
        <>
            {/* <Spinner /> */}
            <Topbar />
            <Navbar />
            <Carousel />
            <CarouselService />
            <AboutUs />
            <Facts />
        </>
    );
}

export default App;
