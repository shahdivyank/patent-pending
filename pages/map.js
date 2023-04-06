import React, { useContext, useEffect, useState } from "react";
import Overlay from "@/components/Overlay";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import axios from "axios";
import PublicDropsContext from "@/components/PublicDropsContext";

const Map = () => {
  const [uid, setUID] = useState("");
  const [privateSongs, setPrivateSongs] = useState([]);
  const [token, setToken] = useState("");
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [zoom] = useState(15);
  const { publicDrops } = useContext(PublicDropsContext);

  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState !== null) {
        setUID(currentState.uid);
        const response = await axios.post("/api/getToken");
        setToken(response.data);
        // axios
        //   .post("/api/getPublicDrops", { token: response.data })
        //   .then((response) => setPublicSongs(response.data))
        //   .catch((error) => console.log(error));

        axios
          .post("/api/getPrivateDrops", {
            uid: currentState.uid,
            token: response.data,
          })
          .then((response) => setPrivateSongs(response.data))
          .catch((error) => console.log(error));
      }
    });
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  }, []);

  return (
    <div className="w-full bg-purple-500">
      <title>Map</title>
      {privateSongs && console.log(privateSongs)}
      {publicDrops && console.log("MAP PAGE", publicDrops)}

      <div className="relative top-0 right-0 ">
        {uid && lat && lng && (
          <Overlay
            uid={uid}
            privateSongs={privateSongs}
            zoom={zoom}
            lat={lat}
            lng={lng}
            token={token}
          />
        )}
      </div>
    </div>
  );
};

export default Map;
