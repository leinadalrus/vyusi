import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TradingCard from '../TradingCard.vue'

describe('HelloWorld', () => {
    it('renders properly', () => {
        const wrapper = mount(TradingCard, { props: { title: 'Vitest', description: 'Hello world!' } })
        expect(wrapper.text()).toContain('Vitest Hello world!')
    })
})
