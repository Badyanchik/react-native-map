import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from 'app/constants';

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    justifyContent: 'center',
    height: 35,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    marginLeft: 25,
    marginRight: 25,
    borderBottomColor: COLORS.lightGrey,
    borderStyle: 'solid',
  },
});

export const MarkerListItem = ({ marker }) => (
  <View style={styles.listItem}>
    <Text>{marker.title}</Text>
  </View>
);

export const renderMarkListItem = ({ item }) => <MarkerListItem marker={item} />;

MarkerListItem.propTypes = {
  marker: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};
