import { fetchComments } from "./modules/api.js";
import { updateComments } from "./modules/comments.js";
import {renderComments} from "./modules/renderComments.js";


//document.querySelector(".comments").innerHTML=
// "Пожалуйста подождите, комментарий загружается..."//
 

export const fetchAndRenderComments = (isFirstLoading) => {

  if (isFirstLoading) {
    document.querySelector(".container").innerHTML= `<p>Пожалуйста подождите, комментарий загружается...</p>`
  }
  fetchComments().then((data) => {
    updateComments(data)
    renderComments()
  })
}

fetchAndRenderComments(true)


