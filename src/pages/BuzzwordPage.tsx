import {useEffect, useState} from "react";
import Papa from "papaparse";
import {BuzzwordCard} from "@/components/BuzzwordCard";

interface BuzzwordEntry {
    word: string;
    description: string;
}

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
                        setBuzzwords(result.data);
                        setIndex(0);
                    },
                });
            });
    }, [category]);

    const nextWord = () => {
        if (buzzwords.length > 0) {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * buzzwords.length);
            } while (newIndex === index && buzzwords.length > 1);
            setIndex(newIndex);
        }
    };

    const current = buzzwords[index];

    return current ? (
        <BuzzwordCard entry={current} onNext={nextWord} keyProp={`${category}-${index}`}/>
    ) : (
        <p className="text-muted-foreground text-center">Chargement...</p>
    );
};
