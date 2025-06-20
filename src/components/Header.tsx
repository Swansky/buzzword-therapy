import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { NavLink } from "react-router-dom"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import {CATEGORIES} from "@/constants.ts";

export const Header = () => {
    return (
        <header className="p-4 shadow-md bg-card sticky top-0 z-10">
            <div className="flex justify-between items-center max-w-6xl mx-auto w-full">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        cn(
                            "text-base sm:text-lg font-semibold",
                            isActive ? "text-primary underline" : "text-muted-foreground"
                        )
                    }
                >
                    Buzzword Therapy
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-4">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-4">
                            {CATEGORIES.map((cat) =>
                                cat.children ? (
                                    <NavigationMenuItem key={cat.id}>
                                        <NavigationMenuTrigger className="text-base font-semibold">{cat.name}</NavigationMenuTrigger>
                                        <NavigationMenuContent className="bg-popover p-2 rounded-md shadow-md">
                                            <ul className="grid gap-1">
                                                {cat.children.map((sc) => (
                                                    <li key={sc.id}>
                                                        <NavLink
                                                            to={`/${cat.id}/${sc.id}`}
                                                            className={({ isActive }) =>
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
                                ) : (
                                    <NavigationMenuItem key={cat.id}>
                                        <NavLink
                                            to={`/${cat.id}`}
                                            className={({ isActive }) =>
                                                cn(
                                                    "text-base font-semibold",
                                                    isActive ? "text-primary underline" : "text-muted-foreground"
                                                )
                                            }
                                        >
                                            {cat.name}
                                        </NavLink>
                                    </NavigationMenuItem>
                                )
                            )}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <ModeToggle />
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="ghost">
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-64 p-4">
                            <nav className="space-y-2">
                                {CATEGORIES.map((cat) =>
                                    cat.children ? (
                                        <div key={cat.id}>
                                            <p className="text-sm font-bold">{cat.name}</p>
                                            <div className="ml-2">
                                                {cat.children.map((sc) => (
                                                    <NavLink
                                                        key={sc.id}
                                                        to={`/${cat.id}/${sc.id}`}
                                                        className={({ isActive }) =>
                                                            cn(
                                                                "block px-2 py-1 text-sm rounded hover:bg-muted",
                                                                isActive ? "text-primary font-medium" : "text-foreground"
                                                            )
                                                        }
                                                    >
                                                        {sc.name}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <NavLink
                                            key={cat.id}
                                            to={`/${cat.id}`}
                                            className={({ isActive }) =>
                                                cn(
                                                    "block px-2 py-1 text-sm font-semibold rounded hover:bg-muted",
                                                    isActive ? "text-primary underline" : "text-muted-foreground"
                                                )
                                            }
                                        >
                                            {cat.name}
                                        </NavLink>
                                    )
                                )}
                                <div className="pt-2">
                                    <ModeToggle />
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
