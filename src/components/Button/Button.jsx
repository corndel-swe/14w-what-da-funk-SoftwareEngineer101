import "./Button.css";

const Button = ({ isSecondary, isInverted, inCaps }) => {
  let buttonStyles = ["button"];
  let buttonText = ["button"].toUpperCase();

  if (!isSecondary) {
    buttonStyles.push("primary");

  } else {buttonStyles.push("secondary")};

  if (!isInverted) {
      buttonStyles.push(false)};
  else {
      buttonStyles.push("inverted")};

  if (!inCaps) {
      buttonText;


  return <button className={buttonStyles.join(" ")}>{buttonText}</button>;
};

export default Button;
