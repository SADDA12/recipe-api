import { Router } from "express";
import { recipes } from "../data.js";
import dotenv from "dotenv";
import multer from "multer";
import { addRecipe, deleteRecipe, getRecipe, getRecipes, updateRecpe } from "../controllers/recipes.controller.js";
import { MulterSaveFilesOrgStorage } from "multer-savefilesorg-storage";

// Load env variables
dotenv.config();

// Configure upload middleware
// const upload = multer({dest: 'uploads/images'});
const upload = multer({
    storage: MulterSaveFilesOrgStorage({
        serverPath: `https://savefiles.org/api/v1/uploads`,
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/recipes/images/*'
    }),
    preservePath: true
})

// Create recipes router
export const recipesRouter = Router()

recipesRouter.post('/', upload.single('image'), addRecipe)

recipesRouter.get('/', getRecipes)

recipesRouter.get('/:id', getRecipe)

recipesRouter.patch('/:id', updateRecpe)

recipesRouter.delete('/:id', deleteRecipe) 