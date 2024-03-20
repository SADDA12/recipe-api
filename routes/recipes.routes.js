import { Router } from "express";
import { recipes } from "../data.js";
import dotenv from "dotenv";
import { addRecipe, deleteRecipe, getRecipe, getRecipes, updateRecpe } from "../controllers/recipes.controller.js";

export const recipesRouter = Router()

recipesRouter.post('/', addRecipe)

recipesRouter.get('/', getRecipes)

recipesRouter.get('/:id', getRecipe)

recipesRouter.patch('/:id', updateRecpe)

recipesRouter.delete('/:id', deleteRecipe) 