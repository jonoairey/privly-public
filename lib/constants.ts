/**
 * Public website constants
 */

export const SUBSCRIPTION_PLANS = {
  SCAM_WATCH: {
    name: 'Scam Watch',
    price: '$5.99',
    interval: 'month',
    features: [
      'Unlimited WhatsApp scam verification',
      'SMS and email scam analysis',
      'Voice call verification',
      'Real-time scam alerts',
      'Monthly scam trend reports',
      'Scam education library'
    ]
  },
  PERSONAL: {
    name: 'Personal',
    price: '$9.99',
    interval: 'month',
    features: [
      'Everything in Scam Watch',
      '500+ data broker monitoring',
      'Automated removal requests (94.7% success)',
      'Dark web monitoring (4 sources)',
      'Breach alert system',
      'Monthly privacy advisor calls (15 min)',
      'Weekly privacy reports'
    ]
  },
  PROFESSIONAL: {
    name: 'Professional',
    price: '$39.99',
    interval: 'month',
    features: [
      'Everything in Personal',
      '72,000+ website content monitoring',
      'DMCA takedown tools',
      'Automated takedown notice generation',
      'Copyright registration assistance',
      'AI deepfake detection',
      'Dedicated account manager'
    ]
  }
}
