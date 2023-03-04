import {View} from "./View.js";
import {Tips} from "./Tips.js";
import {Storage} from "./Storage.js";

export class Controller{
    
    constructor() {
        this.storage = new Storage(); // Responsável por armazenar e buscar no local storage
        this.view = new View(); // Responsável pela criação e remoção dos elementos visuais
        this.defineFunctions();

        const tips = this.checkStorage();
        this.tips = new Tips(tips); // Responsável pela lista de objetos (dicas)
    }

    defineFunctions() {
        this.defineSave();
    }

    checkStorage() {
        const tipsFromStorage = this.storage.getItems();
        if (tipsFromStorage.length) {
            console.log(typeof(tipsFromStorage));
            tipsFromStorage.forEach(tip => this.view.addCard(tip));
            return tipsFromStorage;            
        } else {
            return[];
        }
    }

    defineSave() {
        document.getElementById('formulario').addEventListener('submit',(event) => {
            event.preventDefault();
            this.addTip(event);
        });
    }

    defineEditModal(id) {        
        document.getElementById('btn-save').addEventListener('click', () => {
            let editedTip = this.tips.editTip(id);
            this.view.closeModal();
            this.view.updateTip(editedTip);
            this.view.showSnackbar('Dica editada com sucesso!');
            this.storage.update(this.tips.getTips());
        })
    }

    defineRemoveModal(id) {
        document.getElementById('btn-cancel').addEventListener('click', () => {
            this.view.closeModal();
        })
        document.getElementById('btn-save').addEventListener('click', () => {
            this.tips.removeTip(id);            
            this.view.removeTip(id);
            this.view.closeModal();
            this.view.showSnackbar('Dica removida com sucesso!');
            this.storage.update(this.tips.getTips());
        })
    }

    addTip() {
        let titulo = document.getElementById("titulo").value;
        let skill = document.getElementById("skill").value;
        let categoria = document.getElementById("categoria").value;
        let descricao = document.getElementById("descricao").value;
        let video = document.getElementById("video").value;
        
        this.tips.addTip(titulo, skill, categoria, descricao, video);      
        let tip = this.tips.getTips().at(-1);
        
        this.view.addCard(tip);
        this.view.showSnackbar('Dica salva com sucesso!');

        this.storage.update(this.tips.getTips());
    }

    editTip(id){
        let tip = this.tips.getTips()[id - 1]; // todo
        this.view.createEditModal(tip);
        this.defineEditModal(id);
    }

    removeTip(id) {
        let tip = this.tips.getTips()[id - 1]; // todo
        this.view.createRemoveModal();
        this.defineRemoveModal(id);
    }
}