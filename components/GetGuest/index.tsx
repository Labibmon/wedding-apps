import { FC } from 'react';
import useGuest from 'lib/getGuest';

const GetGuest: FC = () => {
  const { data, isLoading } = useGuest()

  if (isLoading) <>Loading</>

  return (
    <>{data?.[0]?.name}</>
  )
}

export default GetGuest;
