import { IWeapons } from "../interfaces/IWeapons";


function getData(): IWeapons {

    const data:IWeapons = [
        {name: 'Untitled', handedness: 0, power: 0, reach: 0, damageValue: 0, dicepool: 0, shieldBonus: 0},
        {name: 'Untitled2', handedness: 0, power: 0, reach: 0, damageValue: 0, dicepool: 0, shieldBonus: 0},
        {name: 'Untitled3', handedness: 0, power: 0, reach: 0, damageValue: 0, dicepool: 0, shieldBonus: 0},
    ]
    
    //const attributes = ["bod", "agi", "rea", "str", "wil", "int", "log", "cha", "luk"]
    {/**const data:IAttributes = {


export type IWeapon = {
    name: string;
    handedness: number;
    power: number;
    reach: number;
    damageValue: number;
    dicepool: number;
    shieldBonus: number;
};

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

const WeaponsProvider = () => {
    return getData()
};

export default WeaponsProvider;
