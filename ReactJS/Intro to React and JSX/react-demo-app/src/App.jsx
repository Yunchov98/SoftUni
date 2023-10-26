import Navbar from "./components/Navbar/Navbar";
import Spinner from "./components/Spinner/Spinner";
import Topbar from "./components/Topbar/Topbar";
import Carousel from "./components/Carousel/Carousel";

function App() {
    return (
        <>
            {/* <Spinner /> */}
            <Topbar />
            <Navbar />
            <Carousel />
        </>
    );
}

export default App;
