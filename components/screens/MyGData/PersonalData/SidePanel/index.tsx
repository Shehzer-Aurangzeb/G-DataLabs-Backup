import React from 'react';
import CollapsableInput from './CollapsableInput';

function SidePanel() {
  return (
    <div className="flex flex-col gap-y-3 h-full w-full overflow-y-auto max-w-[377px] bg-side rounded-md pl-4 pr-6 py-6">
      <CollapsableInput value="18/09/23" type="date" onChange={() => {}} title="Date" name="date" />
      <CollapsableInput value="18/09/23" type="date" onChange={() => {}} title="Date" name="date" />{' '}
      <CollapsableInput value="18/09/23" type="date" onChange={() => {}} title="Date" name="date" />{' '}
      <CollapsableInput value="18/09/23" type="date" onChange={() => {}} title="Date" name="date" />{' '}
      <CollapsableInput value="18/09/23" type="date" onChange={() => {}} title="Date" name="date" />{' '}
      <CollapsableInput value="18/09/23" type="date" onChange={() => {}} title="Date" name="date" />{' '}
      <CollapsableInput value="18/09/23" type="date" onChange={() => {}} title="Date" name="date" />
    </div>
  );
}
export default SidePanel;
