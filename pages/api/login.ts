import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { endpoints } from '../../utils/apiCallEndpoints'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { headers, body }: any = req

    try {
        const { data, headers: returnedHeaders }: any = await axios.post(
            endpoints.loginEndpoint, // Node.js backend path
            body, // Login body (email + password)
            { headers } // Headers from the Next.js Client
        )
        //  Update headers on requester using headers from Node.js server response
        Object.entries(returnedHeaders).forEach((keyArr) =>
            res.setHeader(keyArr[0], keyArr[1] as string)
        )
        res.send(data) // Send data from Node.js server response
    } catch ({ response: { status, data } }) {
        res.status(status as number).json(data)
    }
}