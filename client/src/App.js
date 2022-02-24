// import logo from "./logo.svg";
import { useState, react, useEffect } from "react";
import ReactDOM from "react-dom";

import axios from "axios";
import RecipePost from "./RecipePost";
import Header from "./Header";
import RecipeInfo from "./RecipeInfo";

import "./App.css";
// import Post from "./Post";
// import Modal from "@material-ui/core/Modal";
// import { Button, Input } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

function App() {
  const [name, setName] = useState("");
  const [searchName, setSearchName] = useState("");
  const [categories, setCategories] = useState([]);
  const [keywords, setKeywords] = useState([]);

  const [category_id, setCategoryId] = useState("");
  const [msg, setMsg] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [addIngredient, setAddIngredient] = useState();
  const [isFavBtnClicked, setIsFavBtnClicked] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [rating, setRating] = useState(5);
  // const [recipes, setRecipes] = useState([]);
  // const [recipeInfo, setRecipeInfo] = useState([]);
  // const [showRecipeInfo, setShowRecipeInfo] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [regions, setRegions] = useState([]);
  const [region_id, setRegionId] = useState("");
  const [user_id, setUserId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [user, setUser] = useState(null);
  // const [openSignIn, setOpenSignIn] = useState(false);
  // const [open, setOpen] = useState(false);
  // const [modalStyle] = useState(getModalStyle);
  // const classes = useStyles();
  //add recipe

  const [recipe_title, setRecipeTitle] = useState("");
  const [photo_url, setPhotoURL] = useState("");
  // const [region_id, setRegionId] = useState("");
  const [time_required, setTimeRequired] = useState("");
  const [servings, setServings] = useState("");
  const [steps, setSteps] = useState("");
  const [region_name, setRegionName] = useState("");
  const [nutrition, setNutrition] = useState("");
  const [protein, setProtein] = useState("");
  const [carbohydrate, setCarbohydrate] = useState("");
  const [cholesterol, setCholesterol] = useState("");
  const [fat, setFat] = useState("");
  const [calories, setCalories] = useState("");
  const [ingredient1, setIngredient1] = useState("");
  const [ingredient2, setIngredient2] = useState("");
  const [ingredient3, setIngredient3] = useState("");
  const [ingredient4, setIngredient4] = useState("");
  const [ingredient5, setIngredient5] = useState("");
  // const [addIngredient, setAddIngredient] = useState();
  // const [keywords, setKeywords] = useState([]);
  // const [ingredients, setIngredients] = useState([]);
  const [category, setCategory] = useState("");
  // const [regions, setRegions] = useState([""]);
  // const [successMsg, setSuccessMsg] = useState("");
  const [description, setDescription] = useState([""]);
  const [amount1, setAmount1] = useState([""]);
  const [amount2, setAmount2] = useState([""]);
  const [amount3, setAmount3] = useState([""]);
  const [amount4, setAmount4] = useState([""]);
  const [amount5, setAmount5] = useState([""]);

  useEffect(() => {
    axios.get("http://localhost:4000/home").then(function (response) {
      // setRecipes(recipes);
      setMsg(response.data);
    });
    axios.get("http://localhost:4000/recipes").then(function (response) {
      setRecipes(response.data);
      console.log(response.data);
    });

    // axios.get("http://localhost:4000/").then(function (response) {
    //   setRecipes(response.data);
    //   console.log(response.data);
    // });

    axios.get("http://localhost:4000/regions").then(function (response) {
      setRegions(response.data);
      console.log(response.data);
    });

    axios.get("http://localhost:4000/categories").then(function (response) {
      console.log(response.data);
      setCategories(response.data);
    });

    axios.get("http://localhost:4000/keywords").then(function (response) {
      console.log(response.data);
      setKeywords(response.data);
    });
    axios
      .get("http://localhost:4000/distinct_ingredients")
      .then(function (response) {
        console.log(response.data);
        setIngredients(response.data);
      });
  }, []);

  async function createUser(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:4000/signup", {
          username,
          password,
          email,
        })
        .then(function (response) {
          console.log(response.data);
          setUserId(response.data.user_id);
        });
      console.log(user_id);
      setIsLoggedIn(true);
      setUsername("");
      setPassword("");
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  }

  async function loginUser(e) {
    e.preventDefault();
    try {
      await axios

        .post("http://localhost:4000/login", {
          email,
          password,
        })
        .then(function (response) {
          console.log(response.data);
          setUserId(response.data.user_id);
          setSuccessMsg(response.data.message);
          setIsLoggedIn(response.data.successStatus);
        });
      console.log(user_id);

      // setIsLoggedIn(true);
      setEmail("");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  }

  async function postName(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:4000/", {
          name: name,
        })
        .then(function (response) {
          console.log(response);
          setRecipes(response.data);
        });
      console.log(name);
    } catch (error) {
      console.log(error);
    }
  }

  async function getRecipeCategory(e, category_id) {
    setCategoryId(category_id);
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:4000/category_search", {
          region_id: region_id,
          category_id: category_id,
        })
        .then(function (response) {
          console.log(response);
          setRecipes(response.data);
        });
      console.log(name);
    } catch (error) {
      console.log(error);
    }
  }

  async function getRecipeContries(e, region_id) {
    e.preventDefault();
    // console.log(e.target.value);
    // setRegionId(e.target.value);
    // console.log(region_id);
    // setRegionId(region_id);
    // e.preventDefault();
    setRegionId(region_id);
    console.log(region_id);
    try {
      await axios
        .post("http://localhost:4000/regions_search", {
          region_id: region_id,
        })
        .then(function (response) {
          setRecipes(response.data);
        });
    } catch (error) {}
  }

  async function veiwDetailRecipe(recipe_id) {
    console.log(recipe_id);
    try {
      await axios
        .post("http://localhost:4000/recipe_detail", {
          recipe_id: recipe_id,
        })
        .then(function (response) {
          console.log(response.data);
          // setRecipeInfo(response.data);
          setRecipes(response.data);
        });
    } catch (error) {}
  }

  async function getRecipesOfContributor(e, contributor_id) {
    e.preventDefault();
    console.log(contributor_id);
    await axios
      .post("http://localhost:4000/recipes_by_contributor", {
        contributor_id: contributor_id,
      })
      .then((res) => {
        console.log(res.data);
        setRecipes(res.data);
      });

    // console.log(res.data);
  }

  function callTwoFunction(region_id) {
    setRegionId(region_id);
    getRecipeContries(region_id);
  }
  async function getRecipeByKeyword(e, keyword_name) {
    e.preventDefault();
    // let recipe_id_list = [];
    // for (let i = 0; i < recipes.length; i++) {
    //   recipe_id_list.push(recipes[i].recipe_id);
    // }

    await axios
      .post("http://localhost:4000/keyword_search", {
        region_id: region_id,
        keyword_name: keyword_name,
      })
      .then((res) => {
        console.log(res.data);
        setRecipes(res.data);
      });
  }

  async function getRecipesWithThisIngredient(e, ingredient_name) {
    e.preventDefault();
    console.log(addIngredient);
    let recipe_id_list = [];
    for (let i = 0; i < recipes.length; i++) {
      recipe_id_list.push(recipes[i].recipe_id);
    }

    await axios
      .post("http://localhost:4000/add_ingredient_search", {
        recipe_id_list: recipe_id_list,
        ingredient_name: ingredient_name,
      })
      .then((res) => {
        console.log(res.data);
        setRecipes(res.data);
      });
  }
  async function getRecipesWithoutThisIngredient(e, ingredient_name) {
    e.preventDefault();
    console.log(addIngredient);
    let recipe_id_list = [];
    for (let i = 0; i < recipes.length; i++) {
      recipe_id_list.push(recipes[i].recipe_id);
    }

    await axios
      .post("http://localhost:4000/exclude_ingredient_search", {
        recipe_id_list: recipe_id_list,
        ingredient_name: ingredient_name,
      })
      .then((res) => {
        console.log(res.data);
        setRecipes(res.data);
      });
  }

  async function getHomePage() {
    setIsFavBtnClicked(false);
    setRegionId("");
    await axios.get("http://localhost:4000/recipes").then((res) => {
      console.log(res.data);
      setRecipes(res.data);
    });
  }

  async function addRecipeToFavourites(e, recipe_id) {
    e.preventDefault();
    console.log(recipe_id);
    await axios.post("http://localhost:4000/add_favourite", {
      recipe_id: recipe_id,
      user_id: user_id,
    });
  }

  async function getMyFavourites(e) {
    e.preventDefault();
    setIsFavBtnClicked(true);
    await axios
      .post("http://localhost:4000/get_my_favourites", {
        user_id: user_id,
      })
      .then((res) => {
        console.log(res.data);
        setRecipes(res.data);
      });
  }

  async function removeRecipeToFavourites(e, recipe_id) {
    e.preventDefault();
    console.log(recipe_id);
    await axios.post("http://localhost:4000/remove_favourite", {
      recipe_id: recipe_id,
      user_id: user_id,
    });
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

  async function addRecipe(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:4000/add", {
          recipe_title,
          photo_url,
          description,
          category,
          ingredient1,
          ingredient2,
          ingredient3,
          ingredient4,
          ingredient5,
          amount1,
          amount2,
          amount3,
          amount4,
          amount5,
          steps,
          region_name,
          time_required,
          servings,
          protein,
          carbohydrate,
          cholesterol,
          fat,
          calories,
          user_id,
        })
        .then(function (response) {});
      setRecipeTitle("");
      setPhotoURL("");
      setDescription("");
      setCategory("");
      setIngredient1("");
      setIngredient2("");
      setIngredient3("");
      setIngredient4("");
      setIngredient5("");
      setAmount1("");
      setAmount2("");
      setAmount3("");
      setAmount4("");
      setAmount5("");
      setSteps("");
      setRegionName("");
      setTimeRequired("");
      setServings("");
      setProtein("");
      setCarbohydrate("");
      setCholesterol("");
      setFat("");
      setCalories("");
    } catch (error) {
      //console.log(error);
    }
  }

  return (
    <div className="App">
      {/* <div className="post">
      </Post>
      </div> */}
      {/* <Header /> */}
      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
        <a
          className="navbar-brand"
          href="#"
          onClick={() => {
            getHomePage();
          }}
        >
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li> */}

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categories
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {categories.map((category) => (
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => getRecipeCategory(e, category.category_id)}
                  >
                    {category.category_name}
                  </a>
                ))}
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Countries
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {regions.map((region) => (
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => getRecipeContries(e, region.region_id)}
                  >
                    {region.region_name}
                  </a>
                ))}
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Search By this words
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {keywords.map((keyword) => (
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => getRecipeByKeyword(e, keyword.keyword_name)}
                  >
                    {keyword.keyword_name}
                  </a>
                ))}
              </div>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li> */}
          </ul>
          {isLoggedIn ? (
            <div></div>
          ) : (
            <div className="container">
              <button
                type="button"
                className="btn btn-danger"
                data-toggle="modal"
                data-target="#form"
              >
                Sign Up
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-toggle="modal"
                data-target="#formLogin"
              >
                Log In
              </button>
            </div>
          )}
          <div
            className="modal fade"
            id="formLogin"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header border-bottom-0">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Log in to Account
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
                <form onSubmit={loginUser}>
                  <div className="modal-body">
                    <div className="form-group">
                      <label for="email1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        Your information is safe with us.
                      </small>
                    </div>
                    <div className="form-group">
                      <label for="password1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password1"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
          <div
            className="modal fade"
            id="form"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header border-bottom-0">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Create Account
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
                <form onSubmit={createUser}>
                  <div className="modal-body">
                    <div className="form-group">
                      <label for="email1"> UserName</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email1"
                        aria-describedby="emailHelp"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        Your information is safe with us.
                      </small>
                    </div>
                    <div className="form-group">
                      <label for="email1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        Your information is safe with us.
                      </small>
                    </div>
                    <div className="form-group">
                      <label for="password1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password1"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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

          {isLoggedIn ? (
            <div>
              <button
                type="button"
                className="btn btn-danger"
                data-toggle="modal"
                data-target="#formrecipe"
              >
                Add Recipe
              </button>
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
                    <form onSubmit={addRecipe}>
                      <div className="modal-body">
                        <div className="form-group">
                          <label for="email1">Recipe Title</label>
                          <input
                            type="text"
                            className="form-control"
                            id="email1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Recipe Title"
                            value={recipe_title}
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
                            value={photo_url}
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
                            value={description}
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
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label for="email1">Ingredients</label>
                          <div class="row">
                            <div class="col">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Ingredient 1"
                                value={ingredient1}
                                onChange={(e) => setIngredient1(e.target.value)}
                              />
                            </div>
                            <div class="col">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Amount 1"
                                value={amount1}
                                onChange={(e) => setAmount1(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div class="row">
                            <div class="col">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Ingredient 2"
                                value={ingredient2}
                                onChange={(e) => setIngredient2(e.target.value)}
                              />
                            </div>
                            <div class="col">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Amount 2"
                                value={amount2}
                                onChange={(e) => setAmount2(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div class="row">
                            <div class="col">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Ingredient 3"
                                value={ingredient3}
                                onChange={(e) => setIngredient3(e.target.value)}
                              />
                            </div>
                            <div class="col">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Amount 3"
                                value={amount3}
                                onChange={(e) => setAmount3(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div class="row">
                            <div class="col">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Ingredient 4"
                                value={ingredient4}
                                onChange={(e) => setIngredient4(e.target.value)}
                              />
                            </div>
                            <div class="col">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Amount 4"
                                value={amount4}
                                onChange={(e) => setAmount4(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div class="row">
                            <div class="col">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Ingredient 5"
                                value={ingredient5}
                                onChange={(e) => setIngredient5(e.target.value)}
                              />
                            </div>
                            <div class="col">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Amount 5"
                                value={amount5}
                                onChange={(e) => setAmount5(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label for="email1">Steps</label>
                          <input
                            type="text"
                            className="form-control"
                            id="email1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Steps"
                            value={steps}
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
                            value={region_name}
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
                            value={time_required}
                            onChange={(e) => setTimeRequired(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label for="email1">Servings</label>
                          <input
                            type="text"
                            className="form-control"
                            id="email1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Servings"
                            value={servings}
                            onChange={(e) => setServings(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label for="email1">Nutrition Info Protein </label>
                          <input
                            type="number"
                            className="form-control"
                            id="email1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Protein Content"
                            value={protein}
                            onChange={(e) => setProtein(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label for="email1">
                            Nutrition Info Carbohydrate
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="email1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Carbohydrate Content"
                            value={carbohydrate}
                            onChange={(e) => setCarbohydrate(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label for="email1">Nutrition Info Cholesterol</label>
                          <input
                            type="number"
                            className="form-control"
                            id="email1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Cholesterol Content"
                            value={cholesterol}
                            onChange={(e) => setCholesterol(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label for="email1">Nutrition Info Fat</label>
                          <input
                            type="number"
                            className="form-control"
                            id="email1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Fat Content"
                            value={fat}
                            onChange={(e) => setFat(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label for="email1">Nutrition Info Calories</label>
                          <input
                            type="number"
                            className="form-control"
                            id="email1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Calories"
                            value={calories}
                            onChange={(e) => setCalories(e.target.value)}
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
          ) : (
            <div></div>
          )}

          {isLoggedIn ? (
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          ) : (
            <div></div>
          )}

          <form className="form-inline my-2 my-lg-0" onSubmit={postName}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>

            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={(e) => getMyFavourites(e)}
            >
              My Favorites
            </button>
          </form>
        </div>
      </nav>

      <form className="form-inline">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Add this ingredient from your recipe
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {ingredients.map((ingredient) => (
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) =>
                getRecipesWithThisIngredient(e, ingredient.ingredient_name)
              }
            >
              {ingredient.ingredient_name}
            </a>
          ))}
        </div>
      </form>
      <form className="form-inline">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Exclude this ingredient from your recipe
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {ingredients.map((ingredient) => (
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) =>
                getRecipesWithoutThisIngredient(e, ingredient.ingredient_name)
              }
            >
              {ingredient.ingredient_name}
            </a>
          ))}
        </div>
      </form>

      {/* <form onSubmit={postName}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Send Name</button>
      </form> */}
      {/* {recipes.map((recipe) => (} */}
      {/* <img src={recipes} alt="" className="src" /> */}
      {/* {recipes} */}
      {recipes.map((recipeInfo) => (
        // <div className="Recipe__post">
        <>
          Recipe by '
          <a
            href={`http://localhost:3000/recipes/${recipeInfo.contributor_name}`}
            rel="noopener noreferrer"
            onClick={(e) =>
              getRecipesOfContributor(e, recipeInfo.contributor_id)
            }
          >
            {recipeInfo.contributor_name}'{/* {recipeInfo.contributor_id} */}
          </a>
          {
            <>
              <RecipeInfo
                className="recipe__info"
                user_id={user_id}
                isLoggedIn={isLoggedIn}
                recipe_id={recipeInfo.recipe_id}
                recipe_name={recipeInfo.recipe_title}
                recipe_description={recipeInfo.recipe_description}
                recipe_image={recipeInfo.photo_url}
                recipe_ingredients={recipeInfo.recipe_ingredients}
                recipe_instructions={recipeInfo.recipe_instructions}
                recipe_category={recipeInfo.category_name}
                region_name={recipeInfo.region_name}
                recipe_region={recipeInfo.recipe_region}
                contributor_name={recipeInfo.contributor_name}
                contributor_id={recipeInfo.contributor_id}
                steps={recipeInfo.steps}
                video_url={recipeInfo.video_url}
                Protein={recipeInfo.recipe_protein}
                Carbohydrate={recipeInfo.recipe_carbohydrate}
                Fat={recipeInfo.recipe_fat}
                calories={recipeInfo.recipe_calories}
                cholesterol={recipeInfo.recipe_cholesterol}
                time={recipeInfo.recipe_time}
              />
              {/* {isLoggedIn ? (
                <>
                  <a
                    class="btn btn-primary"
                    data-toggle="collapse"
                    href={`#collapseExample${recipeInfo.recipe_id}`}
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Review
                  </a>
                  <div
                    className="collapse"
                    id={`collapseExample${recipeInfo.recipe_id}`}
                  >
                    {funcHasReview(recipeInfo.recipe_id) == true ? (
                      <div>It is reviewed</div>
                    ) : (
                      <div>It is not reviewed</div>
                    )}
                    <form onSubmit={() => addReview(recipeInfo.recipe_id)}>
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
                          <button
                            type="submit"
                            className="btn btn-primary mb-2"
                          >
                            Add Review
                          </button>
                        </div>
                      </div>
                    </form>
                    <button
                      type="button"
                      class="btn btn-info"
                      disabled={isFavBtnClicked}
                      onClick={(e) =>
                        addRecipeToFavourites(e, recipeInfo.recipe_id)
                      }
                    >
                      Add to Favorites
                    </button>

                    <button
                      type="button"
                      disabled={!isFavBtnClicked}
                      class="btn btn-info"
                      onClick={(e) =>
                        removeRecipeToFavourites(e, recipeInfo.recipe_id)
                      }
                    >
                      Remove from Favorites
                    </button>
                  </div>
                </>
              ) : (
                <div></div>
              )} */}
              <br></br>
              <br></br>
              <br></br>
            </>
          }
        </>
      ))}
    </div>
  );
}

export default App;
