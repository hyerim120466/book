import { useCallback, useState } from "react";
import "./BookAdd.scss";
const BookAdd = ({ ondatas }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [img, setImg] = useState("");
  const changeInput = (e) => {
    e.preventDefault();
    ondatas(name, age, img);
    const empty = () => {
      setName("");
      setAge("");
      setImg("");
    };
  };
  return (
    <form className="add " onSubmit={changeInput}>
      <div className="name">
        <p>이름 </p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="age">
        <p>나이 </p>
        <input
          type="text"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="img">
        <p>사진 </p>
        <input
          type="text"
          name="img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          placeholder="./images/actor5.png"
        />
      </div>
      <button type="submit">확인</button>
    </form>
  );
};

export default BookAdd;
