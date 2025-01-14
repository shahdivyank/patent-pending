import Tag from "@/components/global/tag";
import Beat from "@/components/global/beat";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ImageBackground,
} from "react-native";
import { useEffect, useState } from "react";
import { beat } from "@/types";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import Icon from "../Icon";
import { useUser } from "@/hooks/useUser";
import { useDrops } from "@/hooks/useDrops";
import { router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import Cancel from "./cancel";
import georandomizer from "@/utils/georandomizer";

const colors = [
  "bg-beatdrop-tag-orange",
  "bg-beatdrop-tag-green",
  "bg-beatdrop-tag-purple",
  "bg-beatdrop-tag-pink",
  "bg-beatdrop-tag-yellow",
];

const visibilities = ["Public", "Friends Only", "My Eyes Only"];

interface props {
  beat: beat;
  handleBack: () => void;
  description: string;
  setDescription: (value: string) => void;
  addTag: (value: string) => void;
  tags: string[];
}

const Details = ({
  beat: { song, artist, image, preview },
  handleBack,
  description,
  setDescription,
  tags,
  addTag,
}: props) => {
  const [tag, setTag] = useState("");
  const [location, setLocation] = useState("");
  const [open, setOpen] = useState(false);
  const [visibility, setVisibility] = useState("Friends Only");
  const [loading, setLoading] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [coordinates, setCoordinates] = useState({
    longitude: 0.0,
    latitude: 0.0,
  });

  const user = useUser((user) => user);
  const { addDrop } = useDrops(({ addDrop }) => ({ addDrop }));

  const handleAdd = () => {
    addTag(tag);
    setTag("");
  };

  const onSubmit = () => {
    const drop = {
      ...user,
      song,
      artist,
      image,
      preview,
      tags: tags,
      description: description,
      comments: [],
      timestamp: new Date(),
      likes: 0,
      location,
      coordinates,
      did: String(Math.random()),
    };

    addDrop(drop);
    setDescription("");
    setTag("");
    handleBack();

    router.replace("/dashboard");
  };

  useEffect(() => {
    const getCurrLocation = async () => {
      setLoading(true);
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLoading(false);
        return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});

      const { latitude: approxLat, longitude: approxLong } = georandomizer(
        latitude,
        longitude,
      );

      setCoordinates({ latitude: approxLat, longitude: approxLong });

      const reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: approxLat,
        longitude: approxLong,
      });

      setLocation(`${reverseGeocode[0].city}, ${reverseGeocode[0].region}`);
      setLoading(false);
    };

    getCurrLocation();
  }, []);

  const [images, setImages] = useState<ImagePicker.ImagePickerAsset[]>([]);

  const handlePromptImage = async () => {
    const response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.1,
      allowsMultipleSelection: true,
      selectionLimit: 3,
    });

    if (response.canceled || !response.assets) {
      return;
    }

    const allImages = [...response.assets, ...images];

    setImages(allImages);
  };

  const handleRemoveImage = (selectedImage: ImagePicker.ImagePickerAsset) => {
    const newImages = images.filter((image) => image.uri !== selectedImage.uri);

    setImages(newImages);
  };

  const handleDiscard = () => {
    setCancel(false);
    setDescription("");
    handleBack();
    setTag("");

    router.replace("/dashboard");
  };

  return (
    <View className="w-full">
      <Cancel
        visible={cancel}
        setVisible={setCancel}
        onSubmit={handleDiscard}
      />

      <View className="h-full w-full gap-4 p-3">
        <View className="flex flex-row items-center justify-between">
          <Icon name="Chevron_Left" size={24} onPress={handleBack} />
          <Text className="text-xl font-semibold">New Beatdrop</Text>
          <Pressable onPress={() => setCancel(true)}>
            <Text>Cancel</Text>
          </Pressable>
        </View>

        <Beat song={song} artist={artist} image={image} preview={preview} />

        <View className="flex h-1/6 flex-row gap-3">
          <Icon name="Text_Align_Left" size={24} />
          <TextInput
            className="h-full w-11/12 pt-0 placeholder:text-beatdrop-placeholder"
            onChangeText={setDescription}
            value={description}
            placeholder="What makes this song so special?"
            keyboardType="default"
            multiline={true}
            blurOnSubmit={true}
            returnKeyType="done"
          />
        </View>

        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-3">
            <Icon name="Map_Pin" size={24} />
            <Text className={loading ? "text-beatdrop-placeholder" : ""}>
              {loading ? "Loading ..." : location}
            </Text>
          </View>
          <Icon name="Close_SM" size={24} />
        </View>

        <Pressable
          onPress={() => setOpen(!open)}
          className="flex flex-row items-center justify-between"
        >
          <View className="flex flex-row items-center gap-3">
            <Icon name="Users" size={24} />
            <Text>{visibility}</Text>
          </View>
          <Icon name="Chevron_Down" size={24} />
        </Pressable>
        {open &&
          visibilities.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setVisibility(item)}
              className={`flex flex-row items-center justify-between text-lg`}
            >
              <Text
                className={`${visibility === item ? "text-beatdrop-primary" : "text-black"}`}
              >
                {item}
              </Text>
              <Icon
                className={`${visibility === item ? "" : "hidden"} absolute right-0`}
                name="Check"
                size={24}
                color="#E12A62"
              />
            </Pressable>
          ))}
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-3">
            <Icon name="Tag" size={24} />
            <TextInput
              className="placeholder:text-beatdrop-placeholder"
              onChangeText={setTag}
              value={tag}
              placeholder="Add Tags"
              keyboardType="default"
            />
          </View>
          <Icon name="Add_Plus" size={24} onPress={handleAdd} />
        </View>
        <View className="mt-2 flex flex-row gap-3">
          {tags.map((tag, index) => (
            <Tag text={tag} color={colors[index]} key={index} />
          ))}
        </View>
        <View className="flex flex-row flex-wrap items-center justify-between gap-2">
          <Icon size={28} name="Camera" />
          <Pressable
            onPress={handlePromptImage}
            className="flex flex-row items-center gap-2 rounded-full border border-[#EFEFEF]"
          >
            <Text className="px-24 py-2 text-center text-xl">
              Upload Photos
            </Text>
          </Pressable>
        </View>
        <ScrollView horizontal>
          {images.map((image) => (
            <ImageBackground
              className="mr-3 h-2/3 w-screen-2/5 overflow-hidden rounded-lg"
              key={image.uri}
              source={image}
              alt="Selected Image"
            >
              <Pressable
                onPress={() => handleRemoveImage(image)}
                className="absolute right-1 top-1 rounded-full bg-black"
              >
                <Icon size={28} name="Close_SM" color="white"></Icon>
              </Pressable>
            </ImageBackground>
          ))}
        </ScrollView>
      </View>

      <Pressable
        onPress={onSubmit}
        className="absolute bottom-4 w-full rounded-full bg-beatdrop-primary py-4"
      >
        <Text className="text-center text-xl text-white">Post Beatdrop</Text>
      </Pressable>
    </View>
  );
};

export default Details;
