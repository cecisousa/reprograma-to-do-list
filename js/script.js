const formulario = document.getElementById("formulario");
const inputTarefa = document.getElementById("inputTarefa");
const tarefasAdicionadas = document.getElementById("tarefasAdicionadas");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    const valorInput = inputTarefa.value;
    const novaTarefa = document.createElement("p");
    tarefasAdicionadas.appendChild(novaTarefa);
    novaTarefa.textContent = valorInput;
    inputTarefa.value = "";
});