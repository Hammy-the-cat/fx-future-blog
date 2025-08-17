export default {
  name: 'siteStats',
  title: 'Site Statistics',
  type: 'document',
  fields: [
    {
      name: 'totalVisits',
      title: 'Total Site Visits',
      type: 'number',
      validation: Rule => Rule.min(0).integer()
    },
    {
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
      readOnly: true
    }
  ],
  preview: {
    select: {
      title: 'totalVisits',
      subtitle: 'lastUpdated'
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: `Total Visits: ${title || 0}`,
        subtitle: subtitle ? new Date(subtitle).toLocaleString() : 'Never updated'
      }
    }
  }
}