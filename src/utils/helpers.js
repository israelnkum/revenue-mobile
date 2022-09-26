export const formatDate = date => {
  return date.toDateString();
};

export const getPayableDates = (startDate, endDate) => {
  const now = startDate.clone();
  const dates = [];

  while (now.isSameOrBefore(endDate)) {
    if (now.day() !== 0 && now.day() !== 6) {
      dates.push(now.format("MM/DD/YYYY"));
    }
    now.add(1, "days");
  }
  return dates;
};

export const validatePhoneNumber = phoneNumber => {
  if (phoneNumber === "" || phoneNumber === null) {
    return false;
  } else {
    return phoneNumber.match(/\d/g).length === 10;
  }
};
