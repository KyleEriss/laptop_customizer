import React from "react";
import CustomizeOptions from "./CustomizeOptions";

function Customize(props) {
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;

    return (
      <CustomizeOptions
        key={featureHash}
        featureHash={featureHash}
        name={feature}
        options={props.features[feature]}
        updateFeature={props.updateFeature}
        selected={props.selected}
      />
    );
  });
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  );
}

export default Customize;