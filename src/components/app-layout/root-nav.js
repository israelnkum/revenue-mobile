import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNav from "./auth-nav";
import AppStackNav from "./app-stack-nav";
import { connect } from "react-redux";

const RootNav = props => {
  const { authenticated } = props;

  return (
    <>
      <NavigationContainer>
        {authenticated ? <AppStackNav /> : <AuthNav />}
      </NavigationContainer>
    </>
  );
};

const mapStateToProps = state => {
  return {
    authenticated: state.loginReducer.authenticated,
    bearerToken: state.loginReducer.bearerToken,
  };
};

export default connect(mapStateToProps, null)(RootNav);
