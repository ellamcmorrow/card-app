//type for API data
export interface Product {
  ProductId: number;
  Title: string;
  ProductImage: {
    Link: {
      Href: string;
    };
  };
}
