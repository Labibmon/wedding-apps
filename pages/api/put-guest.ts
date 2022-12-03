import type { NextApiRequest, NextApiResponse } from "next";
import { ServerAPIHandlerTypes } from "helpers/types/server-props";
import { supabase } from "utils/supabaseClient";
import { serverRuntimeConfig } from "utils/configNext";
import HttpStatus from "http-status-codes";

const handler: ServerAPIHandlerTypes = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // get api url from next.config
  const { guestUrlAPI } = serverRuntimeConfig;

  const dataForm = JSON.parse(req.body)

  try {
    // hit RestAPI
    const { data, error } = await supabase.from(guestUrlAPI.list).update({
      name: dataForm.name,
      time: dataForm?.time,
      message: dataForm?.message,
      arrival: dataForm?.arrival,
      pax: dataForm?.pax,
    }).eq('id', dataForm?.id);

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
