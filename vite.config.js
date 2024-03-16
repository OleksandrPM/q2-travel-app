import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default {
  base: "/q2-travel-app",
  plugins: [
    handlebars({
      partialDirectory: [
        resolve(__dirname, "./src/partials"),
        resolve(__dirname, "./src/partials/components"),
      ],
    }),
  ],
};
