import { index, layout, route, RouteConfig } from "@react-router/dev/routes";

export default [
  layout("./layout/main.tsx", [
    index("./routes/home.tsx"),
    route("about", "./routes/about.tsx"),
    route("bathrooms", "./routes/bathrooms.tsx"),
    route("contact", "./routes/contact.tsx"),
    route("kitchens", "./routes/kitchens.tsx"),
    route("projects", "./routes/projects.tsx"),
    route("resources", "./routes/resources.tsx"),
    route("services", "./routes/services.tsx"),
    route("service-areas", "./routes/service-areas.tsx")
  ])
] satisfies RouteConfig;
