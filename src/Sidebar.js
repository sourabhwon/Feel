import React from "react";
import "./Sidebar.css";
import "./Sidebaroption.css";
import HomeIcon from "@material-ui/icons/Home";
import BookIcon from '@material-ui/icons/Book';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import MovieIcon from '@material-ui/icons/Movie';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Sidebaroption from "./Sidebaroption";
import {Button } from "@material-ui/core";
import "./Feed"
import Login from "./Login";

function Sidebar() {
  return (
    <div className="sidebar">
        <Sidebaroption active Icon={HomeIcon} text="Home"/>
        <Sidebaroption Icon={BookIcon} text="Book"/>
        <Sidebaroption Icon={FastfoodIcon} text="Food"/>
        <Sidebaroption Icon={SportsEsportsIcon} text="Game"/>
        <Sidebaroption Icon={MovieIcon} text="Movie"/>
        <Sidebaroption Icon={MusicNoteIcon} text="Music"/>
        <Button variant="outlined" className="sidebarpost" fullWidth onClick={`${<Login/>}`}>Feel</Button>
    </div>
  );
}

export default Sidebar;
