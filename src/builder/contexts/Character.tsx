import React, { useState, useEffect, useContext } from 'react';

export type CharacterContextType = {

};

const CharacterContext = React.createContext<CharacterContextType>({
    
});

export const CharacterProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [route, setRoute] = useState('');

    useEffect(() => {}, []);

    const value = {
        route,
        setRoute,
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