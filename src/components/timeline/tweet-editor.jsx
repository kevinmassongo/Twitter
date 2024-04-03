import React, { useContext, useState } from 'react';
import ProfilPicture from '../profilPicture';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { text } from '@fortawesome/fontawesome-svg-core';

function TweetEditor() {

  //SANS REACT HOOK FORM

  // const [post, setPost] = useState("")
  // const handleChange = (e) => {
  //   setPost(e.target.value)
  // }
  // const { tweets, SetTweet } = useContext(UserContext)

  //////////////////////////////////

  const users = useContext(UserContext)


  const [formData, setFormData] = useState({
    author: 18,
    media: ["https://picsum.photos/1114/1541.jpg"],
    retweetCount: 0,
    favoriteCount: 0,
    repliesCount: 0,
    text: ""
  })

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: formData })

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   let addPost;
  //   addPost = {
  //     id : new Date().getTime(),
  //     imageAvatar: "./src/images/profile-photo.png",
  //     linkAvatar: "./src/images/profile-photo.png",
  //     TweetTitle: "Bradley Ortiz",
  //     TweetTitleText: "@bradley",
  //     TweetLogo: "./src/icons/Verified.png",
  //     TweetText: post,
  //     FirstTweetIcon: "src/icons/Reply.svg",
  //     TextOfTheFirstIcon: 0,
  //     SecondTweetIcon: "src/icons/Retweet.svg",
  //     TextOfTheSecondIcon: 0,
  //     ThirdTweetIcon: "src/icons/React.svg",
  //     TextOfTheThirdIcon: 0,
  //     FourthTweetIcon: "src/icons/Share.svg"
  //   }

  //   if(post.length != 0){
  //     SetTweet([addPost, ...tweets])
  //   }
  //   setPost("")
  // }

  //AVEC REACT HOOK FORM

  const onSubmit = async (users) => {
    // console.log(data);
    // alert(data.TweetText)
    // let addPost;
    // addPost = {
    //   id: new Date().getTime(),
    //   imageAvatar: "./src/images/profile-photo.png",
    //   linkAvatar: "./src/images/profile-photo.png",
    //   TweetTitle: "Bradley Ortiz",
    //   TweetTitleText: "@bradley",
    //   TweetLogo: "./src/icons/Verified.png",
    //   TweetText: data.TweetText,
    //   FirstTweetIcon: "src/icons/Reply.svg",
    //   TextOfTheFirstIcon: 0,
    //   SecondTweetIcon: "src/icons/Retweet.svg",
    //   TextOfTheSecondIcon: 0,
    //   ThirdTweetIcon: "src/icons/React.svg",
    //   TextOfTheThirdIcon: 0,
    //   FourthTweetIcon: "src/icons/Share.svg"

    // }



    try {
      const response = await axios.post('http://localhost:5000/tweets/', users);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    // SetTweet([addPost, ...tweets])
    setValue('text', " ");
  }

  const profiles = users.map((user) =>  user.profilePicture)

  console.log(profiles);

  //affichage
  return (
    <div className="tweet-editor">
      <Link to="/profile"><ProfilPicture src="https://i.pravatar.cc/300?img=27" style="profile"></ProfilPicture></Link>
      <div className="tweet-editor-form">
        <input className="tweet-editor-input" placeholder="what's happening?" name='text' {...register("text", {
          required : true,
          minLength: 1,
          maxLength : 180,
          message: "minimum 3 caractères"
        })} />
        {errors.text && (
          <span style={{ color: "red" }}>
            {errors.text.message}
          </span>
        )}
        <div className="tweet-editor-buttons">
          <div className="tweet-editor-actions">
            <img src="src/icons/Gif.png" />
            <img src="src/icons/Vector.png" />
            <img src="src/icons/Poll.png" />
            <img src="src/icons/Group.png" />
            <img src="src/icons/Schedule.png" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <button className="buttons" type='submit'>Tweet</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default TweetEditor;







