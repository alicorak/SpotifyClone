import * as React from "react";
import { StyleSheet, View } from "react-native";

import AlbumCategory from "../components/AlbumCategory/AlbumCategory";

const albumCategory = {
  id: 1,
  title: "Happy Vibes",
  albums: [
    {
      id: "1",
      imageUri:
        "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
      artistsHeadline: "Taylor Swift, Kygo, Lauv, Avicii, James Arthur",
    },
    {
      id: "2",
      imageUri:
        "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
      artistsHeadline: "Taylor Swift, Kygo, Lauv, Avicii, James Arthur",
    },
    {
      id: "3",
      imageUri:
        "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
      artistsHeadline: "Taylor Swift, Kygo, Lauv, Avicii, James Arthur",
    },
    {
      id: "4",
      imageUri:
        "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
      artistsHeadline: "Taylor Swift, Kygo, Lauv, Avicii, James Arthur",
    },
    {
      id: "5",
      imageUri:
        "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
      artistsHeadline: "Taylor Swift, Kygo, Lauv, Avicii, James Arthur",
    },
  ],
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AlbumCategory
        title={albumCategory.title}
        albums={albumCategory.albums}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
