// import axios from "axios";
// import { useEffect, useState } from "react";

// export let UseFetch =  (url, number = null) => {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);
//     const sampleDataList = []

//     useEffect(() => {

//         setTimeout(() => {
//             try {
//                 fetch(url)
//                     .then((response) => {
//                         if (!response.ok) {
//                             throw Error ("Le fetch n'a pas reussi")
//                         }
//                         return response.json()
//                     })
//                     .then((dataColected) => {
//                         if(number != null){
//                             for(let i =0; i<number; i++){
//                                 sampleDataList.push(dataColected[i])
//                             }
//                             setData(sampleDataList)
//                         }else{
//                             setData(dataColected)
//                         }
//                         setError(null)
//                     })
//             } catch (error) {
//                 setError(null)
//                 setData(null)
//                 console.error("ça ne marche pas")
//             }
//         }, 1800);
//     }, [url])

//     return { data, error} 
// } 