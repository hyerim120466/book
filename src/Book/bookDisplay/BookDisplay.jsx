import "./BookDisplay.scss";

const BookDisplay = ({ onData }) => {
  return (
    <div className="display">
      <img src={onData.img} alt="" />
      <strong>이름 : {onData.name}</strong>
      <p>나이 : {onData.age}</p>
      <p>내용 : {onData.content}</p>
    </div>
  );
};

export default BookDisplay;
