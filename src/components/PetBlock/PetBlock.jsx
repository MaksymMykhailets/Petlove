import css from "./PetBlock.module.css";

const PetBlock = ({ images }) => {
  return (
    <div className={css.petBlock}>
      <img
        src={images.default}
        srcSet={`
          ${images.desktop} 1280w,
          ${images.tablet} 768w, 
          ${images.mobile} 320w
        `}
        sizes="(min-width: 1280px) 1280px, 
        (min-width: 768px) 768px, 
        320px"
        alt="Pet"
        className={css.petImage}
      />
    </div>
  );
};

export default PetBlock;