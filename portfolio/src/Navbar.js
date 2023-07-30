export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">SiteName</a>
        <ul>
            <li>
            <a href="/aboutMe">About Me</a>
            </li>
            <li>
            <a href="/portfolio">Portfolio</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
            <li>
                <a href="/resume">Resume</a>
            </li>
        </ul>
    </nav>
}