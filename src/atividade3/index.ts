// Criar uma rota, que toda vez que for chamada, adiciona +1 a um
// contador. Toda vez que esse contador chegar a 10, exibir mensagem
// “Chegou à 10” e resetar o contador;

import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

let contador = 0;

const incrementar = () => {
    contador++;

    if (contador === 10) {
      contador = 0;
      return "Contador chegou à 10";
    }
    return contador;
};

app.get("/contador", (req: Request, res: Response) => {
  try {

    return res.status(200).json({ data: incrementar() });
    
  } catch (error: any) {
    return res.status(500).send({
      ok: false,
      message: error.toString(),
    });
  }
});

app.listen(3333, () => {
  console.log("API no ar atividade 3");
});
