import React from "react";

const conteudos = [
  {
    conteudo: "High Order Functions",
    bloco: 8,
    status: "Aprendido",
  },
  {
    conteudo: "Composição de Componentes",
    bloco: 11,
    status: "Aprendendo",
  },
  {
    conteudo: "Composição de Estados",
    bloco: 12,
    status: "Aprenderei",
  },
  {
    conteudo: "Redux",
    bloco: 16,
    status: "Aprenderei",
  },
];
class Content extends React.Component {
  render() {
    return (
      <div className="contents">
        {conteudos.map((conteudo) => (
          <div key={conteudo.conteudo} className="content">
            <p>{`O conteudo é: ${conteudo.conteudo}`}</p>
            <p>{`status: ${conteudo.status}`}</p>
            <p>{`bloco: ${conteudo.bloco}`}</p>
            <br></br>
          </div>
        ))}
      </div>
    );
  }
}

export default Content;
