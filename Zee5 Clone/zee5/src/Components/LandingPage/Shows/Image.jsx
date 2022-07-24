import style from '../Shows/Image.css';

function Image({
    src,
    p
})
{
    return (

            <div className="container">
                    <img 
                   src={src}
                    alt="" 
                    />
                    <p>{p}</p>
            </div>

        //   /* <div className="overlay overlayBottom">
        //     <div className='text'>
        //     <h2 style={{fontSize: '0.8rem', marginLeft: '-4.3rem'}}>Janhit Main Jaari</h2>
        //         <ul 
        //         style =
        //         {{
        //             display: 'flex', 
        //             gap: '12px', 
        //             color: 'grey', 
        //             fontSize: '0.6rem',
        //             marginLeft: '1rem',
        
        //             }}
        //             >
        //             <li>Hindi</li>
        //             <li>2h21m</li>
        //             <li>Comedy</li>
        //             <li>Drama</li>
        //         </ul>
        //         <div style={{display: 'flex', gap: '5px'}}>
        //             <div>watch</div>
        //             <div>share</div>
        //         </div>
        //     </div>
        
        //   </div>
        // </div> */
        
    )
}

export default Image;