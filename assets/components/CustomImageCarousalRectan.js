import {StyleSheet, View, Image, useWindowDimensions, Text} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  useAnimatedRef,
} from 'react-native-reanimated';
import Pagination from './Pagination';
const CustomImageCarousalRectan = ({data, autoPlay, pagination}) => {
  const scrollViewRef = useAnimatedRef(null);
  const [newData] = useState([
    {key: 'spacer-left'},
    ...data,
    {key: 'spacer-right'},
  ]);
  const {width} = useWindowDimensions();
  const SIZE = width * 0.5;
  const SPACER = (width - SIZE) / 7;
  const x = useSharedValue(0);
  const offSet = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });

  return (
    <View>
      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={onScroll}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={SIZE}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}>
        {newData.map((item, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const style = useAnimatedStyle(() => {
            const scale = interpolate(
              x.value,
              [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
              [0.9, 1, 0.8],
            );
            return {
              transform: [{scale}],
              backgroundColor :`${item.Cor}`
            };
          });
          if (!item.URL) {
            return <View style={{width: SPACER}} key={index} />;
          }
          return (
            <View style={{width: SIZE}} key={index}>
              <Animated.View style={[styles.imageContainer, style]}>
                <Image src={`${item.URL}`} style={styles.image} />
              </Animated.View>
              <Text style={styles.textTitulo}>{item.Nome}</Text>
            </View>
          );
        })}
      </Animated.ScrollView>
      {pagination && <Pagination data={data} x={x} size={SIZE} />}
    </View>
  );
};

export default CustomImageCarousalRectan;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius : 20,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    overflow :'visible',
    marginLeft:10,
    paddingTop :20,
  },
  textTitulo: {
    textAlign: 'center', 
    fontSize :15,
    color: 'black',
    marginTop: 5,
    fontWeight: "bold"},
 
});
