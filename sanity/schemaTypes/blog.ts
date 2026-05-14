export default {
  name: 'blog',
  title: 'Blog Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
  ],
}
