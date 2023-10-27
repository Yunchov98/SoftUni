import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount((oldValue) => oldValue + 1);
    };

    const clearCounterHandler = (e) => {
        setCount(0);
    };

    let message = "";

    switch (count) {
        case 1:
            message = "First blood";
            break;
        case 2:
            message = "Double kill";
            break;
        case 3:
            message = "Tripple kill";
            break;
        case 4:
            message = "Quadra kill";
            break;
        case 5:
            message = "Penta kill";
            break;
    }

    return (
        <section className={styles["counter-section"]}>
            <h3>Counter Section</h3>

            {count < 0 ? <p>Invalid count!</p> : <p>Valid count</p>}
            {count === 0 && <p>Please start incrementing</p>}
            <h4>{message}</h4>
            <p>Count: {count}</p>

            <div className={styles["buttons"]}>
                <button
                    disabled={count <= 0}
                    onClick={() => setCount(count - 1)}
                >
                    -
                </button>
                <button onClick={clearCounterHandler}>Reset</button>
                <button disabled={count >= 5} onClick={incrementCount}>
                    +
                </button>
            </div>
        </section>
    );
}
