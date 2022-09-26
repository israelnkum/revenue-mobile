import React from "react";
import { Button, Spinner } from "@ui-kitten/components";
import PropTypes from "prop-types";
import { View } from "react-native";
import { white } from "../../../utils/colors";
import { TlaIcon } from "../tla-icon";

export const TlaButton = props => {
  const { text, onPress, loading, type, icon } = props;

  const LoadingIndicator = props => (
    <View style={[props.style, styles.indicator]}>
      <Spinner status={"basic"} size="small" />
    </View>
  );
  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <Button
        status={type}
        accessoryLeft={loading ? LoadingIndicator : <TlaIcon name={icon} />}
        onPress={onPress}
        style={styles.btnLogin}>
        {text}
      </Button>
    </View>
  );
};

TlaButton.defaultProps = {
  loading: false,
  text: "Button",
  type: "primary",
  icon: null,
};

TlaButton.propTypes = {
  onPress: PropTypes.func,
  loading: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
};
const styles = {
  indicator: {
    justifyContent: "center",
    alignItems: "center",
    color: white,
    borderColor: "#fff !important",
  },
};
