import React from "react";
import Layout from "../components/layout";
import CompletedBooks from "./completedBooks";

export default function reading() {
    return (
        <div>
            <Layout>
                <h2 className="book-progress">In Progress &uarr;</h2>

                <div className="books-grid">
                    <div class="book-card">
                        <a
                            target="_blank" rel="noopener noreferrer"
                            href="https://www.amazon.com/gp/product/0141989149/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0141989149&linkCode=as2&tag=colorcoder09-20&linkId=fca74ada82e47033a82c123931043f81"
                        >
                            <img
                                border="0"
                                src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0141989149&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=colorcoder09-20"
                                alt="Humble Pi: A Comedy of Maths Errors"
                            />
                        </a>
                    </div>
                    <div class="book-card">
                        <a
                            target="_blank" rel="noopener noreferrer"
                            href="https://www.amazon.com/gp/product/013409266X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=013409266X&linkCode=as2&tag=colorcoder09-20&linkId=b9be605038550171015c86b6e3397410"
                        >
                            <img
                                border="0"
                                src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=013409266X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=colorcoder09-20"
                                alt="Computer Systems: A Programmer's Perspective"
                            />
                        </a>
                    </div>

                    <div class="book-card">
                        <a
                            target="_blank" rel="noopener noreferrer"
                            href="https://www.amazon.com/gp/product/1680502395/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1680502395&linkCode=as2&tag=colorcoder09-20&linkId=bc964b765d8b1821a64d3a83d4c94335"
                        >
                            <img
                                border="0"
                                src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1680502395&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=colorcoder09-20"
                                alt="Release It!: Design and Deploy Production-Ready Software"
                            />
                        </a>
                    </div>
                </div>

                <CompletedBooks />
            </Layout>
        </div>
    );
}
