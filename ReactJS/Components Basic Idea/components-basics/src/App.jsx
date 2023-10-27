import "./App.css";
import movies from "./assets/movies";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Counter from "./components/Counter/Counter";
import Timer from "./components/Timer/Timer";
import MovieList from "./components/Movies/MovieList/MovieList";

function App() {
    return (
        <>
            <Header />
            <main className="main-container">
                <Counter />
                <Timer startTime={5} />
                <MovieList movies={movies} />
            </main>
            <Footer />
        </>
    );
}

export default App;
