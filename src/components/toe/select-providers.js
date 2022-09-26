import React, { useState } from "react";
import { PROVIDERS } from "../../env";
import PropTypes from "prop-types";
import SelectionWrapper from "./selection-wrapper";
import { Button, MenuItem, OverflowMenu, Text } from "@ui-kitten/components";
import { TlaInput } from "../commons/form/tla-input";
import { connect } from "react-redux";
import { validatePhoneNumber } from "../../utils/helpers";
import { handleCheckCustomer } from "../../actions/common/Actions";
import TlaLoader from "../commons/tla-loader";

const SelectProviders = props => {
  const { selectProviders, phoneNumber, validateCustomer } = props;
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userPhone, setUserPhone] = useState(phoneNumber);
  const [error, setError] = useState(null);
  const [validPhone, setValidPhone] = useState(
    validatePhoneNumber(phoneNumber),
  );
  const [toggleText, setToggleText] = useState("Click to select");

  const renderToggleButton = () => (
    <Button onPress={() => setVisible(true)}>{toggleText}</Button>
  );

  const onItemSelect = index => {
    setVisible(false);
    setLoading(true);
    validateCustomer({
      network: PROVIDERS[index.row],
      msisdn: userPhone,
    })
      .then(res => {
        selectProviders({
          network: PROVIDERS[index.row],
          phoneNumber: userPhone,
          name: res.data.name,
        });
        setLoading(false);
      })
      .catch(err => {
        setError(err.response.data);
        setLoading(false);
      });
    setToggleText(PROVIDERS[index.row]);
  };

  return (
    <SelectionWrapper title={"Network Operator"}>
      <TlaLoader visible={loading} />

      <TlaInput
        icon={"phone-outline"}
        value={userPhone}
        placeholder={"Enter your phone number"}
        onTextChange={val => {
          setValidPhone(validatePhoneNumber(val));
          setUserPhone(val);
          setToggleText("Click to select");
        }}
      />
      {validPhone && (
        <>
          <Text category={"label"}>Select Operator</Text>
          <OverflowMenu
            appearance="noDivider"
            anchor={renderToggleButton}
            visible={visible}
            placement={"bottom start"}
            onSelect={onItemSelect}
            onBackdropPress={() => setVisible(false)}>
            {PROVIDERS.map(provider => (
              <MenuItem key={provider} title={provider} />
            ))}
          </OverflowMenu>
          {error !== null && (
            <Text category={"s1"} status={"danger"}>
              {error.message}
            </Text>
          )}
        </>
      )}
    </SelectionWrapper>
  );
};

SelectProviders.propTypes = {
  selectProviders: PropTypes.func,
  validateCustomer: PropTypes.func,
  phoneNumber: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    phoneNumber: state.loginReducer.authUser.user.phoneNumber,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    validateCustomer: data => dispatch(handleCheckCustomer(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectProviders);
