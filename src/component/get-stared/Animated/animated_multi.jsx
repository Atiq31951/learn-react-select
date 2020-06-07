import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";
import { colourOptions } from "../../../data/SingleSelect";

const animatedComponents = makeAnimated();

export default function AnimatedMulti() {
  return (
    <React.Fragment>
      <p>
        <h1>Animated Multi</h1>
        animated comes with{" "}
        <span style={{ color: "blue" }}>animatedComponents</span> from{" "}
        <span style={{ fontWeight: 'bold' }}>react-select</span>
      </p>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[colourOptions[4], colourOptions[5]]}
        isMulti
        options={colourOptions}
      />
    </React.Fragment>
  );
}
