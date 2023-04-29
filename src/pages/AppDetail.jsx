import React from "react";
import AppTitle from "../components/app title/apptitle";
import AppIcon from "../components/app icon/appicon";
import AppDescription from "../components/app description/appdescription";
import AppRating from "../components/app rating/apprating";
// import Header from './components/header/header';
// import Footer from './components/footer/footer';
import AppScreenshot from "../components/app screenshot/appscreenshot";
import AppReview from "../components/app review/appreview";
import IconRow from "../components/icon/icons";
import BookmarkButton from "../components/bookmark/bookmark.jsx";


function AppDetail() {
    const title = "bla bla";
    const iconUrl = "https://picsum.photos/200/300";
    const description =
        "This is the best app ever! Download it now and see for yourself!";
    const rating = 4.5;
    const screenshotUrls = ["https://picsum.photos/160/300"];
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
            <div className="button">
              <button className="free"> Get for free </button>{" "}
              <BookmarkButton className="bookmark" />
            </div>{" "}
            <div className="AppIcon right">
              <AppIcon src={iconUrl} title={title} />{" "}
            </div>{" "}
          </div>{" "}
          <AppDescription description={description} />{" "}
          <AppRating rating={rating} /> <AppScreenshot src={screenshotUrls} />{" "}
          <AppReview reviews={reviews} />{" "}
        </main>{" "}
      </div>
    );
}

export default AppDetail;