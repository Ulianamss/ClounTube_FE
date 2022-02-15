// import userPicture from '../../assets/authorPicture1.jpg' 
// import userData from '../../mockData/userData'
import './user.css'  

export const User = (props)=>{
    return(
        <div className='containerUser'>
            <div className='userPicturePageDiv'>
                <img className='userPicturePage' src={props.props.userPicture}/>
            </div>
            <div className='userNameDiv'>
                <span className="userName">{props.props.userName}</span>
            </div>
        </div>
    )
}
