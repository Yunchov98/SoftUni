import styles from "./Movie.module.css";

export default function Movie(props) {
    return (
        <li className={styles["movie-item"]}>
            <div className={styles["media"]}>
                <img src={props.movieData.posterUrl} alt="" />
            </div>
            <div className={styles["time"]}>
                Runtime: {props.movieData.runtime} mins
            </div>
            <div className={styles["content"]}>
                <h4>{props.movieData.title}</h4>
                <div className={styles["actors"]}>
                    <p>Actors:</p>
                    <p>{props.movieData.actors}</p>
                </div>
                <p className={styles["desc"]}>Description:</p>
                <p>{props.movieData.plot}</p>
                <p className={styles["genres"]}>
                    {props.movieData.genres.join(", ")}
                </p>
            </div>
        </li>
    );
}
