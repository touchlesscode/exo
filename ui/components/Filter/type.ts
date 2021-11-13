export type TileOption = {
    id: string;
    label: string;
    checked ?: boolean;
    icon ?: string;
    other ?: boolean;
}

export type FilterOption = {
    id: string;
    heading: string;
    columns ?: number;
    tileOptions : TileOption[];
}

export interface FilterPropType {
    type ?: "list" | "tile" | "search";
    headerLeftText ?: string;
    headerRightText ?: string;
    backToAllText ?: string;
    backToAllIcon ?: string;
    otherText ?: string;
    allStylesText ?: string;
    filterOptions: FilterOption[]

    onRightHeaderTextCLick ?: () => void;
    onFilterClick ?: (opt: FilterOption) => void;
    onOtherClick ?: () => void;
    onAllStylesClick ?: () => void;
}

export interface TileFilterProptype {
    selectedFilter : FilterOption | null;
    filterOptions: FilterOption[];
    otherText ?: string;
    allStylesText ?:string;
    showModal : boolean;

    onModalClosed ?: () => void;
    onFilterClickHandler : (optId: string, tileId: string) => void;
    onOtherClick ?: (optId: string) => void;
    onAllStylesClick ?: () => void;
}

export interface ListFilterPropType {
    selectedFilter : FilterOption | null;
    listOptions: FilterOption[];
    
    onListItemClick: (optId: string) => void;
    onFilterClickHandler : (optId: string, tileId: string) => void;
}
