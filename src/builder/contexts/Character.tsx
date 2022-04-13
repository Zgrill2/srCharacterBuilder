import React, { useState, useEffect, useContext } from 'react';
import { DAttributes } from '../defaults/DAttributes';
import { IAttribute } from '../interfaces/IAttribute';
import { IAttributes } from '../interfaces/IAttributes';
import { IBars } from '../interfaces/IBars';
import { IDefenses } from '../interfaces/IDefenses';
import { ISkills } from '../interfaces/ISkills';
import { ISoaks } from '../interfaces/ISoaks';
import { IStub } from '../interfaces/IStub';
import { IWeapons } from '../interfaces/IWeapons';
import AttributesProvider from '../providers/AttributesProvider';
import BarsProvider from '../providers/BarsProvider';
import DefensesProvider from '../providers/DefenseProvider';
import SkillsProvider from '../providers/SkillsProvider';
import SoaksProvider from '../providers/SoakProvider';
import StubProvider from '../providers/StubProvider';
import WeaponsProvider from '../providers/WeaponsProvider';

export type CharacterContextType = {
    route: '';
    setRoute: (value:string) => void;
    attributes: IAttributes;
    skills: ISkills;
    bars: IBars;
    soaks: ISoaks;
    defenses: IDefenses;
    weapons: IWeapons;
};

const CharacterContext = React.createContext<CharacterContextType>({
    route: '',
    setRoute: (val:string) => {},
    attributes: DAttributes,
    skills: [],
    bars: [],
    soaks: [],
    defenses: [],
    weapons: []

});

export const CharacterProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [route, setRoute] = useState('');

    const [stub, setStub] = useState<IStub>();

    const [attributes, setAttributes] = useState<IAttributes>();
    const [skills, setSkills] = useState<ISkills>();
    const [bars, setBars] = useState<IBars>();
    const [soaks, setSoaks] = useState<ISoaks>();
    const [defenses, setDefenses] = useState<IDefenses>();
    const [weapons, setWeapons] = useState<IWeapons>();

    const updateStub = (item:IStub) => {
        setStub(item);
    };

    const handleGetStub = async () => {
        const res = StubProvider();
        if (res) updateStub(res);
    };

    const updateAttributes = (item:IAttributes) => {
        setAttributes(item);
    };

    const handleGetAttributes = async () => {
        const res = AttributesProvider();
        if (res) updateAttributes(res);
    };

    const updateSoaks = (item:ISoaks) => {
        setSoaks(item);
    };

    const handleGetSoaks = async () => {
        const res = SoaksProvider();
        if (res) updateSoaks(res);
    };

    const updateDefenses = (item:IDefenses) => {
        setDefenses(item);
    };

    const handleGetDefenses = async () => {
        const res = DefensesProvider();
        if (res) updateDefenses(res);
    };

    const updateBars = (item:IBars) => {
        setBars(item);
    };

    const handleGetBars = async () => {
        const res = BarsProvider();
        if (res) updateBars(res);
    };

    const updateSkills = (item:ISkills) => {
        setSkills(item);
    };

    const handleGetSkills = async () => {
        const res = SkillsProvider();
        if (res) updateSkills(res);
    };

    const updateWeapons = (item:IWeapons) => {
        setWeapons(item);
    };

    const handleGetWeapons = async () => {
        const res = WeaponsProvider();
        if (res) updateWeapons(res);
    };

    useEffect(() => {
        handleGetStub();
        handleGetSkills();
        handleGetAttributes();
        handleGetBars();
        handleGetSoaks();
        handleGetDefenses();
        handleGetWeapons();
    }, []);

    const value = {
        route,
        setRoute,
        attributes,
        handleGetAttributes,
        skills,
        handleGetSkills,
        bars,
        handleGetBars,
        soaks,
        handleGetSoaks,
        defenses,
        handleGetDefenses,
        weapons,
        handleGetWeapons
    }

    return(
        <CharacterContext.Provider value={value as CharacterContextType}>
            {children}
        </CharacterContext.Provider>
    );
};

export function useCharacterContext() {
    return useContext(CharacterContext)
};