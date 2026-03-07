import { NavBar } from "./NavBar"

export function HomeHeader() {
    return (
        <>
            <div className="homeHeaderBg">
                <NavBar></NavBar>
                
                <div className="homeHeaderTextWrapper">
                    <h1>All the <span className="pinkText">Best Songs</span> in One Place</h1>
                    <span>On our website, you can access an amazing collection of popular and new songs. Stream your favorite tracks in high quality and enjoy without interruptions. Whatever your taste in music, we have it all for you!</span>

                    <div className="homeHeaderButtonRow">
                        <button className="filledBtn">Discover Now</button>
                        <button className="borderedBlueBtn">Create Playlist</button>
                    </div>
                </div>
            </div>
        </>)
}