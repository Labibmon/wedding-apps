import { FC, useEffect, useState } from 'react';
import { supabase } from 'utils/supabaseClient';

const GetGuest: FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  const getProfile = async () => {
    try {
      setIsLoading(true)
      // const user = await getCurrentUser()

      let { data, error, status } = await supabase
        .from('guest')
        .select(`id, name, arrival, message`)

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        console.log('data', data);
        
        // setUsername(data.username)
        // setWebsite(data.website)
        // setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getProfile()
  }, [])
  

  return (
    <>test</>
  )
}

export default GetGuest;
