import { FC } from 'react';
import styles from 'styles/components/Admin.module.scss'
import stylesButton from 'styles/components/Button.module.scss'

type FormAddLinkTypes = {
  open: boolean
  onClose: (open: boolean) => void
}

const FormAddLink: FC<FormAddLinkTypes> = ({
  open,
  onClose,
}) => {

  const handleOnSubmit = (e: any) => {
    e.preventDefault()
    onClose(false)
  }

  return (
    <form
      className={`${styles.formAddLinkContainer} ${open ? 'open' : 'close'}`}
      onSubmit={handleOnSubmit}
    >
      <div
        className={styles.formAddLinkBackground}
        onClick={() => onClose(false)}
      />
      <div className={styles.formAddLinkBody}>
        <div className={styles.formAddLinkHeaderContainer}>
          <h3 className={styles.formAddLinkHeaderTitle}> Buat Link Undangan </h3>
          <button
            type='button'
            className={styles.formAddLinkHeaderClose}
            onClick={() => onClose(false)}
          >close</button>
        </div>
        <div>
          <label
            className={styles.formAddLinkLabel}
          >Masukan nama undangan :</label>
          <input
            type='text'
            className={styles.formAddLinkInput}
            placeholder='Anggi dan Labib...'
          />
           <label
            className={styles.formAddLinkLabel}
          >Tentukan waktu kedatangan</label>
          <select
          className={styles.formAddLinkInput}
          >
            <option>11:00 - 12:00</option>
            <option>12:00 - 13:00</option>
            <option>13:00 - 14:00</option>
          </select>
          <button
            className={stylesButton.btn_primaryLongSmall}
          >Buat Link</button>
        </div>
      </div>
    </form>
  )
}

export default FormAddLink;
