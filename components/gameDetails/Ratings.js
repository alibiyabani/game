import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';


export default function Ratings({data}) {

    let ratingColor = '';
    let rating = data.ratings.map((item, index) => {
        switch (item.title) {
          case "exceptional":
            ratingColor = '#00C853'
            break;
          case "recommended":
            ratingColor = '#3D5AFE'
            break;
          case "meh":
            ratingColor = '#FFEA00'
            break;
        case "skip":
            ratingColor = '#C62828'
            break;
        }
        return (
            <>
                <Tooltip title={`${item.percent}%`} placement="top">
                    <div key={index} style={{width:`${item.percent}%`, backgroundColor:ratingColor}}></div>
                </Tooltip>
            </>
        );
      });

      let ratingNote = data.ratings.map((item, index) => {
        switch (item.title) {
          case "exceptional":
            ratingColor = '#00C853'
            break;
          case "recommended":
            ratingColor = '#3D5AFE'
            break;
          case "meh":
            ratingColor = '#FFEA00'
            break;
        case "skip":
            ratingColor = '#C62828'
            break;
        }
        return (
            <div key={index} className="rating-note">
                <span className='dot' style={{backgroundColor:ratingColor}}></span>
                <span className='title'>{item.title} ({item.count}, {item.percent}%)</span>
           </div>
        );
      });

    return (

        <>
            <div className='rating'>
                {rating}
            </div>
            <div style={{marginTop:10}}>
                {ratingNote}
            </div>

        </>
    )
}
