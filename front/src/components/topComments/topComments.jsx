import React from "react";
import './topComments.css';

export function TopComments({userName, commentDate, commentTitle }) {

    return(
        
        <article className="c__container">
                        <div className="c__title">
                            <p>{commentTitle}</p>
                        </div>
                    
                    
                    <div className="c__box1">
                        <a href={`https://unavatar.io/${userName}`}><img src={`https://unavatar.io/${userName}`} alt="" className="user__img"/></a>
                    </div>
                    <div className="c__content">


                    <div className="c__head">
                        <div className="user__name">@{userName}</div>
                        <div className="c__date">{commentDate}</div>

                    </div>
                    
                    </div>

                </article>
        
        )
    }