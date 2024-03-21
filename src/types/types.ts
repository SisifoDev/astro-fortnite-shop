export type ItemsShop = {
  result: boolean
  fullShop: boolean
  lastUpdate: LastUpdate
  currentRotation: CurrentRotation
  nextRotation: null
  carousel: null
  specialOfferVideo: null
  customBackground: null
  shop: Shop[]
}

export type CurrentRotation = {
  'JamTracks.96': Date
  'LanternFest.99': Date
  'JamTracks.98': Date
  'LadyGagaNewCategory.99': Date
  'JamTracks.99': Date
  'Trailblazers.99': Date
  'Tron.99': Date
  'SignatureStyleNewCategory.99': Date
  'OriginalSpotlight.99': Date
  'Tron.98': Date
  'StartYourEngines.LamborghiniHuracanSTO.99': Date
  'RockOutWithFender.99': Date
  'BeachsideBoulevard.99': Date
  'JamTracks.97': Date
  'SignatureStyleNewCategory.NeonGlow.98': Date
  'StartYourEngines.97': Date
  'DurrrBurger.98': Date
  'DurrrBurger.99': Date
  'StartYourEngines.Dominus GT.98': Date
  'MGSRaiden.99': Date
  'BeachsideBoulevard.98': Date
}

export type LastUpdate = {
  date: Date
  uid: string
}

export interface Shop {
  mainId: string
  displayName: string
  displayDescription: string
  displayType: DisplayType
  mainType: MainType
  offerId: string
  devName: string
  displayAssets: DisplayAsset[]
  firstReleaseDate: Date
  previousReleaseDate: Date | null
  giftAllowed: boolean
  buyAllowed: boolean
  price: Price
  rarity: Rarity
  series: Rarity | null
  banner: Banner | null
  offerTag: OfferTag | null
  granted: Granted[]
  priority: number
  section: Section
  groupIndex: number
  storeName: StoreName
  tileSize: TileSize
  categories: any[]
}

export type Banner = {
  id: string
  name: string
  intensity: string
}

export type DisplayAsset = {
  displayAsset: string
  materialInstance: string
  primaryMode: PrimaryMode
  url: string
  flipbook: null
  background_texture: null | string
  background: string
  full_background: string
}

export enum PrimaryMode {
  BattleRoyale = 'BattleRoyale',
  DelMar = 'DelMar',
  Juno = 'Juno',
  Sparks = 'Sparks',
}

export enum DisplayType {
  AlaDelta = 'Ala delta',
  Gesto = 'Gesto',
  LoteDe4ObjetoS = 'Lote de 4 objeto(s)',
  LoteDe5ObjetoS = 'Lote de 5 objeto(s)',
  LoteDeObjetos = 'Lote de objetos',
  Pico = 'Pico',
  Traje = 'Traje',
}

export type Granted = {
  id: string
  type: Rarity
  name: string
  description: string
  rarity: Rarity
  series: Rarity | null
  images: Images
  juno: Juno
  video: null
  audio: null
  gameplayTags: string[]
  set: Set | null
}

export type Images = {
  icon: null | string
  featured: null | string
  background: null | string
  icon_background: null | string
  full_background: null | string
}

export type Juno = {
  icon: null | string
}

export type Rarity = {
  id: MainType
  name: Name
}

export enum MainType {
  Backpack = 'backpack',
  BuildingProp = 'building_prop',
  BuildingSet = 'building_set',
  Bundle = 'bundle',
  Common = 'Common',
  CreatorCollabSeries = 'CreatorCollabSeries',
  Emote = 'emote',
  Epic = 'Epic',
  Glider = 'glider',
  Outfit = 'outfit',
  Pickaxe = 'pickaxe',
  PlatformSeries = 'PlatformSeries',
  Rare = 'Rare',
  SeriesLamborghini = 'Series_Lamborghini',
  SparksBass = 'sparks_bass',
  SparksGuitar = 'sparks_guitar',
  SparksMicrophone = 'sparks_microphone',
  SparksSong = 'sparks_song',
  Uncommon = 'Uncommon',
  VehicleBody = 'vehicle_body',
  VehicleCosmeticvariant = 'vehicle_cosmeticvariant',
  VehicleSkin = 'vehicle_skin',
  VehicleWheel = 'vehicle_wheel',
  Wrap = 'wrap',
}

export enum Name {
  AccesorioMochilero = 'Accesorio mochilero',
  AlaDelta = 'Ala delta',
  Calcomanía = 'Calcomanía',
  Común = 'COMÚN',
  Decoración = 'Decoración',
  Envoltorio = 'Envoltorio',
  Estilo = 'Estilo',
  Gesto = 'Gesto',
  Guitarra = 'Guitarra',
  KitDeLEGO = 'Kit de LEGO®',
  Micrófono = 'Micrófono',
  PerfecciónAReacciónQueJuegaEnSuPropiaLiga = 'Perfección a reacción que juega en su propia liga.',
  Pico = 'Pico',
  PistaDeImprovisación = 'Pista de improvisación',
  PocoComún = 'POCO COMÚN',
  Rara = 'RARA',
  Rueda = 'Rueda',
  SerieDeÍdolos = 'Serie de ídolos',
  SerieLamborghini = 'SERIE LAMBORGHINI',
  SerieLeyendasDeVideojuegos = 'Serie Leyendas de videojuegos',
  SparksBass = 'sparks_bass',
  Traje = 'Traje',
  Épico = 'Épico',
}

export type Set = {
  id: string
  name: string
  partOf: string
}

export type OfferTag = {
  id: ID
  text: string
}

export enum ID {
  Boosts = 'boosts',
  Equipmainframe = 'equipmainframe',
  Falsevulture = 'falsevulture',
  Musclecar2 = 'musclecar2',
  Oblong = 'oblong',
  Sparksjamloop = 'sparksjamloop',
  Wheels = 'wheels',
}

export type Price = {
  regularPrice: number
  finalPrice: number
  floorPrice: number
}

export type Section = {
  id: string
  name: string
  category: Category | null
  landingPriority: number
}

export enum Category {
  ColaboracionesDeFortnite = 'Colaboraciones de Fortnite',
  ConstruyeConKitsDeLEGO = 'Construye con kits de LEGO®',
  OriginalesMagistrales = 'Originales magistrales',
  SubeAlEscenario = 'Sube al escenario',
}

export enum StoreName {
  BRDailyStorefront = 'BRDailyStorefront',
  BRWeeklyStorefront = 'BRWeeklyStorefront',
}

export enum TileSize {
  DoubleWide = 'DoubleWide',
  Normal = 'Normal',
  Small = 'Small',
  TripleWide = 'TripleWide',
}
