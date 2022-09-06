import GetGuest from '../components/GetGuest'
import Layout from 'components/Layout'
import ArrivalConfirmation from 'components/ArrivalConfirmation'
import useGuest from 'lib/getGuest'
import VideoPlayer from 'components/VideoPlayer'

const MyApp = ({
}) => {
  const { data, isLoading } = useGuest()

  if (isLoading) <>Loading</>

  return (
    <Layout>
      <VideoPlayer />
      <ArrivalConfirmation time={data?.[0]?.time} />
    </Layout >
  )

}

export default MyApp

