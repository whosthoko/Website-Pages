import React from "react";
import Styled from "styled-components"

function SummerNeverEndsCollectionPage () {
    return (
        <div>
            <div className="description">
                <h1>Summer Never Ends</h1>
                <h2>Spring/Summer 23</h2>
                <p>Summer Never Ends is capturing a feeling and a time and having the visitor experience it through our collection</p>
            </div>
            <div className="Fashion Show">
                <h1>Fashion Show</h1>
            <video className = "VeniceBeachLosAngeles" src= {VeniceBeachLosAngeles} alt="" muted controls/>
            </div>
            <div className="Looks">
                <h1>Looks</h1>
                <img></img>
                <img></img>
                <img></img>
                <img></img>
                <img></img>
            </div>
            <div className="Lookbook">
            <a href="url" className="">
                <img src="" alt="" className=""/>
            </a>
            </div>
            <div className="Playlist">
                <h1>Music Playlist</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae laudantium animi, 
                    distinctio neque suscipit ullam harum culpa, enim vero explicabo quo architecto deleniti 
                    beatae eaque consequuntur eum dolore deserunt itaque!
                </p>
                <h3>Apple Music</h3>
                <a href="url" className="">
                    <img src="" alt="" className=""/>
                </a>
                <h3>Spotify</h3>
                <a href="url" className="">
                    <img src="" alt="" className=""/>
                </a>
            </div>
        </div>
    )
}