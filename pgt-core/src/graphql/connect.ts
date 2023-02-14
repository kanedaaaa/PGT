import axios from "axios"

export default async function connect(headers: any, query: any): Promise<any> {
    const endpoint = "http://localhost:4000/graphql"

    try {
        const response = await axios({
            url: endpoint,
            method: 'post',
            headers: headers,
            data: query
        })

        return response.data

    } catch (err: any) {
        console.log(err)
    }
}   