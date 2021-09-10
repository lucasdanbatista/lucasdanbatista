import React from 'react';
import './App.css';
import Background from './components/Background';
import Center from "./components/Center";
import Text, {TextSize} from "./components/Text";
import IconButton from "./components/IconButton";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons/faLinkedinIn";

function App() {
    return (
        <div className="App">
            <Background>
                <Center>
                    <div style={{
                        padding: 24,
                    }}>
                        <Text size={TextSize.H1}>Lucas Batista</Text>
                        <Text size={TextSize.SUBTITLE}>
                            Mobile developer
                        </Text>
                    </div>
                    <div className='row'>
                        <a href='https://github.com/lucasdanbatista'>
                            <IconButton>
                                <FontAwesomeIcon icon={faGithub} size='lg'/>
                            </IconButton>
                        </a>
                        <a href='https://www.linkedin.com/in/lucasdanbatista'>
                            <IconButton>
                                <FontAwesomeIcon icon={faLinkedinIn} size='lg'/>
                            </IconButton>
                        </a>
                        <a href='mailto:contact@lucasbatista.me'>
                            <IconButton>
                                <FontAwesomeIcon icon={faEnvelope} size='lg'/>
                            </IconButton>
                        </a>
                    </div>
                </Center>
            </Background>
        </div>
    );
}

export default App;
