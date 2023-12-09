import {StyleSheet, View, Image, useWindowDimensions, Text} from 'react-native';
import React, {useState,useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  useAnimatedRef,
} from 'react-native-reanimated';
import Pagination from './Pagination';


const CustomImageCarousal = ({data,pagination}) => {
  const [dataDb,setData] = useState(data)
  const [newData,setNewData] = useState([{key: 'spacer-left'},
  ...data,
  {key: 'spacer-right'},]);
  const scrollViewRef = useAnimatedRef(null);
  const {width} = useWindowDimensions();
  const SIZE = width * 0.45;
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
              backgroundColor :'#07261b'
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
    borderTopLeftRadius: 55,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 55,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  textTitulo: {
    textAlign: 'left', 
    color: 'black',
    marginTop: 5,
    marginLeft : 10, 
    fontWeight: "bold"},
  textSub: {
    textAlign: 'left', 
    color: 'black',
    marginLeft : 10, 
    fontWeight: "200"}, 
});
