import {mount } from "@vue/test-utils";
import Message from "@/components/Message.vue"

describe("Message.Vue", () => {
    it("renders props.messg when passed", () => {
        const wrapper = mount(Message, {
            props:{
                msg: 'Hello world!'
            }
        })
        expect(wrapper.text()).toContain('Hello world!')
    })
})
