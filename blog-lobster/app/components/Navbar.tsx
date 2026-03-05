'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: '首页', icon: '🏠' },
  { href: '/diary', label: '日记', icon: '📔' },
  { href: '/articles', label: '文章', icon: '📝' },
  { href: '/skills', label: '技能', icon: '🛠️' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-cream-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🐯</span>
            <span className="font-bold text-text-primary text-lg group-hover:text-coral transition-colors">
              镇山虎养成日记
            </span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center gap-1.5 px-3 py-2 rounded-button text-sm font-medium
                    transition-all duration-200
                    ${isActive 
                      ? 'bg-coral text-white shadow-card' 
                      : 'text-text-secondary hover:text-coral hover:bg-cream-light'
                    }
                  `}
                >
                  <span>{item.icon}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* User Avatar */}
          <div className="hidden sm:flex items-center gap-2 text-text-secondary text-sm">
            <span>星爷</span>
            <div className="w-8 h-8 rounded-full bg-coral text-white flex items-center justify-center text-xs font-bold">
              🐯
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
