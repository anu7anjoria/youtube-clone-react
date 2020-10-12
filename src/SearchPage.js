import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow.js';
import VideoRow from './VideoRow';
export default function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneIcon />
        <h1>FILTER</h1>
      </div>
      <hr />
      <ChannelRow
        image="https://st2.depositphotos.com/2703645/5669/v/950/depositphotos_56695433-stock-illustration-female-avatar.jpg"
        channel="HellowKitty"
        verified
        subs="612k"
        noOfvideos={120}
        description="here goes a lon ass descrption.I'm making long as text"
      />
      <hr />
      <VideoRow
        title="Toys are really good around here | Trying to make long"
        subs="100k"
        views="2.4M Views"
        timestamp="1 day ago"
        channelImage="https://st2.depositphotos.com/2703645/5669/v/950/depositphotos_56695433-stock-illustration-female-avatar.jpg"
        channel="HelloKitty"
        image="https://www.animaker.com/hub/wp-content/uploads/2019/05/youtube-thumbnail-size.png"
        description="this is video description long"
      />
      <VideoRow
        title="Toys are really good around here | Trying to make long"
        subs="100k"
        views="2.4M Views"
        timestamp="1 day ago"
        channelImage="https://st2.depositphotos.com/2703645/5669/v/950/depositphotos_56695433-stock-illustration-female-avatar.jpg"
        channel="HelloKitty"
        image="https://www.animaker.com/hub/wp-content/uploads/2019/05/youtube-thumbnail-size.png"
        description="this is video description long"
      />
      <VideoRow
        title="Toys are really good around here | Trying to make long"
        subs="100k"
        views="2.4M Views"
        timestamp="1 day ago"
        channelImage="https://st2.depositphotos.com/2703645/5669/v/950/depositphotos_56695433-stock-illustration-female-avatar.jpg"
        channel="HelloKitty"
        image="https://www.animaker.com/hub/wp-content/uploads/2019/05/youtube-thumbnail-size.png"
        description="this is video description long"
      />
      <VideoRow
        title="Toys are really good around here | Trying to make long"
        subs="100k"
        views="2.4M Views"
        timestamp="1 day ago"
        channelImage="https://st2.depositphotos.com/2703645/5669/v/950/depositphotos_56695433-stock-illustration-female-avatar.jpg"
        channel="HelloKitty"
        image="https://www.animaker.com/hub/wp-content/uploads/2019/05/youtube-thumbnail-size.png"
        description="this is video description long"
      />{' '}
      <VideoRow
        title="Toys are really good around here | Trying to make long"
        subs="100k"
        views="2.4M Views"
        timestamp="1 day ago"
        channelImage="https://st2.depositphotos.com/2703645/5669/v/950/depositphotos_56695433-stock-illustration-female-avatar.jpg"
        channel="HelloKitty"
        image="https://www.animaker.com/hub/wp-content/uploads/2019/05/youtube-thumbnail-size.png"
        description="this is video description long"
      />
    </div>
  );
}
