import { useState } from "react"
import FormAddLink from "components/FormAddLink"
import Layout from "components/Layout"
import ListGuest from "components/ListGuest"
import styles from 'styles/components/Admin.module.scss'
import stylesButton from 'styles/components/Button.module.scss'

const MyApp = ({
}) => {
  const [popUpcreateLinkForm, setPopUpCreateLinkForm] = useState<boolean>(false)
  const [tabMenu, setTabMenu] = useState<"STATISTIK" | "LIST">("STATISTIK")

  return (
    <Layout
      bgWhite
    >
      <div
        className={styles.container}
      >

        <div className={styles.tabHeader}>
          <button
            className={`
              ${styles.tabHeaderButton} 
              ${tabMenu === "STATISTIK" ? 'active' : ''
              }`}
            onClick={() => setTabMenu("STATISTIK")}
          >Statistik</button>
          <button
            className={`
              ${styles.tabHeaderButton} 
              ${tabMenu === "LIST" ? 'active' : ''
              }`}
            onClick={() => setTabMenu("LIST")}
          >List Undangan</button>
        </div>

        <div className={styles.tabBody}>
          {tabMenu === "STATISTIK" ?
            <div
              className={styles.statistikContainer}
            >
              <div
                className={`${styles.statistikContainerItems} total`}
              >
                <label>0</label>
                <label>Total Undangan</label>
              </div>
              <div
                className={`${styles.statistikContainerItems} arrival`}
              >
                <label>0</label>
                <label>Total Kehadiran</label>
              </div>
              <div
                className={`${styles.statistikContainerItems} noarrival`}
              >
                <label>0</label>
                <label>Total Tidak Hadir</label>
              </div>
              <div
                className={`${styles.statistikContainerItems} noconfirm`}
              >
                <label>0</label>
                <label>Total Belum Konfirmasi</label>
              </div>
            </div>
            :
            <ListGuest
              setPopUpCreateLinkForm={setPopUpCreateLinkForm}
            />
          }

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

