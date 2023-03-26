import { useLocation } from "react-router-dom";

const Success = (route) => {
  const state = useLocation();

  const anxiety = state.state.params.anxiety;
  const depressed = state.state.params.depression;
  const suicidal = state.state.params.suicidal;

  const happy =
    anxiety === "Not Anxiety" ||
    depressed === "Not Depressed" ||
    suicidal === "Not Suicidal";
  const sad =
    anxiety === "Moderate Anxiety" ||
    depressed === "Moderate Depressed" ||
    suicidal === "Moderate Suicidal";
  const vSad =
    anxiety === "Anxiety" ||
    depressed === "Depressed" ||
    suicidal === "Suicidal";

  return (
    <div className="result">
      {sad || vSad ? (
        <p>
          Every day may not be good... but there is something good in every day!
        </p>
      ) : (
        "You are already happy"
      )}
    </div>
  );
};

export default Success;
