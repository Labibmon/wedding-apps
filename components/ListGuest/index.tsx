import { FC } from 'react'
import { toast } from 'react-toastify'
import styles from 'styles/components/Admin.module.scss'
import stylesButton from 'styles/components/Button.module.scss'
import { AdminDataPropsType } from 'helpers/types/admin-data'

type ListGuestPropsType = {
  data: AdminDataPropsType
  isLoading: boolean
  setPopUpCreateLinkForm: (open: boolean) => void
}

const ListGuest: FC<ListGuestPropsType> = ({
  data,
  setPopUpCreateLinkForm,
  isLoading,
}) => {
  const hostname = typeof window !== 'undefined' && window.location.hostname;

  const handleCopy = (text: string) => {
    navigator?.clipboard?.writeText(text)
    toast.success("Link berhasil di copy");
  }

  if (isLoading) <>Loading</>

  return (
    <div className={styles.listGuestContainer}>
      <div
        className={styles.listGuestHeader}
      >
        <button
          className={stylesButton.btn_primaryLongSmall}
          type="button"
          onClick={() => setPopUpCreateLinkForm(true)}
        >+ Tambah</button>
        <div className={styles.listGuestHeaderInputContainer}>
          <input
            type='text'
            required
            className={styles.formAddLinkInput}
            name="name"
            placeholder='Search...'
          />
          <select
            className={styles.formAddLinkInputFilter}
          >
            <option selected> Semua Waktu</option>
            <option value="11:00 - 12:00">11:00 - 12:00</option>
            <option value="12:00 - 13:00">12:00 - 13:00</option>
            <option value="13:00 - 14:00">13:00 - 14:00</option>
          </select>
        </div>
      </div>
      <div className={styles.listGuestItemsContainer}>
        {data?.data?.map((dataGuest: any, index: number) => (
          <div
            key={index}
            className={styles.listGuestItem}
          >
            <div className={styles.listGuestItemHeader}>
              <label className={styles.listGuestItemName}>{dataGuest?.name}</label>
              <label className={styles.listGuestItemTime}><span className={styles.iconDate} /> {dataGuest?.time} WIB</label>
            </div>
            <div className={styles.listGuestItemLink}>
              <label>{hostname}/{dataGuest?.id}</label>
              <span
                onClick={() => handleCopy(`${hostname}/${dataGuest.id}`)}
                className={styles.listGuestItemLinkIcon}
              />
            </div>
          </div>
        ))}
      </div>

      {/* paggination
      <div>
        <label>Total Items: 10</label>
        <ul>
          <li></li>
        </ul>
      </div> */}
    </div>
  )
}

export default ListGuest;
