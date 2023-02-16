
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.10.1
 * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
 */
Prisma.prismaVersion = {
  client: "4.10.1",
  engine: "aead147aa326ccb985dcfed5b065b4fdabd44b19"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ActorScalarFieldEnum = makeEnum({
  actor_id: 'actor_id',
  first_name: 'first_name',
  last_name: 'last_name',
  last_update: 'last_update'
});

exports.Prisma.AddressScalarFieldEnum = makeEnum({
  address_id: 'address_id',
  address: 'address',
  address2: 'address2',
  district: 'district',
  city_id: 'city_id',
  postal_code: 'postal_code',
  phone: 'phone',
  last_update: 'last_update'
});

exports.Prisma.CategoryScalarFieldEnum = makeEnum({
  category_id: 'category_id',
  name: 'name',
  last_update: 'last_update'
});

exports.Prisma.CityScalarFieldEnum = makeEnum({
  city_id: 'city_id',
  city: 'city',
  country_id: 'country_id',
  last_update: 'last_update'
});

exports.Prisma.CountryScalarFieldEnum = makeEnum({
  country_id: 'country_id',
  country: 'country',
  last_update: 'last_update'
});

exports.Prisma.CustomerScalarFieldEnum = makeEnum({
  customer_id: 'customer_id',
  store_id: 'store_id',
  first_name: 'first_name',
  last_name: 'last_name',
  email: 'email',
  address_id: 'address_id',
  active: 'active',
  create_date: 'create_date',
  last_update: 'last_update'
});

exports.Prisma.FilmScalarFieldEnum = makeEnum({
  film_id: 'film_id',
  title: 'title',
  description: 'description',
  release_year: 'release_year',
  language_id: 'language_id',
  original_language_id: 'original_language_id',
  rental_duration: 'rental_duration',
  rental_rate: 'rental_rate',
  length: 'length',
  replacement_cost: 'replacement_cost',
  rating: 'rating',
  special_features: 'special_features',
  last_update: 'last_update'
});

exports.Prisma.Film_actorScalarFieldEnum = makeEnum({
  actor_id: 'actor_id',
  film_id: 'film_id',
  last_update: 'last_update'
});

exports.Prisma.Film_categoryScalarFieldEnum = makeEnum({
  film_id: 'film_id',
  category_id: 'category_id',
  last_update: 'last_update'
});

exports.Prisma.Film_textScalarFieldEnum = makeEnum({
  film_id: 'film_id',
  title: 'title',
  description: 'description'
});

exports.Prisma.InventoryScalarFieldEnum = makeEnum({
  inventory_id: 'inventory_id',
  film_id: 'film_id',
  store_id: 'store_id',
  last_update: 'last_update'
});

exports.Prisma.LanguageScalarFieldEnum = makeEnum({
  language_id: 'language_id',
  name: 'name',
  last_update: 'last_update'
});

exports.Prisma.PaymentScalarFieldEnum = makeEnum({
  payment_id: 'payment_id',
  customer_id: 'customer_id',
  staff_id: 'staff_id',
  rental_id: 'rental_id',
  amount: 'amount',
  payment_date: 'payment_date',
  last_update: 'last_update'
});

exports.Prisma.RentalScalarFieldEnum = makeEnum({
  rental_id: 'rental_id',
  rental_date: 'rental_date',
  inventory_id: 'inventory_id',
  customer_id: 'customer_id',
  return_date: 'return_date',
  staff_id: 'staff_id',
  last_update: 'last_update'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.StaffScalarFieldEnum = makeEnum({
  staff_id: 'staff_id',
  first_name: 'first_name',
  last_name: 'last_name',
  address_id: 'address_id',
  picture: 'picture',
  email: 'email',
  store_id: 'store_id',
  active: 'active',
  username: 'username',
  password: 'password',
  last_update: 'last_update'
});

exports.Prisma.StoreScalarFieldEnum = makeEnum({
  store_id: 'store_id',
  manager_staff_id: 'manager_staff_id',
  address_id: 'address_id',
  last_update: 'last_update'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});
exports.film_rating = makeEnum({
  G: 'G',
  PG: 'PG',
  PG_13: 'PG_13',
  R: 'R',
  NC_17: 'NC_17'
});

exports.Prisma.ModelName = makeEnum({
  actor: 'actor',
  address: 'address',
  category: 'category',
  city: 'city',
  country: 'country',
  customer: 'customer',
  film: 'film',
  film_actor: 'film_actor',
  film_category: 'film_category',
  film_text: 'film_text',
  inventory: 'inventory',
  language: 'language',
  payment: 'payment',
  rental: 'rental',
  staff: 'staff',
  store: 'store'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
