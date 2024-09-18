import LottieView from "lottie-react-native";
import React from "react";

const Loading = () => {
  return (
    <LottieView
      autoPlay
      loop
      style={{
        width: 80,
        height:80,
        alignSelf: "center",
        backgroundColor: "transparent",
      }}
      source={require("../assets/static/loading-animation.json")}
    />
  );
};

export default Loading;
