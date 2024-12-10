import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import css from "./Loader.module.css";

const Loader = () => {
  const [percentage, setPercentage] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setShowProgress(true);
          return prev;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={css.loader}>
      {showProgress ? (
        <div className={css.progress}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textColor: "#fff",
              pathColor: "#f5a623",
              trailColor: "rgba(255, 255, 255, 0.2)",
            })}
          />
        </div>
      ) : (
        <img src="/logo.svg" alt="PetLove logo" className={css.logo} />
      )}
    </div>
  );
};

export default Loader;
