import { describe, expect, test, afterEach, vi } from "vitest"
import { render, screen, cleanup, fireEvent } from "@testing-library/vue"

import AppFooter from "@/components/common/AppFooter.vue"

import { FIRST_STEP, SECOND_STEP } from "@/constants/steps"

afterEach(() => cleanup())

const nextStep = vi.fn()
const prevStep = vi.fn()
const validateField = vi.fn()

const mockProps = {
  step: FIRST_STEP,
  personType: 'company',
  nextStep,
  prevStep,
  validateField
}

describe('<AppFooter /> common component', () => {
  test('should render component and match snapshot', () => {
    const { container } = render(AppFooter, { props: mockProps })

    expect(container.firstChild).toMatchSnapshot()
  })

  test('should render back button and call prevStep function', async () => {
    render(AppFooter, { props: { ...mockProps, step: SECOND_STEP } })

    await fireEvent.click(screen.getByRole('button', { name: /voltar/i }))

    expect(prevStep).toHaveBeenCalled()
  })

  test('should call nextStep function when click on button', async () => {
    validateField.mockResolvedValue({ valid: true })
    render(AppFooter, { props: mockProps })

    await fireEvent.click(screen.getByRole('button', { name: /continuar/i }))

    expect(nextStep).toHaveBeenCalled()
  })
})
