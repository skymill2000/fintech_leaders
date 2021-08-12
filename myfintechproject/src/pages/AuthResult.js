import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import qs from "qs";

const AuthResultPage = () => {
  const { search } = useLocation();
  const { code } = queryString.parse(search);
  const [accessToken, setaccessToken] = useState("토큰 받아오기 전 데이터");

  useEffect(() => {
    getAccessToken();
  }, []);

  const getAccessToken = () => {
    const sendData = qs.stringify({
      code: code,
      client_id: "q7kH44ThJwjpvNRg0BbJvE1yxvx5X53DKz1rNgPF",
      //본인 클라이언트 아이디로 변경
      client_secret: "yVT6irMr2h4ZTHzZY7sDpbvhm1nlOzr4nP7DYRVy",
      //본인 클라이언트 시크릿로 변경
      redirect_uri: "http://localhost:3000/authResult",
      grant_type: "authorization_code",
    });

    const option = {
      method: "POST",
      url: "/oauth/2.0/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: sendData,
    };
    
    axios(option).then((response) => {
      console.log(response.data);
      setaccessToken(response.data.access_token);
      localStorage.setItem("accessToken", response.data.access_token);
      localStorage.setItem("userSeqNum", response.data.user_seq_no);
    //   window.opener.location.href = "/list";
    //   window.close();
    });
  };

  return (
    <>
      <p>사용자가 발급받은 사용자 코드는</p>
      <p>{code}</p>
      <p>사용자의 토큰은?</p>
      <p>{accessToken}</p>
    </>
  );
};

export default AuthResultPage;
