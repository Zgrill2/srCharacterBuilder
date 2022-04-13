import { IAttributes } from "../interfaces/IAttributes";


function getData(): IAttributes {

    const data:IAttributes = [
        {name: 'bod', value: 0},
        {name: 'rea', value: 0},
        {name: 'agi', value: 0},
        {name: 'str', value: 0},
        {name: 'wil', value: 0},
        {name: 'int', value: 0},
        {name: 'log', value: 0},
        {name: 'cha', value: 0},
        {name: 'luk', value: 0},
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

const AttributesProvider = () => {
    return getData()
};

export default AttributesProvider;
