import * as Yup from 'yup';
import { Option } from '../../components/Dropdown';
import { TListItem } from ".";

export const createOptions = (list: TListItem[]): Option[] => {
    const opts: Option[] = [];

    if (list && list.length > 0) {
        list.forEach(item => {
            opts.push({
                id: item.value,
                value: item.value,
                label: item.label,
            });
        });
    }

    return opts;
}

export const getSelectedValue = (list: TListItem[]) => {
    let selected = {
        id: list[0].value,
        value: list[0].value,
        label: list[0].label,
    };

    list.forEach(item => {
        if (item.selected) {
            selected = {
                id: item.value,
                value: item.value,
                label: item.label,
            };
        }
    });

    return selected;
}

export const validation = Yup.object().shape({
    firstname: Yup.string().max(200).required('First name is required.'),
    lastname: Yup.string().max(200).required('Last name is required.'),
    phone: Yup.string().matches(/^[1-9]\d{10,14}/g, 'Phone number must follow the format 15195551212.').required('Phone number is required.'),
    email: Yup.string().email('Invalid email address').required('Email address is required.'),
});

export const validationAddress = Yup.object().shape({
    address_street_name: Yup.string().max(200).required('Street name is required.'),
    address_city: Yup.string().max(200).required('City is required.'),
});

export const validationPrimary = Yup.object().shape({
    contact_primary_first_name: Yup.string().max(200).required('First name is required.'),
    contact_primary_last_name: Yup.string().max(200).required('Last Name is required.'),
});