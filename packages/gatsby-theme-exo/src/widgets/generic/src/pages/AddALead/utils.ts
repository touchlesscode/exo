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
    phone: Yup.string().matches(/^\+?[1-9]\d{10,14}/g, 'Phone number must follow the format +1xxxxxxxxxx.').required('Phone number is required.'),
    leadType: Yup.string().oneOf(['consumer', 'business']).required('You must select a lead type.'),
    companyname: Yup.string().when('leadType', {
        is: 'business',
        then: Yup.string().required('Company name field is required.')
    }),
    contactStreetNumber: Yup.string().when('leadType', {
        is: 'business',
        then: Yup.string().required('Street number is required.')
    }),
    contactStreetName: Yup.string().when('leadType', {
        is: 'business',
        then: Yup.string().required('Street name is required.')
    }),
    contactCity: Yup.string().when('leadType', {
        is: 'business',
        then: Yup.string().required('City is required.')
    }),
    contactState: Yup.string().when('leadType', {
        is: 'business',
        then: Yup.string().required('Province/State is required.')
    }),
    contactZip: Yup.string().when('leadType', {
        is: 'business',
        then: Yup.string().required('Postal/Zip code is required.')
    }),
    position: Yup.string().when('leadType', {
        is: 'business',
        then: Yup.string().required('Job title is required.')
    }),
    email: Yup.string().email('Invalid email address').required('Email address is required.'),
    method: Yup.string().required('You must select a contact method.'),
    language: Yup.string().required('You must select a language.'),
    salesrep: Yup.string().required('You must select a sales representative.'),
    store: Yup.string().required('You must select a store for this representative.'),
    agree: Yup.boolean().oneOf([true],'You must agree that you have consent.'),
});