import Movie from "../Movie/Movie";
import styles from "./MovieList.module.css";

export default function MovieList(props) {
    return (
        <section className={styles["movie-list"]}>
            <h3>Movie List</h3>
            <ul>
                <Movie movieData={props.movies[0]} />
                <Movie movieData={props.movies[1]} />
                <Movie movieData={props.movies[2]} />
                <Movie movieData={props.movies[3]} />
                <Movie movieData={props.movies[3]} />
                <Movie movieData={props.movies[3]} />
            </ul>
        </section>
    );
}
