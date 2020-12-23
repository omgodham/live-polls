import React from 'react';
import "./Home.css";
export default function Home() {
    return (
        <div className="home">
        <div className="home__content">
        <div className="home__buttons">
        <button className="featured__btn">FEATURED</button>
        <button className="viral__btn">VIRAL</button>
        </div>
            <h1 className="home__header">
            How To Teach Viral Better Than Anyone Else
            </h1>
            <p>
            Lets join this community now, you can easily add posts in PressGrid.
            </p>
            <p>
            We can publish your posts immediately
            </p>
        </div>
        </div>
    )
}
