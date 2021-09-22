import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';

const App=()=>{
    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
        height='100vh'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        projectID='151b60bc-ce6d-423b-8736-8f8df383310f'
        renderChatFeed={(ChatAppProps)=><ChatFeed {...ChatAppProps}/>}
        


        />

    );
}
export default App;