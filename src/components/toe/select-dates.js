import React, { useState } from "react";
import PropTypes from "prop-types";
import SelectionWrapper from "./selection-wrapper";
import TlaCard from "../commons/tla-card";
import { Text } from "react-native";
import { RangeCalendar } from "@ui-kitten/components";

const SelectDates = props => {
  const { dates, setDates } = props;
  const [loading, setLoading] = useState(false);
  const filter = date => date.getDay() !== 0 && date.getDay() !== 6;

  return (
    <SelectionWrapper loading={loading}>
      <TlaCard style={{ backgroundColor: "transparent", marginTop: 20 }}>
        <Text>Select Dates</Text>
        <RangeCalendar
          filter={filter}
          range={dates}
          onSelect={nextRange => setDates(nextRange)}
        />
      </TlaCard>
    </SelectionWrapper>
  );
};

SelectDates.defaultProps = {
  dates: {},
  setDates: null,
};
SelectDates.propTypes = {
  dates: PropTypes.object,
  setDates: PropTypes.func,
};

export default SelectDates;
