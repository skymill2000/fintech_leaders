import React from "react";

const MainPage = () => {
  const openUserAuthPage = () => {
    let tmpwindow = window.open("about:blank");
    let clientId = "q7kH44ThJwjpvNRg0BbJvE1yxvx5X53DKz1rNgPF";
    //클라이언트 아이디를 본인것으로 입력해주세요
    let authPageUrl = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`;
    tmpwindow.location.href = authPageUrl;
  };

  return (
    <>
      <button onClick={openUserAuthPage} >인증받기</button>
    </>
  );
};

export default MainPage;