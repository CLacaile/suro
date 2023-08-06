import React from "react";
import NextQuestionButton from '../../atoms/NextQuestionButton/NextQuestionButton';
import './HomeScreen.css';
import BeautifulText from "../../atoms/BeautifulText/BeautifulText";

export default function HomeScreen() {
    return (
        <div className="homescreen">
            <BeautifulText className="big-text" text="SURO?"/>
            <NextQuestionButton/>
        </div>
    )
}