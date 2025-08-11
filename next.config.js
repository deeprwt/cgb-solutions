/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/solutions/automation-anywhere',
        destination: '/services/automation-anywhere',
        permanent: true,
      },
      {
        source: '/solutions/digital-process-automation',
        destination: '/services/digital-process-automation',
        permanent: true,
      },
      {
        source: '/solutions/finacle',
        destination: '/services/finacle',
        permanent: true,
      },
      {
        source: '/solutions/it-managed',
        destination: '/services/it-managed',
        permanent: true,
      },
      {
        source: '/solutions/mendix',
        destination: '/services/mendix',
        permanent: true,
      },
      {
        source: '/solutions/oracle',
        destination: '/services/oracle',
        permanent: true,
      },
      {
        source: '/solutions/outsystems',
        destination: '/services/outsystems',
        permanent: true,
      },
      {
        source: '/solutions/power-platform-dynamic-365',
        destination: '/services/power-platform-dynamic-365',
        permanent: true,
      },
      {
        source: '/solutions/servicenow',
        destination: '/services/servicenow',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
};

module.exports = nextConfig;
