import React from "react";
import { Input } from "@ui-kitten/components";
import { TlaIcon } from "../tla-icon";
import PropTypes from "prop-types";
import { TouchableWithoutFeedback } from "react-native";
import { TlaCaption } from "../tla-caption";

export const TlaInput = props => {
  const [revealPassword, setRevealPassword] = React.useState(true);
  const {
    icon,
    placeholder,
    isPasswordInput,
    onTextChange,
    value,
    helpingText,
    label,
  } = props;

  const togglePassword = () => {
    setRevealPassword(!revealPassword);
  };

  const revealPasswordIcon = props => (
    <TouchableWithoutFeedback onPress={togglePassword}>
      <TlaIcon {...props} name={revealPassword ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  return (
    <Input
      label={label}
      caption={<TlaCaption caption={helpingText} />}
      style={styles.inputStyle}
      accessoryLeft={icon ? <TlaIcon name={icon} /> : null}
      placeholder={placeholder}
      value={value}
      secureTextEntry={isPasswordInput && revealPassword}
      accessoryRight={isPasswordInput ? revealPasswordIcon : null}
      onChangeText={onTextChange}
    />
  );
};

TlaInput.defaultProps = {
  isPasswordInput: false,
};
TlaInput.propTypes = {
  isPasswordInput: PropTypes.bool,
  onTextChange: PropTypes.func,
  value: PropTypes.string,
  icon: PropTypes.string,
};
const styles = {
  inputStyle: {
    marginBottom: 10,
  },
  labelStyle: {
    fontSize: 18,
    color: "#737373",
    paddingBottom: 10,
    fontFamily: "System",
    position: "relative",
    ":after": {
      content: "* ",
      left: 5,
      top: 0,
      color: "red",
    },
  },
};
