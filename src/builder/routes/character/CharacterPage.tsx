import React from 'react';
import { useCharacterContext } from '../../contexts/Character';
import { IAttribute } from '../../interfaces/IAttribute';
import PageTemplate from '../../pages/PageTemplate';

const CharacterPage = () => {

    const { attributes } = useCharacterContext()
    console.log('attribs', attributes)
    return (
        <PageTemplate title="test">
            <div className='grid grid-cols-2 gap-4'>
                <div className='grid-row'>
                    <div className='grid-column'>
                       {attributes ? attributes.map((value:IAttribute) => (
                        <div className='grid-row'>
                            <div className='grid-column'>
                                {value.name}
                            </div>
                            <div className='grid-column'>
                                {value.value}
                            </div>
                        </div>
                        )) : <></>} 
                    </div>

                    <h1 className="text-3xl font-bold underline">
                        Hello world!
                    </h1>
                    
                </div>
            </div>
        </PageTemplate>
    );
};

export default CharacterPage;