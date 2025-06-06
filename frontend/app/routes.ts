import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/root/home.tsx"),
  layout("routes/auth/auth-layout.tsx", [
    route("sign-in", "routes/auth/sign-in.tsx"),        // changed to lowercase for consistency
    route("sign-up", "routes/auth/sign-up.tsx"),      // keep only one
    route("forget-password", "routes/auth/forgot-password.tsx"),
    route("reset-password", "routes/auth/reset-password.tsx"),
    route("verify-email", "routes/auth/verify-email.tsx"),
  ]),
] satisfies RouteConfig;
