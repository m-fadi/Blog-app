import React from 'react'

function commentsList({comments}) {
    
    const commentsHtml = comments.map((comment,i) => (
        <div key={i}>
            
            <h4>{comment.postedBy}:</h4>
            <p>{comment.text}</p>
        </div>
    ));
  return (
      <div>
         
          {commentsHtml}
      </div>
  );
}

export default commentsList