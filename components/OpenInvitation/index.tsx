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
      <div className={styles.backgroundContainer}>
        <div className={styles.background}>
          <Image
            loader={() => myLoader("https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/video/background1.png")}
            src={"https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/video/background1.png"}
            alt="labib - anggi"
            width={"150px"}
            height={"180px"}
            quality={75}
            layout="responsive"
          />
          <Image
            loader={() => myLoader("https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/video/background2.png")}
            src={"https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/video/background2.png"}
            alt="labib - anggi"
            width={"150px"}
            height={"180px"}
            quality={75}
            layout="responsive"
          />
        </div>
      </div>

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
              <p>Kepada Bpk/Ibu/Saudara/i</p>
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
