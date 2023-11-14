// # Have 2 types in project
// # -- JS: Connect with jsx
// # -- TS: Connect with tsx

let TYPE_OF_PROJECT: "TS" | "JS" = "TS";

export const checkTypeOfProject = (): string => {
  if (TYPE_OF_PROJECT === "JS") {
    return "./src/project/js/App.jsx";
  } else {
    return "./src/project/ts/App.tsx";
  }
}