import React, { useState, useCallback } from "react";
import { Button, StyleSheet, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { responsiveWidth } from "../utils/layout";

export default function VideoPlayer({
    videoId = "iee2TATGMyI"
}) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

//   const togglePlaying = useCallback(() => {
//     setPlaying((prev) => !prev);
//   }, []);

  return (
    <View
        style={styles.videoPlayerContainer}
    >
      <YoutubePlayer
        height={responsiveWidth(93)}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
      />
      {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
    videoPlayerContainer: {
        marginVertical: responsiveWidth(12)
    }
})