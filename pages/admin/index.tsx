import FormAddLink from "components/FormAddLink"
import Layout from "components/Layout"
import { useState } from "react"
import styles from 'styles/components/Admin.module.scss'

const MyApp = ({
}) => {
  const [popUpcreateLinkForm, setPopUpCreateLinkForm] = useState<boolean>(false)
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
        
        <FormAddLink 
          open={popUpcreateLinkForm}
          onClose={setPopUpCreateLinkForm}
        />
      </div>
    </Layout>
  )

}

export default MyApp

