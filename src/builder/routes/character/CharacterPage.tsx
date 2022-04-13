import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { useCharacterContext } from '../../contexts/Character';
import { IAttribute } from '../../interfaces/IAttribute';
import { IBar } from '../../interfaces/IBar';
import { IDefense } from '../../interfaces/IDefense';
import { ISkill } from '../../interfaces/ISkill';
import { ISoak } from '../../interfaces/ISoak';
import { IWeapon } from '../../interfaces/IWeapon';
import PageTemplate from '../../pages/PageTemplate';

const CharacterPage = () => {

    const { attributes, skills, bars, soaks, defenses, weapons } = useCharacterContext()
    console.log(weapons)
    return (
        <PageTemplate title="Character Sheet">

            <div className='grid grid-cols-3 gap-4 m-5'>

                <div className='container'>
                    <div className='attributes my-5 border-2 p-1'>
                    {attributes ? attributes.map((value:IAttribute) => (
                        <div className='grid grid-cols-2'>
                            <div className='attribute'>
                                    {value.name}
                            </div>
                            <div className='attribute-value'>
                                {value.value}
                            </div>
                        </div>
                    )) : <></>} 
                </div>
                </div>

                <div className='container skills my-5 border-2 p-1'>
                    {skills ? skills.map((value:ISkill) => (
                        <div className='grid grid-cols-2'>
                            <div className='skill'>
                                    {value.name}
                            </div>
                            <div className='skill-value'>
                                {value.value}
                            </div>
                        </div>
                    )) : <></>} 
                </div>
                
                <div className='container misc'>

                    <div className='container bars my-5 border-2 p-1'>
                        {bars ? bars.map((value:IBar) => (
                            <div className='grid grid-cols-2'>
                                <div className='bar'>
                                    {value.name}
                                </div>
                                <div className='bar-value'>
                                    {value.value}
                                </div>
                            </div>
                        )) : <></>} 
                    </div>

                    <div className='container soaks my-5 border-2 p-1'>
                        {soaks ? soaks.map((value:ISoak) => (
                            <div className='grid grid-cols-2'>
                                <div className='soak'>
                                    {value.name}
                                </div>
                                <div className='soak-value'>
                                    {value.value}
                                </div>
                            </div>
                        )) : <></>} 
                    </div>

                    <div className='container defenses my-5 border-2 p-1'>
                        {defenses ? defenses.map((value:IDefense) => (
                            <div className='grid grid-cols-3'>
                                <div className='defense'>
                                    {value.name}
                                </div>
                                <div className='defense-value'>
                                    {value.passiveValue}
                                </div>
                                <div className='defense-value'>
                                    {value.activeValue}
                                </div>
                            </div>
                        )) : <></>} 
                    </div>

                    <div className='container weapons my-5 border-2 p-1'>
                        {weapons ? 
                        
                                Object.entries(weapons[0]).map((value:any, index) => (
                                    <div className={`grid grid-cols-${weapons.length + 1}`}>
                                        <div className={value[0]}>
                                            {value[0]}
                                        </div>
                                        {weapons.map((weapon) => (
                                            <div className={value[0]}>  
                                                {
                                                //@ts-ignore
                                                weapon[`${value[0]}`]
                                                }
                                            </div>
                                        ))}
                                    </div>
                                ))
                            
                            : <></>
                        }
                    </div>

                </div>

            </div>
        </PageTemplate>
    );
};

export default CharacterPage;