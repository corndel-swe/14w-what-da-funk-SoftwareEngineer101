import "./Exercise1.css";
import sunrise from "../../assets/images/sunrise.png";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";

const Exercise1 = (props) => {
    const firstName = "Nick";
  const user = { firstName: {firstName}, lastName: "" };
  const currentHour = new Date().getHours();

  let greetingImg;
  let greetingTime;

  if (currentHour < 12) {
    greetingImg = sunrise;
    greetingTime = "Morning,";
  }
  else if (currentHour > 12 && currentHour < 18) {
      greetingImg = sun;
      greetingTime = "Afternoon,";
      }


  return (
    <header className="greeting">
      <img src={greetingImg} className="greeting__img" alt={greetingTime} />
      <h2 className= "greeting__heading"> Good {greetingTime} <br /> {firstName}
      </h2>
    </header>
  );
};

export default Exercise1;
