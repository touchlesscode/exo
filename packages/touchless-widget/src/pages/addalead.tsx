import React, { useCallback, useContext, useEffect, useState } from 'react';
import { CancelButton, Divider, FlexBox, FlexRow, SpacerGap, SubmitButton } from '../styles/addalead.style';
import Loading from '../components/Loading';
import { MainWrapper } from '../components/Wrappers';
import { UserContext } from '../context/UserContext';
import { ThemeProvider } from 'styled-components'
import { useOnEvent,usePostEvent,  WidgetType, WidgetEvents } from '../hooks/widgetApi';
import useWidgetReady from '../hooks/useWidgetReady';
import axios from 'axios';
import { useFormik } from 'formik';
import Dropdown, { Option } from '../components/Dropdown';
import TextInput from '../components/TextInput';
import Checkbox from '../components/Checkbox';
import { createOptions, getSelectedValue, validation } from '../utils';
import { GlobalStyle, defaultTheme as theme } from '../theme'
import WidgetError from '../components/WidgetError';

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

const IndexPage = () => {

  const event = useOnEvent();
  const postEvent = (typeof window !== 'undefined') && usePostEvent(window);
  const [init, setInit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [existingContact, setExistingContact] = useState<boolean>(false);

  const [defaultLang, setDefaultLang] = useState<Option>();
  const [selectedLang, setSelectedLang] = useState<Option>();
  const [languages, setLanguages] = useState<Option[]>([]);

  const [defaultLead, setDefaultLead] = useState<Option>();
  const [selectedLead, setSelectedLead] = useState<Option>();
  const [leadTypes, setLeadtypes] = useState<Option[]>([]);

  const [defaultMethod, setDefaultMethod] = useState<Option>();
  const [selectedMethod, setSelectedMethod] = useState<Option>();
  const [methods, setMethods] = useState<Option[]>([]);

  const [defaultRep, setDefaultRep] = useState<Option>();
  const [selectedRep, setSelectedRep] = useState<Option>();
  const [salesReps, setSalesReps] = useState<Option[]>([]);

  const [outlets, setOutlets] = useState<TOutlet>({});
  const [selectedStore, setSelectedStore] = useState<Option>();
  const [stores, setStores] = useState<Option[]>([]);

  const [expanded, setExpanded] = useState<boolean>(false);
  const [eventMessage, setEventMessage] = useState<WidgetPullEventType | null>(null);
  const [maxHeight, setMaxHeight] = useState<number|null>(null);
  
  const token = "123";

  const { values, errors, handleChange, handleSubmit, setFieldValue, isValid, touched, handleBlur, resetForm, setFieldError } = useFormik({
      initialValues: {
          firstname: '',
          lastname: '',
          phone: '',
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
      onSubmit: async values => {
          if (!existingContact) {
              const formData = {
                    query: "mutation saveLead ($json: jsonb, $reference_id: String) { insert_blob_one(object: {application_id: \"bc1641d8-b28f-4460-b709-2752290c2eeb\", json: $json, reference_id: $reference_id, tenant_id: \"bcdb145f-eccc-4f1e-a027-79100b00eced\", tag: \"createLead\"}) { id } }",
                    variables: {
                        json: {
                            contact_first_name: values.firstname,
                            contact_last_name: values.lastname,
                            contact_email: values.email,
                            contact_phone: [
                                {
                                    'Type': 'Home',
                                    'Number': values.phone,
                                },
                            ],
                            address_street_number: "New",
                            address_street_name: "Lead",
                            address_street_type: "Drive",
                            address_suite_number: "1",
                            address_city: "Leamington",
                            address_state: "ON",
                            address_postal_code: "N8H3A4",
                        },
                        reference_id: '1234',
                    },
              };

              const textkitData = {
                    query: "mutation SaveContact ($SaveContactInput: SaveContactInput!) { saveContact(contact: $SaveContactInput) }",
                    variables: {
                        "SaveContactInput": {
                            "participantId": '',
                            "firstName": values.firstname,
                            "lastName": values.lastname,
                            "businessName": values.companyname,
                            "locale": "en_US",
                            "channels": [
                                {
                                    "type": "SMS",
                                    "inboundAddress": `+${values.phone}`,
                                    "outboundAddress": "+12262860377"
                                }
                            ],
                            "external" : {
                                "externalId" : "",
                                "metadata" : {
                                    "source" : "manual"
                                }
                            },
                            "address" : {
                                "streetNumber": "",
                                "streetName": "",
                                "city": "",
                                "postalCode": "",
                                "province": "ON",
                                "country": "Canada"
                            }
                        }
                    }
              };

              

              const resp = await axios.post(
                  `https://api.ca.textkit.io/graphql`, 
                  textkitData, 
                  {
                      headers: {
                          'Authorization': `Bearer ${process.env.GATSBY_TEXTKIT_TOKEN}`,
                          'Content-Type': 'application/json',
                          'Accept': 'application/json',
                      }
                  }
              );
              const resp2 = await axios.post(
                  `https://wave.hasura.app/v1/graphql`, 
                  formData, 
                  {
                      headers: {
                          'x-hasura-admin-secret': process.env.GATSBY_HASURA_SECRET,
                          'Content-Type': 'application/json',
                          'Accept': 'application/json',
                      }
                  }
              );
              if (resp.status === 200 && resp2.status === 200) {
                  console.log(resp);
                  postEvent(WidgetEvents.closeWidget());
              }
              if (resp.status === 422 || resp2.status === 422) {
                  alert('failed');
              }
          }
      }
  });

    useEffect(() => {
        setTimeout(() => {
            postEvent(WidgetEvents.widgetReady({
                type: WidgetType.Action,
            }))
            if (typeof window !== 'undefined') window.scrollTo(0, 0);
            setLoading(false)
        }, 500);
        
    }, []);

    useEffect(() => {
        if (event) {
            switch (event.type) {
                case WidgetEvents.WidgetPullEvents.widgetMinimized:
                    setExpanded(false);
                    setMaxHeight(null);
                    break;
                case WidgetEvents.WidgetPullEvents.widgetMaximized:
                    setExpanded(true);
                    break;
                case WidgetEvents.WidgetPullEvents.setMaxHeight:
                    console.log('setMaxHeight', event.value);
                    setMaxHeight(event.value);
                    break;
            }
            setEventMessage(event);
        }
    }, [event]);

  const loadStores = (rep: Option) => {
      const allStores = [{id: 0, label:'Main', value:'Main'}];
      const store = allStores.length > 0 ? allStores[0] : undefined;

      setStores(allStores);
      setSelectedStore(store);
      setFieldValue('store', store?.value || '');
  }

  const loadFormOptions = useCallback(async () => {
      if (1 == 1) {
          setLoading(true);
          setError(false);
          setLeadtypes([{
              label: 'Business',
              value: 'business'
          }]);
          setMethods(createOptions([{id: 0, label:'Main', value:'Main'}]));

          //setFieldValue('language', getSelectedValue(resp.data.languages).value);
          //setFieldValue('leadType', getSelectedValue(resp.data.leadTypes).value);
          /* const resp = await axios.get<TOptionResponse>(`${process.env.REACT_APP_WEBAPP_HOST}/v2/api/crm/lead/options`, {
              headers: {
                  'Authorization': `Bearer ${token}`
              }
          });
          if (resp.data) {
              setLanguages(createOptions(resp.data.languages));
              setDefaultLang(getSelectedValue(resp.data.languages));
              setSelectedLang(getSelectedValue(resp.data.languages));
              setFieldValue('language', getSelectedValue(resp.data.languages).value);
              
              setLeadtypes(createOptions(resp.data.leadTypes));
              setDefaultLead(getSelectedValue(resp.data.leadTypes));
              setSelectedLead(getSelectedValue(resp.data.leadTypes));
              setFieldValue('leadType', getSelectedValue(resp.data.leadTypes).value);
              
              setMethods(createOptions(resp.data.methodOfContact));
              setDefaultMethod(getSelectedValue(resp.data.methodOfContact));
              setSelectedMethod(getSelectedValue(resp.data.methodOfContact));
              setFieldValue('method', getSelectedValue(resp.data.methodOfContact).value);

              const salesRep = getSelectedValue(resp.data.salesReps);
              setSalesReps(createOptions(resp.data.salesReps));
              setDefaultRep(salesRep);
              setSelectedRep(salesRep);
              setFieldValue('salesrep', salesRep.value);

              setOutlets(resp.data.outlets);
          }
          if (!resp.data) {
              setError(true);
          }*/
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
          /*const resp = await axios
              .post<TExistingContact[]|undefined>(`${process.env.REACT_APP_WEBAPP_HOST}/modules/checkForExistingContacts.php?first_name=${values.firstname}&last_name=${values.lastname}`, {}, {
                  headers: {
                      'Authorization': `Bearer ${token}`
                  }
              });
          if (resp.data !== undefined && resp.data.length > 0) {
              setFieldError('lastname', 'A similar contact already exists.');
              setExistingContact(true);
          } else {
              setFieldError('lastname', undefined);
              setExistingContact(false);
          }*/
          setFieldError('lastname', undefined);
          setExistingContact(false);
      }
  }

  const handleCancel = () => { 
      resetForm();
      setSelectedLang(defaultLang);
      setSelectedLead(defaultLead);
      setSelectedMethod(defaultMethod);
      setSelectedRep(defaultRep);
      if (defaultRep) {
          loadStores(defaultRep);
      }
      postEvent(WidgetEvents.closeWidget());
  }

  return (
    <>
    <GlobalStyle />
        <ThemeProvider theme={theme}>
            <Loading 
                loading={loading}
                error={error}
            >

            <MainWrapper style={{ flex: 1, padding: 16 }}>
                <h1 className="e-heading e-heading--h1">Add Contact</h1>
                <SpacerGap height={12} />
                <TextInput 
                    name="firstname"
                    label="First Name"
                    placeholder="First Name"
                    value={values.firstname}
                    onChange={handleChange}
                    error={(touched.firstname && errors.firstname) ? errors.firstname : undefined}
                    onBlur={(e) => {
                        handleNameCheck();
                        handleBlur(e);
                    }}
                />
                <SpacerGap height={24} />
                <TextInput 
                    name="lastname"
                    label="Last Name"
                    placeholder="Last Name"
                    value={values.lastname}
                    onChange={handleChange}
                    error={(touched.lastname && errors.lastname) ? errors.lastname : undefined}
                    onBlur={(e) => {
                        handleNameCheck();
                        handleBlur(e);
                    }}
                />
                <SpacerGap height={24} />
                <TextInput 
                    name="phone"
                    label="Phone Number"
                    placeholder="16475884136"
                    value={values.phone}
                    onChange={handleChange}
                    error={(touched.phone && errors.phone) ? errors.phone : undefined}
                    onBlur={handleBlur}
                />
                <SpacerGap height={24} />
                <TextInput 
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="example@email.com"
                    value={values.email}
                    onChange={handleChange}
                    error={(touched.email && errors.email) ? errors.email : undefined}
                    onBlur={handleBlur}
                />
                <SpacerGap height={24} />
                <TextInput 
                    name="companyname"
                    label="Business Name (Optional)"
                    placeholder="ABC Inc."
                    value={values.companyname}
                    onChange={handleChange}
                    error={(touched.companyname && errors.companyname) ? errors.firstname : undefined}
                    onBlur={handleBlur}
                /> 
                
                <SpacerGap height={24} />
                <Divider />
                <SpacerGap height={24} />
                <FlexRow>
                    <FlexBox flex={1}>
                        <CancelButton onClick={handleCancel}>Cancel</CancelButton>
                    </FlexBox>
                    <FlexBox flex={3}>
                        <SubmitButton disabled={!isValid || existingContact} disable={!isValid || existingContact} onClick={() => handleSubmit()}>Add Lead</SubmitButton>
                    </FlexBox>
                </FlexRow>
            </MainWrapper>
        </Loading>
        </ThemeProvider>
        </>
  )
}

export default IndexPage

