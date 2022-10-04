import { useMutation } from "react-query";
import { baseApi } from "utils/serviceAPI";

type QueryTypes = {
  name: string,
  time: string
}

export default function postGuest() {
  return useMutation((query: QueryTypes) =>
    fetch(`${baseApi}/post-guest`, {
      method: 'POST',
      body: JSON.stringify({
        ...query
      }),
    })
  );
}
