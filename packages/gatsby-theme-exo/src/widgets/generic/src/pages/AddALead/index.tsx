
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { CancelButton, Divider, FlexBox, FlexRow, SpacerGap, SubmitButton } from './index.styled';
import Loading from '../../components/Loading';
import { MainWrapper } from '../../components/Wrappers';
import { UserContext } from '../../context/UserContext';
import { WidgetType, WidgetEvents } from '../../hooks/widgetApi';
import useWidgetReady from '../../hooks/useWidgetReady';
import axios from 'axios';
import { useFormik } from 'formik';
import Dropdown, { Option } from '../../components/Dropdown';
import TextInput from '../../components/TextInput';
import { createOptions, getSelectedValue, validation } from './utils';
import Checkbox from 'src/components/Checkbox';

export interface TListItem {
    label: string;
    value: string;
    selected: boolean;
}

interface TOutlet {
    [key: string]: TListItem[];
}

interface TOptionResponse {
    languages: TListItem[];
    leadTypes: TListItem[];
    methodOfContact: TListItem[];
    outlets: TOutlet;
    salesReps: TListItem[];
}

interface TExistingContact {
    ban_no: string;
    city: string;
    phone_number: string;
    primary_contact: string;
}

const AddALead = () => {
    const ready = useWidgetReady({
        type: WidgetType.Action,
        label: "",
        header: "",
        footer: ""
    });
    const { token, postEvent } = useContext(UserContext);
    const [init, setInit] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [existingContact, setExistingContact] = useState<boolean>(false);
    const [response, setResponse] = useState<TOptionResponse>();

    const [selectedLang, setSelectedLang] = useState<Option>();
    const [languages, setLanguages] = useState<Option[]>([]);

    const [selectedLead, setSelectedLead] = useState<Option>();
    const [leadTypes, setLeadtypes] = useState<Option[]>([]);
    
    const [selectedMethod, setSelectedMethod] = useState<Option>();
    const [methods, setMethods] = useState<Option[]>([]);
    
    const [defaultRep, setDefaultRep] = useState<Option>();
    const [selectedRep, setSelectedRep] = useState<Option>();
    const [salesReps, setSalesReps] = useState<Option[]>([]);
    
    const [outlets, setOutlets] = useState<TOutlet>({});
    const [selectedStore, setSelectedStore] = useState<Option>();
    const [stores, setStores] = useState<Option[]>([]);

    const { values, errors, handleChange, handleSubmit, setFieldValue, isValid, resetForm, touched, setFieldError } = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            phone: '',
            phone_ext: '',
            leadType: '',
            companyname: '',
            contactStreetNumber: '',
            contactStreetName: '',
            contactCity: '',
            contactState: '',
            contactZip: '',
            position: '',
            email: '',
            method: '',
            language: '',
            salesrep: '',
            store: '',
            agree: false,
        },
        validationSchema: validation,
        onSubmit: values => {
            if (isValid && !existingContact) {
                const formData = new FormData();

                formData.set('firstname', values.firstname);
                formData.set('lastname', values.lastname);
                formData.set('phonenumber', values.phone);
                formData.set('phone_ext', values.phone_ext);
                formData.set('leadType', values.leadType);
                formData.set('companyname', values.companyname);
                formData.set('contactStreetNumber', values.contactStreetNumber);
                formData.set('contactStreetName', values.contactStreetName);
                formData.set('contactCity', values.contactCity);
                formData.set('contactState', values.contactState);
                formData.set('contactZip', values.contactZip);
                formData.set('position', values.position);
                formData.set('email', values.email);
                formData.set('preferred_method_of_contact', values.method);
                formData.set('account_contact_language', values.language);
                formData.set('newsalesrep', values.salesrep);
                formData.set('outlet', values.store);
                formData.set('loadOpportunityBox', values.agree ? 'true' : 'false');

                axios.post(
                    `${process.env.REACT_APP_WEBAPP_HOST}/v2/api/crm/lead`, 
                    formData, 
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'multipart/form-data',
                            'Accept': 'application/json',
                        }
                    }
                ).then(() => {
                    handleCancel();
                })
                .catch(err => {
                    const errors = err.response.data.errors;
                    Object.keys(errors).forEach(key => {
                        const label = (key === 'phonenumber') ? 'phone' : key;
                        setFieldError(label, errors[key]);
                    });
                });
            }
        }
    });

    useEffect(() => {
        if (!init && ready) {
            setInit(true);
        }
    }, [init, ready]);

    const loadStores = (rep: Option) => {
        const allStores = createOptions(outlets[rep.id]);
        const store = allStores.length > 0 ? allStores[0] : undefined;

        setStores(allStores);
        setSelectedStore(store);
        setFieldValue('store', store?.value || '');
    }

    const loadFormOptions = useCallback(async () => {
        if (token) {
            setLoading(true);
            setError(false);
            const resp = await axios.get<TOptionResponse>(`${process.env.REACT_APP_WEBAPP_HOST}/v2/api/crm/lead/options`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (resp.data) {
                setResponse(resp.data);
                clearForm(resp.data);
            }
            if (!resp.data) {
                setError(true);
            }
            setLoading(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (selectedRep !== undefined) {
            loadStores(selectedRep);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [outlets, selectedRep]);

    useEffect(() => {
        if (init) {
            loadFormOptions();
        }
    }, [init, loadFormOptions]);

    // Clear business information
    useEffect(() => {
        if (selectedLead?.value === 'consumer') {
            setFieldValue('companyname', '');
            setFieldValue('contactStreetNumber', '');
            setFieldValue('contactStreetName', '');
            setFieldValue('contactCity', '');
            setFieldValue('contactState', '');
            setFieldValue('contactZip', '');
            setFieldValue('position', '');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedLead]);

    // Validate contact name
    const handleNameCheck = async () => {
        if (values.firstname !== '' && values.lastname !== '') {
            const resp = await axios
                .post<TExistingContact[]|undefined>(`${process.env.REACT_APP_WEBAPP_HOST}/modules/checkForExistingContacts.php?first_name=${values.firstname}&last_name=${values.lastname}`, {}, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            if (resp.data !== undefined && resp.data.length > 0) {
                setExistingContact(true);
            } else {
                setExistingContact(false);
            }
        }
    }

    const clearForm = (response: TOptionResponse) => {
        resetForm();
        setFieldValue('firstname', '');
        setFieldValue('lastname', '');
        setFieldValue('phone', '');
        setFieldValue('phone_ext', '');
        setFieldValue('companyname', '');
        setFieldValue('contactStreetNumber', '');
        setFieldValue('contactStreetName', '');
        setFieldValue('contactCity', '');
        setFieldValue('contactState', '');
        setFieldValue('contactZip', '');
        setFieldValue('position', '');
        setFieldValue('email', '');
        setFieldValue('agree', false);

        setFieldError('firstname', undefined);
        setFieldError('lastname', undefined);
        setFieldError('phone', undefined);
        setFieldError('companyname', undefined);
        setFieldError('contactStreetNumber', undefined);
        setFieldError('contactStreetName', undefined);
        setFieldError('contactCity', undefined);
        setFieldError('contactState', undefined);
        setFieldError('contactZip', undefined);
        setFieldError('position', undefined);
        setFieldError('email', undefined);
        setFieldError('agree', undefined);

        setLanguages(createOptions(response.languages));
        setSelectedLang(getSelectedValue(response.languages));
        setFieldValue('language', getSelectedValue(response.languages).value);
        
        setLeadtypes(createOptions(response.leadTypes));
        setSelectedLead(getSelectedValue(response.leadTypes));
        setFieldValue('leadType', getSelectedValue(response.leadTypes).value);
        
        setMethods(createOptions(response.methodOfContact));
        setSelectedMethod(getSelectedValue(response.methodOfContact));
        setFieldValue('method', getSelectedValue(response.methodOfContact).value);

        const salesRep = getSelectedValue(response.salesReps);
        setSalesReps(createOptions(response.salesReps));
        setDefaultRep(salesRep);
        setSelectedRep(salesRep);
        setFieldValue('salesrep', salesRep.value);

        if (defaultRep) {
            loadStores(defaultRep);
        }

        setOutlets(response.outlets);
    }

    const handleCancel = () => { 
        if (response) {
            clearForm(response);
        }
        postEvent(WidgetEvents.closeWidget());
    }

    const handleSubmitForm = () => {
        handleSubmit();
    }

    return (
        <Loading 
            loading={loading}
            error={error}
        >
            <MainWrapper style={{ flex: 1, padding: 16 }}>
                <TextInput 
                    name="firstname"
                    label="First Name"
                    placeholder="First Name"
                    value={values.firstname}
                    onChange={handleChange}
                    error={(touched.firstname && errors.firstname) ? errors.firstname : undefined}
                    onBlur={() => {
                        handleNameCheck();
                    }}
                />
                <SpacerGap height={24} />
                <TextInput 
                    name="lastname"
                    label="Last Name"
                    placeholder="Last Name"
                    value={values.lastname}
                    onChange={handleChange}
                    error={(existingContact) ? 'A similar contact already exists.' : (touched.lastname && errors.lastname) ? errors.lastname : undefined}
                    onBlur={(e) => {
                        handleNameCheck();
                    }}
                />
                <SpacerGap height={24} />
                <TextInput 
                    name="phone"
                    label="Phone Number"
                    placeholder="+1"
                    value={values.phone}
                    onChange={handleChange}
                    error={(touched.phone && errors.phone) ? errors.phone : undefined}
                />
                <SpacerGap height={24} />
                <TextInput 
                    name="phone_ext"
                    label="Extension Number"
                    value={values.phone_ext}
                    onChange={handleChange}
                    error={(touched.phone_ext && errors.phone_ext) ? errors.phone_ext : undefined}
                />
                <SpacerGap height={24} />
                <Dropdown 
                    label="Lead Type"
                    selected={selectedLead}
                    options={leadTypes}
                    onChange={(opt) => {
                        setFieldValue('leadType', opt.value);
                        setSelectedLead(opt);
                    }}
                />
                {selectedLead?.value === 'business' &&
                    <>
                        <SpacerGap height={24} />
                        <TextInput 
                            name="companyname"
                            label="Company"
                            placeholder="Company Name"
                            value={values.companyname}
                            onChange={handleChange}
                            error={(touched.companyname && errors.companyname) ? errors.firstname : undefined}
    
                        />
                        <SpacerGap height={24} />
                        <TextInput 
                            name="contactStreetNumber"
                            label="Address"
                            placeholder="Street Number"
                            value={values.contactStreetNumber}
                            onChange={handleChange}
                            error={(touched.contactStreetNumber && errors.contactStreetNumber) ? errors.firstname : undefined}
    
                        />
                        <TextInput 
                            name="contactStreetName"
                            label=""
                            placeholder="Street Name"
                            value={values.contactStreetName}
                            onChange={handleChange}
                            error={(touched.contactStreetName && errors.contactStreetName) ? errors.firstname : undefined}
    
                            style={{ marginTop: 4 }}
                        />
                        <SpacerGap height={24} />
                        <TextInput 
                            name="contactCity"
                            label="City"
                            placeholder="City"
                            value={values.contactCity}
                            onChange={handleChange}
                            error={(touched.contactCity && errors.contactCity) ? errors.firstname : undefined}
    
                        />
                        <SpacerGap height={24} />
                        <TextInput 
                            name="contactState"
                            label="Province / State"
                            placeholder="Province / State"
                            value={values.contactState}
                            onChange={handleChange}
                            error={(touched.contactState && errors.contactState) ? errors.firstname : undefined}
    
                        />
                        <SpacerGap height={24} />
                        <TextInput 
                            name="contactZip"
                            label="Postal / Zip Code"
                            placeholder="Postal / Zip Code"
                            value={values.contactZip}
                            onChange={handleChange}
                            error={(touched.contactZip && errors.contactZip) ? errors.firstname : undefined}
    
                        />
                        <SpacerGap height={24} />
                        <TextInput 
                            name="position"
                            label="Job Title"
                            placeholder="Job Title"
                            value={values.position}
                            onChange={handleChange}
                            error={(touched.position && errors.position) ? errors.firstname : undefined}
    
                        />
                    </>
                }
                <SpacerGap height={24} />
                <TextInput 
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="example@email.com"
                    value={values.email}
                    onChange={handleChange}
                    error={(touched.email && errors.email) ? errors.email : undefined}
                />
                <SpacerGap height={48} />
                <Dropdown 
                    label="Preferred Method of Contact"
                    selected={selectedMethod}
                    options={methods}
                    onChange={(opt) => {
                        setFieldValue('method', opt.value);
                        setSelectedMethod(opt);
                    }}
                />
                <SpacerGap height={24} />
                <Dropdown 
                    label="Customer Language Preference"
                    selected={selectedLang}
                    options={languages}
                    onChange={(opt) => {
                        setFieldValue('language', opt.value);
                        setSelectedLang(opt);
                    }}
                />
                <SpacerGap height={48} />
                <Dropdown 
                    openTop
                    label="Sales Representative"
                    selected={selectedRep}
                    options={salesReps}
                    onChange={(opt) => {
                        setFieldValue('salesrep', opt.value);
                        setSelectedRep(opt);
                        loadStores(opt);
                    }}
                />
                <SpacerGap height={24} />
                <Dropdown 
                    openTop
                    label="Store"
                    selected={selectedStore}
                    options={stores}
                    onChange={(opt) => {
                        setFieldValue('store', opt.value);
                        setSelectedStore(opt);
                    }}
                    error={(touched.store && errors.store) ? errors.store : undefined}
                />
                <SpacerGap height={32} />
                <Checkbox 
                    error={(touched.agree && errors.agree) ? errors.agree : undefined}
                    name="agree"
                    label="Contact has given verbal consent to be a part of future marketing & sales opportunities"
                    checked={values.agree}
                    onChange={handleChange}
                />
                <SpacerGap height={24} />
                <Divider />
                <SpacerGap height={24} />
                <FlexRow>
                    <FlexBox flex={1}>
                        <CancelButton type="button" onClick={handleCancel}>Cancel</CancelButton>
                    </FlexBox>
                    <FlexBox flex={3}>
                        <SubmitButton disabled={existingContact} type="button" disable={existingContact} onClick={handleSubmitForm}>Create Lead</SubmitButton>
                    </FlexBox>
                </FlexRow>
            </MainWrapper>
        </Loading>
    );
}

export default AddALead;
