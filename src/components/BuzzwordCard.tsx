import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {motion, AnimatePresence} from "framer-motion";

interface BuzzwordEntry {
    word: string;
    description: string;
}

interface BuzzwordCardProps {
    entry: BuzzwordEntry;
    onNext: () => void;
    keyProp: string;
}

export const BuzzwordCard = ({entry, onNext, keyProp}: BuzzwordCardProps) => (
    <AnimatePresence mode="wait">
        <motion.div
            key={keyProp}
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -30}}
            transition={{duration: 0.4}}
        >
            <Card className="w-full max-w-2xl text-center p-4 sm:p-6 space-y-4 shadow-lg rounded-2xl">
                <CardContent>
                    <h1 className="text-3xl sm:text-5xl font-bold text-primary break-words">{entry.word}</h1>
                    <p className="text-muted-foreground mt-2 text-base sm:text-lg leading-relaxed">{entry.description}</p>
                    <Button onClick={onNext} className="mt-6 w-full sm:w-auto">
                        Mot suivant
                    </Button>
                </CardContent>
            </Card>
        </motion.div>
    </AnimatePresence>
);

