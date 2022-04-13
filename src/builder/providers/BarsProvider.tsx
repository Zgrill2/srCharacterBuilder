import { IBars } from "../interfaces/IBars";


function getData(): IBars {

    const data:IBars = [
        {name: 'Health', value: 0, max: 10},
        {name: 'Stamina', value: 0, max: 10},
        {name: 'Drain', value: 0, max: 10},
        {name: 'Luck', value: 0, max: 10},
    ]
    
    //const attributes = ["bod", "agi", "rea", "str", "wil", "int", "log", "cha", "luk"]
    {/**const data:IAttributes = {
        bod : {name: 'bod', value: 0},
        rea : {name: 'rea', value: 0},
        agi : {name: 'agi', value: 0},
        str : {name: 'str', value: 0},
        wil : {name: 'wil', value: 0},
        int : {name: 'int', value: 0},
        log : {name: 'log', value: 0},
        cha : {name: 'cha', value: 0},
        luk : {name: 'luk', value: 0},
    } */} //attributes.map((value) => ({[value]: {name: value, value: 0}}))
    return data;
}

const BarsProvider = () => {
    return getData()
};

export default BarsProvider;
