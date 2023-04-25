import CategorieTitle from "./CategorieTitle";
import Carrousel from "./Carrousel";

const Section = ({ category, images }) => {
  return (
    <div className="section">
      <CategorieTitle category={category} />
      <Carrousel images={images} />
      </div>
  );
};

export default Section;
