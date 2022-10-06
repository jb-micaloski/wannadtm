import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function Pag2(props) {
  return (
    <Image1 src={require("../assets/images/CAPTAIN.png")} resizeMode="contain">
      <SimVoCe>SIM, VOCê!</SimVoCe>
      <Link to="/Pag3">
        <Button1>
          <ButtonOverlay></ButtonOverlay>
        </Button1>
      </Link>
    </Image1>
  );
}

const Image1 = styled.img`
  display: flex;
  width: 872px;
  height: 1065px;
  flex-direction: column;
  margin-top: -141px;
  margin-left: -256px;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const SimVoCe = styled.span`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: 700;
  color: rgba(37,55,75,1);
  font-size: 72px;
  text-align: center;
  align-self: flex-end;
  margin-top: 208px;
  margin-right: 261px;
`;

const Button1 = styled.div`
  width: 55px;
  height: 26px;
  background-color: #18252d;
  margin-top: 531px;
  margin-left: 548px;
  border: none;
`;

export default Pag2;
