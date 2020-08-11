const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const markersData = Array.from(
  {
    length: 100,
  },
  (i, j) => j + 1,
).map((i) => ({
  id: i,
  title: `Test title ${i}`,
  description: `Test description ${i}`,
  latLng: {
    latitude: randomInteger(-150, 150),
    longitude: randomInteger(-150, 150),
  },
}));

export default markersData;
