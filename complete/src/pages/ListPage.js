import React, { useState, useEffect } from "react";
import Header from "../component/common/Header";
import AuthButton from "../component/common/AuthButton";
import axios from "axios";
import Card from "../component/list/Card";

const ListPage = () => {
  const [acountList, setAccountList] = useState([]);
  useEffect(() => {
    getAccountList();
  }, []);
  const getAccountList = () => {
    const option = {
      method: "GET",
      url: "/v2.0/user/me",
      headers: {
        Authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      params: {
        user_seq_no: localStorage.getItem("userSeqNum"),
      },
    };
    axios(option).then((response) => {
      console.log(response.data);
      setAccountList(response.data.res_list);
    });
  };

  //getAccountList useEffect 활용해서 불러오기 불러온다음에 acountList set 해주기

  return (
    <>
      <Header title="계좌 목록 확인"></Header>
      {acountList.map((account) => {
        return (
          <Card
            key={account.fintech_use_num}
            bankName={account.bank_name}
            fintechUseNo={account.fintech_use_num}
          ></Card>
        );
      })}
    </>
  );
};

export default ListPage;
