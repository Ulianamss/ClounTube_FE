import logo from '../../assets/logo.svg';
import './header.css'  
import React, {useState} from 'react';
import userPicture from '../../assets/authorPicture1.jpg' 
import AddButtonModalWindow from '../AddButtonModalWindow/AddButtonModalWindow';

// import Button from '../button/button'

export const Header = (props)=>{
    const [show, setShow] = useState(false)
    return(
        <div className="App-header">
           <BurgerMenu></BurgerMenu>
            <a href='/'><img src={logo} className="App-logo" alt="logo" /></a>
            <input className='searchBar' placeholder='search'></input>
            {/* какие-то иконки 3 штуки */}
            <div className='userPictureDiv'>

                <div className='addVideoButtonDIv'>
                  {/* <Button props={"картинка плюсика"}></Button> */}
                  <button onClick={()=> setShow(true)} className='addVideoButton'>+</button>
                  <AddButtonModalWindow closeButton={()=> setShow(false)} show={show} /> 
                </div>
                <a href='/userid' ><img className='userPicture' src={userPicture}/></a>
            </div>       
        </div>
    )
}