import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { ZeeContext } from '../Context/Context';
import Footer from '../LandingPage/Footer';
import Navbar from '../LandingPage/Navbar';

function RegisterPage()
{
  let { handleSignUp } = useContext(ZeeContext);
  let navigates = useNavigate();
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <div style={{backgroundColor: 'black'}}>
      <div style={{paddingBottom: '2rem'}}>
      <Navbar />
      </div>
      <h4 style={{fontWeight: 'bold', marginTop: '3rem',color: 'white'}
    }>Create a new account</h4>
      <h6 style={{width: '18rem', margin: 'auto', marginTop: '1rem', color: 'white'}}>Create an account to continue enjoying uninterrupted video and personalised experience</h6>
      <div>
        <Button 
        color='purple'
        size='lg'
        w='11rem'
        mt= '3rem'
        >
          Sign in
        </Button>
      </div>
      <h1 style={{ color: 'white'}}>or</h1>
      <div 
            style=
            {{
                display: 'flex', 
                flexDirection: 'column',
                width: '20rem',
                margin: 'auto'
            }}
            >
            <Input 
            style={{marginTop: '1rem', color: 'white'}}
            htmlSize={30} 
            width='auto' 
            variant='flushed'
            focusBorderColor='Purple'
            placeholder='Email ID' 
            name = 'email'
            onChange={(e)=>handleSignUp(e)}
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
              onChange={(e)=>handleSignUp(e)}
             />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' mt='2rem' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            </div>
            <h6 style={{width: '18rem', margin: 'auto', marginTop: '1rem', color: 'white'}}>By procedding you are agree to our</h6>
            <h6 style={{color: 'purple'}}>terms of services and privacy policy</h6>
            <div>
        <Button 
        color='darkgreen'
        size='lg'
        w='11rem'
        mt= '3rem'
        onClick={() => {
          navigates('/loginpage');
        }}
        >
          Register
        </Button>
      </div>
      <h5 style={{color: 'white'}}>Already registered ?</h5>
      <NavLink to={'/loginpage'} style={{color: 'purple'}}>Login</NavLink>
      <Footer />
    </div>
  )
}

export default RegisterPage;