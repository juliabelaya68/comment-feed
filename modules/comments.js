export let comments = [
    //{
    // name:"Глеб Фокин",
    //  date:new Date(),
    //  text:"Это будет первый комментарий на этой странице",
    //  likes:3,
  //  isLaked:false,
   // },
   // {
   //   name:"Варвара Н.",
    //  date:new Date(),
   //   text:"Мне нравится как оформлена эта страница! ❤",
   //   likes:75,
   //   isLaked:true,
  //  },
  ]

  export const updateComments = (newComments) => {
    comments = newComments
  }