import { FC } from 'react'
import { useRouter } from 'next/router'
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
  const router = useRouter()
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

  const handleGenerateLinkWhatsapp = (phone: string, name: string, id: string) => {
    //link todo
    const message: string = `Assalamu%E2%80%99alaikum%20Wr.%20Wb.%0A%0AKepada%20Yth.%20%0ABapak%2FIbu%2FSaudara%2Fi%20%0A${name}%0A%0ADengan%20memohon%20rahmat%20dan%20ridho%20Allah%20SWT%2C%20tanpa%20mengurangi%20rasa%20hormat%2C%20kami%20bermaksud%20mengundang%20Bapak%2FIbu%2FSaudara%2Fi%20untuk%20menghadiri%20acara%20resepsi%20pernikahan%20putra%20putri%20kami%20%3A%20%0A%0AAnggi%20Rizky%20A.%20Sugiwarso%20%0APutri%20pertama%20dari%20IPTU%20Sugiwarso%2C%20S.%20E.%20%26%20Ibu%20Muntianah%0A%0Adengan%20%0A%0AMochamad%20Labib%20Naufal%20Ansi%0APutra%20ketiga%20dari%20Bapak%20Agus%20Salim%20NH%20%26%20Ibu%20Siti%20Khosidah%0A%0ASilahkan%20klik%20link%20di%20bawah%20ini%20untuk%20info%20lengkap%20dari%20acara%20kami%20%3A%0A${hostname}%2Finvitation%2F${id}%0A%0AMerupakan%20suatu%20kebahagiaan%20bagi%20kami%20apabila%20Bapak%2FIbu%2FSaudara%2Fi%20berkenan%20untuk%20hadir%20dan%20memberikan%20doa%20restu%0A%0AMohon%20maaf%20karena%20mengabarkan%20berita%20bahagia%20melalui%20pesan%20singkat%0A%0ATerima%20kasih%20banyak%20atas%20perhatian%20dan%20kehadirannya%0A%0AWassalamu%27alaikum%20Wr.%20Wb.`
  
    const urlWhatsapp: string = `https://wa.me/${phone}?text=${message}&lang=id`

    window.open(urlWhatsapp, '_ blank')
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
            <option value="11:00 - 13:00">11:00 - 13:00</option>
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
              <label>{hostname}/invitation/{dataGuest?.id}</label>
              <div>
                <span
                  onClick={() => handleCopy(`${hostname}/invitation/${dataGuest.id}`)}
                  className={styles.listGuestItemLinkIcon}
                />

                <span
                  onClick={() => handleGenerateLinkWhatsapp(dataGuest?.phone, dataGuest?.name, dataGuest?.id)}
                  className={styles.listGuestItemLinkIconWhatsapp}
                />
              </div>
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
