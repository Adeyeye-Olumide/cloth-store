import { Component } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { createContext, useEffect } from "react";
import { UserContext } from "../../contexts/users";
import { CartContext } from "../../contexts/cart";
import { Outlet } from "react-router";
import { signOutUser } from "../../utils/firestore-utils/firestore";
import Cart from "../cart-component/cart-component";
import { ProductContext } from "../../contexts/products";
import { useDispatch, useSelector } from "react-redux";
import { setCartClassName } from "../../store/cart/cart.action";
import './file.css'




function Header (){

  const currentUser = useSelector((state)=> state.user.currentUser)
  const currentCartClassName = useSelector((state)=> state.cart.currentCartClassName)
  const cartItem = useSelector((state)=> state.cart.cartItem)

  const dispatch = useDispatch()
  
  


  function cartToggle(e){
    e.preventDefault()

   if(cartItem.length>0) dispatch(setCartClassName(null))
   
   if(!currentCartClassName)dispatch(setCartClassName("active"))
    // currentCartClassName?setCartClassName(null):setCartClassName("active")

    console.log(currentCartClassName)

    
  }



 
    return(
      <div className="header-container">
        <header className="App-header">
          <div className='logo'>
            <Link to='/'>


            <svg xmlns="http://www.w3.org/2000/svg" 
            width="64" height="64" xmlSpace="preserve"><path fillRule="evenodd" clipRule="evenodd" 
            fill="#212529" d="M56.619 31.765c-1.258 1.593-2.558 3.241-2.589 3.726.104.379 1.357 
            1.518 2.572 2.621l.138.126c3.105 2.821 5.351 5.231 6.427 7.161 1.184 1.928.888 
            3.401.435 4.252-1.069 1.99-3.7 
            2.311-4.216 2.342 0 0-6.726.01-8.688.018-.907-.018-2.616-.25-4.57-1.564-1.394-.938-2.628-2.324-3.82-3.665-.739-.831-1.729-2.759-2.306-2.759a2 
            2 0 1 1 .425-3.951c1.905.239 3.205 2.017 4.895 3.915 1.03 1.156 2.094 2.572 3.071 3.229 1.384.932 
            2.363.834 2.536.812l.179.026 8.059-.038c.249-.024.555-.1.764-.18-.036-.085-.093-.257-.177-.393l-.095-.165c-.847-1.513-2.927-3.704-5.637-6.167l-.138-.126c-5.241-4.764-4.941-5.901-.43-11.617.589-.747 1.269-1.605 2.029-2.602 
            3.076-4.017 4.121-5.917 4.393-6.751a7.19 7.19 0 0 0-.887.012l-.219-.017-9.166-.008-.005-.002c-.271.693-1.636 4.15-3.433 7.139-4.07 6.771-4.97 7.894-6.504 7.894-.536 0-1.307-.15-1.753-.432-2.226-1.41-1.988-4.475-1.925-6.785-.018.672-.003-3.227-.005-5.408 
            0-1.688.114-3.573-.175-3.92 0 0-.082-.07-.378-.141-.814-.196-1.312-.33-3.762-.33-.432 0-1.227-.007-1.763-.007-.819 0-2.355-.032-3.646.128.133.139.262.289.381.451 1.204 1.629 1.253 4.434 1.251 5.176.397 5.932-.337 9.467-2.253 10.507-.484.262-1.101.749-1.634.749-2.223 
            0-4.378-2.09-7.854-7.974-1.886-3.195-3.289-6.592-3.348-6.737a1.281 1.281 0 0 0-.111-.162 1.985 1.985 0 0 0-.371-.131l-8.026-.01c1.279 2.808 7.194 15.341 13.626 21.903 4.752 4.849 9.949 5.859 12.192 6.061a1.996 1.996 0 0 1 
            1.893 1.988 2 2 0 0 1-2 2c-.075 0-.143-.015-.216-.022-2.988-.264-9.132-1.575-14.754-7.312C7.267 36.705.603 21.479.325 20.836c-.222-.569-.75-2.262.341-3.529.95-1.101 2.577-1.261 3.234-1.278l8.788.005.17-.036c.213.036 1.326.306 2.239.965.866.623 1.3 
            1.554 1.414 1.823.019.054 1.364 3.362 3.098 6.298 1.966 3.331 3.455 4.476 4.09 5.138.276-1.339.383-3.913.223-6.262l-.005-.078.003-.08c.007-1.013.044-2.453-.255-2.855-.175-.235-.725-.461-1.313-.538-.958-.129-2.126-.849-2.313-1.777-.422-2.104 1.853-3.084 
            3.033-3.658 1.886-.919 4.991-1.001 8.635-.965 2.623.029 3.51.196 4.66.473 3.871.929 3.611 3.712 3.611 7.554 0 2.306-.017 6.685.008 5.889-.018.616-.049 1.176.043 1.928.682-.701.866-1.663 2.691-4.698 1.794-2.987 3.169-6.646 3.184-6.682l.055-.131c.134-.286.643-1.258 1.586-1.809.883-.519 1.874-.511 2.284-.479l8.821-.024a9.94 9.94 
            0 0 1 .875-.039c3.006 0 3.961 1.455 4.265 2.284.56 1.524.218 3.893-5.105 10.846-.779 
            1.01-1.467 1.882-2.066 2.644zM50.697 
            52.01l.106.002c-.901 0-.78 0-.106-.002zm-12.696-3.989a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg>







            </Link>
            
          </div>

          <div className='nav-options'>
            <div>
              <Link className='options' to='shop'>SHOP</Link>
            </div>

            <div>
              <Link className='options' to=''>CONTACT</Link>
            </div>

            <div>
              {!currentUser? <Link className='options' to='sign-in'>SIGN IN</Link>: 
              <Link className='options' to='sign-in' onClick={signOutUser}>SIGN OUT</Link>}
              
            </div>

            <div>
              <Link className='options' to='' onClick={cartToggle}>CART</Link>
              <Cart></Cart>
            </div>
      </div>

      

    </header>
    

    <Outlet></Outlet>
      </div>
        
    )
    
}

export default Header