import React from "react";
import Select from "react-select";
import { colourOptions, groupedOptions } from "../../data/SingleSelect";

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center",
};

const formatGroupLabel = (data) => {
  return (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  )
};

export default () => (
  <React.Fragment>
    <p>
      <h1>Grouped select</h1>
      using <span style={{ color: "blue" }}>formatGroupLabel</span>
    </p>
    <Select
      defaultValue={colourOptions[1]}
      options={groupedOptions}
      formatGroupLabel={formatGroupLabel}
    />
  </React.Fragment>
);
