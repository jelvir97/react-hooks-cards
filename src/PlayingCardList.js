import React, { useState } from "react";
import {useAxios} from "./hooks"
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const formatData = (data)=>{
    return {img: data.cards[0].image}
  }
  const [cards, addCard, removeCards] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/", formatData);
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
        <button onClick={removeCards}>Delete All!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.img} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
