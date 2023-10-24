//type for JSON data
export interface Product {
  ProductId: number;
  Title: string;
  Description: string;
  ProductImage: {
    Link: {
      Href: string;
    };
  };
}
