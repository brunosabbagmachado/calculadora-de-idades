const criarTarefa = evento => {
  evento.preventDefault();

  const nome = document.querySelector("#nomeUsuario");

  const ano = document.querySelector("#anoQueNasceu");

  const nomeString = nome.value;
  const anoInt = ano.value;

  const anoAtual = new Date().getFullYear();

  console.log(anoAtual);

  const calculo = anoAtual - anoInt;

  const lista = document.querySelector("[data-list]");
  const tarefa = document.createElement('li');
  tarefa.classList.add('task');
  const conteudo = `<p class="content">${nomeString}, em ${anoAtual} você tem ${calculo} anos de idade.</p>`;
  tarefa.innerHTML = conteudo;

  nome.value = " ";
  ano.value = " ";

  lista.appendChild(tarefa);
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);







