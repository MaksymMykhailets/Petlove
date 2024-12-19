import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/users/operations";
import css from "./RegistrationForm.module.css";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const getInputClass = (field) => {
    if (field === "confirmPassword") {
      if (!touchedFields[field] || confirmPassword === "") {
        return css.default;
      }
      if (password !== confirmPassword || errors[field]) {
        return css.invalid;
      }
      return css.valid;
    }
  
    if (touchedFields[field]) {
      return errors[field] ? css.invalid : css.valid;
    }
  
    return css.default;
  };

  const getValidationIcon = (field) => {
    if (touchedFields[field]) {
      if (errors[field]) {
        return <RxCross2 className={css.invalidIcon} />;
      }

      if (field === "confirmPassword") {
        return password === confirmPassword && password.length > 0 ? (
          <FaCheck className={css.validIcon} />
        ) : (
          <RxCross2 className={css.invalidIcon} />
        );
      }

      return <FaCheck className={css.validIcon} />;
    }
    return null;
  };

  const onSubmit = async (data) => {
    const { name, email, password } = data;
    try {
      await dispatch(signup({ name, email, password }));
      navigate("/profile");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.inputWrapper}>
        <input
          type="text"
          placeholder="Name"
          {...register("name")}
          className={`${css.input} ${getInputClass("name")}`}
          onChange={() => trigger("name")}
        />
        {getValidationIcon("name")}
      </div>
      {errors.name && <p className={css.error}>{errors.name.message}</p>}

      <div className={css.inputWrapper}>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className={`${css.input} ${getInputClass("email")}`}
          onChange={() => trigger("email")}
        />
        {getValidationIcon("email")}
      </div>
      {errors.email && <p className={css.error}>{errors.email.message}</p>}

      <div className={css.inputWrapper}>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          {...register("password")}
          className={`${css.input} ${getInputClass("password")}`}
          onChange={() => trigger("password")}
        />
        {getValidationIcon("password")}
        <button
          type="button"
          className={css.togglePassword}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>
      {errors.password && <p className={css.error}>{errors.password.message}</p>}

      <div className={css.inputWrapper}>
        <input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm password"
          {...register("confirmPassword")}
          className={`${css.input} ${getInputClass("confirmPassword")}`}
          onChange={() => trigger("confirmPassword")}
        />
        {getValidationIcon("confirmPassword")}
        <button
          type="button"
          className={css.togglePassword}
          onClick={() => setShowConfirmPassword((prev) => !prev)}
        >
          {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>
      {errors.confirmPassword && (
        <p className={css.error}>{errors.confirmPassword.message}</p>
      )}

      <button type="submit" className={css.button}>
        Registration
      </button>
    </form>
  );
};

export default RegistrationForm;