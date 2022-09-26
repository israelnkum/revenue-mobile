import React from "react";
import { Text } from "@ui-kitten/components";
import PropTypes from "prop-types";
import { View } from "react-native";

export const TlaCaption = props => {
  const { caption } = props;

  return (
    <View>
      <Text status={"danger"} category={"label"}>
        {caption}
      </Text>
    </View>
  );
};

TlaCaption.defaultProps = {
  caption: "",
};

TlaCaption.propTypes = {
  caption: PropTypes.string,
};
