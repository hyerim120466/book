import { useRef, useState } from "react";
import "../Book/Book.scss";
import BookDisplay from "./bookDisplay/BookDisplay";
import BookAdd from "./bookList/BookAdd";
import BookList from "./bookList/BookList";

const dataList = [
  {
    id: 1,
    name: "구찬성",
    age: 29,
    content:
      "초초초 엘리트 호텔리어이자 호텔 델루나의 인간 지배인 / 강박, 결벽, 집착 등을 모두 갖춘 자기관리가 철저한 완벽주의자로, 누가 봐도 매우 잘났고 내가 봐도 정말 잘난, 스스로에 대한 자랑스런 마음을 숨기지 못한다. 한마디로 재수 없을 만큼 잘난 척을 하는 타입이지만 꽤나 예의바른 청년이자 사실은 마음이 연약한 쉬운 남자이다. 귀신을 무서워하나, 귀신전용 호텔 델루나의 지배인으로 일하게 된다. 장만월의 엄청난 사치때문에 머리가 아프다.",
    img: "./images/actor1.png",
    isChk: true,
  },
  {
    id: 2,
    name: "장만월",
    age: 1340,
    content:
      "큰 죄를 짓고 델루나라는 객점에 긴 세월 동안 묶인 저주에 걸린 여인 / 껍데기는 달처럼 고고하고 아름답지만, 천년도 넘게 묵은 그 노파가 속에 들어앉은 듯 쭈글쭈글하게 못난 성격이다. 괴팍하고, 심술 맞고, 변덕이 심하고, 의심과 욕심도 많으며, 심지어 사치스럽기까지 하다.",
    img: "./images/actor2.png",
    isChk: false,
  },
  {
    id: 3,
    name: "김선비",
    age: 48,
    content:
      "호텔 델루나의 라운지 바 '취생몽'의 바텐더로, 본명은 김시익 /500년을 일한 최장 근무자이자 선비 출신으로, 과거 장원급제까지 한 선비였다는 자긍심이 강하다. 발전한 시대에 빠르게 적응한 장만월, 최서희, 지현중과는 달리 내적인 면에서는 여전히 자신이 살던 시대의 풍모를 고집하는 면이 있다. 사인은 장원 급제 이후 고향으로 금의 환향하던 도중 모종의 이유로 급사. 정확한 이유는 불명이나 4화에서의 언급을 보면 김선비 또한 최서희나 지현중과 같이 무언가 강한 미련이 있기 때문에 델루나에 남아있다.",
    img: "./images/actor3.png",
    isChk: false,
  },
  {
    id: 4,
    name: "지현중",
    age: 19,
    content:
      "프론트맨. 벨보이. 예의 바르고 착하지만 일하기 싫어하는 영락없는 19세 소년으로, 6.25 전쟁 때 전사한 이후 이 호텔에서 70여년째 근무 중이다. 이쪽도 김선비처럼 시달린 게 많은지 장만월 앞에선 그저 헤헤 웃다가 장만월이 약간만 멀어져도 바로 김 선비와 같이 뒷담화를 깐다. 델루나에서 계속 일하는 이유는 6.25 때부터 지금까지 살아있는 자신의 누이와 같이 저승으로 가기 위해서다.",
    img: "./images/actor4.png",
    isChk: false,
  },
];

const Book = () => {
  const [data, setData] = useState(dataList);
  const [onData, setOnData] = useState(data[0]);
  const [isDone, setIsDone] = useState(false);

  const no = useRef(data.length + 1);

  const ondatas = (name, age, img) => {
    setData([
      ...data,
      {
        id: no.current++,
        name,
        age,
        img,
      },
    ]);
  };

  const onAdd = (id) => {
    setOnData(data.find((item) => item.id === id));
  };
  const reset = () => {
    setData(dataList);
    setOnData(data[0]);
  };
  const changeChk = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, isChk: true } : { ...item, isChk: false }
      )
    );
  };

  return (
    <div id="wrap">
      <div className="book">
        <p className="total">친구들 총인원 : {data.length} </p>
        <button className="btn">
          <input type="checkbox" onChange={() => setIsDone(!isDone)} />
          추가
        </button>
        <BookList data={data} onAdd={onAdd} changeChk={changeChk} />
        <button className="first" onClick={reset}>
          초기화
        </button>
        {isDone && <BookAdd ondatas={ondatas} />}
      </div>
      <BookDisplay onData={onData} />
    </div>
  );
};

export default Book;
