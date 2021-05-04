import { Button } from '@material-ui/core'
import React from 'react'
import "./TweetBox.css"
import {Avatar} from "@material-ui/core"
 function TweetBox() {
    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <input  placeholder="what's feeling?"></input>

                </div>
                <input className="tweetbox__imageinput" placeholder="Optional:Enter image URL"></input>

                <Button className="tweet_button">Post</Button>
            </form>
        </div>
    )
}
export default TweetBox;