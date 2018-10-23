import React from 'react';
import Btn from "./Btn/Btn";
import SelectOpt from "./selectOption/select";

const Form = ({value, onChange, onSubmit, coins, list, disabled}) =>
                    <form onSubmit={onSubmit}>
                        <label>
                            <i>Pick your coin:&nbsp;</i>
                            <select value={value} onChange={onChange} className="coinSelect">
                                <option value=""></option>
                                {coins.filter(coin => list.every(lst => lst.Name !== coin.Name)).map(item => <SelectOpt
                                                                                                                Name={item.Name}
                                                                                                                key={item.Id} />)}
                            </select>
                        </label>
                        <Btn disabled={disabled} classN="submitBtn">Add</Btn>
                    </form>;

export default Form;

