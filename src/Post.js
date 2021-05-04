import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Post.css"
import postimag from "../src/img/emoji.jpg";
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';


function Post({
    displayname,
    username,
    verified,
   text,
   image,avatar
    
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="/static/images/avatar/1.jpg"/>
            </div>
            <div className="post__body">
            <div className="post__header">
                <div className="post__headertext">
                    <h3>
                        sourabh{" "} <span>
                            <verifiedUserIcon/>
                        </span>
                    </h3>
                </div>
                <div className="post__headerdis">
                    <p>i can build feel</p>
                </div>
            </div>
            <img src={postimag} alt="post of image"/>
            <div className="post__footer">
                <ChatBubbleOutlineIcon fontsize="small"/>
                <RepeatIcon fontsize="small"/>
                <FavoriteBorderIcon fontsize="small"/>
                <PublicIcon fontsize="small"/>

            </div>
            </div>
        </div>
    )
}

export default Post
