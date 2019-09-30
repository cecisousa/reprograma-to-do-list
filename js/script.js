const formulario = document.getElementById("formulario");
const inputTarefa = document.getElementById("inputTarefa");
const tarefasAdicionadas = document.getElementById("tarefasAdicionadas");
const erro = document.getElementById("erro")

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    const valorInput = inputTarefa.value;
    if (valorInput.trim() === ""){
        erro.textContent = "Preencha o campo!";
    } else {
        erro.textContent = "";
        const novaTarefa = document.createElement("p");
        tarefasAdicionadas.appendChild(novaTarefa);
        novaTarefa.setAttribute("id", "realizada");
        novaTarefa.textContent = valorInput;
    }
    inputTarefa.value = "";
});

