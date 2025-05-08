import { describe, test, expect } from 'vitest'
import { urlFormat, urlParse } from '@api/utils.ts'

describe('utils', () => {
    describe.each([
        ['https://swapi.dev/api/people/', '/people'],
        ['https://swapi.dev/api/people', '/people'],
        ['https://swapi.dev/api/people/1', '/people/1'],
    ])('urlParse', (api, front) => {
        test(`transform ${api} to ${front}`, () => {
            expect(urlParse(api)).toBe(front)
        })
    })

    describe.each([
        ['/people', 'https://swapi.dev/api/people'],
        ['people', 'https://swapi.dev/api/people'],
        ['/people/1', 'https://swapi.dev/api/people/1'],
        ['people/1', 'https://swapi.dev/api/people/1'],
    ])('urlFormat', (front, api) => {
        test(`transform ${front} to ${api}`, () => {
            expect(urlFormat(front)).toBe(api)
        })
    })
})
