//* only return java script

// Custom Hook Example 
// function hello() {
//     return [
//         "val1",
//         "val2"
//     ]
// }
// * Custom Hook Design.


import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {

    // * function call when, the any action is 
    // ==> hook load or use then this api is called | invoke this component when it mount. | Use effect is use  |
    // 1. Call back | 2. Dependencies array ==> any change occur then this function work. 
    useEffect(
        () => {
            const [data, setData] = useState({})

            const URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

            // * .then return call back | call back come with response | convert this response into Json | data hold on some variable. <id regular variable is being use then it is not going to change your data on we UL | make useState (hook) like above>
            fetch(URL)
                .then((res) => res.json())
                // .then((res) => setData(res[currency])) | it is use for storing the data of current value.
                .then((res) => setData(res.currency))

            console.log(data)
        },
        // When we have to call this functionality | when currency is change then Call happens.
        [currency]
    )

    console.log(data)
    return data
}

export default useCurrencyInfo;