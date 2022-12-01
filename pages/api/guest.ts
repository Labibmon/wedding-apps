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
  const {
    query: { id, totalDisplayItems, name, time },
  } = req;

  try {
    // hit RestAPI
    const query = supabase
      .from(guestUrlAPI.list)
      .select(rowSelectedAPI.list, { count: "exact" })
      .order("name", { ascending: true })
      .range(0, parseInt(totalDisplayItems.toString()));

    if (name) query.ilike("name", `%${name}%`);
    if (time) query.ilike("time", `%${time}%`);
    if (id) query.eq("id", id);

    const { data, count } = await query;

    // return success
    res.status(HttpStatus.OK).json({ data, totalItems: count });
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      message: error,
    });
  }
};

export default handler;
