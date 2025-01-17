import { postComment } from "./api.js";
import { comments, updateComments } from "./comments.js";
import { sanitizeHtml } from "./sanitizeHtml.js";

export const initLikeListeners = (renderComments) => {
    const likeButtons = document.querySelectorAll(".like-button");
    
        for (const likeButton of likeButtons) {
          likeButton.addEventListener("click",(event)=>{
            event.stopPropagation();
    
            const index=likeButton.dataset.index;
            const comment = comments[index];
    
            comment.likes = comment.isLaked
            ? comment.likes - 1
            : comment.likes + 1;
            comment.isLaked = !comment.isLaked;
            renderComments();
          });
        }
}

export const initRepListeners = () => {
    const text = document.querySelector(".add-form-text");
    const commentsElements = document.querySelectorAll(".comment");

        for (const commentElement of commentsElements) {
          commentElement.addEventListener("click", () => {
         const currentComment = comments[commentElement.dataset.index];
         text.value = `${currentComment.name}:${currentComment.text}`;
         });
        }
}

export const initAddCommentListener = (renderComments) => {

    const addButton = document.querySelector(".add-form-button");
    const name = document.querySelector(".add-form-name");
    const text = document.querySelector(".add-form-text");

    addButton.addEventListener("click",() => {

        if (!name.value||!text.value) {
          console.error("заполните форму");
          return;
        }

        document.querySelector('.form-loading').style.display = 'block'
        document.querySelector(".add-form").style.display ='none'
    
         postComment(sanitizeHtml(text.value),sanitizeHtml(name.value)).then(
        (data) => {

        document.querySelector('.form-loading').style.display = 'none'
        document.querySelector(".add-form").style.display ='flex'
        
          updateComments(data)
          renderComments()
        name.value = "";
         text.value = "";

        },
      )
         
      })
}