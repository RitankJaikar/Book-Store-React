export default function Selected({ selectedBook }) {

    return (
        <div className="_3-books-wrapper">
            <div className="book-wrapper-2 full">
                <div className="book-img-wrapper">
                    <img
                        src={selectedBook?.volumeInfo?.imageLinks?.thumbnail}
                        loading="lazy"
                        alt={selectedBook?.volumeInfo?.title || "N/A"}
                        className="book-img _2"
                    />
                    <div className="book-bg _1"></div>
                    <div className="book-bg _2"></div>
                    <div className="book-bg _3"></div>
                </div>
                <div className="info-wrapper _2">
                    <div className="div-block-2">
                        <div className="title-author-wrapper">
                            <div className="title margin-3">
                                {selectedBook?.volumeInfo?.title || "N/A"}
                            </div>
                            <div className="author-text">{selectedBook?.volumeInfo?.authors ? selectedBook?.volumeInfo?.authors[0] : "N/A"}</div>
                        </div>
                        <div className="published-date">Published On : {selectedBook?.volumeInfo?.publishedDate || "N/A"}</div>
                    </div>
                    <div className="div-block-3">
                        <div className="info-wrapper-2">
                            <div className="info-text">Avg Rating : {selectedBook?.volumeInfo?.averageRating || "N/A"}</div>
                            <div className="vertical-line"></div>
                            <div className="info-text">Rating Count : {selectedBook?.volumeInfo?.ratingsCount || "N/A"}</div>
                            <div className="vertical-line"></div>
                            <div className="info-text">Publisher : {selectedBook?.volumeInfo?.publisher || "N/A"}</div>
                            <div className="vertical-line"></div>
                            <div className="info-text">Language : {selectedBook?.volumeInfo?.language || "N/A"}</div>
                        </div>
                        <div className="_2-button-wrapper">
                            <a href={selectedBook?.volumeInfo?.previewLink} target="_blank" className="read-now-button w-button">Read Now!</a>
                            <a href={selectedBook?.volumeInfo?.infoLink} target="_blank" className="read-now-button w-button">More Info!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}