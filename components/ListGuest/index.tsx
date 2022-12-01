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
    const message: string = `Untuk%20${name}%2C%20%0A%0AAssalamu'alaikum%20Warahmatullah%20Wabarakatuh%0ABismillahirahmanirrahim.%0A%0ASebelumnya%20kami%20meminta%20maaf%20karena%20mengabarkan%20berita%20bahagia%20hanya%20melalui%20pesan%20singkat.%0A%0ASuatu%20kehormatan%20dan%20kebahagiaan%20bagi%20kami%2C%20apabila%20Saudara%2Fi%20berkenan%20memberikan%20doa%20restu%20serta%20menghadiri%20pernikahan%20kami%3A%0A%0A%E2%9C%A8%20Anggi%20Rizky%20Ayuningtyas%20S%20%26%20M%20Labib%20Naufal%20Ansi%20%E2%9C%A8%0A%0A%F0%9F%93%A9%20Klik%20tautan%20untuk%20menuju%20undangan%20digitalmu%20%3A%20%0A%0Ahttp%3A%2F%2F${hostname}%2F${id}%2F%0A%0AJangan%20lupa%20mengisi%20Ucapan%20dan%20Konfirmasi%20Kehadiran%20di%20bagian%20Kirimkan%20Pesan%20ya.%0A%0ATerimakasih%20banyak%20atas%20doa%20dan%20restunya.%E2%9C%A8%0A%0ANb%20%3A%20Dikarenakan%20jumlah%20undangan%20yang%20terbatas%2C%20Kami%20mohon%20agar%20undangan%20ini%20tidak%20disebarluaskan%20tanpa%20sepengetahuan%20kami%0A%0AWassalamu'alaikum%20Warahmatullah%20Wabarakatuh%0A%0ADari%20kami%20yang%20berbahagia%2C%F0%9F%8C%B9%0AAnggi%20%26%20Labib`
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
              <div>
                <span
                  onClick={() => handleCopy(`${hostname}/${dataGuest.id}`)}
                  className={styles.listGuestItemLinkIcon}
                />

                <span
                  onClick={() => handleGenerateLinkWhatsapp('+6281395204843', dataGuest?.name, dataGuest?.id)}
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
