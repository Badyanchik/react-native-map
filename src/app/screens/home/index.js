import React, { useCallback, useMemo } from 'react';
import { StyleSheet, View, VirtualizedList } from 'react-native';
import Animated from 'react-native-reanimated';
import { Map, BottomSheet } from 'app/components';
import { renderMarkListItem } from './components';
import markersData from './data';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#fff',
  },
});

const getItem = (data, index) => ({
  id: data[index].id,
  title: data[index].title,
});

export const Home = () => {
  const getItemsCount = useCallback((data) => data.length, []);

  const fall = useMemo(() => new Animated.Value(1), []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          alignItems: 'center',
          opacity: Animated.add(0.5, Animated.multiply(fall, 0.9)),
        }}
      >
        <Map markers={markersData} />
      </Animated.View>
      <BottomSheet
        callbackNode={fall}
        content={() => (
          <View style={styles.container}>
            <VirtualizedList
              data={markersData}
              initialNumToRender={20}
              renderItem={renderMarkListItem}
              keyExtractor={(item) => item.id.toString()}
              getItemCount={getItemsCount}
              getItem={getItem}
            />
          </View>
        )}
      />
    </View>
  );
};
