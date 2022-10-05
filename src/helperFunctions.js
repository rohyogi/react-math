import uuid from 'react-uuid';
import { addRow, deleteRow } from "./reducers/rowSlice";

export const addRowItem = () => {
    return dispatch => {

        let dummy = ({
            id: uuid(),
            operator: 1,
            amount: '',
            disabled: false
        });

        dispatch(addRow(dummy));
    }
};