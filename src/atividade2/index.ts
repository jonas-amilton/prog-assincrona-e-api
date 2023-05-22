// 2. Criar uma rota chamada calculadora que deve receber 3 query
// params, uma sendo a operação a ser executada (soma,
// subtração...) e as outras duas sendo os valores a ser usado na
// operação.

// a. Ao chamar a seguinte rota
// .../calculadora?operacao=somar&valorA=7&valorB=13 deverá
// retornar o valor 20.

// b. Ao chamar a seguinte rota
// .../calculadora?operacao=subtrair&valorA=30&valorB=13
// deverá retornar o valor 17.

// c. Ao chamar a seguinte rota
// .../calculadora?operacao=multiplicar&valorA=8&valorB=8
// deverá retornar o valor 64.

// d. Ao chamar a seguinte rota
// .../calculadora?operacao=dividir&valorA=120&valorB=10
// deverá retornar o valor 12.

import express, { Request, Response } from "express";

const app = express();

app.get("/calcular", (req: Request, res: Response) => {
  try {
    const operacao = req.query.operacao;
    const { valorA, valorB } = req.query;

    let result;

    switch (operacao) {
      case "somar":
        result = Number(valorA) + Number(valorB);
        return res.status(200).json({
          number1: valorA,
          number2: valorB,
          operacao,
          result,
        });
      case "subtrair":
        result = Number(valorA) - Number(valorB);
        return res.status(200).json({
          number1: valorA,
          number2: valorB,
          operacao,
          result,
        });
      case "multiplicar":
        result = Number(valorA) * Number(valorB);
        return res.status(200).json({
          number1: valorA,
          number2: valorB,
          operacao,
          result,
        });
      case "dividir":
        result = Number(valorA) / Number(valorB);
        return res.status(200).json({
          number1: valorA,
          number2: valorB,
          operacao,
          result,
        });
      default:
        return res.status(418).send({
            ok: false,
            message: "Oparação invalida"
        }).end()
    }

  } catch (error: any) {
    return res.status(500).send({
      ok: false,
      message: error.toString(),
    });
  }
});

app.listen(3333, () => {
  console.log("API no ar");
});
