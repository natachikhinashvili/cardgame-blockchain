"use client"
import { useEffect, useState } from "react"
import cow from "./Strawberrykawaiicow.jpeg"

export default function Home() {
  const [isturn, setisturn] = useState(false)
  
  let putcard = (cardid) => {
      let card = document.getElementById("table")
      let chosen = document.getElementById(cardid)
      card.appendChild(chosen)
      setisturn(!isturn)
  }

  useEffect(() => {
    if(isturn){
      let mycard = document.querySelectorAll(".mycard")
      mycard.forEach(card=> {
        card.setAttribute('disabled', true)
      })
    }
  }, [isturn])

  return (
    <main id="container">
      <div id="player1">
        {/*<img src={cow} alt="cow" width={200} height={200}/>*/}
        <div className="card" id="cow" onClick={putcard.bind(null, "cow")}>cow</div>
        <div className="card" id="plarf" onClick={putcard.bind(null, "plarf")}>plarf</div>
        <div className="card" id="yoyo" onClick={putcard.bind(null, "yoyo")}>yoyo</div>
      </div>
      <div id="table"></div>
      <div id="player2">
        {/*<img src={cow} alt="cow" width={200} height={200}/>*/}
        <button className="mycard" id="yoyo2" onClick={putcard.bind(null, "yoyo2")} >yoyo2</button>
        <button className="mycard" id="kew" onClick={putcard.bind(null, "kew")}>kew</button>
        <button className="mycard" id="turf" onClick={putcard.bind(null, "turf")}>turf</button>
      </div>
    </main>
  )
}
