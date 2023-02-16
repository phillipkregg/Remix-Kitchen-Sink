
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  findSync
} = require('./runtime/library')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
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


  const path = require('path')

const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "prisma_clients/dbMysql",
    "dbMysql",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

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

const dmmfString = "{\"datamodel\":{\"enums\":[{\"name\":\"film_rating\",\"values\":[{\"name\":\"G\",\"dbName\":null},{\"name\":\"PG\",\"dbName\":null},{\"name\":\"PG_13\",\"dbName\":\"PG-13\"},{\"name\":\"R\",\"dbName\":null},{\"name\":\"NC_17\",\"dbName\":\"NC-17\"}],\"dbName\":null}],\"models\":[{\"name\":\"actor\",\"dbName\":null,\"fields\":[{\"name\":\"actor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"film_actor\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"film_actor\",\"relationName\":\"actorTofilm_actor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"address\",\"dbName\":null,\"fields\":[{\"name\":\"address_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"district\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postal_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"city\",\"relationName\":\"addressTocity\",\"relationFromFields\":[\"city_id\"],\"relationToFields\":[\"city_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"customer\",\"relationName\":\"addressTocustomer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"staff\",\"relationName\":\"addressTostaff\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"store\",\"relationName\":\"addressTostore\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"category\",\"dbName\":null,\"fields\":[{\"name\":\"category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"film_category\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"film_category\",\"relationName\":\"categoryTofilm_category\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"city\",\"dbName\":null,\"fields\":[{\"name\":\"city_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"address\",\"relationName\":\"addressTocity\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"country\",\"relationName\":\"cityTocountry\",\"relationFromFields\":[\"country_id\"],\"relationToFields\":[\"country_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"country\",\"dbName\":null,\"fields\":[{\"name\":\"country_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"city\",\"relationName\":\"cityTocountry\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"customer\",\"dbName\":null,\"fields\":[{\"name\":\"customer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"address\",\"relationName\":\"addressTocustomer\",\"relationFromFields\":[\"address_id\"],\"relationToFields\":[\"address_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"store\",\"relationName\":\"customerTostore\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"store_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"payment\",\"relationName\":\"customerTopayment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rental\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"rental\",\"relationName\":\"customerTorental\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"film\",\"dbName\":null,\"fields\":[{\"name\":\"film_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"release_year\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"language_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"original_language_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rental_duration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":3,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rental_rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":4.99,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"length\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"replacement_cost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":19.990000000000002,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rating\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"film_rating\",\"default\":\"G\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"special_features\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"language_film_language_idTolanguage\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"language\",\"relationName\":\"film_language_idTolanguage\",\"relationFromFields\":[\"language_id\"],\"relationToFields\":[\"language_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"language_film_original_language_idTolanguage\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"language\",\"relationName\":\"film_original_language_idTolanguage\",\"relationFromFields\":[\"original_language_id\"],\"relationToFields\":[\"language_id\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"film_actor\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"film_actor\",\"relationName\":\"filmTofilm_actor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"film_category\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"film_category\",\"relationName\":\"filmTofilm_category\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inventory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"inventory\",\"relationName\":\"filmToinventory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"film_actor\",\"dbName\":null,\"fields\":[{\"name\":\"actor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"film_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"actor\",\"relationName\":\"actorTofilm_actor\",\"relationFromFields\":[\"actor_id\"],\"relationToFields\":[\"actor_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"film\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"film\",\"relationName\":\"filmTofilm_actor\",\"relationFromFields\":[\"film_id\"],\"relationToFields\":[\"film_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"actor_id\",\"film_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"film_category\",\"dbName\":null,\"fields\":[{\"name\":\"film_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"category\",\"relationName\":\"categoryTofilm_category\",\"relationFromFields\":[\"category_id\"],\"relationToFields\":[\"category_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"film\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"film\",\"relationName\":\"filmTofilm_category\",\"relationFromFields\":[\"film_id\"],\"relationToFields\":[\"film_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"film_id\",\"category_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"film_text\",\"dbName\":null,\"fields\":[{\"name\":\"film_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"inventory\",\"dbName\":null,\"fields\":[{\"name\":\"inventory_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"film_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"film\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"film\",\"relationName\":\"filmToinventory\",\"relationFromFields\":[\"film_id\"],\"relationToFields\":[\"film_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"store\",\"relationName\":\"inventoryTostore\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"store_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rental\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"rental\",\"relationName\":\"inventoryTorental\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"language\",\"dbName\":null,\"fields\":[{\"name\":\"language_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"film_film_language_idTolanguage\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"film\",\"relationName\":\"film_language_idTolanguage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"film_film_original_language_idTolanguage\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"film\",\"relationName\":\"film_original_language_idTolanguage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"payment\",\"dbName\":null,\"fields\":[{\"name\":\"payment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rental_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"customer\",\"relationName\":\"customerTopayment\",\"relationFromFields\":[\"customer_id\"],\"relationToFields\":[\"customer_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rental\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"rental\",\"relationName\":\"paymentTorental\",\"relationFromFields\":[\"rental_id\"],\"relationToFields\":[\"rental_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"staff\",\"relationName\":\"paymentTostaff\",\"relationFromFields\":[\"staff_id\"],\"relationToFields\":[\"staff_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"rental\",\"dbName\":null,\"fields\":[{\"name\":\"rental_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rental_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inventory_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"return_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"payment\",\"relationName\":\"paymentTorental\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"customer\",\"relationName\":\"customerTorental\",\"relationFromFields\":[\"customer_id\"],\"relationToFields\":[\"customer_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inventory\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"inventory\",\"relationName\":\"inventoryTorental\",\"relationFromFields\":[\"inventory_id\"],\"relationToFields\":[\"inventory_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"staff\",\"relationName\":\"rentalTostaff\",\"relationFromFields\":[\"staff_id\"],\"relationToFields\":[\"staff_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"rental_date\",\"inventory_id\",\"customer_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"rental_date\",\"inventory_id\",\"customer_id\"]}],\"isGenerated\":false},{\"name\":\"staff\",\"dbName\":null,\"fields\":[{\"name\":\"staff_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"picture\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"payment\",\"relationName\":\"paymentTostaff\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rental\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"rental\",\"relationName\":\"rentalTostaff\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"address\",\"relationName\":\"addressTostaff\",\"relationFromFields\":[\"address_id\"],\"relationToFields\":[\"address_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_staff_store_idTostore\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"store\",\"relationName\":\"staff_store_idTostore\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"store_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_store_manager_staff_idTostaff\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"store\",\"relationName\":\"store_manager_staff_idTostaff\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"store\",\"dbName\":null,\"fields\":[{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manager_staff_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"customer\",\"relationName\":\"customerTostore\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inventory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"inventory\",\"relationName\":\"inventoryTostore\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff_staff_store_idTostore\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"staff\",\"relationName\":\"staff_store_idTostore\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"address\",\"relationName\":\"addressTostore\",\"relationFromFields\":[\"address_id\"],\"relationToFields\":[\"address_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff_store_manager_staff_idTostaff\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"staff\",\"relationName\":\"store_manager_staff_idTostaff\",\"relationFromFields\":[\"manager_staff_id\"],\"relationToFields\":[\"staff_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"actor\",\"plural\":\"actors\",\"findUnique\":\"findUniqueactor\",\"findUniqueOrThrow\":\"findUniqueactorOrThrow\",\"findFirst\":\"findFirstactor\",\"findFirstOrThrow\":\"findFirstactorOrThrow\",\"findMany\":\"findManyactor\",\"create\":\"createOneactor\",\"createMany\":\"createManyactor\",\"delete\":\"deleteOneactor\",\"update\":\"updateOneactor\",\"deleteMany\":\"deleteManyactor\",\"updateMany\":\"updateManyactor\",\"upsert\":\"upsertOneactor\",\"aggregate\":\"aggregateactor\",\"groupBy\":\"groupByactor\"},{\"model\":\"address\",\"plural\":\"addresses\",\"findUnique\":\"findUniqueaddress\",\"findUniqueOrThrow\":\"findUniqueaddressOrThrow\",\"findFirst\":\"findFirstaddress\",\"findFirstOrThrow\":\"findFirstaddressOrThrow\",\"findMany\":\"findManyaddress\",\"delete\":\"deleteOneaddress\",\"update\":\"updateOneaddress\",\"deleteMany\":\"deleteManyaddress\",\"updateMany\":\"updateManyaddress\",\"aggregate\":\"aggregateaddress\",\"groupBy\":\"groupByaddress\"},{\"model\":\"category\",\"plural\":\"categories\",\"findUnique\":\"findUniquecategory\",\"findUniqueOrThrow\":\"findUniquecategoryOrThrow\",\"findFirst\":\"findFirstcategory\",\"findFirstOrThrow\":\"findFirstcategoryOrThrow\",\"findMany\":\"findManycategory\",\"create\":\"createOnecategory\",\"createMany\":\"createManycategory\",\"delete\":\"deleteOnecategory\",\"update\":\"updateOnecategory\",\"deleteMany\":\"deleteManycategory\",\"updateMany\":\"updateManycategory\",\"upsert\":\"upsertOnecategory\",\"aggregate\":\"aggregatecategory\",\"groupBy\":\"groupBycategory\"},{\"model\":\"city\",\"plural\":\"cities\",\"findUnique\":\"findUniquecity\",\"findUniqueOrThrow\":\"findUniquecityOrThrow\",\"findFirst\":\"findFirstcity\",\"findFirstOrThrow\":\"findFirstcityOrThrow\",\"findMany\":\"findManycity\",\"create\":\"createOnecity\",\"createMany\":\"createManycity\",\"delete\":\"deleteOnecity\",\"update\":\"updateOnecity\",\"deleteMany\":\"deleteManycity\",\"updateMany\":\"updateManycity\",\"upsert\":\"upsertOnecity\",\"aggregate\":\"aggregatecity\",\"groupBy\":\"groupBycity\"},{\"model\":\"country\",\"plural\":\"countries\",\"findUnique\":\"findUniquecountry\",\"findUniqueOrThrow\":\"findUniquecountryOrThrow\",\"findFirst\":\"findFirstcountry\",\"findFirstOrThrow\":\"findFirstcountryOrThrow\",\"findMany\":\"findManycountry\",\"create\":\"createOnecountry\",\"createMany\":\"createManycountry\",\"delete\":\"deleteOnecountry\",\"update\":\"updateOnecountry\",\"deleteMany\":\"deleteManycountry\",\"updateMany\":\"updateManycountry\",\"upsert\":\"upsertOnecountry\",\"aggregate\":\"aggregatecountry\",\"groupBy\":\"groupBycountry\"},{\"model\":\"customer\",\"plural\":\"customers\",\"findUnique\":\"findUniquecustomer\",\"findUniqueOrThrow\":\"findUniquecustomerOrThrow\",\"findFirst\":\"findFirstcustomer\",\"findFirstOrThrow\":\"findFirstcustomerOrThrow\",\"findMany\":\"findManycustomer\",\"create\":\"createOnecustomer\",\"createMany\":\"createManycustomer\",\"delete\":\"deleteOnecustomer\",\"update\":\"updateOnecustomer\",\"deleteMany\":\"deleteManycustomer\",\"updateMany\":\"updateManycustomer\",\"upsert\":\"upsertOnecustomer\",\"aggregate\":\"aggregatecustomer\",\"groupBy\":\"groupBycustomer\"},{\"model\":\"film\",\"plural\":\"films\",\"findUnique\":\"findUniquefilm\",\"findUniqueOrThrow\":\"findUniquefilmOrThrow\",\"findFirst\":\"findFirstfilm\",\"findFirstOrThrow\":\"findFirstfilmOrThrow\",\"findMany\":\"findManyfilm\",\"create\":\"createOnefilm\",\"createMany\":\"createManyfilm\",\"delete\":\"deleteOnefilm\",\"update\":\"updateOnefilm\",\"deleteMany\":\"deleteManyfilm\",\"updateMany\":\"updateManyfilm\",\"upsert\":\"upsertOnefilm\",\"aggregate\":\"aggregatefilm\",\"groupBy\":\"groupByfilm\"},{\"model\":\"film_actor\",\"plural\":\"film_actors\",\"findUnique\":\"findUniquefilm_actor\",\"findUniqueOrThrow\":\"findUniquefilm_actorOrThrow\",\"findFirst\":\"findFirstfilm_actor\",\"findFirstOrThrow\":\"findFirstfilm_actorOrThrow\",\"findMany\":\"findManyfilm_actor\",\"create\":\"createOnefilm_actor\",\"createMany\":\"createManyfilm_actor\",\"delete\":\"deleteOnefilm_actor\",\"update\":\"updateOnefilm_actor\",\"deleteMany\":\"deleteManyfilm_actor\",\"updateMany\":\"updateManyfilm_actor\",\"upsert\":\"upsertOnefilm_actor\",\"aggregate\":\"aggregatefilm_actor\",\"groupBy\":\"groupByfilm_actor\"},{\"model\":\"film_category\",\"plural\":\"film_categories\",\"findUnique\":\"findUniquefilm_category\",\"findUniqueOrThrow\":\"findUniquefilm_categoryOrThrow\",\"findFirst\":\"findFirstfilm_category\",\"findFirstOrThrow\":\"findFirstfilm_categoryOrThrow\",\"findMany\":\"findManyfilm_category\",\"create\":\"createOnefilm_category\",\"createMany\":\"createManyfilm_category\",\"delete\":\"deleteOnefilm_category\",\"update\":\"updateOnefilm_category\",\"deleteMany\":\"deleteManyfilm_category\",\"updateMany\":\"updateManyfilm_category\",\"upsert\":\"upsertOnefilm_category\",\"aggregate\":\"aggregatefilm_category\",\"groupBy\":\"groupByfilm_category\"},{\"model\":\"film_text\",\"plural\":\"film_texts\",\"findUnique\":\"findUniquefilm_text\",\"findUniqueOrThrow\":\"findUniquefilm_textOrThrow\",\"findFirst\":\"findFirstfilm_text\",\"findFirstOrThrow\":\"findFirstfilm_textOrThrow\",\"findMany\":\"findManyfilm_text\",\"create\":\"createOnefilm_text\",\"createMany\":\"createManyfilm_text\",\"delete\":\"deleteOnefilm_text\",\"update\":\"updateOnefilm_text\",\"deleteMany\":\"deleteManyfilm_text\",\"updateMany\":\"updateManyfilm_text\",\"upsert\":\"upsertOnefilm_text\",\"aggregate\":\"aggregatefilm_text\",\"groupBy\":\"groupByfilm_text\"},{\"model\":\"inventory\",\"plural\":\"inventories\",\"findUnique\":\"findUniqueinventory\",\"findUniqueOrThrow\":\"findUniqueinventoryOrThrow\",\"findFirst\":\"findFirstinventory\",\"findFirstOrThrow\":\"findFirstinventoryOrThrow\",\"findMany\":\"findManyinventory\",\"create\":\"createOneinventory\",\"createMany\":\"createManyinventory\",\"delete\":\"deleteOneinventory\",\"update\":\"updateOneinventory\",\"deleteMany\":\"deleteManyinventory\",\"updateMany\":\"updateManyinventory\",\"upsert\":\"upsertOneinventory\",\"aggregate\":\"aggregateinventory\",\"groupBy\":\"groupByinventory\"},{\"model\":\"language\",\"plural\":\"languages\",\"findUnique\":\"findUniquelanguage\",\"findUniqueOrThrow\":\"findUniquelanguageOrThrow\",\"findFirst\":\"findFirstlanguage\",\"findFirstOrThrow\":\"findFirstlanguageOrThrow\",\"findMany\":\"findManylanguage\",\"create\":\"createOnelanguage\",\"createMany\":\"createManylanguage\",\"delete\":\"deleteOnelanguage\",\"update\":\"updateOnelanguage\",\"deleteMany\":\"deleteManylanguage\",\"updateMany\":\"updateManylanguage\",\"upsert\":\"upsertOnelanguage\",\"aggregate\":\"aggregatelanguage\",\"groupBy\":\"groupBylanguage\"},{\"model\":\"payment\",\"plural\":\"payments\",\"findUnique\":\"findUniquepayment\",\"findUniqueOrThrow\":\"findUniquepaymentOrThrow\",\"findFirst\":\"findFirstpayment\",\"findFirstOrThrow\":\"findFirstpaymentOrThrow\",\"findMany\":\"findManypayment\",\"create\":\"createOnepayment\",\"createMany\":\"createManypayment\",\"delete\":\"deleteOnepayment\",\"update\":\"updateOnepayment\",\"deleteMany\":\"deleteManypayment\",\"updateMany\":\"updateManypayment\",\"upsert\":\"upsertOnepayment\",\"aggregate\":\"aggregatepayment\",\"groupBy\":\"groupBypayment\"},{\"model\":\"rental\",\"plural\":\"rentals\",\"findUnique\":\"findUniquerental\",\"findUniqueOrThrow\":\"findUniquerentalOrThrow\",\"findFirst\":\"findFirstrental\",\"findFirstOrThrow\":\"findFirstrentalOrThrow\",\"findMany\":\"findManyrental\",\"create\":\"createOnerental\",\"createMany\":\"createManyrental\",\"delete\":\"deleteOnerental\",\"update\":\"updateOnerental\",\"deleteMany\":\"deleteManyrental\",\"updateMany\":\"updateManyrental\",\"upsert\":\"upsertOnerental\",\"aggregate\":\"aggregaterental\",\"groupBy\":\"groupByrental\"},{\"model\":\"staff\",\"plural\":\"staff\",\"findUnique\":\"findUniquestaff\",\"findUniqueOrThrow\":\"findUniquestaffOrThrow\",\"findFirst\":\"findFirststaff\",\"findFirstOrThrow\":\"findFirststaffOrThrow\",\"findMany\":\"findManystaff\",\"create\":\"createOnestaff\",\"createMany\":\"createManystaff\",\"delete\":\"deleteOnestaff\",\"update\":\"updateOnestaff\",\"deleteMany\":\"deleteManystaff\",\"updateMany\":\"updateManystaff\",\"upsert\":\"upsertOnestaff\",\"aggregate\":\"aggregatestaff\",\"groupBy\":\"groupBystaff\"},{\"model\":\"store\",\"plural\":\"stores\",\"findUnique\":\"findUniquestore\",\"findUniqueOrThrow\":\"findUniquestoreOrThrow\",\"findFirst\":\"findFirststore\",\"findFirstOrThrow\":\"findFirststoreOrThrow\",\"findMany\":\"findManystore\",\"create\":\"createOnestore\",\"createMany\":\"createManystore\",\"delete\":\"deleteOnestore\",\"update\":\"updateOnestore\",\"deleteMany\":\"deleteManystore\",\"updateMany\":\"updateManystore\",\"upsert\":\"upsertOnestore\",\"aggregate\":\"aggregatestore\",\"groupBy\":\"groupBystore\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/plackey289/JavaScript/remix_stuff/remix-jokes/prisma_clients/dbMysql",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../mysql/prisma",
  "clientVersion": "4.10.1",
  "engineVersion": "aead147aa326ccb985dcfed5b065b4fdabd44b19",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "prisma_clients/dbMysql/libquery_engine-darwin-arm64.dylib.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma_clients/dbMysql/schema.prisma")
