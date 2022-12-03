import { FC } from 'react';
import Image from 'next/image'
import styles from 'styles/components/EndingCover.module.scss'

type EndingCoverPropsType = {
  clock?: string
}

const EndingCover: FC<EndingCoverPropsType> = ({
  clock
}) => {
  const myLoader = () => {
    return `https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/sign/photo/coverEnding?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90by9jb3ZlckVuZGluZyIsImlhdCI6MTY3MDA1MjYzMywiZXhwIjoxOTg1NDEyNjMzfQ.MBfzQE1e43tvRhwVPWcJRQtntqWeTuOxic6fPWKe52s`;
  }
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>

      <Image
        loader={myLoader}
        src={'https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/sign/photo/coverEnding?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90by9jb3ZlckVuZGluZyIsImlhdCI6MTY3MDA1MjYzMywiZXhwIjoxOTg1NDEyNjMzfQ.MBfzQE1e43tvRhwVPWcJRQtntqWeTuOxic6fPWKe52s'}
        alt="labib - anggi"
        className={styles.photo}
        width={100}
        height={100}
        quality={75}
        layout="fill"
      />
      
      <div className={styles.content}>
        <p className={styles.desc}>Suatu kehormatan dan kebahagiaan bagi kami jika Bapak/Ibu/Saudara/i. Silahkan datang untuk memberikan restu, kami ucapkan terima kasih.</p>
        {/* <p className={styles.date}>11&nbsp;&nbsp;.&nbsp;&nbsp;12&nbsp;&nbsp;.&nbsp;&nbsp;22</p> */}
        <h3 className={styles.name}>Anggi &amp; Labib &nbsp;.</h3>
      </div>
      <div className={styles.snowflakes} aria-hidden="true">
        <div className={styles.snowflake}>
          ❅
        </div>
        <div className={styles.snowflake}>
          ❅
        </div>
        <div className={styles.snowflake}>
          ❆
        </div>
        <div className={styles.snowflake}>
          ❄
        </div>
        <div className={styles.snowflake}>
          ❅
        </div>
        <div className={styles.snowflake}>
          ❆
        </div>
        <div className={styles.snowflake}>
          ❄
        </div>
        <div className={styles.snowflake}>
          ❅
        </div>
        <div className={styles.snowflake}>
          ❆
        </div>
        <div className={styles.snowflake}>
          ❄
        </div>
      </div>
    </div>
  )
}

export default EndingCover;
