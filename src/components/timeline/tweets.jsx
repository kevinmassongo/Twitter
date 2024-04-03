import React, { useEffect, useState } from 'react';
import Post from './post';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import axios from 'axios';
import TweetContext from '../context/TweetContext';

function Tweets() {
  const users = useContext(UserContext)
  const tweets = useContext(TweetContext)

  // const [tweetData, setTweetData] = useState([]);
  // const [usersData, setUsersData] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:5000/users/')
  //     .then(response => response.json())
  //     .then(data => setUsersData(data))
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch('http://localhost:5000/tweets/')
  //     .then(response => response.json())
  //     .then(data => setTweetData(data))
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  // console.log(tweetData);

  // console.log(usersData)




  // useEffect(() => {
  //   fetch('http://localhost:5000/users/')
  //     .then(response => {
  //       setUsersData(response.data.reverse());
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);


  // const tweetsData = tweetData.map((post) => post)
  // // console.log(commonObjects);
  // //     const user = commonObjects.map(user => user)

  // console.log(tweetData);
  return (
    <>
      {
        tweets.slice(0).reverse().slice(0, 20).map((post) => {
          let author = users.find((user) => user.id === post.author);
          console.log(author);
          if (post.media.length > 0) {
          return (
              <div className="tweet" key={post.id}>
                <Post post={post} author={author}/>
              </div>
            )
          }
        })
      }
    </>


  )
}

export default Tweets