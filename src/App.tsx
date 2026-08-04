import { useEffect, useState } from "react";
import {
  FolderOpen,
  Plus,
  Search,
  Clock,
  Sparkles,
  Settings,
  Bell,
  ArrowRight,
  LayoutGrid,
  FileText,
  ChevronRight,
  Zap,
} from "lucide-react";

/**
 * Removes the initial native HTML splash screen with a fade-out animation once loaded.
 */
function SplashRemover(): null {
  useEffect(() => {
    const splashElement = document.getElementById("splash-screen");
    if (!splashElement) return;

    splashElement.classList.add("fade-out");

    const handleTransitionEnd = (): void => {
      splashElement.remove();
    };

    splashElement.addEventListener("transitionend", handleTransitionEnd, {
      once: true,
    });

    return () => {
      splashElement.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);

  return null;
}

interface RecentItem {
  id: string;
  name: string;
  path: string;
  updatedAt: string;
  type: "project" | "document";
}

const RECENT_ITEMS: RecentItem[] = [
  {
    id: "1",
    name: "Tchik-Dashboard-V2",
    path: "~/projects/tchik-dashboard",
    updatedAt: "Il y a 10 min",
    type: "project",
  },
  {
    id: "2",
    name: "Rapport-Analyse-2026.pdf",
    path: "~/documents/reports",
    updatedAt: "Hier à 16:45",
    type: "document",
  },
  {
    id: "3",
    name: "API-ECommerce-Core",
    path: "~/dev/api-core",
    updatedAt: "Il y a 3 jours",
    type: "project",
  },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="bg-zinc-950 text-zinc-100 h-svh flex overflow-hidden font-sans antialiased selection:bg-indigo-500 selection:text-white">
      <SplashRemover />

      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-zinc-800/80 bg-zinc-900/40 backdrop-blur-xl flex flex-col justify-between p-4 select-none">
        <div className="space-y-6">
          {/* Logo & App Title */}
          <div className="flex items-center gap-3 px-2 py-1">
            <div className="h-8 w-8 rounded-lg bg-linear-to-tr from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-sm tracking-tight text-zinc-100">
                TCHIK Desktop
              </h1>
              <span className="text-[10px] text-zinc-400 font-mono">
                v1.0.0
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg bg-zinc-800/70 text-indigo-400 transition-colors">
              <LayoutGrid className="w-4 h-4" />
              Accueil
            </button>
            <button className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40 transition-colors">
              <span className="flex items-center gap-3">
                <Clock className="w-4 h-4" />
                Récents
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">
                3
              </span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40 transition-colors">
              <Sparkles className="w-4 h-4" />
              Assistant AI
            </button>
          </nav>
        </div>

        {/* Bottom Preferences */}
        <div className="pt-4 border-t border-zinc-800/60 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40 transition-colors">
            <Settings className="w-4 h-4" />
            Paramètres
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-y-auto">
        {/* Top Header / Search Bar */}
        <header className="h-14 border-b border-zinc-800/60 flex items-center justify-between px-8 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-10">
          <div className="relative w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Rechercher un projet, un fichier ou une commande... (Ctrl+K)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-zinc-900/80 border border-zinc-800 rounded-lg text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/80 transition-all"
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 text-zinc-400 hover:text-zinc-200 rounded-lg hover:bg-zinc-900 transition-colors relative">
              <Bell className="w-4 h-4" />
              <span className="w-2 h-2 rounded-full bg-indigo-500 absolute top-1.5 right-1.5"></span>
            </button>
            <div className="h-4 w-px bg-zinc-800" />
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-linear-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-xs font-semibold text-white">
                TK
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8 max-w-5xl mx-auto w-full space-y-8">
          {/* Welcome Hero Banner */}
          <section className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-linear-to-b from-zinc-900/80 to-zinc-900/30 p-8 shadow-xl">
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                Bienvenue sur TCHIK Desktop
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Prêt à créer quelque chose d'extraordinaire ?
              </h2>
              <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">
                Reprenez là où vous vous étiez arrêté ou lancez un nouveau
                workspace en un seul clic.
              </p>
            </div>
          </section>

          {/* Quick Action Grid */}
          <section className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Actions Rapides
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="group relative p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all text-left flex items-start justify-between">
                <div className="space-y-1">
                  <div className="p-2.5 w-fit rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    <Plus className="w-5 h-5" />
                  </div>
                  <h4 className="font-medium text-sm text-zinc-200 pt-2">
                    Nouveau Projet
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Initialiser un projet vide ou utiliser un template.
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 transition-all" />
              </button>

              <button className="group relative p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all text-left flex items-start justify-between">
                <div className="space-y-1">
                  <div className="p-2.5 w-fit rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20 group-hover:bg-violet-500 group-hover:text-white transition-colors">
                    <FolderOpen className="w-5 h-5" />
                  </div>
                  <h4 className="font-medium text-sm text-zinc-200 pt-2">
                    Ouvrir un Dossier
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Parcourir le système de fichiers local.
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>
          </section>

          {/* Recent Files Section */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Fichiers Récents
              </h3>
              <button className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                Voir tout <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/30">
              {RECENT_ITEMS.map((item, idx) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between p-3.5 hover:bg-zinc-800/40 transition-colors cursor-pointer group ${
                    idx !== RECENT_ITEMS.length - 1
                      ? "border-b border-zinc-800/60"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-zinc-800/80 text-zinc-400 group-hover:text-indigo-400 transition-colors">
                      {item.type === "project" ? (
                        <FolderOpen className="w-4 h-4" />
                      ) : (
                        <FileText className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-zinc-200 group-hover:text-indigo-300 transition-colors">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-zinc-500 font-mono">
                        {item.path}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] text-zinc-500 font-medium">
                    {item.updatedAt}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
