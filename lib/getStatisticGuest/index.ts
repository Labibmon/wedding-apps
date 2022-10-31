import { useQuery } from "react-query";
import { baseApi } from "utils/serviceAPI";

export default function useStatisticGuest() {
  return useQuery("statistic-guest", () =>
    fetch(`${baseApi}/statistic-guest`).then(
      (res) => res.json()
    )
  );
}
