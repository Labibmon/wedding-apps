import { FC, useCallback } from 'react'
import { toast } from 'react-toastify'
import { AdminDataPropsType } from 'helpers/types/admin-data'

import styles from 'styles/components/Admin.module.scss'
import stylesButton from 'styles/components/Button.module.scss'

type ListGuestPropsType = {
  data: AdminDataPropsType
  isLoading: boolean
  setPopUpCreateLinkForm: (open: boolean) => void
  showAllGuest: boolean
  setShowAllGuest: (open: boolean) => void
  withButtonShowAll?: boolean
  onSearch: (type: string, value: string) => void
}

const ListGuest: FC<ListGuestPropsType> = ({
  data,
  setPopUpCreateLinkForm,
  isLoading,
  showAllGuest,
  setShowAllGuest,
  onSearch,
}) => {
  const hostname = typeof window !== 'undefined' && window.location.hostname;

  const handleCopy = (text: string) => {
    navigator?.clipboard?.writeText(text)
    toast.success("Link berhasil di copy");
  }

  const handleChangeSearch = (e: any) => {
    onSearch('name', e.target.value)
  }

  const handleChangeTime = (e: any) => {
    onSearch('time', e.target.value)
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
            onChange={handleChangeSearch}
            placeholder='Search...'
          />
          <select
            className={styles.formAddLinkInputFilter}
            onChange={handleChangeTime}
          >
            <option selected value=''>Semua Waktu</option>
            <option value="11:00 - 12:00">11:00 - 13:00</option>
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
      {!showAllGuest &&
        <div
          className={styles.buttonShowAllContainer}
        >
          <button
            type='button'
            className={stylesButton.btn_primaryOutlineSmall}
            onClick={() => setShowAllGuest(true)}
          >Show All</button>
        </div>
      }
    </div>
  )
}

export default ListGuest;
