import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export const Map = ({ markers }) => {
  return (
    <MapView style={styles.container}>
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          coordinate={marker.latLng}
          title={marker.title}
          description={marker.description}
        />
      ))}
    </MapView>
  );
};

Map.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      latLng: PropTypes.shape({ latitude: PropTypes.number, longitude: PropTypes.number })
        .isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
};

Map.defaultProps = {
  markers: [],
};
