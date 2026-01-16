import js from "@eslint/js";
import frontmatter from "eslint-plugin-frontmatter";

export default [
 js.configs.recommended,
 {
 files: ["**/*.js"],
 plugins: {
 frontmatter
 },
 processor: "frontmatter/frontmatter"
 },
 {
 // Global ignores if needed
 ignores: ["node_modules/", "dist/"]
 }
];
