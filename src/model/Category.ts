import { v4 as uuidV4 } from "uuid";

class Category {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor(name: string, description: string, created_at: Date) {
    this.created_at = created_at;
    this.description = description;
    this.name = name;
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Category };
