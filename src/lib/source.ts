import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import * as LucideIcons from "lucide-react";
import React from "react";

// `loader()` also assign a URL to your pages
// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  icon: (icon: string | undefined) => {
    if (!icon) return undefined;

    // Convert kebab-case to PascalCase for Lucide icons
    const iconName = icon
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");

    // Use a type assertion with unknown as an intermediate step
    const IconComponent = (
      LucideIcons as unknown as Record<
        string,
        React.ComponentType<{ size: number; className?: string }>
      >
    )[iconName];

    // Map icons to Tailwind color classes
    let colorClass = "";
    if (icon === "folder-tree") {
      colorClass = "text-blue-500";
    } else if (icon === "sliders") {
      colorClass = "text-green-500";
    } else if (icon === "music") {
      colorClass = "text-amber-500";
    }

    // Return the icon component or undefined
    return IconComponent
      ? React.createElement(IconComponent, {
          size: 16,
          className: colorClass,
        })
      : undefined;
  },
});
