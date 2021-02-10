import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import "prismjs/themes/prism-okaidia.css";
import BurgerIcon from "./burgerIcon";
import Popup from "reactjs-popup";
import Menu from "../components/mobileMenu";
import Mailchimp from "react-mailchimp-form";

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
                <div className="subscribe-now">
                    <h3>Posts Delivered To Your Inbox!</h3>
                    <Mailchimp
                        action="https://dev.us1.list-manage.com/subscribe/post?u=938d22ad3b959c88952bf5185&amp;id=a221c1d104"
                        fields={[
                            {
                                name: "EMAIL",
                                placeholder: "Email",
                                type: "email",
                                required: true,
                            },
                        ]}
                        messages={{
                            button: "Send it to me!",
                            sending: "Sending...",
                            success: "Thank you for subscribing!",
                            error: "An unexpected internal error has occurred.",
                            empty: "Please try again.",
                            duplicate:
                                "This email has already been subscribed.",
                        }}
                    />
                </div>
                <p className="siteFooter-p-desktop">
                    &copy; {new Date().getFullYear()} Safder Areepattamannil
                    &bull; Crafted with{" "}
                    <span role="img" aria-label="love">
                        ❤️
                    </span>
                </p>
                <p className="siteFooter-p-mobile">
                    &copy; {new Date().getFullYear()} Safder Areepattamannil <br></br>
                    Crafted with{" "}
                    <span role="img" aria-label="love">
                        ❤️
                    </span>
                </p>
            </footer>
        </div>
    );
};
