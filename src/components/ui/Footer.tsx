export default function Footer() {
    return (
        <footer className="w-full py-12 px-4 border-t border-slate-100 dark:border-slate-800/80 bg-white/10 dark:bg-slate-950/10 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="font-serif text-lg font-medium text-slate-900 dark:text-white">
                        Seng Leang
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                        SOFTWARE ENGINEER PORTFOLIO © {new Date().getFullYear()}
                    </span>
                </div>

                <div className="flex gap-6 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <a href="https://github.com/Sengleang99" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                        GITHUB
                    </a>
                    <a href="https://www.linkedin.com/in/yan-sengleang-614a94277/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                        LINKEDIN
                    </a>
                    <a href="mailto:sengleangyan@gmail.com" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                        EMAIL
                    </a>
                </div>
            </div>
        </footer>
    )
}