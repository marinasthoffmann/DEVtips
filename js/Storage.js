export class Storage { 
    constructor() {
    }

    update(tips) {
        localStorage.setItem('storageTips', JSON.stringify(tips));
    }

    getItems() {
        return JSON.parse(localStorage.getItem('storageTips'));
    }
}