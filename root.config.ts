// # Type of projects
// # -- JS: Javascript
// # -- TS: Typescript

let TYPE_OF_PROJECT: "JS" | "TS" = "JS";

export const checkTypeOfProject = (): string => {
  if (TYPE_OF_PROJECT === "TS") {
    return "./src/types/App.tsx"
  } else {
    return "./src/types/App.jsx"
  }
}
