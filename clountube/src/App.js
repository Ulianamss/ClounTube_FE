import logo from './logo.svg';
import authorPic from './authorPic.jpg';
import videoPreview from './videoPreview.jpg';
import './App.css';


function App() {
  return (
    <div>
      <header className="App-header">
          {/* меню-бургер */}
          <img src={logo} className="App-logo" alt="logo" />
          {/* поиск */}
          {/* какие-то иконки 3 штуки */}
          {/* иконка профиля */}
      </header>

      <div className="videoBlock">
        <img src={videoPreview} className="videoPreview" alt="videoPreview"/>
        <img src={authorPic} className="authorPic" alt="authorPic"/>
        <div className="infoBlock">          
          <p className="videoName">video.name</p>
          <p className="videoUsername">video.username</p>
          <p className="videoViews">video.views</p>
          <p className="videoTime">video.time</p>
        </div>
      </div>
    </div>
  );
}

export default App;
