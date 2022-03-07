import { Response, Request } from "express";
import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(req: Request, res: Response): Response {
    const all = this.listCategoriesUseCase.execute();

    return res.json(all);
  }
}

export { ListCategoriesController };
