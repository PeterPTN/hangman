import { useState } from "react";

const HEAD = (
    <div className='head'></div>
)

const BODY = (
    <div className='body'></div>
)

const RIGHT_ARM = (
    <div className='right-arm'></div>
)

// 14:46
// https://www.youtube.com/watch?v=-ONUyenGnWw&t=185s
function HangmanDrawing() {

    return (
        <div className='hangman'>
            {HEAD}
            {BODY}
            {RIGHT_ARM}
            <div className='hangman__rope'></div>
            <div className='hangman__top-bar'></div>
            <div className='hangman__center-bar'></div>
            <div className='hangman__bottom-bar'></div>
        </div>
    )
};

export default HangmanDrawing;