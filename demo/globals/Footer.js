const checkRole = require('../policies/checkRole');

module.exports = {
  slug: 'footer',
  label: 'Footer',
  policies: {
    upsert: user => checkRole(['admin', 'user'], user),
    read: () => true,
  },
  fields: [
    {
      name: 'copyright',
      label: 'Copyright',
      type: 'text',
      localized: true,
    },
  ],
};
