//type for API data
interface Product {
  ProductId: number;
  Title: string;
  ProductImage: {
    Link: {
      Href: string;
    };
  };
}
