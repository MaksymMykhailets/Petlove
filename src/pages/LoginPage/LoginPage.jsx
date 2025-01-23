import Title from "../../components/Title/Title";
import PetBlock from "../../components/PetBlock/PetBlock";
import LoginForm from "../../components/LoginForm/LoginForm";
import dogImageMob from "../../img/dog-login@2x.webp";
import dogImageTab from "../../img/dog-login-tab@2x.webp";
import dogImageDesk from "../../img/dog-login-desk@2x.webp";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={css.loginPage}>
      <PetBlock
        images={{
          default: dogImageMob,
          mobile: dogImageMob,
          tablet: dogImageTab,
          desktop: dogImageDesk,
        }}
      />
      <div className={css.container}>
        <div className={css.titleWrapper}>
        <Title
          title="Login"
        />
        <p className={css.text}>Welcome! Please enter your credentials to login to the platform:</p>
        </div>
        <LoginForm />
        <p className={css.footerText}>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;