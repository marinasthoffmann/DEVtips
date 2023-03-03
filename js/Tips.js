export class Tips{
    constructor(tips) {
        this.tips = [];
    }

    getTips() {
        return [...this.tips];
    }

    setTips(list) {
        this.tips = list;
    }

    createId() {
        const ids = this.tips.map(tip => tip.id);
        return Math.max(ids) + 1;
    }

    addTip(titulo, skill, categoria, descricao, video) {
        const id = this.createId();

        const tipObj = {
            'titulo': titulo,
            'skill': skill,
            'categoria': categoria,
            'descricao': descricao,
            'video': video,
            'id': id
        }
        
        this.tips.push(tipObj);
    }

    editTip(id) {
        let titulo = document.getElementById("titulo").value;
        let skill = document.getElementById("skill").value;
        let categoria = document.getElementById("categoria").value;
        let descricao = document.getElementById("descricao").value;
        let video = document.getElementById("video").value;

        const edited = {
            'titulo': titulo,
            'skill': skill,
            'categoria': categoria,
            'descricao': descricao,
            'video': video,
            'id': id
        }
        
        let index = this.tips.indexOf(tip => tip.id == id);
        this.tips.splice(index, 1, edited);

        return edited;
    }

    removeTip(id){
        let index = this.tips.indexOf(tip => tip.id == id);
        this.tips.splice(index, 1);
    }
} 