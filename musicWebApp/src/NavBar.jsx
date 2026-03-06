export function NavBar() {
    return (
        <div className="navBarWrapper">
                <input type="search" className="search" placeholder="Search For Musics, Artists, ..."/>
            <div className="navLinks">
                <a href="/" className="navLink">About us</a>
                <a href="/" className="navLink">Contact</a>
                <a href="/" className="navLink">Premium</a>
            </div>
            <div className="navBtns">
                <button className="loginBtn borderedBtn">Login</button>
                <button className="sighUpBtn filledBtn">Sign Up</button>
            </div>
        </div>
    )
}