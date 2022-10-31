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
      .select(rowSelectedAPI.list, { count: 'exact' })
      .order('name', { ascending: true })
      .range(0, 1);

    // return success
    res.status(HttpStatus.OK).json({data, totalItems: count});
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      message: error,
    });
  }
};

export default handler;