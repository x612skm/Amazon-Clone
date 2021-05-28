import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header(){
const[{basket, user }, dispatch] = useStateValue();

const handelAuthentication = () =>{
    if(user){
        auth.signOut();
    }
}


    return(
        <div className='header'>
            <Link to ="/">
            <img
                className="header_logo"
                src = "http://www.americanbazaaronline.com/wp-content/uploads/2015/02/Amazon-Logo.jpg" alt=""
            />
            </Link>
            
            <div className="header_search">
                <input
                className="header_searchInput"
                type="text" />
                <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                <div onClick={handelAuthentication} className='header__option'>
    <span className='header__optionLineOne'> HEllo {!user? 'Guest' : user.email}</span>
                    <span className='header__optionLineTwo'>{user ? 'Sign_Out' : 'Sign_In' }</span>
                </div>
                </Link>

                <Link to="/orders">
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>   
                    </div>
                </Link>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                    
                </div>
                
                <Link to="/checkout">
                <div className="shopping_basket">
                    <ShoppingBasketIcon />
                     <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
                </Link>
                
            </div>

        </div>
    )
}

export default Header;