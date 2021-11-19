import React from 'react';
import notfound from "../../images/NotFound.jpg";
import Header from '../Shared/Header/Header';


const Notfound = () => {
    return (
        <div>
            <Header></Header>
              <img className="my-4 img-fluid" src={notfound} alt="" />
        </div>
    );
};

export default Notfound;