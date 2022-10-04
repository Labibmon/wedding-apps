import { useState } from "react"
import FormAddLink from "components/FormAddLink"
import Layout from "components/Layout"
import useGuest from "lib/getGuest"
import { toast } from 'react-toastify';
import styles from 'styles/components/Admin.module.scss'

const MyApp = ({
}) => {
  const { data, isLoading } = useGuest()
  const [popUpcreateLinkForm, setPopUpCreateLinkForm] = useState<boolean>(false)
  const hostname = typeof window !== 'undefined' && window.location.hostname;

  const handleCopy = (text: string) => {
    navigator?.clipboard?.writeText(text)
    toast.success("Link berhasil di copy");
  }

  if (isLoading) <>Loading</>

  return (
    <Layout
      bgWhite
    >
      <div
        className={styles.container}
      >
        <button
          type="button"
          onClick={() => setPopUpCreateLinkForm(true)}
        >buat link undangan</button>

        <div className={styles.listGuestContainer}>
          {!isLoading ? data?.map((dataGuest: any, index: number) => (
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
          )) : "loading"}
        </div>

        <FormAddLink
          open={popUpcreateLinkForm}
          onClose={setPopUpCreateLinkForm}
        />
      </div>
    </Layout>
  )

}

export default MyApp

