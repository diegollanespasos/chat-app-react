import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

// diegollanes
//  MrWhite
// jessepinkman

const PROJECT_ID = '167f134d-8015-4b1b-8a63-4af822df37a5';
const USER_NAME = 'MrWhite';
const USER_SECRET = '12345';

const App = () => {
    return (
        <ChatEngine
        height='100vh'
        projectID={PROJECT_ID}
        userName={USER_NAME}
        userSecret={USER_SECRET}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;