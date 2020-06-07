import React, { Component, Fragment } from "react";

import Select from "react-select";
import { colourOptions } from "../data/SingleSelect";

export default class SingleSelect extends Component {
  state = {
    isClearable: true,
    isDisabled: false,
    isLoading: false,
    isRtl: false,
    isSearchable: true,
  };

  toggleClearable = () =>
    this.setState((state) => ({ isClearable: !state.isClearable }));
  toggleDisabled = () =>
    this.setState((state) => ({ isDisabled: !state.isDisabled }));
  toggleLoading = () =>
    this.setState((state) => ({ isLoading: !state.isLoading }));
  toggleRtl = () => this.setState((state) => ({ isRtl: !state.isRtl }));
  toggleSearchable = () =>
    this.setState((state) => ({ isSearchable: !state.isSearchable }));
  render() {
    const {
      isClearable,
      isSearchable,
      isDisabled,
      isLoading,
      isRtl,
    } = this.state;
    return (
      <Fragment>
        <Select
          defaultValue={colourOptions[0]}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={isClearable}
          isRtl={isRtl}
          isSearchable={isSearchable}
          name="color"
          options={colourOptions}
        />
      </Fragment>
    );
  }
}
