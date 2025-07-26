import { describe, expect, test, afterEach } from "vitest"
import { render, screen, cleanup } from "@testing-library/vue"

import Response from "@/components/common/Response.vue"

const mockProps = { response: { message: 'Response component' } }

afterEach(() => cleanup())

describe('<Response /> common component', () => {
  test('should render component and match snapshot', () => {
    const { container } = render(Response, { props: mockProps })

    expect(container.firstChild).toMatchSnapshot()
  })

  test('should render message', () => {
    render(Response, { props: mockProps })

    expect(screen.getByText(/Response component/i))
  })
})
