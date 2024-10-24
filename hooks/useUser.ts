import { ImageSource } from "expo-image";
import { create } from "zustand";

interface User {
  uid: string;
  username: string;
  name: string;
  bio: string;
  beatdrops: number;
  photo: ImageSource;
  followers: number;
  following: number;
  email: string;
  dummyPassword: string;
  postActivity: boolean;
  friendPosts: boolean;
  taggedPosts: boolean;
  setAttribute: (attribute: string, value: any) => void; // Updated to `any` to allow more flexible types
  resetAttributes: () => void;
  setAllUndefined: () => void;
}

// Define the initial state for resetting purposes
const initialState: Omit<
  User,
  "setAttribute" | "resetAttributes" | "setAllUndefined"
> = {
  uid: "divyankshah",
  username: "divyank.shah",
  name: "Divyank Shah",
  bio: "This is a quick bio",
  beatdrops: 134,
  photo: {
    uri: "https://media.licdn.com/dms/image/C5603AQGGCb3sfU37yw/profile-displayphoto-shrink_200_200/0/1643607680906?e=2147483647&v=beta&t=3O3YNLDDQJ8kjWiFRtLQJRR-gj5JRN6hd6eerzGHdnY",
  },
  followers: 21,
  following: 21,
  email: "webdiv@gmail.com",
  dummyPassword: "password",
  postActivity: true,
  friendPosts: true,
  taggedPosts: true,
};

export const useUser = create<User>()((set) => ({
  // Initial state
  ...initialState,

  // Function to set a specific attribute
  setAttribute: (attribute: string, value: any) =>
    set((state) => ({ ...state, [attribute]: value })),

  // Function to reset all attributes back to their initial values
  resetAttributes: () => set(() => ({ ...initialState })),

  // Function to set all attributes to `undefined`
  setAllUndefined: () =>
    set(() => ({
      uid: undefined,
      username: undefined,
      name: undefined,
      bio: undefined,
      beatdrops: undefined,
      photo: { uri: undefined },
      followers: undefined,
      following: undefined,
      email: undefined,
      dummyPassword: undefined,
      postActivity: undefined,
      friendPosts: undefined,
      taggedPosts: undefined,
    })),
}));
