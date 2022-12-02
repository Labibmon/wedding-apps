import { FC } from 'react';
import styles from 'styles/components/DateSection.module.scss'
import stylesButton from 'styles/components/Button.module.scss'
import Link from 'next/link';

type DateSectionPropsType = {
  clock?: string
}

const DateSection: FC<DateSectionPropsType> = ({
  clock
}) => {

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div
          className={styles.flowerContainer}
        >
          <img
            src={'https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/sign/photo/Bunga1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90by9CdW5nYTEucG5nIiwiaWF0IjoxNjY5OTc5NDQ1LCJleHAiOjE5ODUzMzk0NDV9.ztkMqGzTaeKvyhn0e-pADMg1qWZ4ogNGLFZ5sajKjpY'}
            alt="labib - anggi"
            className={styles.flower}
          />
        </div>
        <h3 className={styles.title}>Kami memohon do'a restu agar proses pernikahan kami berjalan lancar dan dirahmati oleh Allah SWT.</h3>
        <div className={styles.section}>
          <h3>AKAD NIKAH</h3>
          <h4>Minggu, 11 Desember 2022</h4>
          <p>Pukul 07.30 - 08.30</p>
          <h4>Masjid Al-Mubarok</h4>
          <p>Jl. Mastrip 1, Kec.Tuban, Kab.Tuban, Jawa Timur</p>
        </div>
        <div className={styles.section}>
          <h3>RESEPSI</h3>
          <h4>Minggu, 11 Desember 2022</h4>
          <p>Pukul {clock}</p>
          <h4>Gedung Pertemuan Wijaya Kusuma KSPKP</h4>
          <p>Jl. Dr.Wahidin Sudirohusodo No.77, Kec.Tuban, Kab.Tuban, Jawa Timur</p>
          <Link href="https://goo.gl/maps/ZSMSU2JFTygXNWAQ9"  >
            <a target="_blank" className={stylesButton.btn_primarySmall}>Buka Map</a>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default DateSection;
