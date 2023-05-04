import React from "react";
import "../assets/styles/AppDetail.css";
import AppTitle from "../components/app title/apptitle";
import AppIcon from "../components/app icon/appicon";
import AppDescription from "../components/app description/appdescription";
// import Header from './components/header/header';
// import Footer from './components/footer/footer';
import AppScreenshot from "../components/app screenshot/appscreenshot";
import AppReview from "../components/app review/appreview";
import IconRow from "../components/icon/icons";
import BookmarkButton from "../components/bookmark/bookmark.jsx";
import RatingsAndReviews from '../components/ratingsrevs/ratingsrevs';
import InfoAndReviews from "../components/ratingsrevs/inforevs";
import Rat from "../components/ratingsrevs/rat"


function AppDetail() {
    const title = "bla bla";
    const iconUrl = "https://picsum.photos/200/300";
    const description ="An interesting comic that tells a unique story about the characters background";
    const screenshotUrls = ["https://picsum.photos/160/250"];
    const reviews = [{
            author: "John Smith",
            body: "This app is amazing! I can't believe how easy it is to use.",
            rating: 5,
        },
        {
            author: "Jane Doe",
            body: "I downloaded this app and it completely changed my life. Thank you!",
            rating: 4,
        },
    ];

    return (
      <div className="App">
        <main className="App-main">
          <div className="App-header">
            <AppTitle title={title} />{" "}
            <div className="icons">
              <IconRow />
            </div>{" "}
            <div>
                <button className="button">Get for free</button>{" "}
                <BookmarkButton/>
            </div>{" "}
            <div className="AppIcon right">
              <AppIcon src={iconUrl} title={title} />{" "}
            </div>{" "}
          </div>{" "}
          <div className="info">
          <AppDescription description={description} />{" "}
          <InfoAndReviews/>
          </div>
          <p>Screenshots:</p>
          <AppScreenshot src={screenshotUrls} />{" "}
          <div className="rev">
          <RatingsAndReviews />
            <div className="rat">
            <Rat/>
            <AppReview reviews={reviews} />{" "}
            </div>
          </div>
        </main>{" "}
      </div>
    );
}

export default AppDetail;