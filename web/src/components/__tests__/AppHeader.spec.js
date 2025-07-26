import { describe, expect, test, afterEach } from "vitest"
import { render, screen, cleanup } from "@testing-library/vue"

import AppHeader from "@/components/common/AppHeader.vue"

import { FIRST_STEP, LAST_STEP, SECOND_STEP, THIRD_STEP } from "@/constants/steps"

afterEach(() => cleanup())

describe('<AppHeader /> common component', () => {
  test('should render the component and match snapshot', () => {
    const { container } = render(AppHeader, { props: { step: FIRST_STEP } })

    expect(container.firstChild).toMatchSnapshot()
  })

  test('should render the first step', () => {
    render(AppHeader, { props: { step: FIRST_STEP } })

    expect(screen.getByRole('heading', { name: /Seja bem-vindo\(a\)/i })).toBeInTheDocument()
  })

  test('should render the second step private individuals', () => {
    render(AppHeader, { props: { step: SECOND_STEP, isCompany: false } })

    expect(screen.getByRole('heading', { name: 'Pessoa Física' })).toBeInTheDocument()
  })

  test('should render the second step legal person', () => {
    render(AppHeader, { props: { step: SECOND_STEP, isCompany: true } })

    expect(screen.getByRole('heading', { name: 'Pessoa Jurídica' })).toBeInTheDocument()
  })

  test('should render the third step', () => {
    render(AppHeader, { props: { step: THIRD_STEP } })

    expect(screen.getByRole('heading', { name: /Senha de acesso/i })).toBeInTheDocument()
  })

  test('should render the last step', () => {
    render(AppHeader, { props: { step: LAST_STEP } })

    expect(screen.getByRole('heading', { name: /Revise suas informações/i })).toBeInTheDocument()
  })
})
