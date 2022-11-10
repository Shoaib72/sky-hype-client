import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -SKYHYPE`;
    }, [title])
}

export default useTitle;