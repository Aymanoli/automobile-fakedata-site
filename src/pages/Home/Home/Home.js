import React from 'react';
import Banner from '../Banner/Banner';
import Exparts from '../Exparts/Exparts';
// import Expert from '../Expert/Expert';
// import Expart from '../Exparts/Exparts';
import Services from '../Services/Services';
// import from '../../'

const Home = () => {
    return (
        <div id='home'>  
            <Banner></Banner>
            <Services></Services>
            <Exparts></Exparts>
            {/* <Expert></Expert> */}
        </div>
    );
};

export default Home;