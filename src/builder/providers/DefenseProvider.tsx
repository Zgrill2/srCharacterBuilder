import { IDefenses } from "../interfaces/IDefenses";


function getData(): IDefenses {

    const data:IDefenses = [
        {name: 'Armor',     passiveValue: 0, activeValue: 0},
        {name: 'Parry',     passiveValue: 0, activeValue: 0},
        {name: 'Block',     passiveValue: 0, activeValue: 0},
        {name: 'Physical',  passiveValue: 0, activeValue: 0},
        {name: 'Mental',    passiveValue: 0, activeValue: 0},
    ]

    return data;
}

const DefensesProvider = () => {
    return getData()
};

export default DefensesProvider;
