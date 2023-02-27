import {controller}  from "./main.js"

export class View {

    addCard({titulo, skill, categoria, descricao, video, id}) {
        const divCards = document.getElementById('dicas');

        const card = document.createElement('div');
        card.id = `tip-${id}`;
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
        pTitleInput.id = `titulo-${id}`
        pTitleInput.innerText = titulo;
        divTitulo.appendChild(pTitleInput);
        const pBraces = document.createElement('p');        
        pBraces.classList.add("braces-classe", "pe-1");
        pBraces.innerText = '{';
        divTitulo.appendChild(pBraces);
        card.appendChild(divTitulo);

        //insere linguagem e categoria
        const divAtributos = document.createElement('div');
        divAtributos.classList.add("d-flex", "flex-column", "my-3");
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
        pLinguagemSkillInput.id = `skill-${id}`;
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
        pCategoriaInput.id = `categoria-${id}`;
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
        pInputDescricao.id = `descricao-${id}`;
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
        btnEditar.addEventListener('click', function(event) {
            event.preventDefault();
            controller.editTip(id);
        })
        btnEditar.id = `btn-editar-${id}`;
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
            aVideo.id = `video-${id}`;
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
    };

    createEditCard({titulo, skill, categoria, descricao, video, id}){
        const conteudoFormulario = 
            `<form id="formulario" class="d-flex flex-column m-2 gap-3">
                <div class="form-group">
                    <label for="titulo">Título:</label>
                    <input type="text" class="form-control" id="titulo" value="${titulo}" required minlength="5" maxlength="50" >
                </div>
                <div class="form-group">
                    <label for="skill">Linguagem/skill:</label>
                    <input type="text" class="form-control" id="skill" value="${skill}" required minlength="2" maxlength="20">
                </div>
                <div class="form-group">
                    <label for="categoria">Categoria:</label>
                    <select class="form-control form-select" id="categoria" aria-label="Selecione a categoria" required value="${categoria}">
                        <option value="">Selecione a categoria</option>
                        <option ${categoria === 'FrontEnd' && 'selected'} value="FrontEnd">FrontEnd</option>
                        <option ${categoria === 'BackEnd' && 'selected'} value="BackEnd">BackEnd</option>
                        <option ${categoria === 'FullStack' && 'selected'} value="FullStack">FullStack</option>
                        <option ${categoria === 'Comportamental' && 'selected'} value="Comportamental">Comportamental</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="descricao">Descrição:</label>
                    <textarea class="form-control" id="descricao" rows="10" required minlength="10" maxlength="600">${descricao}</textarea>
                </div>
                <div class="form-group">
                    <label for="video">Link do vídeo (opcional):</label>
                    <input class="form-control" type="url" id="video" value="${video}" placeholder="https://endereco.com/">
                </div>
            </form>`;
        this.showModal(conteudoFormulario, 'Salvar');
    }

    refreshList

    showModal(conteudo, txtBotao){
        const modal = document.getElementById('modal-container');
        const divConteudo = document.getElementById('modal-conteudo');
        divConteudo.innerHTML = conteudo;

        const button = document.getElementById('btn-close');
        button.innerText = txtBotao;
		modal.classList.toggle('invisible');
    };

    showSnackbar(texto){
        const snackbar = document.getElementById('snackbar');
        snackbar.classList.toggle('invisible');
        const snackbarText = document.getElementById('snackbar-text');
        snackbarText.innerText = texto;

        snackbar.classList.add('fade-out');
        setTimeout(() => {
            snackbar.classList.toggle('invisible');
            snackbar.classList.remove('fade-out');
        }, 3000);
    }

    closeModal(){
        

        const modal = document.getElementById('modal-container');
        modal.classList.toggle('invisible');
    };    
}