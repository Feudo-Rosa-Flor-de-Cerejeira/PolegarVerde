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
const CustomImageCarousal = ({data, autoPlay, pagination}) => {
  const scrollViewRef = useAnimatedRef(null);
  const [newData] = useState([
    {key: 'spacer-left'},
    ...data,
    {key: 'spacer-right'},
  ]);
  const {width} = useWindowDimensions();
  const SIZE = width * 0.6;
  const SPACER = (width - SIZE)/6 ;
  const x = useSharedValue(0);
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
              [0.88, 1, 0.88],
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
                <Image src={item.URL} style={styles.image} />
              </Animated.View>
              <Text style={styles.textTitulo}>{item.Nome}</Text>
              <Text style={styles.textSub}>{item.Subtitulo}</Text>
            </View>
          );
        })}
        
      </Animated.ScrollView>
      
      {pagination && <Pagination data={data} x={x} size={SIZE} />}
    </View>
  );
};

export default CustomImageCarousal;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 18,
    overflow: 'visible'
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 16 / 9,
    overflow: 'visible'
  },
  textTitulo: {
    textAlign: 'left', 
    color: 'black',
    fontSize : 17,
    marginTop: 15,
    marginLeft : 10, 
    fontWeight: "bold"},
  textSub: {
    textAlign: 'left', 
    color: '#1E1E1E',
    fontSize : 10,
    marginLeft : 11, 
    fontWeight: "100"},  
});
