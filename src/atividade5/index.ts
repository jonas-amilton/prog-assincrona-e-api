// Criar uma rota chamada inverter-string, essa rota deverá ter uma
// query param chamada valor. Esse valor recebido deverá ser
// invertido e retornado.

import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

const inverteString = (str: string): string => {
    return str.split('').reverse().join('');
};

app.get("/inverter-string", (req: Request, res: Response) => {
  try {

    const valor = req.query.valor;

    return res.status(200).send({
        ok: true,
        message: "Resultado da Consulta é: ",
        data: {
            original: valor,
            valorInvertido:inverteString(valor as string)
        }
      });
    

  } catch (error: any) {
    return res.status(500).send({
      ok: false,
      message: error.toString(),
    });
  }
});

app.listen(3333, () => {
  console.log("API no ar atividade 5");
});
