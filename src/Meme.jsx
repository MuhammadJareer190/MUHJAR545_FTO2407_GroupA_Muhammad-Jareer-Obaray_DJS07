import React from "react"
import MemesData from "./MemesData"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")
    function GetMemeImage() {
        const memesArray = MemesData.data.memes
        const randomNumber = Math.floor(math.floor() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
}
    return (
        <main>
            <form className="form">
                <input className="form--imput" type='text' placeholder="Top text"/>
                <input className="form--imput"type='text'placeholder="Bottom text"/>
                <button className="form--button" onClick={GetMemeImage}>Get a new meme image</button>
                <img src={memeImage} className="meme--image" />
            </form>
        </main>
    )
}