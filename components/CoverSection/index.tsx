import { FC } from 'react';
import Image from 'next/image'
import styles from 'styles/components/CoverSection.module.scss'

const CoverSection: FC = () => {
  const myLoader = () => {
    return `https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/photo/cover`;
  }
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <Image
        loader={myLoader}
        src={'https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/photo/cover'}
        alt="labib - anggi"
        className={styles.photo}
        width={100}
        height={100}
        quality={75}
        layout="fill"
      />
      <div className={styles.content}>
        <h3 className={styles.name}>Anggi &amp; Labib</h3>
        <p className={styles.desc}><i>The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.</i></p>
        <p className={styles.date}>11&nbsp;&nbsp;.&nbsp;&nbsp;12&nbsp;&nbsp;.&nbsp;&nbsp;22</p>
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

export default CoverSection;
