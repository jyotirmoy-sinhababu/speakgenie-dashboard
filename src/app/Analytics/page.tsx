'use client';

import type React from 'react';

import SidebarComp from '@/components/SidebarComp';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis } from 'recharts';

// Sample data for charts
const performanceData = [
  { name: 'Excellent (85-100%)', value: 45, color: '#10b981' },
  { name: 'Good (70-84%)', value: 35, color: '#f59e0b' },
  { name: 'Needs Improvement (<70%)', value: 20, color: '#ef4444' },
];

const skillData = [
  { skill: 'Vocabulary', percentage: 82, color: '#3b82f6' },
  { skill: 'Grammar', percentage: 78, color: '#10b981' },
  { skill: 'Pronunciation', percentage: 76, color: '#f59e0b' },
  { skill: 'Listening', percentage: 85, color: '#8b5cf6' },
  { skill: 'Speaking', percentage: 74, color: '#ef4444' },
];

const engagementData = [
  { month: 'Jan', students: 45, hours: 30 },
  { month: 'Feb', students: 52, hours: 38 },
  { month: 'Mar', students: 48, hours: 45 },
  { month: 'Apr', students: 55, hours: 52 },
  { month: 'May', students: 58, hours: 55 },
];

const improvementData = [
  { skill: 'Vocabulary', improvement: '+5%', positive: true },
  { skill: 'Grammar', improvement: '+8%', positive: true },
  { skill: 'Pronunciation', improvement: '+12%', positive: true },
  { skill: 'Listening', improvement: '+3%', positive: true },
  { skill: 'Speaking', improvement: '+15%', positive: true },
];

const pieChartConfig = {
  excellent: { label: 'Excellent', color: '#10b981' },
  good: { label: 'Good', color: '#f59e0b' },
  needs: { label: 'Needs Improvement', color: '#ef4444' },
};

const skillChartConfig = {
  percentage: { label: 'Percentage', color: '#3b82f6' },
};

const engagementChartConfig = {
  students: { label: 'Students', color: '#3b82f6' },
  hours: { label: 'Hours', color: '#10b981' },
};

export default function AnalyticsPage() {
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <SidebarComp />

      <main className='flex-1 ml-64 p-8'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-900'>
            Analytics & Reports
          </h1>
        </div>

        {/* Key Metrics Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          <Card>
            <CardHeader className='pb-2'>
              <CardTitle className='text-sm font-medium text-gray-600'>
                Total Learning Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold text-gray-900'>2,847</div>
              <div className='text-sm text-green-600'>+12% from last month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='pb-2'>
              <CardTitle className='text-sm font-medium text-gray-600'>
                Lessons Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold text-gray-900'>1,892</div>
              <div className='text-sm text-green-600'>+18% from last month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='pb-2'>
              <CardTitle className='text-sm font-medium text-gray-600'>
                Average Session Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold text-gray-900'>24 min</div>
              <div className='text-sm text-green-600'>+8% from last month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='pb-2'>
              <CardTitle className='text-sm font-medium text-gray-600'>
                Active Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold text-gray-900'>1,156</div>
              <div className='text-sm text-green-600'>+5% from last month</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          {/* Student Performance Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className='text-lg font-semibold'>
                Student Performance Distribution
              </CardTitle>
              <p className='text-sm text-gray-600'>
                Overall accuracy breakdown across all students
              </p>
            </CardHeader>
            <CardContent>
              <div className='h-64'>
                <ChartContainer
                  config={pieChartConfig}
                  className='h-full w-full'
                >
                  <PieChart>
                    <Pie
                      data={performanceData}
                      cx='50%'
                      cy='50%'
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey='value'
                    >
                      {performanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ChartContainer>
              </div>
              <div className='mt-4 space-y-2'>
                {performanceData.map((item, index) => (
                  <div key={index} className='flex items-center gap-2'>
                    <div
                      className='w-3 h-3 rounded-full'
                      style={{ backgroundColor: item.color }}
                    />
                    <span className='text-sm text-gray-600'>{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Average Performance by Skill Area */}
          <Card>
            <CardHeader>
              <CardTitle className='text-lg font-semibold'>
                Average Performance by Skill Area
              </CardTitle>
              <p className='text-sm text-gray-600'>
                Individual skill performance metrics and improvements
              </p>
            </CardHeader>
            <CardContent>
              <div className='space-y-4 mb-6'>
                {skillData.map((skill, index) => (
                  <div key={index} className='space-y-2'>
                    <div className='flex justify-between items-center'>
                      <span className='text-sm font-medium text-gray-700'>
                        {skill.skill}
                      </span>
                      <span className='text-sm font-semibold text-gray-900'>
                        {skill.percentage}%
                      </span>
                    </div>
                    <Progress
                      value={skill.percentage}
                      className='h-2'
                      style={
                        {
                          '--progress-background': skill.color,
                        } as React.CSSProperties
                      }
                    />
                  </div>
                ))}
              </div>

              {/* Mini Bar Chart */}
              <div className='h-32'>
                <ChartContainer
                  config={skillChartConfig}
                  className='h-full w-full'
                >
                  <BarChart data={skillData}>
                    <XAxis
                      dataKey='skill'
                      tick={{ fontSize: 10 }}
                      angle={-45}
                      textAnchor='end'
                      height={60}
                    />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 10 }} />
                    <Bar dataKey='percentage' radius={[4, 4, 0, 0]}>
                      {skillData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Month-over-Month Improvement */}
        <Card className='mb-8'>
          <CardHeader>
            <CardTitle className='text-lg font-semibold'>
              Month-over-Month Improvement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
              {improvementData.map((item, index) => (
                <div
                  key={index}
                  className='flex items-center justify-between p-3 bg-gray-50 rounded-lg'
                >
                  <span className='text-sm font-medium text-gray-700'>
                    {item.skill}
                  </span>
                  <div className='flex items-center gap-1'>
                    <span className='text-sm font-semibold text-green-600'>
                      {item.improvement}
                    </span>
                    <div className='w-2 h-2 bg-green-500 rounded-full' />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Student Engagement Trends */}
        <Card>
          <CardHeader>
            <CardTitle className='text-lg font-semibold'>
              Student Engagement Trends
            </CardTitle>
            <p className='text-sm text-gray-600'>
              Monthly engagement patterns and learning time
            </p>
          </CardHeader>
          <CardContent>
            <div className='h-80'>
              <ChartContainer
                config={engagementChartConfig}
                className='h-full w-full'
              >
                <BarChart
                  data={engagementData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey='month' />
                  <YAxis yAxisId='left' orientation='left' />
                  <YAxis yAxisId='right' orientation='right' />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    yAxisId='left'
                    dataKey='students'
                    fill='#3b82f6'
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    yAxisId='right'
                    dataKey='hours'
                    fill='#10b981'
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
