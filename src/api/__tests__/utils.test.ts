import { describe, test, expect } from 'vitest'
import { urlFormat, urlParse } from '@api/utils.ts'

describe('utils', () => {
    describe.each([
        ['https://swapi.dev/api/people/', '/people'],
        ['https://swapi.dev/api/people', '/people'],
        ['https://swapi.dev/api/people/1', '/people/1'],
        ['/api/people/1', '/people/1'],
        ['api/people/1', '/people/1'],
        ['/people/1', '/people/1'],
    ])('urlParse', (api, front) => {
        test(`transform ${api} to ${front}`, () => {
            expect(urlParse(api)).toBe(front)
        })
    })

    describe.each([
        ['/baseurl/root', '/baseurl/api/root.json'],
        ['/baseurl/people', '/baseurl/api/people.json'],
        ['/baseurl/people/1', '/baseurl/api/people/1.json'],
        ['/baseurl/people?page=1', '/baseurl/api/people/page/1.json'],
        ['/baseurl/people/?page=1', '/baseurl/api/people/page/1.json'],
    ])('urlFormat', (front, api) => {
        test(`transform ${front} to ${api}`, () => {
            expect(urlFormat('/baseurl/', front)).toBe(api)
        })
    })

    describe.each([
        ['/root', '/api/root.json'],
        ['/people', '/api/people.json'],
        ['/people/1', '/api/people/1.json'],
        ['/people?page=1', '/api/people/page/1.json'],
        ['/people/?page=1', '/api/people/page/1.json'],
    ])('urlFormat', (front, api) => {
        test(`transform ${front} to ${api}`, () => {
            expect(urlFormat('/', front)).toBe(api)
        })
    })
})
