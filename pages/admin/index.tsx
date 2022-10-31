import { useState } from "react"
import FormAddLink from "components/FormAddLink"
import Layout from "components/Layout"
import ListGuest from "components/ListGuest"
import styles from 'styles/components/Admin.module.scss'
import StatisticChartGuest from "components/StatisticChartGuest"
import useGuest from "lib/getGuest"
import useStatisticGuest from "lib/getStatisticGuest"

const MyApp = ({
}) => {
  const {
    data: dataGuest,
    isLoading
  } = useGuest()
  const {
    data: dataStatistic,
    isLoading: isLoadingStatistic
  } = useStatisticGuest()
  const [popUpcreateLinkForm, setPopUpCreateLinkForm] = useState<boolean>(false)

  return (
    <Layout
      bgWhite
      isAdmin
    >
      <div
        className={styles.container}
      >
        <div className={styles.header}>
          <div
            className={styles.statistikContainer}
          >
            <div
              className={styles.statistikHeader}
            >
              {/* <span>icon</span> */}
              <h3>Statistik Tamu</h3>
            </div>
            {isLoadingStatistic ? 'loading'
              :
              <StatisticChartGuest data={dataStatistic} />
            }
          </div>
          <div
            className={styles.detailWedding}
          >
            <div
              className={styles.detailHeader}
            >
              {/* <span>icon</span> */}
              <h3>Detail Acara</h3>
            </div>

          </div>
        </div>
        <div className={styles.tabBody}>
          <ListGuest
            data={dataGuest}
            isLoading={isLoading}
            setPopUpCreateLinkForm={setPopUpCreateLinkForm}
          />
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

