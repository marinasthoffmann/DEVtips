export class Search { 
    constructor() {
    }

    searchByTitle(title, tips){
        let unfilteredTips = tips.filter(tip => !tip.titulo.toLowerCase().includes(title.toLowerCase()));
        return unfilteredTips;
    }
}