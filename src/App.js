import { ChatEngine } from 'react-chat-engine';
import './App.css';

const PROJECT_ID = '167f134d-8015-4b1b-8a63-4af822df37a5';
const USER_NAME = 'diegollanes';
const USER_SECRET = '12345';

const App = () => {
    return (
        <ChatEngine
        height='100vh'
        projectID={PROJECT_ID}
        userName={USER_NAME}
        userSecret={USER_SECRET} 
        />
    )
}
    
export default App;