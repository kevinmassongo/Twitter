import UserContext from "../components/context/UserContext"
import { useEffect, useState } from "react"
import axios from "axios"
import TweetContext from "../components/context/TweetContext";

function ProviderData({ children }) {

    // const [tweetData, setTweetData] = useState([])

    // const SetTweet = (addPost) => {
    //     setTweetData(addPost)
    // }

    const [users, setUsers] = useState([]);
    const [tweets, setTweets] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/users/');
                const responseTwo = await axios.get('http://localhost:5000/tweets/')
                setUsers(response.data);
                setTweets(responseTwo.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const fetchTweets = async () => {
            try {
                const response = await axios.get('http://localhost:5000/tweets/')
                setTweets(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTweets();
    }, []);

    // console.log(tweets.reverse());

    return (
        <UserContext.Provider value={users}>
            <TweetContext.Provider value={tweets}>
                {children}
            </TweetContext.Provider>
        </UserContext.Provider>
    )
}

export default ProviderData;