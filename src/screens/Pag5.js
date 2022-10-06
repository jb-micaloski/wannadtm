import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function Pag5(props) {
  return (
    <Container>
      <WillYouBe>WILL YOU BE{"\n"}MY VALENTINE?</WillYouBe>
      <ButtonRow>
        <Link to="/Sim">
          <Button>
            <ButtonOverlay></ButtonOverlay>
          </Button>
        </Link>
        <Sim>SIM!!!!</Sim>
      </ButtonRow>
      <Button1Row>
        <Link to="/Tryagain">
          <Button1>
            <ButtonOverlay></ButtonOverlay>
          </Button1>
        </Link>
        <Nao>NÃO.</Nao>
      </Button1Row>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(0,0,0,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const WillYouBe = styled.span`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 42px;
  text-align: center;
  margin-top: 223px;
  align-self: center;
`;

const Button = styled.div`
  width: 50px;
  height: 50px;
  background-color: #E6E6E6;
  margin-top: 2px;
  border: none;
`;

const Sim = styled.span`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 42px;
  text-align: center;
  margin-left: 20px;
`;

const ButtonRow = styled.div`
  height: 54px;
  flex-direction: row;
  display: flex;
  margin-top: 73px;
  margin-left: 95px;
  margin-right: 113px;
`;

const Button1 = styled.div`
  width: 50px;
  height: 50px;
  background-color: #E6E6E6;
  margin-top: 2px;
  border: none;
`;

const Nao = styled.span`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 42px;
  text-align: center;
  margin-left: 20px;
`;

const Button1Row = styled.div`
  height: 54px;
  flex-direction: row;
  display: flex;
  margin-top: 44px;
  margin-left: 95px;
  margin-right: 136px;
`;

export default Pag5;
