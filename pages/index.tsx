import Layout from 'components/Layout'
import ArrivalConfirmation from 'components/ArrivalConfirmation'
import useGuest from 'lib/getGuest'
import VideoPlayer from 'components/VideoPlayer'
import OpenInvitation from 'components/OpenInvitation'
import { useState } from 'react'


const MyApp = ({
}) => {
  const { data, isLoading } = useGuest()
  const [openInvitation, setOpenInvitation] = useState<boolean>(true)

  if (isLoading) <>Loading</>

  return (
    <Layout>
      <OpenInvitation
        open={openInvitation}
        onClose={() => setOpenInvitation(false)}
        name="Labib"
      />
      {/* <VideoPlayer /> */}
      {/* <ArrivalConfirmation time={data?.[0]?.time} /> */}
    </Layout >
  )

}

export default MyApp

