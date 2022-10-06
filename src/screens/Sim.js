import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function Sim(props) {
  return (
    <>
      <TenteNovamente1>
        aTÉ QUE ENFIM EIN...{"\n"}
        {"\n"}DORMIU??
      </TenteNovamente1>
      <Image>
        <Link to="/Fim">
          <Button1>
            <ButtonOverlay></ButtonOverlay>
          </Button1>
        </Link>
      </Image>
    </>
  );
}

const TenteNovamente1 = styled.span`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: 400;
  color: rgba(0,0,0,1);
  font-size: 42px;
  text-align: center;
  margin-top: 129px;
  align-self: center;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Image = styled.div`
  width: 360px;
  height: 440px;
  flex-direction: column;
  display: flex;
  margin-top: 8px;
  background-image: url(${require("../assets/images/Sem_Título-11.png")});
  background-size: cover;
`;

const Button1 = styled.div`
  width: 55px;
  height: 26px;
  background-color: #18252d;
  margin-top: 392px;
  margin-left: 292px;
  border: none;
`;

export default Sim;
