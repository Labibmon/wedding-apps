import { ServerAPIHandlerTypes } from "helpers/types/server-props";
import { NextApiRequest, NextApiResponse } from "next";
import { serverRuntimeConfig } from "utils/configNext";
import HttpStatus from "http-status-codes";
import { supabase } from "utils/supabaseClient";

const handler: ServerAPIHandlerTypes = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // get api url from next.config
  const { guestUrlAPI, rowSelectedAPI } = serverRuntimeConfig;

  try {
    // hit RestAPI
    const { data, count } = await supabase
      .from(guestUrlAPI.list)
      .select(rowSelectedAPI.list, { count: "exact" });

    const Datang = data?.filter(
      (data: any) => data.arrival === true
    )?.length;
    const TidakDatang = data?.filter(
      (data: any) => data.arrival === false
    )?.length;
    const BelumKonfirmasi = data?.filter(
      (data: any) => data.arrival === null
    )?.length;

    const returnData = {
      datang: Datang || 0,
      tidakDatang: TidakDatang || 0,
      belumKonfirmasi: BelumKonfirmasi || 0,
      totalItems: count
    };

    // return success
    res.status(HttpStatus.OK).json(returnData);
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      message: error,
    });
  }
};

export default handler;
