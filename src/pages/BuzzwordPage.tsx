import {useEffect, useState} from "react";
import Papa from "papaparse";
import {BuzzwordCard} from "@/components/BuzzwordCard";

interface BuzzwordEntry {
    word: string;
    description: string;
}

const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
};

export const BuzzwordPage = ({category}: { category: string }) => {
    const [buzzwords, setBuzzwords] = useState<BuzzwordEntry[]>([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetch(`/data/${category}.csv`)
            .then((res) => res.text())
            .then((csvText) => {
                Papa.parse<BuzzwordEntry>(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (result) => {
                        const shuffled = shuffleArray(result.data);
                        setBuzzwords(shuffled);
                        setIndex(0);
                    },
                });
            });
    }, [category]);

    const nextWord = () => {
        setIndex((prev) => (prev + 1) % buzzwords.length);
    };


    const current = buzzwords[index];

    return current ? (
        <BuzzwordCard entry={current} onNext={nextWord} keyProp={`${category}-${index}`}/>
    ) : (
        <p className="text-muted-foreground text-center">Chargement...</p>
    );
};
