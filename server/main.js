const oracledb = require("oracledb");
const express = require("express");
const app = express();
// import cors from "cors";
const cors = require("cors");
const { json } = require("express");
app.use(express());
app.use(express.json());
app.use(cors());

let connection;

//   try {
//     connection = await oracledb.getConnection({
//       user: "Anwar",
//       password: "pass",
//       connectionString: "localhost/orcl",
//     });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    connection = await oracledb.getConnection({
      user: "Anwar",
      password: "pass",
      connectionString: "localhost/orcl",
    });
    let query = `SELECT * FROM users WHERE email like '${email}' AND password like '${password}'`;
    console.log(query);
    let result = await connection.execute(query, [], {
      resultSet: true,
      outFormat: oracledb.OUT_FORMAT_OBJECT, // Return the result as Object
    });
    const rs = result.resultSet;
    let row;
    row = await rs.getRow();
    console.log(row);
    let successMsg = "";
    let successStatus = true;
    if (row.USER_ID === undefined) {
      successStatus = false;
      successMsg = "Invalid Credentials";
    } else {
      successStatus = true;
      successMsg = "Login Successful";
    }
    let user_info = {
      user_id: row.USER_ID,
      username: row.USER_NAME,

      email: row.EMAIL,
      successMsg: successMsg,
      successStatus: successStatus,
    };
    console.log(user_info);
    res.send(user_info);
  } catch (err) {
    console.log(err);
  }
});

app.post("/signup", cors(), async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  console.log(req.body);

  try {
    connection = await oracledb.getConnection({
      user: "Anwar",
      password: "pass",
      connectionString: "localhost/orcl",
    });

    let result = await connection.execute(
      `select max(user_id) MAX_ID from users`,
      [],
      {
        resultSet: true,
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      }
    );
    const rs = result.resultSet;
    let row = await rs.getRow();
    let user_id = row.MAX_ID + 1;
    let query = `INSERT INTO users (user_id,user_name,password,email) VALUES (${user_id},'${username}','${password}','${email}')`;
    console.log(query);
    result = await connection.execute(
      `INSERT INTO users (user_id,user_name,password,email) VALUES (:user_id,:username,:password,:email)`,
      [user_id, username, password, email],
      {
        resultSet: true,
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      }
    );
    connection.commit();
    let user_info = {
      user_id: user_id,
      username: username,
      password: password,
      email: email,
      successMsg: "User Created Successfully",
    };
    console.log(result);
    console.log(user_info);
    res.send(user_info);
  } catch (err) {
    console.error(err);
  }
});

app.post("/", cors(), async (req, res) => {
  //   let { name } = req.body;
  let name = req.body;
  console.log(req.body);

  console.log(name);
  //   let name2 = `'%${name}%'`;
  //   let name2 = "%" + JSON.stringify(name.name) + "%";
  let name2 = "'%" + name.name + "%'";
  console.log(name2);
  try {
    connection = await oracledb.getConnection({
      user: "Anwar",
      password: "pass",
      connectionString: "localhost/orcl",
    });
    result = await connection.execute(
      `SELECT * FROM RECIPES JOIN RECIPE_INFO ON ( RECIPES.INFORMATION_ID = RECIPE_INFO.INFORMATION_ID)
      JOIN CATEGORIES ON (RECIPES.CATEGORY_ID = CATEGORIES.CATEGORY_ID)
      JOIN REGION ON (RECIPES.REGION_ID = REGION.REGION_ID)
      JOIN USERS ON ( RECIPES.CONTRIBUTOR_ID = USERS.USER_ID)
      JOIN NUTRITION_INFO ON ( RECIPES.RECIPE_ID = NUTRITION_INFO.RECIPE_ID) where lower(recipe_title) like lower(${name2})`,
      [],
      {
        resultSet: true,
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      }
    );
    const rs = result.resultSet;
    let row;
    // row = rs.getRow();
    const recipelistObject = [];
    // const recipelistObject = [];
    while ((row = await rs.getRow())) {
      recipelistObject.push({
        recipe_id: row.RECIPE_ID,
        recipe_title: row.RECIPE_TITLE,
        photo_url: row.PHOTO_URL,
        information_id: row.INFORMATION_ID,
        category_name: row.CATEGORY_NAME,
        region_name: row.REGION_NAME,
        contributor_name: row.USER_NAME,
        contributor_id: row.CONTRIBUTOR_ID,
        ingredients: row.INGREGIENTS,
        steps: row.STEPS,
        recipe_description: row.DESCRIPTION,
        video_url: row.VIDEO_URL,
        recipe_time: row.TIME_REQUIRED,
        recipe_calories: row.CALORIES,
        recipe_fat: row.FAT,
        recipe_protein: row.PROTEIN,
        recipe_cholesterol: row.CHOLESTEROL,
        recipe_carbohydrate: row.CARBOHYDRATE,
      });
    }
    console.log(recipelistObject);
    res.send(recipelistObject);
    // console.log(row.REGION_ID);
    // await rs.close();
  } catch (err) {
    console.error(err);
  }
  //   console.log(req.body);
});

app.post("/category_search", cors(), async (req, res) => {
  // let category_id = "'%" + req.body.category_id + "%'";
  let category_id = req.body.category_id;
  let region_id = req.body.region_id;
  let query;
  if (region_id == "") {
    query = `select * from recipes
  JOIN RECIPE_INFO ON ( RECIPES.INFORMATION_ID = RECIPE_INFO.INFORMATION_ID) 
JOIN CATEGORIES ON (RECIPES.CATEGORY_ID = CATEGORIES.CATEGORY_ID)
JOIN REGION ON (RECIPES.REGION_ID = REGION.REGION_ID)
JOIN USERS ON ( RECIPES.CONTRIBUTOR_ID = USERS.USER_ID)
JOIN NUTRITION_INFO ON ( RECIPES.RECIPE_ID = NUTRITION_INFO.RECIPE_ID)
  where recipes.category_id = ${category_id}`;
  } else {
    query = `select * from recipes
  JOIN RECIPE_INFO ON ( RECIPES.INFORMATION_ID = RECIPE_INFO.INFORMATION_ID) 
JOIN CATEGORIES ON (RECIPES.CATEGORY_ID = CATEGORIES.CATEGORY_ID)
JOIN REGION ON (RECIPES.REGION_ID = REGION.REGION_ID)
JOIN USERS ON ( RECIPES.CONTRIBUTOR_ID = USERS.USER_ID)
JOIN NUTRITION_INFO ON ( RECIPES.RECIPE_ID = NUTRITION_INFO.RECIPE_ID)
  where recipes.category_id = ${category_id} and recipes.region_id like '${region_id}'`;
  }
  console.log(query);
  console.log(category_id);
  try {
    connection = await oracledb.getConnection({
      user: "Anwar",
      password: "pass",
      connectionString: "localhost/orcl",
    });

    let result = await connection.execute(query, [], {
      resultSet: true,
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    const rs = result.resultSet;
    let row;
    const recipelistObject = [];
    while ((row = await rs.getRow())) {
      recipelistObject.push({
        recipe_id: row.RECIPE_ID,
        recipe_title: row.RECIPE_TITLE,
        photo_url: row.PHOTO_URL,
        information_id: row.INFORMATION_ID,
        category_name: row.CATEGORY_NAME,
        region_name: row.REGION_NAME,
        contributor_name: row.USER_NAME,
        ingredients: row.INGREGIENTS,
        steps: row.STEPS,
        recipe_description: row.DESCRIPTION,
        video_url: row.VIDEO_URL,
        recipe_time: row.TIME_REQUIRED,
        recipe_calories: row.CALORIES,
        recipe_fat: row.FAT,
        recipe_protein: row.PROTEIN,
        recipe_cholesterol: row.CHOLESTEROL,
        recipe_carbohydrate: row.CARBOHYDRATE,
      });
    }
    console.log(recipelistObject);
    res.send(recipelistObject);
  } catch (err) {
    console.error(err);
  }
});

app.post("/regions_search", cors(), async (req, res) => {
  let search_country_id = req.body;
  console.log(req.body);
  console.log(search_country_id);
  let region_id = "'%" + req.body.region_id + "%'";
  let query = `select * from recipes 
  JOIN RECIPE_INFO ON ( RECIPES.INFORMATION_ID = RECIPE_INFO.INFORMATION_ID) 
JOIN CATEGORIES ON (RECIPES.CATEGORY_ID = CATEGORIES.CATEGORY_ID)
JOIN REGION ON (RECIPES.REGION_ID = REGION.REGION_ID)
JOIN USERS ON ( RECIPES.CONTRIBUTOR_ID = USERS.USER_ID)
JOIN NUTRITION_INFO ON ( RECIPES.RECIPE_ID = NUTRITION_INFO.RECIPE_ID) where recipes.region_id like ${region_id}`;
  console.log(query);
  try {
    connection = await oracledb.getConnection({
      user: "Anwar",
      password: "pass",
      connectionString: "localhost/orcl",
    });

    let result3 = await connection.execute(query, [], {
      resultSet: true,
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    // .then((result) => {

    const rs3 = result3.resultSet;
    let row3;
    const recipelistObject = [];
    while ((row3 = await rs3.getRow())) {
      recipelistObject.push({
        recipe_id: row3.RECIPE_ID,
        recipe_title: row3.RECIPE_TITLE,
        photo_url: row3.PHOTO_URL,
        information_id: row3.INFORMATION_ID,
        category_name: row3.CATEGORY_NAME,
        region_name: row3.REGION_NAME,
        contributor_name: row3.USER_NAME,
        ingredients: row3.INGREGIENTS,
        steps: row3.STEPS,
        recipe_description: row3.DESCRIPTION,
        video_url: row3.VIDEO_URL,
        recipe_time: row3.TIME_REQUIRED,
        recipe_calories: row3.CALORIES,
        recipe_fat: row3.FAT,
        recipe_protein: row3.PROTEIN,
        recipe_cholesterol: row3.CHOLESTEROL,
        recipe_carbohydrate: row3.CARBOHYDRATE,
      });
    }
    console.log(recipelistObject);
    res.send(recipelistObject);
  } catch (err) {
    console.error(err);
  }
  // });
});

app.post("/recipe_detail", cors(), async (req, res) => {
  let recipe_id = req.body.recipe_id;
  console.log(req.body);
  console.log(recipe_id);
  let query = `select * from 
  RECIPES 
JOIN RECIPE_INFO ON ( RECIPES.INFORMATION_ID = RECIPE_INFO.INFORMATION_ID) 
JOIN CATEGORIES ON (RECIPES.CATEGORY_ID = CATEGORIES.CATEGORY_ID)
JOIN REGION ON (RECIPES.REGION_ID = REGION.REGION_ID)
JOIN USERS ON ( RECIPES.CONTRIBUTOR_ID = USERS.USER_ID)
JOIN NUTRITION_INFO ON ( RECIPES.RECIPE_ID = NUTRITION_INFO.RECIPE_ID)
  where RECIPES.recipe_id = ${recipe_id}`;
  console.log(query);
  try {
    connection = await oracledb.getConnection({
      user: "Anwar",
      password: "pass",
      connectionString: "localhost/orcl",
    });
    let result = await connection.execute(query, [], {
      resultSet: true,
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    const rs = result.resultSet;
    let row;
    const recipelistObject = [];
    row = await rs.getRow();
    recipelistObject.push({
      recipe_id: row.RECIPE_ID,
      recipe_title: row.RECIPE_TITLE,
      photo_url: row.PHOTO_URL,
      information_id: row.INFORMATION_ID,
      category_name: row.CATEGORY_NAME,
      region_name: row.REGION_NAME,
      contributor_name: row.USER_NAME,
      contributor_id: row.CONTRIBUTOR_ID,
      ingredients: row.INGREGIENTS,
      steps: row.STEPS,
      recipe_description: row.DESCRIPTION,
      video_url: row.VIDEO_URL,
      recipe_time: row.TIME_REQUIRED,
      recipe_calories: row.CALORIES,
      recipe_fat: row.FAT,
      recipe_protein: row.PROTEIN,
      recipe_cholesterol: row.CHOLESTEROL,
      recipe_carbohydrate: row.CARBOHYDRATE,
    });
    console.log(recipelistObject);
    res.send(recipelistObject);
  } catch (err) {
    console.error(err);
  }
});

app.post("/comments", cors(), async (req, res) => {
  let recipe_id = req.body.recipe_id;
  console.log(req.body);
  console.log(recipe_id);
  let query = `SELECT * FROM REVIEWS JOIN USERS ON (REVIEWS.USER_ID = USERS.USER_ID)
  WHERE RECIPE_ID = ${recipe_id}`;
  console.log(query);
  try {
    connection = await oracledb.getConnection({
      user: "Anwar",
      password: "pass",
      connectionString: "localhost/orcl",
    });
    let result = await connection.execute(query, [], {
      resultSet: true,
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    const rs = result.resultSet;
    let row;
    const comments = [];
    while ((row = await rs.getRow())) {
      comments.push({
        username: row.USER_NAME,
        text: row.COMMENT_POSTED,
        rating: row.RATING,
        date: row.TIME_REVIEWED,
      });
    }
    console.log(comments);
    res.send(comments);
  } catch (err) {
    console.error(err);
  }
});

app.post("/ingredients", cors(), async (req, res) => {
  let recipe_id = req.body.recipe_id;
  let query = `SELECT * FROM INGREDIENTS  I JOIN INGREDIENTS_LIST IL ON I.INGREDIENTS_ID = IL.INGREDIENT_LIST_ID WHERE RECIPE_ID = ${recipe_id}`;
  console.log(query);
  try {
    connection = await oracledb.getConnection({
      user: "Anwar",
      password: "pass",
      connectionString: "localhost/orcl",
    });
    let result = await connection.execute(query, [], {
      resultSet: true,
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    const rs = result.resultSet;
    let row;
    const ingredients = [];
    while ((row = await rs.getRow())) {
      ingredients.push({
        ingredient_id: row.INGREDIENTS_ID,
        ingredient_name: row.INGREDIENTS_NAME,
        amount: row.AMOUNT,
      });
    }
    console.log(ingredients);
    res.send(ingredients);
  } catch (err) {
    console.error(err);
  }
});

app.post("/recipes_by_contributor", cors(), async (req, res) => {
  let contributor_id = req.body.contributor_id;
  console.log(req.body);
  console.log(contributor_id);
  let query = `select * from
  RECIPES
JOIN RECIPE_INFO ON ( RECIPES.INFORMATION_ID = RECIPE_INFO.INFORMATION_ID)
JOIN CATEGORIES ON (RECIPES.CATEGORY_ID = CATEGORIES.CATEGORY_ID)
JOIN REGION ON (RECIPES.REGION_ID = REGION.REGION_ID)
JOIN USERS ON ( RECIPES.CONTRIBUTOR_ID = USERS.USER_ID)
JOIN NUTRITION_INFO ON ( RECIPES.RECIPE_ID = NUTRITION_INFO.RECIPE_ID)
where USERS.USER_ID = ${contributor_id}`;

  console.log(query);
  try {
    connection = await oracledb.getConnection({
      user: "Anwar",
      password: "pass",
      connectionString: "localhost/orcl",
    });
    let result = await connection.execute(query, [], {
      resultSet: true,
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    const rs = result.resultSet;
    let row;
    const recipelistObject = [];
    while ((row = await rs.getRow())) {
      recipelistObject.push({
        recipe_id: row.RECIPE_ID,
        recipe_title: row.RECIPE_TITLE,
        photo_url: row.PHOTO_URL,
        information_id: row.INFORMATION_ID,
        category_name: row.CATEGORY_NAME,
        region_name: row.REGION_NAME,
        contributor_name: row.USER_NAME,
        contributor_id: row.CONTRIBUTOR_ID,
        ingredients: row.INGREGIENTS,
        steps: row.STEPS,
        recipe_description: row.DESCRIPTION,
        video_url: row.VIDEO_URL,
        recipe_time: row.TIME_REQUIRED,
        recipe_calories: row.CALORIES,
        recipe_fat: row.FAT,
        recipe_protein: row.PROTEIN,
        recipe_cholesterol: row.CHOLESTEROL,
        recipe_carbohydrate: row.CARBOHYDRATE,
      });
    }
    console.log(recipelistObject);
    res.send(recipelistObject);
  } catch (err) {
    console.error(err);
  }
});

app.post("/keyword_search", cors(), async (req, res) => {
  let keyword = req.body.keyword_name;
  // let recipe_id_list = req.body.recipe_id_list;
  let query;
  let region_id = req.body.region_id;
  if (region_id == "") {
    query = `SELECT * FROM RECIPES JOIN RECIPE_INFO ON ( RECIPES.INFORMATION_ID = RECIPE_INFO.INFORMATION_ID)
  JOIN CATEGORIES ON (RECIPES.CATEGORY_ID = CATEGORIES.CATEGORY_ID)
  JOIN REGION ON (RECIPES.REGION_ID = REGION.REGION_ID)
  JOIN USERS ON ( RECIPES.CONTRIBUTOR_ID = USERS.USER_ID)
  JOIN NUTRITION_INFO ON ( RECIPES.RECIPE_ID = NUTRITION_INFO.RECIPE_ID)
	JOIN KEYWORDS ON (RECIPES.RECIPE_ID = KEYWORDS.RECIPE_ID)
  WHERE KEYWORD LIKE '%${keyword}%' `;
  } else {
    query = `SELECT * FROM RECIPES JOIN RECIPE_INFO ON ( RECIPES.INFORMATION_ID = RECIPE_INFO.INFORMATION_ID)
  JOIN CATEGORIES ON (RECIPES.CATEGORY_ID = CATEGORIES.CATEGORY_ID)
  JOIN REGION ON (RECIPES.REGION_ID = REGION.REGION_ID)
  JOIN USERS ON ( RECIPES.CONTRIBUTOR_ID = USERS.USER_ID)
  JOIN NUTRITION_INFO ON ( RECIPES.RECIPE_ID = NUTRITION_INFO.RECIPE_ID)
  JOIN KEYWORDS ON (RECIPES.RECIPE_ID = KEYWORDS.RECIPE_ID)
  WHERE KEYWORD LIKE '%${keyword}%' AND RECIPES.REGION_ID like '${region_id}'`;
  }

  console.log(req.body);
  console.log(keyword);
  // let query = `SELECT * FROM RECIPES JOIN RECIPE_INFO ON ( RECIPES.INFORMATION_ID = RECIPE_INFO.INFORMATION_ID)
  // JOIN CATEGORIES ON (RECIPES.CATEGORY_ID = CATEGORIES.CATEGORY_ID)
  // JOIN REGION ON (RECIPES.REGION_ID = REGION.REGION_ID)
  // JOIN USERS ON ( RECIPES.CONTRIBUTOR_ID = USERS.USER_ID)
  // JOIN NUTRITION_INFO ON ( RECIPES.RECIPE_ID = NUTRITION_INFO.RECIPE_ID)
  // JOIN KEYWORDS ON (RECIPES.RECIPE_ID = KEYWORDS.RECIPE_ID)
  // WHERE KEYWORD LIKE '%${keyword}%' And RECIPES.RECIPE_ID in ( ${recipe_id_list} ) `;
  console.log(query);
  try {
    connection = await oracledb.getConnection({
      user: "Anwar",
      password: "pass",
      connectionString: "localhost/orcl",
    });
    let result = await connection.execute(query, [], {
      resultSet: true,
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    const rs = result.resultSet;
    let row;
    const recipelistObject = [];
    while ((row = await rs.getRow())) {
      recipelistObject.push({
        recipe_id: row.RECIPE_ID,
        recipe_title: row.RECIPE_TITLE,
        photo_url: row.PHOTO_URL,
        information_id: row.INFORMATION_ID,
        category_name: row.CATEGORY_NAME,
        region_name: row.REGION_NAME,
        contributor_name: row.USER_NAME,
        contributor_id: row.CONTRIBUTOR_ID,
        ingredients: row.INGREGIENTS,
        steps: row.STEPS,
        recipe_description: row.DESCRIPTION,
        video_url: row.VIDEO_URL,
        recipe_time: row.TIME_REQUIRED,
        recipe_calories: row.CALORIES,
        recipe_fat: row.FAT,
        recipe_protein: row.PROTEIN,
        recipe_cholesterol: row.CHOLESTEROL,
        recipe_carbohydrate: row.CARBOHYDRATE,
      });
      console.log(recipelistObject);
    }
    res.send(recipelistObject);
  } catch (err) {
    console.error(err);
  }
});

app.post("/add_ingredient_search", cors(), async (req, res) => {
  let ingredient_name = req.body.ingredient_name;
  let recipe_id_list = req.body.recipe_id_list;
  console.log(req.body);
  console.log(ingredient_name);
  console.log(recipe_id_list);
  let query = `SELECT * FROM RECIPES JOIN RECIPE_INFO ON ( RECIPES.INFORMATION_ID = RECIPE_INFO.INFORMATION_ID)
  JOIN CATEGORIES ON (RECIPES.CATEGORY_ID = CATEGORIES.CATEGORY_ID)
  JOIN REGION ON (RECIPES.REGION_ID = REGION.REGION_ID)
  JOIN USERS ON ( RECIPES.CONTRIBUTOR_ID = USERS.USER_ID)
  JOIN NUTRITION_INFO ON ( RECIPES.RECIPE_ID = NUTRITION_INFO.RECIPE_ID)
	
	WHERE RECIPES.RECIPE_ID IN(


SELECT RECIPES.RECIPE_ID FROM RECIPES
	JOIN INGREDIENTS_LIST ON ( RECIPES.RECIPE_ID = INGREDIENTS_LIST.RECIPE_ID)
	JOIN INGREDIENTS ON ( INGREDIENTS.INGREDIENTS_ID = INGREDIENTS_LIST.INGREDIENT_LIST_ID)
	WHERE INGREDIENTS.INGREDIENTS_NAME LIKE '${ingredient_name}' And RECIPES.RECIPE_ID in ( ${recipe_id_list} )) `;
  console.log(query);
  try {
    connection = await oracledb.getConnection({
      user: "Anwar",
      password: "pass",
      connectionString: "localhost/orcl",
    });
    let result = await connection.execute(query, [], {
      resultSet: true,
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    const rs = result.resultSet;
    let row;
    const recipelistObject = [];

    while ((row = await rs.getRow())) {
      recipelistObject.push({
        recipe_id: row.RECIPE_ID,
        recipe_title: row.RECIPE_TITLE,

        photo_url: row.PHOTO_URL,
        information_id: row.INFORMATION_ID,
        category_name: row.CATEGORY_NAME,
        region_name: row.REGION_NAME,
        contributor_name: row.USER_NAME,
        contributor_id: row.CONTRIBUTOR_ID,
        ingredients: row.INGREGIENTS,
        steps: row.STEPS,
        recipe_description: row.DESCRIPTION,
        video_url: row.VIDEO_URL,
        recipe_time: row.TIME_REQUIRED,
        recipe_calories: row.CALORIES,
        recipe_fat: row.FAT,
        recipe_protein: row.PROTEIN,
        recipe_cholesterol: row.CHOLESTEROL,
        recipe_carbohydrate: row.CARBOHYDRATE,
      });
    }
    console.log(recipelistObject);
    res.send(recipelistObject);
  } catch (err) {
    console.error(err);
  }
});
app.post("/exclude_ingredient_search", cors(), async (req, res) => {
  let ingredient_name = req.body.ingredient_name;
  let recipe_id_list = req.body.recipe_id_list;
  if (recipe_id_list.length == 0) {
    recipe_id_list = null;
  }
  console.log(req.body);
  console.log(ingredient_name);
  console.log(recipe_id_list);
  let query = `SELECT * FROM RECIPES JOIN RECIPE_INFO ON ( RECIPES.INFORMATION_ID = RECIPE_INFO.INFORMATION_ID)
  JOIN CATEGORIES ON (RECIPES.CATEGORY_ID = CATEGORIES.CATEGORY_ID)
  JOIN REGION ON (RECIPES.REGION_ID = REGION.REGION_ID)
  JOIN USERS ON ( RECIPES.CONTRIBUTOR_ID = USERS.USER_ID)
  JOIN NUTRITION_INFO ON ( RECIPES.RECIPE_ID = NUTRITION_INFO.RECIPE_ID)
	
	WHERE RECIPES.RECIPE_ID not  IN(


SELECT RECIPES.RECIPE_ID FROM RECIPES
	JOIN INGREDIENTS_LIST ON ( RECIPES.RECIPE_ID = INGREDIENTS_LIST.RECIPE_ID)
	JOIN INGREDIENTS ON ( INGREDIENTS.INGREDIENTS_ID = INGREDIENTS_LIST.INGREDIENT_LIST_ID)
	WHERE INGREDIENTS.INGREDIENTS_NAME  LIKE '%${ingredient_name}%' And RECIPES.RECIPE_ID in ( ${recipe_id_list} )) `;
  console.log(query);
  try {
    connection = await oracledb.getConnection({
      user: "Anwar",
      password: "pass",
      connectionString: "localhost/orcl",
    });
    let result = await connection.execute(query, [], {
      resultSet: true,
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    const rs = result.resultSet;
    let row;
    const recipelistObject = [];

    while ((row = await rs.getRow())) {
      recipelistObject.push({
        recipe_id: row.RECIPE_ID,
        recipe_title: row.RECIPE_TITLE,

        photo_url: row.PHOTO_URL,
        information_id: row.INFORMATION_ID,
        category_name: row.CATEGORY_NAME,
        region_name: row.REGION_NAME,
        contributor_name: row.USER_NAME,
        contributor_id: row.CONTRIBUTOR_ID,
        ingredients: row.INGREGIENTS,
        steps: row.STEPS,
        recipe_description: row.DESCRIPTION,
        video_url: row.VIDEO_URL,
        recipe_time: row.TIME_REQUIRED,
        recipe_calories: row.CALORIES,
        recipe_fat: row.FAT,
        recipe_protein: row.PROTEIN,
        recipe_cholesterol: row.CHOLESTEROL,
        recipe_carbohydrate: row.CARBOHYDRATE,
      });
    }
    console.log(recipelistObject);
    res.send(recipelistObject);
  } catch (err) {
    console.error(err);
  }
});

app.post("/add_favourite", cors(), async (req, res) => {
  let user_id = req.body.user_id;
  let recipe_id = req.body.recipe_id;
  console.log(req.body);
  console.log(user_id);
  console.log(recipe_id);
  let query = `INSERT INTO FAVOURITES (USER_ID, RECIPE_ID) VALUES ( ${user_id}, ${recipe_id})`;
  console.log(query);
  try {
    connection = await oracledb.getConnection({
      user: "Anwar",
      password: "pass",
      connectionString: "localhost/orcl",
    });
    let result = await connection.execute(query, [], {
      resultSet: true,
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    connection.commit();
    // const rs = result.resultSet;
    // let row;
    // const recipelistObject = [];

    // res.send(recipelistObject);
  } catch (err) {
    console.error(err);
  }
});
app.post("/remove_favourite", cors(), async (req, res) => {
  let user_id = req.body.user_id;
  let recipe_id = req.body.recipe_id;
  console.log(req.body);
  console.log(user_id);
  console.log(recipe_id);
  let query = `DELETE FROM FAVOURITES WHERE USER_ID = ${user_id} AND RECIPE_ID = ${recipe_id}`;
  console.log(query);
  try {
    connection = await oracledb.getConnection({
      user: "Anwar",
      password: "pass",
      connectionString: "localhost/orcl",
    });
    let result = await connection.execute(query, [], {
      resultSet: true,
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    connection.commit();
  } catch (err) {
    console.error(err);
  }
});

app.post("/get_my_favourites", cors(), async (req, res) => {
  let user_id = req.body.user_id;
  console.log(req.body);
  console.log(user_id);
  let query = `SELECT * FROM FAVOURITES JOIN RECIPES ON ( FAVOURITES.RECIPE_ID = RECIPES.RECIPE_ID)
          JOIN RECIPE_INFO ON ( RECIPES.INFORMATION_ID = RECIPE_INFO.INFORMATION_ID)
          JOIN CATEGORIES ON (RECIPES.CATEGORY_ID = CATEGORIES.CATEGORY_ID)
          JOIN REGION ON (RECIPES.REGION_ID = REGION.REGION_ID)
          JOIN USERS ON ( RECIPES.CONTRIBUTOR_ID = USERS.USER_ID)
          JOIN NUTRITION_INFO ON ( RECIPES.RECIPE_ID = NUTRITION_INFO.RECIPE_ID)
          WHERE FAVOURITES.USER_ID = ${user_id}`;
  console.log(query);
  try {
    connection = await oracledb.getConnection({
      user: "Anwar",
      password: "pass",
      connectionString: "localhost/orcl",
    });
    let result = await connection.execute(query, [], {
      resultSet: true,
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    const rs = result.resultSet;
    let row;
    const recipelistObject = [];

    while ((row = await rs.getRow())) {
      recipelistObject.push({
        recipe_id: row.RECIPE_ID,
        recipe_title: row.RECIPE_TITLE,

        photo_url: row.PHOTO_URL,
        information_id: row.INFORMATION_ID,
        category_name: row.CATEGORY_NAME,
        region_name: row.REGION_NAME,
        contributor_name: row.USER_NAME,
        contributor_id: row.CONTRIBUTOR_ID,
        ingredients: row.INGREGIENTS,
        steps: row.STEPS,
        recipe_description: row.DESCRIPTION,
        video_url: row.VIDEO_URL,

        recipe_time: row.TIME_REQUIRED,
        recipe_calories: row.CALORIES,
        recipe_fat: row.FAT,
        recipe_protein: row.PROTEIN,
        recipe_cholesterol: row.CHOLESTEROL,
        recipe_carbohydrate: row.CARBOHYDRATE,
      });
    }
    console.log(recipelistObject);
    res.send(recipelistObject);
  } catch (err) {
    console.error(err);
  }
});

app.post("/add_review", cors(), async (req, res) => {
  let user_id = req.body.user_id;
  let recipe_id = req.body.recipe_id;
  let review_text = req.body.commentText;
  let rating = req.body.rating;

  console.log(req.body);
  console.log(user_id);
  console.log(recipe_id);
  console.log(review_text);

  try {
    connection = await oracledb.getConnection({
      user: "Anwar",
      password: "pass",
      connectionString: "localhost/orcl",
    });
    let result = await connection.execute(
      `SELECT MAX(REVIEW_ID) ID FROM REVIEWS`,
      [],
      {
        resultSet: true,
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      }
    );

    const rs = result.resultSet;
    let row = await rs.getRow();
    const rev_id = row.ID + 1;

    query = `INSERT INTO REVIEWS VALUES (${rev_id}, ${recipe_id}, ${user_id}, '${review_text}', ${rating}, SYSDATE)`;
    console.log(query);

    result = await connection.execute(query, [], {
      resultSet: true,
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    connection.commit();
  } catch (err) {
    console.error(err);
  }
});

app.post("/has_reviewed", cors(), async (req, res) => {
  let user_id = req.body.user_id;
  let recipe_id = req.body.recipe_id;
  // console.log(req.body);
  // console.log(user_id);
  // console.log(recipe_id);
  let query = `SELECT * FROM REVIEWS WHERE USER_ID = ${user_id} AND RECIPE_ID = ${recipe_id}`;
  try {
    connection = await oracledb.getConnection({
      user: "Anwar",
      password: "pass",
      connectionString: "localhost/orcl",
    });
    let result = await connection.execute(query, [], {
      resultSet: true,
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    const rs = result.resultSet;
    let row;
    // const reviewObject = [];

    row = await rs.getRow();
    console.log(query);
    console.log(row);
    if (row === undefined) {
      res.send(false);
      console.log(false);
    } else {
      res.send(true);
      console.log(true);
    }

    // while ((row = await rs.getRow())) {
    //   reviewObject.push({
    //     review_id: row.REVIEW_ID,
    //     recipe_id: row.RECIPE_ID,
    //     user_id: row.USER_ID,
    //     review_text: row.COMMENT_POSTED,
    //     rating: row.RATING,
    //     review_date: row.TIME_REVIEWED,
    //   });
    // }
    // console.log(reviewObject);
    // res.send(reviewObject);
  } catch (err) {
    console.error(err);
  }
});

app.post("/isAddedToFav", cors(), async (req, res) => {
  let user_id = req.body.user_id;
  let recipe_id = req.body.recipe_id;
  // console.log(req.body);
  // console.log(user_id);
  // console.log(recipe_id);
  let query = `SELECT * FROM FAVOURITES WHERE USER_ID = ${user_id} AND RECIPE_ID = ${recipe_id}`;
  try {
    connection = await oracledb.getConnection({
      user: "Anwar",
      password: "pass",
      connectionString: "localhost/orcl",
    });
    let result = await connection.execute(query, [], {
      resultSet: true,
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    const rs = result.resultSet;
    let row;
    // const reviewObject = [];

    row = await rs.getRow();
    console.log(query);
    console.log(row);
    if (row === undefined) {
      res.send(false);
      console.log(false);
    } else {
      res.send(true);
      console.log(true);
    }
  } catch (err) {
    console.error(err);
  }
});

app.post("/review_summary", cors(), async (req, res) => {
  let recipe_id = req.body.recipe_id;

  let query = `SELECT AVG(RATING) RATING,COUNT(RATING) COUNT_REVIEWS FROM REVIEWS WHERE RECIPE_ID = ${recipe_id}`;
  try {
    connection = await oracledb.getConnection({
      user: "Anwar",
      password: "pass",
      connectionString: "localhost/orcl",
    });
    let result = await connection.execute(query, [], {
      resultSet: true,
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    const rs = result.resultSet;
    let row;
    const reviewObject = [];

    row = await rs.getRow();
    reviewObject.push({
      rating: row.RATING,
      count: row.COUNT_REVIEWS,
    });

    console.log(query);
    console.log(row);

    res.send(reviewObject);
  } catch (err) {
    console.error(err);
  }
});

app.post("/add", cors(), async (req, res) => {
  console.log(req.body);
  const user_id = req.body.user_id;
  let recipe_title = req.body.recipe_title;
  const photo_url = req.body.photo_url;
  let description = req.body.description;
  let steps = req.body.steps;
  const region_name = req.body.region_name;
  const time_required = req.body.time_required;
  const servings = req.body.servings;
  const protein = req.body.protein;
  const carbohydrate = req.body.carbohydrate;
  const cholesterol = req.body.cholesterol;
  const fat = req.body.fat;
  const calories = req.body.calories;
  const category = req.body.category;
  ingredients = [];
  amounts = [];
  recipe_title = recipe_title.replaceAll("'", "");
  description = description.replaceAll("'", "");

  steps = steps.replaceAll("'", "");
  // steps = steps.replace("'", "@");
  console.log(steps);
  console.log(description);

  for (j = 1; j <= 5; j++) {
    temp1 = "req.body.ingredient" + j;
    temp2 = "req.body.amount" + j;
    ingredients[j - 1] = eval(temp1).trim();
    amounts[j - 1] = eval(temp2).trim();
  }
  try {
    connection = await oracledb.getConnection({
      user: "Anwar",
      password: "pass",
      connectionString: "localhost/orcl",
    });
    result = await connection.execute(
      `SELECT RECIPE_TITLE FROM RECIPES WHERE LOWER(RECIPE_TITLE) = LOWER('${recipe_title}')`,
      [],
      {
        resultSet: true,
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      }
    );
    primeResult = result.resultSet;
    let primeRow;
    if (!(primeRow = await primeResult.getRow())) {
      let row;
      result = await connection.execute(
        `SELECT MAX(RECIPE_ID) ID FROM RECIPES`,
        [],
        {
          resultSet: true,
          outFormat: oracledb.OUT_FORMAT_OBJECT,
        }
      );
      rs = result.resultSet;
      row = await rs.getRow();
      const id = row.ID + 1;
      const contributor = user_id;
      result = await connection.execute(
        `SELECT REGION_ID FROM REGION WHERE LOWER(REGION_NAME) = LOWER('${region_name}')`,
        [],
        {
          resultSet: true,
          outFormat: oracledb.OUT_FORMAT_OBJECT,
        }
      );
      rs = result.resultSet;
      row = await rs.getRow();
      const region_id = row.REGION_ID;
      result = await connection.execute(
        `SELECT MAX(CATEGORY_ID) ID FROM CATEGORIES`,
        [],
        {
          resultSet: true,
          outFormat: oracledb.OUT_FORMAT_OBJECT,
        }
      );
      rs = result.resultSet;
      row = await rs.getRow();
      const category_id = row.ID + 1;
      let query = `INSERT INTO CATEGORIES
      SELECT ${category_id}, '${category}'
      FROM DUAL
      WHERE NOT EXISTS (SELECT * 
                       FROM CATEGORIES 
                       WHERE LOWER(CATEGORY_NAME) = LOWER('${category}'))`;
      result = await connection.execute(query);
      connection.commit();
      result = await connection.execute(
        `SELECT CATEGORY_ID FROM CATEGORIES WHERE LOWER(CATEGORY_NAME) = LOWER('${category}')`,
        [],
        {
          resultSet: true,
          outFormat: oracledb.OUT_FORMAT_OBJECT,
        }
      );
      rs = result.resultSet;
      row = await rs.getRow();
      cat_id = row.CATEGORY_ID;
      query = `INSERT INTO RECIPE_INFO VALUES (${id}, '${description}', '${steps}', ${id}, 'link')`;
      result = await connection.execute(query);
      query = `INSERT INTO RECIPES VALUES (${id}, '${recipe_title}', '${photo_url}', ${id}, ${cat_id}, '${region_id}', '${time_required}', ${contributor}, ${servings})`;
      result = await connection.execute(query);
      query = `INSERT INTO NUTRITION_INFO VALUES (${id}, ${protein}, ${carbohydrate}, ${cholesterol}, ${fat}, ${calories})`;
      result = await connection.execute(query);

      query = `INSERT INTO REVIEW_SUMMARY VALUES (${id}, 0.0, 0)`;
      result = await connection.execute(query);
      connection.commit();
      result = await connection.execute(
        `SELECT MAX(INGREDIENTS_ID) ID FROM INGREDIENTS`,
        [],
        {
          resultSet: true,
          outFormat: oracledb.OUT_FORMAT_OBJECT,
        }
      );
      rs = result.resultSet;
      row = await rs.getRow();
      ingredient_id = row.ID + 1;
      c = 0;
      for (j = 0; j < ingredients.length; j++) {
        query = `INSERT INTO INGREDIENTS
      SELECT ${ingredient_id + c++}, '${ingredients[j]}'
      FROM DUAL
      WHERE NOT EXISTS (SELECT * 
                       FROM INGREDIENTS 
                       WHERE LOWER(INGREDIENTS_NAME) = LOWER('${
                         ingredients[j]
                       }'))`;
        result = await connection.execute(query);
        connection.commit();
        result = await connection.execute(
          `SELECT INGREDIENTS_ID FROM INGREDIENTS WHERE LOWER(INGREDIENTS_NAME) = LOWER('${ingredients[j]}')`,
          [],
          {
            resultSet: true,
            outFormat: oracledb.OUT_FORMAT_OBJECT,
          }
        );
        rs = result.resultSet;
        row = await rs.getRow();
        ingredient_list_id = row.INGREDIENTS_ID;
        query = `INSERT INTO INGREDIENTS_LIST VALUES (${id}, '${amounts[j]}', ${ingredient_list_id})`;
        result = await connection.execute(query);
        connection.commit();
      }
      console.log("Successful");
    } else {
      console.log("Recipe with same name already exists");
    }
  } catch (err) {
    console.error(err);
  }
});

app.post("/isContributor", async (req, res) => {
  let user_id = req.body.user_id;
  let recipe_id = req.body.recipe_id;
  let connection;
  let result;
  let row;
  try {
    connection = await oracledb.getConnection({
      user: "Anwar",
      password: "pass",
      connectionString: "localhost/orcl",
    });
    result = await connection.execute(
      `SELECT CONTRIBUTOR_ID FROM RECIPES WHERE RECIPE_ID = ${recipe_id}`,
      [],
      {
        resultSet: true,
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      }
    );
    rs = result.resultSet;
    row = await rs.getRow();
    console.log("Verification");
    console.log(row);
    console.log(row.CONTRIBUTOR_ID);
    if (row.CONTRIBUTOR_ID === user_id) {
      console.log("verified");
      console.log(true);
      res.send({
        isContributor: true,
      });
    } else {
      res.send({
        isContributor: false,
      });
    }
  } catch (err) {
    console.error(err);
  }
});

// console.log(reviewObject);
// res.send(reviewObject);
// ))

const PORT = process.env.PORT || 4000;
// run();

app.listen(PORT, console.log(`Server started on port ${PORT}`));

async function run() {
  //   let connection;

  try {
    connection = await oracledb.getConnection({
      user: "Anwar",
      password: "pass",
      connectionString: "localhost/orcl",
    });

    console.log("Successfully connected to Oracle Database");

    // Insert some data

    // const sql = `insert into products (id, name, price, description) values(:1, :2, :3, :4)`;

    // const rows =
    //   [[8, "p8", 100, "d8"],
    //   [9, "p9", 200, "d9"],
    //   [10, "p10", 300, "d10"]];

    // let result = await connection.executeMany(sql, rows);

    // console.log(result.rowsAffected, "Rows Inserted");

    // connection.commit();

    // Now query the rows

    result = await connection.execute(`select * from recipes`, [], {
      resultSet: true,
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });

    let rs = result.resultSet;
    let row;
    // console.log(await rs.getRow());

    while ((row = await rs.getRow())) {
      console.log(
        row.RECIPE_ID,
        " ",
        row.RECIPE_TITLE,
        " ",
        row.PHOTO_URL,
        " ",
        row.INFORMATION_ID,
        " ",
        row.CATEGORY_ID,
        " ",
        row.REGION_ID,
        " "
      );
    }

    // console.log(await rs.getRow());
    // app.get("/", (req, res) => {
    //   res.send("Hello World!");
    // });
    //     app.get("/home", cors(), async (req, res) => {
    //       let query = `select * from
    //   RECIPES
    // JOIN RECIPE_INFO ON ( RECIPES.INFORMATION_ID = RECIPE_INFO.INFORMATION_ID)
    // JOIN CATEGORIES ON (RECIPES.CATEGORY_ID = CATEGORIES.CATEGORY_ID)
    // JOIN REGION ON (RECIPES.REGION_ID = REGION.REGION_ID)
    // JOIN USERS ON ( RECIPES.CONTRIBUTOR_ID = USERS.USER_ID)
    // JOIN NUTRITION_INFO ON ( RECIPES.RECIPE_ID = NUTRITION_INFO.RECIPE_ID)`;
    //       let result = await connection.execute(query, [], {
    //         resultSet: true,
    //         outFormat: oracledb.OUT_FORMAT_OBJECT,
    //       });
    //       const rs = result.resultSet;
    //       let row;
    //       const recipelistObject = [];
    //       row = await rs.getRow();
    //       recipelistObject.push({
    //         recipe_id: row.RECIPE_ID,
    //         recipe_title: row.RECIPE_TITLE,
    //         photo_url: row.PHOTO_URL,
    //         information_id: row.INFORMATION_ID,
    //         category_name: row.CATEGORY_NAME,
    //         region_name: row.REGION_NAME,
    //         contributor_name: row.USER_NAME,
    //         contributor_id: row.CONTRIBUTOR_ID,
    //         ingredients: row.INGREGIENTS,
    //         steps: row.STEPS,
    //         recipe_description: row.DESCRIPTION,
    //         video_url: row.VIDEO_URL,
    //         recipe_time: row.TIME_REQUIRED,
    //         recipe_calories: row.CALORIES,
    //         recipe_fat: row.FAT,
    //         recipe_protein: row.PROTEIN,
    //         recipe_cholesterol: row.CHOLESTEROL,
    //         recipe_carbohydrate: row.CARBOHYDRATE,
    //       });
    //       console.log(recipelistObject);
    //       res.send(recipelistObject);
    //     });

    app.get("/regions", cors(), async (req, res) => {
      //   let { name } = req.body;
      let name = req.body;
      // console.log(req.body);

      // console.log(name);
      //   let name2 = `'%${name}%'`;
      //   let name2 = "%" + JSON.stringify(name.name) + "%";
      let name2 = "'%" + name.name + "%'";
      // console.log(name2);
      // try {
      //   connection = await oracledb.getConnection({
      //     user: "Anwar",
      //     password: "pass",
      //     connectionString: "localhost/orcl",
      //   });
      // let query = `select * from recipes where region_id like ${name2}`;
      // let query = `select * from recipes`;
      let query = `select * from region`;
      let result2 = await connection.execute(query, [], {
        resultSet: true,
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      });
      const rs2 = result2.resultSet;
      let row2;
      const regionObject = [];
      while ((row2 = await rs2.getRow())) {
        regionObject.push({
          region_id: row2.REGION_ID,
          region_name: row2.REGION_NAME,
        });
        // console.log("this is for regions" + row2.REGION_ID);
      }
      res.send(regionObject);
      // row2 = rs2.getRow();

      // await rs.close();
      // } catch (err) {
      //   console.error(err);
      // }
      //   console.log(req.body);
    });

    app.get("/categories", cors(), async (req, res) => {
      let query = `select * from categories`;
      let result = await connection.execute(query, [], {
        resultSet: true,
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      });
      const rs = result.resultSet;
      let row;
      const categoryObject = [];
      while ((row = await rs.getRow())) {
        categoryObject.push({
          category_id: row.CATEGORY_ID,
          category_name: row.CATEGORY_NAME,
        });
      }
      res.send(categoryObject);
    });

    app.get("/search", cors(), async (req, res) => {
      console.log(req);
      let { search_name } = req.body;
      console.log(search_name);
      let query = `select * from category where recipe_title like '${search_name.name}'`;
      console.log(query);
      let resultCategory = connection.execute(query, [], {
        resultSet: true,
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      });

      let rs = resultCategory.resultSet;
      let row;
      const recipelistObject = [];
      while ((row = await rs.getRow())) {
        recipelistObject.push({
          recipe_id: row.RECIPE_ID,
          recipe_title: row.RECIPE_TITLE,
          photo_url: row.PHOTO_URL,
          information_id: row.INFORMATION_ID,
          category_id: row.CATEGORY_ID,
          region_id: row.REGION_ID,
          contributor_id: row.CONTRIBUTOR_ID,
        });
      }
      console.log(recipelistObject);
      res.send(recipelistObject);
    });

    app.get("/recipes", cors(), async (req, res) => {
      // res.send("Hello World! this is recipes");

      let query = `select * from 
      RECIPES 
    JOIN RECIPE_INFO ON ( RECIPES.INFORMATION_ID = RECIPE_INFO.INFORMATION_ID) 
    JOIN CATEGORIES ON (RECIPES.CATEGORY_ID = CATEGORIES.CATEGORY_ID)
    JOIN REGION ON (RECIPES.REGION_ID = REGION.REGION_ID)
    JOIN USERS ON ( RECIPES.CONTRIBUTOR_ID = USERS.USER_ID)
    JOIN NUTRITION_INFO ON ( RECIPES.RECIPE_ID = NUTRITION_INFO.RECIPE_ID)`;
      let allRecipeQuery = await connection.execute(query, [], {
        resultSet: true,
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      });
      let recipeRes = allRecipeQuery.resultSet;
      let row;
      const recipelistObject = [];
      while ((row = await recipeRes.getRow())) {
        recipelistObject.push({
          recipe_id: row.RECIPE_ID,
          recipe_title: row.RECIPE_TITLE,
          photo_url: row.PHOTO_URL,
          information_id: row.INFORMATION_ID,
          category_name: row.CATEGORY_NAME,
          region_name: row.REGION_NAME,
          contributor_name: row.USER_NAME,
          contributor_id: row.CONTRIBUTOR_ID,
          ingredients: row.INGREGIENTS,
          steps: row.STEPS,
          recipe_description: row.DESCRIPTION,
          video_url: row.VIDEO_URL,
          recipe_time: row.TIME_REQUIRED,
          recipe_calories: row.CALORIES,
          recipe_fat: row.FAT,
          recipe_protein: row.PROTEIN,
          recipe_cholesterol: row.CHOLESTEROL,
          recipe_carbohydrate: row.CARBOHYDRATE,
        });
      }
      console.log(recipelistObject);
      res.send(recipelistObject);
      // console.log(recipeRes);
      // console.log(allRecipeQuery);
      // let row;
      // while ((row = await rs.getRow())) {
      //   console.log(
      //     row.RECIPE_ID,
      //     " ",
      //     row.RECIPE_TITLE,
      //     " ",
      //     row.PHOTO_URL,
      //     " ",
      //     row.INFORMATION_ID,
      //     " ",
      //     row.CATEGORY_ID,
      //     " ",
      //     row.REGION_ID,
      //     " "
      //   );
      // }
    });

    app.get("/keywords", cors(), async (req, res) => {
      let query = `SELECT DISTINCT(keyword) FROM KEYWORDS`;
      console.log(query);

      let result = await connection.execute(query, [], {
        resultSet: true,
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      });
      const rs = result.resultSet;
      let row;
      const keywords = [];
      while ((row = await rs.getRow())) {
        keywords.push({
          keyword_name: row.KEYWORD,
        });
      }
      console.log(keywords);
      res.send(keywords);
    });

    app.get("/distinct_ingredients", cors(), async (req, res) => {
      let query = `SELECT * FROM ingredients`;
      console.log(query);

      let result = await connection.execute(query, [], {
        resultSet: true,
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      });
      const rs = result.resultSet;
      let row;
      const ingredients = [];

      while ((row = await rs.getRow())) {
        ingredients.push({
          id: row.INGREDIENTS_ID,
          ingredient_name: row.INGREDIENTS_NAME,
        });
      }
      console.log(ingredients);
      res.send(ingredients);
    });

    // await rs.close();
  } catch (err) {
    console.error(err);
    // } finally {
    //   if (connection) {
    //     try {
    //       await connection.close();
    //     } catch (err) {
    //       console.error(err);
    //     }
    //   }
  }
}

run();
