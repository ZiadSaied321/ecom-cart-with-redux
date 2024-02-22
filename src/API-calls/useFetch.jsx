import { useEffect, useState } from "react";

export function useFetch(url, options = {}) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])

    async function fetchData() {
        setLoading(true)
        try {
            const response = await fetch(url, options)
            if (response.ok) {
                const resData = await response.json()
                setData(() => ([...resData]))
                setLoading(false)
            } else {
                throw new Error({
                    status:response.status,
                    message:response.statusText
                })
        }

        }catch (e) {
        setError(e)
    }

}

useEffect(function(){fetchData()},[url])

return { loading, error, data }
}