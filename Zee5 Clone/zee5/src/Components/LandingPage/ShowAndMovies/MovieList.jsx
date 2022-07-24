import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ZeeContext } from '../../Context/Context';
import Image from '../Shows/Image';

const ShowList = () =>
{
    let {marathi, zeedata, shows, movies, webSeries, serialStills} = useContext(ZeeContext);
    return (
        <>
         <div style={{ display: 'flex', justifyContent: "space-between"}}>
             <h5 style={{fontFamily: 'Arial', fontWeight: "bolder", color: 'white'}}>Latest Movies on ZEE5</h5>
             <h6 style={{color: 'purple'}}>More</h6>

        </div>
       <div style={{display: 'flex', gap: '0.6rem', marginLeft: '7px'}}>
        {
            movies.map(({ id, src }) => 
            (
                    <div style=
                    {{
                        display:"flex",
                        gap: "1rem",
                        marginTop: "0.5rem",
                        justifyContent: "center"
                    }}
                    key={id}
                    >
                        <Image src={src}/>   
                    </div>
                ))
            }
        </div>

        <div style={{ display: 'flex', justifyContent: "space-between"}}>
             <h5 style={{fontFamily: 'Arial', fontWeight: "bolder", color: 'white'}}>Latest Hindi Episodes Free</h5>
             <h6 style={{color: 'purple'}}>More</h6>

        </div>
       <div style={{display: 'flex', gap: '0.6rem', marginLeft: '7px'}}>
        {
            serialStills.map(({ id, src, p }) => 
            (
                    <div style=
                    {{
                        // display:"flex",
                        gap: "1rem",
                        marginTop: "0.5rem",
                        justifyContent: "center"
                    }}
                    key={id}
                    >
                        <Image src={src} p={p}/>   
                    </div>
                ))
            }
        </div>

        <div style={{ display: 'flex', justifyContent: "space-between"}}>
             <h5 style={{fontFamily: 'Arial', fontWeight: "bolder", color: 'white'}}>Zee Originals</h5>
             <h6 style={{color: 'purple'}}>More</h6>

        </div>
       <div style={{display: 'flex', gap: '0.6rem', marginLeft: '7px'}}>
        {
            zeedata.map((show) => 
            (
                    <div style=
                    {{
                        display:"flex",
                        gap: "1rem",
                        marginTop: "0.5rem",
                        justifyContent: "center"
                    }}
                    key={show.id}
                    >
                        <Image src={show.src}/>   
                    </div>
                ))
            }
        </div>

        <div style={{ display: 'flex', justifyContent: "space-between"}}>
             <h5 style={{fontFamily: 'Arial', fontWeight: "bolder", color: 'white'}}>ZEE5 Original Web Series </h5>
             <h6 style={{color: 'purple'}}>More</h6>

        </div>
       <div style={{display: 'flex', gap: '0.6rem', marginLeft: '7px'}}>
        {
            webSeries.map(({ id, src }) => 
            (
                    <div style=
                    {{
                        display:"flex",
                        gap: "1rem",
                        marginTop: "0.5rem",
                        justifyContent: "center"
                    }}
                    key={id}
                    >
                        <Image src={src}/>   
                    </div>
                ))
            }
        </div>

        <div style={{ display: 'flex', justifyContent: "space-between"}}>
             <h5 style={{fontFamily: 'Arial', fontWeight: "bolder", color: 'white'}}>Evergreen Hindi TV Shows Free</h5>
             <h6 style={{color: 'purple'}}>More</h6>

        </div>
       <div style={{display: 'flex', gap: '0.6rem', marginLeft: '7px'}}>
        {
            shows.map(({ id, src }) => 
            (
                    <div style=
                    {{
                        display:"flex",
                        gap: "1rem",
                        marginTop: "0.5rem",
                        justifyContent: "center"
                    }}
                    key={id}
                    >
                        <Image src={src}/>   
                    </div>
                ))
            }
        </div>

        <div style={{ display: 'flex', justifyContent: "space-between"}}>
             <h5 style={{fontFamily: 'Arial', fontWeight: "bolder", color: 'white'}}>Marathi Originals</h5>
             <h6 style={{color: 'purple'}}>More</h6>

        </div>
       <div style={{display: 'flex', gap: '0.6rem', marginLeft: '7px'}}>
        {
            marathi.map(({ id, src }) => 
            (
                    <div style=
                    {{
                        display:"flex",
                        gap: "1rem",
                        marginTop: "0.5rem",
                        justifyContent: "center"
                    }}
                    key={id}
                    >
                        <Image src={src}/>   
                    </div>
                ))
            }
        </div>
    </>
    )
}

export default ShowList;