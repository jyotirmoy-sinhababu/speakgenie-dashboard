'use client';

import { Star, BarChart3, Settings, Trophy, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';

export default function SidebarComp() {
  return (
    <div className='fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 shadow-sm'>
      <div className='p-6'>
        <div className='flex items-center gap-2 mb-8'>
          <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center'>
            <Star className='w-5 h-5 text-white' />
          </div>
          <span className='text-xl font-bold text-gray-900'>SpeakGenie</span>
        </div>

        <div className='text-sm text-gray-500 mb-2'>Admin Panel</div>

        <nav className='space-y-2'>
          <Button variant='default' className='w-full justify-start gap-3'>
            <BarChart3 className='w-4 h-4' />
            Dashboard
          </Button>
          <Button variant='ghost' className='w-full justify-start gap-3'>
            <Trophy className='w-4 h-4' />
            Leaderboard
          </Button>
          <Button variant='ghost' className='w-full justify-start gap-3'>
            <Users className='w-4 h-4' />
            Students
          </Button>
          <Button variant='ghost' className='w-full justify-start gap-3'>
            <BarChart3 className='w-4 h-4' />
            Analytics
          </Button>
          <Button variant='ghost' className='w-full justify-start gap-3'>
            <Settings className='w-4 h-4' />
            Settings
          </Button>
        </nav>
      </div>

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
