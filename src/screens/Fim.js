import React, { Component } from "react";
import styled, { css } from "styled-components";

function Fim(props) {
  return (
    <>
      <Image src={require("../assets/images/Sem_Título-1.png")}></Image>
      <EuTinhamuu>EU TINHAMUU!!</EuTinhamuu>
      <FImGostou>fIM.... GOSTOU?!</FImGostou>
    </>
  );
}

const Image = styled.img`
  width: 502px;
  height: 492px;
  margin-top: 156px;
  margin-left: -71px;
  object-fit: contain;
`;

const EuTinhamuu = styled.span`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: 400;
  color: rgba(0,0,0,1);
  font-size: 42px;
  text-align: center;
  margin-top: -553px;
  margin-left: 86px;
`;

const FImGostou = styled.span`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: 400;
  color: rgba(0,0,0,1);
  font-size: 42px;
  text-align: center;
  margin-top: 502px;
  margin-left: 78px;
`;

export default Fim;
