import React from 'react';
import Header from '../components/timeline/header.jsx';
import TweetEditor from '../components/timeline/tweet-editor.jsx';
import Tweets from '../components/timeline/tweets.jsx';
import Sidebar from '../components/sidebar/sidebar.jsx';
import Trends from '../components/trends/trends.jsx';

function Home() {
  return (
    <>
      <main className='left-sidebar'>
        <Sidebar />
      </main>
      <main className="timeline">
        <Header />
        <TweetEditor />
        <Tweets /> 
      </main>
      <main className="right-sidebar">
        <Trends />
      </main>
    </>
  );
}

export default Home;