import { FC } from 'react'
import Image from 'next/image'
import styles from 'styles/components/OpenInvitation.module.scss'
import stylesButton from 'styles/components/Button.module.scss'

type OpenInvitationTypes = {
  name: string
  open: boolean
  onClose: (open: boolean) => void
  withButton: boolean
}

const OpenInvitation: FC<OpenInvitationTypes> = ({
  open,
  name,
  onClose,
  withButton
}) => {
  const myLoader = (url: string) => {
    return url;
  }
  return (
    <div
      className={`${styles.container} ${open ? 'open' : 'close'}`}
    >
      {!open &&
        <div className={styles.backgroundContainer}>
          <div className={styles.background}>
            <Image
              loader={() => myLoader("https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/video/background1.png")}
              src={"https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/video/background1.png"}
              alt="labib - anggi"
              width={"150px"}
              height={"180px"}
              quality={30}
              layout="responsive"
              placeholder="blur"
              blurDataURL='https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/video/background1.png'
            />
            <Image
              loader={() => myLoader("https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/video/background2.png")}
              src={"https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/video/background2.png"}
              alt="labib - anggi"
              width={"150px"}
              height={"180px"}
              quality={30}
              layout="responsive"
              placeholder="blur"
              blurDataURL='https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/video/background2.png'
            />
          </div>
        </div>
      }
      <div className={styles.overlay}></div>
      <Image
        loader={() => myLoader('https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/photo/photoOpen')}
        src={'https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/photo/photoOpen'}
        alt="labib - anggi"
        className={styles.photo}
        width={100}
        height={100}
        quality={30}
        layout="fill"
        objectFit='cover'
        placeholder="blur"
        blurDataURL='https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/photo/photoOpen'
     />
      <div className={styles.body}>
        <div
          className={styles.photo}
        >
          {/* <Image
            loader={() => myLoader("https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/video/photo.png")}
            src="https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/video/photo.png"
            alt="labib - anggi"
            width={"150px"}
            height={"180px"}
            quality={75}
            layout="responsive"
          /> */}
          <div className={styles.name}>
            <h3>Anggi &amp; Labib</h3>
          </div>
        </div>
        {withButton &&
          <div className={styles.content}>
            <div className={styles.text}>
              <p>Kepada Bapak/Ibu/Saudara/i</p>
              <h3>{name}</h3>
              <p>Tanpa mengurangi rasa hormat, kami mengundang anda untuk hadir di acara pernikahan kami.</p>
            </div>
            <button
              className={stylesButton.btn_primaryLong}
              onClick={() => onClose(false)}
            >BUKA UNDANGAN</button>
          </div>
        }
      </div>
    </div>
  )
}

export default OpenInvitation;
