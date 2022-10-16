import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

export const createHandler = () => {
  const handler = nextConnect({
    onNoMatch(req: NextApiRequest, res: NextApiResponse) {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    },
    onError(error, req: NextApiRequest, res: NextApiResponse) {
      const { status, message } = processApiError(error);
      res.status(status).json({ message });
    },
  })
  return handler;
}
const processApiError = (error: unknown) => {
  let status: number;
  let message: string | undefined;

  if (error instanceof Error) {
    message = error.message;

    if (error.name === "RecordNotFound") {
      status = 404;
    } else {
      status = 500;
    }
  } else {
    message = String(error);
    status = 500;
  }
  return { status, message };
};

export const getIdNumFromReq = (req: NextApiRequest) => {
  const { id: idString } = req.query;
  return Number(idString);
};