import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
import Nav from './Components/Nav';
import Selected from './Components/Selected';
import ThreeBooks from './Components/ThreeBooks';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    setLoading(true);
    // Make both API calls simultaneously
    Promise.all([
      axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter"),
      axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes"),
    ])
      .then(([harryPotterRes, sherlockHolmesRes]) => {
        // Combine the results of both calls
        const combinedData = [
          ...(harryPotterRes.data.items || []),
          ...(sherlockHolmesRes.data.items || []),
        ];
        // Update the books state
        setBooks(combinedData);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  //for search call
  useEffect(() => {
    setLoading(true);
    if(query) {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(res => {
        if (res.data.items) {
          setBooks(res.data.items);
        }
        else {
          setBooks([]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      })
    }
  }, [query]);

  return (
    <>
      <Nav setQuery={setQuery} />
      <div className="main">
        {selectedBook
          ?
          <Selected selectedBook={selectedBook} />
          :
          books.length && <ThreeBooks books={books} setSelectedBook={setSelectedBook} />
        }
        <div className="title margin-1">{query ? `Showing results for "${query}"` : "More Books"}</div>
        <div className="all-books-wrapper">
          {
            loading
              ?
              "Loading..."
              :
              books.length
                ?
                books.map(book => {
                  return (
                    <div
                      key={book?.id}
                      className="book-wrapper"
                      onClick={() => {
                        setSelectedBook(book)
                        window.scrollTo({
                          top: 0, // Scroll to the top
                          behavior: "smooth", // Smooth scrolling animation
                        });
                      }}
                    >
                      <img
                        src={book?.volumeInfo?.imageLinks?.thumbnail}
                        loading="lazy"
                        alt={book?.volumeInfo?.title}
                        className="book-img"
                      />
                    </div>
                  )
                })
                :
                <div style={{ color: "red", whiteSpace: "nowrap" }}>X_X No Results Found X_X</div>
          }
        </div>
      </div>
    </>
  )
}

export default App;