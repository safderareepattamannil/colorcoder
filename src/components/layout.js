import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import "prismjs/themes/prism-okaidia.css";
import BurgerIcon from "./burgerIcon";
import Popup from "reactjs-popup";
import Menu from "../components/mobileMenu"

export default ({ children }) => {
    const contentStyle = {
        background: "rgba(255,255,255,0)",
        width: "80%",
        border: "none",
    };
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        home {
                            title
                            description
                        }
                    }
                }
            }
        `
    );
    return (
        <div className="site-wrapper">
            <header className="site-header">
                <div className="site-title">
                    <Link to="/">{data.site.siteMetadata.title}</Link>
                    <div
                        className="primary-content"
                        dangerouslySetInnerHTML={{
                            __html: data.site.siteMetadata.home.description,
                        }}
                    />
                </div>
                <Popup
                    modal
                    overlayStyle={{ background: "rgba(255,255,255,0.98" }}
                    contentStyle={contentStyle}
                    closeOnDocumentClick={false}
                    trigger={(open) => <BurgerIcon open={open} />}
                >
                    {(close) => <Menu close={close} />}
                </Popup>
                <Navigation />
                
            </header>
            {children}
            <footer className="site-footer">
                <p>
                    &copy; {new Date().getFullYear()} Safder Areepattamannil
                    &bull; Crafted with{" "}
                    <span role="img" aria-label="love">
                        ❤️
                    </span>
                </p>
            </footer>
        </div>
    );
};
