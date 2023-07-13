import lapchessImg from 'assets/lapchess.png'
import wordScopeImg from 'assets/wordScope.png'
import shopifyImg from 'assets/shopify.png'

const lapchess = {
    image: {
        source: lapchessImg,
        style: 'mt-1 mx-auto h-28 w-28'
    },
    title: 'Lapchess - online chess platform with practice mode',
    source: 'https://github.com/Andryshka16/lapchess',
    preview: 'https://lapchess.netlify.app'
}

const shopify = {
    image: {
        source: shopifyImg,
        style: 'my-1 mx-auto h-28'
    },
    title: 'Shopify - ecommerce app using fake store API',
    source: 'https://github.com/Andryshka16/shopify',
    preview: 'https://shopify-online.netlify.app'
}

const wordScope = {
    image: {
        source: wordScopeImg,
        style: 'my-1 mx-auto h-28 w-28'
    },
    title: 'WordScope - online assistant for eglish studies',
    source: 'https://github.com/Andryshka16/english-learner',
    preview: 'https://wordscope.netlify.app'
}

export { lapchess, shopify, wordScope }
