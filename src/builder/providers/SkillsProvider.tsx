import { ISkills } from "../interfaces/ISkills";


function getData(): ISkills {

    const data:ISkills = [
        {name: 'strongman     ', value: 0},
        {name: 'gymnastics    ', value: 0},
        {name: 'marathoner    ', value: 0},
        {name: 'traversal     ', value: 0},
        {name: 'navigation    ', value: 0},
        {name: 'survival      ', value: 0},
        {name: 'medicine      ', value: 0},
        {name: 'animalHandling', value: 0},
        {name: 'con           ', value: 0},
        {name: 'insight       ', value: 0},
        {name: 'intimidation  ', value: 0},
        {name: 'negotiation   ', value: 0},
        {name: 'disguise      ', value: 0},
        {name: 'stealth       ', value: 0},
        {name: 'legerdemain   ', value: 0},
        {name: 'thievery      ', value: 0},
        {name: 'spellcasting  ', value: 0},
        {name: 'perceiveMagic ', value: 0},
        {name: 'weapons       ', value: 0},
        {name: 'perception    ', value: 0},
        {name: 'dodge         ', value: 0},
        {name: 'perserverence ', value: 0},
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

const SkillsProvider = () => {
    return getData()
};

export default SkillsProvider;
