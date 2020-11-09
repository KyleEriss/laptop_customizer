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
  return <>{features}</>;
}

export default Customize;