import Title from "../../components/Title/Title";
import PetBlock from "../../components/PetBlock/PetBlock";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import catImageMob from "../../img/cat-register@2x.webp";
import catImageTab from "../../img/cat-register-tab@2x.webp";
import catImageDesk from "../../img/cat-register-desk@2x.webp";
import css from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div className={css.registrationPage}>
      <PetBlock
      images={{
        default: catImageMob, 
        mobile: catImageMob,
        tablet: catImageTab,
        desktop: catImageDesk
  }}
/>
      <div className={css.container}>
      <Title
        title="Registration"
        subtitle="Thank you for your interest in our platform."
      />
      <RegistrationForm />
      <p className={css.footerText}>
        Already have an account? <a href="/login">Login</a>
      </p>
      </div>
    </div>
  );
};

export default RegistrationPage;