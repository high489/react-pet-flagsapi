import React, { FC, useState } from 'react';
import { Search } from '../Search';
import { CustomSelect, ISelectOption } from '../UI/select/CustomSelect';
import { SControlsWrapper } from './styled-controls';

const options: ISelectOption[] = [
  {value: 'Africa', label: 'Africa'},
  {value: 'America', label: 'America'},
  {value: 'Asia', label: 'Asia'},
  {value: 'Europe', label: 'Europe'},
  {value: 'Oceania', label: 'Oceania'},
]

const Controls: FC = () => {
  const [search, setSearch] = useState<string>('')
  const [region, setRegion] = useState<unknown>('')
  
  return (
    <SControlsWrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        isMulti={false}
        options={options}
        placeholder='Filter by Region'
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </SControlsWrapper>
  );
};

export { Controls };