import { FC, useState } from 'react';
import styles from 'styles/components/ArrivalConfirmation.module.scss'
import stylesButton from 'styles/components/Button.module.scss'

const ArrivalConfirmation: FC = () => {
  const [arrival, setArrival] = useState<boolean>()

  return (
    <div className={styles.container}>
      <div
        className={`${styles.confirmation} ${arrival === undefined ? 'show' : 'hidden'}`}
      >
        <h3 className={styles.title}>Apakah anda akan hadir ke acara ?</h3>
        <div className={styles.descriptionContainer}>
          <label>
            <span className={styles.iconPlace} />
            <span></span>Kabupaten Tuban (Gedung KSPKP)
          </label>
          <label>
            <span className={styles.iconClock} />11:00 WIB
          </label>
          <label>
            <span className={styles.iconDate} />11 Desember 2022
          </label>
        </div>
        <div className={styles.button}>
          <button
            className={stylesButton.btn_primary}
            onClick={() => setArrival(true)}
          >HADIR</button>
          <button
            className={stylesButton.btn_secondary}
            onClick={() => setArrival(false)}
          >TIDAK HADIR</button>
        </div>
      </div>

      <form
        className={`${styles.form} ${arrival !== undefined ? 'show' : 'hidden'}`}
      >
        <button
          type='button'
          className={styles.back}
          onClick={() => setArrival(undefined)}
        >back</button>
        <label className={styles.formLabel}>
          <span>Pesan</span>
          <textarea />
        </label>
      </form>
    </div>
  )
}

export default ArrivalConfirmation;
