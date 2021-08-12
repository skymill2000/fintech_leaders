import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import Header from "../component/common/Header";
import AuthButton from "../component/common/AuthButton";
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
      client_secret: "yVT6irMr2h4ZTHzZY7sDpbvhm1nlOzr4nP7DYRVy",
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
    //#homework : 해당 코드가 동작하게 변경해주세요 ! hint : proxy, json serialization on axios
    axios(option).then((response) => {
      console.log(response.data);
      setaccessToken(response.data.access_token);
      localStorage.setItem("accessToken", response.data.access_token);
      localStorage.setItem("userSeqNum", response.data.user_seq_no);
      window.opener.location.href = "/list";
      window.close();
    });
  };

  return (
    <>
      <Header title={"사용자 발급 토큰 확인"}></Header>
      <p>사용자가 발급받은 사용자 코드는</p>
      <p>{code}</p>
      <p>사용자의 토큰은?</p>
      <p>{accessToken}</p>
    </>
  );
};

export default AuthResultPage;
