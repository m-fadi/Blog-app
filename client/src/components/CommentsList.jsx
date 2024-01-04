


function CommentsList({ comments }) {


    /// --- map comments and build the html---
    const commentsHtml = comments.map((comment, i) => (
        <div key={i} className="comment">
            <h4>{comment.postedBy}:</h4>
            <p>{comment.text}</p>
        </div>
    ));

    return (
        <div>
            
            <h3>Comments: </h3>
            {commentsHtml}
        </div>
    );
}

export default CommentsList;
