import { useState } from "react";

import styles from "./Timer.module.css";

export default function Timer(props) {
    const [time, setTime] = useState(props.startTime);

    setTimeout(() => {
        setTime(time + 1);
    }, 1000);

    return (
        <section className={styles["timer-section"]}>
            <h3>Timer Section</h3>
            <p>Timer : {time}</p>
        </section>
    );
}
