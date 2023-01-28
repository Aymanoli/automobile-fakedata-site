import React from 'react';
// import Expert from '../Expert/Expert'
import Expert from '../Expert/Expert'
// import from '../../'

import mc1 from '../../../images/mechanic/mc-1.webp';
import mc2 from '../../../images/mechanic/mc-2.webp';
import mc3 from '../../../images/mechanic/mc-3.jpg';
import mc4 from '../../../images/mechanic/mc-4.webp';
// import Expert from '../Expert/Expert';
// import mc5 from '../../../images/mechanic/mc-5.jpg';

const experts =[
    {
        img: mc1,
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: mc2,
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        img: mc3,
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },  
    {
        img: mc4,
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    },
    // {
    //     img: mc1,
    //     name: 'Andrew Smith',
    //     expertize: '-Engine Expert-'
    // }
]

const Exparts = () => {
    return (
        <div id='experts' className='container'>
            <h2 className='text-primary mt-5'>Our Exparts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>
                )}
            </div>
        </div>
    );
};

export default Exparts;