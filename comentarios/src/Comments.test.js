import React from 'react'
import { shallow } from 'enzyme'
import Comments from './Comments'
import Comment from './Comment'

describe('<Comments />', () => {
  test('should render Comments', () => {
    const comments = {
       id: 'a', coment: 'Comment 1',
       id: 'b', coment: 'Comment 2'
    }
    const wrapper = shallow(<Comments comments={comments} />)
    expect(wrapper.find(Comment).length).toBe(2)
  })
})