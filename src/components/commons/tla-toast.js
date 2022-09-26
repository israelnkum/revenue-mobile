import {useEffect} from 'react';
import {ToastAndroid} from 'react-native';
import PropTypes from 'prop-types';

const TlaToast = ({visible, setVisible, message}) => {
  useEffect(() => {
    setVisible(false);
    console.log(message, 'after');
  }, [visible]);

  return (
    visible &&
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    )
  );
};

TlaToast.propTypes = {
  message: PropTypes.string,
};
export default TlaToast;
