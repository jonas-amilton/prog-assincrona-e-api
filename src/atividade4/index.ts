// Criar uma rota chamada numeral, que terá como query param um
// número a ser processado. Nesta rota deverá ter também uma query
// param chamada operação contendo um dos seguintes valores:
// anterior ou proximo. Caso o valor seja anterior, deverá ser retornado
// o valor anterior ao passado no query param, caso o valor seja
// proximo, deverá retornar o próximo valor ao número passado.

// a. Ex 1:
// operacao = anterior
// numero = 5
// resultado = 4

// b. Ex 2:
// operacao = proximo
// numero = 5
// resultado = 6

import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/numeral", (req: Request, res: Response) => {
  try {
    const { operacao, numero } = req.query;
    const numeral = {
      operacao,
      numero,
      resultado: 0,
    };

    if (operacao === "anterior") {
      numeral.resultado = Number(numero) - 1;
    } else {
      numeral.resultado = Number(numero) + 1;
    }

    // return res.status(200).json(numeral);

    return res.status(200).send({
      ok: true,
      message: "Resultado da Consulta é: ",
      data: numeral,
    });


  } catch (error: any) {
    return res.status(500).send({
      ok: false,
      message: error.toString(),
    });
  }
});

app.listen(3333, () => {
  console.log("API no ar atividade 4");
});
