import React from "react"
import MemesData from "./MemesData"

export default function Meme() {
   // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText:"",
        randomImage: "http://i.imgflip.com/1bij.jpg"

    })
    const [allMemeImages, setAllMemeImages] = React.useState(MemesData)

    function GetMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(math.floor() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
}
    return (
        <main>
            <div className="form">
                <input className="form--imput" type='text' placeholder="Top text"/>
                <input className="form--imput"type='text'placeholder="Bottom text"/>
                <button className="form--button" onClick={GetMemeImage}>Get a new meme image</button>
                <img src={meme.randomImage} className="meme--image" />
            </div>
        </main>
    )
}