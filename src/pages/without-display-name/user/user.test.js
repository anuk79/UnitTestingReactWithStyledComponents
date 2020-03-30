
// vendors
import React from "react";
import { shallow } from 'enzyme';
import { shallowToJson } from "enzyme-to-json";

// components
import { User } from './user';

describe("User component", () => {
    it("should render correctly when data is fetching", () => {
        const wrapper = shallow(<User fetching={true} />);

        expect(shallowToJson(wrapper)).toMatchSnapshot();

        expect(wrapper.find('Styled(LoadingSpinner)').length).toBe(1);
    });

    it("should render correctly when some error", () => {
        const wrapper = shallow(<User errorFlag={true} />);

        expect(shallowToJson(wrapper)).toMatchSnapshot();

        expect(wrapper.find('styled.div').length).toBe(1);
    });

    it("should render correctly when no error and data fetching is done", () => {
        const wrapper = shallow(<User userDetails={{}} />);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
        
        expect(wrapper.find('UserView').length).toBe(1);
        expect(wrapper.find('UserView').prop('userDetails')).toEqual({});
    });
});