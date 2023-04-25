import * as React from 'react';
import { createUser } from '../../firebase'  ;    // import firebase auth
import { withCookies, Cookies } from 'react-cookie';       // import cookies
import { motion } from 'framer-motion';

class login extends React.Component {
    

    state = {user: null, error: null, email: '', password: ''};
    
    constructor(props) {
        super(props);
        this.handleCreateUser = this.handleCreateUser.bind(this);
    }


    async handleCreateUser() {
        
        const email = this.state.email;
        const password = this.state.password;

        createUser(email,password)
            .then((userCredential) =>{
                Cookies.set('user', userCredential.user, { path: '/' });
            })
            .catch((error) => {
                this.setState({error: error.message});
            });
    }

    render() {
        return (
            //make a div that is at the top of the  page  and as wide as it use tailwind css
            <div className='bg-secondary-200 h-screen flex items-center justify-center '>
                <div className='flex flex-col justify-evenly items-center  bg-light-100 h-[90%] w-1/3 drop-shadow-xl rounded-xl '>

                    
                        <h1 className=' text-4xl font-bold text-center text-primary-100 m-6'>Login</h1>
                        <div className='flex flex-col justify-center gap-10 items-center w-[100%] self-center'>
                            <motion.input className=' border-none border-primary-100 rounded-md p-2 w-[80%] shadow-sm focus:outline-none '  whileHover={{scale:1.05}} whileTap={{scale:0.99}}type='email' placeholder='Email' onChange={
                                (e) => {this.setState({email: e.target.value})
                                console.log(this.state.email)
                                }
                                } />
                            <motion.input className=' border-none border-primary-100 rounded-md p-2 w-[80%] shadow-sm focus:outline-none '  whileHover={{scale:1.05}} whileTap={{scale:0.99}}type='password' placeholder='Password' onChange={(e) =>{ this.setState({password: e.target.value})
                                console.log(this.state.password)
                            }} />

                            <motion.button className='border-none bg-blue-200 p-3 text-2xl rounded-xl w-1/2 ' whileHover={{backgroundColor:'#99CCCC', scale:1.05}} whileTap={{scale:0.99}}
                             onClick={this.handleCreateUser}>Login</motion.button>
                        </div>

                </div>


            </div>
        );
    }


}

export default withCookies(login);