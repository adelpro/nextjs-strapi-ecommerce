export interface PRODUCT_ATTRIBUTES {
  title: string;
  description: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  Category: string;
}
export interface PRODUCT {
  id: string;
  attributes: PRODUCT_ATTRIBUTES;
}

export interface META {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
