import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function Pag4(props) {
  return (
    <Image
      src={require("../assets/images/i_want_you_alert.png")}
      resizeMode="contain"
    >
      <Link to="/Pag5">
        <Button1>
          <ButtonOverlay></ButtonOverlay>
        </Button1>
      </Link>
    </Image>
  );
}

const Image = styled.img`
  display: flex;
  width: 598px;
  height: 851px;
  flex-direction: column;
  margin-top: -55px;
  margin-left: -119px;
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
  margin-top: 747px;
  margin-left: 411px;
  border: none;
`;

export default Pag4;
