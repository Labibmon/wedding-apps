import {
  FC,
  useState,
  useEffect,
  useRef
} from 'react'
import styles from 'styles/components/VideoPlayer.module.scss'

type VideoPlayerPropType = {
}

const VideoPlayer: FC<VideoPlayerPropType> = ({

}) => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className={styles.container}>
      <video
        playsInline
        loop
        muted
        src='https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/video/home-page.mp4?t=2022-09-06T14%3A54%3A41.067Z'
        title='video'
        className={styles.player}
        ref={videoEl}
      />
    </div>
  )

}

export default VideoPlayer

