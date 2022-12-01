import { FC } from 'react';
import styles from 'styles/components/CoverSection.module.scss'

const CoverSection: FC = () => {

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <img
        src={'https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/sign/photo/cover.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90by9jb3Zlci5qcGciLCJpYXQiOjE2Njk5MTkzNzksImV4cCI6MTk4NTI3OTM3OX0.uqPwik0ZWuja3Rb23p3DON4Ks-zdHBCjqoEE7ajnkE4'}
        alt="labib - anggi"
        className={styles.photo}
      />
      <div className={styles.content}> 
        <h3 className={styles.name}>Anggi &amp; Labib</h3>
        <p className={styles.desc}><i>The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.</i></p>
        <p className={styles.date}>11 . 12 . 22</p>
      </div>
    </div>
  )
}

export default CoverSection;
