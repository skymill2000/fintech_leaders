import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import qs from "qs";

const BalancePage = () => {
    const { search } = useLocation();
    const { finuseno } = queryString.parse(search);
    const [balance, setBalance] = useState();

    const getBalance = () =>{
        const option = {
            method: "GET",
            url: "", //postman url 참고하기
            headers: {
              Authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            params: {
                //포스트맨 참고하여 작성
            },
        };
        axios(option).then((response) => {
            setBalance(response.data.balance_amt);
        });
    }

    return (
        <div>
            {finuseno}
            <button onClick={getBalance}>잔액 가져오기</button>
            계좌의 현재 잔액은 {balance}
        </div>
    )
}

export default BalancePage
