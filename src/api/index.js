const BASE_URL = process.env.REACT_APP_API_URL
const evaluateResponse = response => new Promise((resolve, reject) => {
    response.ok ? response.json().then(resolve) : response.json().then(reject)
})
    
export const  allOf = promises => Promise.all(promises)

export const fetchPosts = () => 
    fetch(`${BASE_URL}/posts`).then(evaluateResponse).catch( ({message}) => Promise.reject(message) )

    