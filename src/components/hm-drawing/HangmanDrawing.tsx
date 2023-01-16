import { useState } from "react";
import styles from "./hm-drawing.module.scss";

const HEAD = (
    <div className={styles.head}></div>
)

const BODY = (
    <div className={styles.body}></div>
)

const RIGHT_ARM = (
    <div className={styles.rightArm}></div>
)

const LEFT_ARM = (
    <div className={styles.leftArm}></div>
)

// 14:46
// https://www.youtube.com/watch?v=-ONUyenGnWw&t=185s
function HangmanDrawing() {

    return (
        <div className='hangman'>
            {HEAD}
            {BODY}
            {RIGHT_ARM}
            {LEFT_ARM}
            <div className='hangman__rope'></div>
            <div className='hangman__top-bar'></div>
            <div className='hangman__center-bar'></div>
            <div className='hangman__bottom-bar'></div>
        </div>
    )
};

export default HangmanDrawing;