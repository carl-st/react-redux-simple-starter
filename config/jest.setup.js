import { JSDOM } from 'jsdom';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
const jsdom = new JSDOM('<!doctype html><html><body><div id="app"></div></body></html>');
const { window } = jsdom;

Enzyme.configure({ adapter: new EnzymeAdapter() });

Object.defineProperty(document, 'querySelectorAll', {
    value: document.querySelectorAll
});

function copyProps (src, target) {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === 'undefined')
        .reduce((result, prop) => ({
            ...result,
            [prop]: Object.getOwnPropertyDescriptor(src, prop)
        }), {});
    Object.defineProperties(target, props);
}

window.matchMedia = window.matchMedia || (() => { return { matches: false, addListener: () => { }, removeListener: () => { } }; });
global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: 'node.js'
};
copyProps(window, global);
