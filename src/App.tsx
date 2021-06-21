import React from 'react';
import './App.css';
import Background from './components/Background';
import Center from "./components/Center";
import Text, {TextSize} from "./components/Text";
import RoundedButton from "./components/RoundedButton";
import IconButton from "./components/IconButton";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons/faWhatsapp";

function App() {
    return (
        <div className="App">
            <Background>
                <Center>
                    <Text size={TextSize.H1}>
                        Lucas Batista
                    </Text>
                    <Text size={TextSize.SUBTITLE}>
                        Software Developer
                    </Text>
                    <a href={process.env.PUBLIC_URL + '/files/resume.pdf'}>
                        <RoundedButton>Download resume</RoundedButton>
                    </a>
                    <div className='row'>
                        <a href='https://github.com/lucasdanbatista'>
                            <IconButton>
                                <FontAwesomeIcon icon={faGithub} size='lg'/>
                            </IconButton>
                        </a>
                        <a href='mailto:contact@lucasbatista.me'>
                            <IconButton>
                                <FontAwesomeIcon icon={faEnvelope} size='lg'/>
                            </IconButton>
                        </a>
                        <a href='https://wa.me/+554791131491'>
                            <IconButton>
                                <FontAwesomeIcon icon={faWhatsapp} size='lg'/>
                            </IconButton>
                        </a>
                    </div>
                </Center>
            </Background>
        </div>
    );
}

export default App;
