function SlideFunc({ data, pos }) 
{
    return (
      <div 
      className="slide-container" 
      data-testid="slide" >
        <img 
        data-testid="title" 
        style=
        {{ 
            margin: 'auto',
            paddingTop: '4.5rem'
        }}
        src={data[pos].image}
         />
      </div>
    );
  }
  
  export default SlideFunc;
  