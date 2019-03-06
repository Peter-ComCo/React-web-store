import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotals({value}) {
 const{cartSubTotal,cartTax,cartTotal,clearCart} = value;

  return (
    <React.Fragment>
        <div className='container'>
            <div className="row">
                <div className="col-10 mt-8 ml-sm-5 py-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to='/'>
                    <button className='btn btn-outline-danger text-uppercase mb-7 mt-9 px-9' 
                    type='button'
                    onClick={()=>clearCart()}
                    >
                    Očisti košaricu
                    </button>
                    </Link>
                    <h5>
                        <span className="text-title" >
                        Cijena prije poreza : </span>
                        <strong>{cartSubTotal} KN</strong>
                    </h5>
                    <h5>
                        <span className="text-title" >
                        Porez (25%) : </span>
                        <strong>{cartTax} KN</strong>
                    </h5>
                    <h5>
                        <span className="text-title" >
                        Konačna cijena : </span>
                        <strong>{cartTotal} KN</strong>
                    </h5>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}


