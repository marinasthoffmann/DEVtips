import {controller}  from "./main.js"

export class View {

    addCard(titulo, skill, categoria, descricao, video) {
        const divCards = document.getElementById('dicas');

        const card = document.createElement('div');
        card.classList.add("card", "w-75", "bg-dark", "p-1");

        //insere titulo
        const divTitulo = document.createElement('div');
        divTitulo.classList.add("title-card", "d-flex", "ms-4", "mt-3");
        const pTitleWord = document.createElement('p');
        pTitleWord.classList.add("title-word-card", "pe-1");
        pTitleWord.innerText = 'title';
        divTitulo.appendChild(pTitleWord);
        const pTitleInput = document.createElement('p');
        pTitleInput.classList.add("title-input-card", "pe-1");
        pTitleInput.innerText = titulo;
        divTitulo.appendChild(pTitleInput);
        const pBraces = document.createElement('p');        
        pBraces.classList.add("braces-classe", "pe-1");
        pBraces.innerText = '{';
        divTitulo.appendChild(pBraces);
        card.appendChild(divTitulo);

        //insere linguagem e categoria
        const divAtributos = document.createElement('div');
        divAtributos.classList.add("d-flex", "flex-column");
        //linguagem
        const divSkill = document.createElement('div');
        divSkill.classList.add("atribute-card", "d-flex", "ms-5");
        const pConstWord = document.createElement('p');
        pConstWord.classList.add("const-word-card", "pe-1");
        pConstWord.innerText = 'const';
        divSkill.appendChild(pConstWord);
        const pLinguagemSkillWord = document.createElement('p');
        pLinguagemSkillWord.classList.add("atribut-name-card", "pe-1");
        pLinguagemSkillWord.innerText = 'linguagemSkill';
        divSkill.appendChild(pLinguagemSkillWord);
        const pOutrosCaracteres1 = document.createElement('p');
        pOutrosCaracteres1.classList.add("outros-caracteres", "pe-1");
        pOutrosCaracteres1.innerText = '=';
        divSkill.appendChild(pOutrosCaracteres1);
        const pLinguagemSkillInput = document.createElement('p');
        pLinguagemSkillInput.classList.add("atribut-input-card", "pe-1");
        pLinguagemSkillInput.innerText = skill;
        divSkill.appendChild(pLinguagemSkillInput);
        const pOutrosCaracteres2 = document.createElement('p');
        pOutrosCaracteres2.classList.add("outros-caracteres", "pe-1");
        pOutrosCaracteres2.innerText = ';';
        divSkill.appendChild(pOutrosCaracteres2);     
        divAtributos.appendChild(divSkill);
        //categoria
        const divCategoria = document.createElement('div');
        divCategoria.classList.add("atribute-card", "d-flex", "ms-5");
        const pConstWord2 = document.createElement('p');
        pConstWord2.classList.add("const-word-card", "pe-1");
        pConstWord2.innerText = 'const';
        divCategoria.appendChild(pConstWord2);
        const pCategoriaWord = document.createElement('p');
        pCategoriaWord.classList.add("atribut-name-card", "pe-1");
        pCategoriaWord.innerText = 'categoria';
        divCategoria.appendChild(pCategoriaWord);
        const pOutrosCaracteres3 = document.createElement('p');
        pOutrosCaracteres3.classList.add("outros-caracteres", "pe-1");
        pOutrosCaracteres3.innerText = '=';
        divCategoria.appendChild(pOutrosCaracteres3);
        const pCategoriaInput = document.createElement('p');
        pCategoriaInput.classList.add("atribut-input-card", "pe-1");
        pCategoriaInput.innerText = categoria;
        divCategoria.appendChild(pCategoriaInput);
        const pOutrosCaracteres4 = document.createElement('p');
        pOutrosCaracteres4.classList.add("outros-caracteres", "pe-1");
        pOutrosCaracteres4.innerText = ';';
        divCategoria.appendChild(pOutrosCaracteres4);     
        divAtributos.appendChild(divCategoria);

        card.appendChild(divAtributos);

        //insere descricao
        const divDescricao = document.createElement('div');
        divDescricao.classList.add("description-card", "ms-5");
        //insere nome descricao
        const divNomeDescricao = document.createElement('div');
        divNomeDescricao.classList.add("d-flex");
        const pPalavraDescricao= document.createElement('p');
        pPalavraDescricao.classList.add("descricao-word-card", "pe-1");
        pPalavraDescricao.innerText = 'descricao';
        divNomeDescricao.appendChild(pPalavraDescricao);
        const pBracesDescricao= document.createElement('p');
        pBracesDescricao.classList.add("braces-function", "pe-1");
        pBracesDescricao.innerText = '() {';
        divNomeDescricao.appendChild(pBracesDescricao);
        divDescricao.appendChild(divNomeDescricao);
        //insere input descricao
        const divInputDescricao = document.createElement('div');
        const pAbreComentario = document.createElement('p');
        pAbreComentario.classList.add("comentario-js", "pe-1");
        pAbreComentario.innerText = '/*';
        divInputDescricao.appendChild(pAbreComentario);
        const pInputDescricao = document.createElement('p');
        pInputDescricao.classList.add("descricao-input-card", "comentario-js", "pe-1");
        pInputDescricao.innerText = descricao;
        divInputDescricao.appendChild(pInputDescricao);
        const pFechaComentario = document.createElement('p');
        pFechaComentario.classList.add("comentario-js", "pe-1");
        pFechaComentario.innerText = '/*';
        divInputDescricao.appendChild(pFechaComentario);        
        divDescricao.appendChild(divInputDescricao);
        //insere fechamento funcao
        const pFechaFuncao = document.createElement('p');
        pFechaFuncao.classList.add("braces-function", "pe-1");
        pFechaFuncao.innerText = '}';
        divDescricao.appendChild(pFechaFuncao);
        card.appendChild(divDescricao);

        //insere fechamento classe
        const pFechaClasse = document.createElement('p');
        pFechaClasse.classList.add("braces-classe", "ms-4");
        pFechaClasse.innerText = '}';
        card.appendChild(pFechaClasse);

        //insere botões
        const divBotoes = document.createElement('div');
        divBotoes.classList.add("d-flex", "justify-content-end", "m-1");
        //insere botão deletar
        const btnDeletar = document.createElement('button');
        btnDeletar.classList.add("bg-transparent", "border-0");
        const icnDeletar = document.createElement('i');
        icnDeletar.classList.add("fa-solid", "fa-trash", "fa-inverse", "p-1");
        btnDeletar.appendChild(icnDeletar);
        divBotoes.appendChild(btnDeletar);
        //insere botão editar
        const btnEditar = document.createElement('button');
        btnEditar.classList.add("bg-transparent", "border-0");
        const icnEditar = document.createElement('i');
        icnEditar.classList.add("fa-solid", "fa-pen-to-square", "fa-inverse", "p-1");
        btnEditar.appendChild(icnEditar);
        divBotoes.appendChild(btnEditar);
        //insere botão vídeo (se cadastrado)
        if(video.length > 0){
            const btnVideo = document.createElement('button');
            btnVideo.classList.add("bg-transparent", "border-0");
            const aVideo = document.createElement('a');
            aVideo.setAttribute("href", video);
            aVideo.setAttribute("target", "_blank");
            const icnVideo = document.createElement('i');
            icnVideo.classList.add("fa-solid", "fa-video", "fa-inverse", "p-1");
            aVideo.appendChild(icnVideo);
            btnVideo.appendChild(aVideo);
            divBotoes.appendChild(btnVideo);
        }

        card.appendChild(divBotoes);

        divCards.appendChild(card);
        
        const espacamento = document.createElement('br');
        divCards.appendChild(espacamento);
        
    //     const checkbox = document.createElement('button');
    //     checkbox.className = 'checkbox';
    //     checkbox.addEventListener('click', function(event) {
    //         event.preventDefault();
    //         controller.openPriceWindow(id);
    //     })
    //     li.appendChild(checkbox);
        
    //     const text = document.createElement('p');
    //     text.className = 'item-name';
    //     text.dataset.id = id;
    //     text.innerText = item;
    //     li.appendChild(text);

    //     if (price != 0) { // Adiciona o preço ao lado do nome do item na lista, caso exista
    //         let priceText = document.createElement('h4');
    //         priceText.innerHTML = `&nbsp; R$ ${parseFloat(price).toFixed(2)}`;
    //         text.after(priceText);
    //     }

    //     const xButton = document.createElement('button');
    //     xButton.className = 'close';
    //     xButton.innerText = 'X';
    //     xButton.addEventListener('click',function(event) {
    //         event.preventDefault();
    //         controller.removeItemFromList(this.parentNode, id);
    //     });
    //     li.appendChild(xButton);

    //     if (status == true) li.className = 'bought';
    //     ul.appendChild(li);
    }
}