import React, { useEffect } from 'react';
import { Text, Animated, StyleSheet, Easing, View, Dimensions } from 'react-native';

const AnimationText = () => {
  const width = Dimensions.get('window').width - 40;
  const titleXPos = new Animated.Value(0);
  const titleXPosEase = new Animated.Value(0);
  const titleXPosLinear = new Animated.Value(0);
  const animateTitle = async (direction = 1) => {
    Animated.timing(
      titleXPos,
      {
        toValue: direction * (width / 2),
        duration: 1000,
        useNativeDriver: true,
      }
    ).start(() => {
      animateTitle(-1 * direction);
    });
  };
  const animateEase = async (direction = 1) => {
    Animated.timing(
      titleXPosEase,
      {
        toValue: direction * (width / 2),
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.ease,
      }
    ).start(({ finished }) => {
      if (finished) {
        animateEase(-1 * direction);
      }
    });
  };
  const animateLinear = async (direction = 1) => {
    Animated.timing(
      titleXPosLinear,
      {
        toValue: direction * (width / 2),
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.linear,
      }
    ).start(() => {
      animateLinear(-1 * direction);
    });
  };
  useEffect(() => {
    animateTitle();
    animateEase();
    animateLinear();
  }, []);
  return (
    <View>
      <Animated.View style={[
        styles.AnimationText,
        { transform: [{ translateX: titleXPos }] }
      ]}>
        <Text>
          {width}
        </Text>
      </Animated.View>
      <Animated.View style={[
        styles.AnimationText,
        { transform: [{ translateX: titleXPosEase }] }
      ]}>
        <Text>
          Easing
        </Text>
      </Animated.View>
      <Animated.View style={[
        styles.AnimationText,
        { transform: [{ translateX: titleXPosLinear }] }
      ]}>
        <Text>
          Linear
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  AnimationText: {
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default AnimationText;
