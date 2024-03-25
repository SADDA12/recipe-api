import { Router } from "express";
import { recipes } from "../data.js";
import dotenv from "dotenv";
import multer from "multer";
import { addRecipe, deleteRecipe, getRecipe, getRecipes, updateRecpe } from "../controllers/recipes.controller.js";

// Configure upload middleware
const upload = multer({dest: 'uploads'});

// Create recipes router
export const recipesRouter = Router()

recipesRouter.post('/', upload.single('image'), addRecipe)

recipesRouter.get('/', getRecipes)

recipesRouter.get('/:id', getRecipe)

recipesRouter.patch('/:id', updateRecpe)

recipesRouter.delete('/:id', deleteRecipe) 