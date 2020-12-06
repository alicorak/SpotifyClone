import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import { Album } from "../../types";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export type AlbumProbs = {
  album: Album;
};

const AlbumComponent = (props: AlbumProbs) => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('AlbumScreen', {id: props.album.id});
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {/* Album image */}
        <Image
          source={{ uri: props.album.imageUri }}
          style={styles.image}
        ></Image>
        {/* Artist headline */}
        <Text style={styles.text}>{props.album.artistsHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AlbumComponent;
