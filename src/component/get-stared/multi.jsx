import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";
import { colourOptions } from "../../data/SingleSelect";

const animatedComponents = makeAnimated();

export default function AnimatedMulti() {
  return (
    <React.Fragment>
      <div>
        <h1>MultiSelect</h1>
        <p>
          If <span style={{ color: "blue" }}>isMulti</span> is passed with true then the dropdown will be converted to Multiselect
        </p>
      </div>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[colourOptions[4], colourOptions[5]]}
        isMulti={false}
        options={colourOptions}
      />
    </React.Fragment>
  );
}
