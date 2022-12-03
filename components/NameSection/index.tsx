import { FC } from 'react';
import Image from 'next/image'
import styles from 'styles/components/NameSection.module.scss'
import stylesButton from 'styles/components/Button.module.scss'
import Link from 'next/link';

const NameSection: FC = () => {

  const sectionPerson = ({
    name,
    female,
    father,
    mother,
    photo,
    ig
  }) => {
    const myLoader = () => {
      return photo;
    }
    return (
      <div className={styles.personContainer}>
        <div className={styles.personPhoto}>
          <Image
            loader={myLoader}
            src={photo}
            alt="labib - anggi"
            className={styles.personPhoto}
            width={"150px"}
            height={"180px"}
            quality={30}
            layout="responsive"
          />
        </div>
        <div className={styles.personText}>
          <h3 className={styles.personTitle}>{name}</h3>
          <p className={styles.personTitleDesc}>{female ? 'Putri' : 'Putra'} dari</p>
          <p className={styles.personDesc}>{!female && "Bapak"} {father}, &amp; Ibu {mother}</p>
          <Link href={`https://www.instagram.com/${ig}`}  >
            <a target="_blank" className={stylesButton.btn_primarySmall}><span className={styles.igIcon} />&nbsp;&nbsp;{ig}</a>
          </Link>
       </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {/* <img
        src={'https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/sign/photo/Bunga2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90by9CdW5nYTIucG5nIiwiaWF0IjoxNjY5OTIxMzI5LCJleHAiOjE5ODUyODEzMjl9.NkB7hiiSGGQCYrPTQ_mFLEYKClOidKQlVb89v7KxtP4'}
        alt="labib - anggi"
        className={styles.flower}
      /> */}
      <h3 className={styles.title}><i>Assalamu’alaikum Wr. Wb.</i><br /><br />Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.<br />Perkenankanlah kami merangkai kasih sayang yang tercipta di antara putra putri kami:</h3>
      {sectionPerson({
        name: "ANGGI RIZKY A. SUGIWARSO",
        female: true,
        father: "IPTU Sugiwarso, S. E",
        mother: "Muntianah",
        photo: "https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/photo/anggi",
        ig: "anggirizky_"
      })}
      {/* <h3 className={styles.amp}>&amp;</h3> */}
      {sectionPerson({
        name: <>MOCH LABIB N. ANSI</>,
        female: false,
        father: "Agus Salim NH",
        mother: "Siti Khosidah",
        photo: "https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/photo/labib",
        ig: "labibmon"
      })}
    </div>
  )
}

export default NameSection;
