import React from 'react'
import { href } from 'react-router-dom';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='./media/homeHero.png' alt='Hero Img' className='mb-5'></img>
                <h1 className='mt-5'>Invest in everthing</h1>
                <p style={{fontWeight:"450 px"}}>Online platform to invest in stocks,derivates,mutal funds,and more</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}} href="/signup">Signup Now</button>
            </div>

        </div>
     );
}

export default Hero;