import { useCallback, useState } from "react"
import debounce from 'lodash/debounce'

import useGuest from "lib/getGuest"
import useStatisticGuest from "lib/getStatisticGuest"
import FormAddLink from "components/FormAddLink"
import Layout from "components/Layout"
import ListGuest from "components/ListGuest"
import DetailEvent from "components/DetailEvent"
import StatisticChartGuest from "components/StatisticChartGuest"

import styles from 'styles/components/Admin.module.scss'

const MyApp = ({
}) => {
  const {
    data: dataStatistic,
    isLoading: isLoadingStatistic,
    refetch: refetchStatistic
  } = useStatisticGuest()
  const [showAllGuest, setShowAllGuest] = useState<boolean>(false)
  const [params, setParams] = useState({
    totalDisplayItems: showAllGuest ? dataStatistic.totalItems - 1 : 9,
  })

  const {
    data: dataGuest,
    isLoading,
    refetch: refetchGuest
  } = useGuest(params)

  const [popUpcreateLinkForm, setPopUpCreateLinkForm] = useState<boolean>(false)

  const handleSearch = async (type: string, value: string) => {
    await setParams({
      ...params,
      [type]: value
    })
    debounceFetchGuest()
  }

  const debounceFetchGuest = useCallback(
    debounce(
      () => {
        refetchGuest()
      },
      500
    ),
    []
  )

  const handleRefetchAll = () => {
    refetchStatistic()
    refetchGuest()
  }

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
            <DetailEvent />
          </div>
        </div>
        <div className={styles.tabBody}>
          <ListGuest
            data={dataGuest}
            isLoading={isLoading}
            setPopUpCreateLinkForm={setPopUpCreateLinkForm}
            showAllGuest={showAllGuest}
            setShowAllGuest={setShowAllGuest}
            onSearch={handleSearch}
          />
        </div>

        <FormAddLink
          open={popUpcreateLinkForm}
          onClose={setPopUpCreateLinkForm}
          refetch={handleRefetchAll}
        />
      </div>
    </Layout>
  )

}

export default MyApp

