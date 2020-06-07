import React, { Component } from "react";

import AsyncSelect from "react-select/async";
import { colourOptions } from "../../../data/SingleSelect";

const filterColors = (inputValue) => {
  return colourOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

// const loadOptions = (inputValue, callback) => {
//   setTimeout(() => {
//     callback(filterColors(inputValue));
//   }, 1000);
// };

const loadOptions = (inputValue) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 2000);
  })
};

export default class WithCallbacksAsync extends Component {
  state = { inputValue: "" };
  handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, "");
    this.setState({ inputValue });
    return inputValue;
  };
  render() {
    return (
      <React.Fragment>
        <p>
          <h1>
            With callback AsyncSelect option
          </h1>
        </p>
        <div>
          <pre>inputValue: "{this.state.inputValue}"</pre>
          <AsyncSelect
            cacheOptions={true}
            loadOptions={loadOptions}
            defaultOptions={() => []}
            closeMenuOnSelect={false}
            // onInputChange={this.handleInputChange}
            isClearable={true}
          />
        </div>
      </React.Fragment>
    );
  }
}
