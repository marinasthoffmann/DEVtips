import {View} from "./View.js";
import {Tips} from "./Tips.js";
import {Storage} from "./Storage.js";
import {Statistics} from "./Statistics.js";
import {Search} from "./Search.js";

export class Controller{
    
    constructor() {
        this.storage = new Storage(); // Responsável por armazenar e buscar no local storage
        this.view = new View(); // Responsável pela criação e remoção dos elementos visuais

        const tips = this.checkStorage();
        this.tips = new Tips(tips); // Responsável pela lista de objetos (dicas)

        this.statistics = new Statistics();
        this.updateStatistics(tips);
        
        this.search = new Search();
        this.defineFunctions();
    }

    defineFunctions() {
        this.defineSave();
        this.definePesquisar();
        this.defineLimparPesquisa();
    }

    checkStorage() {
        const tipsFromStorage = this.storage.getItems();
        if (tipsFromStorage && tipsFromStorage.length) {
            tipsFromStorage.forEach(tip => this.view.addCard(tip));
            
            return tipsFromStorage;            
        } else {
            return [];
        }
    }

    defineSave() {
        document.getElementById('formulario').addEventListener('submit',(event) => {
            event.preventDefault();
            this.addTip(event);
        });
    }

    definePesquisar() {
        document.getElementById('form-pesquisa').addEventListener('submit',(event) => {
            event.preventDefault();
            this.searchTip(event);
        });
    }

    defineLimparPesquisa() {
        document.getElementById('input-limpar').addEventListener('click',(event) => {
            event.preventDefault();
            this.clearFilter();
        });
    }

    defineEditModal(id) {        
        document.getElementById('btn-save').addEventListener('click', () => {
            let editedTip = this.tips.editTip(id);
            this.view.updateTip(editedTip);
            this.view.showSnackbar('Dica editada com sucesso!');
            this.storage.update(this.tips.getTips());
            this.updateStatistics(this.tips.getTips());
            this.view.closeModal();
        })
    }

    defineRemoveModal(id) {
        document.getElementById('btn-cancel').addEventListener('click', () => {
            this.view.closeModal();
        })
        document.getElementById('btn-save').addEventListener('click', () => {
            this.tips.removeTip(id);            
            this.view.removeTip(id);
            this.view.showSnackbar('Dica removida com sucesso!');
            this.storage.update(this.tips.getTips());
            this.updateStatistics(this.tips.getTips());
            this.view.closeModal();
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

        this.updateStatistics(this.tips.getTips());
    }

    editTip(id){
        let tip = this.tips.getTips()[id - 1]; // todo
        this.view.createEditModal(tip);
        this.defineEditModal(id);
    }

    removeTip(id) {
        this.view.createRemoveModal();
        this.defineRemoveModal(id);
    }

    updateStatistics(tips){
        let statistics = this.statistics.updateStatistics(tips);
        this.view.updateStatistics(statistics);
    }

    searchTip(){
        let searchedTitle = document.getElementById("input-pesquisar").value;
        let allTips = this.tips.getTips();
        let unfilteredTips = this.search.searchByTitle(searchedTitle, allTips);
        this.view.hideUnfilteredTips(unfilteredTips);
    }

    clearFilter(){
        let allTips = this.tips.getTips();
        this.view.clearFilter(allTips);
    }
}