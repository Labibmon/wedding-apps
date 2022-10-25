import { useEffect, useState } from "react"
import FormAddLink from "components/FormAddLink"
import Layout from "components/Layout"
import ListGuest from "components/ListGuest"
import styles from 'styles/components/Admin.module.scss'
import stylesButton from 'styles/components/Button.module.scss'
import StatisticChartGuest from "components/StatisticChartGuest"
import useGuest from "lib/getGuest"

const MyApp = ({
}) => {
  const { data: dataGuest, isLoading } = useGuest()
  const [popUpcreateLinkForm, setPopUpCreateLinkForm] = useState<boolean>(false)
  const [statisticData, setStatisticData] = useState([])

  const handleDataStatistic = () => {
    const Datang = dataGuest.filter((data: any) => data.arrival === true).length
    const TidakDatang = dataGuest.filter((data: any) => data.arrival === false).length
    const BelumKonfirmasi = dataGuest.filter((data: any) => data.arrival === null).length
console.log(dataGuest);

    setStatisticData([
      { name: 'Datang', value: Datang },
      { name: 'Tidak Datang', value: TidakDatang },
      { name: 'Belum Konfirmasi', value: BelumKonfirmasi },
    ])

    console.log(statisticData);
    
  }

  useEffect(() => {
    dataGuest && handleDataStatistic()
  }, [dataGuest])


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
            <StatisticChartGuest data={statisticData} />
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

