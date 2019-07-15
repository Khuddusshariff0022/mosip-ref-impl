import * as config from 'src/assets/config.json';


export const VERSION = '1.0';
export const IDS = {
  centers: 'mosip.admin.registration.centers'
};
export const BASE_URL = 'https://dev.mosip.io/r2/v1';
export const URL = {
  centers: `${config.baseUrl}masterdata/registrationcenters/search`,
  devices: `${config.baseUrl}masterdata/devices/search`,
  machines: `${config.baseUrl}masterdata/machines/search`
};
export const navItems = [
  {
    displayName: 'menuItems.item1.title',
    icon: './assets/images/home.svg',
    route: '/admin/home',
    children: null
  },
  {
    displayName: 'menuItems.item2.title',
    icon: 'assets/images/support.svg',
    route: 'admin/resources',
    children: [
      {
        displayName: 'menuItems.item2.subItem1',
        icon: null,
        route: '/admin/resources/centers',
      },
      {
        displayName: 'menuItems.item2.subItem2',
        icon: null,
        route: '/admin/resources/devices',
      },
      {
        displayName: 'menuItems.item2.subItem3',
        icon: null,
        route: 'resources/users'
      },
      {
        displayName: 'menuItems.item2.subItem4',
        icon: null,
        route: '/admin/resources/machines'
      }
    ]
  },
  {
    displayName: 'menuItems.item3.title',
    icon: './assets/images/home.svg',
    route: '/admin/masterdata',
    children: null
  }
];

export const MASTERDATA_BASE_URL = `${config.baseUrl}masterdata/`;
export const processingTimeStart = 15;
export const processingTimeEnd = 45;
export const processingTimeInterval = 5;
export const timeSlotsInterval = 30;

export const registrationCenterCreateId = 'string';

export const viewFields = [];

export const masterdataMapping = {
  'blacklisted-words': {
    apiName: 'blacklistedwords',
    specFileName: 'blacklisted-words',
    name: 'Black Listed Word',
    nameKey: '',
    idKey: ''
  },
  holidays: {
    apiName: 'holidays',
    specFileName: 'holiday-data',
    name: 'Holiday',
    nameKey: 'holidayName',
    idKey: ''
  },
  'document-type': {
    apiName: 'documenttypes',
    specFileName: 'document-types',
    name: 'Document Types',
    nameKey: 'name',
    idKey: 'code'
  },
  location: {
    apiName: 'locations',
    specFileName: 'location-data',
    name: 'Location',
    nameKey: 'name',
    idKey: 'code'
  }
};
