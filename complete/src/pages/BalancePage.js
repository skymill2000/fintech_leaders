import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../component/common/Header";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const BalancePage = () => {
  const [balance, setBalance] = useState("0");
  const [transactionList, settransactionList] = useState([]);
  const { search } = useLocation();
  console.log(search);
  const { finuseno } = queryString.parse(search);
  console.log(finuseno);

  useEffect(() => {
    getBalance();
    getTransactionList();
  }, []);

  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    let transId = "T991599190U" + countnum; //이용기과번호 본인것 입력
    return transId;
  };

  const getBalance = () => {
    const option = {
      method: "GET",
      url: "/v2.0/account/balance/fin_num",
      headers: {
        Authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      params: {
        bank_tran_id: genTransId(),
        fintech_use_num: finuseno,
        tran_dtime: "20210527151100",
      },
    };
    axios(option).then(({ data }) => {
      console.log(data.balance_amt);
      setBalance(data.balance_amt);
    });
  };

  const getTransactionList = () => {
    const option = {
      method: "GET",
      url: "/v2.0/account/transaction_list/fin_num",
      headers: {
        Authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      params: {
        bank_tran_id: genTransId(),
        fintech_use_num: finuseno,
        inquiry_type: "A",
        inquiry_base: "D",
        from_date: "20210101",
        to_date: "20210101",
        sort_order: "D",
        tran_dtime: "20210527162800",
      },
    };
    //resposnse {
    //    data : kdkjfdskalj
    //    error : sdaklfjklasdjf
    //}
    //
    axios(option).then(({ data }) => {
      console.log(data.res_list);
      settransactionList(data.res_list);
    });
  };

  return (
    <>
      <Header title={"잔액 조회"}></Header>
      <p>현재 귀하의 잔액은 : {balance}원 입니다</p>
      <table>
        <thead>
          <tr>
            <td>순번</td>
            <td>내용</td>
            <td>금액</td>
            <td>잔액</td>
          </tr>
        </thead>
        <tbody>
          {transactionList.map((transaction, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{transaction.print_content}</td>
                <td>{transaction.tran_amt}</td>
                <td>{transaction.after_balance_amt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default BalancePage;
