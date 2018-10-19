import React, {Component} from 'react';
import './curAmount.css';
import { CRYPTO_COMPARE_URL_CUR } from '../../../constants';

class CurAmount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencyRate: {}
        };
    }
    static defaultProps = {
        currensy: []
    };
    componentDidMount() {
        const currensyNames = this.props.currencyAll.map(item => item.Name.toUpperCase()).join(',');
        fetch(`${CRYPTO_COMPARE_URL_CUR}${this.props.coin.Name.toUpperCase()}&tsyms=${currensyNames}`)
            .then(responce => responce.json())
            .then(responce => this.setState({ currencyRate: responce }))
            .catch(err => alert(err));
    }
    render() {
        const {coin, value, currency} = this.props;
        return (
            <div className="coinAmount">
                <div className="coinAmount_text" ><span>{coin.Name}:</span>
                    <ul>
                        { currency.map(item => <li key={Math.random()}>{value * this.state.currencyRate[item.Name]}  {item.Name}</li>) }
                    </ul>

                </div>
            </div>
        );
    }
}

export default CurAmount;
