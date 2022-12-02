import { FC, useEffect, useState } from 'react'
import Layout from 'components/Layout'
// import ArrivalConfirmation from 'components/ArrivalConfirmation'
// import useGuest from 'lib/getGuest'
// import VideoPlayer from 'components/VideoPlayer'
import OpenInvitation from 'components/OpenInvitation'
import useGuest from 'lib/getGuest'
import NameSection from 'components/NameSection'
import DateSection from 'components/DateSection'
import CoverSection from 'components/CoverSection'

import styles from 'styles/components/Invitation.module.scss'

interface InvitationPageProps {
  slug?: string
}

const InvitationPage: FC<InvitationPageProps> = ({
  slug
}) => {
  const [openInvitation, setOpenInvitation] = useState<boolean>(true)
  const [audioPlay, setAudioPlay] = useState(false);
  const [audio] = useState(typeof Audio != "undefined" && new Audio('https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/sign/audio/Jangan%20Berhenti%20Mencintaiku%20(Saxophone%20Cover%20by%20Dori%20Wirawan).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdWRpby9KYW5nYW4gQmVyaGVudGkgTWVuY2ludGFpa3UgKFNheG9waG9uZSBDb3ZlciBieSBEb3JpIFdpcmF3YW4pLm1wMyIsImlhdCI6MTY2OTkyMjM2OSwiZXhwIjoxOTg1MjgyMzY5fQ.cT_pEZLiLJO7udmTpLsM1mtqR135TrLTOGAj6Vl_gjc'));

  const {
    data: dataGuest,
    isLoading,
  } = useGuest({ id: slug, totalDisplayItems: 10 })

  const handleClose = () => {
    setOpenInvitation(false)
    setAudioPlay(true)
  }

  const handlePause = () => {
    setAudioPlay(!audioPlay)
  }

  useEffect(() => {
    audioPlay ? audio.play() : audio.pause();
  }, [audioPlay])

  useEffect(() => {
    audio.addEventListener('ended', () => setAudioPlay(false));
    return () => {
      audio.removeEventListener('ended', () => setAudioPlay(false));
    };
  }, []);

  if (isLoading) <>Loading</>
  return (
    <Layout>
      <OpenInvitation
        withButton={dataGuest?.data?.length}
        open={openInvitation}
        onClose={() => handleClose()}
        name={dataGuest?.data?.[0]?.name}
      />
      {/* {!openInvitation && */}
        <div className={styles.container}>
          <div className={styles.content}>
            <button
              className={`${styles.audio}`}
              onClick={handlePause}
            ><span className={`${styles.audioIcon} ${audioPlay ? 'pause' : 'play'}`} /></button>
            <CoverSection />
            <NameSection />
            <DateSection clock={dataGuest?.data?.[0]?.time} />
          </div>
        </div>
      {/* } */}
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

