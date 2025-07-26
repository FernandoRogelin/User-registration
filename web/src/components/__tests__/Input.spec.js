import { describe, expect, test, afterEach } from "vitest"
import { render, screen, cleanup } from "@testing-library/vue"

import Input from "@/components/ui/Input.vue"

const mockProps = {
  name: 'email',
  type: 'text',
  label: 'Input component'
}

afterEach(() => cleanup())

describe('<Input /> ui component', () => {
  test('should render button component and match snapshot', () => {
    const { container } = render(Input, { props: mockProps })

    expect(container.firstChild).toMatchSnapshot()
  })

  test('should render text label', () => {
    render(Input, { props: mockProps })

    expect(screen.getByText(/Input component/i)).toBeInTheDocument()
  })
})
