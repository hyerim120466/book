import { useState } from "react";

const BookItem = ({ id, name, age, content, img, isChk, onAdd, changeChk }) => {
  return (
    <li>
      <img src={img} alt="" />

      <div>
        <p>이름 : {name}</p>
        <p>나이 : {age} 살</p>
      </div>
      <input
        type="radio"
        id="radio"
        name="ra1"
        onChange={() => {
          onAdd(id);
          changeChk(id);
        }}
        checked={isChk}
      />
    </li>
  );
};

export default BookItem;
