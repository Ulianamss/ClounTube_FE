import logo from './assets/logo.svg';
import './App.css';
import { Video } from './components/video/video';
import { videoList } from './mockData/videoList';
import { VideoShow } from './components/videoShow/videoShow';


function App() { 
// export const App = (props) => {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />

      <div>
        <VideoShow props={videoList}></VideoShow>
      </div>

    </div>
  );
}

export default App;
