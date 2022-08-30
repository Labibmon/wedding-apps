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
    const { data } = await supabase
      .from(guestUrlAPI.list)
      .select(rowSelectedAPI.list);

    // return success
    res.status(HttpStatus.OK).json(data);
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      message: error,
    });
  }
};

export default handler;
