import logo from './logo.svg';
import './App.css';
import { Video } from './components/video';
import { videoList } from './common/videoList';


function App() { 
// export const App = (props) => {

  return (
    <div>
      <header className="App-header">
          {/* меню-бургер */}
          <img src={logo} className="App-logo" alt="logo" />
          {/* поиск */}
          {/* какие-то иконки 3 штуки */}
          {/* иконка профиля */}
      </header>
      {/* {
        videoList.map( video =>
          <Video                 
            data = {video}>
          </Video>
        )
      } */}
    </div>
  );
}

export default App;
