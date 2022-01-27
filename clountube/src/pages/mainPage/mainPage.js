import './mainPage.css';
import { videoList } from '../../mockData/videoList';
import { VideoShow } from '../../components/videoShow/videoShow';
import { Header } from '../../components/header/header';

function MainPage() { 
  return (
    <div>
      <div className='header'>
        <Header></Header>
      </div>
      <div className='container'>
        <VideoShow props={videoList}></VideoShow>
      </div>

    </div>
  );
}

export default MainPage;
