import { render, screen } from '@testing-library/react'

import MenuBar from '../../components/shared/MenuBar'

describe('MenuBar', () => {
    it('renders without breaking', () => {
        render(<MenuBar/>)
        expect(screen.getByTestId('nav-menu')).toBeTruthy()
    })
})