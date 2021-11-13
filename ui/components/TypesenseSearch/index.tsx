import useWindowSize from '@hooks/useWindowSize';
import React, { FC } from 'react';

//import { InstantSearch, connectSearchBox } from "react-instantsearch-dom"
//import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter"

import { StyledSearchbox } from "./style";

/*const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
    server: {
      apiKey: process.env.GATSBY_TYPESENSE, // Be sure to use the search-only-api-key
      nodes: [
        {
          host: "q7uj4xtlyszb85khp-1.a1.typesense.net",
          port: "443",
          protocol: "https",
        },
      ],
    },
    // The following parameters are directly passed to Typesense's search API endpoint.
    //  So you can pass any parameters supported by the search endpoint below.
    //  queryBy is required.
    additionalSearchParameters: {
      queryBy: "title,description,tags",
    },
});
const searchClient = typesenseInstantsearchAdapter.searchClient
*/

interface CustomSearchboxPropType {
    searchPlaceholder ?: string;
}

//connectSearchBox((...
//onChange={event => refine(event.currentTarget.value)}
        

const CustomSearchbox = (({ currentRefinement, refine, searchPlaceholder }: any) => {

    const { type } = useWindowSize();
    return (
    // <StyledForm noValidate action="" role="search">
      <StyledSearchbox
        screenType={type}
        type="search"
        value={currentRefinement}
        placeholder={searchPlaceholder}
      />
      /* <button onClick={() => refine('')}>Reset query</button>
      {isSearchStalled ? 'My search is stalled' : ''} */
    )
});

interface TypesenseSearchPropType {
    searchPlaceholder ?: string;
}

const TypesenseSearch:FC<TypesenseSearchPropType> = ({searchPlaceholder}) => {
    
      return (
          <>
          {/*<InstantSearch searchClient={searchClient} indexName="pages_v1">*/}
            <CustomSearchbox searchPlaceholder={searchPlaceholder} />
           {/*</InstantSearch>*/}
           </>
      )
}

export default TypesenseSearch
