import React from "react";
import "./App.css";
import img from "./img/logo.png";
import styled from "styled-components";
import {BotonDisminuir, BotonIncrementar, BotonCheck, BotonGenerar} from "./components/botones";

const App = () => {
  return (
    <div className="contenedor">
      <Logo>
        <img src={img} alt="" />
      </Logo>

      <form>
        <Fila>
          <label>Numero de caracteres:</label>
          <Controles>
            <BotonDisminuir/>
            <span>0</span>
            <BotonIncrementar/>
          </Controles>
        </Fila>

        <Fila>
          <label>¿Incluir símbolos?</label>
            <BotonCheck/>
        </Fila>

        <Fila>
          <label>¿Incluir números?</label>
            <BotonCheck/>
        </Fila>

        <Fila>
          <label>¿Incluir mayúsculas?</label>
            <BotonCheck/>
        </Fila>

        <Fila>
          <BotonGenerar/>
          <Input type="text" readOnly="true"/>
        </Fila>

      </form>
    </div>
  );
};

export default App;

const Logo = styled.div`
  margin-bottom: 50px;
  img {
    width: 100%;
    vertical-align: top;
  }
`;

const Fila = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;



const Controles = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;

  & > * {
    flex: 1;
  }

  span {
    line-height: 40px;
    background: #33257e;
  }
`;

const Input = styled.input`
  width: 100%;
  background: none;
  border-radius: 4px;
  border: 1px solid rgba(255,255,255, .25);
  color: #fff;
  height. 40px;
  line-height: 40px;
  cursor: pointer;
  transition: all .3s ease;

  &:hover{
    border: 1px solid rgba(255,255,255, .50);
  }

  &::selection{
    background:#212139;
  }

  &::-moz-selection{
    background:#212139;
  }
`;