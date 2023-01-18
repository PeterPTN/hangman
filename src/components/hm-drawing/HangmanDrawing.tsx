import styles from "./hm-drawing.module.scss";

const HEAD = (
    <div key={0} className={styles.head}></div>
)

const BODY = (
    <div key={1} className={styles.body}></div>
)

const RIGHT_ARM = (
    <div key={2} className={styles.rightArm}></div>
)

const LEFT_ARM = (
    <div key={3} className={styles.leftArm}></div>
)

const RIGHT_LEG = (
    <div key={4}className={styles.rightLeg}></div>
)

const LEFT_LEG = (
    <div key={5} className={styles.leftLeg}></div>
)

const BODY_PARTS = [
    HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG
]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
        <div className={styles.hangman}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div className={styles.rope}></div>
            <div className={styles.top_bar}></div>
            <div className={styles.enter_bar}></div>
            <div className={styles.bottom_bar}></div>
        </div>
    )
};

export default HangmanDrawing;