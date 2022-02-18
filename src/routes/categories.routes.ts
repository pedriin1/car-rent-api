import { Router } from "express";
import { v4 as uuidV4 } from "uuid";
import { Category } from "../model/Category";
const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const category = new Category(name, description, new Date());

  categories.push(category);
  console.log(categories);
  return res.status(201).send();
});
export { categoriesRoutes };
