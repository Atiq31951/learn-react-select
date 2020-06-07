import React from 'react';
import './App.css';

import SingleSelect from './component/SingleSelect'
import MultiSelect from './component/get-stared/multi';
import GroupedSingleSelect from './component/get-stared/grouped'
import AnimatedMulti from './component/get-stared/Animated/animated_multi'
import AnimatedSingle from './component/get-stared/Animated/animated_single'
// import CustomeStyleSingleSelect from './component/get-stared/custom-styles/single_select'
// import CustomeStyleMultiSelect from './component/get-stared/custom-styles/multi_select'
import AsyncSelect from './component/get-stared/async/async_single_select'


import DatePicker from './component/Advanced/DatePicker'

import PropsTest from './component/Props/Select-Props/Try'

function App() {
  return (
    <div className="App">
      <SingleSelect />
      <MultiSelect />
      <GroupedSingleSelect />
      <AnimatedMulti />
      <AnimatedSingle />
      {/* <CustomeStyleSingleSelect/> */}
      <AsyncSelect />
      <PropsTest />
      <DatePicker/>
    </div>
  );
}

export default App;
