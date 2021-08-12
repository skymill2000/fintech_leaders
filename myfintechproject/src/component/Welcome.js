const Welcome = ({ userData }) => {
  console.log(userData);
  const userName = "변수에서 선언한 이름입니다.";
  return (
    <>
      <p>bye</p>
      <p>
        안녕하세요 {userName} 님 ! {userData.age} 세 입니다.{" "}
      </p>
    </>
  );
};

export default Welcome;
