import { useState, useRef, useEffect } from "react";
import s from "./MusicPlayer.module.css";
import Audio from "../../assets/sound/corporate-project-no-copyright-advertising-212472.mp3";
import { SiYoutubemusic } from "react-icons/si";
import { FaRegCirclePause } from "react-icons/fa6";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      const playAudio = async () => {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.error("Автовідтворення заблоковано браузером:", error);
          setIsPlaying(false);
        }
      };

      playAudio();
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    audioRef.current.volume = e.target.value;
  };

  return (
    <div className={s.player}>
      <audio ref={audioRef} src={Audio} loop />
      <button className={s.button} onClick={handlePlayPause}>
        {isPlaying ? (
          <FaRegCirclePause size="10" />
        ) : (
          <SiYoutubemusic size="10" />
        )}
      </button>
      <input
        className={s.volume}
        type="range"
        min="0"
        max="1"
        step="0.01"
        onChange={handleVolumeChange}
      />
    </div>
  );
};

export default MusicPlayer;
