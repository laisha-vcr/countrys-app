export interface RESTCountry {
  name: Name
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  cioc?: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: Currencies
  idd: Idd
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: Languages
  translations: Translations
  latlng: number[]
  landlocked: boolean
  borders?: string[]
  area: number
  demonyms: Demonyms
  flag: string
  maps: Maps
  population: number
  gini?: Gini
  fifa?: string
  car: Car
  timezones: string[]
  continents: string[]
  flags: Flags
  coatOfArms: CoatOfArms
  startOfWeek: string
  capitalInfo: CapitalInfo
  postalCode?: PostalCode
}

export interface Name {
  common: string
  official: string
  nativeName: NativeName
}

export interface NativeName {
  eng?: Eng
  hin?: Hin
  tam?: Tam
  ber?: Ber
  mey?: Mey
  spa?: Spa
  fra?: Fra
  nrf?: Nrf
  deu?: Deu
  nld?: Nld
  mri?: Mri
  nzs?: Nzs
  cat?: Cat
  srp?: Srp
  fin?: Fin
  swe?: Swe
  bjz?: Bjz
}

export interface Eng {
  official: string
  common: string
}

export interface Hin {
  official: string
  common: string
}

export interface Tam {
  official: string
  common: string
}

export interface Ber {
  official: string
  common: string
}

export interface Mey {
  official: string
  common: string
}

export interface Spa {
  official: string
  common: string
}

export interface Fra {
  official: string
  common: string
}

export interface Nrf {
  official: string
  common: string
}

export interface Deu {
  official: string
  common: string
}

export interface Nld {
  official: string
  common: string
}

export interface Mri {
  official: string
  common: string
}

export interface Nzs {
  official: string
  common: string
}

export interface Cat {
  official: string
  common: string
}

export interface Srp {
  official: string
  common: string
}

export interface Fin {
  official: string
  common: string
}

export interface Swe {
  official: string
  common: string
}

export interface Bjz {
  official: string
  common: string
}

export interface Currencies {
  INR?: Inr
  DZD?: Dzd
  MAD?: Mad
  MRU?: Mru
  GBP?: Gbp
  JEP?: Jep
  EUR?: Eur
  NZD?: Nzd
  RSD?: Rsd
  BZD?: Bzd
}

export interface Inr {
  name: string
  symbol: string
}

export interface Dzd {
  name: string
  symbol: string
}

export interface Mad {
  name: string
  symbol: string
}

export interface Mru {
  name: string
  symbol: string
}

export interface Gbp {
  name: string
  symbol: string
}

export interface Jep {
  name: string
  symbol: string
}

export interface Eur {
  name: string
  symbol: string
}

export interface Nzd {
  name: string
  symbol: string
}

export interface Rsd {
  name: string
  symbol: string
}

export interface Bzd {
  name: string
  symbol: string
}

export interface Idd {
  root: string
  suffixes: string[]
}

export interface Languages {
  eng?: string
  hin?: string
  tam?: string
  ber?: string
  mey?: string
  spa?: string
  fra?: string
  nrf?: string
  deu?: string
  nld?: string
  mri?: string
  nzs?: string
  cat?: string
  srp?: string
  fin?: string
  swe?: string
  bjz?: string
}

export interface Translations {
  ara: Ara
  bre: Bre
  ces: Ces
  cym: Cym
  deu: Deu2
  est: Est
  fin: Fin2
  fra: Fra2
  hrv: Hrv
  hun: Hun
  ita: Ita
  jpn: Jpn
  kor: Kor
  nld: Nld2
  per: Per
  pol: Pol
  por: Por
  rus: Rus
  slk: Slk
  spa: Spa2
  srp: Srp2
  swe: Swe2
  tur: Tur
  urd: Urd
  zho: Zho
}

export interface Ara {
  official: string
  common: string
}

export interface Bre {
  official: string
  common: string
}

export interface Ces {
  official: string
  common: string
}

export interface Cym {
  official: string
  common: string
}

export interface Deu2 {
  official: string
  common: string
}

export interface Est {
  official: string
  common: string
}

export interface Fin2 {
  official: string
  common: string
}

export interface Fra2 {
  official: string
  common: string
}

export interface Hrv {
  official: string
  common: string
}

export interface Hun {
  official: string
  common: string
}

export interface Ita {
  official: string
  common: string
}

export interface Jpn {
  official: string
  common: string
}

export interface Kor {
  official: string
  common: string
}

export interface Nld2 {
  official: string
  common: string
}

export interface Per {
  official: string
  common: string
}

export interface Pol {
  official: string
  common: string
}

export interface Por {
  official: string
  common: string
}

export interface Rus {
  official: string
  common: string
}

export interface Slk {
  official: string
  common: string
}

export interface Spa2 {
  official: string
  common: string
}

export interface Srp2 {
  official: string
  common: string
}

export interface Swe2 {
  official: string
  common: string
}

export interface Tur {
  official: string
  common: string
}

export interface Urd {
  official: string
  common: string
}

export interface Zho {
  official: string
  common: string
}

export interface Demonyms {
  eng: Eng2
  fra?: Fra3
}

export interface Eng2 {
  f: string
  m: string
}

export interface Fra3 {
  f: string
  m: string
}

export interface Maps {
  googleMaps: string
  openStreetMaps: string
}

export interface Gini {
  "1999"?: number
  "2018"?: number
  "2017"?: number
  "2011"?: number
}

export interface Car {
  signs: string[]
  side: string
}

export interface Flags {
  png: string
  svg: string
  alt?: string
}

export interface CoatOfArms {
  png?: string
  svg?: string
}

export interface CapitalInfo {
  latlng: number[]
}

export interface PostalCode {
  format: string
  regex: string
}
