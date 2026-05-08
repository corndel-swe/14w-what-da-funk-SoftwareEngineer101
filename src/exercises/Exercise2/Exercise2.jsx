import "./Exercise2.css";

import Button from "../../components/Button/Button";

const Exercise2 = (props) => {
  return (
    <section>
      <h2 class="heading">E2 : Action</h2>
      <div className="button-section">
        <Button buttonText = {"primary"}/>

        <Button buttonText = {"secondary"}
         isSecondary = {true}
         />

        <Button  buttonText={"inverted"}
         isInverted={true}
         />

        <Button  buttonText={"caps"}
          inCaps={true}  />

        <Button
         buttonText={"all props"}
         isSecondary={true}
         isInverted={true}
         inCaps={true}/>
      </div>
    </section>
  );
};

export default Exercise2;
