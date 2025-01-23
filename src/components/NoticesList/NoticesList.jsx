import PropTypes from "prop-types";
import NoticesItem from "../NoticesItem/NoticesItem";
import css from "./NoticesList.module.css";

const NoticesList = ({ notices, onLearnMore, onToggleFavorite }) => {
  return (
    <ul className={css.list}>
      {notices.map((notice) => (
        <NoticesItem
          key={notice._id}
          notice={notice}
          onLearnMore={onLearnMore}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </ul>
  );
};

NoticesList.propTypes = {
  notices: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onLearnMore: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default NoticesList;