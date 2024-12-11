import css from './MainLayout.module.css';
import { Link } from "react-router-dom";


const MainLayout = () => {
    return (
      <div className={css.container}>
        <Link to="/home" className={css.logo}>
          <span>petl</span>
          <span className={css.heart}>💛</span>
          <span>ve</span>
        </Link>
      </div>
    );
  };
  
  export default MainLayout;