import "./Button.css";

const Button = ({ isSecondary, isInverted, inCaps, buttonText }) => {
  let buttonStyles = ["button"];


  if (!isSecondary) {
    buttonStyles.push("primary");

  } else {buttonStyles.push("secondary")

      }

  if (!isInverted) {
      buttonStyles.push("")
      }
  else {
      buttonStyles.push("inverted")
      }

  let displayText;


  if (inCaps) {
     displayText = buttonText.toUpperCase()
     }
 else {
     displayText = buttonText
     }




  return <button className={buttonStyles.join(" ")}>{buttonText}</button>;
};

export default Button;
