import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Header from "../component/common/Header";
import queryString from "query-string";

var QRCode = require("qrcode.react");
const QRBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const QrCodePage = () => {
  const { search } = useLocation();
  console.log(search);
  const { finuseno } = queryString.parse(search);
  console.log(finuseno);

  return (
    <>
      <Header title="QR 코드 생성"></Header>
      <QRBlock>
        <QRCode value={finuseno} />
        <p>{finuseno}</p>
      </QRBlock>
    </>
  );
};

export default QrCodePage;
