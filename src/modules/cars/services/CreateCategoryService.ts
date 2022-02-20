import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoriesAlreadyExist = this.categoriesRepository.findByName(name);
    if (categoriesAlreadyExist) {
      throw new Error(`Category already exists!`);
    }
    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
