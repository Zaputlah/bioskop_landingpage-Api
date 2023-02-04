// import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import NavigationBar from './components/NavigationBar'
import "./style/LandingPage.css"
import Intro from './components/Intro';
import Trending from './components/Trending'
import SerialTv from './components/SerialTv'
import People from './components/People';

function App() {
  return (
    <div>

      <div className='myBG'>
        <NavigationBar />
        <Intro></Intro>
      </div> 

      <div className='trending'>
        <Trending />
      </div>

      <div className='serialTv'>
        <SerialTv />
      </div>

      <div className='artis'>
        <People />
      </div>

    </div>
  )
}

export default App;
