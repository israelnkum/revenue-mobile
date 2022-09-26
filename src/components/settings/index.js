import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { white } from "../../utils/colors";
import { connect } from "react-redux";
import { handleLogout } from "../../actions/authenticate/Actions";
import TlaLoader from "../commons/tla-loader";
import ProfilePicture from "../commons/profile-picture";
import { TlaIcon } from "../commons/tla-icon";

const Settings = props => {
  const [loading, setLoading] = useState(false);
  const { navigation, userInfo, logout } = props;

  const navigate = screen => {
    navigation.navigate(screen);
  };
  const initiateLogout = () => {
    setLoading(true);
    logout()
      .then(() => {
        navigate("SignIn");
        return false;
      })
      .catch(() => {
        setLoading(false);
      });
  };
  const icon = <TlaIcon name={"chevron-right-outline"} size={20} />;
  const Title = ({ title }) => <Text style={styles.linkText}>{title}</Text>;

  const Link = ({ title, link, onPress }) => (
    <TouchableOpacity
      style={styles.link}
      onPress={
        onPress ||
        (() => {
          navigate(link);
        })
      }>
      <Title title={title} />
      {icon}
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <TlaLoader visible={loading} />
      <View style={styles.pictureContainer}>
        <ProfilePicture size={100} />
      </View>
      <View style={styles.profileTextContainer}>
        <Text style={styles.profileText}>{userInfo.name}</Text>
      </View>
      <View>
        <Link title={"Profile"} link={"Profile"} />
        {/*<Link title={'Change password'} link={'Profile'} />*/}
        <Link
          title={"Logout"}
          link={"Logout"}
          onPress={() => {
            initiateLogout();
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
  },
  link: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingBottom: 15,
    paddingTop: 15,
    borderColor: "rgba(229,229,229,0.51)",
    borderBottomWidth: 1,
  },
  linkText: {
    color: "#343434",
  },
  pictureContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  profileTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 25,
  },
  profileText: {
    fontSize: 20,
  },
});

const mapStateToProps = state => {
  return {
    userInfo: state.loginReducer.authUser.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(handleLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
