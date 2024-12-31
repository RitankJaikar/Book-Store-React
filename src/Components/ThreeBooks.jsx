export default function ThreeBooks({ books, setSelectedBook }) {
    const book1 = books[0] || null;
    const book2 = books[1] || null;
    const book3 = books[2] || null;

    return (
        <div className="_3-books-wrapper">
            {
                book1
                &&
                <div className="book-wrapper-2 first">
                    <div className="book-img-wrapper">
                        <img
                            src={book1?.volumeInfo?.imageLinks?.thumbnail}
                            loading="lazy"
                            alt={book1?.volumeInfo?.title || "N/A"}
                            className="book-img _2"
                        />
                        <div className="book-bg _1"></div>
                        <div className="book-bg _2"></div>
                        <div className="book-bg _3"></div>
                    </div>
                    <div className="info-wrapper">
                        <div className="title margin-2">{book1?.volumeInfo?.title || "N/A"}</div>
                        <p className="info-para">
                            {book1?.volumeInfo?.description || "N/A"}
                        </p>
                        <a href={book1?.volumeInfo?.previewLink} target="_blank" className="read-now-button w-button">Read Now!</a>
                    </div>
                </div>
            }
            
            {
                book2
                &&
                <div className="book-wrapper-2 second">
                    <div className="book-img-wrapper">
                        <img
                            src={book2?.volumeInfo?.imageLinks?.thumbnail}
                            loading="lazy"
                            alt={book2?.volumeInfo?.title || "N/A"}
                            className="book-img _2"
                        />
                        <div className="book-bg _1"></div>
                        <div className="book-bg _2"></div>
                        <div className="book-bg _3"></div>
                    </div>
                    <div className="info-wrapper">
                        <div className="title margin-2">{book2?.volumeInfo?.title || "N/A"}</div>
                        <p className="info-para">
                            {book2?.volumeInfo?.description || "N/A"}
                        </p>
                        <a href={book2?.volumeInfo?.previewLink} target="_blank" className="read-now-button w-button">Read Now!</a>
                    </div>
                </div>
            }

            {
                book3
                &&
                <div className="book-wrapper-2 third">
                    <div className="book-img-wrapper">
                        <img
                            src={book3?.volumeInfo?.imageLinks?.thumbnail}
                            loading="lazy"
                            alt={book3?.volumeInfo?.title || "N/A"}
                            className="book-img _2"
                        />
                        <div className="book-bg _1"></div>
                        <div className="book-bg _2"></div>
                        <div className="book-bg _3"></div>
                    </div>
                    <div className="info-wrapper">
                        <div className="title margin-2">{book3?.volumeInfo?.title || "N/A"}</div>
                        <p className="info-para">
                            {book3?.volumeInfo?.description || "N/A"}
                        </p>
                        <a href={book3?.volumeInfo?.previewLink} target="_blank" className="read-now-button w-button">Read Now!</a>
                    </div>
                </div>
            }
        </div>
    )
}