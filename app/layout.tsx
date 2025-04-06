import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Pradeep Naik | Front-End Developer',
  description: 'Crafting modern web experiences with React, Next.js, and TypeScript.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-gray-100 text-black font-sans">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-md border-b border-orange-300 px-4 sm:px-6 py-3 sm:py-4">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-orange-600 whitespace-nowrap">
              <a href="/">PRADEEP NAIK</a>
            </h1>

            {/* Nav */}
            <nav className="flex flex-wrap gap-2 sm:gap-4 text-sm sm:text-base font-medium text-gray-800 justify-end">
              {["Home", "About", "Projects", "Contact"].map((label) => (
                <a
                  key={label}
                  href={`/${label.toLowerCase() === "home" ? "" : label.toLowerCase()}`}
                  className="px-3 py-1 sm:px-4 sm:py-2 rounded-full transition-all duration-300 hover:bg-orange-500 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="pt-0 px-4 sm:px-6 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
