const Carrousel = ({ images }) => {
  return (
    <div className="carrousel">
      {images.map((imgUrl, index) => {
        return <img src={imgUrl} alt="" key={index} />;
      })}
    </div>
  );
};

export default Carrousel;
