import React, {useState, useEffect} from 'react';
import './Post.css';
import {db} from './firebase';
import Avatar from "@material-ui/core/Avatar";
import firebase from 'firebase';

function Post({postId, user, username, caption, imageUrl}) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
        let unsubscribe;
        if(postId){
            unsubscribe = db
             .collection("posts")
             .doc(postId)
             .collection("comments")
             .orderBy('timestamp', 'desc')
             .onSnapshot((snapshot) => {
                 setComments(snapshot.docs.map((doc) => doc.data()));
             });
        }

        return ()=> {
            unsubscribe();
        };
    }, [postId]);

    const postComment = (event) =>{
        event.preventDefault();

        db.collection("posts").doc(postId).collection("comments").add({
           text: comment,
           username: user.displayName,
           timestamp: firebase.firestore.FieldValue.serverTimestamp()

        });
        setComment('');

    }
    
    return (
        <div className="post">
         <div className="post_header">
          <Avatar
           className="post_avatar"
           alt="taylorswift"
           src="data:image/jpeg;base64,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"
          />
          <h3>{username}</h3>
         </div>
           
          {/*header -> avatar + username*/}

          <img className="post_image" src={imageUrl} alt=""/>
           
          {/*image*/}

          <h4 className="post_text"><strong>{username}</strong>{caption}</h4>
          {/*username+caption*/ }  

          <div classname="post_comments">
            {comments.map((comment) => (
                <p>
                  <strong>{comment.username}</strong>{comment.text}
                </p>

            ))}
           </div>  

           {user && (
               <form className="post_commentBox">
                    <input 
                        className="post_input"
                        type="text"
                        placeholder="Add a comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    /> 
                    <button 
                    disabled={!comment}
                    className="post_button"
                    type="submit"
                    onClick={postComment}
                    >
                    Post
                    </button>
                </form>   

     

           )}

          
        </div>
    )
}

export default Post
