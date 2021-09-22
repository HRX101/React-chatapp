import Messageform from './Messageform';
import Mymessage from './Mymessage';
import Theirmessage from './Theirmessage';
import { ConnectionBar } from 'react-chat-engine';



const ChatFeed=(props)=>{
    
   
    const {chats,activeChat ,userName, messages}=props;
    const chat = chats && chats[activeChat];
    
    const renderReadReceipts=(message,ismymessage)=>{
        return chat.people.map((person,index)=>person.last_read===message.id && (
            <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
                float:ismymessage ? 'right' : 'left',
                backgroundImage :`url(${person?.person?.avatar})`
            }}
            />
        ))
    }


    const renderMessege =()=>{
        const keys=Object.keys(messages);
        return keys.map((key,index)=>{
            const message = messages[key];
            const lastmessagekey=index === 0 ? null : keys[index-1];
            const ismymessage=userName ===message.sender.userName;
            return (
                
                <div key={`msg_${index}`} style={{width:'100%'}}>
                
                <div className="message-block">
                
                    {
                        ismymessage 
                        ?<Mymessage message={message}/>
                        :<Theirmessage message={message} lastMessage={message[lastmessagekey]}/>
                    }
                </div>
                <div className='read-receipts' style={{marginRight:ismymessage ? '18px' : '0px', marginLeft: ismymessage ? '0px' :'68px'}}>

                   {renderReadReceipts(message,ismymessage)} 
                </div>
                </div>
            );
        })
    }
    renderMessege();
    if(!chat) return (<ConnectionBar />);
    return(
        <div className='chat-feed'>
            
            <div className='chat-title-container'>
                <div className='chat-title'>{chat.title}</div>
                <div className='chat-sibtitle'>
                {chat.people.map((person)=>` ${person.person.userName}`)}
                </div>

            </div>
            {renderMessege()}
            
            <div style={{height:'100px'}}/>
            <div className='message-form-container'>
                <Messageform {...props} chatId={activeChat}/>
                
            </div>
        </div>
    );
    
   
}
export default ChatFeed;