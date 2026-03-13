import { Card } from "../assets/Card"
import { ArtistCard } from "../assets/ArtistCard"
import { VideoCard } from "../assets/VideoCard"
import { PlaylistCard } from "../assets/PlaylistCard"
import { ViewAllBtn } from "../assets/ViewAllBtn"
import { HomeHeader } from "../assets/HomeHeader"
import { JoinUsElem } from "../assets/JoinUsElem"
import { SongsTable } from "../assets/SongsTable"

export const HomePage = () => {
    return (<>
        <div className="PageWrapper">
            <HomeHeader></HomeHeader>

            <div className="weeklyTopSection pageSection">
                <h2 className="sectionHeadline">Weekly Top <span className="pinkText">Songs</span></h2>

                <div className="sectionCardsRow">
                    <div className="cardsRow">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <ViewAllBtn />
                </div>
            </div>

            <div className="newReleaseSection pageSection">
                <h2 className="sectionHeadline">New Release <span className="pinkText">Songs</span></h2>
                <div className="sectionCardsRow">
                    <div className="cardsRow">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <ViewAllBtn />
                </div>
            </div>

            <div className="trendingSongsSection pageSection">
                <h2 className="sectionHeadline">Trending <span className="pinkText">Songs</span></h2>
                <SongsTable />
            </div>


            <div className="popularArtistsSection pageSection">
                <h2 className="sectionHeadline">Popular <span className="pinkText">Artists</span></h2>
                <div className="sectionCardsRow">
                    <div className="cardsRow">
                        <ArtistCard />
                        <ArtistCard />
                        <ArtistCard />
                        <ArtistCard />
                        <ArtistCard />
                        <ArtistCard />
                    </div>
                    <ViewAllBtn />
                </div>
            </div>


            <div className="musicVideoSection pageSection">
                <h2 className="sectionHeadline">Music <span className="pinkText">Video</span></h2>
                <div className="sectionCardsRow">
                    <div className="cardsRow">
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                    </div>
                    <ViewAllBtn />
                </div>
            </div>


            <div className="topAlbumsSection pageSection">
                <h2 className="sectionHeadline">Top <span className="pinkText">Albums</span></h2>
                <div className="sectionCardsRow">
                    <div className="cardsRow">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <ViewAllBtn />
                </div>
            </div>


            <div className="moodPlaylistSection pageSection">
                <h2 className="sectionHeadline">Mood <span className="pinkText">Playlist</span></h2>
                <div className="sectionCardsRow">
                    <div className="cardsRow">
                        <PlaylistCard />
                        <PlaylistCard />
                        <PlaylistCard />
                        <PlaylistCard />
                        <PlaylistCard />
                    </div>
                    <ViewAllBtn />
                </div>
            </div>

            <JoinUsElem></JoinUsElem>
        </div>
    </>)
}