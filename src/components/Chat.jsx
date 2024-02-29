import React from 'react';
import userAva from '../assets/user_avatar-left.png'
import attachBtn from '../assets/screpka.png';
import sendBtn from '../assets/send.png';
import switchThemeBtn from '../assets/mesyac.png';
import {getAuth} from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'


const Chat = () => {

    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);
    const [isSwitch, setIsSwitch] = React.useState(false)

    const handleSwitchTheme = () => {
        let isSwitched = !isSwitch
        setIsSwitch(isSwitched)
        console.log(isSwitched)
    }

    return (
        // <Container>
        //     <Grid 
        //     container 
        //     justifyContent={'center'}
        //     style={{height: window.innerHeight - 50, marginTop: 20}}
        //     >
        //         <div className="message__wrapper">
                    
        //         </div>
        //         <Grid
        //         container
        //         alignItems="flex-end"
        //         direction="column"
        //         style={{width: '80%'}}
        //         >
        //             <TextField 
        //             fullWidth
        //             rowsMax={2}
        //             variant="outlined"
        //             />
        //             <Button>Send</Button>
        //         </Grid>
        //     </Grid>
        // </Container>


        <>
            <div className={isSwitch ? 'dark__chat' : "chat"}>
                <div className="chat__wrapper">
                    <div className="chat__container">
                        <div className="left__panel-container">
                            <div className="users__item-container">
                                <h4 className="left__title">Chats</h4>

                                
                                
                                <div className="chat__user-container chat__user-container--active">
                                    
                                    <div className="users__name-container">
                                        <img className="users__ava" src={userAva}/>
                                    </div>
                                    <div className="users__desc-container">
                                        
                                        <p className="chat__user-name"><strong>User Name</strong></p>
                                        <p className="chat__user-last-words">dsafjlkfjslgg...</p>
                                    </div>
                                </div>

                                <div className="chat__user-container">
                                    
                                    <div className="users__name-container">
                                        <img className="users__ava" src={userAva}/>
                                    </div>
                                    <div className="users__desc-container">
                                        
                                        <p className="chat__user-name"><strong>User Name</strong></p>
                                        <p className="chat__user-last-words">dsafjlkfjslgg...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right__panel-container">
                            
                            <div className="right__title-container">
                                <img className='users__ava' src={userAva}/> 
                                <h4 className="right__panel-user-name">UserName</h4>
                                <div className="switch__theme-container">
                                    <button>
                                        <img onClick={handleSwitchTheme} className='switch' src={switchThemeBtn}/>
                                    </button>
                                </div>
                            </div>
                            <div className="right__content-container">

                            </div>
                            <div className="send__message-container">
                                <button>
                                    <img className='attach__btn' src={attachBtn}/>
                                </button>
                                <input className={isSwitch ? 'input__dark' : 'input__message'} id="message" type="text" />
                                <label id='message-label' className='label__message' htmlFor="message">type message</label>
                                <button>
                                    <img className='send__btn' src={sendBtn}/>
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chat;