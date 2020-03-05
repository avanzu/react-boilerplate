// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { render, unmountComponentAtNode } from "react-dom";

const findNodeBy = container => selector => container.querySelector(selector)
const findNodeByTestkey = container => selector => container.querySelector(`[data-qa=${selector}]`)
global.setupContainer = (dom) => {
    dom.container = document.createElement('div')
    document.body.appendChild(dom.container)
    dom.element = findNodeBy(dom.container)
    dom.qa = findNodeByTestkey(dom.container)
    dom.render  = element => render(element, dom.container)

    return dom
}
global.tearDownContainer = (dom) => {
    unmountComponentAtNode(dom.container)
    dom.container.remove()
    dom.container = null
    dom.element = null
    dom.render  = null
    dom.qa = null
    return dom
}
