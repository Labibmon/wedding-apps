import { FC, useState } from 'react';
import Link from 'next/link'
import styles from 'styles/components/ArrivalConfirmation.module.scss'
import stylesButton from 'styles/components/Button.module.scss'

type ArrivalConfirmationPropType = {
  time: string
  open: boolean
  onClose: () => void
}

const ArrivalConfirmation: FC<ArrivalConfirmationPropType> = ({
  time,
  open,
  onClose
}) => {
  const [arrival, setArrival] = useState<boolean>()

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    <div
      className={`${styles.container} ${open ? 'open' : 'close'}`}
    >
      {/* <button
        onClick={onClose}
        className={styles.close}
      >X</button> */}
      <div
        className={`${styles.confirmation} ${arrival === undefined ? 'show' : 'hidden'}`}
      >
        {/* <h3 className={styles.title}>Apakah anda akan hadir ke acara ?</h3> */}
        <div className={styles.headerContainer}>
          <div className={styles.header}>
            <button
              type='button'
              className={styles.back}
              onClick={onClose}
            >
              <span className={styles.backIcon} />
            </button>
            <h3 className={styles.formHeaderTitle}>
              Apakah anda akan hadir ke acara ?
            </h3>
          </div>
        </div>


        <div className={styles.descriptionContainer}>
          <label>
            <span className={styles.iconPlace} /> Gedung Wijaya Kusuma,
            <Link href="https://goo.gl/maps/ZSMSU2JFTygXNWAQ9" >
              <a target="_blank">KSPKP Tuban</a>
            </Link>
          </label>
          <label>
            <span className={styles.iconClock} />{time} WIB
          </label>
          <label>
            <span className={styles.iconDate} />11 Desember 2022
          </label>
        </div>
        <div className={styles.button}>
          <button
            className={stylesButton.btn_primaryLongSmall}
            onClick={() => setArrival(true)}
          >HADIR</button>
          <button
            className={stylesButton.btn_secondaryLongSmall}
            onClick={() => setArrival(false)}
          >TIDAK HADIR</button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className={`${styles.form} ${arrival !== undefined ? 'show' : 'hidden'}`}
      >
        <div className={styles.formHeader}>
          <button
            type='button'
            className={styles.back}
            onClick={() => setArrival(undefined)}
          >
            <span className={styles.backIcon} />
          </button>
          <h3 className={styles.formHeaderTitle}>
            Konfirmasi {arrival ? 'Kehadiran' : 'Ketidakhadiran'}
          </h3>
        </div>
        {arrival &&
          <div className={styles.formContainer}>
            <label className={styles.formLabel}>Jumlah Tamu</label>
            <input
              type='number'
              className={styles.formInputText}
              placeholder='0'
              max={10}
              required
            />
          </div>
        }
        <div className={styles.formContainer}>
          <label className={styles.formLabel}>Pesan</label>
          <textarea
            className={styles.formInputArea}
            placeholder='Tulis pesan / ucapan untuk calon pengantin...'
            required
          />
        </div>
        <button
          className={`${styles.buttonSubmit} ${stylesButton.btn_primaryLongSmall}`}
        >KIRIM</button>
      </form>
    </div>
  )
}

export default ArrivalConfirmation;
