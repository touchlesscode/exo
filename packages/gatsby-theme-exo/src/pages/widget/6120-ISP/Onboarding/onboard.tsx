import React, { useCallback, useContext, useEffect, useState } from 'react';
import { CancelButton, Divider, FlexBox, FlexRow, SpacerGap, SubmitButton } from '../../../styles/addalead.style';
import Loading from '../../../../../components/Loading';
import AddButton from '../../../components/AddButton';
import { MainWrapper } from '../../../../components/Wrappers';
import { UserContext } from '../../../../context/UserContext';
import { ThemeProvider } from 'styled-components'
import { useOnEvent,usePostEvent,  WidgetType, WidgetEvents } from '../../../../hooks/widgetApi';
import axios from 'axios';
import { useFormik } from 'formik';
import Dropdown, { Option } from '../../../../components/Dropdown';
import ListItem from '../../../../components/ListItem';
import TextInput from '../../../../components/TextInput';
import Checkbox from '../../../../components/Checkbox';
import { createOptions, getSelectedValue, validationAddress, validationPrimary } from '../../../utils';
import { GlobalStyle, defaultTheme as theme } from '../../../../theme'
import WidgetError from '../../../../components/WidgetError';
import useWidgetReady from "../hooks/useWidgetReady";
import { WidgetViewSize } from "../widgetApi";
import WidgetEvents from "../widgetApi/events";

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

  const ready = useWidgetReady({});
  const { postEvent, event } = React.useContext(UserContext);
  const [init, setInit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [address, setAddress] = useState<any>(false);
  const [primary, setPrimary] = useState<any>(false);
  const [context, setContext] = useState<any>();
  const [eventEmitted, setEventEmitted] = useState<any>();
  const [open, setOpen] = useState<boolean>(false);
  const [existingAddress, setExistingAddress] = useState<boolean>(false);
  const [existingContact, setExistingContact] = useState<boolean>(false);

  const [expanded, setExpanded] = useState<boolean>(false);
  const [maxHeight, setMaxHeight] = useState<number|null>(null);
  
  const [stage, setStage] = useState<any>('initial');
  
  const token = "123";

  const addressState = [
      {
          id: 'ON', 
          label: 'ON', 
          value:'ON', 
      }, 
  ];

  const contactYesNo = [
      {
          id: 'YES', 
          label: 'YES', 
          value:'YES', 
      }, 
      {
          id: 'NO', 
          label: 'NO', 
          value:'NO', 
      }, 
  ];
  

  const contactMethods = [
      {
          id: 'SMS', 
          label: 'SMS', 
          value:'SMS', 
      },
      {
          id: 'EMAIL', 
          label: 'EMAIL', 
          value:'EMAIL', 
      }, 
      {
          id: 'PHONE', 
          label: 'PHONE', 
          value:'PHONE', 
      }, 
  ];

  const addressRural = [
      {
          id: '', 
          label: 'NONE', 
          value:null
      }, 
      {
          id: 'RR 1', 
          label: 'RR 1', 
          value:'RR 1', 
      }, 
      {
          id: 'RR 2', 
          label: 'RR 2', 
          value:'RR 2', 
      }, 
      {
          id: 'RR 3', 
          label: 'RR 3', 
          value:'RR 3', 
      }, 
      {
          id: 'RR 4', 
          label: 'RR 4', 
          value:'RR 4', 
      }, 
      {
          id: 'RR 5', 
          label: 'RR 5', 
          value:'RR 5', 
      },
      {
          id: 'RR 6', 
          label: 'RR 6', 
          value:'RR 6', 
      }, 
  ];


  const streetTypes = [
      {
          id: '', 
          label: 'NONE', 
          value:null
      }, 
      {
          id: 'AVE', 
          label: 'AVE', 
          value:'AVE'
      }, 
      {
          id: 'BLVD', 
          label: 'BLVD', 
          value:'BLVD'
      },
      {
          id: 'CRES', 
          label: 'CRES', 
          value:'CRES'
      },
      {
          id: 'LN', 
          label: 'LANE', 
          value:'LN'
      },
            {
          id: 'PKWY', 
          label: 'PKWY', 
          value:'PKWY'
      },
      {
          id: 'PL', 
          label: 'PL', 
          value:'PL'
      },
      {
          id: 'RD', 
          label: 'RD', 
          value:'RD'
      }, 
      {
          id: 'ST', 
          label: 'ST', 
          value:'ST'
      },
      {
          id: 'TLINE', 
          label: 'TLINE', 
          value:'TLINE'
      },
      {
          id: 'TNPK', 
          label: 'TNPK', 
          value:'TNPK'
      }
  ];
  const streetDirection = [
      {
          id: '', 
          label: 'NONE', 
          value:null
      }, 
      {
          id: '', 
          label: 'EAST', 
          value: 'EAST'
      }, 
      {
          id: '', 
          label: 'WEST', 
          value: 'WEST'
      }, 
      {
          id: '', 
          label: 'NORTH', 
          value: 'NORTH'
      }, 
      {
          id: '', 
          label: 'SOUTH', 
          value: 'SOUTH'
      }, 
  ];

  const unitTypes = [
      {
          id: '', 
          label: 'NONE', 
          value:null
      }, 
      {
          id: 'APT', 
          label: 'APT', 
          value:'APT'
      },
      {
          id: 'FRONT', 
          label: 'FRONT', 
          value:'FRONT'
      },
      {
          id: 'LOT', 
          label: 'LOT', 
          value:'LOT'
      },
      {
          id: 'LOWER', 
          label: 'LOWER', 
          value:'LOWER'
      },
      {
          id: 'REAR', 
          label: 'REAR', 
          value:'REAR'
      },
      {
          id: 'SUITE', 
          label: 'SUITE', 
          value:'SUITE'
      },
      {
          id: 'UNIT', 
          label: 'UNIT', 
          value:'UNIT'
      },
      {
          id: 'UPPER', 
          label: 'UPPER', 
          value:'UPPER'
      }
  ];

  const addressCity = [
    {
          id: 'AMHERSTBURG', 
          label: 'AMHERSTBURG', 
          value:'AMHERSTBURG',
    },
    {
          id: 'BELLE RIVER', 
          label: 'BELLE RIVER', 
          value:'BELLE RIVER',
    },
    {
          id: 'BLENHEIM', 
          label: 'BLENHEIM', 
          value:'BLENHEIM',
    },
    {
          id: 'BRAMPTON', 
          label: 'BRAMPTON', 
          value:'BRAMPTON',
    },
    {
          id: 'BRANTFORD', 
          label: 'BRANTFORD', 
          value:'BRANTFORD',
    },
    {
          id: 'CAMBRIDGE', 
          label: 'CAMBRIDGE', 
          value:'CAMBRIDGE',
    },
    {
          id: 'CEDAR BEACH', 
          label: 'CEDAR BEACH', 
          value:'CEDAR BEACH',
    },
    {
          id: 'CEDAR ISLAND', 
          label: 'CEDAR ISLAND', 
          value:'CEDAR ISLAND',
    },
    {
          id: 'CEDAR SPRINGS', 
          label: 'CEDAR SPRINGS', 
          value:'CEDAR SPRINGS',
    },
    {
          id: 'CHATHAM', 
          label: 'CHATHAM', 
          value:'CHATHAM',
    },
    {
          id: 'COATSWORTH STATION', 
          label: 'COATSWORTH STATION', 
          value:'COATSWORTH STATION',
    },
    {
          id: 'DRESDEN', 
          label: 'DRESDEN', 
          value:'DRESDEN',
    },
    {
          id: 'GEORGETOWN', 
          label: 'GEORGETOWN', 
          value:'GEORGETOWN',
    },
    {
          id: 'COMBER', 
          label: 'COMBER', 
          value:'COMBER',
    },
    {
          id: 'HARROW', 
          label: 'HARROW', 
          value:'HARROW',
    },
    {
          id: 'JEANNETTES CREEK', 
          label: 'JEANNETTES CREEK', 
          value:'JEANNETTES CREEK',
    },
    {
          id: 'KINGSVILLE', 
          label: 'KINGSVILLE', 
          value:'KINGSVILLE',
    },
    {
          id: 'LAKESHORE', 
          label: 'LAKESHORE', 
          value:'LAKESHORE',
    },
    {
          id: 'LAMBTON SHORES', 
          label: 'LAMBTON SHORES', 
          value:'LAMBTON SHORES',
    },
    {
          id: 'LASALLE', 
          label: 'LASALLE', 
          value:'LASALLE',
    },
    {
          id: 'LEAMINGTON', 
          label: 'LEAMINGTON', 
          value:'LEAMINGTON',
    },
    {
          id: 'MAIDSTONE', 
          label: 'MAIDSTONE', 
          value:'MAIDSTONE',
    },
    {
          id: 'MALDEN', 
          label: 'MALDEN', 
          value:'MALDEN',
    },
    {
          id: 'MCGREGOR', 
          label: 'MCGREGOR', 
          value:'MCGREGOR',
    },
    {
          id: 'NIAGARA ON THE LAKE', 
          label: 'NIAGARA ON THE LAKE', 
          value:'NIAGARA ON THE LAKE',
    },
    {
          id: 'NORTH WOODSLEE', 
          label: 'NORTH WOODSLEE', 
          value:'NORTH WOODSLEE',
    },
    {
          id: 'OLDCASTLE', 
          label: 'OLDCASTLE', 
          value:'OLDCASTLE',
    },
    {
          id: 'PELEE ISLAND', 
          label: 'PELEE ISLAND', 
          value: 'PELEE ISLAND',
    },
    {
          id: 'POINTE AUX ROCHES', 
          label: 'POINTE AUX ROCHES', 
          value: 'POINTE AUX ROCHES', 
    },
    {
          id: 'PORT ALMA', 
          label: 'PORT ALMA', 
          value: 'PORT ALMA', 
    },
    {
          id: 'RUSCOM STATION', 
          label: 'RUSCOM STATION', 
          value: 'RUSCOM STATION', 
    },
    {
          id: 'RUTHVEN', 
          label: 'RUTHVEN', 
          value: 'RUTHVEN', 
    },
    {
          id: 'SAINT JOACHIM', 
          label: 'SAINT JOACHIM', 
          value: 'SAINT JOACHIM', 
    },
    {
          id: 'SARNIA', 
          label: 'SARNIA', 
          value: 'SARNIA', 
    },
    {
          id: 'SEACLIFF DRIVE', 
          label: 'SEACLIFF DRIVE', 
          value: 'SEACLIFF DRIVE', 
    },
    {
          id: 'SOUTH WOODSLEE', 
          label: 'SOUTH WOODSLEE', 
          value: 'SOUTH WOODSLEE', 
    },
    {
          id: 'ST. CATHERINES', 
          label: 'ST. CATHERINES', 
          value: 'ST. CATHERINES', 
    },
    {
          id: 'STAPLES', 
          label: 'STAPLES', 
          value: 'STAPLES', 
    },
    {
          id: 'STONEY POINT', 
          label: 'STONEY POINT', 
          value: 'STONEY POINT', 
    },
    {
          id: 'TECUMSEH', 
          label: 'TECUMSEH', 
          value: 'TECUMSEH', 
    },
    {
          id: 'TILBURY', 
          label: 'TILBURY', 
          value: 'TILBURY', 
    },
    {
          id: 'WHEATLEY', 
          label: 'WHEATLEY', 
          value: 'WHEATLEY', 
    },
    {
          id: 'WINDSOR', 
          label: 'WINDSOR', 
          value: 'WINDSOR', 
    },
  ];

  const { values, errors, handleChange, handleSubmit, setFieldValue, isValid, touched, handleBlur, resetForm, setFieldError } = useFormik({
      initialValues: {
          address_street_name: '',
          address_street_type: '',
          address_street_number: '',
          address_street_direction: '',
          address_city: '',
          address_state: '',
          address_unit_type: '',
          address_unit_value: '',
          address_rr: '',
      },
      validation: ((stage === "add_address") ? validationAddress: validationPrimary),
      onSubmit: async values => {
          if (!existingAddress) {
              const formData = {
                    query: "mutation saveLead ($json: jsonb, $reference_id: String) { insert_blob_one(object: {application_id: \"bc1641d8-b28f-4460-b709-2752290c2eeb\", json: $json, reference_id: $reference_id, tenant_id: \"bcdb145f-eccc-4f1e-a027-79100b00eced\", tag: \"createAddress\"}) { id } }",
                    variables: {
                        json: {
                            address_street_number: values.address_street_number,
                            address_street_name: values.address_street_name,
                            address_street_type: values.address_street_type,
                            address_street_direction: values.address_street_direction,
                            address_unit_type: values.address_unit_type,
                            address_unit_value: values.address_unit_value,
                            address_rr: values.address_rr,
                            address_city: values.address_city,
                            address_state: values.address_state,
                            address_state: values.address_postal,
                            contact_primary_first_name: values.contact_primary_first_name?.toUpperCase(),
                            contact_primary_last_name: values.contact_primary_last_name?.toUpperCase(),
                            contact_primary_preferred_method: values.contact_primary_preferred_method,
                            contact_primary_consent_credit: values.contact_primary_consent_credit,
                            contact_primary_birth_date: values.contact_primary_birth_date,
                        },
                        reference_id: '1234',
                    },
              };

              const resp = await axios.post(
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
              if (resp.status === 200) {
                  console.log(resp);
                  if (stage === "add_primary_contact")  {
                      setPrimary(values)
                  }
                  if (stage === "add_address")  {
                      setAddress(values)    
                  }             
                  setStage('compact');
                  setExpanded(true);
                  //postEvent(WidgetEvents.minimizeWidget());
              }
              if (resp.status === 422) {
                  alert('failed');
                  setStage('compact');
              }
          }
      }
  });

    useEffect(() => {
    if (ready) {
        postEvent(WidgetEvents.setHeader('My Header'));
        postEvent(WidgetEvents.setFooter('My Footer'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ready]);

    useEffect(() => {
        if (event) {
            switch(event.type) {
                case WidgetEvents.ReceivableEvents.contextChanged:
                    setContext(event.value);
                    break;
                case WidgetEvents.ReceivableEvents.viewSizeChanged:
                    setOpen(event.value === WidgetViewSize.Large ? true : false);
                    break;
                case WidgetEvents.ReceivableEvents.receivedEvent:
                    setEventEmitted(event.value);
                    break;
            }
        }
    }, [event]);


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
          }
          if (!resp.data) {
              setError(true);
          }*/
          setLoading(false);
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
      if (init) {
          loadFormOptions();
      }
  }, [init, loadFormOptions]);

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
      setStage('compact');
      postEvent(WidgetEvents.minimizeWidget());
      setExpanded(false);
  }

  const handleAddAddress = () => {
      postEvent(WidgetEvents.maximizeWidget());
      if (setExpanded) {
          setExpanded(true);
          setStage('add_address');
      }
  }

  const handleAddContact = () => {
      postEvent(WidgetEvents.maximizeWidget());
      if (setExpanded) {
          setExpanded(true);
          setStage('add_primary_contact');
      }
  }

  const handleAddConfirm = () => {
      postEvent(WidgetEvents.maximizeWidget());
      if (setExpanded) {
          setExpanded(true);
          setStage('add_confirmation');
      }
  }


  return (
    <>
    <GlobalStyle />
        <ThemeProvider theme={theme}>
            <Loading 
                loading={loading}
                error={error}
            >
            
                {(expanded || !expanded) && (
                    <>
                    {(stage !== 'add_address') && (
                        <>
                        {(address && address?.address_street_name) ? (
                            <MainWrapper style={{ flex: 1, padding: 16 }} onClick={handleAddAddress}>
                                <strong>{address?.address_street_number}  {address?.address_street_name}  {address?.address_street_type} {address?.address_street_direction}</strong>
                                {address?.address_unit_type && (<><br/>{address?.address_unit_type}  {address?.address_unit_value}</>)}
                            </MainWrapper>
                        ) : (
                            <AddButton full={true} label="Add Address" onClick={handleAddAddress} />
                        )}
                        </>
                    )}
                    
                    
                    </>
                )}

                <MainWrapper style={{ flex: 1, padding: 16 }}>
                    {(stage === 'add_primary_contact') && (
                    <>
                    <SpacerGap height={12} />
                    <TextInput 
                        name="contact_primary_first_name"
                        type="text"
                        label="First Name"
                        value={values.contact_primary_first_name?.toUpperCase()}
                        onChange={handleChange}
                        error={(touched.contact_primary_first_name && errors.contact_primary_first_name) ? errors.contact_primary_first_name : undefined}
                        onBlur={(e) => {
                            handleBlur(e);
                        }}
                    />
                    <SpacerGap height={24} />
                    <TextInput 
                        name="contact_primary_last_name"
                        type="text"
                        label="Last Name"
                        value={values.contact_primary_last_name?.toUpperCase()}
                        onChange={handleChange}
                        error={(touched.contact_primary_last_name && errors.contact_primary_last_name) ? errors.contact_primary_last_name : undefined}
                        onBlur={(e) => {
                            handleBlur(e);
                        }}
                    />
                    <SpacerGap height={24} />
                    <Dropdown 
                        label="Preferred Method of Contact"
                        name="contact_primary_preferred_method"
                        options={contactMethods}
                        selected={{value: values.contact_primary_preferred_method, label: values.contact_primary_preferred_method}}
                        onChange={(opt) => {
                            setFieldValue('contact_primary_preferred_method', opt.value);
                        }}
                    />
                    <SpacerGap height={24} />
                    <TextInput 
                        name="contact_primary_birth_date"
                        type="date"
                        label="Birth Date"
                        placeholder=""
                        value={primary?.contact_primary_birth_date ? primary?.contact_primary_birth_date : values.contact_primary_birth_date}
                        onChange={handleChange}
                        error={(touched.contact_primary_birth_date && errors.contact_primary_birth_date) ? errors.contact_primary_birth_date : undefined}
                        onBlur={(e) => {
                            handleBlur(e);
                        }}
                    />
                    <SpacerGap height={24} />
                    <Dropdown 
                        label="Consents to Credit Check"
                        name="contact_primary_consent_credit"
                        options={contactYesNo}
                        selected={{value: values.contact_primary_consent_credit, label: values.contact_primary_consent_credit}}
                        onChange={(opt) => {
                            setFieldValue('contact_primary_consent_credit', opt.value);
                        }}
                    />
                    <SpacerGap height={48} />
                    <Divider />
                    <SpacerGap height={24} />
                    <FlexRow>
                        <FlexBox flex={1}>
                            <CancelButton onClick={handleCancel}>Cancel</CancelButton>
                        </FlexBox>
                        <FlexBox flex={3}>
                            <SubmitButton disabled={!isValid || existingContact} disable={!isValid || existingContact} onClick={() => handleSubmit()}>Save Contact</SubmitButton>
                        </FlexBox>
                    </FlexRow></>)}
                    
                    {(stage === 'add_address') && (
                    <>
                    <SpacerGap height={12} />
                    <TextInput 
                        name="address_street_number"
                        type="number"
                        label="Street Number"
                        placeholder="12"
                        style={{width: '50%'}}
                        value={values.address_street_number}
                        onChange={handleChange}
                        error={(touched.address_street_number && errors.address_street_number) ? errors.address_street_number : undefined}
                        onBlur={(e) => {
                            handleBlur(e);
                        }}
                    />
                    <SpacerGap height={24} />
                    <TextInput 
                        name="address_street_name"
                        label="Street Name"
                        placeholder="HOWARD"
                        value={values.address_street_name?.toUpperCase()}
                        onChange={handleChange}
                        error={(touched.address_street_name && errors.address_street_name) ? errors.address_street_name : undefined}
                        onBlur={(e) => {
                            handleBlur(e);
                        }}
                    />
                    <SpacerGap height={24} />
                    <Dropdown 
                        label="Street Type"
                        name="address_street_type"
                        options={streetTypes}
                        selected={values.address_street_type ? {value: values.address_street_type, label: values.address_street_type} : streetTypes[0]}
                        style={{width: '50%'}}
                        onChange={(opt) => {
                            setFieldValue('address_street_type', opt.value);
                        }}
                    />
                    <SpacerGap height={24} />
                    <Dropdown 
                        label="Street Direction"
                        name="address_street_direction"
                        options={streetDirection}
                        selected={values.address_street_direction ? {value: values.address_street_direction, label: values.address_street_direction} : streetDirection[0]}
                        style={{width: '50%'}}
                        onChange={(opt) => {
                            setFieldValue('address_street_direction', opt.value);
                        }}
                    />
                    <SpacerGap height={24} />
                    <Dropdown 
                        label="Unit Type"
                        name="address_unit_type"
                        style={{width: '50%'}}
                        options={unitTypes}
                        selected={values.address_unit_type ? {value: values.address_unit_type, label: values.address_unit_type} : unitTypes[0]}
                        onChange={(opt) => {
                            setFieldValue('address_unit_type', opt.value);
                        }}
                    />
                    <SpacerGap height={24} />
                    <TextInput 
                        name="address_unit_value"
                        label="Unit Value"
                        placeholder="A"
                        style={{width: '50%'}}
                        value={values.address_unit_value?.toUpperCase()}
                        onChange={handleChange}
                        error={(touched.address_unit_value && errors.address_unit_value) ? errors.address_unit_value : undefined}
                        onBlur={handleBlur}
                    />
                    <SpacerGap height={24} />
                    <Dropdown 
                        label="Locator"
                        name="address_rr"
                        selected={values.address_rr ? {value: values.address_rr, label: values.address_rr} : addressRural[0]}
                        options={addressRural}
                        onChange={(opt) => {
                            setFieldValue('address_rr', opt.value);
                        }}
                    />
                    <SpacerGap height={24} />
                    <Dropdown 
                        label="City / Locality"
                        name="address_city"
                        selected={values.address_city ? {value: values.address_city, label: values.address_city} : addressCity[0]}
                        options={addressCity}
                        onChange={(opt) => {
                            setFieldValue('address_city', opt.value);
                        }}
                    />
                    <SpacerGap height={24} />
                    <Dropdown 
                        label="Province"
                        name="address_state"
                        selected={addressState[0]}
                        options={addressState}
                        onChange={(opt) => {
                            setFieldValue('address_state', opt.value);
                        }}
                    />
                    <SpacerGap height={24} />
                    <TextInput 
                        name="address_postal"
                        label="Postal Code"
                        placeholder="N8E4F2"
                        style={{width: '50%'}}
                        value={values.address_postal?.toUpperCase()}
                        onChange={handleChange}
                        error={(touched.address_unit_value && errors.address_postal) ? errors.address_postal : undefined}
                        onBlur={handleBlur}
                    />
                    <SpacerGap height={48} />
                    <Divider />
                    <SpacerGap height={24} />
                    <FlexRow>
                        <FlexBox flex={1}>
                            <CancelButton onClick={handleCancel}>Cancel</CancelButton>
                        </FlexBox>
                        <FlexBox flex={3}>
                            <SubmitButton disabled={!isValid || existingAddress} disable={!isValid || existingAddress} onClick={() => handleSubmit()}>Save Address</SubmitButton>
                        </FlexBox>
                    </FlexRow></>)}
                    
                </MainWrapper>
                {((stage === 'add_address') || (address?.address_street_name && primary?.contact_primary_first_name)) ? (
                    <><SpacerGap height={12} /><Divider /></>
                ) : (<></>)}
                
                {(stage !== 'add_primary_contact') && (<>
                {(primary && primary?.contact_primary_first_name ) ? (
                        <MainWrapper style={{ flex: 1, padding: 16 }} onClick={handleAddContact}>
                         <strong>{primary?.contact_primary_first_name?.toUpperCase()}  {primary?.contact_primary_last_name?.toUpperCase()}</strong>
                            {(primary?.contact_primary_consent_credit === 'YES') && (<><br/>Consented to credit check</>)}
                        </MainWrapper>
                    ) : (
                        <AddButton full={true} label="Add Primary Contact" onClick={handleAddContact} />
                    )}</>)}
                <SpacerGap height={12} />
                {(
                    address && 
                    address?.address_street_name && 
                    address?.address_city && 
                    primary?.contact_primary_first_name && 
                    primary?.contact_primary_last_name && 
                    primary?.contact_primary_birth_date &&
                    primary?.contact_primary_consent_credit === 'YES'
                ) ? (
                <AddButton full={true} label="Confirm Eligibility" onClick={handleAddConfirm} />
            ): (<AddButton full={true} label="Confirm Eligibility" disabled />)}
                <MainWrapper style={{ flex: 1, padding: 16 }} onClick={handleAddAddress}>
                        {context && (
                            <>
                            <small>
                                Mode: {stage}<br/>
                                {context?.conversationId}
                                {context?.external && (<><br/>Powercode: {context?.external}</>)}
                            </small>
                            </>
                        )}
                </MainWrapper>
        </Loading>
        </ThemeProvider>
        </>
  )
}

export default IndexPage

