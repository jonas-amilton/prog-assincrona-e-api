import axios from "axios";

// function getUserFromGithub(user: string) {
//   axios
//     .get(`https://api.github.com/users/${user}`)
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((err) => {
//       console.log("Usuário não existe");
//     });
// }
async function getUserFromGithub(user: string) {
  try {
    let github = await axios.get(`https://api.github.com/users/${user}`);

    console.log(github.data);
  } catch (error: any) {
    console.log(error);
  }
}

getUserFromGithub("djunior97");
getUserFromGithub("djunioriqdivqv97");

// function getRepositories(repo: string) {
//   axios
//     .get(`https://api.github.com/repos/${repo}`)
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((err) => {
//       console.log("Repositório não existe");
//     });
// }

async function getRepositories(repo: string) {
  try {
    let github = await axios.get(`https://api.github.com/repos/${repo}`);
    console.log(github.data);
  } catch (error: any) {
    console.log(error);
  }
}

getRepositories("marcelo-growdev/scrapbook-es6");
getRepositories("marcelo-growdev/qdbqqbqwn");
