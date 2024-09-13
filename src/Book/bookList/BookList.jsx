import "./BookList.scss";
import BookItem from "./BookItem";

const BookList = ({ data, onAdd, changeChk }) => {
  return (
    <ul>
      {data.map((item) => (
        <BookItem key={item.id} {...item} onAdd={onAdd} changeChk={changeChk} />
      ))}
    </ul>
  );
};

export default BookList;
