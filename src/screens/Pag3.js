import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function Pag3(props) {
  return (
    <Image1
      src={require("../assets/images/20440260_6258605.png")}
      resizeMode="contain"
    >
      <Link to="/Pag4">
        <Button1>
          <ButtonOverlay></ButtonOverlay>
        </Button1>
      </Link>
    </Image1>
  );
}

const Image1 = styled.img`
  display: flex;
  width: 732px;
  height: 1122px;
  flex-direction: column;
  margin-top: -191px;
  margin-left: -200px;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Button1 = styled.div`
  width: 55px;
  height: 26px;
  background-color: #18252d;
  margin-top: 883px;
  margin-left: 492px;
  border: none;
`;

export default Pag3;
