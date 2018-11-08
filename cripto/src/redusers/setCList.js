import { SETCLIST, ADDTOCLIST } from '../constants';

const initialSetCList = [];

export default (curlist = initialSetCList, action) => {
    const {type, payload} = action;
    switch (type) {
        case SETCLIST: return [...payload];
        case ADDTOCLIST: return [...curlist, payload];
        default: return curlist;
    }
}