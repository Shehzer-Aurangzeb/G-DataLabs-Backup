import { Column } from 'react-table';
import { Columns } from '@/types';
import { DESCRIPTIONANDUNITOFVARIABLES } from '.';

export const COMPANYTABLECOLUMNS: Column<Columns>[] = [
  {
    Header: 'Personal Data and Webcam',
    accessor: 'PDataAndWeb' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Definition',
    accessor: 'Definition' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'List Of Unit',
    accessor: 'Unit' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Use',
    accessor: 'Use' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Pricing',
    accessor: 'Pricing' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Threshold',
    accessor: 'threshold' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Consent',
    accessor: 'Consent' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Field Name',
    accessor: 'fieldName' as keyof Columns, // accessor is the "key" in the data
  },
];

export const COMPANYTABLEDATA = {
  'EMOTIONAL OVERALL': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.emotional_overall.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.emotional_overall.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'EMOTIONAL OVERALL',
  },
  WEATHER: {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.weather.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.weather.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'WEATHER',
  },
  'RELATIVE FINANCE STATUS': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.relative_finance_status.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.relative_finance_status.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'RELATIVE FINANCE STATUS',
  },
  'EXERCISE TIME': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.exercise_time.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.exercise_time.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'EXERCISE TIME',
  },
  'ANY SOCIAL LIFE': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.any_social_life.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.any_social_life.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'ANY SOCIAL LIFE',
  },
  'SOCIAL LIFE LIST': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.social_life_list.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.social_life_list.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'SOCIAL LIFE LIST',
  },
  'HEALTH OVERALL': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.health_overall.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.health_overall.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'HEALTH OVERALL',
  },
  WEIGHT: {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.weight.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.weight.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'WEIGHT',
  },
  'FAMILY STATUS': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.family_status.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.family_status.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'FAMILY STATUS',
  },
  'DEVICE SCREEN TIME': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.device_screen_time.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.device_screen_time.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'DEVICE SCREEN TIME',
  },
  'WORK LIFE BALANCE': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.work_life_balance.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.work_life_balance.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'WORK LIFE BALANCE',
  },
  JOURNALING: {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.journaling.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.journaling.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'JOURNALING',
  },
  DATE: {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.date.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.date.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'DATE',
  },
  'EMOTIONAL LIST': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.emotional_list.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.emotional_list.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'EMOTIONAL LIST',
  },
  'HIGH TEMPERATURE': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.high_temperature.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.high_temperature.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'HIGH TEMPERATURE',
  },
  Photos: {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.photos.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.photos.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'Photos',
  },
  'LOW TEMPERATURE': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.low_temperature.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.low_temperature.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'LOW TEMPERATURE',
  },
  'SCREEN RECORDING': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.screen_recording.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.low_temperature.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'SCREEN RECORDING',
  },
  'CAMERA RECORDING': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.camera_recording.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.camera_recording.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'CAMERA RECORDING',
  },
  'SCREEN + CAMERA RECORDING': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.screen_camera_recording.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.screen_camera_recording.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'SCREEN + CAMERA RECORDING',
  },
  'MICROPHONE AUDIO RECORDING': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.microphone_audio_recording.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.microphone_audio_recording.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'MICROPHONE AUDIO RECORDING',
  },
  'SYSTEM AUDIO RECORDING': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.system_audio_recording.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.system_audio_recording.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'SYSTEM AUDIO RECORDING',
  },
  'MIC + SYSTEM RECORDING': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.mic_system_recording.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.mic_system_recording.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'MIC + SYSTEM RECORDING',
  },
};