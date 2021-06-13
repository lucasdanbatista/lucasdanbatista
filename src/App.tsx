import React from 'react';
import './App.css';
import Background from './components/Background';
import Center from "./components/Center";
import Text, {TextSize} from "./components/Text";
import RoundedButton from "./components/RoundedButton";

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
                </Center>
            </Background>
        </div>
    );
}

export default App;
