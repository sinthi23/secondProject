const Book = (props) => {
  // console.log(props);
  const { author, title, img, children, number } = props;
  console.log(number);
  // const displayTitle = () => {
  //   console.log(title);
  // };
  // const getSingleBook = () => {
  //   getBook(id);
  // };
  return (
    <article className="book">
      <img src={img} />
      <h2>{title}</h2>

      <h4>{author}</h4>
      {children}
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  );
};
export default Book;
