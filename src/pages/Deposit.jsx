import React, { useState, useEffect } from 'react';
import { ChevronDown, Info, CreditCard, Smartphone, Building, Users, DollarSign, ArrowRightLeft } from 'lucide-react';
import SmmHeader from '../components/SmmHeader';

const Deposit = () => {
  const [activeTab, setActiveTab] = useState('add-fund');
  const [selectedMethod, setSelectedMethod] = useState('bKash Merchant Payment [ Auto ] - Min 1$');
  const [showDropdown, setShowDropdown] = useState(false);
  const [usdAmount, setUsdAmount] = useState('');
  const [bdtAmount, setBdtAmount] = useState('');
  const [exchangeRate] = useState(120.50); // Current USD to BDT rate
  const [extraFee, setExtraFee] = useState(0);
  const [transactions] = useState([
    { id: 1, method: 'bKash', amount: '$50.00', bdt: '৳6,025', status: 'Completed', date: '2024-07-10', time: '14:30' },
    { id: 2, method: 'Nagad', amount: '$25.00', bdt: '৳3,012', status: 'Pending', date: '2024-07-09', time: '09:15' },
    { id: 3, method: 'Rocket', amount: '$75.00', bdt: '৳9,037', status: 'Completed', date: '2024-07-08', time: '16:45' },
    { id: 4, method: 'Bank Transfer', amount: '$100.00', bdt: '৳12,050', status: 'Failed', date: '2024-07-07', time: '11:20' }
  ]);

  const paymentMethods = [
    { 
      name: 'bKash Merchant Payment [ Auto ] - Min 1$',
      fee: 2.5,
      logo: '🟢',
      description: 'Instant mobile payment solution',
      processingTime: '5-10 minutes',
      supported: ['Mobile Banking', 'QR Code', 'USSD']
    },
    { 
      name: 'Nagad Payment [ Manual ] - Min 5$',
      fee: 1.8,
      logo: '🔴',
      description: 'Digital financial service',
      processingTime: '10-30 minutes',
      supported: ['Mobile Banking', 'QR Code', 'App']
    },
    { 
      name: 'Rocket Payment [ Auto ] - Min 2$',
      fee: 3.0,
      logo: '🟡',
      description: 'Mobile financial service by DBBL',
      processingTime: '5-15 minutes',
      supported: ['Mobile Banking', 'USSD', 'App']
    },
    { 
      name: 'Bank Transfer [ Manual ] - Min 10$',
      fee: 1.0,
      logo: '🏦',
      description: 'Traditional bank transfer',
      processingTime: '1-3 hours',
      supported: ['Online Banking', 'Branch', 'ATM']
    }
  ];

  const selectedMethodData = paymentMethods.find(method => method.name === selectedMethod);

  useEffect(() => {
    if (usdAmount) {
      const bdt = (parseFloat(usdAmount) * exchangeRate).toFixed(2);
      setBdtAmount(bdt);
      const fee = selectedMethodData ? (parseFloat(usdAmount) * selectedMethodData.fee / 100).toFixed(2) : '0.00';
      setExtraFee(parseFloat(fee));
    } else {
      setBdtAmount('');
      setExtraFee(0);
    }
  }, [usdAmount, selectedMethod, exchangeRate, selectedMethodData]);

  const handleUsdChange = (e) => {
    const value = e.target.value;
    setUsdAmount(value);
  };

  const handleBdtChange = (e) => {
    const value = e.target.value;
    setBdtAmount(value);
    if (value) {
      const usd = (parseFloat(value) / exchangeRate).toFixed(2);
      setUsdAmount(usd);
    } else {
      setUsdAmount('');
    }
  };

  const total = usdAmount ? (parseFloat(usdAmount) + extraFee).toFixed(2) : '0.00';

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-green-400';
      case 'Pending': return 'text-yellow-400';
      case 'Failed': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div>
        <SmmHeader/>
        <div className="min-h-screen bg-gray-900 text-white p-4">
        
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg p-6">
              {/* Tabs */}
              <div className="flex mb-6 border-b border-gray-700">
                <button
                  onClick={() => setActiveTab('add-fund')}
                  className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors ${
                    activeTab === 'add-fund' 
                      ? 'border-pink-500 text-pink-400' 
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <DollarSign className="w-4 h-4" />
                  <span>Add Fund</span>
                </button>
                <button
                  onClick={() => setActiveTab('transactions')}
                  className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors ${
                    activeTab === 'transactions' 
                      ? 'border-pink-500 text-pink-400' 
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <ArrowRightLeft className="w-4 h-4" />
                  <span>Transactions</span>
                </button>
              </div>

              {activeTab === 'add-fund' ? (
                <div className="space-y-6">
                  {/* Payment Method Selector */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Method</label>
                    <div className="relative">
                      <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:bg-gray-600 transition-colors"
                      >
                        <span className="flex items-center space-x-2">
                          <span className="text-lg">{selectedMethodData?.logo}</span>
                          <span>{selectedMethod}</span>
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {showDropdown && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-gray-700 border border-gray-600 rounded-lg shadow-lg z-10">
                          {paymentMethods.map((method, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setSelectedMethod(method.name);
                                setShowDropdown(false);
                              }}
                              className="w-full px-4 py-3 text-left hover:bg-gray-600 transition-colors flex items-center space-x-2 first:rounded-t-lg last:rounded-b-lg"
                            >
                              <span className="text-lg">{method.logo}</span>
                              <div>
                                <div className="font-medium">{method.name}</div>
                                <div className="text-sm text-gray-400">Fee: {method.fee}%</div>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Amount Input */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Amount, USD</label>
                      <input
                        type="number"
                        step="0.01"
                        value={usdAmount}
                        onChange={handleUsdChange}
                        placeholder="0.00"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Amount, BDT</label>
                      <input
                        type="number"
                        step="0.01"
                        value={bdtAmount}
                        onChange={handleBdtChange}
                        placeholder="0.00"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                  </div>

                  {/* Exchange Rate Info */}
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Exchange Rate:</span>
                      <span className="text-green-400">1 USD = {exchangeRate} BDT</span>
                    </div>
                  </div>

                  {/* Extra Fee */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Extra fee</label>
                    <input
                      type="number"
                      step="0.01"
                      value={extraFee.toFixed(2)}
                      readOnly
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-400"
                    />
                  </div>

                  {/* Total */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Total</label>
                    <input
                      type="number"
                      step="0.01"
                      value={total}
                      readOnly
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-400"
                    />
                  </div>

                  {/* Pay Button */}
                  <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-4 rounded-lg transition-all duration-200 transform hover:scale-105">
                    Pay
                  </button>
                </div>
              ) : (
                /* Transaction History */
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Transaction History</h3>
                  <div className="space-y-3">
                    {transactions.map((transaction) => (
                      <div key={transaction.id} className="bg-gray-700 rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="flex items-center space-x-3 mb-2 md:mb-0">
                            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                              <CreditCard className="w-5 h-5 text-gray-400" />
                            </div>
                            <div>
                              <div className="font-medium">{transaction.method}</div>
                              <div className="text-sm text-gray-400">
                                {transaction.date} at {transaction.time}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{transaction.amount}</div>
                            <div className="text-sm text-gray-400">{transaction.bdt}</div>
                            <div className={`text-sm font-medium ${getStatusColor(transaction.status)}`}>
                              {transaction.status}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Payment Gateway Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 sticky top-4">
              <div className="flex items-center space-x-2 mb-4">
                <Info className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-semibold">Payment Gateways Information</h3>
              </div>
              
              {selectedMethodData && (
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-2">{selectedMethodData.logo}</div>
                      <div className="text-gray-800 font-bold text-xl mb-2">
                        {selectedMethodData.name.split(' ')[0]} Payment
                      </div>
                      <div className="text-pink-500 font-semibold text-lg">
                        {selectedMethodData.name.split(' ')[0]}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedMethodData && (
                <div className="space-y-4">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center space-x-2">
                      <Building className="w-4 h-4" />
                      <span>Gateway Details</span>
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Service:</span>
                        <span>{selectedMethodData.description}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Processing Fee:</span>
                        <span className="text-green-400">{selectedMethodData.fee}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Processing Time:</span>
                        <span>{selectedMethodData.processingTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>Supported Methods</span>
                    </h4>
                    <div className="space-y-2">
                      {selectedMethodData.supported.map((method, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-sm">{method}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-blue-400">Security Features</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>256-bit SSL encryption</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>PCI DSS compliant</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Real-time fraud detection</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Deposit;