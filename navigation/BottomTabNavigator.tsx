import {
  Foundation,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import AlbumScreen from "../screens/AlbumScreen";
import PremiumScreen from "../screens/PremiumScreen";
import SearchScreen from "../screens/SearchScreen";
import YourLibraryScreen from "../screens/YourLibraryScreen";
import {
  BottomTabParamList,
  HomeParamList,
  SearchParamList,
  YourLibraryParamList,
  PremiumParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation
              name="home"
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather
              name="search"
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="YourLibrary"
        component={YourLibraryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="library-music"
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Premium"
        component={PremiumScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="spotify"
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Home Screen Title" }}
      />

      <HomeStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{ headerTitle: "Album Screen Title" }}
      />
    </HomeStack.Navigator>
  );
}

const SearchStack = createStackNavigator<SearchParamList>();

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerTitle: "Search Title" }}
      />
    </SearchStack.Navigator>
  );
}

const YourLibraryStack = createStackNavigator<YourLibraryParamList>();

function YourLibraryNavigator() {
  return (
    <YourLibraryStack.Navigator>
      <YourLibraryStack.Screen
        name="YourLibraryScreen"
        component={YourLibraryScreen}
        options={{ headerTitle: "Your Library Title" }}
      />
    </YourLibraryStack.Navigator>
  );
}

const PremiumStack = createStackNavigator<PremiumParamList>();

function PremiumNavigator() {
  return (
    <PremiumStack.Navigator>
      <PremiumStack.Screen
        name="PremiumScreen"
        component={PremiumScreen}
        options={{ headerTitle: "Premium Screen Title" }}
      />
    </PremiumStack.Navigator>
  );
}
