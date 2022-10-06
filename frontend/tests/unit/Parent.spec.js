import {mount, shallowMount } from "@vue/test-utils";
import Parent from "../../src/components/Parent"

describe("Parent.Vue", () => {
    it("renders props.par when passed", () => {
        const wrapper = shallowMount(Parent)

        // expect(wrapper.text()).toContain('Parent')
    })
})
