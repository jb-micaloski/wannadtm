import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function Tryagain(props) {
  return (
    <Container>
      <TenteNovamente>
        Você falhou!{"\n"}
        {"\n"}TENTE{"\n"}NOVAMENTE
      </TenteNovamente>
      <Image
        src={require("../assets/images/9b6d811b2cb9e695eab230dd4ebebf76.jpg")}
      ></Image>
      <Link to="/Pag5">
        <Button>
          <ButtonOverlay>
            <Voltar>VOLTAR</Voltar>
          </ButtonOverlay>
        </Button>
      </Link>
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
const TenteNovamente = styled.span`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 42px;
  text-align: center;
  margin-top: 123px;
  align-self: center;
`;

const Image = styled.img`
  width: 210px;
  height: 100%;
  margin-top: 220px;
  margin-left: 75px;
  object-fit: contain;
`;

const Button = styled.div`
  width: 144px;
  height: 62px;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
  margin-top: -237px;
  margin-left: 108px;
  border: none;
`;

const Voltar = styled.span`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: 400;
  color: rgba(1,1,1,1);
  font-size: 42px;
  text-align: center;
  margin-top: 6px;
  margin-left: 27px;
`;

export default Tryagain;
