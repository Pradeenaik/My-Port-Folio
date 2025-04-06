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
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-md border-b border-orange-300 px-6 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-extrabold tracking-tight text-orange-600">
              <a href="/">PRADEEP NAIK</a>
            </h1>
            <nav className="flex gap-4 sm:gap-6 text-sm sm:text-base font-medium text-gray-800">
  {["Home", "About", "Projects", "Contact"].map((label) => (
    <a
      key={label}
      href={`/${label.toLowerCase() === "home" ? "" : label.toLowerCase()}`}
      className="px-4 py-2 rounded-full transition-all duration-300 hover:bg-orange-500 hover:text-white"
    >
      {label}
    </a>
  ))}
</nav>
          </div>
        </header>

        {/* Main content */}
        <main className="pt-0 px-6 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
