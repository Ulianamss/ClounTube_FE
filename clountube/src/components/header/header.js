import logo from '../../assets/logo.svg';
import './header.css'  
import userPicture from '../../assets/authorPicture1.jpg' 
export const Header = (props)=>{
    return(
        <div className="App-header">
            <div className='menu'>
                <div className='burgerMenu'></div>
                <div className='burgerMenu'></div>
                <div className='burgerMenu'></div>
            </div>
            <img src={logo} className="App-logo" alt="logo" />
            <input className='searchBar' placeholder='search'></input>
            {/* какие-то иконки 3 штуки */}
            <div className='userPictureDiv'>
                <a href='/userid' ><img className='userPicture' src={userPicture}/></a>
            </div>       
        </div>
    )
}