'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Star, BarChart3, Settings, Trophy, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';

export default function SidebarComp() {
  const router = useRouter();
  const pathname = usePathname();

  // Sidebar navigation items
  const navItems = [
    { href: '/LandingPage', label: 'Dashboard', icon: BarChart3 },
    { href: '/LeaderboardPage', label: 'Leaderboard', icon: Trophy },
    { href: '/students', label: 'Students', icon: Users },
    { href: '/Analytics', label: 'Analytics', icon: BarChart3 },
    { href: '/Setting', label: 'Settings', icon: Settings },
  ];

  return (
    <div className='fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 shadow-sm'>
      <div className='p-6'>
        {/* Logo */}
        <div className='flex items-center gap-2 mb-8'>
          <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center'>
            <Star className='w-5 h-5 text-white' />
          </div>
          <span className='text-xl font-bold text-blue-600'>SpeakGenie</span>
        </div>

        <div className='text-sm text-gray-500 mb-2 font-serif'>Admin Panel</div>

        {/* Navigation */}
        <nav className='space-y-2'>
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive =
              pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Button
                key={href}
                variant={isActive ? 'default' : 'ghost'}
                className='w-full justify-start gap-3 cursor-pointer'
                onClick={() => router.push(href)}
              >
                <Icon className='w-4 h-4' />
                {label}
              </Button>
            );
          })}
        </nav>
      </div>

      {/* User Info */}
      <div className='absolute bottom-6 left-6 right-6'>
        <div className='flex items-center gap-3 p-3 bg-gray-50 rounded-lg'>
          <Avatar className='w-8 h-8'>
            <AvatarFallback className='bg-blue-600 text-white text-sm'>
              SA
            </AvatarFallback>
          </Avatar>
          <div className='flex-1 min-w-0'>
            <div className='text-sm font-medium text-gray-900'>
              School Admin
            </div>
            <div className='text-xs text-gray-500 truncate'>
              Greenwood Elementary
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
