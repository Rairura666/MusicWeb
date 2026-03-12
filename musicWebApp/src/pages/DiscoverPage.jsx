import { NavBar } from "../assets/NavBar"
import { Card } from "../assets/Card"
import { ArtistCard } from "../assets/ArtistCard"
import { VideoCard } from "../assets/VideoCard"
import { PlaylistCard } from "../assets/PlaylistCard"
import { ViewAllBtn } from "../assets/ViewAllBtn"
import { GenreCard } from "../assets/GenreCard"

export const DiscoverPage = () => {
    return (<>
        <div className="PageWrapper">

            <div className="discoverPageNavbarWrapper">
                 <NavBar />
            </div>
           

            <div className="musicGenresSection">
                <h2 className="homepageSectionHeadline">Music <span className="pinkText">Genres</span></h2>
                <div className="sectionCardsRow">
                    <div className="cardsRow">
                        <GenreCard />
                        <GenreCard />
                        <GenreCard />
                        <GenreCard />
                    </div>
                    <ViewAllBtn />
                </div>
            </div>

            <div className="moodPlaylistSection">
                <h2 className="homepageSectionHeadline">Mood <span className="pinkText">Playlist</span></h2>
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

            <div className="popularArtistsSection">
                <h2 className="homepageSectionHeadline">Popular <span className="pinkText">Artists</span></h2>
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

            <div className="musicVideoSection">
                <h2 className="homepageSectionHeadline">Music <span className="pinkText">Video</span></h2>
                <div className="sectionCardsRow">
                    <div className="discoverPageMusicVideoBlock">
                        <div className="cardsRow">
                            <VideoCard />
                            <VideoCard />
                            <VideoCard />
                        </div>
                        <div className="cardsRow">
                            <VideoCard />
                            <VideoCard />
                            <VideoCard />
                        </div>
                    </div>
                    <ViewAllBtn />
                </div>
            </div>

            <div className="newReleaseSection">
                <h2 className="homepageSectionHeadline">New Release <span className="pinkText">Songs</span></h2>
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

            <div className="topAlbumsSection">
                <h2 className="homepageSectionHeadline">Top <span className="pinkText">Albums</span></h2>
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

        </div>
    </>)
}