import { SimpleNavBar } from "../assets/SimpleNavBar"
import { SongsTable } from "../assets/SongsTable"
import { Card } from "../assets/Card"
import { ArtistCard } from "../assets/ArtistCard"
import { PlaylistCard } from "../assets/PlaylistCard"
import { ViewAllBtn } from "../assets/ViewAllBtn"

export const RandomArtistPage = () => {
    return (<>
        <div className="artistPageHeader">
            <SimpleNavBar />
            <h1>Eminem</h1>
        </div>

        <div className="artistPagePopularSongs">
            <h2>Popular</h2>
            <SongsTable />
        </div>

        <div className="artistsAlbumsSection pageSection">
            <h2 className="sectionHeadline">Artist's <span className="pinkText">Albums</span></h2>
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

        <div className="artistsSingleSongsSection pageSection">
            <h2 className="sectionHeadline">Single <span className="pinkText">Songs</span></h2>
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

        <div className="artistsPlaylistSection pageSection">
            <h2 className="sectionHeadline">Artist's <span className="pinkText">Playlists</span></h2>
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

        <div className="artistsAlsoListenToSection pageSection">
            <h2 className="sectionHeadline">Name's Fans <span className="pinkText">Also Listen To</span></h2>
            <div className="sectionCardsRow">
                <div className="cardsRow">
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                </div>
                <ViewAllBtn />
            </div>
        </div>

    </>)
}