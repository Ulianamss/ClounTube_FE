import './userPage.css';
import { Header } from '../../components/header/header';
import {User} from '../../components/user/user';
import {userData} from '../../mockData/userData'

function UserPage() { 
  return (
    <div>  
      <div className='header'>
        <Header></Header>
      </div>
      <div>  
        <User props={userData}></User>
      </div>
    </div>
  );
}
export default UserPage;
