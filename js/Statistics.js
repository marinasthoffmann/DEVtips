export class Statistics { 
    constructor() {
    }

    updateStatistics(tips){
        let frontEndCount = 0;
        let backEndCount= 0;
        let fullStackCount = 0;
        let softSkillCount = 0;

        const categorias = tips.map(tip => tip.categoria);        
        categorias.forEach(categoria => {
            if (categoria == 'FrontEnd')
                frontEndCount += 1;
            if (categoria == 'BackEnd')
                backEndCount += 1;
            if (categoria == 'FullStack')
                fullStackCount += 1;
            if (categoria == 'Comportamental')
                softSkillCount += 1;
        });

        const statistics = {
            'frontEnd': frontEndCount,
            'backEnd': backEndCount,
            'fullStack': fullStackCount,
            'comportamental': softSkillCount
        };

        return statistics;
    }
}