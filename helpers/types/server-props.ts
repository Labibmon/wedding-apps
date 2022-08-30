import { NextApiRequest, NextApiResponse } from "next";

export type ServerAPIHandlerTypes =  (req: NextApiRequest, res: NextApiResponse) => Promise<any>