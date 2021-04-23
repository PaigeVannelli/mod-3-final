import './ArtPage.css'
import React, { Component } from 'react'
import ArtDetails from '../artDetails/ArtDetails'

const ArtPage = (props) => {

  
  // const errorHandling = () => {
  //   if (props.currentArtID & props.validSearch) {
  //     return (
  //       <section className='art-page'>
  //       <>
  //         <div className='art-piece-container'>
  //           <img 
  //             src={props.currentArt.image} 
  //             alt={props.currentArt.title} 
  //             className='art-piece'
  //           />
  //         </div>
  //         <div className='display-next-button-container'>
  //           <button className='display-next-button' onClick={props.displayNextPiece}>></button>
  //         </div>
  //         <ArtDetails currentArt={props.currentArt} addFavorite={props.addFavorite}/>
  //       </>
  //       </section>
  //     )
  //   } else if (!props.currentArtID & props.validSearch) {
  //     return (
  //       <h1>loading</h1>
  //     )
  //   } else if (!props.validSearch) {
  //     return (
  //       <h1>Not a valid search</h1> 
  //     )
  //   }
  // }

  return (
    <section className='art-page'>
      {
        props.currentArtID ?
      <>
        <div className='art-piece-container'>
          <img 
            src={props.currentArt.image} 
            alt={props.currentArt.title} 
            className='art-piece'
          />
        </div>
        <div className='display-next-button-container'>
          <button className='display-next-button' onClick={props.displayNextPiece}>></button>
        </div>
        <ArtDetails currentArt={props.currentArt} addFavorite={props.addFavorite}/>
      </>
      :
      <h1>loading</h1>
      }
    </section>
  )
}

export default ArtPage
