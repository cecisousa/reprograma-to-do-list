const formulario = document.getElementById("formulario");
const inputTarefa = document.getElementById("inputTarefa");
const tarefasAdicionadas = document.getElementById("tarefasAdicionadas");
const erro = document.getElementById("erro");
const btnLimpar = document.getElementById("btnLimpar");
const btnConcluir = document.getElementById("btnConcluir");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    const valorInput = inputTarefa.value;
    if (valorInput.trim() === ""){
        erro.textContent = "Preencha o campo!";
    } else {
        erro.textContent = "";

        const novoItem = document.createElement("div");
        novoItem.setAttribute("id", "novoItem");
        tarefasAdicionadas.appendChild(novoItem);

        const novaTarefa = document.createElement("p");
        novaTarefa.textContent = valorInput;
        novoItem.appendChild(novaTarefa);
        novaTarefa.setAttribute("class", "adicionada");

        novaTarefa.addEventListener("click", function(){
            if (novaTarefa.classList.contains("realizada")){
                novaTarefa.classList.remove("realizada");
            } else {
                novaTarefa.classList.add("realizada");
            }
        });
        
        const btnExcluir = document.createElement("span");
        btnExcluir.textContent = "✖";
        novoItem.appendChild(btnExcluir);

        btnExcluir.addEventListener("click", function(){
            tarefasAdicionadas.removeChild(novoItem);
        });

    }
    inputTarefa.value = "";
});






// inputTarefa.value = "";
// const novosBotoes = document.createElement("div");
// novosBotoes.setAttribute("id", "btnLimparConcluir");
// formulario.appendChild(novosBotoes);
// const btnLimpar = document.createElement("button");
// btnLimpar.setAttribute("id", "btnLimpar");
// btnLimpar.textContent = "Excluir todas as tarefas";
// novosBotoes.appendChild(btnLimpar);
// const btnConcluir = document.createElement("button");
// btnConcluir.setAttribute("id", "btnConcluir");
// btnConcluir.textContent = "Concluir todas as tarefas";
// novosBotoes.appendChild(btnConcluir);




