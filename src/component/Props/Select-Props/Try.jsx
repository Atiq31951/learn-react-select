import React, { Component, Fragment } from "react";
import Select from "react-select";
import Async from "react-select/async";
import { colourOptions } from "../../../data/SingleSelect";

export default class PropsTest extends Component {
  state = {
    inputValue: "",
    selectedOption: null,
  };

  filterColors = (inputValue) => {
    return colourOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  handleOnSlectedItems = (value) => {
    this.setState({
      ...this.state,
      selectedOption: value,
    });
  };

  handleInputValue = (value) => {
    this.setState({
      inputValue: value,
    });
  };

  loadOptionsAsync = (inputValue) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.filterColors(inputValue));
      }, 2000);
    });
  };

  loadOptions = (inputValue) => {
    return this.filterColors(inputValue);
  };

  retComp = (option) => {
    console.log("Options ===> ", option);
    return <div>Hello</div>;
  };

  setOptionDisabled = (option) => {
    return option.label.includes('ed') ? false : true
 };

  render() {
    const className = {
      width: "130px",
    };

    return (
      <Fragment>
        <p>
          <h1>Select Props examples</h1>
        </p>
        <Select
          onInputChange={(value) => this.handleInputValue(value)}
          options={colourOptions}
          autoFocus={true}
          blurInputOnSelect={true}
          className={className}
          isOptionSelected={(option) => this.handleOnSlectedItems(option)}
          isMulti={true}
          closeMenuOnSelect={false}
          controlShouldRenderValue={true}
          hideSelectedOptions={true}
          isDisabled={false}
          isLoading={true}
          isOptionDisabled={(option) => this.setOptionDisabled(option)}
          isSearchable={true}
          loadingMessage={"Please wait ... "}
          minMenuHeight={3}
          menuIsOpen={false}
          menuShouldBlockScroll={false}
          menuShouldScrollIntoView={true}
          Component={(option) => this.retComp(option)}
        />
      </Fragment>
    );
  }
}
