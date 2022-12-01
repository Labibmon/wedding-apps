import { FC } from 'react'
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
  return (
    <div
      className={`${styles.container} ${open ? 'open' : 'close'}`}
    >
      <div className={styles.backgroundContainer}>
        <div className={styles.background}>
          <img
            src="https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/video/background1.png"
            alt="labib - anggi"
          />

          <img
            src="https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/video/background2.png"
            alt="labib - anggi"
          />
        </div>
      </div>

      <div className={styles.body}>
        <div
          className={styles.photo}
        >
          <img
            src="https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/video/photo.png"
            alt="labib - anggi"
          />
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
