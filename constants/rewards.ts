import { Column } from 'react-table';
import { Columns } from '@/types';
import { DESCRIPTIONANDUNITOFVARIABLES } from '.';

export const REWARDSTABLECOLUMNS: Column<Columns>[] = [
  {
    Header: 'Personal Data and ScreenData',
    accessor: 'PDataAndScreen' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'List Of Unit',
    accessor: 'Unit' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Consent',
    accessor: 'Consent' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Personal Defined Value',
    accessor: 'PDefinedValue' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Other Companies Value',
    accessor: 'OtherCompValue' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'id',
    accessor: 'id' as keyof Columns, // accessor is the "key" in the data
  },
];

export const REWARDSTABLEDATA = {
  'EMOTIONAL OVERALL': {
    Consent: 'TRUE',
    PDefinedValue: '0.00',
    OtherCompValue: '0.0',
    id: null,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.emotional_overall.unit,
  },
  'RELATIVE FINANCE STATUS': {
    Consent: 'TRUE',
    PDefinedValue: '0.00',
    Unit: DESCRIPTIONANDUNITOFVARIABLES.relative_finance_status.unit,
    OtherCompValue: '0.0',
    id: null,
  },
  'EXERCISE TIME': {
    Consent: 'TRUE',
    PDefinedValue: '0.00',
    Unit: DESCRIPTIONANDUNITOFVARIABLES.exercise_time.unit,
    OtherCompValue: '0.0',
    id: null,
  },
  'ANY SOCIAL LIFE': {
    Consent: 'TRUE',
    PDefinedValue: '0.00',
    OtherCompValue: '0.0',
    id: null,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.any_social_life.unit,
  },
  'SOCIAL LIFE LIST': {
    Consent: 'TRUE',
    PDefinedValue: '0.00',
    OtherCompValue: '0.0',
    id: null,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.social_life_list.unit,
  },
  'HEALTH OVERALL': {
    Consent: 'TRUE',
    PDefinedValue: '0.00',
    OtherCompValue: '0.0',
    id: null,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.health_overall.unit,
  },
  WEIGHT: {
    Consent: 'TRUE',
    PDefinedValue: '0.00',
    OtherCompValue: '0.0',
    id: null,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.weight.unit,
  },
  'FAMILY STATUS': {
    Consent: 'TRUE',
    PDefinedValue: '0.00',
    OtherCompValue: '0.0',
    id: null,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.family_status.unit,
  },
  'DEVICE SCREEN TIME': {
    Consent: 'TRUE',
    PDefinedValue: '0.00',
    OtherCompValue: '0.0',
    id: null,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.device_screen_time.unit,
  },
  'WORK LIFE BALANCE': {
    Consent: 'TRUE',
    PDefinedValue: '0.00',
    OtherCompValue: '0.0',
    id: null,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.work_life_balance.unit,
  },
  JOURNALING: {
    Consent: 'TRUE',
    PDefinedValue: '0.00',
    OtherCompValue: '0.0',
    id: null,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.journaling.unit,
  },
  DATE: {
    Consent: 'TRUE',
    PDefinedValue: '0.00',
    OtherCompValue: '0.0',
    id: null,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.date.unit,
  },
  'EMOTIONAL LIST': {
    Consent: 'FALSE',
    PDefinedValue: '0.00',
    OtherCompValue: '0.0',
    id: null,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.emotional_list.unit,
  },
  'HIGH TEMPERATURE': {
    Consent: 'FALSE',
    PDefinedValue: '1.20',
    OtherCompValue: '0.0',
    id: null,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.high_temperature.unit,
  },
  Photos: {
    Consent: 'TRUE',
    PDefinedValue: '0.00',
    OtherCompValue: '0.0',
    id: null,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.photos.unit,
  },
  'LOW TEMPERATURE': {
    Consent: 'FALSE',
    PDefinedValue: '0.00',
    OtherCompValue: '0.0',
    id: null,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.low_temperature.unit,
  },
  WEATHER: {
    Consent: 'FALSE',
    PDefinedValue: '0.00',
    OtherCompValue: '0.0',
    id: null,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.weather.unit,
  },
  'Screen Recording': {
    Consent: 'TRUE',
    PDefinedValue: '0.00',
    OtherCompValue: '0.0',
    id: null,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.screen_recording.unit,
  },
  'Camera Recording': {
    Consent: 'TRUE',
    PDefinedValue: '0.00',
    OtherCompValue: '0.0',
    id: null,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.camera_recording.unit,
  },
  'Screen + Camera Recording': {
    Consent: 'TRUE',
    PDefinedValue: '0.00',
    OtherCompValue: '0.0',
    id: null,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.screen_camera_recording.unit,
  },
  'Microphone Audio Recording': {
    Consent: 'TRUE',
    PDefinedValue: '0.00',
    OtherCompValue: '0.0',
    id: null,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.microphone_audio_recording.unit,
  },
  'System Audio Recording': {
    Consent: 'TRUE',
    PDefinedValue: '0.00',
    OtherCompValue: '0.0',
    id: null,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.system_audio_recording.unit,
  },
  'Mic + System Recording': {
    Consent: 'TRUE',
    PDefinedValue: '0.00',
    OtherCompValue: '0.0',
    id: null,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.mic_system_recording.unit,
  },
};
