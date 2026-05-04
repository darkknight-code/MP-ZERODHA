import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
         <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>404 Not Found</h1>
                <p className='mt-3 mb-5' style={{fontWeight:"450 px"}}>Sorry,the page you are looking for does not not exist</p>
            </div>

        </div>
     );
}

export default NotFound;