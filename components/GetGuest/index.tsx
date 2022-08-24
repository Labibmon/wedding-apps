import { FC, useEffect, useState } from 'react';
import { supabase } from 'utils/supabaseClient';

const GetGuest: FC = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getProfile = async () => {
    try {
      setIsLoading(true)

      const { data, error, status } = await supabase
        .from('guest')
        .select(`id, name, arrival, message`)

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setData(data)
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

  if(isLoading) <>Loading</>

  return  (
    <>{data?.[0]?.name}</>
  )
}

export default GetGuest;
