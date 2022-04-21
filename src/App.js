import {ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import "./App.css";

const App = () => {

    if(!localStorage.getItem("username")) return <LoginForm />
    return(
        <ChatEngine 
            height="100vh"
            projectID="a0cd1785-3f6f-4dc6-94ce-1eb4ffac2051"
            userName="Petrus"
            userSecret="123"
            renderChatFeed={(chatAppProps) => <ChatFeed props { ...chatAppProps}/>}
        />
    )
}

export default App;