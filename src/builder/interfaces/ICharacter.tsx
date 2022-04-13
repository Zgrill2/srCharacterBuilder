import { IAbilities } from "./IAbilities";
import { IAttributes } from "./IAttributes";
import { ISkills } from "./ISkills";

export type ICharacter = {
    name: string;
    attributes: IAttributes;
    skills: ISkills;
    abilities: IAbilities;
};