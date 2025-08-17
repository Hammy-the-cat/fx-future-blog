export default {
  name: 'postStats',
  title: 'Post Statistics',
  type: 'document',
  fields: [
    {
      name: 'post',
      title: 'Post Reference',
      type: 'reference',
      to: [{type: 'post'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'viewCount',
      title: 'View Count',
      type: 'number',
      validation: Rule => Rule.min(0).integer()
    },
    {
      name: 'lastViewed',
      title: 'Last Viewed',
      type: 'datetime'
    }
  ],
  preview: {
    select: {
      title: 'post.title',
      viewCount: 'viewCount',
      lastViewed: 'lastViewed'
    },
    prepare(selection) {
      const {title, viewCount, lastViewed} = selection
      return {
        title: title || 'Unknown Post',
        subtitle: `Views: ${viewCount || 0} | Last: ${lastViewed ? new Date(lastViewed).toLocaleDateString() : 'Never'}`
      }
    }
  }
}