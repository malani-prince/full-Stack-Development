// * Custom Hooks:
// -> Always having extension .js only.

// * OverView:
// It is a function that return the Json Object, Which come from URL Below. <String is going to come | Convert this string into JSON formate | thats why two .then is nested over there>

import { useEffect, useState } from "react"

// * Function Working.
// useCurrencyInfo => Take currency as an argument.
function useCurrencyInfo(currency) {
    // * Store the Object which is come from the URL | <normal variable can't change data on UI thats why this variable is use.>
    const [data, setData] = useState({})

    // UseEffect is Predefine Hook use in, handling action without  loading whole page. take two parameter <1. Call back | 2. Dependencies array ==> any change occur then this function work.> 
    useEffect(
        () => {
            fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
                .then((res) => res.json())
                .then((res) => setData(res[currency]))
            console.log(data);
        },
        [currency]
    )
    // console.log(data);

    // Return data.
    return data
}

export default useCurrencyInfo;