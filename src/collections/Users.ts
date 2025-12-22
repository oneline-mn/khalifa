import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email'
  },
  auth: true,
  fields: [
    {
      name: 'role',
      type: 'select',
      label: 'Test: role selection',
      options: [
        {
          label: 'User',
          value: 'user'
        },
        {
          label: 'Admin',
          value: 'admin'
        }
      ]
    }
    // Email added by default
    // Add more fields as needed
  ]
}
