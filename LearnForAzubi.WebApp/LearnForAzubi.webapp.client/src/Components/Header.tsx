
import { useLocation } from "react-router-dom";
import Site from "../Utilities/Site";

interface AppProps {
    sites: Site[]
}

function Navbar({ sites }: AppProps) {
    sites = sites.filter((site) => site.path !== undefined);
    const pathLocation = useLocation().pathname;

    return (
        <header>
            <h1 className="logo">LearnForAzubi</h1>
            <nav>
                <ul className="nav__links">
                    {
                        sites.map((site) => (
                            <li key={site.path}>
                                <a href={site.path}>
                                    <button className={pathLocation == site.path ? "selected" : ""}>{site.siteName}</button>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
  );
}

export default Navbar;