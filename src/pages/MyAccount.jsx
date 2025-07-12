import React, { useState } from 'react';
import { Mail, ChevronDown } from 'lucide-react';
import SmmHeader from '../components/SmmHeader';

export default function MyAccount() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [timezone, setTimezone] = useState('(UTC +6:00) Bangladesh Standard Time, Bhutan Time, Omsk Time');

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    if (newPassword.length < 8) {
      alert('Password must be at least 8 characters long!');
      return;
    }
    // Simulate password change
    alert('Password changed successfully!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleTwoFactorToggle = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
    if (!twoFactorEnabled) {
      alert('Two-factor authentication enabled! A verification code will be sent to your email.');
    } else {
      alert('Two-factor authentication disabled.');
    }
  };

  const handleTimezoneChange = (e) => {
    setTimezone(e.target.value);
  };

  const handleSaveTimezone = () => {
    alert('Timezone settings saved!');
  };

  const handleGenerateApiKey = () => {
    const newApiKey = 'sk-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    alert(`New API Key generated: ${newApiKey}`);
  };

  return (
    <div className="min-h-screen bg-main-bg text-white font-poppins pb-10 ">
        <SmmHeader/>
      <div className="max-w-7xl mx-auto mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column */}
          <div className="space-y-8">
            
            {/* Two-factor Authentication */}
            <div className="bg-dark-bg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Two-factor authentication</h2>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Email-based option to add an extra layer of protection to your account. 
                When signing in you'll need to enter a code that will be sent to your 
                email address.
              </p>
              <button 
                onClick={handleTwoFactorToggle}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  twoFactorEnabled 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-purple-600 hover:bg-purple-700'
                }`}
              >
                {twoFactorEnabled ? 'Disable' : 'Enable'}
              </button>
            </div>

            {/* Timezone */}
            <div className="bg-dark-bg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Timezone</h2>
              <div className="relative mb-6">
                <select 
                  value={timezone}
                  onChange={handleTimezoneChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="(UTC +6:00) Bangladesh Standard Time, Bhutan Time, Omsk Time">
                    (UTC +6:00) Bangladesh Standard Time, Bhutan Time, Omsk Time
                  </option>
                  <option value="(UTC +0:00) Greenwich Mean Time, Dublin, Edinburgh, London">
                    (UTC +0:00) Greenwich Mean Time, Dublin, Edinburgh, London
                  </option>
                  <option value="(UTC -5:00) Eastern Standard Time, New York, Toronto">
                    (UTC -5:00) Eastern Standard Time, New York, Toronto
                  </option>
                  <option value="(UTC -8:00) Pacific Standard Time, Los Angeles, Vancouver">
                    (UTC -8:00) Pacific Standard Time, Los Angeles, Vancouver
                  </option>
                  <option value="(UTC +9:00) Japan Standard Time, Tokyo, Seoul">
                    (UTC +9:00) Japan Standard Time, Tokyo, Seoul
                  </option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              </div>
              <button 
                onClick={handleSaveTimezone}
                className="w-full bg-purple-600 hover:bg-purple-700 py-3 px-4 rounded-lg font-medium transition-colors duration-200"
              >
                Save
              </button>
            </div>

            {/* API Key */}
            <div className="bg-dark-bg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">API key</h2>
              <button 
                onClick={handleGenerateApiKey}
                className="w-full bg-purple-600 hover:bg-purple-700 py-3 px-4 rounded-lg font-medium transition-colors duration-200"
              >
                Generate new
              </button>
            </div>

          </div>

          {/* Right Column */}
          <div className="bg-dark-bg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Account Details</h2>
            
            <div className="space-y-6">
              
              {/* Username */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <span className="text-gray-300 mb-2 sm:mb-0">Username</span>
                <span className="font-medium">drakj619</span>
              </div>

              {/* Email */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <span className="text-gray-300 mb-2 sm:mb-0">Email</span>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">drakj619@gmail.com</span>
                  <Mail className="text-purple-400" size={16} />
                </div>
              </div>

              {/* Password Change Section */}
              <div className="pt-4 border-t border-gray-700">
                <div className="space-y-4">
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Current password</label>
                    <input
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter current password"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">New password</label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter new password"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Confirm new password</label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Confirm new password"
                    />
                  </div>

                  <button 
                    onClick={handlePasswordChange}
                    className="w-full bg-purple-600 hover:bg-purple-700 py-3 px-4 rounded-lg font-medium transition-colors duration-200 mt-6"
                  >
                    Change password
                  </button>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Join Button (floating) */}
      <div className="fixed bottom-6 left-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 shadow-lg flex items-center space-x-2">
          <span>📧</span>
          <span>Join</span>
        </button>
      </div>
    </div>
  );
}