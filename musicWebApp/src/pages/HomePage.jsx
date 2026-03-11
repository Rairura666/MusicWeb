import { Card } from "../assets/Card"
import { HomeHeader } from "../assets/HomeHeader"
import { JoinUsElem } from "../assets/JoinUsElem"

export const HomePage = () => {
    return (<>
        <div className="homePageWrapper">
            <HomeHeader></HomeHeader>

            <div className="weeklyTopSection">
                <h2 className="homepageSectionHeadline">Weekly Top <span className="pinkText">Songs</span></h2>

                <div className="sectionCardsRow">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <div className="viewAllBtnWrapper">
                        <button className="viewAllBtn">+</button>
                        <span>View All</span>
                    </div>
                </div>
            </div>

            <div className="newReleaseSection">
                <h2 className="homepageSectionHeadline">New Release <span className="pinkText">Songs</span></h2>
                <div className="sectionCardsRow">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <div className="viewAllBtnWrapper">
                        <button className="viewAllBtn">+</button>
                        <span>View All</span>
                    </div>
                </div>
            </div>


            <h2 className="homepageSectionHeadline">Trending <span className="pinkText">Songs</span></h2>
            <h2 className="homepageSectionHeadline">Popular <span className="pinkText">Artists</span></h2>
            <h2 className="homepageSectionHeadline">Music <span className="pinkText">Video</span></h2>

            <div className="topAlbumsSection">
                <h2 className="homepageSectionHeadline">Top <span className="pinkText">Albums</span></h2>
                <div className="sectionCardsRow">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <div className="viewAllBtnWrapper">
                        <button className="viewAllBtn">+</button>
                        <span>View All</span>
                    </div>
                </div>
            </div>


            <div className="moodPlaylistSection">
                <h2 className="homepageSectionHeadline">Mood <span className="pinkText">Playlist</span></h2>
                <div className="sectionCardsRow">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <div className="viewAllBtnWrapper">
                        <button className="viewAllBtn">+</button>
                        <span>View All</span>
                    </div>
                </div>
            </div>

            <JoinUsElem></JoinUsElem>
        </div>
    </>)
}