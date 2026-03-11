import { HomeHeader } from "../assets/HomeHeader"
import { JoinUsElem } from "../assets/JoinUsElem"

export const HomePage = () => {
    return (<>
        <div className="homePageWrapper">
            <HomeHeader></HomeHeader>

            <div className="weeklyTopSection">
                <h2>Weekly Top <span className="pinkText">Songs</span></h2>
                <div className="viewAllBtnWrapper">
                    <button className="viewAllBtn">+</button>
                    <span>View All</span>
                </div>


            </div>


            <h2>New Release <span className="pinkText">Songs</span></h2>
            <h2>Trending <span className="pinkText">Songs</span></h2>
            <h2>Popular <span className="pinkText">Artists</span></h2>
            <h2>Music <span className="pinkText">Video</span></h2>
            <h2>Top <span className="pinkText">Albums</span></h2>
            <h2>Mood <span className="pinkText">Playlist</span></h2>
            <JoinUsElem></JoinUsElem>
        </div>
    </>)
}