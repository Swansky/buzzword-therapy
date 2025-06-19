export interface Category {
    id: string;
    name: string;
    children?: Array<Category>;

}

export const CATEGORIES : Category[] = [
    {
        id: "it",
        name: "I.T",
        children: [
            {
                id: "it-global",

                name: "Buzzwords"
            },
            {
                id: "lang",
                name: "Langages"
            },
            {
                id: "framework",
                name: "Frameworks"
            }
        ]
    },
    {
        id: "management",
        name: "Management",
    },
    {
        id: "finance",
        name: "Finance",
    }
]

