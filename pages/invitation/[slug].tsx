import { FC, useState } from 'react'
import Layout from 'components/Layout'
// import ArrivalConfirmation from 'components/ArrivalConfirmation'
// import useGuest from 'lib/getGuest'
// import VideoPlayer from 'components/VideoPlayer'
import OpenInvitation from 'components/OpenInvitation'
import useGuest from 'lib/getGuest'
import NameSection from 'components/NameSection'
import styles from 'styles/components/Invitation.module.scss'
import DateSection from 'components/DateSection'

interface InvitationPageProps {
  slug?: string
}

const InvitationPage: FC<InvitationPageProps> = ({
  slug
}) => {
  // const { data, isLoading } = useGuest()
  const [openInvitation, setOpenInvitation] = useState<boolean>(true)
  const {
    data: dataGuest,
    isLoading,
  } = useGuest({ id: slug, totalDisplayItems: 10 })

  if (isLoading) <>Loading</>
  return (
    <Layout>
      <OpenInvitation
        withButton={dataGuest?.data?.length}
        open={openInvitation}
        onClose={() => setOpenInvitation(false)}
        name={dataGuest?.data?.[0]?.name}
      />
      {!openInvitation &&
        <div className={styles.container}>
          <div className={styles.content}>
            <NameSection />
            <DateSection />
          </div>
        </div>

      }
      {/* <VideoPlayer /> */}
      {/* <ArrivalConfirmation time={data?.[0]?.time} /> */}
    </Layout >
  )

}

export async function getServerSideProps({
  params,
}) {
  const { slug } = params;

  return {
    props: {
      slug
    }
  }
}

export default InvitationPage

