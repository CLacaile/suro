import React from "react";
import NextQuestionButton from '../../atoms/NextQuestionButton/NextQuestionButton';
import './HomePage.css';
import BeautifulText from "../../atoms/BeautifulText/BeautifulText";

export default function HomePage() {
    return (
        <section className="homepage">
            <BeautifulText className="big-text" text="SURO?"/>
            <NextQuestionButton/>
        </section>
    )
}