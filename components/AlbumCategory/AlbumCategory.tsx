import React from "react";
import { View, Text, FlatList, ProgressBarAndroid } from "react-native";
import { Album } from "../../types";
import AlbumComponent from "../Album/AlbumComponent";
import styles from "./styles";

export type AlbumCategoryProps = {
  title: string;
  albums: [Album];
};

function AlbumCategory(props: AlbumCategoryProps) {
  return (
    <View>
      <Text style={styles.title}>{props.title} </Text>
      <FlatList
        data={props.albums}
        renderItem={({item}) => <AlbumComponent album={item} />}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
}

export default AlbumCategory;
