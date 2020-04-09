
const greet = require('./index');

test('can greet', () => {
    expect(greet('Bob')).toBe('Hello, Bob');
});

test('can handle null', () => {
    expect(greet()).toBe('Hello, my friend');
});

test('can shout', () => {
    expect(greet('MATT')).toBe('HELLO MATT!');
});

test('can two names', () => {
    const names = ['John', 'Jacob'];
    expect(greet(names)).toBe('Hello, John and Jacob.');
});

test('can handle arrays', () => {
    const names = ['John', 'Jacob', 'Jordan'];
    expect(greet(names)).toBe('Hello, John, Jacob and Jordan.');
});

test('can handle arrays capped', () => {
    const names = ['John', 'JACOB', 'Jordan'];
    expect(greet(names)).toBe('Hello, John, Jordan AND JACOB.');
});

test('can handle commas', () => {
    const names = ['Bob', 'Charlie, Dianne'];
    expect(greet(names)).toBe('Hello, Bob, Charlie, and Dianne.');
});

test('can handle backquotes', () => {
    const names = ['Bob', '"Charlie, Dianne"'];
    expect(greet(names)).toBe('Hello, Bob and Charlie, Dianne.');
});