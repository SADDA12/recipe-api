import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async (req, res) => {
    // Adda recipe to the data base
    const createresult = await RecipeModel.create(req.body)
    // return response
    res.json(createresult);
}

export const getRecipes = (req, res) => {
    res.send(recipes);
}

export const getRecipe = (req, res) => {
    res.send(recipes);
}

export const updateRecpe = (req, res) => {
    res.send(recipes);
}

export const deleteRecipe = (req, res) => {
    res.send(recipes);
}