import { React, useEffect } from 'react';
import '../styles/preloader.css'

function Preloader(props) {

  
    useEffect(() => {
      setTimeout(() => {
        if (!props.inf) 
        document.querySelector('.preloader').classList.add('done');
      }, 1000);
    }, []);

  return (
    <div className="preloader">
      <div className='loader'></div>
    </div>
  );
}

export default Preloader;