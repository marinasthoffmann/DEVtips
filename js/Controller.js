import {View} from "./View.js";
import {Tips} from "./Tips.js";
import {Storage} from "./Storage.js";

export class Controller{
    
    constructor() {
        this.view = new View(); // Responsável pela criação e remoção dos elementos visuais
        this.tips = new Tips(); // Responsável pela lista de objetos (dicas)
        this.storage = new Storage(); // Responsável por armazenar e buscar no local storage
        this.defineSubmit();
    }

    defineSubmit() {
        document.getElementById('formulario').addEventListener('submit',(event) => {
            event.preventDefault();
            this.addTip(event);
        });
    }

    addTip() {
        let titulo = document.getElementById("titulo").value;
        let skill = document.getElementById("skill").value;
        let categoria = document.getElementById("categoria").value;
        let descricao = document.getElementById("descricao").value;
        let video = document.getElementById("video").value;

        this.view.addCard(titulo, skill, categoria, descricao, video);
        // this.list.addItem(name);
        // this.view.showModal(name);
        // this.storage.update(this.list.getItemList());
    }
}