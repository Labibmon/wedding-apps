import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import postGuest from 'lib/postGuest';
import styles from 'styles/components/Admin.module.scss'
import stylesButton from 'styles/components/Button.module.scss'

type FormAddLinkTypes = {
  open: boolean
  onClose: (open: boolean) => void
  refetch: () => void
}

const FormAddLink: FC<FormAddLinkTypes> = ({
  open,
  onClose,
  refetch,
}) => {
  const [inputData, setInputData] = useState({
    name: "",
    time: "",
    phone: ""
  })
  const usePostGuest = postGuest();

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setInputData({
      ...inputData,
      [name]: value
    })
  }

  const handleOnSubmit = (e: any) => {
    e.preventDefault()
    usePostGuest.mutate(
      inputData,
      {
        onSuccess: () => {
          toast.success("Data berhasil di simpan");
          setInputData({
            name: "",
            time: "",
            phone: ""
          })
          refetch();
        },
        onError: (err: any) => {
          toast.error('Error', err);
        }
      }
    )
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
            required
            className={styles.formAddLinkInput}
            onChange={handleChange}
            name="name"
            placeholder='Anggi dan Labib...'
          />
          <label
            className={styles.formAddLinkLabel}
          >Masukan nomor hp undangan :</label>
          <input
            type='tel'
            required
            className={styles.formAddLinkInput}
            onChange={handleChange}
            name="phone"
            placeholder='0818238213'
          />
          <label
            className={styles.formAddLinkLabel}
          >Tentukan waktu kedatangan</label>
          <select
            className={styles.formAddLinkInput}
            onChange={handleChange}
            name="time"
            required
          >
            <option disabled selected> -- select an option -- </option>
            <option value="11:00 - 13:00">11:00 - 13:00</option>
            <option value="13:00 - 14:00">13:00 - 14:00</option>
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
