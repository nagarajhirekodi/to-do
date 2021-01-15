import * as React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import App from "./App";
configure({ adapter: new Adapter() });

describe("Should render App component", () => {
  const wrapper = shallow(<App />);
  it("Should render App component", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
