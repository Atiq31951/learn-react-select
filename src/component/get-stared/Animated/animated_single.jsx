import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { colourOptions } from "../../../data/SingleSelect";

const animatedComponents = makeAnimated();

export default function AnimatedMulti() {
  return (
    <React.Fragment>
      <p>
        <h1>Animated SingleSelect</h1>
        Here <span style={{ color: "blue" }}>closeMenuOnSelect</span>to close expanded after selecting option
      </p>
      <Select
        closeMenuOnSelect={true}
        components={animatedComponents}
        defaultValue={colourOptions[4]}
        options={colourOptions}
      />
    </React.Fragment>
  );
}
