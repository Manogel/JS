import React from "react";

import "./styles.css";

const Repo = ({ data }) => {
  return (
    <div className="repos">
      <h2 className="title">{data.full_name}</h2>
      <p className="criado">Criado em: {data.created_at}</p>
      <p className="linguagem">Linguagem: {data.language}</p>
      <div className="button-container">
        <a href="">Ver Detalhes</a>
      </div>
    </div>
  );
};
export default Repo;
