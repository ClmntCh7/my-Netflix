import CategorieTitle from "./CategorieTitle";
import Carrousel from "./Carrousel";

const Section = ({ className, category, key, images }) => {
  return (
    <div className={className}>
      <CategorieTitle className="catTitle" category={category} />

      { images.map((imgUrl, index) => {
        return (
            <Carrousel className="carrousel" key={index} image={imgUrl} />
        )
      })}
    </div>
  );
};

export default Section;
