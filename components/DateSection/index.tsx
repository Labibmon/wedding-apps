import { FC } from 'react';
import Image from 'next/image'
import styles from 'styles/components/DateSection.module.scss'
import stylesButton from 'styles/components/Button.module.scss'
import Link from 'next/link';

type DateSectionPropsType = {
  clock?: string
  setConfirm: () => void
  isConfirm: boolean
}

const DateSection: FC<DateSectionPropsType> = ({
  clock,
  setConfirm,
  isConfirm
}) => {
  const myLoader = (url: string) => {
    return url;
  }

  const photoUrl = [
    'https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/photo/photo1',
    'https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/photo/photo3',
    'https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/photo/photo4',
    'https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/photo/photo5',
    'https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/photo/photo2',
    'https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/photo/photo6',
  ]

  return (
    <div className={styles.container}>
      {/* <div className={styles.overlay}></div> */}
      <div className={styles.content}>
        {/* <div
          className={styles.flowerContainer}
        >
          <div
              className={styles.flower}
          >
            <Image
              loader={() => myLoader(`https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/sign/photo/Bunga1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90by9CdW5nYTEucG5nIiwiaWF0IjoxNjY5OTc5NDQ1LCJleHAiOjE5ODUzMzk0NDV9.ztkMqGzTaeKvyhn0e-pADMg1qWZ4ogNGLFZ5sajKjpY`)}
              src={'https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/sign/photo/Bunga1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90by9CdW5nYTEucG5nIiwiaWF0IjoxNjY5OTc5NDQ1LCJleHAiOjE5ODUzMzk0NDV9.ztkMqGzTaeKvyhn0e-pADMg1qWZ4ogNGLFZ5sajKjpY'}
              alt="labib - anggi"
              className={styles.flower}
              width={"100px"}
              height={100}
              quality={75}
              layout="responsive"
            />
          </div>
        </div> */}
        <h3 className={styles.title}>Dengan memohon rahmad dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan putra putri kami.</h3>
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
            <a target="_blank" className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1980.4614162869268!2d112.0420433!3d-6.8998324!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf5c493c42adf783!2sGedung%20Pertemuan%20Wijaya%20Kusuma%20KSPKP%20Tuban!5e0!3m2!1sid!2sid!4v1670049811275!5m2!1sid!2sid"
                width="100%"
                height="100%"
                scrolling="no"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </a>
          </Link>
          <Link href="https://goo.gl/maps/ZSMSU2JFTygXNWAQ9"  >
            <a target="_blank" className={stylesButton.btn_primaryLongSmall}>Buka Map</a>
          </Link>
          <br />
          <h3>KEHADIRAN</h3>
          <p>Tanpa mengurangi rasa hormat, kami mengundang anda untuk hadir di acara pernikahan kami.</p>
          <button
            onClick={setConfirm}
            className={stylesButton.btn_secondaryLongSmall}>
            {isConfirm ? 'Lihat' : 'Konfirmasi'} Kehadiran
          </button>
          <div className={styles.sectionGalery}>
            <h3>GALLERI KAMI</h3>
          </div>
          <div className={styles.gallery}>
            {photoUrl.map((url, key) => (
              <div
                key={key}
                className={styles.galleryItem}
              >
                <Image
                  loader={() => myLoader(url)}
                  src={url}
                  alt="labib - anggi"
                  // className={styles.flower}
                  width={"100%"}
                  // height={"auto"}
                  quality={30}
                  layout="fill"
                  objectFit='cover'
                  objectPosition="50% 70%"
                  placeholder="blur"
                  blurDataURL={url}
                />
              </div>
            ))}

          </div>
        </div>
      </div>

    </div>
  )
}

export default DateSection;
