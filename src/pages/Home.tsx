import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Home = () => (
    <motion.div
        className="max-w-2xl text-center space-y-6 mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
    >
        <h1 className="text-3xl font-bold">Buzzword Therapy</h1>
        <p className="text-muted-foreground text-lg">
            Parce qu’il fallait bien un endroit pour se soigner des mots qu’on entend trop.
            Bienvenue dans le sanctuaire sarcastique des buzzwords. Ici, chaque clic est une micro-agression passive contre le jargon creux, les réunions inutiles et les PowerPoint sans âme. C’est gratuit, non-remboursé par la sécu, et recommandé par aucun RH.
        </p>
        <p className="text-lg">
            Pour commencer votre thérapie, choisissez une catégorie.<br />
            Ou commencez directement avec l’univers IT :
        </p>
        <Link to="/it/it-global">
            <Button className="mt-2">Commencer avec l’IT</Button>
        </Link>
    </motion.div>
);