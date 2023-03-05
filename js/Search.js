export class Search { 
    constructor() {
    }

    searchByTitle(title, tips){
        let unfilteredTips = tips.filter(tip => !tip.titulo.toLowerCase().includes(title.toLowerCase()));
        return unfilteredTips;
    }

    searchByCategory(category, tips){
        let unfilteredTips = tips.filter(tip => tip.categoria != category);
        console.log(unfilteredTips)
        return unfilteredTips;
    }
}