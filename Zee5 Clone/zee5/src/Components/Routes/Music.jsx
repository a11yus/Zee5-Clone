import React from "react";
import Footer from "../LandingPage/Footer";
import Navbar from "../LandingPage/Navbar";
import styles from "./music.module.css";

const Music = () => {
  return (
    <div className={styles.container}>
        <Navbar />
      <div className={styles.box}>
        <div className={styles.box1}>
          <iframe
            width="100%"
            height="70%"
            src="https://www.youtube.com/embed/PhxfspwMdww"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <div className={styles.titles}>
            <h1>
              Jolly O Gymkhana - Official Lyric Video | Beast | Thalapathy Vijay
              | Sun Pictures | Nelson | Anirudh
            </h1>
            <p>Videos 8 April 2022</p>
            <p>3.15m Zee5 Exclusive Music Tollywood </p>
            <p>
              Listen to the Most Popular songs back o back right here on Zee 5
            </p>
          </div>
        </div>

        <div className={styles.box2}>
          <div>
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/-7n_krPLRgs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
            <h1>
              Don - Bae Video | Sivakarthikeyan, Priyanka Mohan | Anirudh
              Ravichander
            </h1>
          </div>

          <div>
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/45kSKBfA3Jo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h1>
              Dheere Dheere Se Meri Zindagi Song (4K Video) Jass Inder Ft.
              Hrithik Roshan | Yo Yo Honey Singh
            </h1>
          </div>

          <div>
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/xDWhQiuB2Ko"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h1>
              Tera Fitoor (slowed + reverb) | Arijit Singh | Genius | Hindi lofi
              songs
            </h1>
          </div>

          <div>
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/CKQJsMjFN8w"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h1>
              Kaun Tujhe [Slowed+Reverb]|MS Dhoni | lowfeel music | lyrics | low
              feel
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Music;
