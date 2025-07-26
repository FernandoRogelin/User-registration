import { describe, expect, test, afterEach } from "vitest"
import { render, screen, cleanup } from "@testing-library/vue"

import Button from "@/components/ui/Button.vue"

const mockSlot = 'Button component'

afterEach(() => cleanup())

describe('<Button /> ui component', () => {
  test('should render button component and match snapshot', () => {
    const { container } = render(Button, { slots: { default: mockSlot } })

    expect(container.firstChild).toMatchSnapshot()
  })

  test('should render secondary button', () => {
    render(Button, {
      slots: { default: mockSlot },
      props: { variant: 'secondary' }
    })

    const button = screen.getByRole('button', { name: /Button component/i })

    expect(button).toHaveClass('components-ui-button--secondary')
  })
})
