import { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Барааны нэр'
      }
    },
    {
      name: 'stock',
      type: 'number',
      required: true,
      admin: {
        placeholder: 'Барааны тоо ширхэг'
      }
    },
    {
      name: 'price',
      type: 'number',
      admin: {
        placeholder: 'Барааны үнэ'
      }
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      admin: {
        placeholder: 'Төрөл'
      }
    },
    {
      name: 'description',
      type: 'text',
      admin: {
        placeholder: 'Барааны дэлгэрэнгүй мэдээлэл'
      }
    }
    // {
    //   name: 'images',
    //   type: 'upload',
    //   relationTo: 'media'
    // }
  ]
}
