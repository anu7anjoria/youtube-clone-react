import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './ChannelRow.css'
function ChannelRow({image,channel,verified,subs,noOfvideos,description}) {

    return (
        <div className="channelRow">
            <Avatar className="channelRow_image"
                src={image} alt={channel}
            />
            <div className="channelRow_text">
    <h4>{channel}{verified && <CheckCircleIcon/>}</h4>
    <p> 
                        {subs} subscribers • {noOfvideos} videos
                    </p>
                    <p>{description}</p>
                   
            </div>
        </div>
    )
}

export default ChannelRow
