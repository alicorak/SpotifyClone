import React from "react";
import { View, Image, Text } from "react-native";
import { Album } from "../../types";
import styles from "./styles";

export type AlbumProbs = {
  album: Album,
};

function AlbumComponent (props: AlbumProbs) {
  return (
    <View style={styles.container}>
      {/* Album image */}
      <Image
        source={{ uri: props.album.imageUri }}
        style={styles.image}
      ></Image>
      {/* Artist headline */}
      <Text style={styles.text}>{props.album.artistsHeadline}</Text>
    </View>
  );
}

export default AlbumComponent;
