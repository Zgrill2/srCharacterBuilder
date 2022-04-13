import React, { useState, useEffect, useContext } from 'react';
import { DAttributes } from '../defaults/DAttributes';
import { IAttribute } from '../interfaces/IAttribute';
import { IAttributes } from '../interfaces/IAttributes';
import { IStub } from '../interfaces/IStub';
import AttributesProvider from '../providers/AttributesProvider';
import StubProvider from '../providers/StubProvider';

export type CharacterContextType = {
    route: '';
    setRoute: (value:string) => void;
    attributes: IAttributes;

};

const CharacterContext = React.createContext<CharacterContextType>({
    route: '',
    setRoute: (val:string) => {},
    attributes: DAttributes

});

export const CharacterProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [route, setRoute] = useState('');

    const [stub, setStub] = useState<IStub>();

    const [attributes, setAttributes] = useState<IAttributes>();

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
        console.log('fetch attribs')
        const res = AttributesProvider();
        console.log('fetch attribs', res)
        if (res) updateAttributes(res);
    };

    useEffect(() => {
        handleGetStub();
        handleGetAttributes();
    }, []);

    const value = {
        route,
        setRoute,
        attributes,
        handleGetAttributes
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