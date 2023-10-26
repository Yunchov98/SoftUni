import Navbar from "./components/Navbar/Navbar";
import Spinner from "./components/Spinner/Spinner";
import Topbar from "./components/Topbar/Topbar";
import Carousel from "./components/Carousel/CarouselService";
import CarouselService from "./components/Carousel/CarouselService/CarouselService";

function App() {
    return (
        <>
            {/* <Spinner /> */}
            <Topbar />
            <Navbar />
            <Carousel />
            <CarouselService />
        </>
    );
}

export default App;
