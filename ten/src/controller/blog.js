const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: '标题1',
      content: '内容1',
      createTime: 12344556,
      author: 'dongwd'
    },
    {
      id: 2,
      title: '标题2',
      content: '内容2',
      createTime: 12344556,
      author: 'dongwd'
    }
  ]
}

module.exports = {
  getList
}