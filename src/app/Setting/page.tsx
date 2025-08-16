'use client';

import { useState } from 'react';
import SidebarComp from '@/components/SidebarComp';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function SettingsPage() {
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const [systemSettings, setSystemSettings] = useState({
    language: 'english',
    timezone: 'utc-5',
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    performanceReports: true,
    newSchoolAlerts: false,
  });

  const handleProfileUpdate = () => {
    console.log('Profile updated:', profileData);
    // Handle profile update logic here
  };

  const handleSystemSave = () => {
    console.log('System settings saved:', systemSettings);
    // Handle system settings save logic here
  };

  const handleExport = (type: string) => {
    console.log(`Exporting ${type}...`);
    // Handle export logic here
  };

  const handleCreateBackup = () => {
    console.log('Creating backup...');
    // Handle backup creation logic here
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <SidebarComp />

      {/* Main content with left margin to account for fixed sidebar */}
      <div className='ml-64 p-8'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='text-3xl font-bold text-gray-900 mb-8'>Settings</h1>

          {/* Top Section: Profile Settings and System Settings */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
            {/* Profile Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>
                  Update your personal information and contact details
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='space-y-2'>
                  <Label htmlFor='fullName'>Full Name</Label>
                  <Input
                    id='fullName'
                    value={profileData.fullName}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        fullName: e.target.value,
                      }))
                    }
                    placeholder='Admin User'
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    type='email'
                    value={profileData.email}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder='admin@example.com'
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='phone'>Phone</Label>
                  <Input
                    id='phone'
                    value={profileData.phone}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    placeholder='+1-555-0123'
                  />
                </div>

                <Button
                  onClick={handleProfileUpdate}
                  className='bg-blue-600 hover:bg-blue-700'
                >
                  Update Profile
                </Button>
              </CardContent>
            </Card>

            {/* System Settings */}
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>
                  Configure system preferences and default options
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='space-y-2'>
                  <Label htmlFor='language'>Default Language</Label>
                  <Select
                    value={systemSettings.language}
                    onValueChange={(value) =>
                      setSystemSettings((prev) => ({
                        ...prev,
                        language: value,
                      }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder='Select language' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='english'>English</SelectItem>
                      <SelectItem value='spanish'>Spanish</SelectItem>
                      <SelectItem value='french'>French</SelectItem>
                      <SelectItem value='german'>German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='timezone'>Time Zone</Label>
                  <Select
                    value={systemSettings.timezone}
                    onValueChange={(value) =>
                      setSystemSettings((prev) => ({
                        ...prev,
                        timezone: value,
                      }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder='Select timezone' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='utc-5'>
                        UTC-5 (Eastern Time)
                      </SelectItem>
                      <SelectItem value='utc-6'>
                        UTC-6 (Central Time)
                      </SelectItem>
                      <SelectItem value='utc-7'>
                        UTC-7 (Mountain Time)
                      </SelectItem>
                      <SelectItem value='utc-8'>
                        UTC-8 (Pacific Time)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={handleSystemSave}
                  className='bg-blue-600 hover:bg-blue-700'
                >
                  Save Settings
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Section: Notification Preferences and Data Management */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Notification Preferences */}
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Manage how and when you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='flex items-center space-x-3'>
                  <Checkbox
                    id='emailNotifications'
                    checked={notifications.emailNotifications}
                    onCheckedChange={(checked) =>
                      setNotifications((prev) => ({
                        ...prev,
                        emailNotifications: checked as boolean,
                      }))
                    }
                  />
                  <div className='space-y-1'>
                    <Label
                      htmlFor='emailNotifications'
                      className='text-sm font-medium'
                    >
                      Email Notifications
                    </Label>
                    <p className='text-sm text-gray-500'>
                      Receive updates via email
                    </p>
                  </div>
                </div>

                <div className='flex items-center space-x-3'>
                  <Checkbox
                    id='performanceReports'
                    checked={notifications.performanceReports}
                    onCheckedChange={(checked) =>
                      setNotifications((prev) => ({
                        ...prev,
                        performanceReports: checked as boolean,
                      }))
                    }
                  />
                  <div className='space-y-1'>
                    <Label
                      htmlFor='performanceReports'
                      className='text-sm font-medium'
                    >
                      Performance Reports
                    </Label>
                    <p className='text-sm text-gray-500'>
                      Weekly performance summaries
                    </p>
                  </div>
                </div>

                <div className='flex items-center space-x-3'>
                  <Checkbox
                    id='newSchoolAlerts'
                    checked={notifications.newSchoolAlerts}
                    onCheckedChange={(checked) =>
                      setNotifications((prev) => ({
                        ...prev,
                        newSchoolAlerts: checked as boolean,
                      }))
                    }
                  />
                  <div className='space-y-1'>
                    <Label
                      htmlFor='newSchoolAlerts'
                      className='text-sm font-medium'
                    >
                      New School Alerts
                    </Label>
                    <p className='text-sm text-gray-500'>
                      Notifications for new school registrations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Management */}
            <Card>
              <CardHeader>
                <CardTitle>Data Management</CardTitle>
                <CardDescription>
                  Export data and manage system backups
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='space-y-3'>
                  <Label className='text-sm font-medium'>Export Data</Label>
                  <div className='flex flex-wrap gap-2'>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() => handleExport('student-data')}
                    >
                      Export Student Data
                    </Button>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() => handleExport('school-reports')}
                    >
                      Export School Reports
                    </Button>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() => handleExport('analytics')}
                    >
                      Export Analytics
                    </Button>
                  </div>
                </div>

                <div className='space-y-3'>
                  <Label className='text-sm font-medium'>Backup</Label>
                  <Button
                    variant='outline'
                    onClick={handleCreateBackup}
                    className='w-full sm:w-auto bg-transparent'
                  >
                    Create Backup
                  </Button>
                  <p className='text-sm text-gray-500'>
                    Last backup: March 15, 2024
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
