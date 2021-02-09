import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";

export default (props) => (
    <nav className="navigation">
        <Link to="/">Blog</Link>
        <Link className="hidden-mobile" to="/about">
            About
        </Link>
        <Link className="hidden-mobile" to="/reading">
            Currently Reading
        </Link>
        <a
            className="hidden-mobile"
            href="https://github.com/safderareepattamannil"
            target="_blank"
            rel="noopener noreferrer"
        >
            Github
        </a>
        <ThemeChanger />
    </nav>
);
