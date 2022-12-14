import { useQuery } from "react-query";
import { baseApi } from "utils/serviceAPI";

type QueryTypes = {
  totalDisplayItems: number;
  time?: string;
  name?: string;
  id?: string;
};

export default function useGuest(param?: QueryTypes) {
  return useQuery("guest", () =>
    fetch(
      `${baseApi}/guest?totalDisplayItems=${param?.totalDisplayItems}${
        param?.name ? "&name=" + param?.name : ""
      }${
        param?.time ? "&time=" + param?.time : ""
      }${
        param?.id ? "&id=" + param?.id : ""
      }`
    ).then((res) => res.json())
  );
}
