
import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import { useState } from "react";


const App = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration: 1000
    });


    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <>
            <div className="container">
                <h2 className="rio">Voice Transcriber</h2>
                <br />
                <p className="para">I have developed a speech-to-text converter in
                    a React project using React hooks, which converts
                    speech captured from the microphone into text</p>

                <div className="main-content" onClick={() => setTextToCopy(transcript)}>
                    {transcript}
                </div>

                <div className="btn-style">

                    <button class="square_btn" onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                    <button class="square_btn" onClick={startListening}>Start Listening</button>
                    <button class="square_btn" onClick={SpeechRecognition.stopListening}>Stop Listening</button>

                </div>

            </div>
            <footer>
                <div class="container">
                    <div class="footer-content">
                        <span>&copy; 2023 All rights reserved.</span>
                        <span>Created by Ankit Singh</span>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default App;