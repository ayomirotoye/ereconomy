import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { endpoints } from '../../utils/apiCallEndpoints'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { headers }: any = req
  try {
    const { data, headers: returnedHeaders } = await axios.post(
      endpoints.refreshToken, // refresh token Node.js server path
      undefined,
      {
        headers,
      }
    )

    //  Update headers on requester using headers from Node.js server response
    Object.keys(returnedHeaders).forEach((key) => res.setHeader(key, returnedHeaders[key]))

    res.status(200).json(data)
  } catch (error) {
    res.send(error)
  }
}