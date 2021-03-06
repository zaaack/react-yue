const React = require('react')
const gui = require('gui')
const { createTestSuite } = require('./utils')

describe('button', () => {
  it('should render the component correctly', done => {
    createTestSuite(render => {
      const title = 'hello'
      const checked = true
      const image = gui.Image.createFromBuffer(Buffer.alloc(0), 1)

      const ele = (
        <button
          title={title}
          checked={checked}
          defaultChecked={checked}
          image={image}
        />
      )

      render(ele, container => {
        const button = container.childAt(0)
        expect(button instanceof gui.Button).toBeTruthy()
        expect(button.getTitle()).toBe(title)
        expect(button.isChecked()).toBe(checked)
        expect(button.getImage()).toBe(image)
        done()
      })
    })
  })
})
