import React from "react";
import type { Route } from "../../+types/root";
import { Button } from "@/components/ui/button"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "OptiFlow" },
    { description: "Welcome to the home page" }
  ];
}

const Homepage =()=>{
  return (
    <div>Homepage
      <Button>Click me</Button>
    </div>
  )
}

export default Homepage;
