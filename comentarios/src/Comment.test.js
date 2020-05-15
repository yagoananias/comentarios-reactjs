import React from 'react'
import Comment from './Comment'
import { render } from 'enzyme'


test('should render', () => {
  const c = {
    comment: 'teste'
  }

  const wrapper = render(<Comment c={c} />)
  console.log(wrapper.text())
})