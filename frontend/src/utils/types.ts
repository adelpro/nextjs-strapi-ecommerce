export interface PRODUCT {
  id: string;
  attributes: {
    title: string;
    description: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    Category: string;
  };
}

export interface META {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
