import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';

const PROJECT_ID = '167f134d-8015-4b1b-8a63-4af822df37a5';

const App = () => {
    if(!localStorage.getItem('username')) {
        return <LoginForm />
    }

    return (
        <ChatEngine
        height='100vh'
        projectID={PROJECT_ID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;