import { useQuery } from "react-query";
import { baseApi } from "utils/serviceAPI";

export default function useGuest() {
  return useQuery("guest", () =>
    fetch(`${baseApi}/guest`).then(
      (res) => res.json()
    )
  );
}
