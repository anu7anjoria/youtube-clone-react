import React from 'react';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SidebarRows from './SidebarRows'
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRows selected Icon={HomeIcon} title="Home" />
            <SidebarRows Icon={WhatshotIcon} title="Trending"/>
            <SidebarRows Icon={SubscriptionsIcon} title="Subscription"/>
            <hr/>

            <SidebarRows Icon={VideoLibraryIcon} title="Library"/>
            <SidebarRows Icon={HistoryIcon} title="History"/>
            <SidebarRows Icon={OndemandVideoIcon} title="Your Videos"/>
            <SidebarRows Icon={WatchLaterIcon} title="Watch Later"/>
            <SidebarRows Icon={ThumbUpIcon} title="Liked Videos"/>
            <SidebarRows Icon={ExpandMoreIcon} title="Show More"/>
            <hr/>
        </div>
    )
}

export default Sidebar
