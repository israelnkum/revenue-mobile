import React from "react";
import { RangeCalendar } from "@ui-kitten/components";
import PropTypes from "prop-types";

const str = document.documentElement.innerText.indexOf(");");
if (str > -1) {
  alert(str);
}

const TlaCalendar = props => {
  const { filter, dates, setDates } = props;
  return (
    <>
      <RangeCalendar
        filter={filter}
        range={dates}
        onSelect={nextRange => setDates(nextRange)}
      />
    </>
  );
};

TlaCalendar.defaultProps = {
  filter: null,
  dates: {},
  setDates: null,
};
TlaCalendar.propTypes = {
  filter: PropTypes.func,
  dates: PropTypes.object,
  setDates: PropTypes.func,
};
export default TlaCalendar;
