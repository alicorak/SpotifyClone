export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  YourLibrary: undefined;
  Premium: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
};

export type SearchParamList = {
  SearchScreen: undefined;
};

export type YourLibraryParamList = {
  YourLibraryScreen: undefined;
};

export type PremiumParamList = {
  PremiumScreen: undefined;
};

export type Album = {
    id: string;
    imageUri: string;
    artistsHeadline: string;
};