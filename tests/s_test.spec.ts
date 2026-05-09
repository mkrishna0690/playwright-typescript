import {test, expect} from '@playwright/test';

test.beforeAll(async () => {
    console.log('This will run before all tests');
});

test.afterAll(async () => {
    console.log('This will run after all tests');
});

test.beforeEach(async () => {
    console.log('This will run before each test');
});

test.afterEach(async () => {
    console.log('This will run after each test');
});