import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Layout} from "@/components/Layout";
import {BuzzwordPage} from "@/pages/BuzzwordPage";
import {CATEGORIES} from "@/constants.ts";
import {Home} from "@/pages/Home.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";


function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        {CATEGORIES.map((cat) => {
                            const sub = cat.children;
                            if (sub) {
                                return sub.map((sc) => (
                                    <Route key={cat.id + "_" + sc.id} path={`/${cat.id}/${sc.id}`}
                                           element={<BuzzwordPage category={sc.id}/>}/>
                                ))
                            } else {
                                return (
                                    <Route key={cat.id} path={`/${cat.id}`}
                                           element={<BuzzwordPage category={cat.id}/>}/>
                                );
                            }

                        })}
                        <Route path="*"
                               element={<p className="text-center text-muted-foreground">Page non trouvée.</p>}/>
                    </Routes>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}

export default App;