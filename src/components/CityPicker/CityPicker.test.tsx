import { render } from '../../../test/utilities'
import CityPicker from './CityPicker'
import { screen } from "@testing-library/react"
import { vi } from 'vitest'
import React from 'react'


describe('CityPicker', () => {
    // Unit tests
    describe('Unit tests', () => {
        test.todo('should have null initial values for selectedCountry and selectedCity', () => {
            render(<CityPicker />)
        })

        test.skip('should update selectedCountry and reset selectedCity on handleSelectedCountry', () => {
            render(<CityPicker />)

            const countryOption = { value: { isoCode: 'US' }, label: 'United States' }

        })

        test.skip('should update selectedCity and call router.push on handleSelectedCity', () => {
            const mockRouter = {
                push: vi.fn(),
            }
            vi.spyOn(require('next/router'), 'useRouter').mockReturnValue(mockRouter)

            render(<CityPicker />)

            const cityOption = {
                value: {
                    latitude: '40.7128',
                    longitude: '-74.0060',
                    isoCode: 'US',
                    name: 'New York',
                    stateCode: 'NY',
                },
                label: 'New York',
            }

        })
    })

    // Component tests
    describe('Component tests', () => {
        test.todo('should render the country select component', () => {
            render(<CityPicker />)
            expect(screen.getByLabelText('Country')).toBeInTheDocument()
        })

        test.todo('should not render the city select component initially', () => {
            render(<CityPicker />)
            expect(screen.getByLabelText('City')).not.toBeInTheDocument()
        })

        test.skip('should render the city select component when a country is selected', () => {
            render(<CityPicker />)

            expect(screen.getByLabelText('City')).toBeInTheDocument()
        })

        test.todo('should select a country and city option', () => {
            const mockRouter = {
                push: jest.fn(),
            }
            jest.spyOn(require('next/router'), 'useRouter').mockReturnValue(mockRouter)

            render(<CityPicker />)

            const countryOption = { value: { isoCode: 'US' }, label: 'United States' }
            const cityOption = {
                value: {
                    latitude: '40.7128',
                    longitude: '-74.0060',
                    isoCode: 'US',
                    name: 'New York',
                    stateCode: 'NY',
                },
                label: 'New York',
            }

            expect(mockRouter.push).toHaveBeenCalledWith('/location/New%20York/40.7128/-74.0060')
        })
    })
})
