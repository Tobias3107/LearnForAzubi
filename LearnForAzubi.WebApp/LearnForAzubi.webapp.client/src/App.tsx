import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {
    Outlet,
} from "react-router-dom";
import { sites } from "./Utilities/Routes";

function App() {
    return (
        <div>
            <Header sites={sites} />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default App;