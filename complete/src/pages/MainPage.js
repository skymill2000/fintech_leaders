import React from "react";
import AuthButton from "../component/common/AuthButton";
import Header from "../component/common/Header";

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
      <Header title="사용자 인증"></Header>
      <AuthButton title="인증받기" handleClick={openUserAuthPage} />
    </>
  );
};

export default MainPage;
