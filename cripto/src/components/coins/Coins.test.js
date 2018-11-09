import React from 'react';
import { shallow } from 'enzyme';
import Coin from "./Coin/Coin";
import CoinAmount from "./CoinAmount/CoinAmount";
import CurAmount from "./CurrencyAmount/CurAmount";
import Cur from "./Currency/Cur";
import SelectOpt from "./Form/selectOption/select";

let coinsList;


    it('SelectOpt render correctly', () => {
        const component = shallow(<SelectOpt />);
        expect(component).toMatchSnapshot();
    });
    it('CoinAmount render correctly', () => {
        const component = shallow(<CoinAmount />);
        expect(component).toMatchSnapshot();
    });
    it('CurAmount render correctly', () => {
        const component = shallow(<CurAmount />);
        expect(component).toMatchSnapshot();
    });
    it('Cur render correctly', () => {
        const component = shallow(<Cur />);
        expect(component).toMatchSnapshot();
    });
    xit('Search should render correct amount of coins', () => {
        const component = shallow(<SelectOpt />);
        expect(component.find(SelectOpt).length).toEqual(coinsList.length);
    });

    xit('Search should render correct amount of coins based on seach term', () => {
        const component = shallow(<Coin />);
        const searchTerm = 'bitcoin';
        component.find('input').simulate('change', { target: { value: searchTerm } });
        const searchCount = component.instance().filterListBySearchTerm(coinsList, searchTerm).length;
        expect(component.find(Coin).length).toEqual(searchCount);
    });

