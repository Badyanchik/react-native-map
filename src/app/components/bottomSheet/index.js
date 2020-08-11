import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import ReanimatedBottomSheet from 'reanimated-bottom-sheet';
import { StyleSheet, View, Dimensions } from 'react-native';
import { COLORS } from 'app/constants';

const SNAP_STEP = 50;
const HEIGHT_LIMIT = 100;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#fff',
  },
  headerMark: {
    width: 40,
    height: 5,
    backgroundColor: COLORS.lightGrey,
    borderRadius: 4,
  },
});

const renderDefaultHeader = () => (
  <View style={styles.header}>
    <View style={styles.headerMark} />
  </View>
);

export const BottomSheet = ({ header, content, ...props }) => {
  const snapPoints = useMemo(() => {
    const screenHeight = Math.round(Dimensions.get('window').height);
    const steps = Array.from(
      {
        length: (screenHeight - HEIGHT_LIMIT) / SNAP_STEP,
      },
      (i, j) => j + 1,
    );
    return steps.map((step) => step * SNAP_STEP);
  }, []);

  return (
    <ReanimatedBottomSheet
      enabledInnerScrolling
      enabledContentGestureInteraction={false}
      snapPoints={snapPoints}
      initialSnap={0}
      renderHeader={header}
      renderContent={content}
      {...props}
    />
  );
};

BottomSheet.propTypes = {
  header: PropTypes.func,
  content: PropTypes.func.isRequired,
};

BottomSheet.defaultProps = {
  header: renderDefaultHeader,
};
