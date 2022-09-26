import React from "react";
import { Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function ProfilePicture(props) {
  const { photo, size } = props;
  return photo === null ? (
    <>Icon</>
  ) : (
    <Image
      style={{ ...styles.image, width: size, height: size }}
      source={{ uri: photo }}
    />
  );
}

ProfilePicture.defaultProps = {
  size: 45,
};
ProfilePicture.propTypes = {
  size: PropTypes.number,
};

const mapStateToProps = state => {
  return {
    photo: state.loginReducer.authUser.user.photo,
  };
};

export default connect(mapStateToProps)(ProfilePicture);

const styles = StyleSheet.create({
  image: {
    borderRadius: 50,
  },
  profileIcon: {},
});
