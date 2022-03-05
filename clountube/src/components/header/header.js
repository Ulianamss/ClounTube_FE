import logo from '../../assets/logo.svg';
import './header.css'  
import userPicture from '../../assets/authorPicture1.jpg' 
// import Button from '../button/button'

export const Header = (props)=>{
    return(
        <div className="App-header">
            <div className='menu'>
                <div className='burgerMenu'></div>
                <div className='burgerMenu'></div>
                <div className='burgerMenu'></div>
            </div>
            <a href='/'><img src={logo} className="App-logo" alt="logo" /></a>
            <input className='searchBar' placeholder='search'></input>
            {/* какие-то иконки 3 штуки */}
            <div className='userPictureDiv'>

                <div className='addVideoButtonDIv'>
                  {/* <Button props={"картинка плюсика"}></Button> */}
                  <button className='addVideoButton'>+</button>
                </div>
                <a href='/userid' ><img className='userPicture' src={userPicture}/></a>
            </div>       
        </div>
    )
}