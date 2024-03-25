import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async (req, res, next) => {
  try {
    // Add recipe to the data base
    console.log(req.file);
    const createResult = await RecipeModel.create({
      ...req.body,
      image: req.file.filename,
    });
    // return response
    res.status(201).json(createResult);
  } catch (error) {
    // Forward to express error handler
    next(error);
  }
};

export const getRecipes = async (req, res, next) => {
  try {
    // Get all recipes from database
    const findRecipes = await RecipeModel.find();
    // Return response
    res.status(200).json(findRecipes);
  } catch (error) {
    // Forward to express error handler
    next(error);
  }
};

export const getRecipe = async (req, res, next) => {
  try {
    // Get single recipe with id
    const recipeId = req.params.id;
    const findRecipe = await RecipeModel.findById(recipeId);
    console.log(recipeId);
    // Return 404 is recipe not found
    if (findRecipe === null) {
      return res.status(404).json({
        message: `Recipe with ObjectId: ${req.params.id} Not Found!`,
      });
    }
    // Return response
    res.status(200).json(findRecipe);
  } catch (error) {
    // Forward to express error handler
    next(error);
  }
};

export const updateRecpe = (req, res) => {
  res.send(recipes);
};

export const deleteRecipe = (req, res) => {
  res.send(recipes);
};
