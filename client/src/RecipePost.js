  import React from "react";
  import { useEffect } from "react";
  import "./Post.css";

  function RecipePost({
    postId,
    username,
    caption,
    imageUrl,
    //   user,
    //   comments,
    //   rating,
    category,
    region,
    ingredients,
    //   instructions,
  }) {
    // const

    //   {
    //     const str = ;
    //   }
    useEffect(() => {
      console.log(postId);

      return () => {
        console.log(postId);
      };
    }, [postId]);

    return (
      <div className="post">
        <div className="post__header">
          {/* <Avatar
            className="post__avatar"
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          /> */}
          <h3>{caption}</h3>
          {/* <p>`The recipe is from ${username}`</p> */}
        </div>

        <img className="post__image" src={imageUrl} />

        <h4 className="post__text">
          <strong>{`The recipe fall in the category ${category} ,is from ${username} and the region is ${region}`}</strong>
        </h4>
      </div>
    );
  }

  export default RecipePost;
