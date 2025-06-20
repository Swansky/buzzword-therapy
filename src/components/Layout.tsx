// src/components/Layout.tsx
import {NavLink} from "react-router-dom";


import {CATEGORIES} from "@/constants.ts";
import React from "react";
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu.tsx";
import {cn} from "@/lib/utils.ts";
import {ModeToggle} from "@/components/mode-toggle.tsx";


export const Layout = ({children}: { children: React.ReactNode }) => (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
        <header className="p-4 shadow-md bg-card sticky top-0 z-10">
            <div className="flex justify-between items-center max-w-6xl mx-auto w-full">
                <NavLink
                    to="/"
                    className={({isActive}) =>
                        `text-base sm:text-lg font-semibold ${isActive ? "text-primary underline" : "text-muted-foreground"}`
                    }
                >
                    Buzzword Therapy
                </NavLink>
                <NavigationMenu>
                    <NavigationMenuList className="flex flex-wrap gap-4 justify-center items-center">
                        {CATEGORIES.map((cat) => {
                            const sub = cat.children;
                            if (sub) {
                                return (
                                    <NavigationMenuItem key={cat.id}>
                                        <NavigationMenuTrigger className="text-base sm:text-lg font-semibold">
                                            {cat.name}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent className="bg-popover p-2 rounded-md shadow-md">
                                            <ul className="grid gap-1">
                                                {sub.map((sc) => (
                                                    <li key={sc.id}>
                                                        <NavLink
                                                            to={`/${cat.id}/${sc.id}`}
                                                            className={({isActive}) =>
                                                                cn(
                                                                    "block px-3 py-1 text-sm rounded hover:bg-muted",
                                                                    isActive ? "text-primary font-medium" : "text-foreground"
                                                                )
                                                            }
                                                        >
                                                            {sc.name}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                );
                            }
                            return (
                                <NavigationMenuItem key={cat.id}>
                                    <NavLink
                                        to={`/${cat.id}`}
                                        className={({isActive}) =>
                                            `text-base sm:text-lg font-semibold ${isActive ? "text-primary underline" : "text-muted-foreground"}`
                                        }
                                    >
                                        {cat.name}
                                    </NavLink>
                                </NavigationMenuItem>
                            );
                        })}
                        <NavigationMenuItem>
                            <ModeToggle/>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
        <main className="flex-grow flex items-center justify-center p-4 sm:p-8">{children}</main>
        <footer className="text-center text-sm text-muted-foreground p-4 border-t">
            Made by{" "}
            <a
                href="https://swansky.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
            >
                Swansky
            </a>{" "}
            · Ironically powered by AI
            <p>Source code available on <a href="https://github.com/Swansky/buzzword-therapy"
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="underline">GitHub</a></p>
        </footer>
    </div>
);