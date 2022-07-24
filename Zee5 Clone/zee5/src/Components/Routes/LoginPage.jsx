import { Button, Icon, Input, InputGroup, InputRightElement, Link } from "@chakra-ui/react";
import { FaApple } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import { ZeeContext } from "../Context/Context";
import { useContext, useState } from "react";


function LoginPage()
{
    let { compareData, handleLogin, Auth, signup } = useContext(ZeeContext);
    let navigates = useNavigate();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    
    return (
        <div style={{backgroundColor: '#0f0617'}}>
            <div>
            {/* if(signup === Undefined) alert("Please Create an account!") */}
            </div>
            <Navbar />
            <h4 style={{color: 'white'}}>Login to ZEE5</h4>
            <h5 style={{marginTop: '1rem', color: 'white'}}>Login to continue enjoying uninterrupted video and personalised experience.</h5>
            <div 
            style=
                {{
                display: 'flex',
                gap: '1rem', 
                size: '40px',
                 marginTop: '1.5rem', 
                justifyContent: "center",
                fontSize: '2rem',
                color: 'white'
                }}
                >
                <FaApple />
                <AiFillGoogleCircle />
                <BsFacebook />
                <AiFillTwitterCircle />
            </div>
            <h5 style={{marginTop: '1rem', color: 'white'}}>or</h5>
            <form
            style=
            {{
                display: 'flex', 
                flexDirection: 'column',
                width: '20rem',
                margin: 'auto'
            }}
            onSubmit={compareData}
            >
            <Input 
            style={{marginTop: '1rem', color: 'white'}}
            htmlSize={30} 
            width='auto' 
            variant='flushed'
            focusBorderColor='Purple'
            placeholder='Email ID'
            name = 'email'
            onChange={(e)=>handleLogin(e)} 
            />
            <InputGroup size='md'>
            <Input 
            style={{marginTop: '1rem', color: 'white'}}
            htmlSize={33} 
            width='auto' 
            variant='flushed'
            focusBorderColor='Purple'
            placeholder='Password'
            name = 'password'
            type={show ? 'text' : 'password'}
            onChange={(e)=>handleLogin(e)} 
            />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' mt='2rem' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
            <Link style={{color: 'purple'}}>Forgot Password ?</Link>
            <div>
                <Button
                type='submit'
                style={{marginTop: '1rem', color: 'white'}} size='md' variant='outline'>
                    Login
                    </Button>
            </div>
            </form>
            <div>
                <h5 style={{marginTop: '1rem', color: 'white'}}>New to ZEE5 ?</h5>
                <NavLink to={'/registerpage'} style={{color: 'purple'}}>register</NavLink>
            </div>
            <Footer />
        </div>
    )
}

export default LoginPage;