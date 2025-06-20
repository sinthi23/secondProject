import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";
import Book from "./Book";

const BookList = () => {
  // const getBook = (id) => {
  //   const book = books.find((book) => book.id === id);
  //   console.log(book);
  // };
  // const someValue = "shakeAndBake";
  // const displayValue = () => {
  //   console.log(someValue);
  // };
  return (
    <>
      <h1>amazon best seller</h1>
      <section className="booklist">
        {books.map((a, index) => {
          return <Book {...a} key={a.id} number={index} />;
        })}
      </section>
    </>
  );
};

// const EventExample = () => {
//   const handleFormInput = (e) => {
//     console.log(e.target);
//     console.log(e.target.name);
//     console.log(e.target.value);
//     console.log("handle form input");
//   };
//   const handleButtonClick = () => {
//     alert("handle button click");
//   };
//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     console.log("form submitted");
//   };
//   return (
//     <section>
//       <form>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={handleFormInput}
//           style={{ margin: "1rem 0" }}
//         />
//       </form>
//       <button type="submit" onClick={handleFormSubmission}>
//         submit
//       </button>
//       <div>
//         <button onClick={handleButtonClick} type="button">
//           {" "}
//           click me
//         </button>
//       </div>
//     </section>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
