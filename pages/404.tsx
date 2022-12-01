import Layout from 'components/Layout'
import OpenInvitation from 'components/OpenInvitation'
import { useState } from 'react'


const Error404Page = ({
}) => {
  const [openInvitation, setOpenInvitation] = useState<boolean>(true)

  return (
    <Layout>
      <OpenInvitation
        withButton={false}
        open={openInvitation}
        onClose={() => setOpenInvitation(false)}
        name="Labib"
      />
    </Layout >
  )

}

export default Error404Page

