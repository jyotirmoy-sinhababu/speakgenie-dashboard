'use client';

import { useState } from 'react';
import {
  Trophy,
  Award,
  Medal,
  Search,
  Filter,
  TrendingUp,
  Eye,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const students = [
  {
    id: 1,
    name: 'Aitan Kumar',
    class: 'Class 8',
    points: 830,
    percentage: 96,
    growth: 15,
    avatar:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rank: 1,
  },
  {
    id: 2,
    name: 'Hvff',
    class: 'Class 7',
    points: 295,
    percentage: 94,
    growth: 12,
    avatar:
      'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rank: 2,
  },
  {
    id: 3,
    name: 'Flower Girl',
    class: 'Class 6',
    points: 190,
    percentage: 93,
    growth: 8,
    avatar:
      'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rank: 3,
  },
  {
    id: 4,
    name: '12 June Child Test',
    class: 'Class 5',
    points: 165,
    percentage: 92,
    growth: 6,
    avatar:
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rank: 4,
  },
];

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const PodiumCard = ({
    student,
    position,
  }: {
    student: (typeof students)[0];
    position: number;
  }) => {
    const getCardStyle = () => {
      switch (position) {
        case 1:
          return 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white';
        case 2:
          return 'bg-gradient-to-br from-gray-400 to-gray-600 text-white';
        case 3:
          return 'bg-gradient-to-br from-orange-400 to-orange-600 text-white';
        default:
          return 'bg-white';
      }
    };

    const getIcon = () => {
      switch (position) {
        case 1:
          return <Trophy className='w-6 h-6' />;
        case 2:
          return <Medal className='w-6 h-6' />;
        case 3:
          return <Award className='w-6 h-6' />;
        default:
          return null;
      }
    };

    return (
      <div className='flex flex-col items-center'>
        <div className='relative mb-4'>
          <Avatar className='w-20 h-20 border-4 border-white shadow-lg'>
            <AvatarImage src={student.avatar} alt={student.name} />
            <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
          </Avatar>
          {position <= 3 && (
            <div className='absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg'>
              {getIcon()}
            </div>
          )}
        </div>
        <Card className={`w-40 ${getCardStyle()} border-0 shadow-lg`}>
          <CardContent className='p-4 text-center'>
            <h3 className='font-bold text-lg mb-1'>{student.name}</h3>
            <p className='text-sm opacity-90 mb-2'>{student.class}</p>
            <div className='text-2xl font-bold mb-2'>{student.points} pts</div>
            {position === 1 && (
              <div className='flex justify-center items-center'>
                <Trophy className='w-4 h-4 mr-1' />
                <TrendingUp className='w-4 h-4' />
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  };
  return (
    <div className='flex flex-col justify-center'>
      <div className='min-h-screen bg-gray-50'>
        {/* Main Content */}
        <div className='ml-64 p-8'>
          {/* Header */}
          <div className='mb-8'>
            <div className='flex items-center justify-between mb-4'>
              <div className='flex items-center space-x-2'>
                <Trophy className='w-8 h-8 text-yellow-500' />
                <Award className='w-8 h-8 text-blue-500' />
                <h1 className='text-3xl font-bold text-gray-800'>
                  School Leaderboard
                </h1>
              </div>
              <div className='text-sm text-gray-500'>Updated: 12/08/2025</div>
            </div>
            <p className='text-gray-600'>
              Celebrating our top performers and encouraging healthy competition
            </p>
          </div>

          {/* Champions Podium */}
          <Card className='mb-8 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200'>
            <CardContent className='p-8'>
              <div className='text-center mb-6'>
                <div className='flex items-center justify-center space-x-2 mb-2'>
                  <Trophy className='w-6 h-6 text-blue-500' />
                  <h2 className='text-2xl font-bold text-blue-600'>
                    Champions Podium
                  </h2>
                  <Trophy className='w-6 h-6 text-blue-500' />
                </div>
                <p className='text-blue-600 font-medium'>
                  This month's top 3 achievers
                </p>
              </div>

              <div className='flex justify-center items-end space-x-8'>
                {/* 2nd Place */}
                <div className='transform translate-y-4'>
                  <PodiumCard student={students[1]} position={2} />
                </div>

                {/* 1st Place */}
                <div>
                  <PodiumCard student={students[0]} position={1} />
                </div>

                {/* 3rd Place */}
                <div className='transform translate-y-8'>
                  <PodiumCard student={students[2]} position={3} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Search and Filters */}
          <div className='flex items-center space-x-4 mb-6'>
            <div className='relative flex-1 max-w-md'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
              <Input
                placeholder='Search students...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='pl-10'
              />
            </div>

            <Select defaultValue='all-classes'>
              <SelectTrigger className='w-40'>
                <SelectValue placeholder='All Classes' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all-classes'>All Classes</SelectItem>
                <SelectItem value='class-8'>Class 8</SelectItem>
                <SelectItem value='class-7'>Class 7</SelectItem>
                <SelectItem value='class-6'>Class 6</SelectItem>
                <SelectItem value='class-5'>Class 5</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue='this-month'>
              <SelectTrigger className='w-40'>
                <SelectValue placeholder='This Month' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='this-month'>This Month</SelectItem>
                <SelectItem value='last-month'>Last Month</SelectItem>
                <SelectItem value='this-year'>This Year</SelectItem>
              </SelectContent>
            </Select>

            <Button variant='outline' className='flex items-center space-x-2'>
              <Filter className='w-4 h-4' />
              <span>More Filters</span>
            </Button>
          </div>

          {/* Complete Rankings */}
          <Card>
            <CardContent className='p-6'>
              <div className='mb-6'>
                <h3 className='text-xl font-bold text-blue-600 mb-2'>
                  Complete Rankings
                </h3>
                <p className='text-gray-600'>
                  All students ranked by points earned this month
                </p>
              </div>

              <div className='space-y-4'>
                {students.map((student) => (
                  <div
                    key={student.id}
                    className='flex items-center p-4 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition-colors'
                  >
                    <div className='flex items-center justify-center w-10 h-10 bg-yellow-500 text-white font-bold rounded-full mr-4'>
                      {student.rank}
                    </div>

                    <Avatar className='w-12 h-12 mr-4'>
                      <AvatarImage src={student.avatar} alt={student.name} />
                      <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div className='flex-1'>
                      <h4 className='font-semibold text-gray-800'>
                        {student.name}
                      </h4>
                      <p className='text-sm text-gray-600'>{student.class}</p>
                      <div className='flex items-center mt-1'>
                        {student.rank <= 3 && (
                          <>
                            <Trophy className='w-4 h-4 text-yellow-500 mr-1' />
                            <Award className='w-4 h-4 text-blue-500 mr-1' />
                          </>
                        )}
                      </div>
                    </div>

                    <div className='text-right mr-6'>
                      <div className='text-2xl font-bold text-gray-800'>
                        {student.points}
                      </div>
                      <div className='text-sm text-gray-600'>points</div>
                    </div>

                    <div className='text-right mr-6'>
                      <div className='text-lg font-semibold text-green-600'>
                        {student.percentage}%
                      </div>
                    </div>

                    <div className='flex items-center mr-6'>
                      <TrendingUp className='w-4 h-4 text-green-500 mr-1' />
                      <span className='text-sm font-medium text-green-600'>
                        {student.growth}
                      </span>
                    </div>

                    <Button
                      variant='outline'
                      size='sm'
                      className='flex items-center space-x-1'
                    >
                      <Eye className='w-4 h-4' />
                      <span>View</span>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
