import React from 'react';
import './Widgets.css'
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {

     const newsArticle = (heading, subtitle) =>(
          <div className="widgets__article">
            <div className="widgets__articleLeft">
               <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
               <h4>{heading}</h4>
               <p>{subtitle}</p>
            </div>
          </div>
     )

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Beaking News!", "Pierre vince la gara.")}
      {newsArticle("Roma - Lazio!", "Stasera grande finale di Coppa Italia.")}
      {newsArticle("Curiosità!", "I cavalli non possono vomitare.")}
      {newsArticle("Tesla Cyber Truck!", "Elon Musk annuncia la nuova release del mezzo.")}
      {newsArticle("Prova!", "Articolo di prova con contenuto insensato.")}
    </div>
  );
}

export default Widgets