import './comments.css';
export function Tells ({userName, userComment, commentDate, commentTitle, iconTitle, commentPhoto}){
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
                     <div className="c__center">
                         <p>
                            {userComment}
                         </p>
                         <div className="c__photo">
                            <img src={commentPhoto} alt="" />
                         </div>
                     </div>
                     <div className="c__footer">

                        <button className="positive__button"><img src="https://pngimg.com/uploads/like/like_PNG14.png" alt=""/></button>
                        <button className="negative__button">-</button>

                     </div>
                    </div>

                </article>
        
    )
}