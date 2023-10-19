import "styled-components";
import { MPTheme } from "./src/MPTheme";

declare module "styled-components" {
  export interface DefaultTheme extends MPTheme {} // Use the Theme type you defined earlier
}
