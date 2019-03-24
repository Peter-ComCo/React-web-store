import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class  extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
        {/* 
            <div>Icons made by <a href="https://www.flaticon.com/authors/flat-icons" 
            title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" 			    
            title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    
            title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}

           
            <ul className='navbar-nav align-items-center'>
                <li className='nav-item ml-5'>
                    <Link to='/' className='nav-link'>
                         ComCo.hr
                    </Link>
                </li>
            </ul>
            <Link to='/cart' className='ml-auto'>
                <ButtonContainer>
                    <span className='mr-2'>
                    <i className="fas fa-cart-plus"/>
                    Moja Košarica 
                    </span>
                
                </ButtonContainer>
            </Link>
      
      
      </NavWrapper>
    );
  }
}


const NavWrapper = styled.nav`
    background:var(--mainBlue);
    .nav-link{
        color:var(--mainWhite)!important;
        font-size:1.3rem;

        
    }
    .ml-auto .mr-2{
        border - color: var(--mainRed)!important;
        color: var(--mainRed)!important;
       
    }

`;
