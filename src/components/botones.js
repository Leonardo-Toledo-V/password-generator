import React from "react";
import styled from "styled-components";

export const BotonDisminuir = () => {
  return (
    <Boton>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-dash-lg"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
        />
      </svg>
    </Boton>
  );
};

export const BotonIncrementar = () => {
  return (
    <Boton>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-plus-lg"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
        />
      </svg>
    </Boton>
  );
};

export const BotonCheck = () => {
  return (
    <Boton>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-check-lg"
        viewBox="0 0 16 16"
      >
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
      </svg>
    </Boton>
  );
};

export const BotonGenerar = () => {
  return (
    <BtnGenerar>
      Generar
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-lock-fill"
        viewBox="0 0 16 16"
      >
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
      </svg>
    </BtnGenerar>
  );
};

const Boton = styled.button`
  width: 100%;
  background: #684bff;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  vertical-align: top;
  font-size: 18px;
  text-align: center;
  border: none;
  border-radius: 4px;
  cursor:pointer;
  transition: all .7s; ease;

  &:hover{
    background:#866ffd;
  }
`;


const BtnGenerar = styled(Boton)`
  svg{
    margin-left:10px;
  }
`;
