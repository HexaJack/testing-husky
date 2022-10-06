import {mount } from "@vue/test-utils";
import Nav from "../../src/components/Nav"

describe("Nav.Vue", () => {
    it("renders a profile link", () => {
        const wrapper = mount(Nav, {
            data(){
                return {
                    isLoggedIn: true,
                }
            }
        })

        const profileLink = wrapper.get("#profile")

        expect(profileLink.text()).toEqual('My Profile')
    })

    it("should not render a profile link", () =>{
        const wrapper = mount(Nav, {
            data(){
                return {
                    isLoggedIn: false,
                }
            }
        })

        const profileLink = wrapper.find("#profile")

        expect(profileLink.exists()).toBe(false);
    })
})
