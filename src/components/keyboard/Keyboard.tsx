import { useState } from "react";
import styles from './keyboard.module.scss';

const KEYS = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
]

type KeyboardProps = {
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetter: (letter: string) => void,
    // Optional var
    disabled?: boolean
}

function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter, disabled = false }:
    KeyboardProps) {

    return (
        <div style={{ alignSelf: "stretch" }}>
            <div className={styles.keyboard}>
                {KEYS.map((key) => {
                    const isActive = activeLetters.includes(key);
                    const isInactive = inactiveLetters.includes(key);
                    let btnStyles = [styles.btn];

                    if (isActive) btnStyles = [...btnStyles, styles.active, styles.disabled]
                    else if (isInactive) btnStyles = [...btnStyles, styles.inactive, styles.disabled]

                    return (
                        <button
                            disabled={disabled}
                            onClick={() => addGuessedLetter(key)}
                            className={btnStyles.join(" ")}
                            key={key}>
                            {key}
                        </button>)
                })}
            </div>
        </div>
    )
};

export default Keyboard;