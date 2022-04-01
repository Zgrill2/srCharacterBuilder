import React from 'react';

export interface Props {
    title: string;
    children: React.ReactNode
}

const PageTemplate = (props: Props) => {
    const { title } = props

    return (
        <div className='app' >
            <div className='header'>
                <h1>{title}</h1>
            </div>
            <div className='container'>
                {props.children}
            </div>
        </div>
    );
}

export default PageTemplate;