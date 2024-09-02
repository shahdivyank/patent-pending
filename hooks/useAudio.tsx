import { useState, useEffect } from "react";
import { Audio } from "expo-av";

const useAudio = (
  url: string,
): { playing: boolean; play: () => void; pause: () => void } => {
  const [audio, setAudio] = useState<Audio.Sound>();
  const [playing, setPlaying] = useState<boolean>(false);

  const play = () => setPlaying(true);
  const pause = () => setPlaying(false);

  useEffect(() => {
    const load = async () => {
      const { sound: playbackObject } = await Audio.Sound.createAsync(
        { uri: url },
        { shouldPlay: false },
      );

      setAudio(playbackObject);
    };

    if (!audio) load();

    return () => {
      if (audio) audio.unloadAsync();
    };
  }, [url, audio]);

  useEffect(() => {
    if (playing) {
      audio?.playAsync();
    } else {
      audio?.pauseAsync();
    }
  }, [audio, playing]);

  return { playing: playing, play: play, pause: pause };
};

export default useAudio;