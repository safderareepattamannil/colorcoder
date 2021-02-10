import React from "react";
import { Link } from "gatsby";
export default ({ close }) => (
    <div className="menu">
        <ul>
            <li onClick={close} onKeyDown={close}>
                <Link to="/">Blog</Link>
            </li>
            <li onClick={close} onKeyDown={close}>
                <Link to="/about">About</Link>
            </li>
            <li onClick={close} onKeyDown={close}>
                <Link to="/reading">Currently Reading</Link>
            </li>
            <li onClick={close} onKeyDown={close}>
                <a
                    href="https://github.com/safderareepattamannil"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </a>
            </li>
        </ul>
    </div>
);
