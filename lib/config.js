
const renderer = {
  renderer: {
    desc: 'Renderer',
    types: ['Function'],
    value: undefined
  },
  views: {
    desc: 'Path to templates',
    types: ['String'],
    value: './views',
  },
  render: {
    desc: 'View engine options',
    types: ['Object'],
    value: undefined
  },
  extension:{
    desc: 'Template Extension',
    types: ['String'],
    value: undefined
  }
}

export default renderer;
