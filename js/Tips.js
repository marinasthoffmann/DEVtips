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
} 