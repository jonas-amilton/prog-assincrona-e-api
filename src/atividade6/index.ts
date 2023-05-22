// Criar uma rota chamada remover-vogais, essa rota deverá ter uma
// query param chamada valor. Esse valor recebido deverá ser salvo
// em um array, e toda vez que a rota for chamada, deverá salvar o
// valor nesse mesmo array. Antes de salvar o valor/string no array,
// deverá ser removido todas as vogais, deixando apenas as
// consoantes na string. Sempre que a rota for chamada, deverá ser
// exibido em forma de json o array contendo todas as strings.
// a. Ex:
// array = []
// valor = edson
// array = [dsn]
// valor = lucas
// array = [dsn, lcs]

import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

let array: string[] = [];

app.get("/remover-vogais", (req: Request, res: Response) => {
  try {

    const arrayVazio:  string[] = []
    const valor = req.query.valor;
    const removeVogais = String(valor).replace(/[aeiouà-ú]/gi, '');
    array.push(removeVogais);

    return res.status(200).send({
        ok: true,
        message: "Resultado da Consulta é: ",
        data: {
            arrayVazio,
            palavra: valor,
            naoVogal: removeVogais,
            array
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
  console.log("API no ar atividade 6");
});
