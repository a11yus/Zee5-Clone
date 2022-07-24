import { createContext } from "react";
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from "react-router-dom";

export let ZeeContext = createContext();

function ZeeAPI({ children })
{
    const [marathi, setMarathi] = useState([]);
    const [zeedata, setZeeData] = useState([]);
    const [shows, setShows] = useState([]);
    const [movies, setMovies] = useState([]);
    const [webSeries, setWebSeries] = useState([]);
    const [serialStills, setSerialStills] = useState([]);

    const [signup, setSignUp] = useState({});
    const [login, setLogin] = useState({});
    const [Auth, setAuth] = useState(false);

    const navigate = useNavigate();
    const handleSignUp = (e) =>
    {
        let { name, value } =  e.target;
        setSignUp({
            ...signup,
            [name]: value,
        })
    }
    const handleLogin = (e) =>
    {
        let { name, value } =  e.target;
        setLogin({
            ...login,
            [name]: value,
        })

    }

    const compareData = (e) =>
    {
        e.preventDefault()

        if( signup.email === login.email && signup.password === login.password )
        {
            alert('Login successful')
            setAuth(true);
            navigate("/")
        }
        else{
            alert('Invalid Credentials');

        }
    }

    useEffect(() =>
    {
        getData()

    }, [])

    function getData()
    {
        axios.get('http://localhost:8080/tvshows')
        .then(res => 
        {
            console.log(res.data);
            console.log(res);
            setMarathi(res.data[0].Marathi)
            setZeeData(res.data[0].ZeeOriginals);
            setShows(res.data[0].EvergreenShows);
            setMovies(res.data[0].Movies);
            setWebSeries(res.data[0].Webseries);
            setSerialStills(res.data[0].Stills)
        })
    }
    return (
        <ZeeContext.Provider value={{marathi, zeedata, shows, movies, webSeries, serialStills ,handleSignUp, handleLogin, compareData, Auth, signup}}>
            {children}
        </ZeeContext.Provider>
    )
}

export default ZeeAPI;