import React from "react";
import { TouchableOpacity } from "react-native";
import { TlaIcon } from "./tla-icon";
import { primary } from "../../utils/colors";

export default function OpenDrawer(props) {
  return (
    <TouchableOpacity onPress={props.toggleDrawer}>
      <TlaIcon color={props.color} name={"menu-outline"}>
        Icon
      </TlaIcon>
    </TouchableOpacity>
  );
}
OpenDrawer.defaultProps = {
  color: primary,
};
