import PropTypes from "prop-types";
import css from "./NoticesItem.module.css";
import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

const NoticesItem = ({ notice, onLearnMore, onToggleFavorite }) => {
  const {
    _id,
    imgURL,
    title,
    popularity,
    name,
    birthday,
    sex,
    species,
    category,
    comment,
    price = 0,
    isFavorite,
  } = notice;

  const handleLearnMore = () => {
    onLearnMore(_id);
  };

  const handleToggleFavorite = () => {
    onToggleFavorite(_id);
  };

  return (
    <li className={css.item}>
      <img src={imgURL} alt={title} className={css.image} />
      <div className={css.titleWrapper}>
      <h2 className={css.title}>{title}</h2>
      <div className={css.popularity}>
        <FaStar className={css.star} size={16}/>
        <span>{popularity}</span>
      </div>
      </div>
      <div className={css.info}>
        <p><strong className={css.strong}>Name:</strong> {name}</p>
        <p><strong className={css.strong}>Birthday:</strong> {birthday ? new Date(birthday).toLocaleDateString("uk-UA") : "Unknown"}</p>        <p><strong className={css.strong}>Sex:</strong> {sex}</p>
        <p><strong className={css.strong}>Species:</strong> {species}</p>
        <p><strong className={css.strong}>Category:</strong> {category}</p>
      </div>
        <p className={css.comment}>{comment}</p>
        <p className={css.price}>
        {price > 0 ? `$${price}` : "Price negotiable"}
        </p>
      <div className={css.actions}>
        <button onClick={handleLearnMore} className={css.learnMore}>
          Learn more
        </button>
        <button onClick={handleToggleFavorite} className={css.favorite}>
          {isFavorite ? <IoMdHeart size={18} /> : <IoMdHeartEmpty size={18} />}
        </button>
      </div>
    </li>
  );
};

NoticesItem.propTypes = {
  notice: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    birthday: PropTypes.string,
    sex: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    price: PropTypes.number,
    isFavorite: PropTypes.bool,
  }).isRequired,
  onLearnMore: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default NoticesItem;