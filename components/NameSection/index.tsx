import { FC } from 'react';
import styles from 'styles/components/NameSection.module.scss'

const NameSection: FC = () => {

  const sectionPerson = ({
    name,
    female,
    father,
    mother,
    photo,
  }) => {
    return (
      <div className={styles.personContainer}>
        <img
          src={photo}
          alt="labib - anggi"
          className={styles.personPhoto}
        />
        <div className={styles.personText}>
          <h3 className={styles.personTitle}>{name}</h3>
          <p className={styles.personDesc}>{female ? 'Putri' : 'Putra'} dari Bpk. {father}, &amp; Ibu {mother}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}><i>Assalamu’alaikum Warahmatullahi Wabarakatuh.</i><br/><br/>Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.<br/>Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri kami:</h3>
      <div></div>
      {sectionPerson({
        name: "Anggi Rizky A. Sugiwarso",
        female: true,
        father: "IPTU Sugiwarso, S. E",
        mother: "Muntianah",
        photo: "https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/sign/photo/anggi.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90by9hbmdnaS5qcGciLCJpYXQiOjE2Njk5MTUxNzYsImV4cCI6MTk4NTI3NTE3Nn0.dgfBJDxV2d_Y2LKx3a0_SMTNVaOMYMu1YlVo-R7YbqA"
      })}
      <h3 className={styles.amp}>&amp;</h3>
      {sectionPerson({
        name: "Mochamad Labib Naufal Ansi",
        female: false,
        father: "Agus Salim NH",
        mother: "Siti Khosidah",
        photo: "https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/sign/photo/labib.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90by9sYWJpYi5qcGciLCJpYXQiOjE2Njk5MTUxOTMsImV4cCI6MTk4NTI3NTE5M30.7THdsoQHcgoHHvy-bAtNqhkqJZORYRdT8V9QvdszXT8"
      })}
    </div>
  )
}

export default NameSection;
