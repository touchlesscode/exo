import React, { useContext, useEffect, useState } from 'react';
import Dropdown, { Option } from '../../../components/Dropdown';
import { FlexRow, CancelButton, SubmitButton, Wrapper, DeleteButton, SpacerGap, FlexBox, NoteCopy, DeleteDialogue, OutlineButton } from '../index.styled';
import { OpportunityContext } from '../utils';
import Label from '../../../components/Label';
import Stages from '../../../components/Stages';
import Textarea from '../../../components/Textarea';
import UserSelect from '../components/UserSelect';
import ProductSelection, { TProducts } from '../components/ProductSelection';
import { UserContext } from '../../../context/UserContext';
import { WidgetEvents } from '../../../hooks/widgetApi';
import Picker from '../../../components/DatePicker';
import moment from 'moment';
import downloadICSFile from '../../../helpers/downloadICSFile';

export interface FormState {
    id: string;
    products: TProducts[];
    stage: Option;
    closed?: Option;
    notes: string;
    date: string | null;
    owner: Option;
    createdBy: string;
    createdAt: string;
}

interface FormProps {
    title: string;
    opportunity: FormState;
    onChange: (form: FormState) => void;
    onSubmit: () => void;
    onDelete?: () => void;
}

const Form = ({ title, opportunity, onChange, onSubmit, onDelete }: FormProps) => {
    const { postEvent, setExpanded } = useContext(UserContext);
    const { tags, reasons, usersData, setState, contactData } = useContext(OpportunityContext);
    const [formState, setFormState] = useState<FormState>(opportunity);
    const [showDelete, setShowDelete] = useState<boolean>(false);

    useEffect(() => {
        postEvent(WidgetEvents.setHeader(title));

        return () => {
            postEvent(WidgetEvents.setHeader(`Opportunities`));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateForm = (key: string, value: TProducts[]|Option|string|null|undefined) => {
        const newState: FormState = { 
            ...formState,
            [key]: value
        };

        setFormState(newState);
        onChange(newState);
    }

    const handleCancel = () => {
        postEvent(WidgetEvents.minimizeWidget());
        setState('compact');
        if (setExpanded) {
            setExpanded(false);
        }
    }

    const formatDate = ((date: Date): string => {
        const dateString = moment(date).format('YYYY-MM-DD HH:mm') + ':00';

        return dateString;
    });

    const isDisabled = () => {
        let invalid = false;
        if (formState.notes === '' || !formState.date || formState.products.length <= 0) {
            invalid = true;
        }

        formState.products.forEach(item => {
            if (item.amount === '' || !item.product ) {
                invalid = true;
            }
        });

        return invalid;
    }

    const generateICS = () => {
        if (formState.date) {
            let allProducts = '';
            formState.products.forEach(prod => {
                allProducts = `${allProducts}${prod.product?.label} (${prod.amount})\n`;
            });

            downloadICSFile(
                new Date(formState.date.replace(/ /g,"T")),
                `${contactData?.primary_contact} - Opportunity Next Step`,
                `Products\n${allProducts}\nStage\n${formState.stage.label}\nNotes\n${formState.notes}\n`
            );
        }
    }

    return (
        <Wrapper padded>
            <FlexBox flex={1}>
                <ProductSelection items={formState.products} onChange={(products) => updateForm('products', products)} />
                <SpacerGap height={32} />
                <FlexRow style={{ marginBottom: 4 }}>
                    <Label label="Opportunity Stage" />
                    <Stages stages={5} completed={formState.stage.value ? parseInt(formState.stage.value) : 1} />
                </FlexRow>
                <Dropdown 
                    label="Opportunity Stage"
                    hideLabel
                    selected={formState.stage}
                    options={tags}
                    onChange={(stage) => updateForm('stage', stage)}
                />
                {formState.stage.value === '5' &&
                    <>
                        <SpacerGap height={16} />
                        <Dropdown
                            label="Closed Reason"
                            selected={formState.closed}
                            options={reasons}
                            onChange={(closed) => updateForm('closed', closed)}
                        />
                    </>
                }
                <SpacerGap height={32} />
                <Textarea
                    label="Notes"
                    value={formState.notes}
                    placeholder="Add notes"
                    onChange={(e) => updateForm('notes', e.currentTarget.value)} 
                />
                <SpacerGap height={32} />
                <div>
                    <Picker
                        label="Next Step"
                        onDateChange={ date => date && updateForm('date', formatDate(date)) }
                        selectedDate={ formState.date ? moment(formState.date).toDate() : undefined }
                    />
                    {formState.date && 
                        <>
                            <SpacerGap height={16} />
                            <OutlineButton disable={false} onClick={generateICS}>Add to Calendar</OutlineButton>
                            <SpacerGap height={4} />
                            <NoteCopy>Add to your calendar to get notified about next steps</NoteCopy>
                        </>
                    }
                </div>
                <SpacerGap height={48} />
                <FlexRow>
                    <FlexBox flex={1}>
                        <CancelButton onClick={handleCancel}>Cancel</CancelButton>
                    </FlexBox>
                    <FlexBox flex={3}>
                        <SubmitButton disable={isDisabled()} onClick={() => !isDisabled() && onSubmit()}>Save Opportunity</SubmitButton>
                    </FlexBox>
                </FlexRow>
                <SpacerGap height={48} />
                <FlexRow>
                    <FlexBox flex={1}>
                            <NoteCopy style={{ whiteSpace: 'nowrap', marginRight: 8 }}>Owned by:</NoteCopy>
                    </FlexBox>
                    <FlexBox flex={3}>
                        <Dropdown
                            label="Owner"
                            hideLabel
                            topMargin={27}
                            openTop
                            renderDisplay={(open, selected) => (
                                <UserSelect open={open} selected={selected} />
                            )}
                            selected={formState.owner}
                            options={usersData}
                            onChange={(owner) => updateForm('owner', owner)}
                        />
                    </FlexBox>
                </FlexRow>
                <SpacerGap height={16} />
                <FlexRow>
                    <NoteCopy>Created by: <strong>{formState.createdBy}</strong>, {formState.createdAt}</NoteCopy>
                </FlexRow>
                <SpacerGap height={16} />
            </FlexBox>
            {onDelete &&
                <>
                    <SpacerGap height={24} />
                    <FlexRow>
                        <DeleteButton onClick={() => setShowDelete(true)}>Delete Opportunity</DeleteButton> 
                    </FlexRow>
                </>
            }
            {onDelete && showDelete &&
                <>
                    <DeleteDialogue>
                        <FlexRow>
                            Would you like to delete this oppotunity?
                        </FlexRow>
                        <SpacerGap height={32} />
                        <FlexRow>
                            <FlexBox flex={3}></FlexBox>
                            <FlexBox flex={2}>
                                <CancelButton onClick={() => setShowDelete(false)}>Close</CancelButton>
                            </FlexBox>
                            <FlexBox flex={2}>
                                <DeleteButton strong onClick={() => onDelete()}>Delete</DeleteButton>
                            </FlexBox>
                        </FlexRow>
                    </DeleteDialogue>
                </>
            }
            <SpacerGap height={16} />
        </Wrapper>
    )
}

export default Form;