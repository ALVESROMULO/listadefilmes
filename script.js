// Seleciona o elemento onde a lista de filmes será exibida
const lista_de_personagens = document.querySelector("#lista_de_personagens");

// Função para buscar e exibir os filmes populares
async function buscarDados() {
  try {
    const resposta = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=77c4e2b070a2e1396500d0b42ebf7cec&language=pt-BR");
    const dados = await resposta.json();
    lista_de_personagens.innerHTML = ""; // Limpa a lista antes de adicionar novos itens
    dados.results.forEach((filme_da_vez) => {
      const novo_elemento = document.createElement("div");
      novo_elemento.innerHTML = `
        <h2>Nome: ${filme_da_vez.title}</h2>
        <img width=200 src="https://image.tmdb.org/t/p/w200${filme_da_vez.poster_path}" alt="${filme_da_vez.title}">
      `;
      lista_de_personagens.appendChild(novo_elemento);
    });
  } catch (error) {
    console.log("Error: ", error);
  }
}

// Chama a função para exibir os filmes populares ao carregar a página
buscarDados();

// CRIAÇÃO DA BARRA DE PESQUISA
const formulario = document.querySelector("#formulario");
const pesquisa = document.querySelector("#pesquisa");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  lista_de_personagens.innerHTML = ""; // Limpa a lista antes de adicionar novos itens
  try {
    const resposta = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=77c4e2b070a2e1396500d0b42ebf7cec&language=pt-BR&query=${encodeURIComponent(pesquisa.value)}`);
    const dados = await resposta.json();
    dados.results.forEach((filme_da_vez) => {
      const novo_elemento = document.createElement("div");
      novo_elemento.innerHTML = `
        <h2>Nome: ${filme_da_vez.title}</h2>
        <img width=200 src="https://image.tmdb.org/t/p/w200${filme_da_vez.poster_path}" alt="${filme_da_vez.title}">
      `;
      lista_de_personagens.appendChild(novo_elemento);
    });
  } catch (error) {
    console.log("Error: ", error);
  }
});
