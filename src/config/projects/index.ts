import lapchessImg from 'assets/lapchess.png'
import wordScopeImg from 'assets/wordScope.png'
import shopifyImg from 'assets/shopify.png'

import lapchessDescription from './description/lapchess.json'
import shopifyDescription from './description/shopify.json'
import wordScopeDescription from './description/wordScope.json'

const lapchess = {
    image: {
        source: lapchessImg,
        style: 'mt-1 mx-auto h-28 w-28'
    },
    description: lapchessDescription,
    source: 'https://github.com/Andryshka16/lapchess',
    preview: 'https://lapchess.netlify.app'
}

const shopify = {
    image: {
        source: shopifyImg,
        style: 'my-1 mx-auto h-28'
    },
    description: shopifyDescription,
    source: 'https://github.com/Andryshka16/shopify',
    preview: 'https://shopify-online.netlify.app'
}

const wordScope = {
    image: {
        source: wordScopeImg,
        style: 'my-1 mx-auto h-28 w-28'
    },
    description: wordScopeDescription,
    source: 'https://github.com/Andryshka16/english-learner',
    preview: 'https://wordscope.netlify.app'
}

export { lapchess, shopify, wordScope }
