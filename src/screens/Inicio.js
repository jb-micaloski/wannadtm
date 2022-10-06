import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialButtonShare from "../components/MaterialButtonShare";

function Inicio(props) {
  return (
    <Container>
      <Image>
        <Voce>VOCÊ!</Voce>
        <MaterialButtonShare
          style={{
            width: 56,
            height: 56,
            marginTop: 515,
            marginLeft: 537
          }}
        ></MaterialButtonShare>
      </Image>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const Image = styled.div`
  width: 872px;
  height: 100%;
  flex-direction: column;
  display: flex;
  margin-left: -238px;
  background-image: url(${require("../assets/images/CAPTAIN.png")});
  background-size: cover;
`;

const Voce = styled.span`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: 700;
  color: rgba(37,55,75,1);
  font-size: 72px;
  text-align: center;
  align-self: flex-end;
  margin-top: 237px;
  margin-right: 279px;
`;

export default Inicio;
