function ImageSlideFunc({ src, pos }) 
{
    return (
      <div 
      className="slide-container" 
      data-testid="slide"
      >
        <img 
        data-testid="title" 
        style={{ margin: 'auto' }}
        src={src}
        />

      </div>
    );
  }
  
  export default ImageSlideFunc;
  