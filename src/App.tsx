import React from "react";
import "./App.css";
import Background from "./components/Background";
import Center from "./components/Center";
import Text, { TextSize } from "./components/Text";
import IconButton from "./components/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faBlogger,
  faGithub,
  faMedium,
  faMediumM,
  faMicroblog,
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import RoundedButton from "./components/RoundedButton";

function App() {
  return (
    <div className="App">
      <Background>
        <Center>
          <Text size={TextSize.H1}>Lucas Batista</Text>
          <Text size={TextSize.SUBTITLE}>Mobile developer</Text>
          <a href="mailto:contact@lucasbatista.me">
            <RoundedButton>Send-me an e-mail</RoundedButton>
          </a>
          <div className="row">
            <a href="https://github.com/lucasdanbatista">
              <IconButton>
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/lucasdanbatista">
              <IconButton>
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </IconButton>
            </a>
            <a href="https://blog.lucasbatista.me">
              <IconButton>
                <FontAwesomeIcon icon={faMediumM} size="lg" />
              </IconButton>
            </a>
          </div>
        </Center>
      </Background>
    </div>
  );
}

export default App;
