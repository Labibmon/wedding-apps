import { useMutation } from "react-query";
import { baseApi } from "utils/serviceAPI";

type QueryTypes = {
  name: string,
  time: string
}

export default function putGuest() {
  return useMutation((query: QueryTypes) =>
    fetch(`${baseApi}/put-guest`, {
      method: 'PUT',
      body: JSON.stringify({
        ...query
      }),
    })
  );
}
