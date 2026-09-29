// Constants for job filtering

// US States list (alphabetical)
export const US_STATES = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
  'District of Columbia'
] as const;

// Position types for job postings
export const POSITION_TYPES = [
  'Permanent/Full-Time',
  'Permanent/Part-Time',
  'Locum Tenens (Temporary)',
  'Locum-to-Perm',
  'Per Diem',
  'Fellowship',
  'Academic/Faculty Position'
] as const;

// Page size options
export const PAGE_SIZE_OPTIONS = [10, 20, 50, 100] as const;

export type USState = typeof US_STATES[number];
export type PositionType = typeof POSITION_TYPES[number];
export type PageSize = typeof PAGE_SIZE_OPTIONS[number];

