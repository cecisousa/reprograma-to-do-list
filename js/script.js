const btnAdd = document.getElementById("btnAdd");
const inputTarefa = document.getElementById("inputTarefa");
const tarefasAdicionadas = document.getElementById("tarefasAdicionadas");
const erro = document.getElementById("erro");
const btnConcluirLimpar = document.getElementById("btnConcluirLimpar");
const btnConcluir = document.getElementById("btnConcluir");
const btnLimpar = document.getElementById("btnLimpar");
const btnRemoverConcluidas = document.getElementById("btnRemoverConcluidas");

btnAdd.addEventListener("click", function(evento){
    evento.preventDefault();
    const valorInput = inputTarefa.value;
    if (valorInput.trim() === ""){
        erro.textContent = "Preencha o campo!";
    } else {
        erro.textContent = "";

        btnConcluirLimpar.classList.remove("btnConcluirLimparOff");
        btnConcluirLimpar.classList.add("btnConcluirLimparOn");

        const novoItem = document.createElement("div");
        tarefasAdicionadas.appendChild(novoItem);
        novoItem.setAttribute("class", "novoItem");
        novoItem.setAttribute("draggable", "true")

        const novaTarefa = document.createElement("p");
        novaTarefa.textContent = valorInput;

        novaTarefa.addEventListener("dblclick", function(){
            novaTarefa.classList.remove("realizada");
            novaTarefa.setAttribute("contentEditable", true);
        });

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
        
        btnConcluir.addEventListener("click", function(evento){
            evento.preventDefault();
            novaTarefa.classList.add("realizada");
        });

        btnLimpar.addEventListener("click", function(evento){
            evento.preventDefault();
            tarefasAdicionadas.removeChild(novoItem);
            btnConcluirLimpar.classList.add("btnConcluirLimparOff");
            btnConcluirLimpar.classList.remove("btnConcluirLimparOn");
        });
        
        btnRemoverConcluidas.addEventListener("click", function(evento){
            evento.preventDefault();
            if (novaTarefa.classList.contains("realizada")){
                tarefasAdicionadas.removeChild(novoItem);
            }
        })

    }
    inputTarefa.value = "";
});

tarefasAdicionadas.addEventListener("dragstart", function(evento){ 
    dragging = evento.target.closest(".novoItem");
})

tarefasAdicionadas.addEventListener("dragover", function(evento){
    evento.preventDefault();
    const node = evento.target.closest(".novoItem");
    this.insertBefore(dragging, node);
})

tarefasAdicionadas.addEventListener("dragend", function(evento){ 
    dragging = null;
})
