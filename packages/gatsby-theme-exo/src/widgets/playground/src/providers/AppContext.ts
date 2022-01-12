import { createContext } from "react";
import { Option } from "../components/Dropdown";

export type TRightTabs = 'widgets' | 'timeline';

export interface TAppContext {
    mainOptions: Option[];
    selectedOption: Option;
    setSelectedOption: (option: Option) => void;
    rightTab: TRightTabs;
    setRightTab: (value: TRightTabs) => void;
}

export const mainOptions: Option[] = [
    { id: '1', label: 'View logs', value: 'logs' },
    { id: '2', label: 'Add a contact', value: 'addcontact' },
    { id: '3', label: 'Manage widgets', value: 'managewidgets' },
];

export const AppContext = createContext<TAppContext>({
    mainOptions,
    selectedOption: mainOptions[0],
    setSelectedOption: () => {},
    rightTab: 'widgets',
    setRightTab: () => {}
});