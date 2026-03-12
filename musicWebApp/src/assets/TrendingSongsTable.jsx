export const TrendingSongsTable = () => {

    const songPanel =
        <div className="songPanelBg">
            <div className="songPanelImg"></div>
            <div className="songPanelArtistAndName">
                <h3>Name</h3>
                <span>Artist</span>
            </div>
            <span className="songPanelDate">04 nov 2023</span>
            <span className="songPanelAlbum">Grejkejrtkl</span>
            <button className="likeSongBtn">

                <svg viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1498 0C13.1614 0 11.4324 0.924805 10.4155 2.47461C9.39854 0.924805 7.66957 0 5.68116 0C4.17496 0.00180919 2.73096 0.619715 1.66591 1.71817C0.600867 2.81662 0.00175417 4.30593 0 5.85938C0 8.71094 1.72329 11.6787 5.12252 14.6787C6.68015 16.0476 8.36269 17.2577 10.1466 18.292C10.2292 18.3378 10.3216 18.3618 10.4155 18.3618C10.5093 18.3618 10.6017 18.3378 10.6844 18.292C12.4682 17.2577 14.1508 16.0476 15.7084 14.6787C19.1076 11.6787 20.8309 8.71094 20.8309 5.85938C20.8292 4.30593 20.2301 2.81662 19.165 1.71817C18.1 0.619715 16.656 0.00180919 15.1498 0ZM10.4155 17.1006C8.86167 16.1758 1.13623 11.3008 1.13623 5.85938C1.13749 4.61657 1.61673 3.42504 2.4688 2.54624C3.32086 1.66744 4.47616 1.17317 5.68116 1.17188C7.6014 1.17188 9.2139 2.22949 9.88996 3.93262C9.93276 4.04008 10.0056 4.132 10.0991 4.19669C10.1927 4.26138 10.3028 4.29592 10.4155 4.29592C10.5281 4.29592 10.6382 4.26138 10.7318 4.19669C10.8254 4.132 10.8982 4.04008 10.941 3.93262C11.617 2.22949 13.2295 1.17188 15.1498 1.17188C16.3548 1.17317 17.5101 1.66744 18.3621 2.54624C19.2142 3.42504 19.6934 4.61657 19.6947 5.85938C19.6947 11.3008 11.9693 16.1758 10.4155 17.1006Z" fill="#EE10B0" />
                </svg>

            </button>
            <span className="songPanelTime">3:26</span>
        </div>

    return (
        <>

            <div className="trendingSongsWrapper">
                <div className="trendingSongInfoHeader">
                    <span>Release Date</span>
                    <span>Album</span>
                    <span>Time</span>
                </div>
                <div className="trendingSongsnumeration">
                    <h3>№1</h3>
                    <h3>№2</h3>
                    <h3>№3</h3>
                </div>
                <div className="trendingSongPanelWrapper">
                    {songPanel}
                    {songPanel}
                    {songPanel}
                </div>
            </div>
            <div className="viewAllBtn2Wrapper">
                <button className="viewAllBtn2">+ View All</button>
            </div>
        </>
    )
}