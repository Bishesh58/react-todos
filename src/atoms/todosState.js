import { Atm } from "@material-ui/icons";
import { atom } from 'recoil';

export const todoListState = atom({
    key: 'todoListState',
    default: [],
});