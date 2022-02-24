import axios from "axios";
import React, { useEffect, useState } from "react";
// import "./css";
import "./Post.css";

function RecipeInfo({
  user_id,
  isLoggedIn,
  recipe_id,
  recipe_name,
  recipe_description,
  recipe_image,
  recipe_ingredients,
  recipe_instructions,
  category_name,
  region_name,
  contributor_name,
  contributor_id,
  steps,
  video_url,
  Protein,
  Carbohydrate,
  Fat,
  calories,
  cholesterol,
  time,
  // recipe_contributor_id,
}) {
  const [comments, setComments] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [avgRating, setAvgRating] = useState();
  const [noOfRatings, setNoOfRatings] = useState();
  const [review_summary, setReviewSummary] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [rating, setRating] = useState(5);
  const [isFavBtnClicked, setIsFavBtnClicked] = useState(false);
  const [isContributor, setIsContributor] = useState(false);

  const [hasReviewed, setHasReviewed] = useState(false);

  const [update_recipe_title, setRecipeTitle] = useState(recipe_name);
  const [update_photo_url, setPhotoURL] = useState(recipe_image);
  // const [region_id, setRegionId] = useState("");
  const [update_time_required, setTimeRequired] = useState(time);
  // const [update_servings, setServings] = useState(servings);
  const [update_steps, setSteps] = useState(steps);
  const [update_region_name, setRegionName] = useState(region_name);
  // const [nutrition, setNutrition] = useState();
  const [update_category, setCategory] = useState(category_name);
  const [update_protein, setProtein] = useState("");
  const [update_carbohydrate, setCarbohydrate] = useState("");
  const [update_cholesterol, setCholesterol] = useState("");
  const [update_fat, setFat] = useState("");
  const [update_calories, setCalories] = useState("");
  const [update_description, setDescription] = useState("recipe_description");

  useEffect(() => {
    console.log(recipe_id);
    axios
      .post("http://localhost:4000/comments", {
        recipe_id: recipe_id,
      })
      .then((res) => {
        console.log(res.data);
        setComments(res.data);
      });

    axios
      .post("http://localhost:4000/ingredients", {
        recipe_id: recipe_id,
      })
      .then((res) => {
        console.log(res.data);
        setIngredients(res.data);
      });

    axios
      .post("http://localhost:4000/review_summary", {
        recipe_id: recipe_id,
      })
      .then((res) => {
        console.log("scores");
        console.log(res.data);
        setReviewSummary(res.data);
        console.log("reviews");
        console.log(review_summary);
        setAvgRating(res.data.rating);
        setNoOfRatings(res.data.count);
      });

    axios
      .post("http://localhost:4000/has_reviewed", {
        recipe_id: recipe_id,
        user_id: user_id,
      })
      .then((res) => {
        console.log(res.data);

        setHasReviewed(res.data);
        // return res.data;
      });
    axios
      .post("http://localhost:4000/isAddedToFav", {
        recipe_id: recipe_id,
        user_id: user_id,
      })
      .then((res) => {
        console.log(res.data);

        setIsFavBtnClicked(res.data);
        // return res.data;
      });
    axios
      .post("http://localhost:4000/isContributor", {
        user_id: user_id,
        recipe_id: recipe_id,
      })
      .then((res) => {
        console.log("isContributor");
        console.log(res.data);
        setIsContributor(res.data.isContributor);
      });
  }, [recipe_id, user_id]);

  async function addReview(recipe_id) {
    // e.preventDefault();
    setCommentText("");
    setRating(5);
    console.log(recipe_id);
    console.log(commentText);
    await axios.post("http://localhost:4000/add_review", {
      recipe_id: recipe_id,
      user_id: user_id,
      commentText: commentText,
      rating: rating,
    });
  }

  async function getRecipesOfContributor(e, contributor_id) {
    e.preventDefault();
    const res = await axios
      .post("http://localhost:4000/recipes_by_contributor", {
        contributor_id: contributor_id,
      })
      .then((res) => {
        console.log(res.data);
      });

    console.log(res.data);
  }

  async function addRecipeToFavourites(e, recipe_id) {
    e.preventDefault();
    console.log(recipe_id);
    await axios.post("http://localhost:4000/add_favourite", {
      recipe_id: recipe_id,
      user_id: user_id,
    });
    // setIsFavBtnClicked(true);
  }

  async function removeRecipeToFavourites(e, recipe_id) {
    e.preventDefault();
    console.log(recipe_id);
    await axios.post("http://localhost:4000/remove_favourite", {
      recipe_id: recipe_id,
      user_id: user_id,
    });
    // setIsFavBtnClicked(false);
  }

  async function addReview(recipe_id) {
    // e.preventDefault();
    setCommentText("");
    setRating(5);
    console.log(recipe_id);
    console.log(commentText);
    await axios.post("http://localhost:4000/add_review", {
      recipe_id: recipe_id,
      user_id: user_id,
      commentText: commentText,
      rating: rating,
    });
  }

  async function funcHasReview(recipe_id) {
    let flag = false;
    await axios
      .post("http://localhost:4000/has_reviewed", {
        recipe_id: recipe_id,
        user_id: user_id,
      })
      .then((res) => {
        console.log(res.data);
        flag = res.data;
        // return res.data;
      });
    return flag;
  }
  async function updateRecipeId(recipe_id) {
    setSteps(steps);
    setDescription(recipe_description);
    setCategory(category_name);
    // set
    await axios.post("http://localhost:4000/update_recipe_id", {
      recipe_id: recipe_id,
      user_id: user_id,
    });
  }

  async function updateRecipe(recipe_id) {}

  return (
    <div className="post">
      <div className="card" styles="width: 18rem;">
        <img
          className="card-img-top "
          src={recipe_image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{recipe_name}</h5>
          {review_summary.map((review) => (
            <div>
              <p className="card-text">
                <b>Avg Rating:</b> {review.rating}
              </p>
              <p className="card-text">
                <b>Reviews:</b> {review.count}
              </p>
            </div>
          ))}

          <p className="card-text">Region:{region_name}</p>

          <div>
            {/* <button
              type="button"
              className="btn btn-danger"
              data-toggle="modal"
              data-target="#formrecipe"
              disabled={!isContributor}
              onClick={() => updateRecipeId(recipe_id)}
            >
              update Recipe
            </button> */}
            <div
              className="modal fade"
              id="formrecipe"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header border-bottom-0">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Enter Recipe Details
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form onSubmit={updateRecipe}>
                    <div className="modal-body">
                      <div className="form-group">
                        <label for="email1">Recipe Title</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email1"
                          aria-describedby="emailHelp"
                          placeholder="Enter Recipe Title"
                          value={update_recipe_title}
                          onChange={(e) => setRecipeTitle(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label for="email1">Photo URL</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email1"
                          aria-describedby="emailHelp"
                          placeholder="Enter Photo URL"
                          value={update_photo_url}
                          onChange={(e) => setPhotoURL(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label for="email1">Description</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email1"
                          aria-describedby="emailHelp"
                          placeholder="Enter Description"
                          value={update_description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label for="email1">Category</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email1"
                          aria-describedby="emailHelp"
                          placeholder="Enter Category"
                          value={update_category}
                          onChange={(e) => setCategory(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label for="email1">Steps</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email1"
                          aria-describedby="emailHelp"
                          placeholder="Enter Steps"
                          value={update_steps}
                          onChange={(e) => setSteps(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label for="email1">Region Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email1"
                          aria-describedby="emailHelp"
                          placeholder="Enter Name of Region"
                          value={update_region_name}
                          onChange={(e) => setRegionName(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label for="email1">Time Required</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email1"
                          aria-describedby="emailHelp"
                          placeholder="Enter Time Required"
                          value={update_time_required}
                          onChange={(e) => setTimeRequired(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="modal-footer border-top-0 d-flex justify-content-center">
                      <button type="submit" className="btn btn-success">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <strong>Time required: {time} minutes</strong>
        </div>

        {/* <h4>
            Recipe by{" "}
            <a
              href=""
              onClick={(e) => getRecipesOfContributor(e, contributor_id)}
            >
              {contributor_name}
            </a>
          </h4> */}

        {/* <a
          class="btn btn-primary"
          data-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Click to see the steps
        </a>

        <div class="collapse" id="collapseExample">
          <div class="card card-body">{recipe_description}</div>
        </div> */}
        <p className="card-text">{recipe_description}</p>
        <p className="card-text">
          <strong>The steps are:</strong>
          <br />
          {recipe_description}
          {steps}
        </p>

        {/* <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul> */}
        <table class="table table-sm table-dark">
          <thead>
            <tr>
              <th scope="col">Nutrition Values</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Calories : {calories}</td>
            </tr>
            <tr>
              <td>Protein : {Protein}</td>
            </tr>
            <tr>
              <td>Carbohydrate : {Carbohydrate}</td>
            </tr>
            <tr>
              <td>Fat: {Fat}</td>
            </tr>
            <tr>
              <td>Cholesterol: {cholesterol}</td>
            </tr>
          </tbody>
        </table>
        <table class="table table-sm table-dark">
          <thead>
            <tr>
              <th scope="col">Ingredients</th>
              <th scope="col">Amount</th>
            </tr>{" "}
          </thead>

          <tbody>
            {ingredients.map((ingredient) => (
              <tr>
                <td>{ingredient.ingredient_name}</td>
                <td>{ingredient.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <table class="table table-sm table-dark">
          <thead>
            <tr>
              <th scope="col">Ingredients</th>
            </tr>
          </thead>
          <tbody>
          
            <tr>
              <td>Protein: {Protein}</td>
            </tr>
          </tbody>
        </table> */}
        <div className="card-body">
          <a href={video_url} className="card-link">
            Video
          </a>
          {/* <a href="#" className="card-link">
            Another link
          </a> */}

          {isLoggedIn ? (
            <>
              <a
                class="btn btn-primary"
                data-toggle="collapse"
                href={`#collapseExample${recipe_id}`}
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Review
              </a>
              <div className="collapse" id={`collapseExample${recipe_id}`}>
                {hasReviewed ? (
                  <div>It is reviewed</div>
                ) : (
                  <form onSubmit={() => addReview(recipe_id)}>
                    <div className="form-row align-items-center">
                      <div className="col-auto">
                        <label className="sr-only" for="inlineFormInput">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control mb-2"
                          placeholder="Write your comment here"
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                        />
                      </div>
                      <div className="col-auto">
                        <div className="input-group mb-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text">Rating</div>
                          </div>
                          <input
                            type="number"
                            className="form-control"
                            min="1"
                            max="5"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-2">
                          Add Review
                        </button>
                      </div>
                    </div>
                  </form>
                )}

                <button
                  type="button"
                  class="btn btn-info"
                  disabled={isFavBtnClicked}
                  onClick={(e) => addRecipeToFavourites(e, recipe_id)}
                >
                  Add to Favorites
                </button>

                <button
                  type="button"
                  disabled={!isFavBtnClicked}
                  class="btn btn-info"
                  onClick={(e) => removeRecipeToFavourites(e, recipe_id)}
                >
                  Remove from Favorites
                </button>
              </div>
            </>
          ) : (
            <div></div>
          )}
        </div>

        <ul className="list-unstyled">
          {comments.map((comment) => (
            <li className="media">
              <div className="media-body">
                <h5 className="mt-0 mb-1">
                  {comment.username}
                  <br />
                  Rating {comment.rating}
                  {/* time: {comment.date} */}
                </h5>
                {comment.text}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecipeInfo;
