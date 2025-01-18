import { Route , Routes} from 'react-router-dom';

import HomePage from '../screens/Home';
import React from 'react';


const Routing = () => {
    return (
    
        <Routes>
            <Route path="/" element = {<HomePage/>}/>
        </Routes>
        
    );
}

export default Routing;