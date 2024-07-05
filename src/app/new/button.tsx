"use client";

export default function NewButton() {
  const newButtonClick = () => {
    console.log("새로운 우언가를 찾아보아요");
  };
  return <button onClick={newButtonClick}>새로운 버튼</button>;
}
