'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  Users,
  GraduationCap,
  TrendingUp,
  Trophy,
  Search,
  ChevronDown,
  Target,
  BookOpen,
  Zap,
} from 'lucide-react';

import {
  classEnrollmentData,
  performanceData,
  topStudents,
  allStudents,
} from '../utils/data';

const LandingPage = () => {
  return (
    <div className='flex flex-col justify-center'>
      <div className='min-h-screen  bg-gray-50'>
        {/* Main Content */}
        <div className='ml-64 p-8'>
          {/* Header */}
          <div className='mb-8'>
            <h1 className='text-3xl font-serif font-semibold text-blue-500 mb-2'>
              Greenwood Elementary School
            </h1>
            <p className='text-gray-600 font-sans'>
              {"Welcome back, School Admin! Here's your school's overview."}
            </p>
            <div className='text-sm text-gray-500 mt-2'>
              CBSE Board • Last updated: 12/08/2025, 15:46:57
            </div>
          </div>

          {/* Stats Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium text-gray-600'>
                  TOTAL STUDENTS
                </CardTitle>
                <Users className='h-4 w-4 text-gray-400' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>245</div>
                <p className='text-xs text-green-600 flex items-center gap-1'>
                  <TrendingUp className='h-3 w-3' />
                  +12% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium text-gray-600'>
                  TOTAL CLASSES
                </CardTitle>
                <GraduationCap className='h-4 w-4 text-gray-400' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>8</div>
                <p className='text-xs text-green-600 flex items-center gap-1'>
                  <TrendingUp className='h-3 w-3' />
                  +8% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium text-gray-600'>
                  AVG. PERFORMANCE
                </CardTitle>
                <Target className='h-4 w-4 text-gray-400' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>86.2%</div>
                <p className='text-xs text-green-600 flex items-center gap-1'>
                  <TrendingUp className='h-3 w-3' />
                  +5% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium text-gray-600'>
                  TOP PERFORMER
                </CardTitle>
                <Trophy className='h-4 w-4 text-gray-400' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>830 pts</div>
                <p className='text-xs text-gray-600'>Ahan K. Class 8</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Row */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
            {/* Class Enrollment Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Class-wise Student Enrollment</CardTitle>
                <CardDescription>
                  Student distribution across different grades
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width='100%' height={300}>
                  <BarChart data={classEnrollmentData}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='class' />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey='students'
                      fill='#3b82f6'
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Performance Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Distribution</CardTitle>
                <CardDescription>
                  Overall accuracy breakdown across all students
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width='100%' height={300}>
                  <PieChart>
                    <Pie
                      data={performanceData}
                      cx='50%'
                      cy='50%'
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey='value'
                    >
                      {performanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className='mt-4 space-y-2'>
                  {performanceData.map((item, index) => (
                    <div
                      key={index}
                      className='flex items-center gap-2 text-sm'
                    >
                      <div
                        className='w-3 h-3 rounded-full'
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span>{item.name}</span>
                      <span className='ml-auto font-medium'>{item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Leaderboard and Students */}
          <div className='flex flex-col gap-6'>
            {/* Leaderboard */}
            <Card className='xl:col-span-2'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Trophy className='w-5 h-5 text-yellow-500' />
                  School Leaderboard - Top 10 Champions
                </CardTitle>
                <CardDescription>
                  Our highest performing students this month with points and
                  achievements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  {topStudents.map((student) => (
                    <div
                      key={student.rank}
                      className='flex items-center gap-4 p-3 rounded-lg border bg-white hover:bg-gray-50 transition-colors'
                    >
                      <div className='flex items-center gap-3'>
                        <div className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold'>
                          #{student.rank}
                        </div>
                        <Avatar className='w-10 h-10'>
                          <AvatarFallback className='bg-blue-600 text-white text-sm'>
                            {student.avatar}
                          </AvatarFallback>
                        </Avatar>
                      </div>

                      <div className='flex-1 min-w-0'>
                        <div className='font-medium text-gray-900'>
                          {student.name}
                        </div>
                        <div className='text-sm text-gray-500'>
                          {student.class}
                        </div>
                      </div>

                      <div className='text-right'>
                        <div className='font-bold text-blue-600'>
                          {student.points} pts
                        </div>
                        <div className='text-sm text-gray-500'>
                          {student.accuracy}% Accuracy
                        </div>
                      </div>

                      <div className='text-right'>
                        <div className='text-sm font-medium'>
                          {student.lessons}
                        </div>
                        <div className='text-xs text-gray-500'>
                          {student.streak} day streak
                        </div>
                      </div>

                      <Button variant='outline' size='sm'>
                        View Profile
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Top Achievements */}
                <div className='mt-6 grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg'>
                  <div className='text-center'>
                    <Trophy className='w-6 h-6 text-yellow-500 mx-auto mb-1' />
                    <div className='text-xs text-gray-500'>Top Scorer</div>
                    <div className='text-sm font-medium'>
                      Ahan Kumar - 830 pts
                    </div>
                  </div>
                  <div className='text-center'>
                    <Zap className='w-6 h-6 text-orange-500 mx-auto mb-1' />
                    <div className='text-xs text-gray-500'>Longest Streak</div>
                    <div className='text-sm font-medium'>
                      Ahan Kumar - 15 days
                    </div>
                  </div>
                  <div className='text-center'>
                    <BookOpen className='w-6 h-6 text-green-500 mx-auto mb-1' />
                    <div className='text-xs text-gray-500'>Most Lessons</div>
                    <div className='text-sm font-medium'>
                      Ahan Kumar - 68 lessons
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* All Students */}
            <Card>
              <CardHeader>
                <CardTitle>All Students</CardTitle>
                <CardDescription>
                  Complete student directory with performance details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='flex gap-2'>
                    <div className='relative flex-1'>
                      <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
                      <Input
                        placeholder='Search students...'
                        className='pl-10'
                      />
                    </div>
                    <Button variant='outline' className='gap-2 bg-transparent'>
                      All Classes <ChevronDown className='w-4 h-4' />
                    </Button>
                  </div>

                  <div className='space-y-3'>
                    {allStudents.slice(0, 10).map((student) => (
                      <div
                        key={student.rank}
                        className='flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors'
                      >
                        <Avatar className='w-8 h-8'>
                          <AvatarFallback className='bg-blue-600 text-white text-xs'>
                            {student.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className='flex-1 min-w-0'>
                          <div className='text-sm font-medium text-gray-900 truncate'>
                            {student.name}
                          </div>
                          <div className='text-xs text-gray-500'>
                            {student.class}
                          </div>
                        </div>
                        <div className='text-right'>
                          <div className='text-sm font-medium text-blue-600'>
                            {student.points} XP
                          </div>
                          <div className='text-xs text-gray-500'>
                            {student.accuracy}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant='outline' className='w-full bg-transparent'>
                    Load More Students (233 remaining)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
