import React from "react";
import listBooks from "./listBooks"

export default function completedBooks() {
    return (
        <div className="completed-container">
            <h2 className="book-progress">Completed</h2>

            <div className="completed-books">
                {listBooks.map((link) => (
                    <div
                        className="book-card-mini"
                        dangerouslySetInnerHTML={{ __html: link }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
