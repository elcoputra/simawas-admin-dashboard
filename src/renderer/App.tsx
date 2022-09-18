import {
  MemoryRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { Heading, Flex, Box } from '@chakra-ui/react';

import morty from '../../assets/39133.json';

import './App.css';

import About from '../pages/About';
import Login from '../pages/Login';

const Hello = () => {
  const navigate = useNavigate();
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    const timeOut = async () => {
      await setTimeout(() => {
        setAnim(true);
      }, 1000);
      await setTimeout(() => {
        console.log('test');
        navigate('/login');
      }, 3000);
    };
    timeOut();
  }, [navigate]);

  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      bgGradient="linear(#ffc62b -29.09%, #4ade80 51.77%, #1bace3 129.35%)"
      width="100vw"
      height="100vh"
    >
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <img
          width="200"
          alt="icon"
          src="https://simawas.jabarprov.go.id/logo_simawas_pagi_detail_long.svg"
        />
      </div>
      <Heading color="whiteAlpha.800">Dashboard admin simawas</Heading>
      <Lottie animationData={morty} loop />
      {/* <ReactAudioPlayer autoPlay controls src={audio} /> */}

      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      {/* <audio controls>
        <source
          src={`file://${path.resolve(__dirname, '../../assets/jjuara.mp3')}`}
          type="audio/mp3"
        />
      </audio> */}
    </Flex>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
