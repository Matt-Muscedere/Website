import { useState } from 'react';

const Navbar = () => {
    const [count, setCount] = useState(0);

    const openGitHub = () => {
        window.open(`https://github.com/submit507`);
    }

    const handleClick = () => {
        setCount(count + 1);
        openGitHub();
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Personal Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Academic Projects</a>
                        </li>
                    </ul>
                    <button id="githubButton" className="button" onClick={handleClick}>GitHub</button>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;