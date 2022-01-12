import React, { useContext, useState } from 'react';
import Label from '../../../components/Label';
import Dropdown, { Option } from '../../../components/Dropdown';
import { FlexRow, ItemCount, SpacerGap } from '../index.styled';
import { OpportunityContext } from '../utils';
import AddButton from './AddButton';
import Delete from 'src/icons/Delete';

export interface TProducts {
    product: Option | null;
    amount: string;
}

interface ProductSelectionProps {
    items?: TProducts[];
    onChange: (products: TProducts[]) => void;
}

const ProductSelection = ({ items = [{ product: null, amount: '1' }], onChange }: ProductSelectionProps) => {
    const { products } = useContext(OpportunityContext);
    const [list, setList] = useState<TProducts[]>(items);

    const handleAddProduct = () => {
        const newList: TProducts[] = [...list];

        newList.push({ product: null, amount: '1' });

        setList(newList);
        onChange(newList);
    }
    
    const handleRemoveProduct = (index: number) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
        onChange(newList);
    }

    const updateProduct = (product: Option, index: number) => {
        const newList = [...list];
        newList[index].product = product;

        setList(newList);
        onChange(newList);
    }

    const updateCount = (count: string, index: number) => {
        let validCount = count.replace(/[^0-9\b]/g, '');
        if (validCount === '0') {
            validCount = '1';
        }
        const newList = [...list];
        newList[index].amount = validCount;

        setList(newList);
        onChange(newList);
    }

    return (
        <>
            {
                list.map((item, index) => (
                    <div key={`row-${index}`}>
                        {index > 0 && <SpacerGap key={`gap-${index}`} height={16} />}
                        <FlexRow key={`product-${index}`}>
                            <Dropdown 
                                label={`Product #${index + 1}`}
                                searchable
                                selected={item.product ?? undefined}
                                options={products}
                                onChange={(product) => {
                                    updateProduct(product, index);
                                }}
                            />
                            {item.product &&
                            <div style={{display: 'flex'}}>
                                <div style={{ marginLeft: 8, width: 96 }}>
                                    <Label style={{ marginBottom: 4 }} label="# items" />
                                    <ItemCount
                                        type="number"
                                        min={1}
                                        step={1}
                                        max={999}
                                        value={item.amount}
                                        onChange={(e) => {
                                            updateCount(e.currentTarget.value, index);
                                        }}
                                    />
                                </div>
                                <div style={{position: 'relative', top: 30, left: 7}}>
                                    <div onClick={() => handleRemoveProduct(index)}>
                                        <Delete />
                                    </div>
                                </div>
                            </div>
                            }
                        </FlexRow>
                    </div>
                ))
            }
            <SpacerGap height={24} />
            <AddButton full={false} label="Add another product" onClick={handleAddProduct} />
        </>
    );
}

export default ProductSelection;