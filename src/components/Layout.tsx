import React from "react";
import {Header} from "@/components/Header.tsx";


export const Layout = ({children}: { children: React.ReactNode }) => (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header/>
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