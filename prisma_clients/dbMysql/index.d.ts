
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model actor
 * 
 */
export type actor = {
  actor_id: number
  first_name: string
  last_name: string
  last_update: Date
}

/**
 * Model address
 * 
 */
export type address = {
  address_id: number
  address: string
  address2: string | null
  district: string
  city_id: number
  postal_code: string | null
  phone: string
  last_update: Date
}

/**
 * Model category
 * 
 */
export type category = {
  category_id: number
  name: string
  last_update: Date
}

/**
 * Model city
 * 
 */
export type city = {
  city_id: number
  city: string
  country_id: number
  last_update: Date
}

/**
 * Model country
 * 
 */
export type country = {
  country_id: number
  country: string
  last_update: Date
}

/**
 * Model customer
 * 
 */
export type customer = {
  customer_id: number
  store_id: number
  first_name: string
  last_name: string
  email: string | null
  address_id: number
  active: boolean
  create_date: Date
  last_update: Date | null
}

/**
 * Model film
 * 
 */
export type film = {
  film_id: number
  title: string
  description: string | null
  release_year: number | null
  language_id: number
  original_language_id: number | null
  rental_duration: number
  rental_rate: Prisma.Decimal
  length: number | null
  replacement_cost: Prisma.Decimal
  rating: film_rating | null
  special_features: string | null
  last_update: Date
}

/**
 * Model film_actor
 * 
 */
export type film_actor = {
  actor_id: number
  film_id: number
  last_update: Date
}

/**
 * Model film_category
 * 
 */
export type film_category = {
  film_id: number
  category_id: number
  last_update: Date
}

/**
 * Model film_text
 * 
 */
export type film_text = {
  film_id: number
  title: string
  description: string | null
}

/**
 * Model inventory
 * 
 */
export type inventory = {
  inventory_id: number
  film_id: number
  store_id: number
  last_update: Date
}

/**
 * Model language
 * 
 */
export type language = {
  language_id: number
  name: string
  last_update: Date
}

/**
 * Model payment
 * 
 */
export type payment = {
  payment_id: number
  customer_id: number
  staff_id: number
  rental_id: number | null
  amount: Prisma.Decimal
  payment_date: Date
  last_update: Date | null
}

/**
 * Model rental
 * 
 */
export type rental = {
  rental_id: number
  rental_date: Date
  inventory_id: number
  customer_id: number
  return_date: Date | null
  staff_id: number
  last_update: Date
}

/**
 * Model staff
 * 
 */
export type staff = {
  staff_id: number
  first_name: string
  last_name: string
  address_id: number
  picture: Buffer | null
  email: string | null
  store_id: number
  active: boolean
  username: string
  password: string | null
  last_update: Date
}

/**
 * Model store
 * 
 */
export type store = {
  store_id: number
  manager_staff_id: number
  address_id: number
  last_update: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const film_rating: {
  G: 'G',
  PG: 'PG',
  PG_13: 'PG_13',
  R: 'R',
  NC_17: 'NC_17'
};

export type film_rating = (typeof film_rating)[keyof typeof film_rating]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Actors
 * const actors = await prisma.actor.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Actors
   * const actors = await prisma.actor.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.actor`: Exposes CRUD operations for the **actor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actors
    * const actors = await prisma.actor.findMany()
    * ```
    */
  get actor(): Prisma.actorDelegate<GlobalReject>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.addressDelegate<GlobalReject>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<GlobalReject>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **city** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.cityDelegate<GlobalReject>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.countryDelegate<GlobalReject>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.customerDelegate<GlobalReject>;

  /**
   * `prisma.film`: Exposes CRUD operations for the **film** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Films
    * const films = await prisma.film.findMany()
    * ```
    */
  get film(): Prisma.filmDelegate<GlobalReject>;

  /**
   * `prisma.film_actor`: Exposes CRUD operations for the **film_actor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Film_actors
    * const film_actors = await prisma.film_actor.findMany()
    * ```
    */
  get film_actor(): Prisma.film_actorDelegate<GlobalReject>;

  /**
   * `prisma.film_category`: Exposes CRUD operations for the **film_category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Film_categories
    * const film_categories = await prisma.film_category.findMany()
    * ```
    */
  get film_category(): Prisma.film_categoryDelegate<GlobalReject>;

  /**
   * `prisma.film_text`: Exposes CRUD operations for the **film_text** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Film_texts
    * const film_texts = await prisma.film_text.findMany()
    * ```
    */
  get film_text(): Prisma.film_textDelegate<GlobalReject>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.inventoryDelegate<GlobalReject>;

  /**
   * `prisma.language`: Exposes CRUD operations for the **language** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.language.findMany()
    * ```
    */
  get language(): Prisma.languageDelegate<GlobalReject>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.paymentDelegate<GlobalReject>;

  /**
   * `prisma.rental`: Exposes CRUD operations for the **rental** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rentals
    * const rentals = await prisma.rental.findMany()
    * ```
    */
  get rental(): Prisma.rentalDelegate<GlobalReject>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.staffDelegate<GlobalReject>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.storeDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.10.1
   * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ActorCountOutputType
   */


  export type ActorCountOutputType = {
    film_actor: number
  }

  export type ActorCountOutputTypeSelect = {
    film_actor?: boolean
  }

  export type ActorCountOutputTypeGetPayload<S extends boolean | null | undefined | ActorCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ActorCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ActorCountOutputTypeArgs)
    ? ActorCountOutputType 
    : S extends { select: any } & (ActorCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ActorCountOutputType ? ActorCountOutputType[P] : never
  } 
      : ActorCountOutputType




  // Custom InputTypes

  /**
   * ActorCountOutputType without action
   */
  export type ActorCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ActorCountOutputType
     */
    select?: ActorCountOutputTypeSelect | null
  }



  /**
   * Count Type AddressCountOutputType
   */


  export type AddressCountOutputType = {
    customer: number
    staff: number
    store: number
  }

  export type AddressCountOutputTypeSelect = {
    customer?: boolean
    staff?: boolean
    store?: boolean
  }

  export type AddressCountOutputTypeGetPayload<S extends boolean | null | undefined | AddressCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AddressCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AddressCountOutputTypeArgs)
    ? AddressCountOutputType 
    : S extends { select: any } & (AddressCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AddressCountOutputType ? AddressCountOutputType[P] : never
  } 
      : AddressCountOutputType




  // Custom InputTypes

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect | null
  }



  /**
   * Count Type CategoryCountOutputType
   */


  export type CategoryCountOutputType = {
    film_category: number
  }

  export type CategoryCountOutputTypeSelect = {
    film_category?: boolean
  }

  export type CategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | CategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CategoryCountOutputTypeArgs)
    ? CategoryCountOutputType 
    : S extends { select: any } & (CategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CategoryCountOutputType ? CategoryCountOutputType[P] : never
  } 
      : CategoryCountOutputType




  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type CityCountOutputType
   */


  export type CityCountOutputType = {
    address: number
  }

  export type CityCountOutputTypeSelect = {
    address?: boolean
  }

  export type CityCountOutputTypeGetPayload<S extends boolean | null | undefined | CityCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CityCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CityCountOutputTypeArgs)
    ? CityCountOutputType 
    : S extends { select: any } & (CityCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CityCountOutputType ? CityCountOutputType[P] : never
  } 
      : CityCountOutputType




  // Custom InputTypes

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect | null
  }



  /**
   * Count Type CountryCountOutputType
   */


  export type CountryCountOutputType = {
    city: number
  }

  export type CountryCountOutputTypeSelect = {
    city?: boolean
  }

  export type CountryCountOutputTypeGetPayload<S extends boolean | null | undefined | CountryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CountryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CountryCountOutputTypeArgs)
    ? CountryCountOutputType 
    : S extends { select: any } & (CountryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CountryCountOutputType ? CountryCountOutputType[P] : never
  } 
      : CountryCountOutputType




  // Custom InputTypes

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect | null
  }



  /**
   * Count Type CustomerCountOutputType
   */


  export type CustomerCountOutputType = {
    payment: number
    rental: number
  }

  export type CustomerCountOutputTypeSelect = {
    payment?: boolean
    rental?: boolean
  }

  export type CustomerCountOutputTypeGetPayload<S extends boolean | null | undefined | CustomerCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CustomerCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CustomerCountOutputTypeArgs)
    ? CustomerCountOutputType 
    : S extends { select: any } & (CustomerCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CustomerCountOutputType ? CustomerCountOutputType[P] : never
  } 
      : CustomerCountOutputType




  // Custom InputTypes

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect | null
  }



  /**
   * Count Type FilmCountOutputType
   */


  export type FilmCountOutputType = {
    film_actor: number
    film_category: number
    inventory: number
  }

  export type FilmCountOutputTypeSelect = {
    film_actor?: boolean
    film_category?: boolean
    inventory?: boolean
  }

  export type FilmCountOutputTypeGetPayload<S extends boolean | null | undefined | FilmCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FilmCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (FilmCountOutputTypeArgs)
    ? FilmCountOutputType 
    : S extends { select: any } & (FilmCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof FilmCountOutputType ? FilmCountOutputType[P] : never
  } 
      : FilmCountOutputType




  // Custom InputTypes

  /**
   * FilmCountOutputType without action
   */
  export type FilmCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FilmCountOutputType
     */
    select?: FilmCountOutputTypeSelect | null
  }



  /**
   * Count Type InventoryCountOutputType
   */


  export type InventoryCountOutputType = {
    rental: number
  }

  export type InventoryCountOutputTypeSelect = {
    rental?: boolean
  }

  export type InventoryCountOutputTypeGetPayload<S extends boolean | null | undefined | InventoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? InventoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (InventoryCountOutputTypeArgs)
    ? InventoryCountOutputType 
    : S extends { select: any } & (InventoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof InventoryCountOutputType ? InventoryCountOutputType[P] : never
  } 
      : InventoryCountOutputType




  // Custom InputTypes

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the InventoryCountOutputType
     */
    select?: InventoryCountOutputTypeSelect | null
  }



  /**
   * Count Type LanguageCountOutputType
   */


  export type LanguageCountOutputType = {
    film_film_language_idTolanguage: number
    film_film_original_language_idTolanguage: number
  }

  export type LanguageCountOutputTypeSelect = {
    film_film_language_idTolanguage?: boolean
    film_film_original_language_idTolanguage?: boolean
  }

  export type LanguageCountOutputTypeGetPayload<S extends boolean | null | undefined | LanguageCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LanguageCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (LanguageCountOutputTypeArgs)
    ? LanguageCountOutputType 
    : S extends { select: any } & (LanguageCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof LanguageCountOutputType ? LanguageCountOutputType[P] : never
  } 
      : LanguageCountOutputType




  // Custom InputTypes

  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LanguageCountOutputType
     */
    select?: LanguageCountOutputTypeSelect | null
  }



  /**
   * Count Type RentalCountOutputType
   */


  export type RentalCountOutputType = {
    payment: number
  }

  export type RentalCountOutputTypeSelect = {
    payment?: boolean
  }

  export type RentalCountOutputTypeGetPayload<S extends boolean | null | undefined | RentalCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RentalCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RentalCountOutputTypeArgs)
    ? RentalCountOutputType 
    : S extends { select: any } & (RentalCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RentalCountOutputType ? RentalCountOutputType[P] : never
  } 
      : RentalCountOutputType




  // Custom InputTypes

  /**
   * RentalCountOutputType without action
   */
  export type RentalCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RentalCountOutputType
     */
    select?: RentalCountOutputTypeSelect | null
  }



  /**
   * Count Type StaffCountOutputType
   */


  export type StaffCountOutputType = {
    payment: number
    rental: number
  }

  export type StaffCountOutputTypeSelect = {
    payment?: boolean
    rental?: boolean
  }

  export type StaffCountOutputTypeGetPayload<S extends boolean | null | undefined | StaffCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? StaffCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (StaffCountOutputTypeArgs)
    ? StaffCountOutputType 
    : S extends { select: any } & (StaffCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof StaffCountOutputType ? StaffCountOutputType[P] : never
  } 
      : StaffCountOutputType




  // Custom InputTypes

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect | null
  }



  /**
   * Count Type StoreCountOutputType
   */


  export type StoreCountOutputType = {
    customer: number
    inventory: number
    staff_staff_store_idTostore: number
  }

  export type StoreCountOutputTypeSelect = {
    customer?: boolean
    inventory?: boolean
    staff_staff_store_idTostore?: boolean
  }

  export type StoreCountOutputTypeGetPayload<S extends boolean | null | undefined | StoreCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? StoreCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (StoreCountOutputTypeArgs)
    ? StoreCountOutputType 
    : S extends { select: any } & (StoreCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof StoreCountOutputType ? StoreCountOutputType[P] : never
  } 
      : StoreCountOutputType




  // Custom InputTypes

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model actor
   */


  export type AggregateActor = {
    _count: ActorCountAggregateOutputType | null
    _avg: ActorAvgAggregateOutputType | null
    _sum: ActorSumAggregateOutputType | null
    _min: ActorMinAggregateOutputType | null
    _max: ActorMaxAggregateOutputType | null
  }

  export type ActorAvgAggregateOutputType = {
    actor_id: number | null
  }

  export type ActorSumAggregateOutputType = {
    actor_id: number | null
  }

  export type ActorMinAggregateOutputType = {
    actor_id: number | null
    first_name: string | null
    last_name: string | null
    last_update: Date | null
  }

  export type ActorMaxAggregateOutputType = {
    actor_id: number | null
    first_name: string | null
    last_name: string | null
    last_update: Date | null
  }

  export type ActorCountAggregateOutputType = {
    actor_id: number
    first_name: number
    last_name: number
    last_update: number
    _all: number
  }


  export type ActorAvgAggregateInputType = {
    actor_id?: true
  }

  export type ActorSumAggregateInputType = {
    actor_id?: true
  }

  export type ActorMinAggregateInputType = {
    actor_id?: true
    first_name?: true
    last_name?: true
    last_update?: true
  }

  export type ActorMaxAggregateInputType = {
    actor_id?: true
    first_name?: true
    last_name?: true
    last_update?: true
  }

  export type ActorCountAggregateInputType = {
    actor_id?: true
    first_name?: true
    last_name?: true
    last_update?: true
    _all?: true
  }

  export type ActorAggregateArgs = {
    /**
     * Filter which actor to aggregate.
     */
    where?: actorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actors to fetch.
     */
    orderBy?: Enumerable<actorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: actorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned actors
    **/
    _count?: true | ActorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActorMaxAggregateInputType
  }

  export type GetActorAggregateType<T extends ActorAggregateArgs> = {
        [P in keyof T & keyof AggregateActor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActor[P]>
      : GetScalarType<T[P], AggregateActor[P]>
  }




  export type ActorGroupByArgs = {
    where?: actorWhereInput
    orderBy?: Enumerable<actorOrderByWithAggregationInput>
    by: ActorScalarFieldEnum[]
    having?: actorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActorCountAggregateInputType | true
    _avg?: ActorAvgAggregateInputType
    _sum?: ActorSumAggregateInputType
    _min?: ActorMinAggregateInputType
    _max?: ActorMaxAggregateInputType
  }


  export type ActorGroupByOutputType = {
    actor_id: number
    first_name: string
    last_name: string
    last_update: Date
    _count: ActorCountAggregateOutputType | null
    _avg: ActorAvgAggregateOutputType | null
    _sum: ActorSumAggregateOutputType | null
    _min: ActorMinAggregateOutputType | null
    _max: ActorMaxAggregateOutputType | null
  }

  type GetActorGroupByPayload<T extends ActorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ActorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActorGroupByOutputType[P]>
            : GetScalarType<T[P], ActorGroupByOutputType[P]>
        }
      >
    >


  export type actorSelect = {
    actor_id?: boolean
    first_name?: boolean
    last_name?: boolean
    last_update?: boolean
    film_actor?: boolean | actor$film_actorArgs
    _count?: boolean | ActorCountOutputTypeArgs
  }


  export type actorInclude = {
    film_actor?: boolean | actor$film_actorArgs
    _count?: boolean | ActorCountOutputTypeArgs
  }

  export type actorGetPayload<S extends boolean | null | undefined | actorArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? actor :
    S extends undefined ? never :
    S extends { include: any } & (actorArgs | actorFindManyArgs)
    ? actor  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'film_actor' ? Array < film_actorGetPayload<S['include'][P]>>  :
        P extends '_count' ? ActorCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (actorArgs | actorFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'film_actor' ? Array < film_actorGetPayload<S['select'][P]>>  :
        P extends '_count' ? ActorCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof actor ? actor[P] : never
  } 
      : actor


  type actorCountArgs = 
    Omit<actorFindManyArgs, 'select' | 'include'> & {
      select?: ActorCountAggregateInputType | true
    }

  export interface actorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Actor that matches the filter.
     * @param {actorFindUniqueArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends actorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, actorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'actor'> extends True ? Prisma__actorClient<actorGetPayload<T>> : Prisma__actorClient<actorGetPayload<T> | null, null>

    /**
     * Find one Actor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {actorFindUniqueOrThrowArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends actorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, actorFindUniqueOrThrowArgs>
    ): Prisma__actorClient<actorGetPayload<T>>

    /**
     * Find the first Actor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actorFindFirstArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends actorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, actorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'actor'> extends True ? Prisma__actorClient<actorGetPayload<T>> : Prisma__actorClient<actorGetPayload<T> | null, null>

    /**
     * Find the first Actor that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actorFindFirstOrThrowArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends actorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, actorFindFirstOrThrowArgs>
    ): Prisma__actorClient<actorGetPayload<T>>

    /**
     * Find zero or more Actors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actors
     * const actors = await prisma.actor.findMany()
     * 
     * // Get first 10 Actors
     * const actors = await prisma.actor.findMany({ take: 10 })
     * 
     * // Only select the `actor_id`
     * const actorWithActor_idOnly = await prisma.actor.findMany({ select: { actor_id: true } })
     * 
    **/
    findMany<T extends actorFindManyArgs>(
      args?: SelectSubset<T, actorFindManyArgs>
    ): Prisma.PrismaPromise<Array<actorGetPayload<T>>>

    /**
     * Create a Actor.
     * @param {actorCreateArgs} args - Arguments to create a Actor.
     * @example
     * // Create one Actor
     * const Actor = await prisma.actor.create({
     *   data: {
     *     // ... data to create a Actor
     *   }
     * })
     * 
    **/
    create<T extends actorCreateArgs>(
      args: SelectSubset<T, actorCreateArgs>
    ): Prisma__actorClient<actorGetPayload<T>>

    /**
     * Create many Actors.
     *     @param {actorCreateManyArgs} args - Arguments to create many Actors.
     *     @example
     *     // Create many Actors
     *     const actor = await prisma.actor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends actorCreateManyArgs>(
      args?: SelectSubset<T, actorCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Actor.
     * @param {actorDeleteArgs} args - Arguments to delete one Actor.
     * @example
     * // Delete one Actor
     * const Actor = await prisma.actor.delete({
     *   where: {
     *     // ... filter to delete one Actor
     *   }
     * })
     * 
    **/
    delete<T extends actorDeleteArgs>(
      args: SelectSubset<T, actorDeleteArgs>
    ): Prisma__actorClient<actorGetPayload<T>>

    /**
     * Update one Actor.
     * @param {actorUpdateArgs} args - Arguments to update one Actor.
     * @example
     * // Update one Actor
     * const actor = await prisma.actor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends actorUpdateArgs>(
      args: SelectSubset<T, actorUpdateArgs>
    ): Prisma__actorClient<actorGetPayload<T>>

    /**
     * Delete zero or more Actors.
     * @param {actorDeleteManyArgs} args - Arguments to filter Actors to delete.
     * @example
     * // Delete a few Actors
     * const { count } = await prisma.actor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends actorDeleteManyArgs>(
      args?: SelectSubset<T, actorDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actors
     * const actor = await prisma.actor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends actorUpdateManyArgs>(
      args: SelectSubset<T, actorUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Actor.
     * @param {actorUpsertArgs} args - Arguments to update or create a Actor.
     * @example
     * // Update or create a Actor
     * const actor = await prisma.actor.upsert({
     *   create: {
     *     // ... data to create a Actor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actor we want to update
     *   }
     * })
    **/
    upsert<T extends actorUpsertArgs>(
      args: SelectSubset<T, actorUpsertArgs>
    ): Prisma__actorClient<actorGetPayload<T>>

    /**
     * Count the number of Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actorCountArgs} args - Arguments to filter Actors to count.
     * @example
     * // Count the number of Actors
     * const count = await prisma.actor.count({
     *   where: {
     *     // ... the filter for the Actors we want to count
     *   }
     * })
    **/
    count<T extends actorCountArgs>(
      args?: Subset<T, actorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActorAggregateArgs>(args: Subset<T, ActorAggregateArgs>): Prisma.PrismaPromise<GetActorAggregateType<T>>

    /**
     * Group by Actor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActorGroupByArgs['orderBy'] }
        : { orderBy?: ActorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for actor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__actorClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    film_actor<T extends actor$film_actorArgs= {}>(args?: Subset<T, actor$film_actorArgs>): Prisma.PrismaPromise<Array<film_actorGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * actor base type for findUnique actions
   */
  export type actorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the actor
     */
    select?: actorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: actorInclude | null
    /**
     * Filter, which actor to fetch.
     */
    where: actorWhereUniqueInput
  }

  /**
   * actor findUnique
   */
  export interface actorFindUniqueArgs extends actorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * actor findUniqueOrThrow
   */
  export type actorFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the actor
     */
    select?: actorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: actorInclude | null
    /**
     * Filter, which actor to fetch.
     */
    where: actorWhereUniqueInput
  }


  /**
   * actor base type for findFirst actions
   */
  export type actorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the actor
     */
    select?: actorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: actorInclude | null
    /**
     * Filter, which actor to fetch.
     */
    where?: actorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actors to fetch.
     */
    orderBy?: Enumerable<actorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for actors.
     */
    cursor?: actorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of actors.
     */
    distinct?: Enumerable<ActorScalarFieldEnum>
  }

  /**
   * actor findFirst
   */
  export interface actorFindFirstArgs extends actorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * actor findFirstOrThrow
   */
  export type actorFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the actor
     */
    select?: actorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: actorInclude | null
    /**
     * Filter, which actor to fetch.
     */
    where?: actorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actors to fetch.
     */
    orderBy?: Enumerable<actorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for actors.
     */
    cursor?: actorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of actors.
     */
    distinct?: Enumerable<ActorScalarFieldEnum>
  }


  /**
   * actor findMany
   */
  export type actorFindManyArgs = {
    /**
     * Select specific fields to fetch from the actor
     */
    select?: actorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: actorInclude | null
    /**
     * Filter, which actors to fetch.
     */
    where?: actorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actors to fetch.
     */
    orderBy?: Enumerable<actorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing actors.
     */
    cursor?: actorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actors.
     */
    skip?: number
    distinct?: Enumerable<ActorScalarFieldEnum>
  }


  /**
   * actor create
   */
  export type actorCreateArgs = {
    /**
     * Select specific fields to fetch from the actor
     */
    select?: actorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: actorInclude | null
    /**
     * The data needed to create a actor.
     */
    data: XOR<actorCreateInput, actorUncheckedCreateInput>
  }


  /**
   * actor createMany
   */
  export type actorCreateManyArgs = {
    /**
     * The data used to create many actors.
     */
    data: Enumerable<actorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * actor update
   */
  export type actorUpdateArgs = {
    /**
     * Select specific fields to fetch from the actor
     */
    select?: actorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: actorInclude | null
    /**
     * The data needed to update a actor.
     */
    data: XOR<actorUpdateInput, actorUncheckedUpdateInput>
    /**
     * Choose, which actor to update.
     */
    where: actorWhereUniqueInput
  }


  /**
   * actor updateMany
   */
  export type actorUpdateManyArgs = {
    /**
     * The data used to update actors.
     */
    data: XOR<actorUpdateManyMutationInput, actorUncheckedUpdateManyInput>
    /**
     * Filter which actors to update
     */
    where?: actorWhereInput
  }


  /**
   * actor upsert
   */
  export type actorUpsertArgs = {
    /**
     * Select specific fields to fetch from the actor
     */
    select?: actorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: actorInclude | null
    /**
     * The filter to search for the actor to update in case it exists.
     */
    where: actorWhereUniqueInput
    /**
     * In case the actor found by the `where` argument doesn't exist, create a new actor with this data.
     */
    create: XOR<actorCreateInput, actorUncheckedCreateInput>
    /**
     * In case the actor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<actorUpdateInput, actorUncheckedUpdateInput>
  }


  /**
   * actor delete
   */
  export type actorDeleteArgs = {
    /**
     * Select specific fields to fetch from the actor
     */
    select?: actorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: actorInclude | null
    /**
     * Filter which actor to delete.
     */
    where: actorWhereUniqueInput
  }


  /**
   * actor deleteMany
   */
  export type actorDeleteManyArgs = {
    /**
     * Filter which actors to delete
     */
    where?: actorWhereInput
  }


  /**
   * actor.film_actor
   */
  export type actor$film_actorArgs = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_actorInclude | null
    where?: film_actorWhereInput
    orderBy?: Enumerable<film_actorOrderByWithRelationInput>
    cursor?: film_actorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Film_actorScalarFieldEnum>
  }


  /**
   * actor without action
   */
  export type actorArgs = {
    /**
     * Select specific fields to fetch from the actor
     */
    select?: actorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: actorInclude | null
  }



  /**
   * Model address
   */


  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    address_id: number | null
    city_id: number | null
  }

  export type AddressSumAggregateOutputType = {
    address_id: number | null
    city_id: number | null
  }

  export type AddressMinAggregateOutputType = {
    address_id: number | null
    address: string | null
    address2: string | null
    district: string | null
    city_id: number | null
    postal_code: string | null
    phone: string | null
    last_update: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    address_id: number | null
    address: string | null
    address2: string | null
    district: string | null
    city_id: number | null
    postal_code: string | null
    phone: string | null
    last_update: Date | null
  }

  export type AddressCountAggregateOutputType = {
    address_id: number
    address: number
    address2: number
    district: number
    city_id: number
    postal_code: number
    phone: number
    last_update: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    address_id?: true
    city_id?: true
  }

  export type AddressSumAggregateInputType = {
    address_id?: true
    city_id?: true
  }

  export type AddressMinAggregateInputType = {
    address_id?: true
    address?: true
    address2?: true
    district?: true
    city_id?: true
    postal_code?: true
    phone?: true
    last_update?: true
  }

  export type AddressMaxAggregateInputType = {
    address_id?: true
    address?: true
    address2?: true
    district?: true
    city_id?: true
    postal_code?: true
    phone?: true
    last_update?: true
  }

  export type AddressCountAggregateInputType = {
    address_id?: true
    address?: true
    address2?: true
    district?: true
    city_id?: true
    postal_code?: true
    phone?: true
    last_update?: true
    _all?: true
  }

  export type AddressAggregateArgs = {
    /**
     * Filter which address to aggregate.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: Enumerable<addressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs = {
    where?: addressWhereInput
    orderBy?: Enumerable<addressOrderByWithAggregationInput>
    by: AddressScalarFieldEnum[]
    having?: addressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }


  export type AddressGroupByOutputType = {
    address_id: number
    address: string
    address2: string | null
    district: string
    city_id: number
    postal_code: string | null
    phone: string
    last_update: Date
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type addressSelect = {
    address_id?: boolean
    address?: boolean
    address2?: boolean
    district?: boolean
    city_id?: boolean
    postal_code?: boolean
    phone?: boolean
    last_update?: boolean
    city?: boolean | cityArgs
    customer?: boolean | address$customerArgs
    staff?: boolean | address$staffArgs
    store?: boolean | address$storeArgs
    _count?: boolean | AddressCountOutputTypeArgs
  }


  export type addressInclude = {
    city?: boolean | cityArgs
    customer?: boolean | address$customerArgs
    staff?: boolean | address$staffArgs
    store?: boolean | address$storeArgs
    _count?: boolean | AddressCountOutputTypeArgs
  }

  export type addressGetPayload<S extends boolean | null | undefined | addressArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? address :
    S extends undefined ? never :
    S extends { include: any } & (addressArgs | addressFindManyArgs)
    ? address  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'city' ? cityGetPayload<S['include'][P]> :
        P extends 'customer' ? Array < customerGetPayload<S['include'][P]>>  :
        P extends 'staff' ? Array < staffGetPayload<S['include'][P]>>  :
        P extends 'store' ? Array < storeGetPayload<S['include'][P]>>  :
        P extends '_count' ? AddressCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (addressArgs | addressFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'city' ? cityGetPayload<S['select'][P]> :
        P extends 'customer' ? Array < customerGetPayload<S['select'][P]>>  :
        P extends 'staff' ? Array < staffGetPayload<S['select'][P]>>  :
        P extends 'store' ? Array < storeGetPayload<S['select'][P]>>  :
        P extends '_count' ? AddressCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof address ? address[P] : never
  } 
      : address


  type addressCountArgs = 
    Omit<addressFindManyArgs, 'select' | 'include'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface addressDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Address that matches the filter.
     * @param {addressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends addressFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, addressFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'address'> extends True ? Prisma__addressClient<addressGetPayload<T>> : Prisma__addressClient<addressGetPayload<T> | null, null>

    /**
     * Find one Address that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {addressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends addressFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, addressFindUniqueOrThrowArgs>
    ): Prisma__addressClient<addressGetPayload<T>>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends addressFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, addressFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'address'> extends True ? Prisma__addressClient<addressGetPayload<T>> : Prisma__addressClient<addressGetPayload<T> | null, null>

    /**
     * Find the first Address that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends addressFindFirstOrThrowArgs>(
      args?: SelectSubset<T, addressFindFirstOrThrowArgs>
    ): Prisma__addressClient<addressGetPayload<T>>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `address_id`
     * const addressWithAddress_idOnly = await prisma.address.findMany({ select: { address_id: true } })
     * 
    **/
    findMany<T extends addressFindManyArgs>(
      args?: SelectSubset<T, addressFindManyArgs>
    ): Prisma.PrismaPromise<Array<addressGetPayload<T>>>

    /**
     * Delete a Address.
     * @param {addressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
    **/
    delete<T extends addressDeleteArgs>(
      args: SelectSubset<T, addressDeleteArgs>
    ): Prisma__addressClient<addressGetPayload<T>>

    /**
     * Update one Address.
     * @param {addressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends addressUpdateArgs>(
      args: SelectSubset<T, addressUpdateArgs>
    ): Prisma__addressClient<addressGetPayload<T>>

    /**
     * Delete zero or more Addresses.
     * @param {addressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends addressDeleteManyArgs>(
      args?: SelectSubset<T, addressDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends addressUpdateManyArgs>(
      args: SelectSubset<T, addressUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends addressCountArgs>(
      args?: Subset<T, addressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__addressClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    city<T extends cityArgs= {}>(args?: Subset<T, cityArgs>): Prisma__cityClient<cityGetPayload<T> | Null>;

    customer<T extends address$customerArgs= {}>(args?: Subset<T, address$customerArgs>): Prisma.PrismaPromise<Array<customerGetPayload<T>>| Null>;

    staff<T extends address$staffArgs= {}>(args?: Subset<T, address$staffArgs>): Prisma.PrismaPromise<Array<staffGetPayload<T>>| Null>;

    store<T extends address$storeArgs= {}>(args?: Subset<T, address$storeArgs>): Prisma.PrismaPromise<Array<storeGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * address base type for findUnique actions
   */
  export type addressFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addressInclude | null
    /**
     * Filter, which address to fetch.
     */
    where: addressWhereUniqueInput
  }

  /**
   * address findUnique
   */
  export interface addressFindUniqueArgs extends addressFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * address findUniqueOrThrow
   */
  export type addressFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addressInclude | null
    /**
     * Filter, which address to fetch.
     */
    where: addressWhereUniqueInput
  }


  /**
   * address base type for findFirst actions
   */
  export type addressFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addressInclude | null
    /**
     * Filter, which address to fetch.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: Enumerable<addressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: Enumerable<AddressScalarFieldEnum>
  }

  /**
   * address findFirst
   */
  export interface addressFindFirstArgs extends addressFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * address findFirstOrThrow
   */
  export type addressFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addressInclude | null
    /**
     * Filter, which address to fetch.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: Enumerable<addressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * address findMany
   */
  export type addressFindManyArgs = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addressInclude | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: Enumerable<addressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing addresses.
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * address update
   */
  export type addressUpdateArgs = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addressInclude | null
    /**
     * The data needed to update a address.
     */
    data: XOR<addressUpdateInput, addressUncheckedUpdateInput>
    /**
     * Choose, which address to update.
     */
    where: addressWhereUniqueInput
  }


  /**
   * address updateMany
   */
  export type addressUpdateManyArgs = {
    /**
     * The data used to update addresses.
     */
    data: XOR<addressUpdateManyMutationInput, addressUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressWhereInput
  }


  /**
   * address delete
   */
  export type addressDeleteArgs = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addressInclude | null
    /**
     * Filter which address to delete.
     */
    where: addressWhereUniqueInput
  }


  /**
   * address deleteMany
   */
  export type addressDeleteManyArgs = {
    /**
     * Filter which addresses to delete
     */
    where?: addressWhereInput
  }


  /**
   * address.customer
   */
  export type address$customerArgs = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude | null
    where?: customerWhereInput
    orderBy?: Enumerable<customerOrderByWithRelationInput>
    cursor?: customerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * address.staff
   */
  export type address$staffArgs = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude | null
    where?: staffWhereInput
    orderBy?: Enumerable<staffOrderByWithRelationInput>
    cursor?: staffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<StaffScalarFieldEnum>
  }


  /**
   * address.store
   */
  export type address$storeArgs = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude | null
    where?: storeWhereInput
    orderBy?: Enumerable<storeOrderByWithRelationInput>
    cursor?: storeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<StoreScalarFieldEnum>
  }


  /**
   * address without action
   */
  export type addressArgs = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addressInclude | null
  }



  /**
   * Model category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    category_id: number | null
  }

  export type CategorySumAggregateOutputType = {
    category_id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    category_id: number | null
    name: string | null
    last_update: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    category_id: number | null
    name: string | null
    last_update: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    category_id: number
    name: number
    last_update: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    category_id?: true
  }

  export type CategorySumAggregateInputType = {
    category_id?: true
  }

  export type CategoryMinAggregateInputType = {
    category_id?: true
    name?: true
    last_update?: true
  }

  export type CategoryMaxAggregateInputType = {
    category_id?: true
    name?: true
    last_update?: true
  }

  export type CategoryCountAggregateInputType = {
    category_id?: true
    name?: true
    last_update?: true
    _all?: true
  }

  export type CategoryAggregateArgs = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: Enumerable<categoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs = {
    where?: categoryWhereInput
    orderBy?: Enumerable<categoryOrderByWithAggregationInput>
    by: CategoryScalarFieldEnum[]
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    category_id: number
    name: string
    last_update: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect = {
    category_id?: boolean
    name?: boolean
    last_update?: boolean
    film_category?: boolean | category$film_categoryArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }


  export type categoryInclude = {
    film_category?: boolean | category$film_categoryArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }

  export type categoryGetPayload<S extends boolean | null | undefined | categoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? category :
    S extends undefined ? never :
    S extends { include: any } & (categoryArgs | categoryFindManyArgs)
    ? category  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'film_category' ? Array < film_categoryGetPayload<S['include'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (categoryArgs | categoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'film_category' ? Array < film_categoryGetPayload<S['select'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof category ? category[P] : never
  } 
      : category


  type categoryCountArgs = 
    Omit<categoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends categoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, categoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'category'> extends True ? Prisma__categoryClient<categoryGetPayload<T>> : Prisma__categoryClient<categoryGetPayload<T> | null, null>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, categoryFindUniqueOrThrowArgs>
    ): Prisma__categoryClient<categoryGetPayload<T>>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends categoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, categoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'category'> extends True ? Prisma__categoryClient<categoryGetPayload<T>> : Prisma__categoryClient<categoryGetPayload<T> | null, null>

    /**
     * Find the first Category that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, categoryFindFirstOrThrowArgs>
    ): Prisma__categoryClient<categoryGetPayload<T>>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const categoryWithCategory_idOnly = await prisma.category.findMany({ select: { category_id: true } })
     * 
    **/
    findMany<T extends categoryFindManyArgs>(
      args?: SelectSubset<T, categoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<categoryGetPayload<T>>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends categoryCreateArgs>(
      args: SelectSubset<T, categoryCreateArgs>
    ): Prisma__categoryClient<categoryGetPayload<T>>

    /**
     * Create many Categories.
     *     @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends categoryCreateManyArgs>(
      args?: SelectSubset<T, categoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends categoryDeleteArgs>(
      args: SelectSubset<T, categoryDeleteArgs>
    ): Prisma__categoryClient<categoryGetPayload<T>>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends categoryUpdateArgs>(
      args: SelectSubset<T, categoryUpdateArgs>
    ): Prisma__categoryClient<categoryGetPayload<T>>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends categoryDeleteManyArgs>(
      args?: SelectSubset<T, categoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends categoryUpdateManyArgs>(
      args: SelectSubset<T, categoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends categoryUpsertArgs>(
      args: SelectSubset<T, categoryUpsertArgs>
    ): Prisma__categoryClient<categoryGetPayload<T>>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__categoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    film_category<T extends category$film_categoryArgs= {}>(args?: Subset<T, category$film_categoryArgs>): Prisma.PrismaPromise<Array<film_categoryGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * category base type for findUnique actions
   */
  export type categoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUnique
   */
  export interface categoryFindUniqueArgs extends categoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }


  /**
   * category base type for findFirst actions
   */
  export type categoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: Enumerable<categoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }

  /**
   * category findFirst
   */
  export interface categoryFindFirstArgs extends categoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: Enumerable<categoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * category findMany
   */
  export type categoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: Enumerable<categoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * category create
   */
  export type categoryCreateArgs = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }


  /**
   * category createMany
   */
  export type categoryCreateManyArgs = {
    /**
     * The data used to create many categories.
     */
    data: Enumerable<categoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * category update
   */
  export type categoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }


  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
  }


  /**
   * category upsert
   */
  export type categoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }


  /**
   * category delete
   */
  export type categoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }


  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
  }


  /**
   * category.film_category
   */
  export type category$film_categoryArgs = {
    /**
     * Select specific fields to fetch from the film_category
     */
    select?: film_categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_categoryInclude | null
    where?: film_categoryWhereInput
    orderBy?: Enumerable<film_categoryOrderByWithRelationInput>
    cursor?: film_categoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Film_categoryScalarFieldEnum>
  }


  /**
   * category without action
   */
  export type categoryArgs = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude | null
  }



  /**
   * Model city
   */


  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityAvgAggregateOutputType = {
    city_id: number | null
    country_id: number | null
  }

  export type CitySumAggregateOutputType = {
    city_id: number | null
    country_id: number | null
  }

  export type CityMinAggregateOutputType = {
    city_id: number | null
    city: string | null
    country_id: number | null
    last_update: Date | null
  }

  export type CityMaxAggregateOutputType = {
    city_id: number | null
    city: string | null
    country_id: number | null
    last_update: Date | null
  }

  export type CityCountAggregateOutputType = {
    city_id: number
    city: number
    country_id: number
    last_update: number
    _all: number
  }


  export type CityAvgAggregateInputType = {
    city_id?: true
    country_id?: true
  }

  export type CitySumAggregateInputType = {
    city_id?: true
    country_id?: true
  }

  export type CityMinAggregateInputType = {
    city_id?: true
    city?: true
    country_id?: true
    last_update?: true
  }

  export type CityMaxAggregateInputType = {
    city_id?: true
    city?: true
    country_id?: true
    last_update?: true
  }

  export type CityCountAggregateInputType = {
    city_id?: true
    city?: true
    country_id?: true
    last_update?: true
    _all?: true
  }

  export type CityAggregateArgs = {
    /**
     * Filter which city to aggregate.
     */
    where?: cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: Enumerable<cityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs = {
    where?: cityWhereInput
    orderBy?: Enumerable<cityOrderByWithAggregationInput>
    by: CityScalarFieldEnum[]
    having?: cityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _avg?: CityAvgAggregateInputType
    _sum?: CitySumAggregateInputType
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }


  export type CityGroupByOutputType = {
    city_id: number
    city: string
    country_id: number
    last_update: Date
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type citySelect = {
    city_id?: boolean
    city?: boolean
    country_id?: boolean
    last_update?: boolean
    address?: boolean | city$addressArgs
    country?: boolean | countryArgs
    _count?: boolean | CityCountOutputTypeArgs
  }


  export type cityInclude = {
    address?: boolean | city$addressArgs
    country?: boolean | countryArgs
    _count?: boolean | CityCountOutputTypeArgs
  }

  export type cityGetPayload<S extends boolean | null | undefined | cityArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? city :
    S extends undefined ? never :
    S extends { include: any } & (cityArgs | cityFindManyArgs)
    ? city  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'address' ? Array < addressGetPayload<S['include'][P]>>  :
        P extends 'country' ? countryGetPayload<S['include'][P]> :
        P extends '_count' ? CityCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (cityArgs | cityFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'address' ? Array < addressGetPayload<S['select'][P]>>  :
        P extends 'country' ? countryGetPayload<S['select'][P]> :
        P extends '_count' ? CityCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof city ? city[P] : never
  } 
      : city


  type cityCountArgs = 
    Omit<cityFindManyArgs, 'select' | 'include'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface cityDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one City that matches the filter.
     * @param {cityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cityFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, cityFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'city'> extends True ? Prisma__cityClient<cityGetPayload<T>> : Prisma__cityClient<cityGetPayload<T> | null, null>

    /**
     * Find one City that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cityFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, cityFindUniqueOrThrowArgs>
    ): Prisma__cityClient<cityGetPayload<T>>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cityFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, cityFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'city'> extends True ? Prisma__cityClient<cityGetPayload<T>> : Prisma__cityClient<cityGetPayload<T> | null, null>

    /**
     * Find the first City that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cityFindFirstOrThrowArgs>(
      args?: SelectSubset<T, cityFindFirstOrThrowArgs>
    ): Prisma__cityClient<cityGetPayload<T>>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `city_id`
     * const cityWithCity_idOnly = await prisma.city.findMany({ select: { city_id: true } })
     * 
    **/
    findMany<T extends cityFindManyArgs>(
      args?: SelectSubset<T, cityFindManyArgs>
    ): Prisma.PrismaPromise<Array<cityGetPayload<T>>>

    /**
     * Create a City.
     * @param {cityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
    **/
    create<T extends cityCreateArgs>(
      args: SelectSubset<T, cityCreateArgs>
    ): Prisma__cityClient<cityGetPayload<T>>

    /**
     * Create many Cities.
     *     @param {cityCreateManyArgs} args - Arguments to create many Cities.
     *     @example
     *     // Create many Cities
     *     const city = await prisma.city.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cityCreateManyArgs>(
      args?: SelectSubset<T, cityCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a City.
     * @param {cityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
    **/
    delete<T extends cityDeleteArgs>(
      args: SelectSubset<T, cityDeleteArgs>
    ): Prisma__cityClient<cityGetPayload<T>>

    /**
     * Update one City.
     * @param {cityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cityUpdateArgs>(
      args: SelectSubset<T, cityUpdateArgs>
    ): Prisma__cityClient<cityGetPayload<T>>

    /**
     * Delete zero or more Cities.
     * @param {cityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cityDeleteManyArgs>(
      args?: SelectSubset<T, cityDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cityUpdateManyArgs>(
      args: SelectSubset<T, cityUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one City.
     * @param {cityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
    **/
    upsert<T extends cityUpsertArgs>(
      args: SelectSubset<T, cityUpsertArgs>
    ): Prisma__cityClient<cityGetPayload<T>>

    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends cityCountArgs>(
      args?: Subset<T, cityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for city.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__cityClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    address<T extends city$addressArgs= {}>(args?: Subset<T, city$addressArgs>): Prisma.PrismaPromise<Array<addressGetPayload<T>>| Null>;

    country<T extends countryArgs= {}>(args?: Subset<T, countryArgs>): Prisma__countryClient<countryGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * city base type for findUnique actions
   */
  export type cityFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude | null
    /**
     * Filter, which city to fetch.
     */
    where: cityWhereUniqueInput
  }

  /**
   * city findUnique
   */
  export interface cityFindUniqueArgs extends cityFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * city findUniqueOrThrow
   */
  export type cityFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude | null
    /**
     * Filter, which city to fetch.
     */
    where: cityWhereUniqueInput
  }


  /**
   * city base type for findFirst actions
   */
  export type cityFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude | null
    /**
     * Filter, which city to fetch.
     */
    where?: cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: Enumerable<cityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     */
    cursor?: cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: Enumerable<CityScalarFieldEnum>
  }

  /**
   * city findFirst
   */
  export interface cityFindFirstArgs extends cityFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * city findFirstOrThrow
   */
  export type cityFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude | null
    /**
     * Filter, which city to fetch.
     */
    where?: cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: Enumerable<cityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     */
    cursor?: cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: Enumerable<CityScalarFieldEnum>
  }


  /**
   * city findMany
   */
  export type cityFindManyArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude | null
    /**
     * Filter, which cities to fetch.
     */
    where?: cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: Enumerable<cityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cities.
     */
    cursor?: cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    distinct?: Enumerable<CityScalarFieldEnum>
  }


  /**
   * city create
   */
  export type cityCreateArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude | null
    /**
     * The data needed to create a city.
     */
    data: XOR<cityCreateInput, cityUncheckedCreateInput>
  }


  /**
   * city createMany
   */
  export type cityCreateManyArgs = {
    /**
     * The data used to create many cities.
     */
    data: Enumerable<cityCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * city update
   */
  export type cityUpdateArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude | null
    /**
     * The data needed to update a city.
     */
    data: XOR<cityUpdateInput, cityUncheckedUpdateInput>
    /**
     * Choose, which city to update.
     */
    where: cityWhereUniqueInput
  }


  /**
   * city updateMany
   */
  export type cityUpdateManyArgs = {
    /**
     * The data used to update cities.
     */
    data: XOR<cityUpdateManyMutationInput, cityUncheckedUpdateManyInput>
    /**
     * Filter which cities to update
     */
    where?: cityWhereInput
  }


  /**
   * city upsert
   */
  export type cityUpsertArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude | null
    /**
     * The filter to search for the city to update in case it exists.
     */
    where: cityWhereUniqueInput
    /**
     * In case the city found by the `where` argument doesn't exist, create a new city with this data.
     */
    create: XOR<cityCreateInput, cityUncheckedCreateInput>
    /**
     * In case the city was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cityUpdateInput, cityUncheckedUpdateInput>
  }


  /**
   * city delete
   */
  export type cityDeleteArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude | null
    /**
     * Filter which city to delete.
     */
    where: cityWhereUniqueInput
  }


  /**
   * city deleteMany
   */
  export type cityDeleteManyArgs = {
    /**
     * Filter which cities to delete
     */
    where?: cityWhereInput
  }


  /**
   * city.address
   */
  export type city$addressArgs = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addressInclude | null
    where?: addressWhereInput
    orderBy?: Enumerable<addressOrderByWithRelationInput>
    cursor?: addressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * city without action
   */
  export type cityArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude | null
  }



  /**
   * Model country
   */


  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryAvgAggregateOutputType = {
    country_id: number | null
  }

  export type CountrySumAggregateOutputType = {
    country_id: number | null
  }

  export type CountryMinAggregateOutputType = {
    country_id: number | null
    country: string | null
    last_update: Date | null
  }

  export type CountryMaxAggregateOutputType = {
    country_id: number | null
    country: string | null
    last_update: Date | null
  }

  export type CountryCountAggregateOutputType = {
    country_id: number
    country: number
    last_update: number
    _all: number
  }


  export type CountryAvgAggregateInputType = {
    country_id?: true
  }

  export type CountrySumAggregateInputType = {
    country_id?: true
  }

  export type CountryMinAggregateInputType = {
    country_id?: true
    country?: true
    last_update?: true
  }

  export type CountryMaxAggregateInputType = {
    country_id?: true
    country?: true
    last_update?: true
  }

  export type CountryCountAggregateInputType = {
    country_id?: true
    country?: true
    last_update?: true
    _all?: true
  }

  export type CountryAggregateArgs = {
    /**
     * Filter which country to aggregate.
     */
    where?: countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: Enumerable<countryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs = {
    where?: countryWhereInput
    orderBy?: Enumerable<countryOrderByWithAggregationInput>
    by: CountryScalarFieldEnum[]
    having?: countryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _avg?: CountryAvgAggregateInputType
    _sum?: CountrySumAggregateInputType
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }


  export type CountryGroupByOutputType = {
    country_id: number
    country: string
    last_update: Date
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type countrySelect = {
    country_id?: boolean
    country?: boolean
    last_update?: boolean
    city?: boolean | country$cityArgs
    _count?: boolean | CountryCountOutputTypeArgs
  }


  export type countryInclude = {
    city?: boolean | country$cityArgs
    _count?: boolean | CountryCountOutputTypeArgs
  }

  export type countryGetPayload<S extends boolean | null | undefined | countryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? country :
    S extends undefined ? never :
    S extends { include: any } & (countryArgs | countryFindManyArgs)
    ? country  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'city' ? Array < cityGetPayload<S['include'][P]>>  :
        P extends '_count' ? CountryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (countryArgs | countryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'city' ? Array < cityGetPayload<S['select'][P]>>  :
        P extends '_count' ? CountryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof country ? country[P] : never
  } 
      : country


  type countryCountArgs = 
    Omit<countryFindManyArgs, 'select' | 'include'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface countryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Country that matches the filter.
     * @param {countryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends countryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, countryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'country'> extends True ? Prisma__countryClient<countryGetPayload<T>> : Prisma__countryClient<countryGetPayload<T> | null, null>

    /**
     * Find one Country that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {countryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends countryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, countryFindUniqueOrThrowArgs>
    ): Prisma__countryClient<countryGetPayload<T>>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends countryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, countryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'country'> extends True ? Prisma__countryClient<countryGetPayload<T>> : Prisma__countryClient<countryGetPayload<T> | null, null>

    /**
     * Find the first Country that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends countryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, countryFindFirstOrThrowArgs>
    ): Prisma__countryClient<countryGetPayload<T>>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `country_id`
     * const countryWithCountry_idOnly = await prisma.country.findMany({ select: { country_id: true } })
     * 
    **/
    findMany<T extends countryFindManyArgs>(
      args?: SelectSubset<T, countryFindManyArgs>
    ): Prisma.PrismaPromise<Array<countryGetPayload<T>>>

    /**
     * Create a Country.
     * @param {countryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
    **/
    create<T extends countryCreateArgs>(
      args: SelectSubset<T, countryCreateArgs>
    ): Prisma__countryClient<countryGetPayload<T>>

    /**
     * Create many Countries.
     *     @param {countryCreateManyArgs} args - Arguments to create many Countries.
     *     @example
     *     // Create many Countries
     *     const country = await prisma.country.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends countryCreateManyArgs>(
      args?: SelectSubset<T, countryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Country.
     * @param {countryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
    **/
    delete<T extends countryDeleteArgs>(
      args: SelectSubset<T, countryDeleteArgs>
    ): Prisma__countryClient<countryGetPayload<T>>

    /**
     * Update one Country.
     * @param {countryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends countryUpdateArgs>(
      args: SelectSubset<T, countryUpdateArgs>
    ): Prisma__countryClient<countryGetPayload<T>>

    /**
     * Delete zero or more Countries.
     * @param {countryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends countryDeleteManyArgs>(
      args?: SelectSubset<T, countryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends countryUpdateManyArgs>(
      args: SelectSubset<T, countryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Country.
     * @param {countryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
    **/
    upsert<T extends countryUpsertArgs>(
      args: SelectSubset<T, countryUpsertArgs>
    ): Prisma__countryClient<countryGetPayload<T>>

    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends countryCountArgs>(
      args?: Subset<T, countryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__countryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    city<T extends country$cityArgs= {}>(args?: Subset<T, country$cityArgs>): Prisma.PrismaPromise<Array<cityGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * country base type for findUnique actions
   */
  export type countryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: countryInclude | null
    /**
     * Filter, which country to fetch.
     */
    where: countryWhereUniqueInput
  }

  /**
   * country findUnique
   */
  export interface countryFindUniqueArgs extends countryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * country findUniqueOrThrow
   */
  export type countryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: countryInclude | null
    /**
     * Filter, which country to fetch.
     */
    where: countryWhereUniqueInput
  }


  /**
   * country base type for findFirst actions
   */
  export type countryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: countryInclude | null
    /**
     * Filter, which country to fetch.
     */
    where?: countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: Enumerable<countryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countries.
     */
    cursor?: countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countries.
     */
    distinct?: Enumerable<CountryScalarFieldEnum>
  }

  /**
   * country findFirst
   */
  export interface countryFindFirstArgs extends countryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * country findFirstOrThrow
   */
  export type countryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: countryInclude | null
    /**
     * Filter, which country to fetch.
     */
    where?: countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: Enumerable<countryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countries.
     */
    cursor?: countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countries.
     */
    distinct?: Enumerable<CountryScalarFieldEnum>
  }


  /**
   * country findMany
   */
  export type countryFindManyArgs = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: countryInclude | null
    /**
     * Filter, which countries to fetch.
     */
    where?: countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: Enumerable<countryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing countries.
     */
    cursor?: countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    distinct?: Enumerable<CountryScalarFieldEnum>
  }


  /**
   * country create
   */
  export type countryCreateArgs = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: countryInclude | null
    /**
     * The data needed to create a country.
     */
    data: XOR<countryCreateInput, countryUncheckedCreateInput>
  }


  /**
   * country createMany
   */
  export type countryCreateManyArgs = {
    /**
     * The data used to create many countries.
     */
    data: Enumerable<countryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * country update
   */
  export type countryUpdateArgs = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: countryInclude | null
    /**
     * The data needed to update a country.
     */
    data: XOR<countryUpdateInput, countryUncheckedUpdateInput>
    /**
     * Choose, which country to update.
     */
    where: countryWhereUniqueInput
  }


  /**
   * country updateMany
   */
  export type countryUpdateManyArgs = {
    /**
     * The data used to update countries.
     */
    data: XOR<countryUpdateManyMutationInput, countryUncheckedUpdateManyInput>
    /**
     * Filter which countries to update
     */
    where?: countryWhereInput
  }


  /**
   * country upsert
   */
  export type countryUpsertArgs = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: countryInclude | null
    /**
     * The filter to search for the country to update in case it exists.
     */
    where: countryWhereUniqueInput
    /**
     * In case the country found by the `where` argument doesn't exist, create a new country with this data.
     */
    create: XOR<countryCreateInput, countryUncheckedCreateInput>
    /**
     * In case the country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<countryUpdateInput, countryUncheckedUpdateInput>
  }


  /**
   * country delete
   */
  export type countryDeleteArgs = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: countryInclude | null
    /**
     * Filter which country to delete.
     */
    where: countryWhereUniqueInput
  }


  /**
   * country deleteMany
   */
  export type countryDeleteManyArgs = {
    /**
     * Filter which countries to delete
     */
    where?: countryWhereInput
  }


  /**
   * country.city
   */
  export type country$cityArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude | null
    where?: cityWhereInput
    orderBy?: Enumerable<cityOrderByWithRelationInput>
    cursor?: cityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CityScalarFieldEnum>
  }


  /**
   * country without action
   */
  export type countryArgs = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: countryInclude | null
  }



  /**
   * Model customer
   */


  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    customer_id: number | null
    store_id: number | null
    address_id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    customer_id: number | null
    store_id: number | null
    address_id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    customer_id: number | null
    store_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    address_id: number | null
    active: boolean | null
    create_date: Date | null
    last_update: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    customer_id: number | null
    store_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    address_id: number | null
    active: boolean | null
    create_date: Date | null
    last_update: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    customer_id: number
    store_id: number
    first_name: number
    last_name: number
    email: number
    address_id: number
    active: number
    create_date: number
    last_update: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    customer_id?: true
    store_id?: true
    address_id?: true
  }

  export type CustomerSumAggregateInputType = {
    customer_id?: true
    store_id?: true
    address_id?: true
  }

  export type CustomerMinAggregateInputType = {
    customer_id?: true
    store_id?: true
    first_name?: true
    last_name?: true
    email?: true
    address_id?: true
    active?: true
    create_date?: true
    last_update?: true
  }

  export type CustomerMaxAggregateInputType = {
    customer_id?: true
    store_id?: true
    first_name?: true
    last_name?: true
    email?: true
    address_id?: true
    active?: true
    create_date?: true
    last_update?: true
  }

  export type CustomerCountAggregateInputType = {
    customer_id?: true
    store_id?: true
    first_name?: true
    last_name?: true
    email?: true
    address_id?: true
    active?: true
    create_date?: true
    last_update?: true
    _all?: true
  }

  export type CustomerAggregateArgs = {
    /**
     * Filter which customer to aggregate.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: Enumerable<customerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs = {
    where?: customerWhereInput
    orderBy?: Enumerable<customerOrderByWithAggregationInput>
    by: CustomerScalarFieldEnum[]
    having?: customerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }


  export type CustomerGroupByOutputType = {
    customer_id: number
    store_id: number
    first_name: string
    last_name: string
    email: string | null
    address_id: number
    active: boolean
    create_date: Date
    last_update: Date | null
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type customerSelect = {
    customer_id?: boolean
    store_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    address_id?: boolean
    active?: boolean
    create_date?: boolean
    last_update?: boolean
    address?: boolean | addressArgs
    store?: boolean | storeArgs
    payment?: boolean | customer$paymentArgs
    rental?: boolean | customer$rentalArgs
    _count?: boolean | CustomerCountOutputTypeArgs
  }


  export type customerInclude = {
    address?: boolean | addressArgs
    store?: boolean | storeArgs
    payment?: boolean | customer$paymentArgs
    rental?: boolean | customer$rentalArgs
    _count?: boolean | CustomerCountOutputTypeArgs
  }

  export type customerGetPayload<S extends boolean | null | undefined | customerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? customer :
    S extends undefined ? never :
    S extends { include: any } & (customerArgs | customerFindManyArgs)
    ? customer  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'address' ? addressGetPayload<S['include'][P]> :
        P extends 'store' ? storeGetPayload<S['include'][P]> :
        P extends 'payment' ? Array < paymentGetPayload<S['include'][P]>>  :
        P extends 'rental' ? Array < rentalGetPayload<S['include'][P]>>  :
        P extends '_count' ? CustomerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (customerArgs | customerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'address' ? addressGetPayload<S['select'][P]> :
        P extends 'store' ? storeGetPayload<S['select'][P]> :
        P extends 'payment' ? Array < paymentGetPayload<S['select'][P]>>  :
        P extends 'rental' ? Array < rentalGetPayload<S['select'][P]>>  :
        P extends '_count' ? CustomerCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof customer ? customer[P] : never
  } 
      : customer


  type customerCountArgs = 
    Omit<customerFindManyArgs, 'select' | 'include'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface customerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Customer that matches the filter.
     * @param {customerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends customerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, customerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'customer'> extends True ? Prisma__customerClient<customerGetPayload<T>> : Prisma__customerClient<customerGetPayload<T> | null, null>

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {customerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends customerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, customerFindUniqueOrThrowArgs>
    ): Prisma__customerClient<customerGetPayload<T>>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends customerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, customerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'customer'> extends True ? Prisma__customerClient<customerGetPayload<T>> : Prisma__customerClient<customerGetPayload<T> | null, null>

    /**
     * Find the first Customer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends customerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, customerFindFirstOrThrowArgs>
    ): Prisma__customerClient<customerGetPayload<T>>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `customer_id`
     * const customerWithCustomer_idOnly = await prisma.customer.findMany({ select: { customer_id: true } })
     * 
    **/
    findMany<T extends customerFindManyArgs>(
      args?: SelectSubset<T, customerFindManyArgs>
    ): Prisma.PrismaPromise<Array<customerGetPayload<T>>>

    /**
     * Create a Customer.
     * @param {customerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
    **/
    create<T extends customerCreateArgs>(
      args: SelectSubset<T, customerCreateArgs>
    ): Prisma__customerClient<customerGetPayload<T>>

    /**
     * Create many Customers.
     *     @param {customerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends customerCreateManyArgs>(
      args?: SelectSubset<T, customerCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {customerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
    **/
    delete<T extends customerDeleteArgs>(
      args: SelectSubset<T, customerDeleteArgs>
    ): Prisma__customerClient<customerGetPayload<T>>

    /**
     * Update one Customer.
     * @param {customerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends customerUpdateArgs>(
      args: SelectSubset<T, customerUpdateArgs>
    ): Prisma__customerClient<customerGetPayload<T>>

    /**
     * Delete zero or more Customers.
     * @param {customerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends customerDeleteManyArgs>(
      args?: SelectSubset<T, customerDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends customerUpdateManyArgs>(
      args: SelectSubset<T, customerUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {customerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
    **/
    upsert<T extends customerUpsertArgs>(
      args: SelectSubset<T, customerUpsertArgs>
    ): Prisma__customerClient<customerGetPayload<T>>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customerCountArgs>(
      args?: Subset<T, customerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__customerClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    address<T extends addressArgs= {}>(args?: Subset<T, addressArgs>): Prisma__addressClient<addressGetPayload<T> | Null>;

    store<T extends storeArgs= {}>(args?: Subset<T, storeArgs>): Prisma__storeClient<storeGetPayload<T> | Null>;

    payment<T extends customer$paymentArgs= {}>(args?: Subset<T, customer$paymentArgs>): Prisma.PrismaPromise<Array<paymentGetPayload<T>>| Null>;

    rental<T extends customer$rentalArgs= {}>(args?: Subset<T, customer$rentalArgs>): Prisma.PrismaPromise<Array<rentalGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * customer base type for findUnique actions
   */
  export type customerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findUnique
   */
  export interface customerFindUniqueArgs extends customerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * customer findUniqueOrThrow
   */
  export type customerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }


  /**
   * customer base type for findFirst actions
   */
  export type customerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: Enumerable<customerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }

  /**
   * customer findFirst
   */
  export interface customerFindFirstArgs extends customerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * customer findFirstOrThrow
   */
  export type customerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: Enumerable<customerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * customer findMany
   */
  export type customerFindManyArgs = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: Enumerable<customerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * customer create
   */
  export type customerCreateArgs = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude | null
    /**
     * The data needed to create a customer.
     */
    data: XOR<customerCreateInput, customerUncheckedCreateInput>
  }


  /**
   * customer createMany
   */
  export type customerCreateManyArgs = {
    /**
     * The data used to create many customers.
     */
    data: Enumerable<customerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * customer update
   */
  export type customerUpdateArgs = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude | null
    /**
     * The data needed to update a customer.
     */
    data: XOR<customerUpdateInput, customerUncheckedUpdateInput>
    /**
     * Choose, which customer to update.
     */
    where: customerWhereUniqueInput
  }


  /**
   * customer updateMany
   */
  export type customerUpdateManyArgs = {
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput
  }


  /**
   * customer upsert
   */
  export type customerUpsertArgs = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude | null
    /**
     * The filter to search for the customer to update in case it exists.
     */
    where: customerWhereUniqueInput
    /**
     * In case the customer found by the `where` argument doesn't exist, create a new customer with this data.
     */
    create: XOR<customerCreateInput, customerUncheckedCreateInput>
    /**
     * In case the customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customerUpdateInput, customerUncheckedUpdateInput>
  }


  /**
   * customer delete
   */
  export type customerDeleteArgs = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude | null
    /**
     * Filter which customer to delete.
     */
    where: customerWhereUniqueInput
  }


  /**
   * customer deleteMany
   */
  export type customerDeleteManyArgs = {
    /**
     * Filter which customers to delete
     */
    where?: customerWhereInput
  }


  /**
   * customer.payment
   */
  export type customer$paymentArgs = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude | null
    where?: paymentWhereInput
    orderBy?: Enumerable<paymentOrderByWithRelationInput>
    cursor?: paymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PaymentScalarFieldEnum>
  }


  /**
   * customer.rental
   */
  export type customer$rentalArgs = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude | null
    where?: rentalWhereInput
    orderBy?: Enumerable<rentalOrderByWithRelationInput>
    cursor?: rentalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RentalScalarFieldEnum>
  }


  /**
   * customer without action
   */
  export type customerArgs = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude | null
  }



  /**
   * Model film
   */


  export type AggregateFilm = {
    _count: FilmCountAggregateOutputType | null
    _avg: FilmAvgAggregateOutputType | null
    _sum: FilmSumAggregateOutputType | null
    _min: FilmMinAggregateOutputType | null
    _max: FilmMaxAggregateOutputType | null
  }

  export type FilmAvgAggregateOutputType = {
    film_id: number | null
    release_year: number | null
    language_id: number | null
    original_language_id: number | null
    rental_duration: number | null
    rental_rate: Decimal | null
    length: number | null
    replacement_cost: Decimal | null
  }

  export type FilmSumAggregateOutputType = {
    film_id: number | null
    release_year: number | null
    language_id: number | null
    original_language_id: number | null
    rental_duration: number | null
    rental_rate: Decimal | null
    length: number | null
    replacement_cost: Decimal | null
  }

  export type FilmMinAggregateOutputType = {
    film_id: number | null
    title: string | null
    description: string | null
    release_year: number | null
    language_id: number | null
    original_language_id: number | null
    rental_duration: number | null
    rental_rate: Decimal | null
    length: number | null
    replacement_cost: Decimal | null
    rating: film_rating | null
    special_features: string | null
    last_update: Date | null
  }

  export type FilmMaxAggregateOutputType = {
    film_id: number | null
    title: string | null
    description: string | null
    release_year: number | null
    language_id: number | null
    original_language_id: number | null
    rental_duration: number | null
    rental_rate: Decimal | null
    length: number | null
    replacement_cost: Decimal | null
    rating: film_rating | null
    special_features: string | null
    last_update: Date | null
  }

  export type FilmCountAggregateOutputType = {
    film_id: number
    title: number
    description: number
    release_year: number
    language_id: number
    original_language_id: number
    rental_duration: number
    rental_rate: number
    length: number
    replacement_cost: number
    rating: number
    special_features: number
    last_update: number
    _all: number
  }


  export type FilmAvgAggregateInputType = {
    film_id?: true
    release_year?: true
    language_id?: true
    original_language_id?: true
    rental_duration?: true
    rental_rate?: true
    length?: true
    replacement_cost?: true
  }

  export type FilmSumAggregateInputType = {
    film_id?: true
    release_year?: true
    language_id?: true
    original_language_id?: true
    rental_duration?: true
    rental_rate?: true
    length?: true
    replacement_cost?: true
  }

  export type FilmMinAggregateInputType = {
    film_id?: true
    title?: true
    description?: true
    release_year?: true
    language_id?: true
    original_language_id?: true
    rental_duration?: true
    rental_rate?: true
    length?: true
    replacement_cost?: true
    rating?: true
    special_features?: true
    last_update?: true
  }

  export type FilmMaxAggregateInputType = {
    film_id?: true
    title?: true
    description?: true
    release_year?: true
    language_id?: true
    original_language_id?: true
    rental_duration?: true
    rental_rate?: true
    length?: true
    replacement_cost?: true
    rating?: true
    special_features?: true
    last_update?: true
  }

  export type FilmCountAggregateInputType = {
    film_id?: true
    title?: true
    description?: true
    release_year?: true
    language_id?: true
    original_language_id?: true
    rental_duration?: true
    rental_rate?: true
    length?: true
    replacement_cost?: true
    rating?: true
    special_features?: true
    last_update?: true
    _all?: true
  }

  export type FilmAggregateArgs = {
    /**
     * Filter which film to aggregate.
     */
    where?: filmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of films to fetch.
     */
    orderBy?: Enumerable<filmOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: filmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` films.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned films
    **/
    _count?: true | FilmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilmMaxAggregateInputType
  }

  export type GetFilmAggregateType<T extends FilmAggregateArgs> = {
        [P in keyof T & keyof AggregateFilm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilm[P]>
      : GetScalarType<T[P], AggregateFilm[P]>
  }




  export type FilmGroupByArgs = {
    where?: filmWhereInput
    orderBy?: Enumerable<filmOrderByWithAggregationInput>
    by: FilmScalarFieldEnum[]
    having?: filmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilmCountAggregateInputType | true
    _avg?: FilmAvgAggregateInputType
    _sum?: FilmSumAggregateInputType
    _min?: FilmMinAggregateInputType
    _max?: FilmMaxAggregateInputType
  }


  export type FilmGroupByOutputType = {
    film_id: number
    title: string
    description: string | null
    release_year: number | null
    language_id: number
    original_language_id: number | null
    rental_duration: number
    rental_rate: Decimal
    length: number | null
    replacement_cost: Decimal
    rating: film_rating | null
    special_features: string | null
    last_update: Date
    _count: FilmCountAggregateOutputType | null
    _avg: FilmAvgAggregateOutputType | null
    _sum: FilmSumAggregateOutputType | null
    _min: FilmMinAggregateOutputType | null
    _max: FilmMaxAggregateOutputType | null
  }

  type GetFilmGroupByPayload<T extends FilmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FilmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilmGroupByOutputType[P]>
            : GetScalarType<T[P], FilmGroupByOutputType[P]>
        }
      >
    >


  export type filmSelect = {
    film_id?: boolean
    title?: boolean
    description?: boolean
    release_year?: boolean
    language_id?: boolean
    original_language_id?: boolean
    rental_duration?: boolean
    rental_rate?: boolean
    length?: boolean
    replacement_cost?: boolean
    rating?: boolean
    special_features?: boolean
    last_update?: boolean
    language_film_language_idTolanguage?: boolean | languageArgs
    language_film_original_language_idTolanguage?: boolean | languageArgs
    film_actor?: boolean | film$film_actorArgs
    film_category?: boolean | film$film_categoryArgs
    inventory?: boolean | film$inventoryArgs
    _count?: boolean | FilmCountOutputTypeArgs
  }


  export type filmInclude = {
    language_film_language_idTolanguage?: boolean | languageArgs
    language_film_original_language_idTolanguage?: boolean | languageArgs
    film_actor?: boolean | film$film_actorArgs
    film_category?: boolean | film$film_categoryArgs
    inventory?: boolean | film$inventoryArgs
    _count?: boolean | FilmCountOutputTypeArgs
  }

  export type filmGetPayload<S extends boolean | null | undefined | filmArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? film :
    S extends undefined ? never :
    S extends { include: any } & (filmArgs | filmFindManyArgs)
    ? film  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'language_film_language_idTolanguage' ? languageGetPayload<S['include'][P]> :
        P extends 'language_film_original_language_idTolanguage' ? languageGetPayload<S['include'][P]> | null :
        P extends 'film_actor' ? Array < film_actorGetPayload<S['include'][P]>>  :
        P extends 'film_category' ? Array < film_categoryGetPayload<S['include'][P]>>  :
        P extends 'inventory' ? Array < inventoryGetPayload<S['include'][P]>>  :
        P extends '_count' ? FilmCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (filmArgs | filmFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'language_film_language_idTolanguage' ? languageGetPayload<S['select'][P]> :
        P extends 'language_film_original_language_idTolanguage' ? languageGetPayload<S['select'][P]> | null :
        P extends 'film_actor' ? Array < film_actorGetPayload<S['select'][P]>>  :
        P extends 'film_category' ? Array < film_categoryGetPayload<S['select'][P]>>  :
        P extends 'inventory' ? Array < inventoryGetPayload<S['select'][P]>>  :
        P extends '_count' ? FilmCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof film ? film[P] : never
  } 
      : film


  type filmCountArgs = 
    Omit<filmFindManyArgs, 'select' | 'include'> & {
      select?: FilmCountAggregateInputType | true
    }

  export interface filmDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Film that matches the filter.
     * @param {filmFindUniqueArgs} args - Arguments to find a Film
     * @example
     * // Get one Film
     * const film = await prisma.film.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends filmFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, filmFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'film'> extends True ? Prisma__filmClient<filmGetPayload<T>> : Prisma__filmClient<filmGetPayload<T> | null, null>

    /**
     * Find one Film that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {filmFindUniqueOrThrowArgs} args - Arguments to find a Film
     * @example
     * // Get one Film
     * const film = await prisma.film.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends filmFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, filmFindUniqueOrThrowArgs>
    ): Prisma__filmClient<filmGetPayload<T>>

    /**
     * Find the first Film that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmFindFirstArgs} args - Arguments to find a Film
     * @example
     * // Get one Film
     * const film = await prisma.film.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends filmFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, filmFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'film'> extends True ? Prisma__filmClient<filmGetPayload<T>> : Prisma__filmClient<filmGetPayload<T> | null, null>

    /**
     * Find the first Film that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmFindFirstOrThrowArgs} args - Arguments to find a Film
     * @example
     * // Get one Film
     * const film = await prisma.film.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends filmFindFirstOrThrowArgs>(
      args?: SelectSubset<T, filmFindFirstOrThrowArgs>
    ): Prisma__filmClient<filmGetPayload<T>>

    /**
     * Find zero or more Films that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Films
     * const films = await prisma.film.findMany()
     * 
     * // Get first 10 Films
     * const films = await prisma.film.findMany({ take: 10 })
     * 
     * // Only select the `film_id`
     * const filmWithFilm_idOnly = await prisma.film.findMany({ select: { film_id: true } })
     * 
    **/
    findMany<T extends filmFindManyArgs>(
      args?: SelectSubset<T, filmFindManyArgs>
    ): Prisma.PrismaPromise<Array<filmGetPayload<T>>>

    /**
     * Create a Film.
     * @param {filmCreateArgs} args - Arguments to create a Film.
     * @example
     * // Create one Film
     * const Film = await prisma.film.create({
     *   data: {
     *     // ... data to create a Film
     *   }
     * })
     * 
    **/
    create<T extends filmCreateArgs>(
      args: SelectSubset<T, filmCreateArgs>
    ): Prisma__filmClient<filmGetPayload<T>>

    /**
     * Create many Films.
     *     @param {filmCreateManyArgs} args - Arguments to create many Films.
     *     @example
     *     // Create many Films
     *     const film = await prisma.film.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends filmCreateManyArgs>(
      args?: SelectSubset<T, filmCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Film.
     * @param {filmDeleteArgs} args - Arguments to delete one Film.
     * @example
     * // Delete one Film
     * const Film = await prisma.film.delete({
     *   where: {
     *     // ... filter to delete one Film
     *   }
     * })
     * 
    **/
    delete<T extends filmDeleteArgs>(
      args: SelectSubset<T, filmDeleteArgs>
    ): Prisma__filmClient<filmGetPayload<T>>

    /**
     * Update one Film.
     * @param {filmUpdateArgs} args - Arguments to update one Film.
     * @example
     * // Update one Film
     * const film = await prisma.film.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends filmUpdateArgs>(
      args: SelectSubset<T, filmUpdateArgs>
    ): Prisma__filmClient<filmGetPayload<T>>

    /**
     * Delete zero or more Films.
     * @param {filmDeleteManyArgs} args - Arguments to filter Films to delete.
     * @example
     * // Delete a few Films
     * const { count } = await prisma.film.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends filmDeleteManyArgs>(
      args?: SelectSubset<T, filmDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Films.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Films
     * const film = await prisma.film.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends filmUpdateManyArgs>(
      args: SelectSubset<T, filmUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Film.
     * @param {filmUpsertArgs} args - Arguments to update or create a Film.
     * @example
     * // Update or create a Film
     * const film = await prisma.film.upsert({
     *   create: {
     *     // ... data to create a Film
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Film we want to update
     *   }
     * })
    **/
    upsert<T extends filmUpsertArgs>(
      args: SelectSubset<T, filmUpsertArgs>
    ): Prisma__filmClient<filmGetPayload<T>>

    /**
     * Count the number of Films.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmCountArgs} args - Arguments to filter Films to count.
     * @example
     * // Count the number of Films
     * const count = await prisma.film.count({
     *   where: {
     *     // ... the filter for the Films we want to count
     *   }
     * })
    **/
    count<T extends filmCountArgs>(
      args?: Subset<T, filmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Film.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FilmAggregateArgs>(args: Subset<T, FilmAggregateArgs>): Prisma.PrismaPromise<GetFilmAggregateType<T>>

    /**
     * Group by Film.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FilmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilmGroupByArgs['orderBy'] }
        : { orderBy?: FilmGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FilmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for film.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__filmClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    language_film_language_idTolanguage<T extends languageArgs= {}>(args?: Subset<T, languageArgs>): Prisma__languageClient<languageGetPayload<T> | Null>;

    language_film_original_language_idTolanguage<T extends languageArgs= {}>(args?: Subset<T, languageArgs>): Prisma__languageClient<languageGetPayload<T> | Null>;

    film_actor<T extends film$film_actorArgs= {}>(args?: Subset<T, film$film_actorArgs>): Prisma.PrismaPromise<Array<film_actorGetPayload<T>>| Null>;

    film_category<T extends film$film_categoryArgs= {}>(args?: Subset<T, film$film_categoryArgs>): Prisma.PrismaPromise<Array<film_categoryGetPayload<T>>| Null>;

    inventory<T extends film$inventoryArgs= {}>(args?: Subset<T, film$inventoryArgs>): Prisma.PrismaPromise<Array<inventoryGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * film base type for findUnique actions
   */
  export type filmFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filmInclude | null
    /**
     * Filter, which film to fetch.
     */
    where: filmWhereUniqueInput
  }

  /**
   * film findUnique
   */
  export interface filmFindUniqueArgs extends filmFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * film findUniqueOrThrow
   */
  export type filmFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filmInclude | null
    /**
     * Filter, which film to fetch.
     */
    where: filmWhereUniqueInput
  }


  /**
   * film base type for findFirst actions
   */
  export type filmFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filmInclude | null
    /**
     * Filter, which film to fetch.
     */
    where?: filmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of films to fetch.
     */
    orderBy?: Enumerable<filmOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for films.
     */
    cursor?: filmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` films.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of films.
     */
    distinct?: Enumerable<FilmScalarFieldEnum>
  }

  /**
   * film findFirst
   */
  export interface filmFindFirstArgs extends filmFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * film findFirstOrThrow
   */
  export type filmFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filmInclude | null
    /**
     * Filter, which film to fetch.
     */
    where?: filmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of films to fetch.
     */
    orderBy?: Enumerable<filmOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for films.
     */
    cursor?: filmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` films.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of films.
     */
    distinct?: Enumerable<FilmScalarFieldEnum>
  }


  /**
   * film findMany
   */
  export type filmFindManyArgs = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filmInclude | null
    /**
     * Filter, which films to fetch.
     */
    where?: filmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of films to fetch.
     */
    orderBy?: Enumerable<filmOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing films.
     */
    cursor?: filmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` films.
     */
    skip?: number
    distinct?: Enumerable<FilmScalarFieldEnum>
  }


  /**
   * film create
   */
  export type filmCreateArgs = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filmInclude | null
    /**
     * The data needed to create a film.
     */
    data: XOR<filmCreateInput, filmUncheckedCreateInput>
  }


  /**
   * film createMany
   */
  export type filmCreateManyArgs = {
    /**
     * The data used to create many films.
     */
    data: Enumerable<filmCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * film update
   */
  export type filmUpdateArgs = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filmInclude | null
    /**
     * The data needed to update a film.
     */
    data: XOR<filmUpdateInput, filmUncheckedUpdateInput>
    /**
     * Choose, which film to update.
     */
    where: filmWhereUniqueInput
  }


  /**
   * film updateMany
   */
  export type filmUpdateManyArgs = {
    /**
     * The data used to update films.
     */
    data: XOR<filmUpdateManyMutationInput, filmUncheckedUpdateManyInput>
    /**
     * Filter which films to update
     */
    where?: filmWhereInput
  }


  /**
   * film upsert
   */
  export type filmUpsertArgs = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filmInclude | null
    /**
     * The filter to search for the film to update in case it exists.
     */
    where: filmWhereUniqueInput
    /**
     * In case the film found by the `where` argument doesn't exist, create a new film with this data.
     */
    create: XOR<filmCreateInput, filmUncheckedCreateInput>
    /**
     * In case the film was found with the provided `where` argument, update it with this data.
     */
    update: XOR<filmUpdateInput, filmUncheckedUpdateInput>
  }


  /**
   * film delete
   */
  export type filmDeleteArgs = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filmInclude | null
    /**
     * Filter which film to delete.
     */
    where: filmWhereUniqueInput
  }


  /**
   * film deleteMany
   */
  export type filmDeleteManyArgs = {
    /**
     * Filter which films to delete
     */
    where?: filmWhereInput
  }


  /**
   * film.film_actor
   */
  export type film$film_actorArgs = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_actorInclude | null
    where?: film_actorWhereInput
    orderBy?: Enumerable<film_actorOrderByWithRelationInput>
    cursor?: film_actorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Film_actorScalarFieldEnum>
  }


  /**
   * film.film_category
   */
  export type film$film_categoryArgs = {
    /**
     * Select specific fields to fetch from the film_category
     */
    select?: film_categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_categoryInclude | null
    where?: film_categoryWhereInput
    orderBy?: Enumerable<film_categoryOrderByWithRelationInput>
    cursor?: film_categoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Film_categoryScalarFieldEnum>
  }


  /**
   * film.inventory
   */
  export type film$inventoryArgs = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude | null
    where?: inventoryWhereInput
    orderBy?: Enumerable<inventoryOrderByWithRelationInput>
    cursor?: inventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<InventoryScalarFieldEnum>
  }


  /**
   * film without action
   */
  export type filmArgs = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filmInclude | null
  }



  /**
   * Model film_actor
   */


  export type AggregateFilm_actor = {
    _count: Film_actorCountAggregateOutputType | null
    _avg: Film_actorAvgAggregateOutputType | null
    _sum: Film_actorSumAggregateOutputType | null
    _min: Film_actorMinAggregateOutputType | null
    _max: Film_actorMaxAggregateOutputType | null
  }

  export type Film_actorAvgAggregateOutputType = {
    actor_id: number | null
    film_id: number | null
  }

  export type Film_actorSumAggregateOutputType = {
    actor_id: number | null
    film_id: number | null
  }

  export type Film_actorMinAggregateOutputType = {
    actor_id: number | null
    film_id: number | null
    last_update: Date | null
  }

  export type Film_actorMaxAggregateOutputType = {
    actor_id: number | null
    film_id: number | null
    last_update: Date | null
  }

  export type Film_actorCountAggregateOutputType = {
    actor_id: number
    film_id: number
    last_update: number
    _all: number
  }


  export type Film_actorAvgAggregateInputType = {
    actor_id?: true
    film_id?: true
  }

  export type Film_actorSumAggregateInputType = {
    actor_id?: true
    film_id?: true
  }

  export type Film_actorMinAggregateInputType = {
    actor_id?: true
    film_id?: true
    last_update?: true
  }

  export type Film_actorMaxAggregateInputType = {
    actor_id?: true
    film_id?: true
    last_update?: true
  }

  export type Film_actorCountAggregateInputType = {
    actor_id?: true
    film_id?: true
    last_update?: true
    _all?: true
  }

  export type Film_actorAggregateArgs = {
    /**
     * Filter which film_actor to aggregate.
     */
    where?: film_actorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_actors to fetch.
     */
    orderBy?: Enumerable<film_actorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: film_actorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned film_actors
    **/
    _count?: true | Film_actorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Film_actorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Film_actorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Film_actorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Film_actorMaxAggregateInputType
  }

  export type GetFilm_actorAggregateType<T extends Film_actorAggregateArgs> = {
        [P in keyof T & keyof AggregateFilm_actor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilm_actor[P]>
      : GetScalarType<T[P], AggregateFilm_actor[P]>
  }




  export type Film_actorGroupByArgs = {
    where?: film_actorWhereInput
    orderBy?: Enumerable<film_actorOrderByWithAggregationInput>
    by: Film_actorScalarFieldEnum[]
    having?: film_actorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Film_actorCountAggregateInputType | true
    _avg?: Film_actorAvgAggregateInputType
    _sum?: Film_actorSumAggregateInputType
    _min?: Film_actorMinAggregateInputType
    _max?: Film_actorMaxAggregateInputType
  }


  export type Film_actorGroupByOutputType = {
    actor_id: number
    film_id: number
    last_update: Date
    _count: Film_actorCountAggregateOutputType | null
    _avg: Film_actorAvgAggregateOutputType | null
    _sum: Film_actorSumAggregateOutputType | null
    _min: Film_actorMinAggregateOutputType | null
    _max: Film_actorMaxAggregateOutputType | null
  }

  type GetFilm_actorGroupByPayload<T extends Film_actorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Film_actorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Film_actorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Film_actorGroupByOutputType[P]>
            : GetScalarType<T[P], Film_actorGroupByOutputType[P]>
        }
      >
    >


  export type film_actorSelect = {
    actor_id?: boolean
    film_id?: boolean
    last_update?: boolean
    actor?: boolean | actorArgs
    film?: boolean | filmArgs
  }


  export type film_actorInclude = {
    actor?: boolean | actorArgs
    film?: boolean | filmArgs
  }

  export type film_actorGetPayload<S extends boolean | null | undefined | film_actorArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? film_actor :
    S extends undefined ? never :
    S extends { include: any } & (film_actorArgs | film_actorFindManyArgs)
    ? film_actor  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'actor' ? actorGetPayload<S['include'][P]> :
        P extends 'film' ? filmGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (film_actorArgs | film_actorFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'actor' ? actorGetPayload<S['select'][P]> :
        P extends 'film' ? filmGetPayload<S['select'][P]> :  P extends keyof film_actor ? film_actor[P] : never
  } 
      : film_actor


  type film_actorCountArgs = 
    Omit<film_actorFindManyArgs, 'select' | 'include'> & {
      select?: Film_actorCountAggregateInputType | true
    }

  export interface film_actorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Film_actor that matches the filter.
     * @param {film_actorFindUniqueArgs} args - Arguments to find a Film_actor
     * @example
     * // Get one Film_actor
     * const film_actor = await prisma.film_actor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends film_actorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, film_actorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'film_actor'> extends True ? Prisma__film_actorClient<film_actorGetPayload<T>> : Prisma__film_actorClient<film_actorGetPayload<T> | null, null>

    /**
     * Find one Film_actor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {film_actorFindUniqueOrThrowArgs} args - Arguments to find a Film_actor
     * @example
     * // Get one Film_actor
     * const film_actor = await prisma.film_actor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends film_actorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, film_actorFindUniqueOrThrowArgs>
    ): Prisma__film_actorClient<film_actorGetPayload<T>>

    /**
     * Find the first Film_actor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_actorFindFirstArgs} args - Arguments to find a Film_actor
     * @example
     * // Get one Film_actor
     * const film_actor = await prisma.film_actor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends film_actorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, film_actorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'film_actor'> extends True ? Prisma__film_actorClient<film_actorGetPayload<T>> : Prisma__film_actorClient<film_actorGetPayload<T> | null, null>

    /**
     * Find the first Film_actor that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_actorFindFirstOrThrowArgs} args - Arguments to find a Film_actor
     * @example
     * // Get one Film_actor
     * const film_actor = await prisma.film_actor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends film_actorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, film_actorFindFirstOrThrowArgs>
    ): Prisma__film_actorClient<film_actorGetPayload<T>>

    /**
     * Find zero or more Film_actors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_actorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Film_actors
     * const film_actors = await prisma.film_actor.findMany()
     * 
     * // Get first 10 Film_actors
     * const film_actors = await prisma.film_actor.findMany({ take: 10 })
     * 
     * // Only select the `actor_id`
     * const film_actorWithActor_idOnly = await prisma.film_actor.findMany({ select: { actor_id: true } })
     * 
    **/
    findMany<T extends film_actorFindManyArgs>(
      args?: SelectSubset<T, film_actorFindManyArgs>
    ): Prisma.PrismaPromise<Array<film_actorGetPayload<T>>>

    /**
     * Create a Film_actor.
     * @param {film_actorCreateArgs} args - Arguments to create a Film_actor.
     * @example
     * // Create one Film_actor
     * const Film_actor = await prisma.film_actor.create({
     *   data: {
     *     // ... data to create a Film_actor
     *   }
     * })
     * 
    **/
    create<T extends film_actorCreateArgs>(
      args: SelectSubset<T, film_actorCreateArgs>
    ): Prisma__film_actorClient<film_actorGetPayload<T>>

    /**
     * Create many Film_actors.
     *     @param {film_actorCreateManyArgs} args - Arguments to create many Film_actors.
     *     @example
     *     // Create many Film_actors
     *     const film_actor = await prisma.film_actor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends film_actorCreateManyArgs>(
      args?: SelectSubset<T, film_actorCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Film_actor.
     * @param {film_actorDeleteArgs} args - Arguments to delete one Film_actor.
     * @example
     * // Delete one Film_actor
     * const Film_actor = await prisma.film_actor.delete({
     *   where: {
     *     // ... filter to delete one Film_actor
     *   }
     * })
     * 
    **/
    delete<T extends film_actorDeleteArgs>(
      args: SelectSubset<T, film_actorDeleteArgs>
    ): Prisma__film_actorClient<film_actorGetPayload<T>>

    /**
     * Update one Film_actor.
     * @param {film_actorUpdateArgs} args - Arguments to update one Film_actor.
     * @example
     * // Update one Film_actor
     * const film_actor = await prisma.film_actor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends film_actorUpdateArgs>(
      args: SelectSubset<T, film_actorUpdateArgs>
    ): Prisma__film_actorClient<film_actorGetPayload<T>>

    /**
     * Delete zero or more Film_actors.
     * @param {film_actorDeleteManyArgs} args - Arguments to filter Film_actors to delete.
     * @example
     * // Delete a few Film_actors
     * const { count } = await prisma.film_actor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends film_actorDeleteManyArgs>(
      args?: SelectSubset<T, film_actorDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Film_actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_actorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Film_actors
     * const film_actor = await prisma.film_actor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends film_actorUpdateManyArgs>(
      args: SelectSubset<T, film_actorUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Film_actor.
     * @param {film_actorUpsertArgs} args - Arguments to update or create a Film_actor.
     * @example
     * // Update or create a Film_actor
     * const film_actor = await prisma.film_actor.upsert({
     *   create: {
     *     // ... data to create a Film_actor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Film_actor we want to update
     *   }
     * })
    **/
    upsert<T extends film_actorUpsertArgs>(
      args: SelectSubset<T, film_actorUpsertArgs>
    ): Prisma__film_actorClient<film_actorGetPayload<T>>

    /**
     * Count the number of Film_actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_actorCountArgs} args - Arguments to filter Film_actors to count.
     * @example
     * // Count the number of Film_actors
     * const count = await prisma.film_actor.count({
     *   where: {
     *     // ... the filter for the Film_actors we want to count
     *   }
     * })
    **/
    count<T extends film_actorCountArgs>(
      args?: Subset<T, film_actorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Film_actorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Film_actor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Film_actorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Film_actorAggregateArgs>(args: Subset<T, Film_actorAggregateArgs>): Prisma.PrismaPromise<GetFilm_actorAggregateType<T>>

    /**
     * Group by Film_actor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Film_actorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Film_actorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Film_actorGroupByArgs['orderBy'] }
        : { orderBy?: Film_actorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Film_actorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilm_actorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for film_actor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__film_actorClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    actor<T extends actorArgs= {}>(args?: Subset<T, actorArgs>): Prisma__actorClient<actorGetPayload<T> | Null>;

    film<T extends filmArgs= {}>(args?: Subset<T, filmArgs>): Prisma__filmClient<filmGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * film_actor base type for findUnique actions
   */
  export type film_actorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_actorInclude | null
    /**
     * Filter, which film_actor to fetch.
     */
    where: film_actorWhereUniqueInput
  }

  /**
   * film_actor findUnique
   */
  export interface film_actorFindUniqueArgs extends film_actorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * film_actor findUniqueOrThrow
   */
  export type film_actorFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_actorInclude | null
    /**
     * Filter, which film_actor to fetch.
     */
    where: film_actorWhereUniqueInput
  }


  /**
   * film_actor base type for findFirst actions
   */
  export type film_actorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_actorInclude | null
    /**
     * Filter, which film_actor to fetch.
     */
    where?: film_actorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_actors to fetch.
     */
    orderBy?: Enumerable<film_actorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for film_actors.
     */
    cursor?: film_actorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_actors.
     */
    distinct?: Enumerable<Film_actorScalarFieldEnum>
  }

  /**
   * film_actor findFirst
   */
  export interface film_actorFindFirstArgs extends film_actorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * film_actor findFirstOrThrow
   */
  export type film_actorFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_actorInclude | null
    /**
     * Filter, which film_actor to fetch.
     */
    where?: film_actorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_actors to fetch.
     */
    orderBy?: Enumerable<film_actorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for film_actors.
     */
    cursor?: film_actorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_actors.
     */
    distinct?: Enumerable<Film_actorScalarFieldEnum>
  }


  /**
   * film_actor findMany
   */
  export type film_actorFindManyArgs = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_actorInclude | null
    /**
     * Filter, which film_actors to fetch.
     */
    where?: film_actorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_actors to fetch.
     */
    orderBy?: Enumerable<film_actorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing film_actors.
     */
    cursor?: film_actorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_actors.
     */
    skip?: number
    distinct?: Enumerable<Film_actorScalarFieldEnum>
  }


  /**
   * film_actor create
   */
  export type film_actorCreateArgs = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_actorInclude | null
    /**
     * The data needed to create a film_actor.
     */
    data: XOR<film_actorCreateInput, film_actorUncheckedCreateInput>
  }


  /**
   * film_actor createMany
   */
  export type film_actorCreateManyArgs = {
    /**
     * The data used to create many film_actors.
     */
    data: Enumerable<film_actorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * film_actor update
   */
  export type film_actorUpdateArgs = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_actorInclude | null
    /**
     * The data needed to update a film_actor.
     */
    data: XOR<film_actorUpdateInput, film_actorUncheckedUpdateInput>
    /**
     * Choose, which film_actor to update.
     */
    where: film_actorWhereUniqueInput
  }


  /**
   * film_actor updateMany
   */
  export type film_actorUpdateManyArgs = {
    /**
     * The data used to update film_actors.
     */
    data: XOR<film_actorUpdateManyMutationInput, film_actorUncheckedUpdateManyInput>
    /**
     * Filter which film_actors to update
     */
    where?: film_actorWhereInput
  }


  /**
   * film_actor upsert
   */
  export type film_actorUpsertArgs = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_actorInclude | null
    /**
     * The filter to search for the film_actor to update in case it exists.
     */
    where: film_actorWhereUniqueInput
    /**
     * In case the film_actor found by the `where` argument doesn't exist, create a new film_actor with this data.
     */
    create: XOR<film_actorCreateInput, film_actorUncheckedCreateInput>
    /**
     * In case the film_actor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<film_actorUpdateInput, film_actorUncheckedUpdateInput>
  }


  /**
   * film_actor delete
   */
  export type film_actorDeleteArgs = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_actorInclude | null
    /**
     * Filter which film_actor to delete.
     */
    where: film_actorWhereUniqueInput
  }


  /**
   * film_actor deleteMany
   */
  export type film_actorDeleteManyArgs = {
    /**
     * Filter which film_actors to delete
     */
    where?: film_actorWhereInput
  }


  /**
   * film_actor without action
   */
  export type film_actorArgs = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_actorInclude | null
  }



  /**
   * Model film_category
   */


  export type AggregateFilm_category = {
    _count: Film_categoryCountAggregateOutputType | null
    _avg: Film_categoryAvgAggregateOutputType | null
    _sum: Film_categorySumAggregateOutputType | null
    _min: Film_categoryMinAggregateOutputType | null
    _max: Film_categoryMaxAggregateOutputType | null
  }

  export type Film_categoryAvgAggregateOutputType = {
    film_id: number | null
    category_id: number | null
  }

  export type Film_categorySumAggregateOutputType = {
    film_id: number | null
    category_id: number | null
  }

  export type Film_categoryMinAggregateOutputType = {
    film_id: number | null
    category_id: number | null
    last_update: Date | null
  }

  export type Film_categoryMaxAggregateOutputType = {
    film_id: number | null
    category_id: number | null
    last_update: Date | null
  }

  export type Film_categoryCountAggregateOutputType = {
    film_id: number
    category_id: number
    last_update: number
    _all: number
  }


  export type Film_categoryAvgAggregateInputType = {
    film_id?: true
    category_id?: true
  }

  export type Film_categorySumAggregateInputType = {
    film_id?: true
    category_id?: true
  }

  export type Film_categoryMinAggregateInputType = {
    film_id?: true
    category_id?: true
    last_update?: true
  }

  export type Film_categoryMaxAggregateInputType = {
    film_id?: true
    category_id?: true
    last_update?: true
  }

  export type Film_categoryCountAggregateInputType = {
    film_id?: true
    category_id?: true
    last_update?: true
    _all?: true
  }

  export type Film_categoryAggregateArgs = {
    /**
     * Filter which film_category to aggregate.
     */
    where?: film_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_categories to fetch.
     */
    orderBy?: Enumerable<film_categoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: film_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned film_categories
    **/
    _count?: true | Film_categoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Film_categoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Film_categorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Film_categoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Film_categoryMaxAggregateInputType
  }

  export type GetFilm_categoryAggregateType<T extends Film_categoryAggregateArgs> = {
        [P in keyof T & keyof AggregateFilm_category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilm_category[P]>
      : GetScalarType<T[P], AggregateFilm_category[P]>
  }




  export type Film_categoryGroupByArgs = {
    where?: film_categoryWhereInput
    orderBy?: Enumerable<film_categoryOrderByWithAggregationInput>
    by: Film_categoryScalarFieldEnum[]
    having?: film_categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Film_categoryCountAggregateInputType | true
    _avg?: Film_categoryAvgAggregateInputType
    _sum?: Film_categorySumAggregateInputType
    _min?: Film_categoryMinAggregateInputType
    _max?: Film_categoryMaxAggregateInputType
  }


  export type Film_categoryGroupByOutputType = {
    film_id: number
    category_id: number
    last_update: Date
    _count: Film_categoryCountAggregateOutputType | null
    _avg: Film_categoryAvgAggregateOutputType | null
    _sum: Film_categorySumAggregateOutputType | null
    _min: Film_categoryMinAggregateOutputType | null
    _max: Film_categoryMaxAggregateOutputType | null
  }

  type GetFilm_categoryGroupByPayload<T extends Film_categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Film_categoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Film_categoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Film_categoryGroupByOutputType[P]>
            : GetScalarType<T[P], Film_categoryGroupByOutputType[P]>
        }
      >
    >


  export type film_categorySelect = {
    film_id?: boolean
    category_id?: boolean
    last_update?: boolean
    category?: boolean | categoryArgs
    film?: boolean | filmArgs
  }


  export type film_categoryInclude = {
    category?: boolean | categoryArgs
    film?: boolean | filmArgs
  }

  export type film_categoryGetPayload<S extends boolean | null | undefined | film_categoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? film_category :
    S extends undefined ? never :
    S extends { include: any } & (film_categoryArgs | film_categoryFindManyArgs)
    ? film_category  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category' ? categoryGetPayload<S['include'][P]> :
        P extends 'film' ? filmGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (film_categoryArgs | film_categoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? categoryGetPayload<S['select'][P]> :
        P extends 'film' ? filmGetPayload<S['select'][P]> :  P extends keyof film_category ? film_category[P] : never
  } 
      : film_category


  type film_categoryCountArgs = 
    Omit<film_categoryFindManyArgs, 'select' | 'include'> & {
      select?: Film_categoryCountAggregateInputType | true
    }

  export interface film_categoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Film_category that matches the filter.
     * @param {film_categoryFindUniqueArgs} args - Arguments to find a Film_category
     * @example
     * // Get one Film_category
     * const film_category = await prisma.film_category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends film_categoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, film_categoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'film_category'> extends True ? Prisma__film_categoryClient<film_categoryGetPayload<T>> : Prisma__film_categoryClient<film_categoryGetPayload<T> | null, null>

    /**
     * Find one Film_category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {film_categoryFindUniqueOrThrowArgs} args - Arguments to find a Film_category
     * @example
     * // Get one Film_category
     * const film_category = await prisma.film_category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends film_categoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, film_categoryFindUniqueOrThrowArgs>
    ): Prisma__film_categoryClient<film_categoryGetPayload<T>>

    /**
     * Find the first Film_category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_categoryFindFirstArgs} args - Arguments to find a Film_category
     * @example
     * // Get one Film_category
     * const film_category = await prisma.film_category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends film_categoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, film_categoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'film_category'> extends True ? Prisma__film_categoryClient<film_categoryGetPayload<T>> : Prisma__film_categoryClient<film_categoryGetPayload<T> | null, null>

    /**
     * Find the first Film_category that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_categoryFindFirstOrThrowArgs} args - Arguments to find a Film_category
     * @example
     * // Get one Film_category
     * const film_category = await prisma.film_category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends film_categoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, film_categoryFindFirstOrThrowArgs>
    ): Prisma__film_categoryClient<film_categoryGetPayload<T>>

    /**
     * Find zero or more Film_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_categoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Film_categories
     * const film_categories = await prisma.film_category.findMany()
     * 
     * // Get first 10 Film_categories
     * const film_categories = await prisma.film_category.findMany({ take: 10 })
     * 
     * // Only select the `film_id`
     * const film_categoryWithFilm_idOnly = await prisma.film_category.findMany({ select: { film_id: true } })
     * 
    **/
    findMany<T extends film_categoryFindManyArgs>(
      args?: SelectSubset<T, film_categoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<film_categoryGetPayload<T>>>

    /**
     * Create a Film_category.
     * @param {film_categoryCreateArgs} args - Arguments to create a Film_category.
     * @example
     * // Create one Film_category
     * const Film_category = await prisma.film_category.create({
     *   data: {
     *     // ... data to create a Film_category
     *   }
     * })
     * 
    **/
    create<T extends film_categoryCreateArgs>(
      args: SelectSubset<T, film_categoryCreateArgs>
    ): Prisma__film_categoryClient<film_categoryGetPayload<T>>

    /**
     * Create many Film_categories.
     *     @param {film_categoryCreateManyArgs} args - Arguments to create many Film_categories.
     *     @example
     *     // Create many Film_categories
     *     const film_category = await prisma.film_category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends film_categoryCreateManyArgs>(
      args?: SelectSubset<T, film_categoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Film_category.
     * @param {film_categoryDeleteArgs} args - Arguments to delete one Film_category.
     * @example
     * // Delete one Film_category
     * const Film_category = await prisma.film_category.delete({
     *   where: {
     *     // ... filter to delete one Film_category
     *   }
     * })
     * 
    **/
    delete<T extends film_categoryDeleteArgs>(
      args: SelectSubset<T, film_categoryDeleteArgs>
    ): Prisma__film_categoryClient<film_categoryGetPayload<T>>

    /**
     * Update one Film_category.
     * @param {film_categoryUpdateArgs} args - Arguments to update one Film_category.
     * @example
     * // Update one Film_category
     * const film_category = await prisma.film_category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends film_categoryUpdateArgs>(
      args: SelectSubset<T, film_categoryUpdateArgs>
    ): Prisma__film_categoryClient<film_categoryGetPayload<T>>

    /**
     * Delete zero or more Film_categories.
     * @param {film_categoryDeleteManyArgs} args - Arguments to filter Film_categories to delete.
     * @example
     * // Delete a few Film_categories
     * const { count } = await prisma.film_category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends film_categoryDeleteManyArgs>(
      args?: SelectSubset<T, film_categoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Film_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Film_categories
     * const film_category = await prisma.film_category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends film_categoryUpdateManyArgs>(
      args: SelectSubset<T, film_categoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Film_category.
     * @param {film_categoryUpsertArgs} args - Arguments to update or create a Film_category.
     * @example
     * // Update or create a Film_category
     * const film_category = await prisma.film_category.upsert({
     *   create: {
     *     // ... data to create a Film_category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Film_category we want to update
     *   }
     * })
    **/
    upsert<T extends film_categoryUpsertArgs>(
      args: SelectSubset<T, film_categoryUpsertArgs>
    ): Prisma__film_categoryClient<film_categoryGetPayload<T>>

    /**
     * Count the number of Film_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_categoryCountArgs} args - Arguments to filter Film_categories to count.
     * @example
     * // Count the number of Film_categories
     * const count = await prisma.film_category.count({
     *   where: {
     *     // ... the filter for the Film_categories we want to count
     *   }
     * })
    **/
    count<T extends film_categoryCountArgs>(
      args?: Subset<T, film_categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Film_categoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Film_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Film_categoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Film_categoryAggregateArgs>(args: Subset<T, Film_categoryAggregateArgs>): Prisma.PrismaPromise<GetFilm_categoryAggregateType<T>>

    /**
     * Group by Film_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Film_categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Film_categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Film_categoryGroupByArgs['orderBy'] }
        : { orderBy?: Film_categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Film_categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilm_categoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for film_category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__film_categoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    category<T extends categoryArgs= {}>(args?: Subset<T, categoryArgs>): Prisma__categoryClient<categoryGetPayload<T> | Null>;

    film<T extends filmArgs= {}>(args?: Subset<T, filmArgs>): Prisma__filmClient<filmGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * film_category base type for findUnique actions
   */
  export type film_categoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the film_category
     */
    select?: film_categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_categoryInclude | null
    /**
     * Filter, which film_category to fetch.
     */
    where: film_categoryWhereUniqueInput
  }

  /**
   * film_category findUnique
   */
  export interface film_categoryFindUniqueArgs extends film_categoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * film_category findUniqueOrThrow
   */
  export type film_categoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the film_category
     */
    select?: film_categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_categoryInclude | null
    /**
     * Filter, which film_category to fetch.
     */
    where: film_categoryWhereUniqueInput
  }


  /**
   * film_category base type for findFirst actions
   */
  export type film_categoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the film_category
     */
    select?: film_categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_categoryInclude | null
    /**
     * Filter, which film_category to fetch.
     */
    where?: film_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_categories to fetch.
     */
    orderBy?: Enumerable<film_categoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for film_categories.
     */
    cursor?: film_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_categories.
     */
    distinct?: Enumerable<Film_categoryScalarFieldEnum>
  }

  /**
   * film_category findFirst
   */
  export interface film_categoryFindFirstArgs extends film_categoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * film_category findFirstOrThrow
   */
  export type film_categoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the film_category
     */
    select?: film_categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_categoryInclude | null
    /**
     * Filter, which film_category to fetch.
     */
    where?: film_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_categories to fetch.
     */
    orderBy?: Enumerable<film_categoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for film_categories.
     */
    cursor?: film_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_categories.
     */
    distinct?: Enumerable<Film_categoryScalarFieldEnum>
  }


  /**
   * film_category findMany
   */
  export type film_categoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the film_category
     */
    select?: film_categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_categoryInclude | null
    /**
     * Filter, which film_categories to fetch.
     */
    where?: film_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_categories to fetch.
     */
    orderBy?: Enumerable<film_categoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing film_categories.
     */
    cursor?: film_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_categories.
     */
    skip?: number
    distinct?: Enumerable<Film_categoryScalarFieldEnum>
  }


  /**
   * film_category create
   */
  export type film_categoryCreateArgs = {
    /**
     * Select specific fields to fetch from the film_category
     */
    select?: film_categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_categoryInclude | null
    /**
     * The data needed to create a film_category.
     */
    data: XOR<film_categoryCreateInput, film_categoryUncheckedCreateInput>
  }


  /**
   * film_category createMany
   */
  export type film_categoryCreateManyArgs = {
    /**
     * The data used to create many film_categories.
     */
    data: Enumerable<film_categoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * film_category update
   */
  export type film_categoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the film_category
     */
    select?: film_categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_categoryInclude | null
    /**
     * The data needed to update a film_category.
     */
    data: XOR<film_categoryUpdateInput, film_categoryUncheckedUpdateInput>
    /**
     * Choose, which film_category to update.
     */
    where: film_categoryWhereUniqueInput
  }


  /**
   * film_category updateMany
   */
  export type film_categoryUpdateManyArgs = {
    /**
     * The data used to update film_categories.
     */
    data: XOR<film_categoryUpdateManyMutationInput, film_categoryUncheckedUpdateManyInput>
    /**
     * Filter which film_categories to update
     */
    where?: film_categoryWhereInput
  }


  /**
   * film_category upsert
   */
  export type film_categoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the film_category
     */
    select?: film_categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_categoryInclude | null
    /**
     * The filter to search for the film_category to update in case it exists.
     */
    where: film_categoryWhereUniqueInput
    /**
     * In case the film_category found by the `where` argument doesn't exist, create a new film_category with this data.
     */
    create: XOR<film_categoryCreateInput, film_categoryUncheckedCreateInput>
    /**
     * In case the film_category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<film_categoryUpdateInput, film_categoryUncheckedUpdateInput>
  }


  /**
   * film_category delete
   */
  export type film_categoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the film_category
     */
    select?: film_categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_categoryInclude | null
    /**
     * Filter which film_category to delete.
     */
    where: film_categoryWhereUniqueInput
  }


  /**
   * film_category deleteMany
   */
  export type film_categoryDeleteManyArgs = {
    /**
     * Filter which film_categories to delete
     */
    where?: film_categoryWhereInput
  }


  /**
   * film_category without action
   */
  export type film_categoryArgs = {
    /**
     * Select specific fields to fetch from the film_category
     */
    select?: film_categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: film_categoryInclude | null
  }



  /**
   * Model film_text
   */


  export type AggregateFilm_text = {
    _count: Film_textCountAggregateOutputType | null
    _avg: Film_textAvgAggregateOutputType | null
    _sum: Film_textSumAggregateOutputType | null
    _min: Film_textMinAggregateOutputType | null
    _max: Film_textMaxAggregateOutputType | null
  }

  export type Film_textAvgAggregateOutputType = {
    film_id: number | null
  }

  export type Film_textSumAggregateOutputType = {
    film_id: number | null
  }

  export type Film_textMinAggregateOutputType = {
    film_id: number | null
    title: string | null
    description: string | null
  }

  export type Film_textMaxAggregateOutputType = {
    film_id: number | null
    title: string | null
    description: string | null
  }

  export type Film_textCountAggregateOutputType = {
    film_id: number
    title: number
    description: number
    _all: number
  }


  export type Film_textAvgAggregateInputType = {
    film_id?: true
  }

  export type Film_textSumAggregateInputType = {
    film_id?: true
  }

  export type Film_textMinAggregateInputType = {
    film_id?: true
    title?: true
    description?: true
  }

  export type Film_textMaxAggregateInputType = {
    film_id?: true
    title?: true
    description?: true
  }

  export type Film_textCountAggregateInputType = {
    film_id?: true
    title?: true
    description?: true
    _all?: true
  }

  export type Film_textAggregateArgs = {
    /**
     * Filter which film_text to aggregate.
     */
    where?: film_textWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_texts to fetch.
     */
    orderBy?: Enumerable<film_textOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: film_textWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_texts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned film_texts
    **/
    _count?: true | Film_textCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Film_textAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Film_textSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Film_textMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Film_textMaxAggregateInputType
  }

  export type GetFilm_textAggregateType<T extends Film_textAggregateArgs> = {
        [P in keyof T & keyof AggregateFilm_text]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilm_text[P]>
      : GetScalarType<T[P], AggregateFilm_text[P]>
  }




  export type Film_textGroupByArgs = {
    where?: film_textWhereInput
    orderBy?: Enumerable<film_textOrderByWithAggregationInput>
    by: Film_textScalarFieldEnum[]
    having?: film_textScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Film_textCountAggregateInputType | true
    _avg?: Film_textAvgAggregateInputType
    _sum?: Film_textSumAggregateInputType
    _min?: Film_textMinAggregateInputType
    _max?: Film_textMaxAggregateInputType
  }


  export type Film_textGroupByOutputType = {
    film_id: number
    title: string
    description: string | null
    _count: Film_textCountAggregateOutputType | null
    _avg: Film_textAvgAggregateOutputType | null
    _sum: Film_textSumAggregateOutputType | null
    _min: Film_textMinAggregateOutputType | null
    _max: Film_textMaxAggregateOutputType | null
  }

  type GetFilm_textGroupByPayload<T extends Film_textGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Film_textGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Film_textGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Film_textGroupByOutputType[P]>
            : GetScalarType<T[P], Film_textGroupByOutputType[P]>
        }
      >
    >


  export type film_textSelect = {
    film_id?: boolean
    title?: boolean
    description?: boolean
  }


  export type film_textGetPayload<S extends boolean | null | undefined | film_textArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? film_text :
    S extends undefined ? never :
    S extends { include: any } & (film_textArgs | film_textFindManyArgs)
    ? film_text 
    : S extends { select: any } & (film_textArgs | film_textFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof film_text ? film_text[P] : never
  } 
      : film_text


  type film_textCountArgs = 
    Omit<film_textFindManyArgs, 'select' | 'include'> & {
      select?: Film_textCountAggregateInputType | true
    }

  export interface film_textDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Film_text that matches the filter.
     * @param {film_textFindUniqueArgs} args - Arguments to find a Film_text
     * @example
     * // Get one Film_text
     * const film_text = await prisma.film_text.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends film_textFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, film_textFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'film_text'> extends True ? Prisma__film_textClient<film_textGetPayload<T>> : Prisma__film_textClient<film_textGetPayload<T> | null, null>

    /**
     * Find one Film_text that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {film_textFindUniqueOrThrowArgs} args - Arguments to find a Film_text
     * @example
     * // Get one Film_text
     * const film_text = await prisma.film_text.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends film_textFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, film_textFindUniqueOrThrowArgs>
    ): Prisma__film_textClient<film_textGetPayload<T>>

    /**
     * Find the first Film_text that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_textFindFirstArgs} args - Arguments to find a Film_text
     * @example
     * // Get one Film_text
     * const film_text = await prisma.film_text.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends film_textFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, film_textFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'film_text'> extends True ? Prisma__film_textClient<film_textGetPayload<T>> : Prisma__film_textClient<film_textGetPayload<T> | null, null>

    /**
     * Find the first Film_text that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_textFindFirstOrThrowArgs} args - Arguments to find a Film_text
     * @example
     * // Get one Film_text
     * const film_text = await prisma.film_text.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends film_textFindFirstOrThrowArgs>(
      args?: SelectSubset<T, film_textFindFirstOrThrowArgs>
    ): Prisma__film_textClient<film_textGetPayload<T>>

    /**
     * Find zero or more Film_texts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_textFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Film_texts
     * const film_texts = await prisma.film_text.findMany()
     * 
     * // Get first 10 Film_texts
     * const film_texts = await prisma.film_text.findMany({ take: 10 })
     * 
     * // Only select the `film_id`
     * const film_textWithFilm_idOnly = await prisma.film_text.findMany({ select: { film_id: true } })
     * 
    **/
    findMany<T extends film_textFindManyArgs>(
      args?: SelectSubset<T, film_textFindManyArgs>
    ): Prisma.PrismaPromise<Array<film_textGetPayload<T>>>

    /**
     * Create a Film_text.
     * @param {film_textCreateArgs} args - Arguments to create a Film_text.
     * @example
     * // Create one Film_text
     * const Film_text = await prisma.film_text.create({
     *   data: {
     *     // ... data to create a Film_text
     *   }
     * })
     * 
    **/
    create<T extends film_textCreateArgs>(
      args: SelectSubset<T, film_textCreateArgs>
    ): Prisma__film_textClient<film_textGetPayload<T>>

    /**
     * Create many Film_texts.
     *     @param {film_textCreateManyArgs} args - Arguments to create many Film_texts.
     *     @example
     *     // Create many Film_texts
     *     const film_text = await prisma.film_text.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends film_textCreateManyArgs>(
      args?: SelectSubset<T, film_textCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Film_text.
     * @param {film_textDeleteArgs} args - Arguments to delete one Film_text.
     * @example
     * // Delete one Film_text
     * const Film_text = await prisma.film_text.delete({
     *   where: {
     *     // ... filter to delete one Film_text
     *   }
     * })
     * 
    **/
    delete<T extends film_textDeleteArgs>(
      args: SelectSubset<T, film_textDeleteArgs>
    ): Prisma__film_textClient<film_textGetPayload<T>>

    /**
     * Update one Film_text.
     * @param {film_textUpdateArgs} args - Arguments to update one Film_text.
     * @example
     * // Update one Film_text
     * const film_text = await prisma.film_text.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends film_textUpdateArgs>(
      args: SelectSubset<T, film_textUpdateArgs>
    ): Prisma__film_textClient<film_textGetPayload<T>>

    /**
     * Delete zero or more Film_texts.
     * @param {film_textDeleteManyArgs} args - Arguments to filter Film_texts to delete.
     * @example
     * // Delete a few Film_texts
     * const { count } = await prisma.film_text.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends film_textDeleteManyArgs>(
      args?: SelectSubset<T, film_textDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Film_texts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_textUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Film_texts
     * const film_text = await prisma.film_text.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends film_textUpdateManyArgs>(
      args: SelectSubset<T, film_textUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Film_text.
     * @param {film_textUpsertArgs} args - Arguments to update or create a Film_text.
     * @example
     * // Update or create a Film_text
     * const film_text = await prisma.film_text.upsert({
     *   create: {
     *     // ... data to create a Film_text
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Film_text we want to update
     *   }
     * })
    **/
    upsert<T extends film_textUpsertArgs>(
      args: SelectSubset<T, film_textUpsertArgs>
    ): Prisma__film_textClient<film_textGetPayload<T>>

    /**
     * Count the number of Film_texts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_textCountArgs} args - Arguments to filter Film_texts to count.
     * @example
     * // Count the number of Film_texts
     * const count = await prisma.film_text.count({
     *   where: {
     *     // ... the filter for the Film_texts we want to count
     *   }
     * })
    **/
    count<T extends film_textCountArgs>(
      args?: Subset<T, film_textCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Film_textCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Film_text.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Film_textAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Film_textAggregateArgs>(args: Subset<T, Film_textAggregateArgs>): Prisma.PrismaPromise<GetFilm_textAggregateType<T>>

    /**
     * Group by Film_text.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Film_textGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Film_textGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Film_textGroupByArgs['orderBy'] }
        : { orderBy?: Film_textGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Film_textGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilm_textGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for film_text.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__film_textClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * film_text base type for findUnique actions
   */
  export type film_textFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the film_text
     */
    select?: film_textSelect | null
    /**
     * Filter, which film_text to fetch.
     */
    where: film_textWhereUniqueInput
  }

  /**
   * film_text findUnique
   */
  export interface film_textFindUniqueArgs extends film_textFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * film_text findUniqueOrThrow
   */
  export type film_textFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the film_text
     */
    select?: film_textSelect | null
    /**
     * Filter, which film_text to fetch.
     */
    where: film_textWhereUniqueInput
  }


  /**
   * film_text base type for findFirst actions
   */
  export type film_textFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the film_text
     */
    select?: film_textSelect | null
    /**
     * Filter, which film_text to fetch.
     */
    where?: film_textWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_texts to fetch.
     */
    orderBy?: Enumerable<film_textOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for film_texts.
     */
    cursor?: film_textWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_texts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_texts.
     */
    distinct?: Enumerable<Film_textScalarFieldEnum>
  }

  /**
   * film_text findFirst
   */
  export interface film_textFindFirstArgs extends film_textFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * film_text findFirstOrThrow
   */
  export type film_textFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the film_text
     */
    select?: film_textSelect | null
    /**
     * Filter, which film_text to fetch.
     */
    where?: film_textWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_texts to fetch.
     */
    orderBy?: Enumerable<film_textOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for film_texts.
     */
    cursor?: film_textWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_texts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_texts.
     */
    distinct?: Enumerable<Film_textScalarFieldEnum>
  }


  /**
   * film_text findMany
   */
  export type film_textFindManyArgs = {
    /**
     * Select specific fields to fetch from the film_text
     */
    select?: film_textSelect | null
    /**
     * Filter, which film_texts to fetch.
     */
    where?: film_textWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_texts to fetch.
     */
    orderBy?: Enumerable<film_textOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing film_texts.
     */
    cursor?: film_textWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_texts.
     */
    skip?: number
    distinct?: Enumerable<Film_textScalarFieldEnum>
  }


  /**
   * film_text create
   */
  export type film_textCreateArgs = {
    /**
     * Select specific fields to fetch from the film_text
     */
    select?: film_textSelect | null
    /**
     * The data needed to create a film_text.
     */
    data: XOR<film_textCreateInput, film_textUncheckedCreateInput>
  }


  /**
   * film_text createMany
   */
  export type film_textCreateManyArgs = {
    /**
     * The data used to create many film_texts.
     */
    data: Enumerable<film_textCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * film_text update
   */
  export type film_textUpdateArgs = {
    /**
     * Select specific fields to fetch from the film_text
     */
    select?: film_textSelect | null
    /**
     * The data needed to update a film_text.
     */
    data: XOR<film_textUpdateInput, film_textUncheckedUpdateInput>
    /**
     * Choose, which film_text to update.
     */
    where: film_textWhereUniqueInput
  }


  /**
   * film_text updateMany
   */
  export type film_textUpdateManyArgs = {
    /**
     * The data used to update film_texts.
     */
    data: XOR<film_textUpdateManyMutationInput, film_textUncheckedUpdateManyInput>
    /**
     * Filter which film_texts to update
     */
    where?: film_textWhereInput
  }


  /**
   * film_text upsert
   */
  export type film_textUpsertArgs = {
    /**
     * Select specific fields to fetch from the film_text
     */
    select?: film_textSelect | null
    /**
     * The filter to search for the film_text to update in case it exists.
     */
    where: film_textWhereUniqueInput
    /**
     * In case the film_text found by the `where` argument doesn't exist, create a new film_text with this data.
     */
    create: XOR<film_textCreateInput, film_textUncheckedCreateInput>
    /**
     * In case the film_text was found with the provided `where` argument, update it with this data.
     */
    update: XOR<film_textUpdateInput, film_textUncheckedUpdateInput>
  }


  /**
   * film_text delete
   */
  export type film_textDeleteArgs = {
    /**
     * Select specific fields to fetch from the film_text
     */
    select?: film_textSelect | null
    /**
     * Filter which film_text to delete.
     */
    where: film_textWhereUniqueInput
  }


  /**
   * film_text deleteMany
   */
  export type film_textDeleteManyArgs = {
    /**
     * Filter which film_texts to delete
     */
    where?: film_textWhereInput
  }


  /**
   * film_text without action
   */
  export type film_textArgs = {
    /**
     * Select specific fields to fetch from the film_text
     */
    select?: film_textSelect | null
  }



  /**
   * Model inventory
   */


  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    inventory_id: number | null
    film_id: number | null
    store_id: number | null
  }

  export type InventorySumAggregateOutputType = {
    inventory_id: number | null
    film_id: number | null
    store_id: number | null
  }

  export type InventoryMinAggregateOutputType = {
    inventory_id: number | null
    film_id: number | null
    store_id: number | null
    last_update: Date | null
  }

  export type InventoryMaxAggregateOutputType = {
    inventory_id: number | null
    film_id: number | null
    store_id: number | null
    last_update: Date | null
  }

  export type InventoryCountAggregateOutputType = {
    inventory_id: number
    film_id: number
    store_id: number
    last_update: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    inventory_id?: true
    film_id?: true
    store_id?: true
  }

  export type InventorySumAggregateInputType = {
    inventory_id?: true
    film_id?: true
    store_id?: true
  }

  export type InventoryMinAggregateInputType = {
    inventory_id?: true
    film_id?: true
    store_id?: true
    last_update?: true
  }

  export type InventoryMaxAggregateInputType = {
    inventory_id?: true
    film_id?: true
    store_id?: true
    last_update?: true
  }

  export type InventoryCountAggregateInputType = {
    inventory_id?: true
    film_id?: true
    store_id?: true
    last_update?: true
    _all?: true
  }

  export type InventoryAggregateArgs = {
    /**
     * Filter which inventory to aggregate.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: Enumerable<inventoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs = {
    where?: inventoryWhereInput
    orderBy?: Enumerable<inventoryOrderByWithAggregationInput>
    by: InventoryScalarFieldEnum[]
    having?: inventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }


  export type InventoryGroupByOutputType = {
    inventory_id: number
    film_id: number
    store_id: number
    last_update: Date
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type inventorySelect = {
    inventory_id?: boolean
    film_id?: boolean
    store_id?: boolean
    last_update?: boolean
    film?: boolean | filmArgs
    store?: boolean | storeArgs
    rental?: boolean | inventory$rentalArgs
    _count?: boolean | InventoryCountOutputTypeArgs
  }


  export type inventoryInclude = {
    film?: boolean | filmArgs
    store?: boolean | storeArgs
    rental?: boolean | inventory$rentalArgs
    _count?: boolean | InventoryCountOutputTypeArgs
  }

  export type inventoryGetPayload<S extends boolean | null | undefined | inventoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? inventory :
    S extends undefined ? never :
    S extends { include: any } & (inventoryArgs | inventoryFindManyArgs)
    ? inventory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'film' ? filmGetPayload<S['include'][P]> :
        P extends 'store' ? storeGetPayload<S['include'][P]> :
        P extends 'rental' ? Array < rentalGetPayload<S['include'][P]>>  :
        P extends '_count' ? InventoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (inventoryArgs | inventoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'film' ? filmGetPayload<S['select'][P]> :
        P extends 'store' ? storeGetPayload<S['select'][P]> :
        P extends 'rental' ? Array < rentalGetPayload<S['select'][P]>>  :
        P extends '_count' ? InventoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof inventory ? inventory[P] : never
  } 
      : inventory


  type inventoryCountArgs = 
    Omit<inventoryFindManyArgs, 'select' | 'include'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface inventoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Inventory that matches the filter.
     * @param {inventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends inventoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, inventoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'inventory'> extends True ? Prisma__inventoryClient<inventoryGetPayload<T>> : Prisma__inventoryClient<inventoryGetPayload<T> | null, null>

    /**
     * Find one Inventory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {inventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends inventoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, inventoryFindUniqueOrThrowArgs>
    ): Prisma__inventoryClient<inventoryGetPayload<T>>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends inventoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, inventoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'inventory'> extends True ? Prisma__inventoryClient<inventoryGetPayload<T>> : Prisma__inventoryClient<inventoryGetPayload<T> | null, null>

    /**
     * Find the first Inventory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends inventoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, inventoryFindFirstOrThrowArgs>
    ): Prisma__inventoryClient<inventoryGetPayload<T>>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `inventory_id`
     * const inventoryWithInventory_idOnly = await prisma.inventory.findMany({ select: { inventory_id: true } })
     * 
    **/
    findMany<T extends inventoryFindManyArgs>(
      args?: SelectSubset<T, inventoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<inventoryGetPayload<T>>>

    /**
     * Create a Inventory.
     * @param {inventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
    **/
    create<T extends inventoryCreateArgs>(
      args: SelectSubset<T, inventoryCreateArgs>
    ): Prisma__inventoryClient<inventoryGetPayload<T>>

    /**
     * Create many Inventories.
     *     @param {inventoryCreateManyArgs} args - Arguments to create many Inventories.
     *     @example
     *     // Create many Inventories
     *     const inventory = await prisma.inventory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends inventoryCreateManyArgs>(
      args?: SelectSubset<T, inventoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inventory.
     * @param {inventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
    **/
    delete<T extends inventoryDeleteArgs>(
      args: SelectSubset<T, inventoryDeleteArgs>
    ): Prisma__inventoryClient<inventoryGetPayload<T>>

    /**
     * Update one Inventory.
     * @param {inventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends inventoryUpdateArgs>(
      args: SelectSubset<T, inventoryUpdateArgs>
    ): Prisma__inventoryClient<inventoryGetPayload<T>>

    /**
     * Delete zero or more Inventories.
     * @param {inventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends inventoryDeleteManyArgs>(
      args?: SelectSubset<T, inventoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends inventoryUpdateManyArgs>(
      args: SelectSubset<T, inventoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventory.
     * @param {inventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
    **/
    upsert<T extends inventoryUpsertArgs>(
      args: SelectSubset<T, inventoryUpsertArgs>
    ): Prisma__inventoryClient<inventoryGetPayload<T>>

    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends inventoryCountArgs>(
      args?: Subset<T, inventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__inventoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    film<T extends filmArgs= {}>(args?: Subset<T, filmArgs>): Prisma__filmClient<filmGetPayload<T> | Null>;

    store<T extends storeArgs= {}>(args?: Subset<T, storeArgs>): Prisma__storeClient<storeGetPayload<T> | Null>;

    rental<T extends inventory$rentalArgs= {}>(args?: Subset<T, inventory$rentalArgs>): Prisma.PrismaPromise<Array<rentalGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * inventory base type for findUnique actions
   */
  export type inventoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude | null
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory findUnique
   */
  export interface inventoryFindUniqueArgs extends inventoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * inventory findUniqueOrThrow
   */
  export type inventoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude | null
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput
  }


  /**
   * inventory base type for findFirst actions
   */
  export type inventoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude | null
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: Enumerable<inventoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: Enumerable<InventoryScalarFieldEnum>
  }

  /**
   * inventory findFirst
   */
  export interface inventoryFindFirstArgs extends inventoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * inventory findFirstOrThrow
   */
  export type inventoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude | null
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: Enumerable<inventoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: Enumerable<InventoryScalarFieldEnum>
  }


  /**
   * inventory findMany
   */
  export type inventoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude | null
    /**
     * Filter, which inventories to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: Enumerable<inventoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    distinct?: Enumerable<InventoryScalarFieldEnum>
  }


  /**
   * inventory create
   */
  export type inventoryCreateArgs = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude | null
    /**
     * The data needed to create a inventory.
     */
    data: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>
  }


  /**
   * inventory createMany
   */
  export type inventoryCreateManyArgs = {
    /**
     * The data used to create many inventories.
     */
    data: Enumerable<inventoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * inventory update
   */
  export type inventoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude | null
    /**
     * The data needed to update a inventory.
     */
    data: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>
    /**
     * Choose, which inventory to update.
     */
    where: inventoryWhereUniqueInput
  }


  /**
   * inventory updateMany
   */
  export type inventoryUpdateManyArgs = {
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput
  }


  /**
   * inventory upsert
   */
  export type inventoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude | null
    /**
     * The filter to search for the inventory to update in case it exists.
     */
    where: inventoryWhereUniqueInput
    /**
     * In case the inventory found by the `where` argument doesn't exist, create a new inventory with this data.
     */
    create: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>
    /**
     * In case the inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>
  }


  /**
   * inventory delete
   */
  export type inventoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude | null
    /**
     * Filter which inventory to delete.
     */
    where: inventoryWhereUniqueInput
  }


  /**
   * inventory deleteMany
   */
  export type inventoryDeleteManyArgs = {
    /**
     * Filter which inventories to delete
     */
    where?: inventoryWhereInput
  }


  /**
   * inventory.rental
   */
  export type inventory$rentalArgs = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude | null
    where?: rentalWhereInput
    orderBy?: Enumerable<rentalOrderByWithRelationInput>
    cursor?: rentalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RentalScalarFieldEnum>
  }


  /**
   * inventory without action
   */
  export type inventoryArgs = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude | null
  }



  /**
   * Model language
   */


  export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null
    _avg: LanguageAvgAggregateOutputType | null
    _sum: LanguageSumAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  export type LanguageAvgAggregateOutputType = {
    language_id: number | null
  }

  export type LanguageSumAggregateOutputType = {
    language_id: number | null
  }

  export type LanguageMinAggregateOutputType = {
    language_id: number | null
    name: string | null
    last_update: Date | null
  }

  export type LanguageMaxAggregateOutputType = {
    language_id: number | null
    name: string | null
    last_update: Date | null
  }

  export type LanguageCountAggregateOutputType = {
    language_id: number
    name: number
    last_update: number
    _all: number
  }


  export type LanguageAvgAggregateInputType = {
    language_id?: true
  }

  export type LanguageSumAggregateInputType = {
    language_id?: true
  }

  export type LanguageMinAggregateInputType = {
    language_id?: true
    name?: true
    last_update?: true
  }

  export type LanguageMaxAggregateInputType = {
    language_id?: true
    name?: true
    last_update?: true
  }

  export type LanguageCountAggregateInputType = {
    language_id?: true
    name?: true
    last_update?: true
    _all?: true
  }

  export type LanguageAggregateArgs = {
    /**
     * Filter which language to aggregate.
     */
    where?: languageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of languages to fetch.
     */
    orderBy?: Enumerable<languageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: languageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned languages
    **/
    _count?: true | LanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LanguageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LanguageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageMaxAggregateInputType
  }

  export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguage[P]>
      : GetScalarType<T[P], AggregateLanguage[P]>
  }




  export type LanguageGroupByArgs = {
    where?: languageWhereInput
    orderBy?: Enumerable<languageOrderByWithAggregationInput>
    by: LanguageScalarFieldEnum[]
    having?: languageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageCountAggregateInputType | true
    _avg?: LanguageAvgAggregateInputType
    _sum?: LanguageSumAggregateInputType
    _min?: LanguageMinAggregateInputType
    _max?: LanguageMaxAggregateInputType
  }


  export type LanguageGroupByOutputType = {
    language_id: number
    name: string
    last_update: Date
    _count: LanguageCountAggregateOutputType | null
    _avg: LanguageAvgAggregateOutputType | null
    _sum: LanguageSumAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  type GetLanguageGroupByPayload<T extends LanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageGroupByOutputType[P]>
        }
      >
    >


  export type languageSelect = {
    language_id?: boolean
    name?: boolean
    last_update?: boolean
    film_film_language_idTolanguage?: boolean | language$film_film_language_idTolanguageArgs
    film_film_original_language_idTolanguage?: boolean | language$film_film_original_language_idTolanguageArgs
    _count?: boolean | LanguageCountOutputTypeArgs
  }


  export type languageInclude = {
    film_film_language_idTolanguage?: boolean | language$film_film_language_idTolanguageArgs
    film_film_original_language_idTolanguage?: boolean | language$film_film_original_language_idTolanguageArgs
    _count?: boolean | LanguageCountOutputTypeArgs
  }

  export type languageGetPayload<S extends boolean | null | undefined | languageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? language :
    S extends undefined ? never :
    S extends { include: any } & (languageArgs | languageFindManyArgs)
    ? language  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'film_film_language_idTolanguage' ? Array < filmGetPayload<S['include'][P]>>  :
        P extends 'film_film_original_language_idTolanguage' ? Array < filmGetPayload<S['include'][P]>>  :
        P extends '_count' ? LanguageCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (languageArgs | languageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'film_film_language_idTolanguage' ? Array < filmGetPayload<S['select'][P]>>  :
        P extends 'film_film_original_language_idTolanguage' ? Array < filmGetPayload<S['select'][P]>>  :
        P extends '_count' ? LanguageCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof language ? language[P] : never
  } 
      : language


  type languageCountArgs = 
    Omit<languageFindManyArgs, 'select' | 'include'> & {
      select?: LanguageCountAggregateInputType | true
    }

  export interface languageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Language that matches the filter.
     * @param {languageFindUniqueArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends languageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, languageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'language'> extends True ? Prisma__languageClient<languageGetPayload<T>> : Prisma__languageClient<languageGetPayload<T> | null, null>

    /**
     * Find one Language that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {languageFindUniqueOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends languageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, languageFindUniqueOrThrowArgs>
    ): Prisma__languageClient<languageGetPayload<T>>

    /**
     * Find the first Language that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languageFindFirstArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends languageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, languageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'language'> extends True ? Prisma__languageClient<languageGetPayload<T>> : Prisma__languageClient<languageGetPayload<T> | null, null>

    /**
     * Find the first Language that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languageFindFirstOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends languageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, languageFindFirstOrThrowArgs>
    ): Prisma__languageClient<languageGetPayload<T>>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.language.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.language.findMany({ take: 10 })
     * 
     * // Only select the `language_id`
     * const languageWithLanguage_idOnly = await prisma.language.findMany({ select: { language_id: true } })
     * 
    **/
    findMany<T extends languageFindManyArgs>(
      args?: SelectSubset<T, languageFindManyArgs>
    ): Prisma.PrismaPromise<Array<languageGetPayload<T>>>

    /**
     * Create a Language.
     * @param {languageCreateArgs} args - Arguments to create a Language.
     * @example
     * // Create one Language
     * const Language = await prisma.language.create({
     *   data: {
     *     // ... data to create a Language
     *   }
     * })
     * 
    **/
    create<T extends languageCreateArgs>(
      args: SelectSubset<T, languageCreateArgs>
    ): Prisma__languageClient<languageGetPayload<T>>

    /**
     * Create many Languages.
     *     @param {languageCreateManyArgs} args - Arguments to create many Languages.
     *     @example
     *     // Create many Languages
     *     const language = await prisma.language.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends languageCreateManyArgs>(
      args?: SelectSubset<T, languageCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Language.
     * @param {languageDeleteArgs} args - Arguments to delete one Language.
     * @example
     * // Delete one Language
     * const Language = await prisma.language.delete({
     *   where: {
     *     // ... filter to delete one Language
     *   }
     * })
     * 
    **/
    delete<T extends languageDeleteArgs>(
      args: SelectSubset<T, languageDeleteArgs>
    ): Prisma__languageClient<languageGetPayload<T>>

    /**
     * Update one Language.
     * @param {languageUpdateArgs} args - Arguments to update one Language.
     * @example
     * // Update one Language
     * const language = await prisma.language.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends languageUpdateArgs>(
      args: SelectSubset<T, languageUpdateArgs>
    ): Prisma__languageClient<languageGetPayload<T>>

    /**
     * Delete zero or more Languages.
     * @param {languageDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.language.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends languageDeleteManyArgs>(
      args?: SelectSubset<T, languageDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends languageUpdateManyArgs>(
      args: SelectSubset<T, languageUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Language.
     * @param {languageUpsertArgs} args - Arguments to update or create a Language.
     * @example
     * // Update or create a Language
     * const language = await prisma.language.upsert({
     *   create: {
     *     // ... data to create a Language
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Language we want to update
     *   }
     * })
    **/
    upsert<T extends languageUpsertArgs>(
      args: SelectSubset<T, languageUpsertArgs>
    ): Prisma__languageClient<languageGetPayload<T>>

    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languageCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.language.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends languageCountArgs>(
      args?: Subset<T, languageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LanguageAggregateArgs>(args: Subset<T, LanguageAggregateArgs>): Prisma.PrismaPromise<GetLanguageAggregateType<T>>

    /**
     * Group by Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageGroupByArgs['orderBy'] }
        : { orderBy?: LanguageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for language.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__languageClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    film_film_language_idTolanguage<T extends language$film_film_language_idTolanguageArgs= {}>(args?: Subset<T, language$film_film_language_idTolanguageArgs>): Prisma.PrismaPromise<Array<filmGetPayload<T>>| Null>;

    film_film_original_language_idTolanguage<T extends language$film_film_original_language_idTolanguageArgs= {}>(args?: Subset<T, language$film_film_original_language_idTolanguageArgs>): Prisma.PrismaPromise<Array<filmGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * language base type for findUnique actions
   */
  export type languageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: languageInclude | null
    /**
     * Filter, which language to fetch.
     */
    where: languageWhereUniqueInput
  }

  /**
   * language findUnique
   */
  export interface languageFindUniqueArgs extends languageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * language findUniqueOrThrow
   */
  export type languageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: languageInclude | null
    /**
     * Filter, which language to fetch.
     */
    where: languageWhereUniqueInput
  }


  /**
   * language base type for findFirst actions
   */
  export type languageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: languageInclude | null
    /**
     * Filter, which language to fetch.
     */
    where?: languageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of languages to fetch.
     */
    orderBy?: Enumerable<languageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for languages.
     */
    cursor?: languageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of languages.
     */
    distinct?: Enumerable<LanguageScalarFieldEnum>
  }

  /**
   * language findFirst
   */
  export interface languageFindFirstArgs extends languageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * language findFirstOrThrow
   */
  export type languageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: languageInclude | null
    /**
     * Filter, which language to fetch.
     */
    where?: languageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of languages to fetch.
     */
    orderBy?: Enumerable<languageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for languages.
     */
    cursor?: languageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of languages.
     */
    distinct?: Enumerable<LanguageScalarFieldEnum>
  }


  /**
   * language findMany
   */
  export type languageFindManyArgs = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: languageInclude | null
    /**
     * Filter, which languages to fetch.
     */
    where?: languageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of languages to fetch.
     */
    orderBy?: Enumerable<languageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing languages.
     */
    cursor?: languageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` languages.
     */
    skip?: number
    distinct?: Enumerable<LanguageScalarFieldEnum>
  }


  /**
   * language create
   */
  export type languageCreateArgs = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: languageInclude | null
    /**
     * The data needed to create a language.
     */
    data: XOR<languageCreateInput, languageUncheckedCreateInput>
  }


  /**
   * language createMany
   */
  export type languageCreateManyArgs = {
    /**
     * The data used to create many languages.
     */
    data: Enumerable<languageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * language update
   */
  export type languageUpdateArgs = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: languageInclude | null
    /**
     * The data needed to update a language.
     */
    data: XOR<languageUpdateInput, languageUncheckedUpdateInput>
    /**
     * Choose, which language to update.
     */
    where: languageWhereUniqueInput
  }


  /**
   * language updateMany
   */
  export type languageUpdateManyArgs = {
    /**
     * The data used to update languages.
     */
    data: XOR<languageUpdateManyMutationInput, languageUncheckedUpdateManyInput>
    /**
     * Filter which languages to update
     */
    where?: languageWhereInput
  }


  /**
   * language upsert
   */
  export type languageUpsertArgs = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: languageInclude | null
    /**
     * The filter to search for the language to update in case it exists.
     */
    where: languageWhereUniqueInput
    /**
     * In case the language found by the `where` argument doesn't exist, create a new language with this data.
     */
    create: XOR<languageCreateInput, languageUncheckedCreateInput>
    /**
     * In case the language was found with the provided `where` argument, update it with this data.
     */
    update: XOR<languageUpdateInput, languageUncheckedUpdateInput>
  }


  /**
   * language delete
   */
  export type languageDeleteArgs = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: languageInclude | null
    /**
     * Filter which language to delete.
     */
    where: languageWhereUniqueInput
  }


  /**
   * language deleteMany
   */
  export type languageDeleteManyArgs = {
    /**
     * Filter which languages to delete
     */
    where?: languageWhereInput
  }


  /**
   * language.film_film_language_idTolanguage
   */
  export type language$film_film_language_idTolanguageArgs = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filmInclude | null
    where?: filmWhereInput
    orderBy?: Enumerable<filmOrderByWithRelationInput>
    cursor?: filmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FilmScalarFieldEnum>
  }


  /**
   * language.film_film_original_language_idTolanguage
   */
  export type language$film_film_original_language_idTolanguageArgs = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filmInclude | null
    where?: filmWhereInput
    orderBy?: Enumerable<filmOrderByWithRelationInput>
    cursor?: filmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FilmScalarFieldEnum>
  }


  /**
   * language without action
   */
  export type languageArgs = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: languageInclude | null
  }



  /**
   * Model payment
   */


  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    payment_id: number | null
    customer_id: number | null
    staff_id: number | null
    rental_id: number | null
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    payment_id: number | null
    customer_id: number | null
    staff_id: number | null
    rental_id: number | null
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    payment_id: number | null
    customer_id: number | null
    staff_id: number | null
    rental_id: number | null
    amount: Decimal | null
    payment_date: Date | null
    last_update: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    payment_id: number | null
    customer_id: number | null
    staff_id: number | null
    rental_id: number | null
    amount: Decimal | null
    payment_date: Date | null
    last_update: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    payment_id: number
    customer_id: number
    staff_id: number
    rental_id: number
    amount: number
    payment_date: number
    last_update: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    payment_id?: true
    customer_id?: true
    staff_id?: true
    rental_id?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    payment_id?: true
    customer_id?: true
    staff_id?: true
    rental_id?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    payment_id?: true
    customer_id?: true
    staff_id?: true
    rental_id?: true
    amount?: true
    payment_date?: true
    last_update?: true
  }

  export type PaymentMaxAggregateInputType = {
    payment_id?: true
    customer_id?: true
    staff_id?: true
    rental_id?: true
    amount?: true
    payment_date?: true
    last_update?: true
  }

  export type PaymentCountAggregateInputType = {
    payment_id?: true
    customer_id?: true
    staff_id?: true
    rental_id?: true
    amount?: true
    payment_date?: true
    last_update?: true
    _all?: true
  }

  export type PaymentAggregateArgs = {
    /**
     * Filter which payment to aggregate.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: Enumerable<paymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs = {
    where?: paymentWhereInput
    orderBy?: Enumerable<paymentOrderByWithAggregationInput>
    by: PaymentScalarFieldEnum[]
    having?: paymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }


  export type PaymentGroupByOutputType = {
    payment_id: number
    customer_id: number
    staff_id: number
    rental_id: number | null
    amount: Decimal
    payment_date: Date
    last_update: Date | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type paymentSelect = {
    payment_id?: boolean
    customer_id?: boolean
    staff_id?: boolean
    rental_id?: boolean
    amount?: boolean
    payment_date?: boolean
    last_update?: boolean
    customer?: boolean | customerArgs
    rental?: boolean | rentalArgs
    staff?: boolean | staffArgs
  }


  export type paymentInclude = {
    customer?: boolean | customerArgs
    rental?: boolean | rentalArgs
    staff?: boolean | staffArgs
  }

  export type paymentGetPayload<S extends boolean | null | undefined | paymentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? payment :
    S extends undefined ? never :
    S extends { include: any } & (paymentArgs | paymentFindManyArgs)
    ? payment  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'customer' ? customerGetPayload<S['include'][P]> :
        P extends 'rental' ? rentalGetPayload<S['include'][P]> | null :
        P extends 'staff' ? staffGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (paymentArgs | paymentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'customer' ? customerGetPayload<S['select'][P]> :
        P extends 'rental' ? rentalGetPayload<S['select'][P]> | null :
        P extends 'staff' ? staffGetPayload<S['select'][P]> :  P extends keyof payment ? payment[P] : never
  } 
      : payment


  type paymentCountArgs = 
    Omit<paymentFindManyArgs, 'select' | 'include'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface paymentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Payment that matches the filter.
     * @param {paymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends paymentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, paymentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'payment'> extends True ? Prisma__paymentClient<paymentGetPayload<T>> : Prisma__paymentClient<paymentGetPayload<T> | null, null>

    /**
     * Find one Payment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {paymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends paymentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, paymentFindUniqueOrThrowArgs>
    ): Prisma__paymentClient<paymentGetPayload<T>>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends paymentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, paymentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'payment'> extends True ? Prisma__paymentClient<paymentGetPayload<T>> : Prisma__paymentClient<paymentGetPayload<T> | null, null>

    /**
     * Find the first Payment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends paymentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, paymentFindFirstOrThrowArgs>
    ): Prisma__paymentClient<paymentGetPayload<T>>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.findMany({ select: { payment_id: true } })
     * 
    **/
    findMany<T extends paymentFindManyArgs>(
      args?: SelectSubset<T, paymentFindManyArgs>
    ): Prisma.PrismaPromise<Array<paymentGetPayload<T>>>

    /**
     * Create a Payment.
     * @param {paymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
    **/
    create<T extends paymentCreateArgs>(
      args: SelectSubset<T, paymentCreateArgs>
    ): Prisma__paymentClient<paymentGetPayload<T>>

    /**
     * Create many Payments.
     *     @param {paymentCreateManyArgs} args - Arguments to create many Payments.
     *     @example
     *     // Create many Payments
     *     const payment = await prisma.payment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends paymentCreateManyArgs>(
      args?: SelectSubset<T, paymentCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {paymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
    **/
    delete<T extends paymentDeleteArgs>(
      args: SelectSubset<T, paymentDeleteArgs>
    ): Prisma__paymentClient<paymentGetPayload<T>>

    /**
     * Update one Payment.
     * @param {paymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends paymentUpdateArgs>(
      args: SelectSubset<T, paymentUpdateArgs>
    ): Prisma__paymentClient<paymentGetPayload<T>>

    /**
     * Delete zero or more Payments.
     * @param {paymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends paymentDeleteManyArgs>(
      args?: SelectSubset<T, paymentDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends paymentUpdateManyArgs>(
      args: SelectSubset<T, paymentUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {paymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
    **/
    upsert<T extends paymentUpsertArgs>(
      args: SelectSubset<T, paymentUpsertArgs>
    ): Prisma__paymentClient<paymentGetPayload<T>>

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentCountArgs>(
      args?: Subset<T, paymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__paymentClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    customer<T extends customerArgs= {}>(args?: Subset<T, customerArgs>): Prisma__customerClient<customerGetPayload<T> | Null>;

    rental<T extends rentalArgs= {}>(args?: Subset<T, rentalArgs>): Prisma__rentalClient<rentalGetPayload<T> | Null>;

    staff<T extends staffArgs= {}>(args?: Subset<T, staffArgs>): Prisma__staffClient<staffGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * payment base type for findUnique actions
   */
  export type paymentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude | null
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment findUnique
   */
  export interface paymentFindUniqueArgs extends paymentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * payment findUniqueOrThrow
   */
  export type paymentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude | null
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput
  }


  /**
   * payment base type for findFirst actions
   */
  export type paymentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude | null
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: Enumerable<paymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: Enumerable<PaymentScalarFieldEnum>
  }

  /**
   * payment findFirst
   */
  export interface paymentFindFirstArgs extends paymentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * payment findFirstOrThrow
   */
  export type paymentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude | null
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: Enumerable<paymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: Enumerable<PaymentScalarFieldEnum>
  }


  /**
   * payment findMany
   */
  export type paymentFindManyArgs = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: Enumerable<paymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: Enumerable<PaymentScalarFieldEnum>
  }


  /**
   * payment create
   */
  export type paymentCreateArgs = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude | null
    /**
     * The data needed to create a payment.
     */
    data: XOR<paymentCreateInput, paymentUncheckedCreateInput>
  }


  /**
   * payment createMany
   */
  export type paymentCreateManyArgs = {
    /**
     * The data used to create many payments.
     */
    data: Enumerable<paymentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * payment update
   */
  export type paymentUpdateArgs = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude | null
    /**
     * The data needed to update a payment.
     */
    data: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>
    /**
     * Choose, which payment to update.
     */
    where: paymentWhereUniqueInput
  }


  /**
   * payment updateMany
   */
  export type paymentUpdateManyArgs = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentWhereInput
  }


  /**
   * payment upsert
   */
  export type paymentUpsertArgs = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude | null
    /**
     * The filter to search for the payment to update in case it exists.
     */
    where: paymentWhereUniqueInput
    /**
     * In case the payment found by the `where` argument doesn't exist, create a new payment with this data.
     */
    create: XOR<paymentCreateInput, paymentUncheckedCreateInput>
    /**
     * In case the payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>
  }


  /**
   * payment delete
   */
  export type paymentDeleteArgs = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude | null
    /**
     * Filter which payment to delete.
     */
    where: paymentWhereUniqueInput
  }


  /**
   * payment deleteMany
   */
  export type paymentDeleteManyArgs = {
    /**
     * Filter which payments to delete
     */
    where?: paymentWhereInput
  }


  /**
   * payment without action
   */
  export type paymentArgs = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude | null
  }



  /**
   * Model rental
   */


  export type AggregateRental = {
    _count: RentalCountAggregateOutputType | null
    _avg: RentalAvgAggregateOutputType | null
    _sum: RentalSumAggregateOutputType | null
    _min: RentalMinAggregateOutputType | null
    _max: RentalMaxAggregateOutputType | null
  }

  export type RentalAvgAggregateOutputType = {
    rental_id: number | null
    inventory_id: number | null
    customer_id: number | null
    staff_id: number | null
  }

  export type RentalSumAggregateOutputType = {
    rental_id: number | null
    inventory_id: number | null
    customer_id: number | null
    staff_id: number | null
  }

  export type RentalMinAggregateOutputType = {
    rental_id: number | null
    rental_date: Date | null
    inventory_id: number | null
    customer_id: number | null
    return_date: Date | null
    staff_id: number | null
    last_update: Date | null
  }

  export type RentalMaxAggregateOutputType = {
    rental_id: number | null
    rental_date: Date | null
    inventory_id: number | null
    customer_id: number | null
    return_date: Date | null
    staff_id: number | null
    last_update: Date | null
  }

  export type RentalCountAggregateOutputType = {
    rental_id: number
    rental_date: number
    inventory_id: number
    customer_id: number
    return_date: number
    staff_id: number
    last_update: number
    _all: number
  }


  export type RentalAvgAggregateInputType = {
    rental_id?: true
    inventory_id?: true
    customer_id?: true
    staff_id?: true
  }

  export type RentalSumAggregateInputType = {
    rental_id?: true
    inventory_id?: true
    customer_id?: true
    staff_id?: true
  }

  export type RentalMinAggregateInputType = {
    rental_id?: true
    rental_date?: true
    inventory_id?: true
    customer_id?: true
    return_date?: true
    staff_id?: true
    last_update?: true
  }

  export type RentalMaxAggregateInputType = {
    rental_id?: true
    rental_date?: true
    inventory_id?: true
    customer_id?: true
    return_date?: true
    staff_id?: true
    last_update?: true
  }

  export type RentalCountAggregateInputType = {
    rental_id?: true
    rental_date?: true
    inventory_id?: true
    customer_id?: true
    return_date?: true
    staff_id?: true
    last_update?: true
    _all?: true
  }

  export type RentalAggregateArgs = {
    /**
     * Filter which rental to aggregate.
     */
    where?: rentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rentals to fetch.
     */
    orderBy?: Enumerable<rentalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rentals
    **/
    _count?: true | RentalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalMaxAggregateInputType
  }

  export type GetRentalAggregateType<T extends RentalAggregateArgs> = {
        [P in keyof T & keyof AggregateRental]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRental[P]>
      : GetScalarType<T[P], AggregateRental[P]>
  }




  export type RentalGroupByArgs = {
    where?: rentalWhereInput
    orderBy?: Enumerable<rentalOrderByWithAggregationInput>
    by: RentalScalarFieldEnum[]
    having?: rentalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalCountAggregateInputType | true
    _avg?: RentalAvgAggregateInputType
    _sum?: RentalSumAggregateInputType
    _min?: RentalMinAggregateInputType
    _max?: RentalMaxAggregateInputType
  }


  export type RentalGroupByOutputType = {
    rental_id: number
    rental_date: Date
    inventory_id: number
    customer_id: number
    return_date: Date | null
    staff_id: number
    last_update: Date
    _count: RentalCountAggregateOutputType | null
    _avg: RentalAvgAggregateOutputType | null
    _sum: RentalSumAggregateOutputType | null
    _min: RentalMinAggregateOutputType | null
    _max: RentalMaxAggregateOutputType | null
  }

  type GetRentalGroupByPayload<T extends RentalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RentalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalGroupByOutputType[P]>
            : GetScalarType<T[P], RentalGroupByOutputType[P]>
        }
      >
    >


  export type rentalSelect = {
    rental_id?: boolean
    rental_date?: boolean
    inventory_id?: boolean
    customer_id?: boolean
    return_date?: boolean
    staff_id?: boolean
    last_update?: boolean
    payment?: boolean | rental$paymentArgs
    customer?: boolean | customerArgs
    inventory?: boolean | inventoryArgs
    staff?: boolean | staffArgs
    _count?: boolean | RentalCountOutputTypeArgs
  }


  export type rentalInclude = {
    payment?: boolean | rental$paymentArgs
    customer?: boolean | customerArgs
    inventory?: boolean | inventoryArgs
    staff?: boolean | staffArgs
    _count?: boolean | RentalCountOutputTypeArgs
  }

  export type rentalGetPayload<S extends boolean | null | undefined | rentalArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? rental :
    S extends undefined ? never :
    S extends { include: any } & (rentalArgs | rentalFindManyArgs)
    ? rental  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'payment' ? Array < paymentGetPayload<S['include'][P]>>  :
        P extends 'customer' ? customerGetPayload<S['include'][P]> :
        P extends 'inventory' ? inventoryGetPayload<S['include'][P]> :
        P extends 'staff' ? staffGetPayload<S['include'][P]> :
        P extends '_count' ? RentalCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (rentalArgs | rentalFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'payment' ? Array < paymentGetPayload<S['select'][P]>>  :
        P extends 'customer' ? customerGetPayload<S['select'][P]> :
        P extends 'inventory' ? inventoryGetPayload<S['select'][P]> :
        P extends 'staff' ? staffGetPayload<S['select'][P]> :
        P extends '_count' ? RentalCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof rental ? rental[P] : never
  } 
      : rental


  type rentalCountArgs = 
    Omit<rentalFindManyArgs, 'select' | 'include'> & {
      select?: RentalCountAggregateInputType | true
    }

  export interface rentalDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Rental that matches the filter.
     * @param {rentalFindUniqueArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends rentalFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, rentalFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'rental'> extends True ? Prisma__rentalClient<rentalGetPayload<T>> : Prisma__rentalClient<rentalGetPayload<T> | null, null>

    /**
     * Find one Rental that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {rentalFindUniqueOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends rentalFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, rentalFindUniqueOrThrowArgs>
    ): Prisma__rentalClient<rentalGetPayload<T>>

    /**
     * Find the first Rental that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalFindFirstArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends rentalFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, rentalFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'rental'> extends True ? Prisma__rentalClient<rentalGetPayload<T>> : Prisma__rentalClient<rentalGetPayload<T> | null, null>

    /**
     * Find the first Rental that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalFindFirstOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends rentalFindFirstOrThrowArgs>(
      args?: SelectSubset<T, rentalFindFirstOrThrowArgs>
    ): Prisma__rentalClient<rentalGetPayload<T>>

    /**
     * Find zero or more Rentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rentals
     * const rentals = await prisma.rental.findMany()
     * 
     * // Get first 10 Rentals
     * const rentals = await prisma.rental.findMany({ take: 10 })
     * 
     * // Only select the `rental_id`
     * const rentalWithRental_idOnly = await prisma.rental.findMany({ select: { rental_id: true } })
     * 
    **/
    findMany<T extends rentalFindManyArgs>(
      args?: SelectSubset<T, rentalFindManyArgs>
    ): Prisma.PrismaPromise<Array<rentalGetPayload<T>>>

    /**
     * Create a Rental.
     * @param {rentalCreateArgs} args - Arguments to create a Rental.
     * @example
     * // Create one Rental
     * const Rental = await prisma.rental.create({
     *   data: {
     *     // ... data to create a Rental
     *   }
     * })
     * 
    **/
    create<T extends rentalCreateArgs>(
      args: SelectSubset<T, rentalCreateArgs>
    ): Prisma__rentalClient<rentalGetPayload<T>>

    /**
     * Create many Rentals.
     *     @param {rentalCreateManyArgs} args - Arguments to create many Rentals.
     *     @example
     *     // Create many Rentals
     *     const rental = await prisma.rental.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends rentalCreateManyArgs>(
      args?: SelectSubset<T, rentalCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rental.
     * @param {rentalDeleteArgs} args - Arguments to delete one Rental.
     * @example
     * // Delete one Rental
     * const Rental = await prisma.rental.delete({
     *   where: {
     *     // ... filter to delete one Rental
     *   }
     * })
     * 
    **/
    delete<T extends rentalDeleteArgs>(
      args: SelectSubset<T, rentalDeleteArgs>
    ): Prisma__rentalClient<rentalGetPayload<T>>

    /**
     * Update one Rental.
     * @param {rentalUpdateArgs} args - Arguments to update one Rental.
     * @example
     * // Update one Rental
     * const rental = await prisma.rental.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends rentalUpdateArgs>(
      args: SelectSubset<T, rentalUpdateArgs>
    ): Prisma__rentalClient<rentalGetPayload<T>>

    /**
     * Delete zero or more Rentals.
     * @param {rentalDeleteManyArgs} args - Arguments to filter Rentals to delete.
     * @example
     * // Delete a few Rentals
     * const { count } = await prisma.rental.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends rentalDeleteManyArgs>(
      args?: SelectSubset<T, rentalDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rentals
     * const rental = await prisma.rental.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends rentalUpdateManyArgs>(
      args: SelectSubset<T, rentalUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rental.
     * @param {rentalUpsertArgs} args - Arguments to update or create a Rental.
     * @example
     * // Update or create a Rental
     * const rental = await prisma.rental.upsert({
     *   create: {
     *     // ... data to create a Rental
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rental we want to update
     *   }
     * })
    **/
    upsert<T extends rentalUpsertArgs>(
      args: SelectSubset<T, rentalUpsertArgs>
    ): Prisma__rentalClient<rentalGetPayload<T>>

    /**
     * Count the number of Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalCountArgs} args - Arguments to filter Rentals to count.
     * @example
     * // Count the number of Rentals
     * const count = await prisma.rental.count({
     *   where: {
     *     // ... the filter for the Rentals we want to count
     *   }
     * })
    **/
    count<T extends rentalCountArgs>(
      args?: Subset<T, rentalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentalAggregateArgs>(args: Subset<T, RentalAggregateArgs>): Prisma.PrismaPromise<GetRentalAggregateType<T>>

    /**
     * Group by Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RentalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentalGroupByArgs['orderBy'] }
        : { orderBy?: RentalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RentalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for rental.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__rentalClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    payment<T extends rental$paymentArgs= {}>(args?: Subset<T, rental$paymentArgs>): Prisma.PrismaPromise<Array<paymentGetPayload<T>>| Null>;

    customer<T extends customerArgs= {}>(args?: Subset<T, customerArgs>): Prisma__customerClient<customerGetPayload<T> | Null>;

    inventory<T extends inventoryArgs= {}>(args?: Subset<T, inventoryArgs>): Prisma__inventoryClient<inventoryGetPayload<T> | Null>;

    staff<T extends staffArgs= {}>(args?: Subset<T, staffArgs>): Prisma__staffClient<staffGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * rental base type for findUnique actions
   */
  export type rentalFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude | null
    /**
     * Filter, which rental to fetch.
     */
    where: rentalWhereUniqueInput
  }

  /**
   * rental findUnique
   */
  export interface rentalFindUniqueArgs extends rentalFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * rental findUniqueOrThrow
   */
  export type rentalFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude | null
    /**
     * Filter, which rental to fetch.
     */
    where: rentalWhereUniqueInput
  }


  /**
   * rental base type for findFirst actions
   */
  export type rentalFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude | null
    /**
     * Filter, which rental to fetch.
     */
    where?: rentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rentals to fetch.
     */
    orderBy?: Enumerable<rentalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rentals.
     */
    cursor?: rentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rentals.
     */
    distinct?: Enumerable<RentalScalarFieldEnum>
  }

  /**
   * rental findFirst
   */
  export interface rentalFindFirstArgs extends rentalFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * rental findFirstOrThrow
   */
  export type rentalFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude | null
    /**
     * Filter, which rental to fetch.
     */
    where?: rentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rentals to fetch.
     */
    orderBy?: Enumerable<rentalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rentals.
     */
    cursor?: rentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rentals.
     */
    distinct?: Enumerable<RentalScalarFieldEnum>
  }


  /**
   * rental findMany
   */
  export type rentalFindManyArgs = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude | null
    /**
     * Filter, which rentals to fetch.
     */
    where?: rentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rentals to fetch.
     */
    orderBy?: Enumerable<rentalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rentals.
     */
    cursor?: rentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rentals.
     */
    skip?: number
    distinct?: Enumerable<RentalScalarFieldEnum>
  }


  /**
   * rental create
   */
  export type rentalCreateArgs = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude | null
    /**
     * The data needed to create a rental.
     */
    data: XOR<rentalCreateInput, rentalUncheckedCreateInput>
  }


  /**
   * rental createMany
   */
  export type rentalCreateManyArgs = {
    /**
     * The data used to create many rentals.
     */
    data: Enumerable<rentalCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * rental update
   */
  export type rentalUpdateArgs = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude | null
    /**
     * The data needed to update a rental.
     */
    data: XOR<rentalUpdateInput, rentalUncheckedUpdateInput>
    /**
     * Choose, which rental to update.
     */
    where: rentalWhereUniqueInput
  }


  /**
   * rental updateMany
   */
  export type rentalUpdateManyArgs = {
    /**
     * The data used to update rentals.
     */
    data: XOR<rentalUpdateManyMutationInput, rentalUncheckedUpdateManyInput>
    /**
     * Filter which rentals to update
     */
    where?: rentalWhereInput
  }


  /**
   * rental upsert
   */
  export type rentalUpsertArgs = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude | null
    /**
     * The filter to search for the rental to update in case it exists.
     */
    where: rentalWhereUniqueInput
    /**
     * In case the rental found by the `where` argument doesn't exist, create a new rental with this data.
     */
    create: XOR<rentalCreateInput, rentalUncheckedCreateInput>
    /**
     * In case the rental was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rentalUpdateInput, rentalUncheckedUpdateInput>
  }


  /**
   * rental delete
   */
  export type rentalDeleteArgs = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude | null
    /**
     * Filter which rental to delete.
     */
    where: rentalWhereUniqueInput
  }


  /**
   * rental deleteMany
   */
  export type rentalDeleteManyArgs = {
    /**
     * Filter which rentals to delete
     */
    where?: rentalWhereInput
  }


  /**
   * rental.payment
   */
  export type rental$paymentArgs = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude | null
    where?: paymentWhereInput
    orderBy?: Enumerable<paymentOrderByWithRelationInput>
    cursor?: paymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PaymentScalarFieldEnum>
  }


  /**
   * rental without action
   */
  export type rentalArgs = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude | null
  }



  /**
   * Model staff
   */


  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffAvgAggregateOutputType = {
    staff_id: number | null
    address_id: number | null
    store_id: number | null
  }

  export type StaffSumAggregateOutputType = {
    staff_id: number | null
    address_id: number | null
    store_id: number | null
  }

  export type StaffMinAggregateOutputType = {
    staff_id: number | null
    first_name: string | null
    last_name: string | null
    address_id: number | null
    picture: Buffer | null
    email: string | null
    store_id: number | null
    active: boolean | null
    username: string | null
    password: string | null
    last_update: Date | null
  }

  export type StaffMaxAggregateOutputType = {
    staff_id: number | null
    first_name: string | null
    last_name: string | null
    address_id: number | null
    picture: Buffer | null
    email: string | null
    store_id: number | null
    active: boolean | null
    username: string | null
    password: string | null
    last_update: Date | null
  }

  export type StaffCountAggregateOutputType = {
    staff_id: number
    first_name: number
    last_name: number
    address_id: number
    picture: number
    email: number
    store_id: number
    active: number
    username: number
    password: number
    last_update: number
    _all: number
  }


  export type StaffAvgAggregateInputType = {
    staff_id?: true
    address_id?: true
    store_id?: true
  }

  export type StaffSumAggregateInputType = {
    staff_id?: true
    address_id?: true
    store_id?: true
  }

  export type StaffMinAggregateInputType = {
    staff_id?: true
    first_name?: true
    last_name?: true
    address_id?: true
    picture?: true
    email?: true
    store_id?: true
    active?: true
    username?: true
    password?: true
    last_update?: true
  }

  export type StaffMaxAggregateInputType = {
    staff_id?: true
    first_name?: true
    last_name?: true
    address_id?: true
    picture?: true
    email?: true
    store_id?: true
    active?: true
    username?: true
    password?: true
    last_update?: true
  }

  export type StaffCountAggregateInputType = {
    staff_id?: true
    first_name?: true
    last_name?: true
    address_id?: true
    picture?: true
    email?: true
    store_id?: true
    active?: true
    username?: true
    password?: true
    last_update?: true
    _all?: true
  }

  export type StaffAggregateArgs = {
    /**
     * Filter which staff to aggregate.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: Enumerable<staffOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs = {
    where?: staffWhereInput
    orderBy?: Enumerable<staffOrderByWithAggregationInput>
    by: StaffScalarFieldEnum[]
    having?: staffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _avg?: StaffAvgAggregateInputType
    _sum?: StaffSumAggregateInputType
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }


  export type StaffGroupByOutputType = {
    staff_id: number
    first_name: string
    last_name: string
    address_id: number
    picture: Buffer | null
    email: string | null
    store_id: number
    active: boolean
    username: string
    password: string | null
    last_update: Date
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type staffSelect = {
    staff_id?: boolean
    first_name?: boolean
    last_name?: boolean
    address_id?: boolean
    picture?: boolean
    email?: boolean
    store_id?: boolean
    active?: boolean
    username?: boolean
    password?: boolean
    last_update?: boolean
    payment?: boolean | staff$paymentArgs
    rental?: boolean | staff$rentalArgs
    address?: boolean | addressArgs
    store_staff_store_idTostore?: boolean | storeArgs
    store_store_manager_staff_idTostaff?: boolean | storeArgs
    _count?: boolean | StaffCountOutputTypeArgs
  }


  export type staffInclude = {
    payment?: boolean | staff$paymentArgs
    rental?: boolean | staff$rentalArgs
    address?: boolean | addressArgs
    store_staff_store_idTostore?: boolean | storeArgs
    store_store_manager_staff_idTostaff?: boolean | storeArgs
    _count?: boolean | StaffCountOutputTypeArgs
  }

  export type staffGetPayload<S extends boolean | null | undefined | staffArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? staff :
    S extends undefined ? never :
    S extends { include: any } & (staffArgs | staffFindManyArgs)
    ? staff  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'payment' ? Array < paymentGetPayload<S['include'][P]>>  :
        P extends 'rental' ? Array < rentalGetPayload<S['include'][P]>>  :
        P extends 'address' ? addressGetPayload<S['include'][P]> :
        P extends 'store_staff_store_idTostore' ? storeGetPayload<S['include'][P]> :
        P extends 'store_store_manager_staff_idTostaff' ? storeGetPayload<S['include'][P]> | null :
        P extends '_count' ? StaffCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (staffArgs | staffFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'payment' ? Array < paymentGetPayload<S['select'][P]>>  :
        P extends 'rental' ? Array < rentalGetPayload<S['select'][P]>>  :
        P extends 'address' ? addressGetPayload<S['select'][P]> :
        P extends 'store_staff_store_idTostore' ? storeGetPayload<S['select'][P]> :
        P extends 'store_store_manager_staff_idTostaff' ? storeGetPayload<S['select'][P]> | null :
        P extends '_count' ? StaffCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof staff ? staff[P] : never
  } 
      : staff


  type staffCountArgs = 
    Omit<staffFindManyArgs, 'select' | 'include'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface staffDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Staff that matches the filter.
     * @param {staffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends staffFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, staffFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'staff'> extends True ? Prisma__staffClient<staffGetPayload<T>> : Prisma__staffClient<staffGetPayload<T> | null, null>

    /**
     * Find one Staff that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {staffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends staffFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, staffFindUniqueOrThrowArgs>
    ): Prisma__staffClient<staffGetPayload<T>>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends staffFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, staffFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'staff'> extends True ? Prisma__staffClient<staffGetPayload<T>> : Prisma__staffClient<staffGetPayload<T> | null, null>

    /**
     * Find the first Staff that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends staffFindFirstOrThrowArgs>(
      args?: SelectSubset<T, staffFindFirstOrThrowArgs>
    ): Prisma__staffClient<staffGetPayload<T>>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `staff_id`
     * const staffWithStaff_idOnly = await prisma.staff.findMany({ select: { staff_id: true } })
     * 
    **/
    findMany<T extends staffFindManyArgs>(
      args?: SelectSubset<T, staffFindManyArgs>
    ): Prisma.PrismaPromise<Array<staffGetPayload<T>>>

    /**
     * Create a Staff.
     * @param {staffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
    **/
    create<T extends staffCreateArgs>(
      args: SelectSubset<T, staffCreateArgs>
    ): Prisma__staffClient<staffGetPayload<T>>

    /**
     * Create many Staff.
     *     @param {staffCreateManyArgs} args - Arguments to create many Staff.
     *     @example
     *     // Create many Staff
     *     const staff = await prisma.staff.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends staffCreateManyArgs>(
      args?: SelectSubset<T, staffCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Staff.
     * @param {staffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
    **/
    delete<T extends staffDeleteArgs>(
      args: SelectSubset<T, staffDeleteArgs>
    ): Prisma__staffClient<staffGetPayload<T>>

    /**
     * Update one Staff.
     * @param {staffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends staffUpdateArgs>(
      args: SelectSubset<T, staffUpdateArgs>
    ): Prisma__staffClient<staffGetPayload<T>>

    /**
     * Delete zero or more Staff.
     * @param {staffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends staffDeleteManyArgs>(
      args?: SelectSubset<T, staffDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends staffUpdateManyArgs>(
      args: SelectSubset<T, staffUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Staff.
     * @param {staffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
    **/
    upsert<T extends staffUpsertArgs>(
      args: SelectSubset<T, staffUpsertArgs>
    ): Prisma__staffClient<staffGetPayload<T>>

    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends staffCountArgs>(
      args?: Subset<T, staffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__staffClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    payment<T extends staff$paymentArgs= {}>(args?: Subset<T, staff$paymentArgs>): Prisma.PrismaPromise<Array<paymentGetPayload<T>>| Null>;

    rental<T extends staff$rentalArgs= {}>(args?: Subset<T, staff$rentalArgs>): Prisma.PrismaPromise<Array<rentalGetPayload<T>>| Null>;

    address<T extends addressArgs= {}>(args?: Subset<T, addressArgs>): Prisma__addressClient<addressGetPayload<T> | Null>;

    store_staff_store_idTostore<T extends storeArgs= {}>(args?: Subset<T, storeArgs>): Prisma__storeClient<storeGetPayload<T> | Null>;

    store_store_manager_staff_idTostaff<T extends storeArgs= {}>(args?: Subset<T, storeArgs>): Prisma__storeClient<storeGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * staff base type for findUnique actions
   */
  export type staffFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude | null
    /**
     * Filter, which staff to fetch.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff findUnique
   */
  export interface staffFindUniqueArgs extends staffFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * staff findUniqueOrThrow
   */
  export type staffFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude | null
    /**
     * Filter, which staff to fetch.
     */
    where: staffWhereUniqueInput
  }


  /**
   * staff base type for findFirst actions
   */
  export type staffFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: Enumerable<staffOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staff.
     */
    distinct?: Enumerable<StaffScalarFieldEnum>
  }

  /**
   * staff findFirst
   */
  export interface staffFindFirstArgs extends staffFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * staff findFirstOrThrow
   */
  export type staffFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: Enumerable<staffOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staff.
     */
    distinct?: Enumerable<StaffScalarFieldEnum>
  }


  /**
   * staff findMany
   */
  export type staffFindManyArgs = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: Enumerable<staffOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    distinct?: Enumerable<StaffScalarFieldEnum>
  }


  /**
   * staff create
   */
  export type staffCreateArgs = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude | null
    /**
     * The data needed to create a staff.
     */
    data: XOR<staffCreateInput, staffUncheckedCreateInput>
  }


  /**
   * staff createMany
   */
  export type staffCreateManyArgs = {
    /**
     * The data used to create many staff.
     */
    data: Enumerable<staffCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * staff update
   */
  export type staffUpdateArgs = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude | null
    /**
     * The data needed to update a staff.
     */
    data: XOR<staffUpdateInput, staffUncheckedUpdateInput>
    /**
     * Choose, which staff to update.
     */
    where: staffWhereUniqueInput
  }


  /**
   * staff updateMany
   */
  export type staffUpdateManyArgs = {
    /**
     * The data used to update staff.
     */
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyInput>
    /**
     * Filter which staff to update
     */
    where?: staffWhereInput
  }


  /**
   * staff upsert
   */
  export type staffUpsertArgs = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude | null
    /**
     * The filter to search for the staff to update in case it exists.
     */
    where: staffWhereUniqueInput
    /**
     * In case the staff found by the `where` argument doesn't exist, create a new staff with this data.
     */
    create: XOR<staffCreateInput, staffUncheckedCreateInput>
    /**
     * In case the staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<staffUpdateInput, staffUncheckedUpdateInput>
  }


  /**
   * staff delete
   */
  export type staffDeleteArgs = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude | null
    /**
     * Filter which staff to delete.
     */
    where: staffWhereUniqueInput
  }


  /**
   * staff deleteMany
   */
  export type staffDeleteManyArgs = {
    /**
     * Filter which staff to delete
     */
    where?: staffWhereInput
  }


  /**
   * staff.payment
   */
  export type staff$paymentArgs = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude | null
    where?: paymentWhereInput
    orderBy?: Enumerable<paymentOrderByWithRelationInput>
    cursor?: paymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PaymentScalarFieldEnum>
  }


  /**
   * staff.rental
   */
  export type staff$rentalArgs = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude | null
    where?: rentalWhereInput
    orderBy?: Enumerable<rentalOrderByWithRelationInput>
    cursor?: rentalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RentalScalarFieldEnum>
  }


  /**
   * staff without action
   */
  export type staffArgs = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude | null
  }



  /**
   * Model store
   */


  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    store_id: number | null
    manager_staff_id: number | null
    address_id: number | null
  }

  export type StoreSumAggregateOutputType = {
    store_id: number | null
    manager_staff_id: number | null
    address_id: number | null
  }

  export type StoreMinAggregateOutputType = {
    store_id: number | null
    manager_staff_id: number | null
    address_id: number | null
    last_update: Date | null
  }

  export type StoreMaxAggregateOutputType = {
    store_id: number | null
    manager_staff_id: number | null
    address_id: number | null
    last_update: Date | null
  }

  export type StoreCountAggregateOutputType = {
    store_id: number
    manager_staff_id: number
    address_id: number
    last_update: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    store_id?: true
    manager_staff_id?: true
    address_id?: true
  }

  export type StoreSumAggregateInputType = {
    store_id?: true
    manager_staff_id?: true
    address_id?: true
  }

  export type StoreMinAggregateInputType = {
    store_id?: true
    manager_staff_id?: true
    address_id?: true
    last_update?: true
  }

  export type StoreMaxAggregateInputType = {
    store_id?: true
    manager_staff_id?: true
    address_id?: true
    last_update?: true
  }

  export type StoreCountAggregateInputType = {
    store_id?: true
    manager_staff_id?: true
    address_id?: true
    last_update?: true
    _all?: true
  }

  export type StoreAggregateArgs = {
    /**
     * Filter which store to aggregate.
     */
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: Enumerable<storeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs = {
    where?: storeWhereInput
    orderBy?: Enumerable<storeOrderByWithAggregationInput>
    by: StoreScalarFieldEnum[]
    having?: storeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }


  export type StoreGroupByOutputType = {
    store_id: number
    manager_staff_id: number
    address_id: number
    last_update: Date
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type storeSelect = {
    store_id?: boolean
    manager_staff_id?: boolean
    address_id?: boolean
    last_update?: boolean
    customer?: boolean | store$customerArgs
    inventory?: boolean | store$inventoryArgs
    staff_staff_store_idTostore?: boolean | store$staff_staff_store_idTostoreArgs
    address?: boolean | addressArgs
    staff_store_manager_staff_idTostaff?: boolean | staffArgs
    _count?: boolean | StoreCountOutputTypeArgs
  }


  export type storeInclude = {
    customer?: boolean | store$customerArgs
    inventory?: boolean | store$inventoryArgs
    staff_staff_store_idTostore?: boolean | store$staff_staff_store_idTostoreArgs
    address?: boolean | addressArgs
    staff_store_manager_staff_idTostaff?: boolean | staffArgs
    _count?: boolean | StoreCountOutputTypeArgs
  }

  export type storeGetPayload<S extends boolean | null | undefined | storeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? store :
    S extends undefined ? never :
    S extends { include: any } & (storeArgs | storeFindManyArgs)
    ? store  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'customer' ? Array < customerGetPayload<S['include'][P]>>  :
        P extends 'inventory' ? Array < inventoryGetPayload<S['include'][P]>>  :
        P extends 'staff_staff_store_idTostore' ? Array < staffGetPayload<S['include'][P]>>  :
        P extends 'address' ? addressGetPayload<S['include'][P]> :
        P extends 'staff_store_manager_staff_idTostaff' ? staffGetPayload<S['include'][P]> :
        P extends '_count' ? StoreCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (storeArgs | storeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'customer' ? Array < customerGetPayload<S['select'][P]>>  :
        P extends 'inventory' ? Array < inventoryGetPayload<S['select'][P]>>  :
        P extends 'staff_staff_store_idTostore' ? Array < staffGetPayload<S['select'][P]>>  :
        P extends 'address' ? addressGetPayload<S['select'][P]> :
        P extends 'staff_store_manager_staff_idTostaff' ? staffGetPayload<S['select'][P]> :
        P extends '_count' ? StoreCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof store ? store[P] : never
  } 
      : store


  type storeCountArgs = 
    Omit<storeFindManyArgs, 'select' | 'include'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface storeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Store that matches the filter.
     * @param {storeFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends storeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, storeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'store'> extends True ? Prisma__storeClient<storeGetPayload<T>> : Prisma__storeClient<storeGetPayload<T> | null, null>

    /**
     * Find one Store that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {storeFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends storeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, storeFindUniqueOrThrowArgs>
    ): Prisma__storeClient<storeGetPayload<T>>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends storeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, storeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'store'> extends True ? Prisma__storeClient<storeGetPayload<T>> : Prisma__storeClient<storeGetPayload<T> | null, null>

    /**
     * Find the first Store that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends storeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, storeFindFirstOrThrowArgs>
    ): Prisma__storeClient<storeGetPayload<T>>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `store_id`
     * const storeWithStore_idOnly = await prisma.store.findMany({ select: { store_id: true } })
     * 
    **/
    findMany<T extends storeFindManyArgs>(
      args?: SelectSubset<T, storeFindManyArgs>
    ): Prisma.PrismaPromise<Array<storeGetPayload<T>>>

    /**
     * Create a Store.
     * @param {storeCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
    **/
    create<T extends storeCreateArgs>(
      args: SelectSubset<T, storeCreateArgs>
    ): Prisma__storeClient<storeGetPayload<T>>

    /**
     * Create many Stores.
     *     @param {storeCreateManyArgs} args - Arguments to create many Stores.
     *     @example
     *     // Create many Stores
     *     const store = await prisma.store.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends storeCreateManyArgs>(
      args?: SelectSubset<T, storeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Store.
     * @param {storeDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
    **/
    delete<T extends storeDeleteArgs>(
      args: SelectSubset<T, storeDeleteArgs>
    ): Prisma__storeClient<storeGetPayload<T>>

    /**
     * Update one Store.
     * @param {storeUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends storeUpdateArgs>(
      args: SelectSubset<T, storeUpdateArgs>
    ): Prisma__storeClient<storeGetPayload<T>>

    /**
     * Delete zero or more Stores.
     * @param {storeDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends storeDeleteManyArgs>(
      args?: SelectSubset<T, storeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends storeUpdateManyArgs>(
      args: SelectSubset<T, storeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {storeUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
    **/
    upsert<T extends storeUpsertArgs>(
      args: SelectSubset<T, storeUpsertArgs>
    ): Prisma__storeClient<storeGetPayload<T>>

    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends storeCountArgs>(
      args?: Subset<T, storeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__storeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    customer<T extends store$customerArgs= {}>(args?: Subset<T, store$customerArgs>): Prisma.PrismaPromise<Array<customerGetPayload<T>>| Null>;

    inventory<T extends store$inventoryArgs= {}>(args?: Subset<T, store$inventoryArgs>): Prisma.PrismaPromise<Array<inventoryGetPayload<T>>| Null>;

    staff_staff_store_idTostore<T extends store$staff_staff_store_idTostoreArgs= {}>(args?: Subset<T, store$staff_staff_store_idTostoreArgs>): Prisma.PrismaPromise<Array<staffGetPayload<T>>| Null>;

    address<T extends addressArgs= {}>(args?: Subset<T, addressArgs>): Prisma__addressClient<addressGetPayload<T> | Null>;

    staff_store_manager_staff_idTostaff<T extends staffArgs= {}>(args?: Subset<T, staffArgs>): Prisma__staffClient<staffGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * store base type for findUnique actions
   */
  export type storeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude | null
    /**
     * Filter, which store to fetch.
     */
    where: storeWhereUniqueInput
  }

  /**
   * store findUnique
   */
  export interface storeFindUniqueArgs extends storeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * store findUniqueOrThrow
   */
  export type storeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude | null
    /**
     * Filter, which store to fetch.
     */
    where: storeWhereUniqueInput
  }


  /**
   * store base type for findFirst actions
   */
  export type storeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude | null
    /**
     * Filter, which store to fetch.
     */
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: Enumerable<storeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     */
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: Enumerable<StoreScalarFieldEnum>
  }

  /**
   * store findFirst
   */
  export interface storeFindFirstArgs extends storeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * store findFirstOrThrow
   */
  export type storeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude | null
    /**
     * Filter, which store to fetch.
     */
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: Enumerable<storeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     */
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: Enumerable<StoreScalarFieldEnum>
  }


  /**
   * store findMany
   */
  export type storeFindManyArgs = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: Enumerable<storeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stores.
     */
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    distinct?: Enumerable<StoreScalarFieldEnum>
  }


  /**
   * store create
   */
  export type storeCreateArgs = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude | null
    /**
     * The data needed to create a store.
     */
    data: XOR<storeCreateInput, storeUncheckedCreateInput>
  }


  /**
   * store createMany
   */
  export type storeCreateManyArgs = {
    /**
     * The data used to create many stores.
     */
    data: Enumerable<storeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * store update
   */
  export type storeUpdateArgs = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude | null
    /**
     * The data needed to update a store.
     */
    data: XOR<storeUpdateInput, storeUncheckedUpdateInput>
    /**
     * Choose, which store to update.
     */
    where: storeWhereUniqueInput
  }


  /**
   * store updateMany
   */
  export type storeUpdateManyArgs = {
    /**
     * The data used to update stores.
     */
    data: XOR<storeUpdateManyMutationInput, storeUncheckedUpdateManyInput>
    /**
     * Filter which stores to update
     */
    where?: storeWhereInput
  }


  /**
   * store upsert
   */
  export type storeUpsertArgs = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude | null
    /**
     * The filter to search for the store to update in case it exists.
     */
    where: storeWhereUniqueInput
    /**
     * In case the store found by the `where` argument doesn't exist, create a new store with this data.
     */
    create: XOR<storeCreateInput, storeUncheckedCreateInput>
    /**
     * In case the store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<storeUpdateInput, storeUncheckedUpdateInput>
  }


  /**
   * store delete
   */
  export type storeDeleteArgs = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude | null
    /**
     * Filter which store to delete.
     */
    where: storeWhereUniqueInput
  }


  /**
   * store deleteMany
   */
  export type storeDeleteManyArgs = {
    /**
     * Filter which stores to delete
     */
    where?: storeWhereInput
  }


  /**
   * store.customer
   */
  export type store$customerArgs = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude | null
    where?: customerWhereInput
    orderBy?: Enumerable<customerOrderByWithRelationInput>
    cursor?: customerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * store.inventory
   */
  export type store$inventoryArgs = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude | null
    where?: inventoryWhereInput
    orderBy?: Enumerable<inventoryOrderByWithRelationInput>
    cursor?: inventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<InventoryScalarFieldEnum>
  }


  /**
   * store.staff_staff_store_idTostore
   */
  export type store$staff_staff_store_idTostoreArgs = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude | null
    where?: staffWhereInput
    orderBy?: Enumerable<staffOrderByWithRelationInput>
    cursor?: staffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<StaffScalarFieldEnum>
  }


  /**
   * store without action
   */
  export type storeArgs = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ActorScalarFieldEnum: {
    actor_id: 'actor_id',
    first_name: 'first_name',
    last_name: 'last_name',
    last_update: 'last_update'
  };

  export type ActorScalarFieldEnum = (typeof ActorScalarFieldEnum)[keyof typeof ActorScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    address_id: 'address_id',
    address: 'address',
    address2: 'address2',
    district: 'district',
    city_id: 'city_id',
    postal_code: 'postal_code',
    phone: 'phone',
    last_update: 'last_update'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    category_id: 'category_id',
    name: 'name',
    last_update: 'last_update'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CityScalarFieldEnum: {
    city_id: 'city_id',
    city: 'city',
    country_id: 'country_id',
    last_update: 'last_update'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    country_id: 'country_id',
    country: 'country',
    last_update: 'last_update'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    customer_id: 'customer_id',
    store_id: 'store_id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    address_id: 'address_id',
    active: 'active',
    create_date: 'create_date',
    last_update: 'last_update'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const FilmScalarFieldEnum: {
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
  };

  export type FilmScalarFieldEnum = (typeof FilmScalarFieldEnum)[keyof typeof FilmScalarFieldEnum]


  export const Film_actorScalarFieldEnum: {
    actor_id: 'actor_id',
    film_id: 'film_id',
    last_update: 'last_update'
  };

  export type Film_actorScalarFieldEnum = (typeof Film_actorScalarFieldEnum)[keyof typeof Film_actorScalarFieldEnum]


  export const Film_categoryScalarFieldEnum: {
    film_id: 'film_id',
    category_id: 'category_id',
    last_update: 'last_update'
  };

  export type Film_categoryScalarFieldEnum = (typeof Film_categoryScalarFieldEnum)[keyof typeof Film_categoryScalarFieldEnum]


  export const Film_textScalarFieldEnum: {
    film_id: 'film_id',
    title: 'title',
    description: 'description'
  };

  export type Film_textScalarFieldEnum = (typeof Film_textScalarFieldEnum)[keyof typeof Film_textScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    inventory_id: 'inventory_id',
    film_id: 'film_id',
    store_id: 'store_id',
    last_update: 'last_update'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const LanguageScalarFieldEnum: {
    language_id: 'language_id',
    name: 'name',
    last_update: 'last_update'
  };

  export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    payment_id: 'payment_id',
    customer_id: 'customer_id',
    staff_id: 'staff_id',
    rental_id: 'rental_id',
    amount: 'amount',
    payment_date: 'payment_date',
    last_update: 'last_update'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const RentalScalarFieldEnum: {
    rental_id: 'rental_id',
    rental_date: 'rental_date',
    inventory_id: 'inventory_id',
    customer_id: 'customer_id',
    return_date: 'return_date',
    staff_id: 'staff_id',
    last_update: 'last_update'
  };

  export type RentalScalarFieldEnum = (typeof RentalScalarFieldEnum)[keyof typeof RentalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StaffScalarFieldEnum: {
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
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    store_id: 'store_id',
    manager_staff_id: 'manager_staff_id',
    address_id: 'address_id',
    last_update: 'last_update'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type actorWhereInput = {
    AND?: Enumerable<actorWhereInput>
    OR?: Enumerable<actorWhereInput>
    NOT?: Enumerable<actorWhereInput>
    actor_id?: IntFilter | number
    first_name?: StringFilter | string
    last_name?: StringFilter | string
    last_update?: DateTimeFilter | Date | string
    film_actor?: Film_actorListRelationFilter
  }

  export type actorOrderByWithRelationInput = {
    actor_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    last_update?: SortOrder
    film_actor?: film_actorOrderByRelationAggregateInput
  }

  export type actorWhereUniqueInput = {
    actor_id?: number
  }

  export type actorOrderByWithAggregationInput = {
    actor_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    last_update?: SortOrder
    _count?: actorCountOrderByAggregateInput
    _avg?: actorAvgOrderByAggregateInput
    _max?: actorMaxOrderByAggregateInput
    _min?: actorMinOrderByAggregateInput
    _sum?: actorSumOrderByAggregateInput
  }

  export type actorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<actorScalarWhereWithAggregatesInput>
    OR?: Enumerable<actorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<actorScalarWhereWithAggregatesInput>
    actor_id?: IntWithAggregatesFilter | number
    first_name?: StringWithAggregatesFilter | string
    last_name?: StringWithAggregatesFilter | string
    last_update?: DateTimeWithAggregatesFilter | Date | string
  }

  export type addressWhereInput = {
    AND?: Enumerable<addressWhereInput>
    OR?: Enumerable<addressWhereInput>
    NOT?: Enumerable<addressWhereInput>
    address_id?: IntFilter | number
    address?: StringFilter | string
    address2?: StringNullableFilter | string | null
    district?: StringFilter | string
    city_id?: IntFilter | number
    postal_code?: StringNullableFilter | string | null
    phone?: StringFilter | string
    last_update?: DateTimeFilter | Date | string
    city?: XOR<CityRelationFilter, cityWhereInput>
    customer?: CustomerListRelationFilter
    staff?: StaffListRelationFilter
    store?: StoreListRelationFilter
  }

  export type addressOrderByWithRelationInput = {
    address_id?: SortOrder
    address?: SortOrder
    address2?: SortOrder
    district?: SortOrder
    city_id?: SortOrder
    postal_code?: SortOrder
    phone?: SortOrder
    last_update?: SortOrder
    city?: cityOrderByWithRelationInput
    customer?: customerOrderByRelationAggregateInput
    staff?: staffOrderByRelationAggregateInput
    store?: storeOrderByRelationAggregateInput
  }

  export type addressWhereUniqueInput = {
    address_id?: number
  }

  export type addressOrderByWithAggregationInput = {
    address_id?: SortOrder
    address?: SortOrder
    address2?: SortOrder
    district?: SortOrder
    city_id?: SortOrder
    postal_code?: SortOrder
    phone?: SortOrder
    last_update?: SortOrder
    _count?: addressCountOrderByAggregateInput
    _avg?: addressAvgOrderByAggregateInput
    _max?: addressMaxOrderByAggregateInput
    _min?: addressMinOrderByAggregateInput
    _sum?: addressSumOrderByAggregateInput
  }

  export type addressScalarWhereWithAggregatesInput = {
    AND?: Enumerable<addressScalarWhereWithAggregatesInput>
    OR?: Enumerable<addressScalarWhereWithAggregatesInput>
    NOT?: Enumerable<addressScalarWhereWithAggregatesInput>
    address_id?: IntWithAggregatesFilter | number
    address?: StringWithAggregatesFilter | string
    address2?: StringNullableWithAggregatesFilter | string | null
    district?: StringWithAggregatesFilter | string
    city_id?: IntWithAggregatesFilter | number
    postal_code?: StringNullableWithAggregatesFilter | string | null
    phone?: StringWithAggregatesFilter | string
    last_update?: DateTimeWithAggregatesFilter | Date | string
  }

  export type categoryWhereInput = {
    AND?: Enumerable<categoryWhereInput>
    OR?: Enumerable<categoryWhereInput>
    NOT?: Enumerable<categoryWhereInput>
    category_id?: IntFilter | number
    name?: StringFilter | string
    last_update?: DateTimeFilter | Date | string
    film_category?: Film_categoryListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    category_id?: SortOrder
    name?: SortOrder
    last_update?: SortOrder
    film_category?: film_categoryOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = {
    category_id?: number
  }

  export type categoryOrderByWithAggregationInput = {
    category_id?: SortOrder
    name?: SortOrder
    last_update?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<categoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<categoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<categoryScalarWhereWithAggregatesInput>
    category_id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    last_update?: DateTimeWithAggregatesFilter | Date | string
  }

  export type cityWhereInput = {
    AND?: Enumerable<cityWhereInput>
    OR?: Enumerable<cityWhereInput>
    NOT?: Enumerable<cityWhereInput>
    city_id?: IntFilter | number
    city?: StringFilter | string
    country_id?: IntFilter | number
    last_update?: DateTimeFilter | Date | string
    address?: AddressListRelationFilter
    country?: XOR<CountryRelationFilter, countryWhereInput>
  }

  export type cityOrderByWithRelationInput = {
    city_id?: SortOrder
    city?: SortOrder
    country_id?: SortOrder
    last_update?: SortOrder
    address?: addressOrderByRelationAggregateInput
    country?: countryOrderByWithRelationInput
  }

  export type cityWhereUniqueInput = {
    city_id?: number
  }

  export type cityOrderByWithAggregationInput = {
    city_id?: SortOrder
    city?: SortOrder
    country_id?: SortOrder
    last_update?: SortOrder
    _count?: cityCountOrderByAggregateInput
    _avg?: cityAvgOrderByAggregateInput
    _max?: cityMaxOrderByAggregateInput
    _min?: cityMinOrderByAggregateInput
    _sum?: citySumOrderByAggregateInput
  }

  export type cityScalarWhereWithAggregatesInput = {
    AND?: Enumerable<cityScalarWhereWithAggregatesInput>
    OR?: Enumerable<cityScalarWhereWithAggregatesInput>
    NOT?: Enumerable<cityScalarWhereWithAggregatesInput>
    city_id?: IntWithAggregatesFilter | number
    city?: StringWithAggregatesFilter | string
    country_id?: IntWithAggregatesFilter | number
    last_update?: DateTimeWithAggregatesFilter | Date | string
  }

  export type countryWhereInput = {
    AND?: Enumerable<countryWhereInput>
    OR?: Enumerable<countryWhereInput>
    NOT?: Enumerable<countryWhereInput>
    country_id?: IntFilter | number
    country?: StringFilter | string
    last_update?: DateTimeFilter | Date | string
    city?: CityListRelationFilter
  }

  export type countryOrderByWithRelationInput = {
    country_id?: SortOrder
    country?: SortOrder
    last_update?: SortOrder
    city?: cityOrderByRelationAggregateInput
  }

  export type countryWhereUniqueInput = {
    country_id?: number
  }

  export type countryOrderByWithAggregationInput = {
    country_id?: SortOrder
    country?: SortOrder
    last_update?: SortOrder
    _count?: countryCountOrderByAggregateInput
    _avg?: countryAvgOrderByAggregateInput
    _max?: countryMaxOrderByAggregateInput
    _min?: countryMinOrderByAggregateInput
    _sum?: countrySumOrderByAggregateInput
  }

  export type countryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<countryScalarWhereWithAggregatesInput>
    OR?: Enumerable<countryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<countryScalarWhereWithAggregatesInput>
    country_id?: IntWithAggregatesFilter | number
    country?: StringWithAggregatesFilter | string
    last_update?: DateTimeWithAggregatesFilter | Date | string
  }

  export type customerWhereInput = {
    AND?: Enumerable<customerWhereInput>
    OR?: Enumerable<customerWhereInput>
    NOT?: Enumerable<customerWhereInput>
    customer_id?: IntFilter | number
    store_id?: IntFilter | number
    first_name?: StringFilter | string
    last_name?: StringFilter | string
    email?: StringNullableFilter | string | null
    address_id?: IntFilter | number
    active?: BoolFilter | boolean
    create_date?: DateTimeFilter | Date | string
    last_update?: DateTimeNullableFilter | Date | string | null
    address?: XOR<AddressRelationFilter, addressWhereInput>
    store?: XOR<StoreRelationFilter, storeWhereInput>
    payment?: PaymentListRelationFilter
    rental?: RentalListRelationFilter
  }

  export type customerOrderByWithRelationInput = {
    customer_id?: SortOrder
    store_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    address_id?: SortOrder
    active?: SortOrder
    create_date?: SortOrder
    last_update?: SortOrder
    address?: addressOrderByWithRelationInput
    store?: storeOrderByWithRelationInput
    payment?: paymentOrderByRelationAggregateInput
    rental?: rentalOrderByRelationAggregateInput
  }

  export type customerWhereUniqueInput = {
    customer_id?: number
  }

  export type customerOrderByWithAggregationInput = {
    customer_id?: SortOrder
    store_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    address_id?: SortOrder
    active?: SortOrder
    create_date?: SortOrder
    last_update?: SortOrder
    _count?: customerCountOrderByAggregateInput
    _avg?: customerAvgOrderByAggregateInput
    _max?: customerMaxOrderByAggregateInput
    _min?: customerMinOrderByAggregateInput
    _sum?: customerSumOrderByAggregateInput
  }

  export type customerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<customerScalarWhereWithAggregatesInput>
    OR?: Enumerable<customerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<customerScalarWhereWithAggregatesInput>
    customer_id?: IntWithAggregatesFilter | number
    store_id?: IntWithAggregatesFilter | number
    first_name?: StringWithAggregatesFilter | string
    last_name?: StringWithAggregatesFilter | string
    email?: StringNullableWithAggregatesFilter | string | null
    address_id?: IntWithAggregatesFilter | number
    active?: BoolWithAggregatesFilter | boolean
    create_date?: DateTimeWithAggregatesFilter | Date | string
    last_update?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type filmWhereInput = {
    AND?: Enumerable<filmWhereInput>
    OR?: Enumerable<filmWhereInput>
    NOT?: Enumerable<filmWhereInput>
    film_id?: IntFilter | number
    title?: StringFilter | string
    description?: StringNullableFilter | string | null
    release_year?: IntNullableFilter | number | null
    language_id?: IntFilter | number
    original_language_id?: IntNullableFilter | number | null
    rental_duration?: IntFilter | number
    rental_rate?: DecimalFilter | Decimal | DecimalJsLike | number | string
    length?: IntNullableFilter | number | null
    replacement_cost?: DecimalFilter | Decimal | DecimalJsLike | number | string
    rating?: Enumfilm_ratingNullableFilter | film_rating | null
    special_features?: StringNullableFilter | string | null
    last_update?: DateTimeFilter | Date | string
    language_film_language_idTolanguage?: XOR<LanguageRelationFilter, languageWhereInput>
    language_film_original_language_idTolanguage?: XOR<LanguageRelationFilter, languageWhereInput> | null
    film_actor?: Film_actorListRelationFilter
    film_category?: Film_categoryListRelationFilter
    inventory?: InventoryListRelationFilter
  }

  export type filmOrderByWithRelationInput = {
    film_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    release_year?: SortOrder
    language_id?: SortOrder
    original_language_id?: SortOrder
    rental_duration?: SortOrder
    rental_rate?: SortOrder
    length?: SortOrder
    replacement_cost?: SortOrder
    rating?: SortOrder
    special_features?: SortOrder
    last_update?: SortOrder
    language_film_language_idTolanguage?: languageOrderByWithRelationInput
    language_film_original_language_idTolanguage?: languageOrderByWithRelationInput
    film_actor?: film_actorOrderByRelationAggregateInput
    film_category?: film_categoryOrderByRelationAggregateInput
    inventory?: inventoryOrderByRelationAggregateInput
  }

  export type filmWhereUniqueInput = {
    film_id?: number
  }

  export type filmOrderByWithAggregationInput = {
    film_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    release_year?: SortOrder
    language_id?: SortOrder
    original_language_id?: SortOrder
    rental_duration?: SortOrder
    rental_rate?: SortOrder
    length?: SortOrder
    replacement_cost?: SortOrder
    rating?: SortOrder
    special_features?: SortOrder
    last_update?: SortOrder
    _count?: filmCountOrderByAggregateInput
    _avg?: filmAvgOrderByAggregateInput
    _max?: filmMaxOrderByAggregateInput
    _min?: filmMinOrderByAggregateInput
    _sum?: filmSumOrderByAggregateInput
  }

  export type filmScalarWhereWithAggregatesInput = {
    AND?: Enumerable<filmScalarWhereWithAggregatesInput>
    OR?: Enumerable<filmScalarWhereWithAggregatesInput>
    NOT?: Enumerable<filmScalarWhereWithAggregatesInput>
    film_id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    release_year?: IntNullableWithAggregatesFilter | number | null
    language_id?: IntWithAggregatesFilter | number
    original_language_id?: IntNullableWithAggregatesFilter | number | null
    rental_duration?: IntWithAggregatesFilter | number
    rental_rate?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    length?: IntNullableWithAggregatesFilter | number | null
    replacement_cost?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    rating?: Enumfilm_ratingNullableWithAggregatesFilter | film_rating | null
    special_features?: StringNullableWithAggregatesFilter | string | null
    last_update?: DateTimeWithAggregatesFilter | Date | string
  }

  export type film_actorWhereInput = {
    AND?: Enumerable<film_actorWhereInput>
    OR?: Enumerable<film_actorWhereInput>
    NOT?: Enumerable<film_actorWhereInput>
    actor_id?: IntFilter | number
    film_id?: IntFilter | number
    last_update?: DateTimeFilter | Date | string
    actor?: XOR<ActorRelationFilter, actorWhereInput>
    film?: XOR<FilmRelationFilter, filmWhereInput>
  }

  export type film_actorOrderByWithRelationInput = {
    actor_id?: SortOrder
    film_id?: SortOrder
    last_update?: SortOrder
    actor?: actorOrderByWithRelationInput
    film?: filmOrderByWithRelationInput
  }

  export type film_actorWhereUniqueInput = {
    actor_id_film_id?: film_actorActor_idFilm_idCompoundUniqueInput
  }

  export type film_actorOrderByWithAggregationInput = {
    actor_id?: SortOrder
    film_id?: SortOrder
    last_update?: SortOrder
    _count?: film_actorCountOrderByAggregateInput
    _avg?: film_actorAvgOrderByAggregateInput
    _max?: film_actorMaxOrderByAggregateInput
    _min?: film_actorMinOrderByAggregateInput
    _sum?: film_actorSumOrderByAggregateInput
  }

  export type film_actorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<film_actorScalarWhereWithAggregatesInput>
    OR?: Enumerable<film_actorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<film_actorScalarWhereWithAggregatesInput>
    actor_id?: IntWithAggregatesFilter | number
    film_id?: IntWithAggregatesFilter | number
    last_update?: DateTimeWithAggregatesFilter | Date | string
  }

  export type film_categoryWhereInput = {
    AND?: Enumerable<film_categoryWhereInput>
    OR?: Enumerable<film_categoryWhereInput>
    NOT?: Enumerable<film_categoryWhereInput>
    film_id?: IntFilter | number
    category_id?: IntFilter | number
    last_update?: DateTimeFilter | Date | string
    category?: XOR<CategoryRelationFilter, categoryWhereInput>
    film?: XOR<FilmRelationFilter, filmWhereInput>
  }

  export type film_categoryOrderByWithRelationInput = {
    film_id?: SortOrder
    category_id?: SortOrder
    last_update?: SortOrder
    category?: categoryOrderByWithRelationInput
    film?: filmOrderByWithRelationInput
  }

  export type film_categoryWhereUniqueInput = {
    film_id_category_id?: film_categoryFilm_idCategory_idCompoundUniqueInput
  }

  export type film_categoryOrderByWithAggregationInput = {
    film_id?: SortOrder
    category_id?: SortOrder
    last_update?: SortOrder
    _count?: film_categoryCountOrderByAggregateInput
    _avg?: film_categoryAvgOrderByAggregateInput
    _max?: film_categoryMaxOrderByAggregateInput
    _min?: film_categoryMinOrderByAggregateInput
    _sum?: film_categorySumOrderByAggregateInput
  }

  export type film_categoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<film_categoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<film_categoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<film_categoryScalarWhereWithAggregatesInput>
    film_id?: IntWithAggregatesFilter | number
    category_id?: IntWithAggregatesFilter | number
    last_update?: DateTimeWithAggregatesFilter | Date | string
  }

  export type film_textWhereInput = {
    AND?: Enumerable<film_textWhereInput>
    OR?: Enumerable<film_textWhereInput>
    NOT?: Enumerable<film_textWhereInput>
    film_id?: IntFilter | number
    title?: StringFilter | string
    description?: StringNullableFilter | string | null
  }

  export type film_textOrderByWithRelationInput = {
    film_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type film_textWhereUniqueInput = {
    film_id?: number
  }

  export type film_textOrderByWithAggregationInput = {
    film_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    _count?: film_textCountOrderByAggregateInput
    _avg?: film_textAvgOrderByAggregateInput
    _max?: film_textMaxOrderByAggregateInput
    _min?: film_textMinOrderByAggregateInput
    _sum?: film_textSumOrderByAggregateInput
  }

  export type film_textScalarWhereWithAggregatesInput = {
    AND?: Enumerable<film_textScalarWhereWithAggregatesInput>
    OR?: Enumerable<film_textScalarWhereWithAggregatesInput>
    NOT?: Enumerable<film_textScalarWhereWithAggregatesInput>
    film_id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
  }

  export type inventoryWhereInput = {
    AND?: Enumerable<inventoryWhereInput>
    OR?: Enumerable<inventoryWhereInput>
    NOT?: Enumerable<inventoryWhereInput>
    inventory_id?: IntFilter | number
    film_id?: IntFilter | number
    store_id?: IntFilter | number
    last_update?: DateTimeFilter | Date | string
    film?: XOR<FilmRelationFilter, filmWhereInput>
    store?: XOR<StoreRelationFilter, storeWhereInput>
    rental?: RentalListRelationFilter
  }

  export type inventoryOrderByWithRelationInput = {
    inventory_id?: SortOrder
    film_id?: SortOrder
    store_id?: SortOrder
    last_update?: SortOrder
    film?: filmOrderByWithRelationInput
    store?: storeOrderByWithRelationInput
    rental?: rentalOrderByRelationAggregateInput
  }

  export type inventoryWhereUniqueInput = {
    inventory_id?: number
  }

  export type inventoryOrderByWithAggregationInput = {
    inventory_id?: SortOrder
    film_id?: SortOrder
    store_id?: SortOrder
    last_update?: SortOrder
    _count?: inventoryCountOrderByAggregateInput
    _avg?: inventoryAvgOrderByAggregateInput
    _max?: inventoryMaxOrderByAggregateInput
    _min?: inventoryMinOrderByAggregateInput
    _sum?: inventorySumOrderByAggregateInput
  }

  export type inventoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<inventoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<inventoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<inventoryScalarWhereWithAggregatesInput>
    inventory_id?: IntWithAggregatesFilter | number
    film_id?: IntWithAggregatesFilter | number
    store_id?: IntWithAggregatesFilter | number
    last_update?: DateTimeWithAggregatesFilter | Date | string
  }

  export type languageWhereInput = {
    AND?: Enumerable<languageWhereInput>
    OR?: Enumerable<languageWhereInput>
    NOT?: Enumerable<languageWhereInput>
    language_id?: IntFilter | number
    name?: StringFilter | string
    last_update?: DateTimeFilter | Date | string
    film_film_language_idTolanguage?: FilmListRelationFilter
    film_film_original_language_idTolanguage?: FilmListRelationFilter
  }

  export type languageOrderByWithRelationInput = {
    language_id?: SortOrder
    name?: SortOrder
    last_update?: SortOrder
    film_film_language_idTolanguage?: filmOrderByRelationAggregateInput
    film_film_original_language_idTolanguage?: filmOrderByRelationAggregateInput
  }

  export type languageWhereUniqueInput = {
    language_id?: number
  }

  export type languageOrderByWithAggregationInput = {
    language_id?: SortOrder
    name?: SortOrder
    last_update?: SortOrder
    _count?: languageCountOrderByAggregateInput
    _avg?: languageAvgOrderByAggregateInput
    _max?: languageMaxOrderByAggregateInput
    _min?: languageMinOrderByAggregateInput
    _sum?: languageSumOrderByAggregateInput
  }

  export type languageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<languageScalarWhereWithAggregatesInput>
    OR?: Enumerable<languageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<languageScalarWhereWithAggregatesInput>
    language_id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    last_update?: DateTimeWithAggregatesFilter | Date | string
  }

  export type paymentWhereInput = {
    AND?: Enumerable<paymentWhereInput>
    OR?: Enumerable<paymentWhereInput>
    NOT?: Enumerable<paymentWhereInput>
    payment_id?: IntFilter | number
    customer_id?: IntFilter | number
    staff_id?: IntFilter | number
    rental_id?: IntNullableFilter | number | null
    amount?: DecimalFilter | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFilter | Date | string
    last_update?: DateTimeNullableFilter | Date | string | null
    customer?: XOR<CustomerRelationFilter, customerWhereInput>
    rental?: XOR<RentalRelationFilter, rentalWhereInput> | null
    staff?: XOR<StaffRelationFilter, staffWhereInput>
  }

  export type paymentOrderByWithRelationInput = {
    payment_id?: SortOrder
    customer_id?: SortOrder
    staff_id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
    last_update?: SortOrder
    customer?: customerOrderByWithRelationInput
    rental?: rentalOrderByWithRelationInput
    staff?: staffOrderByWithRelationInput
  }

  export type paymentWhereUniqueInput = {
    payment_id?: number
  }

  export type paymentOrderByWithAggregationInput = {
    payment_id?: SortOrder
    customer_id?: SortOrder
    staff_id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
    last_update?: SortOrder
    _count?: paymentCountOrderByAggregateInput
    _avg?: paymentAvgOrderByAggregateInput
    _max?: paymentMaxOrderByAggregateInput
    _min?: paymentMinOrderByAggregateInput
    _sum?: paymentSumOrderByAggregateInput
  }

  export type paymentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<paymentScalarWhereWithAggregatesInput>
    OR?: Enumerable<paymentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<paymentScalarWhereWithAggregatesInput>
    payment_id?: IntWithAggregatesFilter | number
    customer_id?: IntWithAggregatesFilter | number
    staff_id?: IntWithAggregatesFilter | number
    rental_id?: IntNullableWithAggregatesFilter | number | null
    amount?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeWithAggregatesFilter | Date | string
    last_update?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type rentalWhereInput = {
    AND?: Enumerable<rentalWhereInput>
    OR?: Enumerable<rentalWhereInput>
    NOT?: Enumerable<rentalWhereInput>
    rental_id?: IntFilter | number
    rental_date?: DateTimeFilter | Date | string
    inventory_id?: IntFilter | number
    customer_id?: IntFilter | number
    return_date?: DateTimeNullableFilter | Date | string | null
    staff_id?: IntFilter | number
    last_update?: DateTimeFilter | Date | string
    payment?: PaymentListRelationFilter
    customer?: XOR<CustomerRelationFilter, customerWhereInput>
    inventory?: XOR<InventoryRelationFilter, inventoryWhereInput>
    staff?: XOR<StaffRelationFilter, staffWhereInput>
  }

  export type rentalOrderByWithRelationInput = {
    rental_id?: SortOrder
    rental_date?: SortOrder
    inventory_id?: SortOrder
    customer_id?: SortOrder
    return_date?: SortOrder
    staff_id?: SortOrder
    last_update?: SortOrder
    payment?: paymentOrderByRelationAggregateInput
    customer?: customerOrderByWithRelationInput
    inventory?: inventoryOrderByWithRelationInput
    staff?: staffOrderByWithRelationInput
  }

  export type rentalWhereUniqueInput = {
    rental_id?: number
    rental_date_inventory_id_customer_id?: rentalRental_dateInventory_idCustomer_idCompoundUniqueInput
  }

  export type rentalOrderByWithAggregationInput = {
    rental_id?: SortOrder
    rental_date?: SortOrder
    inventory_id?: SortOrder
    customer_id?: SortOrder
    return_date?: SortOrder
    staff_id?: SortOrder
    last_update?: SortOrder
    _count?: rentalCountOrderByAggregateInput
    _avg?: rentalAvgOrderByAggregateInput
    _max?: rentalMaxOrderByAggregateInput
    _min?: rentalMinOrderByAggregateInput
    _sum?: rentalSumOrderByAggregateInput
  }

  export type rentalScalarWhereWithAggregatesInput = {
    AND?: Enumerable<rentalScalarWhereWithAggregatesInput>
    OR?: Enumerable<rentalScalarWhereWithAggregatesInput>
    NOT?: Enumerable<rentalScalarWhereWithAggregatesInput>
    rental_id?: IntWithAggregatesFilter | number
    rental_date?: DateTimeWithAggregatesFilter | Date | string
    inventory_id?: IntWithAggregatesFilter | number
    customer_id?: IntWithAggregatesFilter | number
    return_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    staff_id?: IntWithAggregatesFilter | number
    last_update?: DateTimeWithAggregatesFilter | Date | string
  }

  export type staffWhereInput = {
    AND?: Enumerable<staffWhereInput>
    OR?: Enumerable<staffWhereInput>
    NOT?: Enumerable<staffWhereInput>
    staff_id?: IntFilter | number
    first_name?: StringFilter | string
    last_name?: StringFilter | string
    address_id?: IntFilter | number
    picture?: BytesNullableFilter | Buffer | null
    email?: StringNullableFilter | string | null
    store_id?: IntFilter | number
    active?: BoolFilter | boolean
    username?: StringFilter | string
    password?: StringNullableFilter | string | null
    last_update?: DateTimeFilter | Date | string
    payment?: PaymentListRelationFilter
    rental?: RentalListRelationFilter
    address?: XOR<AddressRelationFilter, addressWhereInput>
    store_staff_store_idTostore?: XOR<StoreRelationFilter, storeWhereInput>
    store_store_manager_staff_idTostaff?: XOR<StoreRelationFilter, storeWhereInput> | null
  }

  export type staffOrderByWithRelationInput = {
    staff_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    address_id?: SortOrder
    picture?: SortOrder
    email?: SortOrder
    store_id?: SortOrder
    active?: SortOrder
    username?: SortOrder
    password?: SortOrder
    last_update?: SortOrder
    payment?: paymentOrderByRelationAggregateInput
    rental?: rentalOrderByRelationAggregateInput
    address?: addressOrderByWithRelationInput
    store_staff_store_idTostore?: storeOrderByWithRelationInput
    store_store_manager_staff_idTostaff?: storeOrderByWithRelationInput
  }

  export type staffWhereUniqueInput = {
    staff_id?: number
  }

  export type staffOrderByWithAggregationInput = {
    staff_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    address_id?: SortOrder
    picture?: SortOrder
    email?: SortOrder
    store_id?: SortOrder
    active?: SortOrder
    username?: SortOrder
    password?: SortOrder
    last_update?: SortOrder
    _count?: staffCountOrderByAggregateInput
    _avg?: staffAvgOrderByAggregateInput
    _max?: staffMaxOrderByAggregateInput
    _min?: staffMinOrderByAggregateInput
    _sum?: staffSumOrderByAggregateInput
  }

  export type staffScalarWhereWithAggregatesInput = {
    AND?: Enumerable<staffScalarWhereWithAggregatesInput>
    OR?: Enumerable<staffScalarWhereWithAggregatesInput>
    NOT?: Enumerable<staffScalarWhereWithAggregatesInput>
    staff_id?: IntWithAggregatesFilter | number
    first_name?: StringWithAggregatesFilter | string
    last_name?: StringWithAggregatesFilter | string
    address_id?: IntWithAggregatesFilter | number
    picture?: BytesNullableWithAggregatesFilter | Buffer | null
    email?: StringNullableWithAggregatesFilter | string | null
    store_id?: IntWithAggregatesFilter | number
    active?: BoolWithAggregatesFilter | boolean
    username?: StringWithAggregatesFilter | string
    password?: StringNullableWithAggregatesFilter | string | null
    last_update?: DateTimeWithAggregatesFilter | Date | string
  }

  export type storeWhereInput = {
    AND?: Enumerable<storeWhereInput>
    OR?: Enumerable<storeWhereInput>
    NOT?: Enumerable<storeWhereInput>
    store_id?: IntFilter | number
    manager_staff_id?: IntFilter | number
    address_id?: IntFilter | number
    last_update?: DateTimeFilter | Date | string
    customer?: CustomerListRelationFilter
    inventory?: InventoryListRelationFilter
    staff_staff_store_idTostore?: StaffListRelationFilter
    address?: XOR<AddressRelationFilter, addressWhereInput>
    staff_store_manager_staff_idTostaff?: XOR<StaffRelationFilter, staffWhereInput>
  }

  export type storeOrderByWithRelationInput = {
    store_id?: SortOrder
    manager_staff_id?: SortOrder
    address_id?: SortOrder
    last_update?: SortOrder
    customer?: customerOrderByRelationAggregateInput
    inventory?: inventoryOrderByRelationAggregateInput
    staff_staff_store_idTostore?: staffOrderByRelationAggregateInput
    address?: addressOrderByWithRelationInput
    staff_store_manager_staff_idTostaff?: staffOrderByWithRelationInput
  }

  export type storeWhereUniqueInput = {
    store_id?: number
    manager_staff_id?: number
  }

  export type storeOrderByWithAggregationInput = {
    store_id?: SortOrder
    manager_staff_id?: SortOrder
    address_id?: SortOrder
    last_update?: SortOrder
    _count?: storeCountOrderByAggregateInput
    _avg?: storeAvgOrderByAggregateInput
    _max?: storeMaxOrderByAggregateInput
    _min?: storeMinOrderByAggregateInput
    _sum?: storeSumOrderByAggregateInput
  }

  export type storeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<storeScalarWhereWithAggregatesInput>
    OR?: Enumerable<storeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<storeScalarWhereWithAggregatesInput>
    store_id?: IntWithAggregatesFilter | number
    manager_staff_id?: IntWithAggregatesFilter | number
    address_id?: IntWithAggregatesFilter | number
    last_update?: DateTimeWithAggregatesFilter | Date | string
  }

  export type actorCreateInput = {
    first_name: string
    last_name: string
    last_update?: Date | string
    film_actor?: film_actorCreateNestedManyWithoutActorInput
  }

  export type actorUncheckedCreateInput = {
    actor_id?: number
    first_name: string
    last_name: string
    last_update?: Date | string
    film_actor?: film_actorUncheckedCreateNestedManyWithoutActorInput
  }

  export type actorUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    film_actor?: film_actorUpdateManyWithoutActorNestedInput
  }

  export type actorUncheckedUpdateInput = {
    actor_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    film_actor?: film_actorUncheckedUpdateManyWithoutActorNestedInput
  }

  export type actorCreateManyInput = {
    actor_id?: number
    first_name: string
    last_name: string
    last_update?: Date | string
  }

  export type actorUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type actorUncheckedUpdateManyInput = {
    actor_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    district?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: cityUpdateOneRequiredWithoutAddressNestedInput
    customer?: customerUpdateManyWithoutAddressNestedInput
    staff?: staffUpdateManyWithoutAddressNestedInput
    store?: storeUpdateManyWithoutAddressNestedInput
  }

  export type addressUncheckedUpdateInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    district?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUncheckedUpdateManyWithoutAddressNestedInput
    staff?: staffUncheckedUpdateManyWithoutAddressNestedInput
    store?: storeUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type addressUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    district?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressUncheckedUpdateManyInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    district?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryCreateInput = {
    name: string
    last_update?: Date | string
    film_category?: film_categoryCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    category_id?: number
    name: string
    last_update?: Date | string
    film_category?: film_categoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    film_category?: film_categoryUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    film_category?: film_categoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    category_id?: number
    name: string
    last_update?: Date | string
  }

  export type categoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryUncheckedUpdateManyInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cityCreateInput = {
    city: string
    last_update?: Date | string
    address?: addressCreateNestedManyWithoutCityInput
    country: countryCreateNestedOneWithoutCityInput
  }

  export type cityUncheckedCreateInput = {
    city_id?: number
    city: string
    country_id: number
    last_update?: Date | string
    address?: addressUncheckedCreateNestedManyWithoutCityInput
  }

  export type cityUpdateInput = {
    city?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: addressUpdateManyWithoutCityNestedInput
    country?: countryUpdateOneRequiredWithoutCityNestedInput
  }

  export type cityUncheckedUpdateInput = {
    city_id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    country_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: addressUncheckedUpdateManyWithoutCityNestedInput
  }

  export type cityCreateManyInput = {
    city_id?: number
    city: string
    country_id: number
    last_update?: Date | string
  }

  export type cityUpdateManyMutationInput = {
    city?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cityUncheckedUpdateManyInput = {
    city_id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    country_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type countryCreateInput = {
    country: string
    last_update?: Date | string
    city?: cityCreateNestedManyWithoutCountryInput
  }

  export type countryUncheckedCreateInput = {
    country_id?: number
    country: string
    last_update?: Date | string
    city?: cityUncheckedCreateNestedManyWithoutCountryInput
  }

  export type countryUpdateInput = {
    country?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: cityUpdateManyWithoutCountryNestedInput
  }

  export type countryUncheckedUpdateInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: cityUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type countryCreateManyInput = {
    country_id?: number
    country: string
    last_update?: Date | string
  }

  export type countryUpdateManyMutationInput = {
    country?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type countryUncheckedUpdateManyInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customerCreateInput = {
    first_name: string
    last_name: string
    email?: string | null
    active?: boolean
    create_date: Date | string
    last_update?: Date | string | null
    address: addressCreateNestedOneWithoutCustomerInput
    store: storeCreateNestedOneWithoutCustomerInput
    payment?: paymentCreateNestedManyWithoutCustomerInput
    rental?: rentalCreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateInput = {
    customer_id?: number
    store_id: number
    first_name: string
    last_name: string
    email?: string | null
    address_id: number
    active?: boolean
    create_date: Date | string
    last_update?: Date | string | null
    payment?: paymentUncheckedCreateNestedManyWithoutCustomerInput
    rental?: rentalUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: addressUpdateOneRequiredWithoutCustomerNestedInput
    store?: storeUpdateOneRequiredWithoutCustomerNestedInput
    payment?: paymentUpdateManyWithoutCustomerNestedInput
    rental?: rentalUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment?: paymentUncheckedUpdateManyWithoutCustomerNestedInput
    rental?: rentalUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type customerCreateManyInput = {
    customer_id?: number
    store_id: number
    first_name: string
    last_name: string
    email?: string | null
    address_id: number
    active?: boolean
    create_date: Date | string
    last_update?: Date | string | null
  }

  export type customerUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type customerUncheckedUpdateManyInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type filmCreateInput = {
    title: string
    description?: string | null
    release_year?: number | null
    rental_duration?: number
    rental_rate?: Decimal | DecimalJsLike | number | string
    length?: number | null
    replacement_cost?: Decimal | DecimalJsLike | number | string
    rating?: film_rating | null
    special_features?: string | null
    last_update?: Date | string
    language_film_language_idTolanguage: languageCreateNestedOneWithoutFilm_film_language_idTolanguageInput
    language_film_original_language_idTolanguage?: languageCreateNestedOneWithoutFilm_film_original_language_idTolanguageInput
    film_actor?: film_actorCreateNestedManyWithoutFilmInput
    film_category?: film_categoryCreateNestedManyWithoutFilmInput
    inventory?: inventoryCreateNestedManyWithoutFilmInput
  }

  export type filmUncheckedCreateInput = {
    film_id?: number
    title: string
    description?: string | null
    release_year?: number | null
    language_id: number
    original_language_id?: number | null
    rental_duration?: number
    rental_rate?: Decimal | DecimalJsLike | number | string
    length?: number | null
    replacement_cost?: Decimal | DecimalJsLike | number | string
    rating?: film_rating | null
    special_features?: string | null
    last_update?: Date | string
    film_actor?: film_actorUncheckedCreateNestedManyWithoutFilmInput
    film_category?: film_categoryUncheckedCreateNestedManyWithoutFilmInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutFilmInput
  }

  export type filmUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    rental_duration?: IntFieldUpdateOperationsInput | number
    rental_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: NullableIntFieldUpdateOperationsInput | number | null
    replacement_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: NullableEnumfilm_ratingFieldUpdateOperationsInput | film_rating | null
    special_features?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    language_film_language_idTolanguage?: languageUpdateOneRequiredWithoutFilm_film_language_idTolanguageNestedInput
    language_film_original_language_idTolanguage?: languageUpdateOneWithoutFilm_film_original_language_idTolanguageNestedInput
    film_actor?: film_actorUpdateManyWithoutFilmNestedInput
    film_category?: film_categoryUpdateManyWithoutFilmNestedInput
    inventory?: inventoryUpdateManyWithoutFilmNestedInput
  }

  export type filmUncheckedUpdateInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    language_id?: IntFieldUpdateOperationsInput | number
    original_language_id?: NullableIntFieldUpdateOperationsInput | number | null
    rental_duration?: IntFieldUpdateOperationsInput | number
    rental_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: NullableIntFieldUpdateOperationsInput | number | null
    replacement_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: NullableEnumfilm_ratingFieldUpdateOperationsInput | film_rating | null
    special_features?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    film_actor?: film_actorUncheckedUpdateManyWithoutFilmNestedInput
    film_category?: film_categoryUncheckedUpdateManyWithoutFilmNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutFilmNestedInput
  }

  export type filmCreateManyInput = {
    film_id?: number
    title: string
    description?: string | null
    release_year?: number | null
    language_id: number
    original_language_id?: number | null
    rental_duration?: number
    rental_rate?: Decimal | DecimalJsLike | number | string
    length?: number | null
    replacement_cost?: Decimal | DecimalJsLike | number | string
    rating?: film_rating | null
    special_features?: string | null
    last_update?: Date | string
  }

  export type filmUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    rental_duration?: IntFieldUpdateOperationsInput | number
    rental_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: NullableIntFieldUpdateOperationsInput | number | null
    replacement_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: NullableEnumfilm_ratingFieldUpdateOperationsInput | film_rating | null
    special_features?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type filmUncheckedUpdateManyInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    language_id?: IntFieldUpdateOperationsInput | number
    original_language_id?: NullableIntFieldUpdateOperationsInput | number | null
    rental_duration?: IntFieldUpdateOperationsInput | number
    rental_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: NullableIntFieldUpdateOperationsInput | number | null
    replacement_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: NullableEnumfilm_ratingFieldUpdateOperationsInput | film_rating | null
    special_features?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type film_actorCreateInput = {
    last_update?: Date | string
    actor: actorCreateNestedOneWithoutFilm_actorInput
    film: filmCreateNestedOneWithoutFilm_actorInput
  }

  export type film_actorUncheckedCreateInput = {
    actor_id: number
    film_id: number
    last_update?: Date | string
  }

  export type film_actorUpdateInput = {
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: actorUpdateOneRequiredWithoutFilm_actorNestedInput
    film?: filmUpdateOneRequiredWithoutFilm_actorNestedInput
  }

  export type film_actorUncheckedUpdateInput = {
    actor_id?: IntFieldUpdateOperationsInput | number
    film_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type film_actorCreateManyInput = {
    actor_id: number
    film_id: number
    last_update?: Date | string
  }

  export type film_actorUpdateManyMutationInput = {
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type film_actorUncheckedUpdateManyInput = {
    actor_id?: IntFieldUpdateOperationsInput | number
    film_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type film_categoryCreateInput = {
    last_update?: Date | string
    category: categoryCreateNestedOneWithoutFilm_categoryInput
    film: filmCreateNestedOneWithoutFilm_categoryInput
  }

  export type film_categoryUncheckedCreateInput = {
    film_id: number
    category_id: number
    last_update?: Date | string
  }

  export type film_categoryUpdateInput = {
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoryUpdateOneRequiredWithoutFilm_categoryNestedInput
    film?: filmUpdateOneRequiredWithoutFilm_categoryNestedInput
  }

  export type film_categoryUncheckedUpdateInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type film_categoryCreateManyInput = {
    film_id: number
    category_id: number
    last_update?: Date | string
  }

  export type film_categoryUpdateManyMutationInput = {
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type film_categoryUncheckedUpdateManyInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type film_textCreateInput = {
    film_id: number
    title: string
    description?: string | null
  }

  export type film_textUncheckedCreateInput = {
    film_id: number
    title: string
    description?: string | null
  }

  export type film_textUpdateInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type film_textUncheckedUpdateInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type film_textCreateManyInput = {
    film_id: number
    title: string
    description?: string | null
  }

  export type film_textUpdateManyMutationInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type film_textUncheckedUpdateManyInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inventoryCreateInput = {
    last_update?: Date | string
    film: filmCreateNestedOneWithoutInventoryInput
    store: storeCreateNestedOneWithoutInventoryInput
    rental?: rentalCreateNestedManyWithoutInventoryInput
  }

  export type inventoryUncheckedCreateInput = {
    inventory_id?: number
    film_id: number
    store_id: number
    last_update?: Date | string
    rental?: rentalUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type inventoryUpdateInput = {
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    film?: filmUpdateOneRequiredWithoutInventoryNestedInput
    store?: storeUpdateOneRequiredWithoutInventoryNestedInput
    rental?: rentalUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateInput = {
    inventory_id?: IntFieldUpdateOperationsInput | number
    film_id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    rental?: rentalUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryCreateManyInput = {
    inventory_id?: number
    film_id: number
    store_id: number
    last_update?: Date | string
  }

  export type inventoryUpdateManyMutationInput = {
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inventoryUncheckedUpdateManyInput = {
    inventory_id?: IntFieldUpdateOperationsInput | number
    film_id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type languageCreateInput = {
    name: string
    last_update?: Date | string
    film_film_language_idTolanguage?: filmCreateNestedManyWithoutLanguage_film_language_idTolanguageInput
    film_film_original_language_idTolanguage?: filmCreateNestedManyWithoutLanguage_film_original_language_idTolanguageInput
  }

  export type languageUncheckedCreateInput = {
    language_id?: number
    name: string
    last_update?: Date | string
    film_film_language_idTolanguage?: filmUncheckedCreateNestedManyWithoutLanguage_film_language_idTolanguageInput
    film_film_original_language_idTolanguage?: filmUncheckedCreateNestedManyWithoutLanguage_film_original_language_idTolanguageInput
  }

  export type languageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    film_film_language_idTolanguage?: filmUpdateManyWithoutLanguage_film_language_idTolanguageNestedInput
    film_film_original_language_idTolanguage?: filmUpdateManyWithoutLanguage_film_original_language_idTolanguageNestedInput
  }

  export type languageUncheckedUpdateInput = {
    language_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    film_film_language_idTolanguage?: filmUncheckedUpdateManyWithoutLanguage_film_language_idTolanguageNestedInput
    film_film_original_language_idTolanguage?: filmUncheckedUpdateManyWithoutLanguage_film_original_language_idTolanguageNestedInput
  }

  export type languageCreateManyInput = {
    language_id?: number
    name: string
    last_update?: Date | string
  }

  export type languageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type languageUncheckedUpdateManyInput = {
    language_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    payment_date: Date | string
    last_update?: Date | string | null
    customer: customerCreateNestedOneWithoutPaymentInput
    rental?: rentalCreateNestedOneWithoutPaymentInput
    staff: staffCreateNestedOneWithoutPaymentInput
  }

  export type paymentUncheckedCreateInput = {
    payment_id?: number
    customer_id: number
    staff_id: number
    rental_id?: number | null
    amount: Decimal | DecimalJsLike | number | string
    payment_date: Date | string
    last_update?: Date | string | null
  }

  export type paymentUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: customerUpdateOneRequiredWithoutPaymentNestedInput
    rental?: rentalUpdateOneWithoutPaymentNestedInput
    staff?: staffUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type paymentUncheckedUpdateInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    rental_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentCreateManyInput = {
    payment_id?: number
    customer_id: number
    staff_id: number
    rental_id?: number | null
    amount: Decimal | DecimalJsLike | number | string
    payment_date: Date | string
    last_update?: Date | string | null
  }

  export type paymentUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentUncheckedUpdateManyInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    rental_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rentalCreateInput = {
    rental_date: Date | string
    return_date?: Date | string | null
    last_update?: Date | string
    payment?: paymentCreateNestedManyWithoutRentalInput
    customer: customerCreateNestedOneWithoutRentalInput
    inventory: inventoryCreateNestedOneWithoutRentalInput
    staff: staffCreateNestedOneWithoutRentalInput
  }

  export type rentalUncheckedCreateInput = {
    rental_id?: number
    rental_date: Date | string
    inventory_id: number
    customer_id: number
    return_date?: Date | string | null
    staff_id: number
    last_update?: Date | string
    payment?: paymentUncheckedCreateNestedManyWithoutRentalInput
  }

  export type rentalUpdateInput = {
    rental_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUpdateManyWithoutRentalNestedInput
    customer?: customerUpdateOneRequiredWithoutRentalNestedInput
    inventory?: inventoryUpdateOneRequiredWithoutRentalNestedInput
    staff?: staffUpdateOneRequiredWithoutRentalNestedInput
  }

  export type rentalUncheckedUpdateInput = {
    rental_id?: IntFieldUpdateOperationsInput | number
    rental_date?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUncheckedUpdateManyWithoutRentalNestedInput
  }

  export type rentalCreateManyInput = {
    rental_id?: number
    rental_date: Date | string
    inventory_id: number
    customer_id: number
    return_date?: Date | string | null
    staff_id: number
    last_update?: Date | string
  }

  export type rentalUpdateManyMutationInput = {
    rental_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rentalUncheckedUpdateManyInput = {
    rental_id?: IntFieldUpdateOperationsInput | number
    rental_date?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type staffCreateInput = {
    first_name: string
    last_name: string
    picture?: Buffer | null
    email?: string | null
    active?: boolean
    username: string
    password?: string | null
    last_update?: Date | string
    payment?: paymentCreateNestedManyWithoutStaffInput
    rental?: rentalCreateNestedManyWithoutStaffInput
    address: addressCreateNestedOneWithoutStaffInput
    store_staff_store_idTostore: storeCreateNestedOneWithoutStaff_staff_store_idTostoreInput
    store_store_manager_staff_idTostaff?: storeCreateNestedOneWithoutStaff_store_manager_staff_idTostaffInput
  }

  export type staffUncheckedCreateInput = {
    staff_id?: number
    first_name: string
    last_name: string
    address_id: number
    picture?: Buffer | null
    email?: string | null
    store_id: number
    active?: boolean
    username: string
    password?: string | null
    last_update?: Date | string
    payment?: paymentUncheckedCreateNestedManyWithoutStaffInput
    rental?: rentalUncheckedCreateNestedManyWithoutStaffInput
    store_store_manager_staff_idTostaff?: storeUncheckedCreateNestedOneWithoutStaff_store_manager_staff_idTostaffInput
  }

  export type staffUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUpdateManyWithoutStaffNestedInput
    rental?: rentalUpdateManyWithoutStaffNestedInput
    address?: addressUpdateOneRequiredWithoutStaffNestedInput
    store_staff_store_idTostore?: storeUpdateOneRequiredWithoutStaff_staff_store_idTostoreNestedInput
    store_store_manager_staff_idTostaff?: storeUpdateOneWithoutStaff_store_manager_staff_idTostaffNestedInput
  }

  export type staffUncheckedUpdateInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    store_id?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUncheckedUpdateManyWithoutStaffNestedInput
    rental?: rentalUncheckedUpdateManyWithoutStaffNestedInput
    store_store_manager_staff_idTostaff?: storeUncheckedUpdateOneWithoutStaff_store_manager_staff_idTostaffNestedInput
  }

  export type staffCreateManyInput = {
    staff_id?: number
    first_name: string
    last_name: string
    address_id: number
    picture?: Buffer | null
    email?: string | null
    store_id: number
    active?: boolean
    username: string
    password?: string | null
    last_update?: Date | string
  }

  export type staffUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type staffUncheckedUpdateManyInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    store_id?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type storeCreateInput = {
    last_update?: Date | string
    customer?: customerCreateNestedManyWithoutStoreInput
    inventory?: inventoryCreateNestedManyWithoutStoreInput
    staff_staff_store_idTostore?: staffCreateNestedManyWithoutStore_staff_store_idTostoreInput
    address: addressCreateNestedOneWithoutStoreInput
    staff_store_manager_staff_idTostaff: staffCreateNestedOneWithoutStore_store_manager_staff_idTostaffInput
  }

  export type storeUncheckedCreateInput = {
    store_id?: number
    manager_staff_id: number
    address_id: number
    last_update?: Date | string
    customer?: customerUncheckedCreateNestedManyWithoutStoreInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutStoreInput
    staff_staff_store_idTostore?: staffUncheckedCreateNestedManyWithoutStore_staff_store_idTostoreInput
  }

  export type storeUpdateInput = {
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUpdateManyWithoutStoreNestedInput
    inventory?: inventoryUpdateManyWithoutStoreNestedInput
    staff_staff_store_idTostore?: staffUpdateManyWithoutStore_staff_store_idTostoreNestedInput
    address?: addressUpdateOneRequiredWithoutStoreNestedInput
    staff_store_manager_staff_idTostaff?: staffUpdateOneRequiredWithoutStore_store_manager_staff_idTostaffNestedInput
  }

  export type storeUncheckedUpdateInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    manager_staff_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUncheckedUpdateManyWithoutStoreNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutStoreNestedInput
    staff_staff_store_idTostore?: staffUncheckedUpdateManyWithoutStore_staff_store_idTostoreNestedInput
  }

  export type storeCreateManyInput = {
    store_id?: number
    manager_staff_id: number
    address_id: number
    last_update?: Date | string
  }

  export type storeUpdateManyMutationInput = {
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type storeUncheckedUpdateManyInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    manager_staff_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type Film_actorListRelationFilter = {
    every?: film_actorWhereInput
    some?: film_actorWhereInput
    none?: film_actorWhereInput
  }

  export type film_actorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type actorCountOrderByAggregateInput = {
    actor_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    last_update?: SortOrder
  }

  export type actorAvgOrderByAggregateInput = {
    actor_id?: SortOrder
  }

  export type actorMaxOrderByAggregateInput = {
    actor_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    last_update?: SortOrder
  }

  export type actorMinOrderByAggregateInput = {
    actor_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    last_update?: SortOrder
  }

  export type actorSumOrderByAggregateInput = {
    actor_id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type CityRelationFilter = {
    is?: cityWhereInput
    isNot?: cityWhereInput
  }

  export type CustomerListRelationFilter = {
    every?: customerWhereInput
    some?: customerWhereInput
    none?: customerWhereInput
  }

  export type StaffListRelationFilter = {
    every?: staffWhereInput
    some?: staffWhereInput
    none?: staffWhereInput
  }

  export type StoreListRelationFilter = {
    every?: storeWhereInput
    some?: storeWhereInput
    none?: storeWhereInput
  }

  export type customerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type staffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type storeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type addressCountOrderByAggregateInput = {
    address_id?: SortOrder
    address?: SortOrder
    address2?: SortOrder
    district?: SortOrder
    city_id?: SortOrder
    postal_code?: SortOrder
    phone?: SortOrder
    last_update?: SortOrder
  }

  export type addressAvgOrderByAggregateInput = {
    address_id?: SortOrder
    city_id?: SortOrder
  }

  export type addressMaxOrderByAggregateInput = {
    address_id?: SortOrder
    address?: SortOrder
    address2?: SortOrder
    district?: SortOrder
    city_id?: SortOrder
    postal_code?: SortOrder
    phone?: SortOrder
    last_update?: SortOrder
  }

  export type addressMinOrderByAggregateInput = {
    address_id?: SortOrder
    address?: SortOrder
    address2?: SortOrder
    district?: SortOrder
    city_id?: SortOrder
    postal_code?: SortOrder
    phone?: SortOrder
    last_update?: SortOrder
  }

  export type addressSumOrderByAggregateInput = {
    address_id?: SortOrder
    city_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type Film_categoryListRelationFilter = {
    every?: film_categoryWhereInput
    some?: film_categoryWhereInput
    none?: film_categoryWhereInput
  }

  export type film_categoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryCountOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    last_update?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    last_update?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    last_update?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type AddressListRelationFilter = {
    every?: addressWhereInput
    some?: addressWhereInput
    none?: addressWhereInput
  }

  export type CountryRelationFilter = {
    is?: countryWhereInput
    isNot?: countryWhereInput
  }

  export type addressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cityCountOrderByAggregateInput = {
    city_id?: SortOrder
    city?: SortOrder
    country_id?: SortOrder
    last_update?: SortOrder
  }

  export type cityAvgOrderByAggregateInput = {
    city_id?: SortOrder
    country_id?: SortOrder
  }

  export type cityMaxOrderByAggregateInput = {
    city_id?: SortOrder
    city?: SortOrder
    country_id?: SortOrder
    last_update?: SortOrder
  }

  export type cityMinOrderByAggregateInput = {
    city_id?: SortOrder
    city?: SortOrder
    country_id?: SortOrder
    last_update?: SortOrder
  }

  export type citySumOrderByAggregateInput = {
    city_id?: SortOrder
    country_id?: SortOrder
  }

  export type CityListRelationFilter = {
    every?: cityWhereInput
    some?: cityWhereInput
    none?: cityWhereInput
  }

  export type cityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type countryCountOrderByAggregateInput = {
    country_id?: SortOrder
    country?: SortOrder
    last_update?: SortOrder
  }

  export type countryAvgOrderByAggregateInput = {
    country_id?: SortOrder
  }

  export type countryMaxOrderByAggregateInput = {
    country_id?: SortOrder
    country?: SortOrder
    last_update?: SortOrder
  }

  export type countryMinOrderByAggregateInput = {
    country_id?: SortOrder
    country?: SortOrder
    last_update?: SortOrder
  }

  export type countrySumOrderByAggregateInput = {
    country_id?: SortOrder
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type AddressRelationFilter = {
    is?: addressWhereInput
    isNot?: addressWhereInput
  }

  export type StoreRelationFilter = {
    is?: storeWhereInput
    isNot?: storeWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: paymentWhereInput
    some?: paymentWhereInput
    none?: paymentWhereInput
  }

  export type RentalListRelationFilter = {
    every?: rentalWhereInput
    some?: rentalWhereInput
    none?: rentalWhereInput
  }

  export type paymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rentalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customerCountOrderByAggregateInput = {
    customer_id?: SortOrder
    store_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    address_id?: SortOrder
    active?: SortOrder
    create_date?: SortOrder
    last_update?: SortOrder
  }

  export type customerAvgOrderByAggregateInput = {
    customer_id?: SortOrder
    store_id?: SortOrder
    address_id?: SortOrder
  }

  export type customerMaxOrderByAggregateInput = {
    customer_id?: SortOrder
    store_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    address_id?: SortOrder
    active?: SortOrder
    create_date?: SortOrder
    last_update?: SortOrder
  }

  export type customerMinOrderByAggregateInput = {
    customer_id?: SortOrder
    store_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    address_id?: SortOrder
    active?: SortOrder
    create_date?: SortOrder
    last_update?: SortOrder
  }

  export type customerSumOrderByAggregateInput = {
    customer_id?: SortOrder
    store_id?: SortOrder
    address_id?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type DecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type Enumfilm_ratingNullableFilter = {
    equals?: film_rating | null
    in?: Enumerable<film_rating> | null
    notIn?: Enumerable<film_rating> | null
    not?: NestedEnumfilm_ratingNullableFilter | film_rating | null
  }

  export type LanguageRelationFilter = {
    is?: languageWhereInput
    isNot?: languageWhereInput
  }

  export type InventoryListRelationFilter = {
    every?: inventoryWhereInput
    some?: inventoryWhereInput
    none?: inventoryWhereInput
  }

  export type inventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type filmCountOrderByAggregateInput = {
    film_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    release_year?: SortOrder
    language_id?: SortOrder
    original_language_id?: SortOrder
    rental_duration?: SortOrder
    rental_rate?: SortOrder
    length?: SortOrder
    replacement_cost?: SortOrder
    rating?: SortOrder
    special_features?: SortOrder
    last_update?: SortOrder
  }

  export type filmAvgOrderByAggregateInput = {
    film_id?: SortOrder
    release_year?: SortOrder
    language_id?: SortOrder
    original_language_id?: SortOrder
    rental_duration?: SortOrder
    rental_rate?: SortOrder
    length?: SortOrder
    replacement_cost?: SortOrder
  }

  export type filmMaxOrderByAggregateInput = {
    film_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    release_year?: SortOrder
    language_id?: SortOrder
    original_language_id?: SortOrder
    rental_duration?: SortOrder
    rental_rate?: SortOrder
    length?: SortOrder
    replacement_cost?: SortOrder
    rating?: SortOrder
    special_features?: SortOrder
    last_update?: SortOrder
  }

  export type filmMinOrderByAggregateInput = {
    film_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    release_year?: SortOrder
    language_id?: SortOrder
    original_language_id?: SortOrder
    rental_duration?: SortOrder
    rental_rate?: SortOrder
    length?: SortOrder
    replacement_cost?: SortOrder
    rating?: SortOrder
    special_features?: SortOrder
    last_update?: SortOrder
  }

  export type filmSumOrderByAggregateInput = {
    film_id?: SortOrder
    release_year?: SortOrder
    language_id?: SortOrder
    original_language_id?: SortOrder
    rental_duration?: SortOrder
    rental_rate?: SortOrder
    length?: SortOrder
    replacement_cost?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type Enumfilm_ratingNullableWithAggregatesFilter = {
    equals?: film_rating | null
    in?: Enumerable<film_rating> | null
    notIn?: Enumerable<film_rating> | null
    not?: NestedEnumfilm_ratingNullableWithAggregatesFilter | film_rating | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumfilm_ratingNullableFilter
    _max?: NestedEnumfilm_ratingNullableFilter
  }

  export type ActorRelationFilter = {
    is?: actorWhereInput
    isNot?: actorWhereInput
  }

  export type FilmRelationFilter = {
    is?: filmWhereInput
    isNot?: filmWhereInput
  }

  export type film_actorActor_idFilm_idCompoundUniqueInput = {
    actor_id: number
    film_id: number
  }

  export type film_actorCountOrderByAggregateInput = {
    actor_id?: SortOrder
    film_id?: SortOrder
    last_update?: SortOrder
  }

  export type film_actorAvgOrderByAggregateInput = {
    actor_id?: SortOrder
    film_id?: SortOrder
  }

  export type film_actorMaxOrderByAggregateInput = {
    actor_id?: SortOrder
    film_id?: SortOrder
    last_update?: SortOrder
  }

  export type film_actorMinOrderByAggregateInput = {
    actor_id?: SortOrder
    film_id?: SortOrder
    last_update?: SortOrder
  }

  export type film_actorSumOrderByAggregateInput = {
    actor_id?: SortOrder
    film_id?: SortOrder
  }

  export type CategoryRelationFilter = {
    is?: categoryWhereInput
    isNot?: categoryWhereInput
  }

  export type film_categoryFilm_idCategory_idCompoundUniqueInput = {
    film_id: number
    category_id: number
  }

  export type film_categoryCountOrderByAggregateInput = {
    film_id?: SortOrder
    category_id?: SortOrder
    last_update?: SortOrder
  }

  export type film_categoryAvgOrderByAggregateInput = {
    film_id?: SortOrder
    category_id?: SortOrder
  }

  export type film_categoryMaxOrderByAggregateInput = {
    film_id?: SortOrder
    category_id?: SortOrder
    last_update?: SortOrder
  }

  export type film_categoryMinOrderByAggregateInput = {
    film_id?: SortOrder
    category_id?: SortOrder
    last_update?: SortOrder
  }

  export type film_categorySumOrderByAggregateInput = {
    film_id?: SortOrder
    category_id?: SortOrder
  }

  export type film_textCountOrderByAggregateInput = {
    film_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type film_textAvgOrderByAggregateInput = {
    film_id?: SortOrder
  }

  export type film_textMaxOrderByAggregateInput = {
    film_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type film_textMinOrderByAggregateInput = {
    film_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type film_textSumOrderByAggregateInput = {
    film_id?: SortOrder
  }

  export type inventoryCountOrderByAggregateInput = {
    inventory_id?: SortOrder
    film_id?: SortOrder
    store_id?: SortOrder
    last_update?: SortOrder
  }

  export type inventoryAvgOrderByAggregateInput = {
    inventory_id?: SortOrder
    film_id?: SortOrder
    store_id?: SortOrder
  }

  export type inventoryMaxOrderByAggregateInput = {
    inventory_id?: SortOrder
    film_id?: SortOrder
    store_id?: SortOrder
    last_update?: SortOrder
  }

  export type inventoryMinOrderByAggregateInput = {
    inventory_id?: SortOrder
    film_id?: SortOrder
    store_id?: SortOrder
    last_update?: SortOrder
  }

  export type inventorySumOrderByAggregateInput = {
    inventory_id?: SortOrder
    film_id?: SortOrder
    store_id?: SortOrder
  }

  export type FilmListRelationFilter = {
    every?: filmWhereInput
    some?: filmWhereInput
    none?: filmWhereInput
  }

  export type filmOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type languageCountOrderByAggregateInput = {
    language_id?: SortOrder
    name?: SortOrder
    last_update?: SortOrder
  }

  export type languageAvgOrderByAggregateInput = {
    language_id?: SortOrder
  }

  export type languageMaxOrderByAggregateInput = {
    language_id?: SortOrder
    name?: SortOrder
    last_update?: SortOrder
  }

  export type languageMinOrderByAggregateInput = {
    language_id?: SortOrder
    name?: SortOrder
    last_update?: SortOrder
  }

  export type languageSumOrderByAggregateInput = {
    language_id?: SortOrder
  }

  export type CustomerRelationFilter = {
    is?: customerWhereInput
    isNot?: customerWhereInput
  }

  export type RentalRelationFilter = {
    is?: rentalWhereInput | null
    isNot?: rentalWhereInput | null
  }

  export type StaffRelationFilter = {
    is?: staffWhereInput
    isNot?: staffWhereInput
  }

  export type paymentCountOrderByAggregateInput = {
    payment_id?: SortOrder
    customer_id?: SortOrder
    staff_id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
    last_update?: SortOrder
  }

  export type paymentAvgOrderByAggregateInput = {
    payment_id?: SortOrder
    customer_id?: SortOrder
    staff_id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
  }

  export type paymentMaxOrderByAggregateInput = {
    payment_id?: SortOrder
    customer_id?: SortOrder
    staff_id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
    last_update?: SortOrder
  }

  export type paymentMinOrderByAggregateInput = {
    payment_id?: SortOrder
    customer_id?: SortOrder
    staff_id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
    last_update?: SortOrder
  }

  export type paymentSumOrderByAggregateInput = {
    payment_id?: SortOrder
    customer_id?: SortOrder
    staff_id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
  }

  export type InventoryRelationFilter = {
    is?: inventoryWhereInput
    isNot?: inventoryWhereInput
  }

  export type rentalRental_dateInventory_idCustomer_idCompoundUniqueInput = {
    rental_date: Date | string
    inventory_id: number
    customer_id: number
  }

  export type rentalCountOrderByAggregateInput = {
    rental_id?: SortOrder
    rental_date?: SortOrder
    inventory_id?: SortOrder
    customer_id?: SortOrder
    return_date?: SortOrder
    staff_id?: SortOrder
    last_update?: SortOrder
  }

  export type rentalAvgOrderByAggregateInput = {
    rental_id?: SortOrder
    inventory_id?: SortOrder
    customer_id?: SortOrder
    staff_id?: SortOrder
  }

  export type rentalMaxOrderByAggregateInput = {
    rental_id?: SortOrder
    rental_date?: SortOrder
    inventory_id?: SortOrder
    customer_id?: SortOrder
    return_date?: SortOrder
    staff_id?: SortOrder
    last_update?: SortOrder
  }

  export type rentalMinOrderByAggregateInput = {
    rental_id?: SortOrder
    rental_date?: SortOrder
    inventory_id?: SortOrder
    customer_id?: SortOrder
    return_date?: SortOrder
    staff_id?: SortOrder
    last_update?: SortOrder
  }

  export type rentalSumOrderByAggregateInput = {
    rental_id?: SortOrder
    inventory_id?: SortOrder
    customer_id?: SortOrder
    staff_id?: SortOrder
  }

  export type BytesNullableFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableFilter | Buffer | null
  }

  export type staffCountOrderByAggregateInput = {
    staff_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    address_id?: SortOrder
    picture?: SortOrder
    email?: SortOrder
    store_id?: SortOrder
    active?: SortOrder
    username?: SortOrder
    password?: SortOrder
    last_update?: SortOrder
  }

  export type staffAvgOrderByAggregateInput = {
    staff_id?: SortOrder
    address_id?: SortOrder
    store_id?: SortOrder
  }

  export type staffMaxOrderByAggregateInput = {
    staff_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    address_id?: SortOrder
    picture?: SortOrder
    email?: SortOrder
    store_id?: SortOrder
    active?: SortOrder
    username?: SortOrder
    password?: SortOrder
    last_update?: SortOrder
  }

  export type staffMinOrderByAggregateInput = {
    staff_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    address_id?: SortOrder
    picture?: SortOrder
    email?: SortOrder
    store_id?: SortOrder
    active?: SortOrder
    username?: SortOrder
    password?: SortOrder
    last_update?: SortOrder
  }

  export type staffSumOrderByAggregateInput = {
    staff_id?: SortOrder
    address_id?: SortOrder
    store_id?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableWithAggregatesFilter | Buffer | null
    _count?: NestedIntNullableFilter
    _min?: NestedBytesNullableFilter
    _max?: NestedBytesNullableFilter
  }

  export type storeCountOrderByAggregateInput = {
    store_id?: SortOrder
    manager_staff_id?: SortOrder
    address_id?: SortOrder
    last_update?: SortOrder
  }

  export type storeAvgOrderByAggregateInput = {
    store_id?: SortOrder
    manager_staff_id?: SortOrder
    address_id?: SortOrder
  }

  export type storeMaxOrderByAggregateInput = {
    store_id?: SortOrder
    manager_staff_id?: SortOrder
    address_id?: SortOrder
    last_update?: SortOrder
  }

  export type storeMinOrderByAggregateInput = {
    store_id?: SortOrder
    manager_staff_id?: SortOrder
    address_id?: SortOrder
    last_update?: SortOrder
  }

  export type storeSumOrderByAggregateInput = {
    store_id?: SortOrder
    manager_staff_id?: SortOrder
    address_id?: SortOrder
  }

  export type film_actorCreateNestedManyWithoutActorInput = {
    create?: XOR<Enumerable<film_actorCreateWithoutActorInput>, Enumerable<film_actorUncheckedCreateWithoutActorInput>>
    connectOrCreate?: Enumerable<film_actorCreateOrConnectWithoutActorInput>
    createMany?: film_actorCreateManyActorInputEnvelope
    connect?: Enumerable<film_actorWhereUniqueInput>
  }

  export type film_actorUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<Enumerable<film_actorCreateWithoutActorInput>, Enumerable<film_actorUncheckedCreateWithoutActorInput>>
    connectOrCreate?: Enumerable<film_actorCreateOrConnectWithoutActorInput>
    createMany?: film_actorCreateManyActorInputEnvelope
    connect?: Enumerable<film_actorWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type film_actorUpdateManyWithoutActorNestedInput = {
    create?: XOR<Enumerable<film_actorCreateWithoutActorInput>, Enumerable<film_actorUncheckedCreateWithoutActorInput>>
    connectOrCreate?: Enumerable<film_actorCreateOrConnectWithoutActorInput>
    upsert?: Enumerable<film_actorUpsertWithWhereUniqueWithoutActorInput>
    createMany?: film_actorCreateManyActorInputEnvelope
    set?: Enumerable<film_actorWhereUniqueInput>
    disconnect?: Enumerable<film_actorWhereUniqueInput>
    delete?: Enumerable<film_actorWhereUniqueInput>
    connect?: Enumerable<film_actorWhereUniqueInput>
    update?: Enumerable<film_actorUpdateWithWhereUniqueWithoutActorInput>
    updateMany?: Enumerable<film_actorUpdateManyWithWhereWithoutActorInput>
    deleteMany?: Enumerable<film_actorScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type film_actorUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<Enumerable<film_actorCreateWithoutActorInput>, Enumerable<film_actorUncheckedCreateWithoutActorInput>>
    connectOrCreate?: Enumerable<film_actorCreateOrConnectWithoutActorInput>
    upsert?: Enumerable<film_actorUpsertWithWhereUniqueWithoutActorInput>
    createMany?: film_actorCreateManyActorInputEnvelope
    set?: Enumerable<film_actorWhereUniqueInput>
    disconnect?: Enumerable<film_actorWhereUniqueInput>
    delete?: Enumerable<film_actorWhereUniqueInput>
    connect?: Enumerable<film_actorWhereUniqueInput>
    update?: Enumerable<film_actorUpdateWithWhereUniqueWithoutActorInput>
    updateMany?: Enumerable<film_actorUpdateManyWithWhereWithoutActorInput>
    deleteMany?: Enumerable<film_actorScalarWhereInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type cityUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<cityCreateWithoutAddressInput, cityUncheckedCreateWithoutAddressInput>
    connectOrCreate?: cityCreateOrConnectWithoutAddressInput
    upsert?: cityUpsertWithoutAddressInput
    connect?: cityWhereUniqueInput
    update?: XOR<cityUpdateWithoutAddressInput, cityUncheckedUpdateWithoutAddressInput>
  }

  export type customerUpdateManyWithoutAddressNestedInput = {
    create?: XOR<Enumerable<customerCreateWithoutAddressInput>, Enumerable<customerUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<customerCreateOrConnectWithoutAddressInput>
    upsert?: Enumerable<customerUpsertWithWhereUniqueWithoutAddressInput>
    createMany?: customerCreateManyAddressInputEnvelope
    set?: Enumerable<customerWhereUniqueInput>
    disconnect?: Enumerable<customerWhereUniqueInput>
    delete?: Enumerable<customerWhereUniqueInput>
    connect?: Enumerable<customerWhereUniqueInput>
    update?: Enumerable<customerUpdateWithWhereUniqueWithoutAddressInput>
    updateMany?: Enumerable<customerUpdateManyWithWhereWithoutAddressInput>
    deleteMany?: Enumerable<customerScalarWhereInput>
  }

  export type staffUpdateManyWithoutAddressNestedInput = {
    create?: XOR<Enumerable<staffCreateWithoutAddressInput>, Enumerable<staffUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<staffCreateOrConnectWithoutAddressInput>
    upsert?: Enumerable<staffUpsertWithWhereUniqueWithoutAddressInput>
    createMany?: staffCreateManyAddressInputEnvelope
    set?: Enumerable<staffWhereUniqueInput>
    disconnect?: Enumerable<staffWhereUniqueInput>
    delete?: Enumerable<staffWhereUniqueInput>
    connect?: Enumerable<staffWhereUniqueInput>
    update?: Enumerable<staffUpdateWithWhereUniqueWithoutAddressInput>
    updateMany?: Enumerable<staffUpdateManyWithWhereWithoutAddressInput>
    deleteMany?: Enumerable<staffScalarWhereInput>
  }

  export type storeUpdateManyWithoutAddressNestedInput = {
    create?: XOR<Enumerable<storeCreateWithoutAddressInput>, Enumerable<storeUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<storeCreateOrConnectWithoutAddressInput>
    upsert?: Enumerable<storeUpsertWithWhereUniqueWithoutAddressInput>
    createMany?: storeCreateManyAddressInputEnvelope
    set?: Enumerable<storeWhereUniqueInput>
    disconnect?: Enumerable<storeWhereUniqueInput>
    delete?: Enumerable<storeWhereUniqueInput>
    connect?: Enumerable<storeWhereUniqueInput>
    update?: Enumerable<storeUpdateWithWhereUniqueWithoutAddressInput>
    updateMany?: Enumerable<storeUpdateManyWithWhereWithoutAddressInput>
    deleteMany?: Enumerable<storeScalarWhereInput>
  }

  export type customerUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<Enumerable<customerCreateWithoutAddressInput>, Enumerable<customerUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<customerCreateOrConnectWithoutAddressInput>
    upsert?: Enumerable<customerUpsertWithWhereUniqueWithoutAddressInput>
    createMany?: customerCreateManyAddressInputEnvelope
    set?: Enumerable<customerWhereUniqueInput>
    disconnect?: Enumerable<customerWhereUniqueInput>
    delete?: Enumerable<customerWhereUniqueInput>
    connect?: Enumerable<customerWhereUniqueInput>
    update?: Enumerable<customerUpdateWithWhereUniqueWithoutAddressInput>
    updateMany?: Enumerable<customerUpdateManyWithWhereWithoutAddressInput>
    deleteMany?: Enumerable<customerScalarWhereInput>
  }

  export type staffUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<Enumerable<staffCreateWithoutAddressInput>, Enumerable<staffUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<staffCreateOrConnectWithoutAddressInput>
    upsert?: Enumerable<staffUpsertWithWhereUniqueWithoutAddressInput>
    createMany?: staffCreateManyAddressInputEnvelope
    set?: Enumerable<staffWhereUniqueInput>
    disconnect?: Enumerable<staffWhereUniqueInput>
    delete?: Enumerable<staffWhereUniqueInput>
    connect?: Enumerable<staffWhereUniqueInput>
    update?: Enumerable<staffUpdateWithWhereUniqueWithoutAddressInput>
    updateMany?: Enumerable<staffUpdateManyWithWhereWithoutAddressInput>
    deleteMany?: Enumerable<staffScalarWhereInput>
  }

  export type storeUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<Enumerable<storeCreateWithoutAddressInput>, Enumerable<storeUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<storeCreateOrConnectWithoutAddressInput>
    upsert?: Enumerable<storeUpsertWithWhereUniqueWithoutAddressInput>
    createMany?: storeCreateManyAddressInputEnvelope
    set?: Enumerable<storeWhereUniqueInput>
    disconnect?: Enumerable<storeWhereUniqueInput>
    delete?: Enumerable<storeWhereUniqueInput>
    connect?: Enumerable<storeWhereUniqueInput>
    update?: Enumerable<storeUpdateWithWhereUniqueWithoutAddressInput>
    updateMany?: Enumerable<storeUpdateManyWithWhereWithoutAddressInput>
    deleteMany?: Enumerable<storeScalarWhereInput>
  }

  export type film_categoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<film_categoryCreateWithoutCategoryInput>, Enumerable<film_categoryUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<film_categoryCreateOrConnectWithoutCategoryInput>
    createMany?: film_categoryCreateManyCategoryInputEnvelope
    connect?: Enumerable<film_categoryWhereUniqueInput>
  }

  export type film_categoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<film_categoryCreateWithoutCategoryInput>, Enumerable<film_categoryUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<film_categoryCreateOrConnectWithoutCategoryInput>
    createMany?: film_categoryCreateManyCategoryInputEnvelope
    connect?: Enumerable<film_categoryWhereUniqueInput>
  }

  export type film_categoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<film_categoryCreateWithoutCategoryInput>, Enumerable<film_categoryUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<film_categoryCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<film_categoryUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: film_categoryCreateManyCategoryInputEnvelope
    set?: Enumerable<film_categoryWhereUniqueInput>
    disconnect?: Enumerable<film_categoryWhereUniqueInput>
    delete?: Enumerable<film_categoryWhereUniqueInput>
    connect?: Enumerable<film_categoryWhereUniqueInput>
    update?: Enumerable<film_categoryUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<film_categoryUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<film_categoryScalarWhereInput>
  }

  export type film_categoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<film_categoryCreateWithoutCategoryInput>, Enumerable<film_categoryUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<film_categoryCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<film_categoryUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: film_categoryCreateManyCategoryInputEnvelope
    set?: Enumerable<film_categoryWhereUniqueInput>
    disconnect?: Enumerable<film_categoryWhereUniqueInput>
    delete?: Enumerable<film_categoryWhereUniqueInput>
    connect?: Enumerable<film_categoryWhereUniqueInput>
    update?: Enumerable<film_categoryUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<film_categoryUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<film_categoryScalarWhereInput>
  }

  export type addressCreateNestedManyWithoutCityInput = {
    connect?: Enumerable<addressWhereUniqueInput>
  }

  export type countryCreateNestedOneWithoutCityInput = {
    create?: XOR<countryCreateWithoutCityInput, countryUncheckedCreateWithoutCityInput>
    connectOrCreate?: countryCreateOrConnectWithoutCityInput
    connect?: countryWhereUniqueInput
  }

  export type addressUncheckedCreateNestedManyWithoutCityInput = {
    connect?: Enumerable<addressWhereUniqueInput>
  }

  export type addressUpdateManyWithoutCityNestedInput = {
    set?: Enumerable<addressWhereUniqueInput>
    disconnect?: Enumerable<addressWhereUniqueInput>
    delete?: Enumerable<addressWhereUniqueInput>
    connect?: Enumerable<addressWhereUniqueInput>
    update?: Enumerable<addressUpdateWithWhereUniqueWithoutCityInput>
    updateMany?: Enumerable<addressUpdateManyWithWhereWithoutCityInput>
    deleteMany?: Enumerable<addressScalarWhereInput>
  }

  export type countryUpdateOneRequiredWithoutCityNestedInput = {
    create?: XOR<countryCreateWithoutCityInput, countryUncheckedCreateWithoutCityInput>
    connectOrCreate?: countryCreateOrConnectWithoutCityInput
    upsert?: countryUpsertWithoutCityInput
    connect?: countryWhereUniqueInput
    update?: XOR<countryUpdateWithoutCityInput, countryUncheckedUpdateWithoutCityInput>
  }

  export type addressUncheckedUpdateManyWithoutCityNestedInput = {
    set?: Enumerable<addressWhereUniqueInput>
    disconnect?: Enumerable<addressWhereUniqueInput>
    delete?: Enumerable<addressWhereUniqueInput>
    connect?: Enumerable<addressWhereUniqueInput>
    update?: Enumerable<addressUpdateWithWhereUniqueWithoutCityInput>
    updateMany?: Enumerable<addressUpdateManyWithWhereWithoutCityInput>
    deleteMany?: Enumerable<addressScalarWhereInput>
  }

  export type cityCreateNestedManyWithoutCountryInput = {
    create?: XOR<Enumerable<cityCreateWithoutCountryInput>, Enumerable<cityUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<cityCreateOrConnectWithoutCountryInput>
    createMany?: cityCreateManyCountryInputEnvelope
    connect?: Enumerable<cityWhereUniqueInput>
  }

  export type cityUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<Enumerable<cityCreateWithoutCountryInput>, Enumerable<cityUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<cityCreateOrConnectWithoutCountryInput>
    createMany?: cityCreateManyCountryInputEnvelope
    connect?: Enumerable<cityWhereUniqueInput>
  }

  export type cityUpdateManyWithoutCountryNestedInput = {
    create?: XOR<Enumerable<cityCreateWithoutCountryInput>, Enumerable<cityUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<cityCreateOrConnectWithoutCountryInput>
    upsert?: Enumerable<cityUpsertWithWhereUniqueWithoutCountryInput>
    createMany?: cityCreateManyCountryInputEnvelope
    set?: Enumerable<cityWhereUniqueInput>
    disconnect?: Enumerable<cityWhereUniqueInput>
    delete?: Enumerable<cityWhereUniqueInput>
    connect?: Enumerable<cityWhereUniqueInput>
    update?: Enumerable<cityUpdateWithWhereUniqueWithoutCountryInput>
    updateMany?: Enumerable<cityUpdateManyWithWhereWithoutCountryInput>
    deleteMany?: Enumerable<cityScalarWhereInput>
  }

  export type cityUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<Enumerable<cityCreateWithoutCountryInput>, Enumerable<cityUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<cityCreateOrConnectWithoutCountryInput>
    upsert?: Enumerable<cityUpsertWithWhereUniqueWithoutCountryInput>
    createMany?: cityCreateManyCountryInputEnvelope
    set?: Enumerable<cityWhereUniqueInput>
    disconnect?: Enumerable<cityWhereUniqueInput>
    delete?: Enumerable<cityWhereUniqueInput>
    connect?: Enumerable<cityWhereUniqueInput>
    update?: Enumerable<cityUpdateWithWhereUniqueWithoutCountryInput>
    updateMany?: Enumerable<cityUpdateManyWithWhereWithoutCountryInput>
    deleteMany?: Enumerable<cityScalarWhereInput>
  }

  export type addressCreateNestedOneWithoutCustomerInput = {
    connect?: addressWhereUniqueInput
  }

  export type storeCreateNestedOneWithoutCustomerInput = {
    create?: XOR<storeCreateWithoutCustomerInput, storeUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: storeCreateOrConnectWithoutCustomerInput
    connect?: storeWhereUniqueInput
  }

  export type paymentCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<paymentCreateWithoutCustomerInput>, Enumerable<paymentUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<paymentCreateOrConnectWithoutCustomerInput>
    createMany?: paymentCreateManyCustomerInputEnvelope
    connect?: Enumerable<paymentWhereUniqueInput>
  }

  export type rentalCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<rentalCreateWithoutCustomerInput>, Enumerable<rentalUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<rentalCreateOrConnectWithoutCustomerInput>
    createMany?: rentalCreateManyCustomerInputEnvelope
    connect?: Enumerable<rentalWhereUniqueInput>
  }

  export type paymentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<paymentCreateWithoutCustomerInput>, Enumerable<paymentUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<paymentCreateOrConnectWithoutCustomerInput>
    createMany?: paymentCreateManyCustomerInputEnvelope
    connect?: Enumerable<paymentWhereUniqueInput>
  }

  export type rentalUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<rentalCreateWithoutCustomerInput>, Enumerable<rentalUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<rentalCreateOrConnectWithoutCustomerInput>
    createMany?: rentalCreateManyCustomerInputEnvelope
    connect?: Enumerable<rentalWhereUniqueInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type addressUpdateOneRequiredWithoutCustomerNestedInput = {
    connect?: addressWhereUniqueInput
    update?: XOR<addressUpdateWithoutCustomerInput, addressUncheckedUpdateWithoutCustomerInput>
  }

  export type storeUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<storeCreateWithoutCustomerInput, storeUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: storeCreateOrConnectWithoutCustomerInput
    upsert?: storeUpsertWithoutCustomerInput
    connect?: storeWhereUniqueInput
    update?: XOR<storeUpdateWithoutCustomerInput, storeUncheckedUpdateWithoutCustomerInput>
  }

  export type paymentUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<paymentCreateWithoutCustomerInput>, Enumerable<paymentUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<paymentCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<paymentUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: paymentCreateManyCustomerInputEnvelope
    set?: Enumerable<paymentWhereUniqueInput>
    disconnect?: Enumerable<paymentWhereUniqueInput>
    delete?: Enumerable<paymentWhereUniqueInput>
    connect?: Enumerable<paymentWhereUniqueInput>
    update?: Enumerable<paymentUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<paymentUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<paymentScalarWhereInput>
  }

  export type rentalUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<rentalCreateWithoutCustomerInput>, Enumerable<rentalUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<rentalCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<rentalUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: rentalCreateManyCustomerInputEnvelope
    set?: Enumerable<rentalWhereUniqueInput>
    disconnect?: Enumerable<rentalWhereUniqueInput>
    delete?: Enumerable<rentalWhereUniqueInput>
    connect?: Enumerable<rentalWhereUniqueInput>
    update?: Enumerable<rentalUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<rentalUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<rentalScalarWhereInput>
  }

  export type paymentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<paymentCreateWithoutCustomerInput>, Enumerable<paymentUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<paymentCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<paymentUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: paymentCreateManyCustomerInputEnvelope
    set?: Enumerable<paymentWhereUniqueInput>
    disconnect?: Enumerable<paymentWhereUniqueInput>
    delete?: Enumerable<paymentWhereUniqueInput>
    connect?: Enumerable<paymentWhereUniqueInput>
    update?: Enumerable<paymentUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<paymentUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<paymentScalarWhereInput>
  }

  export type rentalUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<rentalCreateWithoutCustomerInput>, Enumerable<rentalUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<rentalCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<rentalUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: rentalCreateManyCustomerInputEnvelope
    set?: Enumerable<rentalWhereUniqueInput>
    disconnect?: Enumerable<rentalWhereUniqueInput>
    delete?: Enumerable<rentalWhereUniqueInput>
    connect?: Enumerable<rentalWhereUniqueInput>
    update?: Enumerable<rentalUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<rentalUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<rentalScalarWhereInput>
  }

  export type languageCreateNestedOneWithoutFilm_film_language_idTolanguageInput = {
    create?: XOR<languageCreateWithoutFilm_film_language_idTolanguageInput, languageUncheckedCreateWithoutFilm_film_language_idTolanguageInput>
    connectOrCreate?: languageCreateOrConnectWithoutFilm_film_language_idTolanguageInput
    connect?: languageWhereUniqueInput
  }

  export type languageCreateNestedOneWithoutFilm_film_original_language_idTolanguageInput = {
    create?: XOR<languageCreateWithoutFilm_film_original_language_idTolanguageInput, languageUncheckedCreateWithoutFilm_film_original_language_idTolanguageInput>
    connectOrCreate?: languageCreateOrConnectWithoutFilm_film_original_language_idTolanguageInput
    connect?: languageWhereUniqueInput
  }

  export type film_actorCreateNestedManyWithoutFilmInput = {
    create?: XOR<Enumerable<film_actorCreateWithoutFilmInput>, Enumerable<film_actorUncheckedCreateWithoutFilmInput>>
    connectOrCreate?: Enumerable<film_actorCreateOrConnectWithoutFilmInput>
    createMany?: film_actorCreateManyFilmInputEnvelope
    connect?: Enumerable<film_actorWhereUniqueInput>
  }

  export type film_categoryCreateNestedManyWithoutFilmInput = {
    create?: XOR<Enumerable<film_categoryCreateWithoutFilmInput>, Enumerable<film_categoryUncheckedCreateWithoutFilmInput>>
    connectOrCreate?: Enumerable<film_categoryCreateOrConnectWithoutFilmInput>
    createMany?: film_categoryCreateManyFilmInputEnvelope
    connect?: Enumerable<film_categoryWhereUniqueInput>
  }

  export type inventoryCreateNestedManyWithoutFilmInput = {
    create?: XOR<Enumerable<inventoryCreateWithoutFilmInput>, Enumerable<inventoryUncheckedCreateWithoutFilmInput>>
    connectOrCreate?: Enumerable<inventoryCreateOrConnectWithoutFilmInput>
    createMany?: inventoryCreateManyFilmInputEnvelope
    connect?: Enumerable<inventoryWhereUniqueInput>
  }

  export type film_actorUncheckedCreateNestedManyWithoutFilmInput = {
    create?: XOR<Enumerable<film_actorCreateWithoutFilmInput>, Enumerable<film_actorUncheckedCreateWithoutFilmInput>>
    connectOrCreate?: Enumerable<film_actorCreateOrConnectWithoutFilmInput>
    createMany?: film_actorCreateManyFilmInputEnvelope
    connect?: Enumerable<film_actorWhereUniqueInput>
  }

  export type film_categoryUncheckedCreateNestedManyWithoutFilmInput = {
    create?: XOR<Enumerable<film_categoryCreateWithoutFilmInput>, Enumerable<film_categoryUncheckedCreateWithoutFilmInput>>
    connectOrCreate?: Enumerable<film_categoryCreateOrConnectWithoutFilmInput>
    createMany?: film_categoryCreateManyFilmInputEnvelope
    connect?: Enumerable<film_categoryWhereUniqueInput>
  }

  export type inventoryUncheckedCreateNestedManyWithoutFilmInput = {
    create?: XOR<Enumerable<inventoryCreateWithoutFilmInput>, Enumerable<inventoryUncheckedCreateWithoutFilmInput>>
    connectOrCreate?: Enumerable<inventoryCreateOrConnectWithoutFilmInput>
    createMany?: inventoryCreateManyFilmInputEnvelope
    connect?: Enumerable<inventoryWhereUniqueInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableEnumfilm_ratingFieldUpdateOperationsInput = {
    set?: film_rating | null
  }

  export type languageUpdateOneRequiredWithoutFilm_film_language_idTolanguageNestedInput = {
    create?: XOR<languageCreateWithoutFilm_film_language_idTolanguageInput, languageUncheckedCreateWithoutFilm_film_language_idTolanguageInput>
    connectOrCreate?: languageCreateOrConnectWithoutFilm_film_language_idTolanguageInput
    upsert?: languageUpsertWithoutFilm_film_language_idTolanguageInput
    connect?: languageWhereUniqueInput
    update?: XOR<languageUpdateWithoutFilm_film_language_idTolanguageInput, languageUncheckedUpdateWithoutFilm_film_language_idTolanguageInput>
  }

  export type languageUpdateOneWithoutFilm_film_original_language_idTolanguageNestedInput = {
    create?: XOR<languageCreateWithoutFilm_film_original_language_idTolanguageInput, languageUncheckedCreateWithoutFilm_film_original_language_idTolanguageInput>
    connectOrCreate?: languageCreateOrConnectWithoutFilm_film_original_language_idTolanguageInput
    upsert?: languageUpsertWithoutFilm_film_original_language_idTolanguageInput
    disconnect?: boolean
    delete?: boolean
    connect?: languageWhereUniqueInput
    update?: XOR<languageUpdateWithoutFilm_film_original_language_idTolanguageInput, languageUncheckedUpdateWithoutFilm_film_original_language_idTolanguageInput>
  }

  export type film_actorUpdateManyWithoutFilmNestedInput = {
    create?: XOR<Enumerable<film_actorCreateWithoutFilmInput>, Enumerable<film_actorUncheckedCreateWithoutFilmInput>>
    connectOrCreate?: Enumerable<film_actorCreateOrConnectWithoutFilmInput>
    upsert?: Enumerable<film_actorUpsertWithWhereUniqueWithoutFilmInput>
    createMany?: film_actorCreateManyFilmInputEnvelope
    set?: Enumerable<film_actorWhereUniqueInput>
    disconnect?: Enumerable<film_actorWhereUniqueInput>
    delete?: Enumerable<film_actorWhereUniqueInput>
    connect?: Enumerable<film_actorWhereUniqueInput>
    update?: Enumerable<film_actorUpdateWithWhereUniqueWithoutFilmInput>
    updateMany?: Enumerable<film_actorUpdateManyWithWhereWithoutFilmInput>
    deleteMany?: Enumerable<film_actorScalarWhereInput>
  }

  export type film_categoryUpdateManyWithoutFilmNestedInput = {
    create?: XOR<Enumerable<film_categoryCreateWithoutFilmInput>, Enumerable<film_categoryUncheckedCreateWithoutFilmInput>>
    connectOrCreate?: Enumerable<film_categoryCreateOrConnectWithoutFilmInput>
    upsert?: Enumerable<film_categoryUpsertWithWhereUniqueWithoutFilmInput>
    createMany?: film_categoryCreateManyFilmInputEnvelope
    set?: Enumerable<film_categoryWhereUniqueInput>
    disconnect?: Enumerable<film_categoryWhereUniqueInput>
    delete?: Enumerable<film_categoryWhereUniqueInput>
    connect?: Enumerable<film_categoryWhereUniqueInput>
    update?: Enumerable<film_categoryUpdateWithWhereUniqueWithoutFilmInput>
    updateMany?: Enumerable<film_categoryUpdateManyWithWhereWithoutFilmInput>
    deleteMany?: Enumerable<film_categoryScalarWhereInput>
  }

  export type inventoryUpdateManyWithoutFilmNestedInput = {
    create?: XOR<Enumerable<inventoryCreateWithoutFilmInput>, Enumerable<inventoryUncheckedCreateWithoutFilmInput>>
    connectOrCreate?: Enumerable<inventoryCreateOrConnectWithoutFilmInput>
    upsert?: Enumerable<inventoryUpsertWithWhereUniqueWithoutFilmInput>
    createMany?: inventoryCreateManyFilmInputEnvelope
    set?: Enumerable<inventoryWhereUniqueInput>
    disconnect?: Enumerable<inventoryWhereUniqueInput>
    delete?: Enumerable<inventoryWhereUniqueInput>
    connect?: Enumerable<inventoryWhereUniqueInput>
    update?: Enumerable<inventoryUpdateWithWhereUniqueWithoutFilmInput>
    updateMany?: Enumerable<inventoryUpdateManyWithWhereWithoutFilmInput>
    deleteMany?: Enumerable<inventoryScalarWhereInput>
  }

  export type film_actorUncheckedUpdateManyWithoutFilmNestedInput = {
    create?: XOR<Enumerable<film_actorCreateWithoutFilmInput>, Enumerable<film_actorUncheckedCreateWithoutFilmInput>>
    connectOrCreate?: Enumerable<film_actorCreateOrConnectWithoutFilmInput>
    upsert?: Enumerable<film_actorUpsertWithWhereUniqueWithoutFilmInput>
    createMany?: film_actorCreateManyFilmInputEnvelope
    set?: Enumerable<film_actorWhereUniqueInput>
    disconnect?: Enumerable<film_actorWhereUniqueInput>
    delete?: Enumerable<film_actorWhereUniqueInput>
    connect?: Enumerable<film_actorWhereUniqueInput>
    update?: Enumerable<film_actorUpdateWithWhereUniqueWithoutFilmInput>
    updateMany?: Enumerable<film_actorUpdateManyWithWhereWithoutFilmInput>
    deleteMany?: Enumerable<film_actorScalarWhereInput>
  }

  export type film_categoryUncheckedUpdateManyWithoutFilmNestedInput = {
    create?: XOR<Enumerable<film_categoryCreateWithoutFilmInput>, Enumerable<film_categoryUncheckedCreateWithoutFilmInput>>
    connectOrCreate?: Enumerable<film_categoryCreateOrConnectWithoutFilmInput>
    upsert?: Enumerable<film_categoryUpsertWithWhereUniqueWithoutFilmInput>
    createMany?: film_categoryCreateManyFilmInputEnvelope
    set?: Enumerable<film_categoryWhereUniqueInput>
    disconnect?: Enumerable<film_categoryWhereUniqueInput>
    delete?: Enumerable<film_categoryWhereUniqueInput>
    connect?: Enumerable<film_categoryWhereUniqueInput>
    update?: Enumerable<film_categoryUpdateWithWhereUniqueWithoutFilmInput>
    updateMany?: Enumerable<film_categoryUpdateManyWithWhereWithoutFilmInput>
    deleteMany?: Enumerable<film_categoryScalarWhereInput>
  }

  export type inventoryUncheckedUpdateManyWithoutFilmNestedInput = {
    create?: XOR<Enumerable<inventoryCreateWithoutFilmInput>, Enumerable<inventoryUncheckedCreateWithoutFilmInput>>
    connectOrCreate?: Enumerable<inventoryCreateOrConnectWithoutFilmInput>
    upsert?: Enumerable<inventoryUpsertWithWhereUniqueWithoutFilmInput>
    createMany?: inventoryCreateManyFilmInputEnvelope
    set?: Enumerable<inventoryWhereUniqueInput>
    disconnect?: Enumerable<inventoryWhereUniqueInput>
    delete?: Enumerable<inventoryWhereUniqueInput>
    connect?: Enumerable<inventoryWhereUniqueInput>
    update?: Enumerable<inventoryUpdateWithWhereUniqueWithoutFilmInput>
    updateMany?: Enumerable<inventoryUpdateManyWithWhereWithoutFilmInput>
    deleteMany?: Enumerable<inventoryScalarWhereInput>
  }

  export type actorCreateNestedOneWithoutFilm_actorInput = {
    create?: XOR<actorCreateWithoutFilm_actorInput, actorUncheckedCreateWithoutFilm_actorInput>
    connectOrCreate?: actorCreateOrConnectWithoutFilm_actorInput
    connect?: actorWhereUniqueInput
  }

  export type filmCreateNestedOneWithoutFilm_actorInput = {
    create?: XOR<filmCreateWithoutFilm_actorInput, filmUncheckedCreateWithoutFilm_actorInput>
    connectOrCreate?: filmCreateOrConnectWithoutFilm_actorInput
    connect?: filmWhereUniqueInput
  }

  export type actorUpdateOneRequiredWithoutFilm_actorNestedInput = {
    create?: XOR<actorCreateWithoutFilm_actorInput, actorUncheckedCreateWithoutFilm_actorInput>
    connectOrCreate?: actorCreateOrConnectWithoutFilm_actorInput
    upsert?: actorUpsertWithoutFilm_actorInput
    connect?: actorWhereUniqueInput
    update?: XOR<actorUpdateWithoutFilm_actorInput, actorUncheckedUpdateWithoutFilm_actorInput>
  }

  export type filmUpdateOneRequiredWithoutFilm_actorNestedInput = {
    create?: XOR<filmCreateWithoutFilm_actorInput, filmUncheckedCreateWithoutFilm_actorInput>
    connectOrCreate?: filmCreateOrConnectWithoutFilm_actorInput
    upsert?: filmUpsertWithoutFilm_actorInput
    connect?: filmWhereUniqueInput
    update?: XOR<filmUpdateWithoutFilm_actorInput, filmUncheckedUpdateWithoutFilm_actorInput>
  }

  export type categoryCreateNestedOneWithoutFilm_categoryInput = {
    create?: XOR<categoryCreateWithoutFilm_categoryInput, categoryUncheckedCreateWithoutFilm_categoryInput>
    connectOrCreate?: categoryCreateOrConnectWithoutFilm_categoryInput
    connect?: categoryWhereUniqueInput
  }

  export type filmCreateNestedOneWithoutFilm_categoryInput = {
    create?: XOR<filmCreateWithoutFilm_categoryInput, filmUncheckedCreateWithoutFilm_categoryInput>
    connectOrCreate?: filmCreateOrConnectWithoutFilm_categoryInput
    connect?: filmWhereUniqueInput
  }

  export type categoryUpdateOneRequiredWithoutFilm_categoryNestedInput = {
    create?: XOR<categoryCreateWithoutFilm_categoryInput, categoryUncheckedCreateWithoutFilm_categoryInput>
    connectOrCreate?: categoryCreateOrConnectWithoutFilm_categoryInput
    upsert?: categoryUpsertWithoutFilm_categoryInput
    connect?: categoryWhereUniqueInput
    update?: XOR<categoryUpdateWithoutFilm_categoryInput, categoryUncheckedUpdateWithoutFilm_categoryInput>
  }

  export type filmUpdateOneRequiredWithoutFilm_categoryNestedInput = {
    create?: XOR<filmCreateWithoutFilm_categoryInput, filmUncheckedCreateWithoutFilm_categoryInput>
    connectOrCreate?: filmCreateOrConnectWithoutFilm_categoryInput
    upsert?: filmUpsertWithoutFilm_categoryInput
    connect?: filmWhereUniqueInput
    update?: XOR<filmUpdateWithoutFilm_categoryInput, filmUncheckedUpdateWithoutFilm_categoryInput>
  }

  export type filmCreateNestedOneWithoutInventoryInput = {
    create?: XOR<filmCreateWithoutInventoryInput, filmUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: filmCreateOrConnectWithoutInventoryInput
    connect?: filmWhereUniqueInput
  }

  export type storeCreateNestedOneWithoutInventoryInput = {
    create?: XOR<storeCreateWithoutInventoryInput, storeUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: storeCreateOrConnectWithoutInventoryInput
    connect?: storeWhereUniqueInput
  }

  export type rentalCreateNestedManyWithoutInventoryInput = {
    create?: XOR<Enumerable<rentalCreateWithoutInventoryInput>, Enumerable<rentalUncheckedCreateWithoutInventoryInput>>
    connectOrCreate?: Enumerable<rentalCreateOrConnectWithoutInventoryInput>
    createMany?: rentalCreateManyInventoryInputEnvelope
    connect?: Enumerable<rentalWhereUniqueInput>
  }

  export type rentalUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: XOR<Enumerable<rentalCreateWithoutInventoryInput>, Enumerable<rentalUncheckedCreateWithoutInventoryInput>>
    connectOrCreate?: Enumerable<rentalCreateOrConnectWithoutInventoryInput>
    createMany?: rentalCreateManyInventoryInputEnvelope
    connect?: Enumerable<rentalWhereUniqueInput>
  }

  export type filmUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<filmCreateWithoutInventoryInput, filmUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: filmCreateOrConnectWithoutInventoryInput
    upsert?: filmUpsertWithoutInventoryInput
    connect?: filmWhereUniqueInput
    update?: XOR<filmUpdateWithoutInventoryInput, filmUncheckedUpdateWithoutInventoryInput>
  }

  export type storeUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<storeCreateWithoutInventoryInput, storeUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: storeCreateOrConnectWithoutInventoryInput
    upsert?: storeUpsertWithoutInventoryInput
    connect?: storeWhereUniqueInput
    update?: XOR<storeUpdateWithoutInventoryInput, storeUncheckedUpdateWithoutInventoryInput>
  }

  export type rentalUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<Enumerable<rentalCreateWithoutInventoryInput>, Enumerable<rentalUncheckedCreateWithoutInventoryInput>>
    connectOrCreate?: Enumerable<rentalCreateOrConnectWithoutInventoryInput>
    upsert?: Enumerable<rentalUpsertWithWhereUniqueWithoutInventoryInput>
    createMany?: rentalCreateManyInventoryInputEnvelope
    set?: Enumerable<rentalWhereUniqueInput>
    disconnect?: Enumerable<rentalWhereUniqueInput>
    delete?: Enumerable<rentalWhereUniqueInput>
    connect?: Enumerable<rentalWhereUniqueInput>
    update?: Enumerable<rentalUpdateWithWhereUniqueWithoutInventoryInput>
    updateMany?: Enumerable<rentalUpdateManyWithWhereWithoutInventoryInput>
    deleteMany?: Enumerable<rentalScalarWhereInput>
  }

  export type rentalUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<Enumerable<rentalCreateWithoutInventoryInput>, Enumerable<rentalUncheckedCreateWithoutInventoryInput>>
    connectOrCreate?: Enumerable<rentalCreateOrConnectWithoutInventoryInput>
    upsert?: Enumerable<rentalUpsertWithWhereUniqueWithoutInventoryInput>
    createMany?: rentalCreateManyInventoryInputEnvelope
    set?: Enumerable<rentalWhereUniqueInput>
    disconnect?: Enumerable<rentalWhereUniqueInput>
    delete?: Enumerable<rentalWhereUniqueInput>
    connect?: Enumerable<rentalWhereUniqueInput>
    update?: Enumerable<rentalUpdateWithWhereUniqueWithoutInventoryInput>
    updateMany?: Enumerable<rentalUpdateManyWithWhereWithoutInventoryInput>
    deleteMany?: Enumerable<rentalScalarWhereInput>
  }

  export type filmCreateNestedManyWithoutLanguage_film_language_idTolanguageInput = {
    create?: XOR<Enumerable<filmCreateWithoutLanguage_film_language_idTolanguageInput>, Enumerable<filmUncheckedCreateWithoutLanguage_film_language_idTolanguageInput>>
    connectOrCreate?: Enumerable<filmCreateOrConnectWithoutLanguage_film_language_idTolanguageInput>
    createMany?: filmCreateManyLanguage_film_language_idTolanguageInputEnvelope
    connect?: Enumerable<filmWhereUniqueInput>
  }

  export type filmCreateNestedManyWithoutLanguage_film_original_language_idTolanguageInput = {
    create?: XOR<Enumerable<filmCreateWithoutLanguage_film_original_language_idTolanguageInput>, Enumerable<filmUncheckedCreateWithoutLanguage_film_original_language_idTolanguageInput>>
    connectOrCreate?: Enumerable<filmCreateOrConnectWithoutLanguage_film_original_language_idTolanguageInput>
    createMany?: filmCreateManyLanguage_film_original_language_idTolanguageInputEnvelope
    connect?: Enumerable<filmWhereUniqueInput>
  }

  export type filmUncheckedCreateNestedManyWithoutLanguage_film_language_idTolanguageInput = {
    create?: XOR<Enumerable<filmCreateWithoutLanguage_film_language_idTolanguageInput>, Enumerable<filmUncheckedCreateWithoutLanguage_film_language_idTolanguageInput>>
    connectOrCreate?: Enumerable<filmCreateOrConnectWithoutLanguage_film_language_idTolanguageInput>
    createMany?: filmCreateManyLanguage_film_language_idTolanguageInputEnvelope
    connect?: Enumerable<filmWhereUniqueInput>
  }

  export type filmUncheckedCreateNestedManyWithoutLanguage_film_original_language_idTolanguageInput = {
    create?: XOR<Enumerable<filmCreateWithoutLanguage_film_original_language_idTolanguageInput>, Enumerable<filmUncheckedCreateWithoutLanguage_film_original_language_idTolanguageInput>>
    connectOrCreate?: Enumerable<filmCreateOrConnectWithoutLanguage_film_original_language_idTolanguageInput>
    createMany?: filmCreateManyLanguage_film_original_language_idTolanguageInputEnvelope
    connect?: Enumerable<filmWhereUniqueInput>
  }

  export type filmUpdateManyWithoutLanguage_film_language_idTolanguageNestedInput = {
    create?: XOR<Enumerable<filmCreateWithoutLanguage_film_language_idTolanguageInput>, Enumerable<filmUncheckedCreateWithoutLanguage_film_language_idTolanguageInput>>
    connectOrCreate?: Enumerable<filmCreateOrConnectWithoutLanguage_film_language_idTolanguageInput>
    upsert?: Enumerable<filmUpsertWithWhereUniqueWithoutLanguage_film_language_idTolanguageInput>
    createMany?: filmCreateManyLanguage_film_language_idTolanguageInputEnvelope
    set?: Enumerable<filmWhereUniqueInput>
    disconnect?: Enumerable<filmWhereUniqueInput>
    delete?: Enumerable<filmWhereUniqueInput>
    connect?: Enumerable<filmWhereUniqueInput>
    update?: Enumerable<filmUpdateWithWhereUniqueWithoutLanguage_film_language_idTolanguageInput>
    updateMany?: Enumerable<filmUpdateManyWithWhereWithoutLanguage_film_language_idTolanguageInput>
    deleteMany?: Enumerable<filmScalarWhereInput>
  }

  export type filmUpdateManyWithoutLanguage_film_original_language_idTolanguageNestedInput = {
    create?: XOR<Enumerable<filmCreateWithoutLanguage_film_original_language_idTolanguageInput>, Enumerable<filmUncheckedCreateWithoutLanguage_film_original_language_idTolanguageInput>>
    connectOrCreate?: Enumerable<filmCreateOrConnectWithoutLanguage_film_original_language_idTolanguageInput>
    upsert?: Enumerable<filmUpsertWithWhereUniqueWithoutLanguage_film_original_language_idTolanguageInput>
    createMany?: filmCreateManyLanguage_film_original_language_idTolanguageInputEnvelope
    set?: Enumerable<filmWhereUniqueInput>
    disconnect?: Enumerable<filmWhereUniqueInput>
    delete?: Enumerable<filmWhereUniqueInput>
    connect?: Enumerable<filmWhereUniqueInput>
    update?: Enumerable<filmUpdateWithWhereUniqueWithoutLanguage_film_original_language_idTolanguageInput>
    updateMany?: Enumerable<filmUpdateManyWithWhereWithoutLanguage_film_original_language_idTolanguageInput>
    deleteMany?: Enumerable<filmScalarWhereInput>
  }

  export type filmUncheckedUpdateManyWithoutLanguage_film_language_idTolanguageNestedInput = {
    create?: XOR<Enumerable<filmCreateWithoutLanguage_film_language_idTolanguageInput>, Enumerable<filmUncheckedCreateWithoutLanguage_film_language_idTolanguageInput>>
    connectOrCreate?: Enumerable<filmCreateOrConnectWithoutLanguage_film_language_idTolanguageInput>
    upsert?: Enumerable<filmUpsertWithWhereUniqueWithoutLanguage_film_language_idTolanguageInput>
    createMany?: filmCreateManyLanguage_film_language_idTolanguageInputEnvelope
    set?: Enumerable<filmWhereUniqueInput>
    disconnect?: Enumerable<filmWhereUniqueInput>
    delete?: Enumerable<filmWhereUniqueInput>
    connect?: Enumerable<filmWhereUniqueInput>
    update?: Enumerable<filmUpdateWithWhereUniqueWithoutLanguage_film_language_idTolanguageInput>
    updateMany?: Enumerable<filmUpdateManyWithWhereWithoutLanguage_film_language_idTolanguageInput>
    deleteMany?: Enumerable<filmScalarWhereInput>
  }

  export type filmUncheckedUpdateManyWithoutLanguage_film_original_language_idTolanguageNestedInput = {
    create?: XOR<Enumerable<filmCreateWithoutLanguage_film_original_language_idTolanguageInput>, Enumerable<filmUncheckedCreateWithoutLanguage_film_original_language_idTolanguageInput>>
    connectOrCreate?: Enumerable<filmCreateOrConnectWithoutLanguage_film_original_language_idTolanguageInput>
    upsert?: Enumerable<filmUpsertWithWhereUniqueWithoutLanguage_film_original_language_idTolanguageInput>
    createMany?: filmCreateManyLanguage_film_original_language_idTolanguageInputEnvelope
    set?: Enumerable<filmWhereUniqueInput>
    disconnect?: Enumerable<filmWhereUniqueInput>
    delete?: Enumerable<filmWhereUniqueInput>
    connect?: Enumerable<filmWhereUniqueInput>
    update?: Enumerable<filmUpdateWithWhereUniqueWithoutLanguage_film_original_language_idTolanguageInput>
    updateMany?: Enumerable<filmUpdateManyWithWhereWithoutLanguage_film_original_language_idTolanguageInput>
    deleteMany?: Enumerable<filmScalarWhereInput>
  }

  export type customerCreateNestedOneWithoutPaymentInput = {
    create?: XOR<customerCreateWithoutPaymentInput, customerUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: customerCreateOrConnectWithoutPaymentInput
    connect?: customerWhereUniqueInput
  }

  export type rentalCreateNestedOneWithoutPaymentInput = {
    create?: XOR<rentalCreateWithoutPaymentInput, rentalUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: rentalCreateOrConnectWithoutPaymentInput
    connect?: rentalWhereUniqueInput
  }

  export type staffCreateNestedOneWithoutPaymentInput = {
    create?: XOR<staffCreateWithoutPaymentInput, staffUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: staffCreateOrConnectWithoutPaymentInput
    connect?: staffWhereUniqueInput
  }

  export type customerUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<customerCreateWithoutPaymentInput, customerUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: customerCreateOrConnectWithoutPaymentInput
    upsert?: customerUpsertWithoutPaymentInput
    connect?: customerWhereUniqueInput
    update?: XOR<customerUpdateWithoutPaymentInput, customerUncheckedUpdateWithoutPaymentInput>
  }

  export type rentalUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<rentalCreateWithoutPaymentInput, rentalUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: rentalCreateOrConnectWithoutPaymentInput
    upsert?: rentalUpsertWithoutPaymentInput
    disconnect?: boolean
    delete?: boolean
    connect?: rentalWhereUniqueInput
    update?: XOR<rentalUpdateWithoutPaymentInput, rentalUncheckedUpdateWithoutPaymentInput>
  }

  export type staffUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<staffCreateWithoutPaymentInput, staffUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: staffCreateOrConnectWithoutPaymentInput
    upsert?: staffUpsertWithoutPaymentInput
    connect?: staffWhereUniqueInput
    update?: XOR<staffUpdateWithoutPaymentInput, staffUncheckedUpdateWithoutPaymentInput>
  }

  export type paymentCreateNestedManyWithoutRentalInput = {
    create?: XOR<Enumerable<paymentCreateWithoutRentalInput>, Enumerable<paymentUncheckedCreateWithoutRentalInput>>
    connectOrCreate?: Enumerable<paymentCreateOrConnectWithoutRentalInput>
    createMany?: paymentCreateManyRentalInputEnvelope
    connect?: Enumerable<paymentWhereUniqueInput>
  }

  export type customerCreateNestedOneWithoutRentalInput = {
    create?: XOR<customerCreateWithoutRentalInput, customerUncheckedCreateWithoutRentalInput>
    connectOrCreate?: customerCreateOrConnectWithoutRentalInput
    connect?: customerWhereUniqueInput
  }

  export type inventoryCreateNestedOneWithoutRentalInput = {
    create?: XOR<inventoryCreateWithoutRentalInput, inventoryUncheckedCreateWithoutRentalInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutRentalInput
    connect?: inventoryWhereUniqueInput
  }

  export type staffCreateNestedOneWithoutRentalInput = {
    create?: XOR<staffCreateWithoutRentalInput, staffUncheckedCreateWithoutRentalInput>
    connectOrCreate?: staffCreateOrConnectWithoutRentalInput
    connect?: staffWhereUniqueInput
  }

  export type paymentUncheckedCreateNestedManyWithoutRentalInput = {
    create?: XOR<Enumerable<paymentCreateWithoutRentalInput>, Enumerable<paymentUncheckedCreateWithoutRentalInput>>
    connectOrCreate?: Enumerable<paymentCreateOrConnectWithoutRentalInput>
    createMany?: paymentCreateManyRentalInputEnvelope
    connect?: Enumerable<paymentWhereUniqueInput>
  }

  export type paymentUpdateManyWithoutRentalNestedInput = {
    create?: XOR<Enumerable<paymentCreateWithoutRentalInput>, Enumerable<paymentUncheckedCreateWithoutRentalInput>>
    connectOrCreate?: Enumerable<paymentCreateOrConnectWithoutRentalInput>
    upsert?: Enumerable<paymentUpsertWithWhereUniqueWithoutRentalInput>
    createMany?: paymentCreateManyRentalInputEnvelope
    set?: Enumerable<paymentWhereUniqueInput>
    disconnect?: Enumerable<paymentWhereUniqueInput>
    delete?: Enumerable<paymentWhereUniqueInput>
    connect?: Enumerable<paymentWhereUniqueInput>
    update?: Enumerable<paymentUpdateWithWhereUniqueWithoutRentalInput>
    updateMany?: Enumerable<paymentUpdateManyWithWhereWithoutRentalInput>
    deleteMany?: Enumerable<paymentScalarWhereInput>
  }

  export type customerUpdateOneRequiredWithoutRentalNestedInput = {
    create?: XOR<customerCreateWithoutRentalInput, customerUncheckedCreateWithoutRentalInput>
    connectOrCreate?: customerCreateOrConnectWithoutRentalInput
    upsert?: customerUpsertWithoutRentalInput
    connect?: customerWhereUniqueInput
    update?: XOR<customerUpdateWithoutRentalInput, customerUncheckedUpdateWithoutRentalInput>
  }

  export type inventoryUpdateOneRequiredWithoutRentalNestedInput = {
    create?: XOR<inventoryCreateWithoutRentalInput, inventoryUncheckedCreateWithoutRentalInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutRentalInput
    upsert?: inventoryUpsertWithoutRentalInput
    connect?: inventoryWhereUniqueInput
    update?: XOR<inventoryUpdateWithoutRentalInput, inventoryUncheckedUpdateWithoutRentalInput>
  }

  export type staffUpdateOneRequiredWithoutRentalNestedInput = {
    create?: XOR<staffCreateWithoutRentalInput, staffUncheckedCreateWithoutRentalInput>
    connectOrCreate?: staffCreateOrConnectWithoutRentalInput
    upsert?: staffUpsertWithoutRentalInput
    connect?: staffWhereUniqueInput
    update?: XOR<staffUpdateWithoutRentalInput, staffUncheckedUpdateWithoutRentalInput>
  }

  export type paymentUncheckedUpdateManyWithoutRentalNestedInput = {
    create?: XOR<Enumerable<paymentCreateWithoutRentalInput>, Enumerable<paymentUncheckedCreateWithoutRentalInput>>
    connectOrCreate?: Enumerable<paymentCreateOrConnectWithoutRentalInput>
    upsert?: Enumerable<paymentUpsertWithWhereUniqueWithoutRentalInput>
    createMany?: paymentCreateManyRentalInputEnvelope
    set?: Enumerable<paymentWhereUniqueInput>
    disconnect?: Enumerable<paymentWhereUniqueInput>
    delete?: Enumerable<paymentWhereUniqueInput>
    connect?: Enumerable<paymentWhereUniqueInput>
    update?: Enumerable<paymentUpdateWithWhereUniqueWithoutRentalInput>
    updateMany?: Enumerable<paymentUpdateManyWithWhereWithoutRentalInput>
    deleteMany?: Enumerable<paymentScalarWhereInput>
  }

  export type paymentCreateNestedManyWithoutStaffInput = {
    create?: XOR<Enumerable<paymentCreateWithoutStaffInput>, Enumerable<paymentUncheckedCreateWithoutStaffInput>>
    connectOrCreate?: Enumerable<paymentCreateOrConnectWithoutStaffInput>
    createMany?: paymentCreateManyStaffInputEnvelope
    connect?: Enumerable<paymentWhereUniqueInput>
  }

  export type rentalCreateNestedManyWithoutStaffInput = {
    create?: XOR<Enumerable<rentalCreateWithoutStaffInput>, Enumerable<rentalUncheckedCreateWithoutStaffInput>>
    connectOrCreate?: Enumerable<rentalCreateOrConnectWithoutStaffInput>
    createMany?: rentalCreateManyStaffInputEnvelope
    connect?: Enumerable<rentalWhereUniqueInput>
  }

  export type addressCreateNestedOneWithoutStaffInput = {
    connect?: addressWhereUniqueInput
  }

  export type storeCreateNestedOneWithoutStaff_staff_store_idTostoreInput = {
    create?: XOR<storeCreateWithoutStaff_staff_store_idTostoreInput, storeUncheckedCreateWithoutStaff_staff_store_idTostoreInput>
    connectOrCreate?: storeCreateOrConnectWithoutStaff_staff_store_idTostoreInput
    connect?: storeWhereUniqueInput
  }

  export type storeCreateNestedOneWithoutStaff_store_manager_staff_idTostaffInput = {
    create?: XOR<storeCreateWithoutStaff_store_manager_staff_idTostaffInput, storeUncheckedCreateWithoutStaff_store_manager_staff_idTostaffInput>
    connectOrCreate?: storeCreateOrConnectWithoutStaff_store_manager_staff_idTostaffInput
    connect?: storeWhereUniqueInput
  }

  export type paymentUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<Enumerable<paymentCreateWithoutStaffInput>, Enumerable<paymentUncheckedCreateWithoutStaffInput>>
    connectOrCreate?: Enumerable<paymentCreateOrConnectWithoutStaffInput>
    createMany?: paymentCreateManyStaffInputEnvelope
    connect?: Enumerable<paymentWhereUniqueInput>
  }

  export type rentalUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<Enumerable<rentalCreateWithoutStaffInput>, Enumerable<rentalUncheckedCreateWithoutStaffInput>>
    connectOrCreate?: Enumerable<rentalCreateOrConnectWithoutStaffInput>
    createMany?: rentalCreateManyStaffInputEnvelope
    connect?: Enumerable<rentalWhereUniqueInput>
  }

  export type storeUncheckedCreateNestedOneWithoutStaff_store_manager_staff_idTostaffInput = {
    create?: XOR<storeCreateWithoutStaff_store_manager_staff_idTostaffInput, storeUncheckedCreateWithoutStaff_store_manager_staff_idTostaffInput>
    connectOrCreate?: storeCreateOrConnectWithoutStaff_store_manager_staff_idTostaffInput
    connect?: storeWhereUniqueInput
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type paymentUpdateManyWithoutStaffNestedInput = {
    create?: XOR<Enumerable<paymentCreateWithoutStaffInput>, Enumerable<paymentUncheckedCreateWithoutStaffInput>>
    connectOrCreate?: Enumerable<paymentCreateOrConnectWithoutStaffInput>
    upsert?: Enumerable<paymentUpsertWithWhereUniqueWithoutStaffInput>
    createMany?: paymentCreateManyStaffInputEnvelope
    set?: Enumerable<paymentWhereUniqueInput>
    disconnect?: Enumerable<paymentWhereUniqueInput>
    delete?: Enumerable<paymentWhereUniqueInput>
    connect?: Enumerable<paymentWhereUniqueInput>
    update?: Enumerable<paymentUpdateWithWhereUniqueWithoutStaffInput>
    updateMany?: Enumerable<paymentUpdateManyWithWhereWithoutStaffInput>
    deleteMany?: Enumerable<paymentScalarWhereInput>
  }

  export type rentalUpdateManyWithoutStaffNestedInput = {
    create?: XOR<Enumerable<rentalCreateWithoutStaffInput>, Enumerable<rentalUncheckedCreateWithoutStaffInput>>
    connectOrCreate?: Enumerable<rentalCreateOrConnectWithoutStaffInput>
    upsert?: Enumerable<rentalUpsertWithWhereUniqueWithoutStaffInput>
    createMany?: rentalCreateManyStaffInputEnvelope
    set?: Enumerable<rentalWhereUniqueInput>
    disconnect?: Enumerable<rentalWhereUniqueInput>
    delete?: Enumerable<rentalWhereUniqueInput>
    connect?: Enumerable<rentalWhereUniqueInput>
    update?: Enumerable<rentalUpdateWithWhereUniqueWithoutStaffInput>
    updateMany?: Enumerable<rentalUpdateManyWithWhereWithoutStaffInput>
    deleteMany?: Enumerable<rentalScalarWhereInput>
  }

  export type addressUpdateOneRequiredWithoutStaffNestedInput = {
    connect?: addressWhereUniqueInput
    update?: XOR<addressUpdateWithoutStaffInput, addressUncheckedUpdateWithoutStaffInput>
  }

  export type storeUpdateOneRequiredWithoutStaff_staff_store_idTostoreNestedInput = {
    create?: XOR<storeCreateWithoutStaff_staff_store_idTostoreInput, storeUncheckedCreateWithoutStaff_staff_store_idTostoreInput>
    connectOrCreate?: storeCreateOrConnectWithoutStaff_staff_store_idTostoreInput
    upsert?: storeUpsertWithoutStaff_staff_store_idTostoreInput
    connect?: storeWhereUniqueInput
    update?: XOR<storeUpdateWithoutStaff_staff_store_idTostoreInput, storeUncheckedUpdateWithoutStaff_staff_store_idTostoreInput>
  }

  export type storeUpdateOneWithoutStaff_store_manager_staff_idTostaffNestedInput = {
    create?: XOR<storeCreateWithoutStaff_store_manager_staff_idTostaffInput, storeUncheckedCreateWithoutStaff_store_manager_staff_idTostaffInput>
    connectOrCreate?: storeCreateOrConnectWithoutStaff_store_manager_staff_idTostaffInput
    upsert?: storeUpsertWithoutStaff_store_manager_staff_idTostaffInput
    disconnect?: boolean
    delete?: boolean
    connect?: storeWhereUniqueInput
    update?: XOR<storeUpdateWithoutStaff_store_manager_staff_idTostaffInput, storeUncheckedUpdateWithoutStaff_store_manager_staff_idTostaffInput>
  }

  export type paymentUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<Enumerable<paymentCreateWithoutStaffInput>, Enumerable<paymentUncheckedCreateWithoutStaffInput>>
    connectOrCreate?: Enumerable<paymentCreateOrConnectWithoutStaffInput>
    upsert?: Enumerable<paymentUpsertWithWhereUniqueWithoutStaffInput>
    createMany?: paymentCreateManyStaffInputEnvelope
    set?: Enumerable<paymentWhereUniqueInput>
    disconnect?: Enumerable<paymentWhereUniqueInput>
    delete?: Enumerable<paymentWhereUniqueInput>
    connect?: Enumerable<paymentWhereUniqueInput>
    update?: Enumerable<paymentUpdateWithWhereUniqueWithoutStaffInput>
    updateMany?: Enumerable<paymentUpdateManyWithWhereWithoutStaffInput>
    deleteMany?: Enumerable<paymentScalarWhereInput>
  }

  export type rentalUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<Enumerable<rentalCreateWithoutStaffInput>, Enumerable<rentalUncheckedCreateWithoutStaffInput>>
    connectOrCreate?: Enumerable<rentalCreateOrConnectWithoutStaffInput>
    upsert?: Enumerable<rentalUpsertWithWhereUniqueWithoutStaffInput>
    createMany?: rentalCreateManyStaffInputEnvelope
    set?: Enumerable<rentalWhereUniqueInput>
    disconnect?: Enumerable<rentalWhereUniqueInput>
    delete?: Enumerable<rentalWhereUniqueInput>
    connect?: Enumerable<rentalWhereUniqueInput>
    update?: Enumerable<rentalUpdateWithWhereUniqueWithoutStaffInput>
    updateMany?: Enumerable<rentalUpdateManyWithWhereWithoutStaffInput>
    deleteMany?: Enumerable<rentalScalarWhereInput>
  }

  export type storeUncheckedUpdateOneWithoutStaff_store_manager_staff_idTostaffNestedInput = {
    create?: XOR<storeCreateWithoutStaff_store_manager_staff_idTostaffInput, storeUncheckedCreateWithoutStaff_store_manager_staff_idTostaffInput>
    connectOrCreate?: storeCreateOrConnectWithoutStaff_store_manager_staff_idTostaffInput
    upsert?: storeUpsertWithoutStaff_store_manager_staff_idTostaffInput
    disconnect?: boolean
    delete?: boolean
    connect?: storeWhereUniqueInput
    update?: XOR<storeUpdateWithoutStaff_store_manager_staff_idTostaffInput, storeUncheckedUpdateWithoutStaff_store_manager_staff_idTostaffInput>
  }

  export type customerCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<customerCreateWithoutStoreInput>, Enumerable<customerUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<customerCreateOrConnectWithoutStoreInput>
    createMany?: customerCreateManyStoreInputEnvelope
    connect?: Enumerable<customerWhereUniqueInput>
  }

  export type inventoryCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<inventoryCreateWithoutStoreInput>, Enumerable<inventoryUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<inventoryCreateOrConnectWithoutStoreInput>
    createMany?: inventoryCreateManyStoreInputEnvelope
    connect?: Enumerable<inventoryWhereUniqueInput>
  }

  export type staffCreateNestedManyWithoutStore_staff_store_idTostoreInput = {
    create?: XOR<Enumerable<staffCreateWithoutStore_staff_store_idTostoreInput>, Enumerable<staffUncheckedCreateWithoutStore_staff_store_idTostoreInput>>
    connectOrCreate?: Enumerable<staffCreateOrConnectWithoutStore_staff_store_idTostoreInput>
    createMany?: staffCreateManyStore_staff_store_idTostoreInputEnvelope
    connect?: Enumerable<staffWhereUniqueInput>
  }

  export type addressCreateNestedOneWithoutStoreInput = {
    connect?: addressWhereUniqueInput
  }

  export type staffCreateNestedOneWithoutStore_store_manager_staff_idTostaffInput = {
    create?: XOR<staffCreateWithoutStore_store_manager_staff_idTostaffInput, staffUncheckedCreateWithoutStore_store_manager_staff_idTostaffInput>
    connectOrCreate?: staffCreateOrConnectWithoutStore_store_manager_staff_idTostaffInput
    connect?: staffWhereUniqueInput
  }

  export type customerUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<customerCreateWithoutStoreInput>, Enumerable<customerUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<customerCreateOrConnectWithoutStoreInput>
    createMany?: customerCreateManyStoreInputEnvelope
    connect?: Enumerable<customerWhereUniqueInput>
  }

  export type inventoryUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<inventoryCreateWithoutStoreInput>, Enumerable<inventoryUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<inventoryCreateOrConnectWithoutStoreInput>
    createMany?: inventoryCreateManyStoreInputEnvelope
    connect?: Enumerable<inventoryWhereUniqueInput>
  }

  export type staffUncheckedCreateNestedManyWithoutStore_staff_store_idTostoreInput = {
    create?: XOR<Enumerable<staffCreateWithoutStore_staff_store_idTostoreInput>, Enumerable<staffUncheckedCreateWithoutStore_staff_store_idTostoreInput>>
    connectOrCreate?: Enumerable<staffCreateOrConnectWithoutStore_staff_store_idTostoreInput>
    createMany?: staffCreateManyStore_staff_store_idTostoreInputEnvelope
    connect?: Enumerable<staffWhereUniqueInput>
  }

  export type customerUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<customerCreateWithoutStoreInput>, Enumerable<customerUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<customerCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<customerUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: customerCreateManyStoreInputEnvelope
    set?: Enumerable<customerWhereUniqueInput>
    disconnect?: Enumerable<customerWhereUniqueInput>
    delete?: Enumerable<customerWhereUniqueInput>
    connect?: Enumerable<customerWhereUniqueInput>
    update?: Enumerable<customerUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<customerUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<customerScalarWhereInput>
  }

  export type inventoryUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<inventoryCreateWithoutStoreInput>, Enumerable<inventoryUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<inventoryCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<inventoryUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: inventoryCreateManyStoreInputEnvelope
    set?: Enumerable<inventoryWhereUniqueInput>
    disconnect?: Enumerable<inventoryWhereUniqueInput>
    delete?: Enumerable<inventoryWhereUniqueInput>
    connect?: Enumerable<inventoryWhereUniqueInput>
    update?: Enumerable<inventoryUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<inventoryUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<inventoryScalarWhereInput>
  }

  export type staffUpdateManyWithoutStore_staff_store_idTostoreNestedInput = {
    create?: XOR<Enumerable<staffCreateWithoutStore_staff_store_idTostoreInput>, Enumerable<staffUncheckedCreateWithoutStore_staff_store_idTostoreInput>>
    connectOrCreate?: Enumerable<staffCreateOrConnectWithoutStore_staff_store_idTostoreInput>
    upsert?: Enumerable<staffUpsertWithWhereUniqueWithoutStore_staff_store_idTostoreInput>
    createMany?: staffCreateManyStore_staff_store_idTostoreInputEnvelope
    set?: Enumerable<staffWhereUniqueInput>
    disconnect?: Enumerable<staffWhereUniqueInput>
    delete?: Enumerable<staffWhereUniqueInput>
    connect?: Enumerable<staffWhereUniqueInput>
    update?: Enumerable<staffUpdateWithWhereUniqueWithoutStore_staff_store_idTostoreInput>
    updateMany?: Enumerable<staffUpdateManyWithWhereWithoutStore_staff_store_idTostoreInput>
    deleteMany?: Enumerable<staffScalarWhereInput>
  }

  export type addressUpdateOneRequiredWithoutStoreNestedInput = {
    connect?: addressWhereUniqueInput
    update?: XOR<addressUpdateWithoutStoreInput, addressUncheckedUpdateWithoutStoreInput>
  }

  export type staffUpdateOneRequiredWithoutStore_store_manager_staff_idTostaffNestedInput = {
    create?: XOR<staffCreateWithoutStore_store_manager_staff_idTostaffInput, staffUncheckedCreateWithoutStore_store_manager_staff_idTostaffInput>
    connectOrCreate?: staffCreateOrConnectWithoutStore_store_manager_staff_idTostaffInput
    upsert?: staffUpsertWithoutStore_store_manager_staff_idTostaffInput
    connect?: staffWhereUniqueInput
    update?: XOR<staffUpdateWithoutStore_store_manager_staff_idTostaffInput, staffUncheckedUpdateWithoutStore_store_manager_staff_idTostaffInput>
  }

  export type customerUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<customerCreateWithoutStoreInput>, Enumerable<customerUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<customerCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<customerUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: customerCreateManyStoreInputEnvelope
    set?: Enumerable<customerWhereUniqueInput>
    disconnect?: Enumerable<customerWhereUniqueInput>
    delete?: Enumerable<customerWhereUniqueInput>
    connect?: Enumerable<customerWhereUniqueInput>
    update?: Enumerable<customerUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<customerUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<customerScalarWhereInput>
  }

  export type inventoryUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<inventoryCreateWithoutStoreInput>, Enumerable<inventoryUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<inventoryCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<inventoryUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: inventoryCreateManyStoreInputEnvelope
    set?: Enumerable<inventoryWhereUniqueInput>
    disconnect?: Enumerable<inventoryWhereUniqueInput>
    delete?: Enumerable<inventoryWhereUniqueInput>
    connect?: Enumerable<inventoryWhereUniqueInput>
    update?: Enumerable<inventoryUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<inventoryUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<inventoryScalarWhereInput>
  }

  export type staffUncheckedUpdateManyWithoutStore_staff_store_idTostoreNestedInput = {
    create?: XOR<Enumerable<staffCreateWithoutStore_staff_store_idTostoreInput>, Enumerable<staffUncheckedCreateWithoutStore_staff_store_idTostoreInput>>
    connectOrCreate?: Enumerable<staffCreateOrConnectWithoutStore_staff_store_idTostoreInput>
    upsert?: Enumerable<staffUpsertWithWhereUniqueWithoutStore_staff_store_idTostoreInput>
    createMany?: staffCreateManyStore_staff_store_idTostoreInputEnvelope
    set?: Enumerable<staffWhereUniqueInput>
    disconnect?: Enumerable<staffWhereUniqueInput>
    delete?: Enumerable<staffWhereUniqueInput>
    connect?: Enumerable<staffWhereUniqueInput>
    update?: Enumerable<staffUpdateWithWhereUniqueWithoutStore_staff_store_idTostoreInput>
    updateMany?: Enumerable<staffUpdateManyWithWhereWithoutStore_staff_store_idTostoreInput>
    deleteMany?: Enumerable<staffScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedDecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumfilm_ratingNullableFilter = {
    equals?: film_rating | null
    in?: Enumerable<film_rating> | null
    notIn?: Enumerable<film_rating> | null
    not?: NestedEnumfilm_ratingNullableFilter | film_rating | null
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type NestedEnumfilm_ratingNullableWithAggregatesFilter = {
    equals?: film_rating | null
    in?: Enumerable<film_rating> | null
    notIn?: Enumerable<film_rating> | null
    not?: NestedEnumfilm_ratingNullableWithAggregatesFilter | film_rating | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumfilm_ratingNullableFilter
    _max?: NestedEnumfilm_ratingNullableFilter
  }

  export type NestedBytesNullableFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableFilter | Buffer | null
  }

  export type NestedBytesNullableWithAggregatesFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableWithAggregatesFilter | Buffer | null
    _count?: NestedIntNullableFilter
    _min?: NestedBytesNullableFilter
    _max?: NestedBytesNullableFilter
  }

  export type film_actorCreateWithoutActorInput = {
    last_update?: Date | string
    film: filmCreateNestedOneWithoutFilm_actorInput
  }

  export type film_actorUncheckedCreateWithoutActorInput = {
    film_id: number
    last_update?: Date | string
  }

  export type film_actorCreateOrConnectWithoutActorInput = {
    where: film_actorWhereUniqueInput
    create: XOR<film_actorCreateWithoutActorInput, film_actorUncheckedCreateWithoutActorInput>
  }

  export type film_actorCreateManyActorInputEnvelope = {
    data: Enumerable<film_actorCreateManyActorInput>
    skipDuplicates?: boolean
  }

  export type film_actorUpsertWithWhereUniqueWithoutActorInput = {
    where: film_actorWhereUniqueInput
    update: XOR<film_actorUpdateWithoutActorInput, film_actorUncheckedUpdateWithoutActorInput>
    create: XOR<film_actorCreateWithoutActorInput, film_actorUncheckedCreateWithoutActorInput>
  }

  export type film_actorUpdateWithWhereUniqueWithoutActorInput = {
    where: film_actorWhereUniqueInput
    data: XOR<film_actorUpdateWithoutActorInput, film_actorUncheckedUpdateWithoutActorInput>
  }

  export type film_actorUpdateManyWithWhereWithoutActorInput = {
    where: film_actorScalarWhereInput
    data: XOR<film_actorUpdateManyMutationInput, film_actorUncheckedUpdateManyWithoutFilm_actorInput>
  }

  export type film_actorScalarWhereInput = {
    AND?: Enumerable<film_actorScalarWhereInput>
    OR?: Enumerable<film_actorScalarWhereInput>
    NOT?: Enumerable<film_actorScalarWhereInput>
    actor_id?: IntFilter | number
    film_id?: IntFilter | number
    last_update?: DateTimeFilter | Date | string
  }

  export type cityCreateWithoutAddressInput = {
    city: string
    last_update?: Date | string
    country: countryCreateNestedOneWithoutCityInput
  }

  export type cityUncheckedCreateWithoutAddressInput = {
    city_id?: number
    city: string
    country_id: number
    last_update?: Date | string
  }

  export type cityCreateOrConnectWithoutAddressInput = {
    where: cityWhereUniqueInput
    create: XOR<cityCreateWithoutAddressInput, cityUncheckedCreateWithoutAddressInput>
  }

  export type cityUpsertWithoutAddressInput = {
    update: XOR<cityUpdateWithoutAddressInput, cityUncheckedUpdateWithoutAddressInput>
    create: XOR<cityCreateWithoutAddressInput, cityUncheckedCreateWithoutAddressInput>
  }

  export type cityUpdateWithoutAddressInput = {
    city?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: countryUpdateOneRequiredWithoutCityNestedInput
  }

  export type cityUncheckedUpdateWithoutAddressInput = {
    city_id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    country_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customerCreateWithoutAddressInput = {
    first_name: string
    last_name: string
    email?: string | null
    active?: boolean
    create_date: Date | string
    last_update?: Date | string | null
    store: storeCreateNestedOneWithoutCustomerInput
    payment?: paymentCreateNestedManyWithoutCustomerInput
    rental?: rentalCreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateWithoutAddressInput = {
    customer_id?: number
    store_id: number
    first_name: string
    last_name: string
    email?: string | null
    active?: boolean
    create_date: Date | string
    last_update?: Date | string | null
    payment?: paymentUncheckedCreateNestedManyWithoutCustomerInput
    rental?: rentalUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerCreateOrConnectWithoutAddressInput = {
    where: customerWhereUniqueInput
    create: XOR<customerCreateWithoutAddressInput, customerUncheckedCreateWithoutAddressInput>
  }

  export type customerUpsertWithWhereUniqueWithoutAddressInput = {
    where: customerWhereUniqueInput
    update: XOR<customerUpdateWithoutAddressInput, customerUncheckedUpdateWithoutAddressInput>
    create: XOR<customerCreateWithoutAddressInput, customerUncheckedCreateWithoutAddressInput>
  }

  export type customerCreateManyAddressInputEnvelope = {
    data: Enumerable<customerCreateManyAddressInput>
    skipDuplicates?: boolean
  }

  export type customerUpdateWithWhereUniqueWithoutAddressInput = {
    where: customerWhereUniqueInput
    data: XOR<customerUpdateWithoutAddressInput, customerUncheckedUpdateWithoutAddressInput>
  }

  export type customerUpdateManyWithWhereWithoutAddressInput = {
    where: customerScalarWhereInput
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyWithoutCustomerInput>
  }

  export type customerScalarWhereInput = {
    AND?: Enumerable<customerScalarWhereInput>
    OR?: Enumerable<customerScalarWhereInput>
    NOT?: Enumerable<customerScalarWhereInput>
    customer_id?: IntFilter | number
    store_id?: IntFilter | number
    first_name?: StringFilter | string
    last_name?: StringFilter | string
    email?: StringNullableFilter | string | null
    address_id?: IntFilter | number
    active?: BoolFilter | boolean
    create_date?: DateTimeFilter | Date | string
    last_update?: DateTimeNullableFilter | Date | string | null
  }

  export type staffCreateWithoutAddressInput = {
    first_name: string
    last_name: string
    picture?: Buffer | null
    email?: string | null
    active?: boolean
    username: string
    password?: string | null
    last_update?: Date | string
    payment?: paymentCreateNestedManyWithoutStaffInput
    rental?: rentalCreateNestedManyWithoutStaffInput
    store_staff_store_idTostore: storeCreateNestedOneWithoutStaff_staff_store_idTostoreInput
    store_store_manager_staff_idTostaff?: storeCreateNestedOneWithoutStaff_store_manager_staff_idTostaffInput
  }

  export type staffUncheckedCreateWithoutAddressInput = {
    staff_id?: number
    first_name: string
    last_name: string
    picture?: Buffer | null
    email?: string | null
    store_id: number
    active?: boolean
    username: string
    password?: string | null
    last_update?: Date | string
    payment?: paymentUncheckedCreateNestedManyWithoutStaffInput
    rental?: rentalUncheckedCreateNestedManyWithoutStaffInput
    store_store_manager_staff_idTostaff?: storeUncheckedCreateNestedOneWithoutStaff_store_manager_staff_idTostaffInput
  }

  export type staffCreateOrConnectWithoutAddressInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutAddressInput, staffUncheckedCreateWithoutAddressInput>
  }

  export type staffUpsertWithWhereUniqueWithoutAddressInput = {
    where: staffWhereUniqueInput
    update: XOR<staffUpdateWithoutAddressInput, staffUncheckedUpdateWithoutAddressInput>
    create: XOR<staffCreateWithoutAddressInput, staffUncheckedCreateWithoutAddressInput>
  }

  export type staffCreateManyAddressInputEnvelope = {
    data: Enumerable<staffCreateManyAddressInput>
    skipDuplicates?: boolean
  }

  export type staffUpdateWithWhereUniqueWithoutAddressInput = {
    where: staffWhereUniqueInput
    data: XOR<staffUpdateWithoutAddressInput, staffUncheckedUpdateWithoutAddressInput>
  }

  export type staffUpdateManyWithWhereWithoutAddressInput = {
    where: staffScalarWhereInput
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyWithoutStaffInput>
  }

  export type staffScalarWhereInput = {
    AND?: Enumerable<staffScalarWhereInput>
    OR?: Enumerable<staffScalarWhereInput>
    NOT?: Enumerable<staffScalarWhereInput>
    staff_id?: IntFilter | number
    first_name?: StringFilter | string
    last_name?: StringFilter | string
    address_id?: IntFilter | number
    picture?: BytesNullableFilter | Buffer | null
    email?: StringNullableFilter | string | null
    store_id?: IntFilter | number
    active?: BoolFilter | boolean
    username?: StringFilter | string
    password?: StringNullableFilter | string | null
    last_update?: DateTimeFilter | Date | string
  }

  export type storeCreateWithoutAddressInput = {
    last_update?: Date | string
    customer?: customerCreateNestedManyWithoutStoreInput
    inventory?: inventoryCreateNestedManyWithoutStoreInput
    staff_staff_store_idTostore?: staffCreateNestedManyWithoutStore_staff_store_idTostoreInput
    staff_store_manager_staff_idTostaff: staffCreateNestedOneWithoutStore_store_manager_staff_idTostaffInput
  }

  export type storeUncheckedCreateWithoutAddressInput = {
    store_id?: number
    manager_staff_id: number
    last_update?: Date | string
    customer?: customerUncheckedCreateNestedManyWithoutStoreInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutStoreInput
    staff_staff_store_idTostore?: staffUncheckedCreateNestedManyWithoutStore_staff_store_idTostoreInput
  }

  export type storeCreateOrConnectWithoutAddressInput = {
    where: storeWhereUniqueInput
    create: XOR<storeCreateWithoutAddressInput, storeUncheckedCreateWithoutAddressInput>
  }

  export type storeUpsertWithWhereUniqueWithoutAddressInput = {
    where: storeWhereUniqueInput
    update: XOR<storeUpdateWithoutAddressInput, storeUncheckedUpdateWithoutAddressInput>
    create: XOR<storeCreateWithoutAddressInput, storeUncheckedCreateWithoutAddressInput>
  }

  export type storeCreateManyAddressInputEnvelope = {
    data: Enumerable<storeCreateManyAddressInput>
    skipDuplicates?: boolean
  }

  export type storeUpdateWithWhereUniqueWithoutAddressInput = {
    where: storeWhereUniqueInput
    data: XOR<storeUpdateWithoutAddressInput, storeUncheckedUpdateWithoutAddressInput>
  }

  export type storeUpdateManyWithWhereWithoutAddressInput = {
    where: storeScalarWhereInput
    data: XOR<storeUpdateManyMutationInput, storeUncheckedUpdateManyWithoutStoreInput>
  }

  export type storeScalarWhereInput = {
    AND?: Enumerable<storeScalarWhereInput>
    OR?: Enumerable<storeScalarWhereInput>
    NOT?: Enumerable<storeScalarWhereInput>
    store_id?: IntFilter | number
    manager_staff_id?: IntFilter | number
    address_id?: IntFilter | number
    last_update?: DateTimeFilter | Date | string
  }

  export type film_categoryCreateWithoutCategoryInput = {
    last_update?: Date | string
    film: filmCreateNestedOneWithoutFilm_categoryInput
  }

  export type film_categoryUncheckedCreateWithoutCategoryInput = {
    film_id: number
    last_update?: Date | string
  }

  export type film_categoryCreateOrConnectWithoutCategoryInput = {
    where: film_categoryWhereUniqueInput
    create: XOR<film_categoryCreateWithoutCategoryInput, film_categoryUncheckedCreateWithoutCategoryInput>
  }

  export type film_categoryCreateManyCategoryInputEnvelope = {
    data: Enumerable<film_categoryCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type film_categoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: film_categoryWhereUniqueInput
    update: XOR<film_categoryUpdateWithoutCategoryInput, film_categoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<film_categoryCreateWithoutCategoryInput, film_categoryUncheckedCreateWithoutCategoryInput>
  }

  export type film_categoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: film_categoryWhereUniqueInput
    data: XOR<film_categoryUpdateWithoutCategoryInput, film_categoryUncheckedUpdateWithoutCategoryInput>
  }

  export type film_categoryUpdateManyWithWhereWithoutCategoryInput = {
    where: film_categoryScalarWhereInput
    data: XOR<film_categoryUpdateManyMutationInput, film_categoryUncheckedUpdateManyWithoutFilm_categoryInput>
  }

  export type film_categoryScalarWhereInput = {
    AND?: Enumerable<film_categoryScalarWhereInput>
    OR?: Enumerable<film_categoryScalarWhereInput>
    NOT?: Enumerable<film_categoryScalarWhereInput>
    film_id?: IntFilter | number
    category_id?: IntFilter | number
    last_update?: DateTimeFilter | Date | string
  }

  export type countryCreateWithoutCityInput = {
    country: string
    last_update?: Date | string
  }

  export type countryUncheckedCreateWithoutCityInput = {
    country_id?: number
    country: string
    last_update?: Date | string
  }

  export type countryCreateOrConnectWithoutCityInput = {
    where: countryWhereUniqueInput
    create: XOR<countryCreateWithoutCityInput, countryUncheckedCreateWithoutCityInput>
  }

  export type addressUpdateWithWhereUniqueWithoutCityInput = {
    where: addressWhereUniqueInput
    data: XOR<addressUpdateWithoutCityInput, addressUncheckedUpdateWithoutCityInput>
  }

  export type addressUpdateManyWithWhereWithoutCityInput = {
    where: addressScalarWhereInput
    data: XOR<addressUpdateManyMutationInput, addressUncheckedUpdateManyWithoutAddressInput>
  }

  export type addressScalarWhereInput = {
    AND?: Enumerable<addressScalarWhereInput>
    OR?: Enumerable<addressScalarWhereInput>
    NOT?: Enumerable<addressScalarWhereInput>
    address_id?: IntFilter | number
    address?: StringFilter | string
    address2?: StringNullableFilter | string | null
    district?: StringFilter | string
    city_id?: IntFilter | number
    postal_code?: StringNullableFilter | string | null
    phone?: StringFilter | string
    last_update?: DateTimeFilter | Date | string
  }

  export type countryUpsertWithoutCityInput = {
    update: XOR<countryUpdateWithoutCityInput, countryUncheckedUpdateWithoutCityInput>
    create: XOR<countryCreateWithoutCityInput, countryUncheckedCreateWithoutCityInput>
  }

  export type countryUpdateWithoutCityInput = {
    country?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type countryUncheckedUpdateWithoutCityInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cityCreateWithoutCountryInput = {
    city: string
    last_update?: Date | string
    address?: addressCreateNestedManyWithoutCityInput
  }

  export type cityUncheckedCreateWithoutCountryInput = {
    city_id?: number
    city: string
    last_update?: Date | string
    address?: addressUncheckedCreateNestedManyWithoutCityInput
  }

  export type cityCreateOrConnectWithoutCountryInput = {
    where: cityWhereUniqueInput
    create: XOR<cityCreateWithoutCountryInput, cityUncheckedCreateWithoutCountryInput>
  }

  export type cityCreateManyCountryInputEnvelope = {
    data: Enumerable<cityCreateManyCountryInput>
    skipDuplicates?: boolean
  }

  export type cityUpsertWithWhereUniqueWithoutCountryInput = {
    where: cityWhereUniqueInput
    update: XOR<cityUpdateWithoutCountryInput, cityUncheckedUpdateWithoutCountryInput>
    create: XOR<cityCreateWithoutCountryInput, cityUncheckedCreateWithoutCountryInput>
  }

  export type cityUpdateWithWhereUniqueWithoutCountryInput = {
    where: cityWhereUniqueInput
    data: XOR<cityUpdateWithoutCountryInput, cityUncheckedUpdateWithoutCountryInput>
  }

  export type cityUpdateManyWithWhereWithoutCountryInput = {
    where: cityScalarWhereInput
    data: XOR<cityUpdateManyMutationInput, cityUncheckedUpdateManyWithoutCityInput>
  }

  export type cityScalarWhereInput = {
    AND?: Enumerable<cityScalarWhereInput>
    OR?: Enumerable<cityScalarWhereInput>
    NOT?: Enumerable<cityScalarWhereInput>
    city_id?: IntFilter | number
    city?: StringFilter | string
    country_id?: IntFilter | number
    last_update?: DateTimeFilter | Date | string
  }

  export type storeCreateWithoutCustomerInput = {
    last_update?: Date | string
    inventory?: inventoryCreateNestedManyWithoutStoreInput
    staff_staff_store_idTostore?: staffCreateNestedManyWithoutStore_staff_store_idTostoreInput
    address: addressCreateNestedOneWithoutStoreInput
    staff_store_manager_staff_idTostaff: staffCreateNestedOneWithoutStore_store_manager_staff_idTostaffInput
  }

  export type storeUncheckedCreateWithoutCustomerInput = {
    store_id?: number
    manager_staff_id: number
    address_id: number
    last_update?: Date | string
    inventory?: inventoryUncheckedCreateNestedManyWithoutStoreInput
    staff_staff_store_idTostore?: staffUncheckedCreateNestedManyWithoutStore_staff_store_idTostoreInput
  }

  export type storeCreateOrConnectWithoutCustomerInput = {
    where: storeWhereUniqueInput
    create: XOR<storeCreateWithoutCustomerInput, storeUncheckedCreateWithoutCustomerInput>
  }

  export type paymentCreateWithoutCustomerInput = {
    amount: Decimal | DecimalJsLike | number | string
    payment_date: Date | string
    last_update?: Date | string | null
    rental?: rentalCreateNestedOneWithoutPaymentInput
    staff: staffCreateNestedOneWithoutPaymentInput
  }

  export type paymentUncheckedCreateWithoutCustomerInput = {
    payment_id?: number
    staff_id: number
    rental_id?: number | null
    amount: Decimal | DecimalJsLike | number | string
    payment_date: Date | string
    last_update?: Date | string | null
  }

  export type paymentCreateOrConnectWithoutCustomerInput = {
    where: paymentWhereUniqueInput
    create: XOR<paymentCreateWithoutCustomerInput, paymentUncheckedCreateWithoutCustomerInput>
  }

  export type paymentCreateManyCustomerInputEnvelope = {
    data: Enumerable<paymentCreateManyCustomerInput>
    skipDuplicates?: boolean
  }

  export type rentalCreateWithoutCustomerInput = {
    rental_date: Date | string
    return_date?: Date | string | null
    last_update?: Date | string
    payment?: paymentCreateNestedManyWithoutRentalInput
    inventory: inventoryCreateNestedOneWithoutRentalInput
    staff: staffCreateNestedOneWithoutRentalInput
  }

  export type rentalUncheckedCreateWithoutCustomerInput = {
    rental_id?: number
    rental_date: Date | string
    inventory_id: number
    return_date?: Date | string | null
    staff_id: number
    last_update?: Date | string
    payment?: paymentUncheckedCreateNestedManyWithoutRentalInput
  }

  export type rentalCreateOrConnectWithoutCustomerInput = {
    where: rentalWhereUniqueInput
    create: XOR<rentalCreateWithoutCustomerInput, rentalUncheckedCreateWithoutCustomerInput>
  }

  export type rentalCreateManyCustomerInputEnvelope = {
    data: Enumerable<rentalCreateManyCustomerInput>
    skipDuplicates?: boolean
  }

  export type addressUpdateWithoutCustomerInput = {
    address?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    district?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: cityUpdateOneRequiredWithoutAddressNestedInput
    staff?: staffUpdateManyWithoutAddressNestedInput
    store?: storeUpdateManyWithoutAddressNestedInput
  }

  export type addressUncheckedUpdateWithoutCustomerInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    district?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: staffUncheckedUpdateManyWithoutAddressNestedInput
    store?: storeUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type storeUpsertWithoutCustomerInput = {
    update: XOR<storeUpdateWithoutCustomerInput, storeUncheckedUpdateWithoutCustomerInput>
    create: XOR<storeCreateWithoutCustomerInput, storeUncheckedCreateWithoutCustomerInput>
  }

  export type storeUpdateWithoutCustomerInput = {
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: inventoryUpdateManyWithoutStoreNestedInput
    staff_staff_store_idTostore?: staffUpdateManyWithoutStore_staff_store_idTostoreNestedInput
    address?: addressUpdateOneRequiredWithoutStoreNestedInput
    staff_store_manager_staff_idTostaff?: staffUpdateOneRequiredWithoutStore_store_manager_staff_idTostaffNestedInput
  }

  export type storeUncheckedUpdateWithoutCustomerInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    manager_staff_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: inventoryUncheckedUpdateManyWithoutStoreNestedInput
    staff_staff_store_idTostore?: staffUncheckedUpdateManyWithoutStore_staff_store_idTostoreNestedInput
  }

  export type paymentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: paymentWhereUniqueInput
    update: XOR<paymentUpdateWithoutCustomerInput, paymentUncheckedUpdateWithoutCustomerInput>
    create: XOR<paymentCreateWithoutCustomerInput, paymentUncheckedCreateWithoutCustomerInput>
  }

  export type paymentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: paymentWhereUniqueInput
    data: XOR<paymentUpdateWithoutCustomerInput, paymentUncheckedUpdateWithoutCustomerInput>
  }

  export type paymentUpdateManyWithWhereWithoutCustomerInput = {
    where: paymentScalarWhereInput
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutPaymentInput>
  }

  export type paymentScalarWhereInput = {
    AND?: Enumerable<paymentScalarWhereInput>
    OR?: Enumerable<paymentScalarWhereInput>
    NOT?: Enumerable<paymentScalarWhereInput>
    payment_id?: IntFilter | number
    customer_id?: IntFilter | number
    staff_id?: IntFilter | number
    rental_id?: IntNullableFilter | number | null
    amount?: DecimalFilter | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFilter | Date | string
    last_update?: DateTimeNullableFilter | Date | string | null
  }

  export type rentalUpsertWithWhereUniqueWithoutCustomerInput = {
    where: rentalWhereUniqueInput
    update: XOR<rentalUpdateWithoutCustomerInput, rentalUncheckedUpdateWithoutCustomerInput>
    create: XOR<rentalCreateWithoutCustomerInput, rentalUncheckedCreateWithoutCustomerInput>
  }

  export type rentalUpdateWithWhereUniqueWithoutCustomerInput = {
    where: rentalWhereUniqueInput
    data: XOR<rentalUpdateWithoutCustomerInput, rentalUncheckedUpdateWithoutCustomerInput>
  }

  export type rentalUpdateManyWithWhereWithoutCustomerInput = {
    where: rentalScalarWhereInput
    data: XOR<rentalUpdateManyMutationInput, rentalUncheckedUpdateManyWithoutRentalInput>
  }

  export type rentalScalarWhereInput = {
    AND?: Enumerable<rentalScalarWhereInput>
    OR?: Enumerable<rentalScalarWhereInput>
    NOT?: Enumerable<rentalScalarWhereInput>
    rental_id?: IntFilter | number
    rental_date?: DateTimeFilter | Date | string
    inventory_id?: IntFilter | number
    customer_id?: IntFilter | number
    return_date?: DateTimeNullableFilter | Date | string | null
    staff_id?: IntFilter | number
    last_update?: DateTimeFilter | Date | string
  }

  export type languageCreateWithoutFilm_film_language_idTolanguageInput = {
    name: string
    last_update?: Date | string
    film_film_original_language_idTolanguage?: filmCreateNestedManyWithoutLanguage_film_original_language_idTolanguageInput
  }

  export type languageUncheckedCreateWithoutFilm_film_language_idTolanguageInput = {
    language_id?: number
    name: string
    last_update?: Date | string
    film_film_original_language_idTolanguage?: filmUncheckedCreateNestedManyWithoutLanguage_film_original_language_idTolanguageInput
  }

  export type languageCreateOrConnectWithoutFilm_film_language_idTolanguageInput = {
    where: languageWhereUniqueInput
    create: XOR<languageCreateWithoutFilm_film_language_idTolanguageInput, languageUncheckedCreateWithoutFilm_film_language_idTolanguageInput>
  }

  export type languageCreateWithoutFilm_film_original_language_idTolanguageInput = {
    name: string
    last_update?: Date | string
    film_film_language_idTolanguage?: filmCreateNestedManyWithoutLanguage_film_language_idTolanguageInput
  }

  export type languageUncheckedCreateWithoutFilm_film_original_language_idTolanguageInput = {
    language_id?: number
    name: string
    last_update?: Date | string
    film_film_language_idTolanguage?: filmUncheckedCreateNestedManyWithoutLanguage_film_language_idTolanguageInput
  }

  export type languageCreateOrConnectWithoutFilm_film_original_language_idTolanguageInput = {
    where: languageWhereUniqueInput
    create: XOR<languageCreateWithoutFilm_film_original_language_idTolanguageInput, languageUncheckedCreateWithoutFilm_film_original_language_idTolanguageInput>
  }

  export type film_actorCreateWithoutFilmInput = {
    last_update?: Date | string
    actor: actorCreateNestedOneWithoutFilm_actorInput
  }

  export type film_actorUncheckedCreateWithoutFilmInput = {
    actor_id: number
    last_update?: Date | string
  }

  export type film_actorCreateOrConnectWithoutFilmInput = {
    where: film_actorWhereUniqueInput
    create: XOR<film_actorCreateWithoutFilmInput, film_actorUncheckedCreateWithoutFilmInput>
  }

  export type film_actorCreateManyFilmInputEnvelope = {
    data: Enumerable<film_actorCreateManyFilmInput>
    skipDuplicates?: boolean
  }

  export type film_categoryCreateWithoutFilmInput = {
    last_update?: Date | string
    category: categoryCreateNestedOneWithoutFilm_categoryInput
  }

  export type film_categoryUncheckedCreateWithoutFilmInput = {
    category_id: number
    last_update?: Date | string
  }

  export type film_categoryCreateOrConnectWithoutFilmInput = {
    where: film_categoryWhereUniqueInput
    create: XOR<film_categoryCreateWithoutFilmInput, film_categoryUncheckedCreateWithoutFilmInput>
  }

  export type film_categoryCreateManyFilmInputEnvelope = {
    data: Enumerable<film_categoryCreateManyFilmInput>
    skipDuplicates?: boolean
  }

  export type inventoryCreateWithoutFilmInput = {
    last_update?: Date | string
    store: storeCreateNestedOneWithoutInventoryInput
    rental?: rentalCreateNestedManyWithoutInventoryInput
  }

  export type inventoryUncheckedCreateWithoutFilmInput = {
    inventory_id?: number
    store_id: number
    last_update?: Date | string
    rental?: rentalUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type inventoryCreateOrConnectWithoutFilmInput = {
    where: inventoryWhereUniqueInput
    create: XOR<inventoryCreateWithoutFilmInput, inventoryUncheckedCreateWithoutFilmInput>
  }

  export type inventoryCreateManyFilmInputEnvelope = {
    data: Enumerable<inventoryCreateManyFilmInput>
    skipDuplicates?: boolean
  }

  export type languageUpsertWithoutFilm_film_language_idTolanguageInput = {
    update: XOR<languageUpdateWithoutFilm_film_language_idTolanguageInput, languageUncheckedUpdateWithoutFilm_film_language_idTolanguageInput>
    create: XOR<languageCreateWithoutFilm_film_language_idTolanguageInput, languageUncheckedCreateWithoutFilm_film_language_idTolanguageInput>
  }

  export type languageUpdateWithoutFilm_film_language_idTolanguageInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    film_film_original_language_idTolanguage?: filmUpdateManyWithoutLanguage_film_original_language_idTolanguageNestedInput
  }

  export type languageUncheckedUpdateWithoutFilm_film_language_idTolanguageInput = {
    language_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    film_film_original_language_idTolanguage?: filmUncheckedUpdateManyWithoutLanguage_film_original_language_idTolanguageNestedInput
  }

  export type languageUpsertWithoutFilm_film_original_language_idTolanguageInput = {
    update: XOR<languageUpdateWithoutFilm_film_original_language_idTolanguageInput, languageUncheckedUpdateWithoutFilm_film_original_language_idTolanguageInput>
    create: XOR<languageCreateWithoutFilm_film_original_language_idTolanguageInput, languageUncheckedCreateWithoutFilm_film_original_language_idTolanguageInput>
  }

  export type languageUpdateWithoutFilm_film_original_language_idTolanguageInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    film_film_language_idTolanguage?: filmUpdateManyWithoutLanguage_film_language_idTolanguageNestedInput
  }

  export type languageUncheckedUpdateWithoutFilm_film_original_language_idTolanguageInput = {
    language_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    film_film_language_idTolanguage?: filmUncheckedUpdateManyWithoutLanguage_film_language_idTolanguageNestedInput
  }

  export type film_actorUpsertWithWhereUniqueWithoutFilmInput = {
    where: film_actorWhereUniqueInput
    update: XOR<film_actorUpdateWithoutFilmInput, film_actorUncheckedUpdateWithoutFilmInput>
    create: XOR<film_actorCreateWithoutFilmInput, film_actorUncheckedCreateWithoutFilmInput>
  }

  export type film_actorUpdateWithWhereUniqueWithoutFilmInput = {
    where: film_actorWhereUniqueInput
    data: XOR<film_actorUpdateWithoutFilmInput, film_actorUncheckedUpdateWithoutFilmInput>
  }

  export type film_actorUpdateManyWithWhereWithoutFilmInput = {
    where: film_actorScalarWhereInput
    data: XOR<film_actorUpdateManyMutationInput, film_actorUncheckedUpdateManyWithoutFilm_actorInput>
  }

  export type film_categoryUpsertWithWhereUniqueWithoutFilmInput = {
    where: film_categoryWhereUniqueInput
    update: XOR<film_categoryUpdateWithoutFilmInput, film_categoryUncheckedUpdateWithoutFilmInput>
    create: XOR<film_categoryCreateWithoutFilmInput, film_categoryUncheckedCreateWithoutFilmInput>
  }

  export type film_categoryUpdateWithWhereUniqueWithoutFilmInput = {
    where: film_categoryWhereUniqueInput
    data: XOR<film_categoryUpdateWithoutFilmInput, film_categoryUncheckedUpdateWithoutFilmInput>
  }

  export type film_categoryUpdateManyWithWhereWithoutFilmInput = {
    where: film_categoryScalarWhereInput
    data: XOR<film_categoryUpdateManyMutationInput, film_categoryUncheckedUpdateManyWithoutFilm_categoryInput>
  }

  export type inventoryUpsertWithWhereUniqueWithoutFilmInput = {
    where: inventoryWhereUniqueInput
    update: XOR<inventoryUpdateWithoutFilmInput, inventoryUncheckedUpdateWithoutFilmInput>
    create: XOR<inventoryCreateWithoutFilmInput, inventoryUncheckedCreateWithoutFilmInput>
  }

  export type inventoryUpdateWithWhereUniqueWithoutFilmInput = {
    where: inventoryWhereUniqueInput
    data: XOR<inventoryUpdateWithoutFilmInput, inventoryUncheckedUpdateWithoutFilmInput>
  }

  export type inventoryUpdateManyWithWhereWithoutFilmInput = {
    where: inventoryScalarWhereInput
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyWithoutInventoryInput>
  }

  export type inventoryScalarWhereInput = {
    AND?: Enumerable<inventoryScalarWhereInput>
    OR?: Enumerable<inventoryScalarWhereInput>
    NOT?: Enumerable<inventoryScalarWhereInput>
    inventory_id?: IntFilter | number
    film_id?: IntFilter | number
    store_id?: IntFilter | number
    last_update?: DateTimeFilter | Date | string
  }

  export type actorCreateWithoutFilm_actorInput = {
    first_name: string
    last_name: string
    last_update?: Date | string
  }

  export type actorUncheckedCreateWithoutFilm_actorInput = {
    actor_id?: number
    first_name: string
    last_name: string
    last_update?: Date | string
  }

  export type actorCreateOrConnectWithoutFilm_actorInput = {
    where: actorWhereUniqueInput
    create: XOR<actorCreateWithoutFilm_actorInput, actorUncheckedCreateWithoutFilm_actorInput>
  }

  export type filmCreateWithoutFilm_actorInput = {
    title: string
    description?: string | null
    release_year?: number | null
    rental_duration?: number
    rental_rate?: Decimal | DecimalJsLike | number | string
    length?: number | null
    replacement_cost?: Decimal | DecimalJsLike | number | string
    rating?: film_rating | null
    special_features?: string | null
    last_update?: Date | string
    language_film_language_idTolanguage: languageCreateNestedOneWithoutFilm_film_language_idTolanguageInput
    language_film_original_language_idTolanguage?: languageCreateNestedOneWithoutFilm_film_original_language_idTolanguageInput
    film_category?: film_categoryCreateNestedManyWithoutFilmInput
    inventory?: inventoryCreateNestedManyWithoutFilmInput
  }

  export type filmUncheckedCreateWithoutFilm_actorInput = {
    film_id?: number
    title: string
    description?: string | null
    release_year?: number | null
    language_id: number
    original_language_id?: number | null
    rental_duration?: number
    rental_rate?: Decimal | DecimalJsLike | number | string
    length?: number | null
    replacement_cost?: Decimal | DecimalJsLike | number | string
    rating?: film_rating | null
    special_features?: string | null
    last_update?: Date | string
    film_category?: film_categoryUncheckedCreateNestedManyWithoutFilmInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutFilmInput
  }

  export type filmCreateOrConnectWithoutFilm_actorInput = {
    where: filmWhereUniqueInput
    create: XOR<filmCreateWithoutFilm_actorInput, filmUncheckedCreateWithoutFilm_actorInput>
  }

  export type actorUpsertWithoutFilm_actorInput = {
    update: XOR<actorUpdateWithoutFilm_actorInput, actorUncheckedUpdateWithoutFilm_actorInput>
    create: XOR<actorCreateWithoutFilm_actorInput, actorUncheckedCreateWithoutFilm_actorInput>
  }

  export type actorUpdateWithoutFilm_actorInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type actorUncheckedUpdateWithoutFilm_actorInput = {
    actor_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type filmUpsertWithoutFilm_actorInput = {
    update: XOR<filmUpdateWithoutFilm_actorInput, filmUncheckedUpdateWithoutFilm_actorInput>
    create: XOR<filmCreateWithoutFilm_actorInput, filmUncheckedCreateWithoutFilm_actorInput>
  }

  export type filmUpdateWithoutFilm_actorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    rental_duration?: IntFieldUpdateOperationsInput | number
    rental_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: NullableIntFieldUpdateOperationsInput | number | null
    replacement_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: NullableEnumfilm_ratingFieldUpdateOperationsInput | film_rating | null
    special_features?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    language_film_language_idTolanguage?: languageUpdateOneRequiredWithoutFilm_film_language_idTolanguageNestedInput
    language_film_original_language_idTolanguage?: languageUpdateOneWithoutFilm_film_original_language_idTolanguageNestedInput
    film_category?: film_categoryUpdateManyWithoutFilmNestedInput
    inventory?: inventoryUpdateManyWithoutFilmNestedInput
  }

  export type filmUncheckedUpdateWithoutFilm_actorInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    language_id?: IntFieldUpdateOperationsInput | number
    original_language_id?: NullableIntFieldUpdateOperationsInput | number | null
    rental_duration?: IntFieldUpdateOperationsInput | number
    rental_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: NullableIntFieldUpdateOperationsInput | number | null
    replacement_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: NullableEnumfilm_ratingFieldUpdateOperationsInput | film_rating | null
    special_features?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    film_category?: film_categoryUncheckedUpdateManyWithoutFilmNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutFilmNestedInput
  }

  export type categoryCreateWithoutFilm_categoryInput = {
    name: string
    last_update?: Date | string
  }

  export type categoryUncheckedCreateWithoutFilm_categoryInput = {
    category_id?: number
    name: string
    last_update?: Date | string
  }

  export type categoryCreateOrConnectWithoutFilm_categoryInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutFilm_categoryInput, categoryUncheckedCreateWithoutFilm_categoryInput>
  }

  export type filmCreateWithoutFilm_categoryInput = {
    title: string
    description?: string | null
    release_year?: number | null
    rental_duration?: number
    rental_rate?: Decimal | DecimalJsLike | number | string
    length?: number | null
    replacement_cost?: Decimal | DecimalJsLike | number | string
    rating?: film_rating | null
    special_features?: string | null
    last_update?: Date | string
    language_film_language_idTolanguage: languageCreateNestedOneWithoutFilm_film_language_idTolanguageInput
    language_film_original_language_idTolanguage?: languageCreateNestedOneWithoutFilm_film_original_language_idTolanguageInput
    film_actor?: film_actorCreateNestedManyWithoutFilmInput
    inventory?: inventoryCreateNestedManyWithoutFilmInput
  }

  export type filmUncheckedCreateWithoutFilm_categoryInput = {
    film_id?: number
    title: string
    description?: string | null
    release_year?: number | null
    language_id: number
    original_language_id?: number | null
    rental_duration?: number
    rental_rate?: Decimal | DecimalJsLike | number | string
    length?: number | null
    replacement_cost?: Decimal | DecimalJsLike | number | string
    rating?: film_rating | null
    special_features?: string | null
    last_update?: Date | string
    film_actor?: film_actorUncheckedCreateNestedManyWithoutFilmInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutFilmInput
  }

  export type filmCreateOrConnectWithoutFilm_categoryInput = {
    where: filmWhereUniqueInput
    create: XOR<filmCreateWithoutFilm_categoryInput, filmUncheckedCreateWithoutFilm_categoryInput>
  }

  export type categoryUpsertWithoutFilm_categoryInput = {
    update: XOR<categoryUpdateWithoutFilm_categoryInput, categoryUncheckedUpdateWithoutFilm_categoryInput>
    create: XOR<categoryCreateWithoutFilm_categoryInput, categoryUncheckedCreateWithoutFilm_categoryInput>
  }

  export type categoryUpdateWithoutFilm_categoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryUncheckedUpdateWithoutFilm_categoryInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type filmUpsertWithoutFilm_categoryInput = {
    update: XOR<filmUpdateWithoutFilm_categoryInput, filmUncheckedUpdateWithoutFilm_categoryInput>
    create: XOR<filmCreateWithoutFilm_categoryInput, filmUncheckedCreateWithoutFilm_categoryInput>
  }

  export type filmUpdateWithoutFilm_categoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    rental_duration?: IntFieldUpdateOperationsInput | number
    rental_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: NullableIntFieldUpdateOperationsInput | number | null
    replacement_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: NullableEnumfilm_ratingFieldUpdateOperationsInput | film_rating | null
    special_features?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    language_film_language_idTolanguage?: languageUpdateOneRequiredWithoutFilm_film_language_idTolanguageNestedInput
    language_film_original_language_idTolanguage?: languageUpdateOneWithoutFilm_film_original_language_idTolanguageNestedInput
    film_actor?: film_actorUpdateManyWithoutFilmNestedInput
    inventory?: inventoryUpdateManyWithoutFilmNestedInput
  }

  export type filmUncheckedUpdateWithoutFilm_categoryInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    language_id?: IntFieldUpdateOperationsInput | number
    original_language_id?: NullableIntFieldUpdateOperationsInput | number | null
    rental_duration?: IntFieldUpdateOperationsInput | number
    rental_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: NullableIntFieldUpdateOperationsInput | number | null
    replacement_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: NullableEnumfilm_ratingFieldUpdateOperationsInput | film_rating | null
    special_features?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    film_actor?: film_actorUncheckedUpdateManyWithoutFilmNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutFilmNestedInput
  }

  export type filmCreateWithoutInventoryInput = {
    title: string
    description?: string | null
    release_year?: number | null
    rental_duration?: number
    rental_rate?: Decimal | DecimalJsLike | number | string
    length?: number | null
    replacement_cost?: Decimal | DecimalJsLike | number | string
    rating?: film_rating | null
    special_features?: string | null
    last_update?: Date | string
    language_film_language_idTolanguage: languageCreateNestedOneWithoutFilm_film_language_idTolanguageInput
    language_film_original_language_idTolanguage?: languageCreateNestedOneWithoutFilm_film_original_language_idTolanguageInput
    film_actor?: film_actorCreateNestedManyWithoutFilmInput
    film_category?: film_categoryCreateNestedManyWithoutFilmInput
  }

  export type filmUncheckedCreateWithoutInventoryInput = {
    film_id?: number
    title: string
    description?: string | null
    release_year?: number | null
    language_id: number
    original_language_id?: number | null
    rental_duration?: number
    rental_rate?: Decimal | DecimalJsLike | number | string
    length?: number | null
    replacement_cost?: Decimal | DecimalJsLike | number | string
    rating?: film_rating | null
    special_features?: string | null
    last_update?: Date | string
    film_actor?: film_actorUncheckedCreateNestedManyWithoutFilmInput
    film_category?: film_categoryUncheckedCreateNestedManyWithoutFilmInput
  }

  export type filmCreateOrConnectWithoutInventoryInput = {
    where: filmWhereUniqueInput
    create: XOR<filmCreateWithoutInventoryInput, filmUncheckedCreateWithoutInventoryInput>
  }

  export type storeCreateWithoutInventoryInput = {
    last_update?: Date | string
    customer?: customerCreateNestedManyWithoutStoreInput
    staff_staff_store_idTostore?: staffCreateNestedManyWithoutStore_staff_store_idTostoreInput
    address: addressCreateNestedOneWithoutStoreInput
    staff_store_manager_staff_idTostaff: staffCreateNestedOneWithoutStore_store_manager_staff_idTostaffInput
  }

  export type storeUncheckedCreateWithoutInventoryInput = {
    store_id?: number
    manager_staff_id: number
    address_id: number
    last_update?: Date | string
    customer?: customerUncheckedCreateNestedManyWithoutStoreInput
    staff_staff_store_idTostore?: staffUncheckedCreateNestedManyWithoutStore_staff_store_idTostoreInput
  }

  export type storeCreateOrConnectWithoutInventoryInput = {
    where: storeWhereUniqueInput
    create: XOR<storeCreateWithoutInventoryInput, storeUncheckedCreateWithoutInventoryInput>
  }

  export type rentalCreateWithoutInventoryInput = {
    rental_date: Date | string
    return_date?: Date | string | null
    last_update?: Date | string
    payment?: paymentCreateNestedManyWithoutRentalInput
    customer: customerCreateNestedOneWithoutRentalInput
    staff: staffCreateNestedOneWithoutRentalInput
  }

  export type rentalUncheckedCreateWithoutInventoryInput = {
    rental_id?: number
    rental_date: Date | string
    customer_id: number
    return_date?: Date | string | null
    staff_id: number
    last_update?: Date | string
    payment?: paymentUncheckedCreateNestedManyWithoutRentalInput
  }

  export type rentalCreateOrConnectWithoutInventoryInput = {
    where: rentalWhereUniqueInput
    create: XOR<rentalCreateWithoutInventoryInput, rentalUncheckedCreateWithoutInventoryInput>
  }

  export type rentalCreateManyInventoryInputEnvelope = {
    data: Enumerable<rentalCreateManyInventoryInput>
    skipDuplicates?: boolean
  }

  export type filmUpsertWithoutInventoryInput = {
    update: XOR<filmUpdateWithoutInventoryInput, filmUncheckedUpdateWithoutInventoryInput>
    create: XOR<filmCreateWithoutInventoryInput, filmUncheckedCreateWithoutInventoryInput>
  }

  export type filmUpdateWithoutInventoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    rental_duration?: IntFieldUpdateOperationsInput | number
    rental_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: NullableIntFieldUpdateOperationsInput | number | null
    replacement_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: NullableEnumfilm_ratingFieldUpdateOperationsInput | film_rating | null
    special_features?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    language_film_language_idTolanguage?: languageUpdateOneRequiredWithoutFilm_film_language_idTolanguageNestedInput
    language_film_original_language_idTolanguage?: languageUpdateOneWithoutFilm_film_original_language_idTolanguageNestedInput
    film_actor?: film_actorUpdateManyWithoutFilmNestedInput
    film_category?: film_categoryUpdateManyWithoutFilmNestedInput
  }

  export type filmUncheckedUpdateWithoutInventoryInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    language_id?: IntFieldUpdateOperationsInput | number
    original_language_id?: NullableIntFieldUpdateOperationsInput | number | null
    rental_duration?: IntFieldUpdateOperationsInput | number
    rental_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: NullableIntFieldUpdateOperationsInput | number | null
    replacement_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: NullableEnumfilm_ratingFieldUpdateOperationsInput | film_rating | null
    special_features?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    film_actor?: film_actorUncheckedUpdateManyWithoutFilmNestedInput
    film_category?: film_categoryUncheckedUpdateManyWithoutFilmNestedInput
  }

  export type storeUpsertWithoutInventoryInput = {
    update: XOR<storeUpdateWithoutInventoryInput, storeUncheckedUpdateWithoutInventoryInput>
    create: XOR<storeCreateWithoutInventoryInput, storeUncheckedCreateWithoutInventoryInput>
  }

  export type storeUpdateWithoutInventoryInput = {
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUpdateManyWithoutStoreNestedInput
    staff_staff_store_idTostore?: staffUpdateManyWithoutStore_staff_store_idTostoreNestedInput
    address?: addressUpdateOneRequiredWithoutStoreNestedInput
    staff_store_manager_staff_idTostaff?: staffUpdateOneRequiredWithoutStore_store_manager_staff_idTostaffNestedInput
  }

  export type storeUncheckedUpdateWithoutInventoryInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    manager_staff_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUncheckedUpdateManyWithoutStoreNestedInput
    staff_staff_store_idTostore?: staffUncheckedUpdateManyWithoutStore_staff_store_idTostoreNestedInput
  }

  export type rentalUpsertWithWhereUniqueWithoutInventoryInput = {
    where: rentalWhereUniqueInput
    update: XOR<rentalUpdateWithoutInventoryInput, rentalUncheckedUpdateWithoutInventoryInput>
    create: XOR<rentalCreateWithoutInventoryInput, rentalUncheckedCreateWithoutInventoryInput>
  }

  export type rentalUpdateWithWhereUniqueWithoutInventoryInput = {
    where: rentalWhereUniqueInput
    data: XOR<rentalUpdateWithoutInventoryInput, rentalUncheckedUpdateWithoutInventoryInput>
  }

  export type rentalUpdateManyWithWhereWithoutInventoryInput = {
    where: rentalScalarWhereInput
    data: XOR<rentalUpdateManyMutationInput, rentalUncheckedUpdateManyWithoutRentalInput>
  }

  export type filmCreateWithoutLanguage_film_language_idTolanguageInput = {
    title: string
    description?: string | null
    release_year?: number | null
    rental_duration?: number
    rental_rate?: Decimal | DecimalJsLike | number | string
    length?: number | null
    replacement_cost?: Decimal | DecimalJsLike | number | string
    rating?: film_rating | null
    special_features?: string | null
    last_update?: Date | string
    language_film_original_language_idTolanguage?: languageCreateNestedOneWithoutFilm_film_original_language_idTolanguageInput
    film_actor?: film_actorCreateNestedManyWithoutFilmInput
    film_category?: film_categoryCreateNestedManyWithoutFilmInput
    inventory?: inventoryCreateNestedManyWithoutFilmInput
  }

  export type filmUncheckedCreateWithoutLanguage_film_language_idTolanguageInput = {
    film_id?: number
    title: string
    description?: string | null
    release_year?: number | null
    original_language_id?: number | null
    rental_duration?: number
    rental_rate?: Decimal | DecimalJsLike | number | string
    length?: number | null
    replacement_cost?: Decimal | DecimalJsLike | number | string
    rating?: film_rating | null
    special_features?: string | null
    last_update?: Date | string
    film_actor?: film_actorUncheckedCreateNestedManyWithoutFilmInput
    film_category?: film_categoryUncheckedCreateNestedManyWithoutFilmInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutFilmInput
  }

  export type filmCreateOrConnectWithoutLanguage_film_language_idTolanguageInput = {
    where: filmWhereUniqueInput
    create: XOR<filmCreateWithoutLanguage_film_language_idTolanguageInput, filmUncheckedCreateWithoutLanguage_film_language_idTolanguageInput>
  }

  export type filmCreateManyLanguage_film_language_idTolanguageInputEnvelope = {
    data: Enumerable<filmCreateManyLanguage_film_language_idTolanguageInput>
    skipDuplicates?: boolean
  }

  export type filmCreateWithoutLanguage_film_original_language_idTolanguageInput = {
    title: string
    description?: string | null
    release_year?: number | null
    rental_duration?: number
    rental_rate?: Decimal | DecimalJsLike | number | string
    length?: number | null
    replacement_cost?: Decimal | DecimalJsLike | number | string
    rating?: film_rating | null
    special_features?: string | null
    last_update?: Date | string
    language_film_language_idTolanguage: languageCreateNestedOneWithoutFilm_film_language_idTolanguageInput
    film_actor?: film_actorCreateNestedManyWithoutFilmInput
    film_category?: film_categoryCreateNestedManyWithoutFilmInput
    inventory?: inventoryCreateNestedManyWithoutFilmInput
  }

  export type filmUncheckedCreateWithoutLanguage_film_original_language_idTolanguageInput = {
    film_id?: number
    title: string
    description?: string | null
    release_year?: number | null
    language_id: number
    rental_duration?: number
    rental_rate?: Decimal | DecimalJsLike | number | string
    length?: number | null
    replacement_cost?: Decimal | DecimalJsLike | number | string
    rating?: film_rating | null
    special_features?: string | null
    last_update?: Date | string
    film_actor?: film_actorUncheckedCreateNestedManyWithoutFilmInput
    film_category?: film_categoryUncheckedCreateNestedManyWithoutFilmInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutFilmInput
  }

  export type filmCreateOrConnectWithoutLanguage_film_original_language_idTolanguageInput = {
    where: filmWhereUniqueInput
    create: XOR<filmCreateWithoutLanguage_film_original_language_idTolanguageInput, filmUncheckedCreateWithoutLanguage_film_original_language_idTolanguageInput>
  }

  export type filmCreateManyLanguage_film_original_language_idTolanguageInputEnvelope = {
    data: Enumerable<filmCreateManyLanguage_film_original_language_idTolanguageInput>
    skipDuplicates?: boolean
  }

  export type filmUpsertWithWhereUniqueWithoutLanguage_film_language_idTolanguageInput = {
    where: filmWhereUniqueInput
    update: XOR<filmUpdateWithoutLanguage_film_language_idTolanguageInput, filmUncheckedUpdateWithoutLanguage_film_language_idTolanguageInput>
    create: XOR<filmCreateWithoutLanguage_film_language_idTolanguageInput, filmUncheckedCreateWithoutLanguage_film_language_idTolanguageInput>
  }

  export type filmUpdateWithWhereUniqueWithoutLanguage_film_language_idTolanguageInput = {
    where: filmWhereUniqueInput
    data: XOR<filmUpdateWithoutLanguage_film_language_idTolanguageInput, filmUncheckedUpdateWithoutLanguage_film_language_idTolanguageInput>
  }

  export type filmUpdateManyWithWhereWithoutLanguage_film_language_idTolanguageInput = {
    where: filmScalarWhereInput
    data: XOR<filmUpdateManyMutationInput, filmUncheckedUpdateManyWithoutFilm_film_language_idTolanguageInput>
  }

  export type filmScalarWhereInput = {
    AND?: Enumerable<filmScalarWhereInput>
    OR?: Enumerable<filmScalarWhereInput>
    NOT?: Enumerable<filmScalarWhereInput>
    film_id?: IntFilter | number
    title?: StringFilter | string
    description?: StringNullableFilter | string | null
    release_year?: IntNullableFilter | number | null
    language_id?: IntFilter | number
    original_language_id?: IntNullableFilter | number | null
    rental_duration?: IntFilter | number
    rental_rate?: DecimalFilter | Decimal | DecimalJsLike | number | string
    length?: IntNullableFilter | number | null
    replacement_cost?: DecimalFilter | Decimal | DecimalJsLike | number | string
    rating?: Enumfilm_ratingNullableFilter | film_rating | null
    special_features?: StringNullableFilter | string | null
    last_update?: DateTimeFilter | Date | string
  }

  export type filmUpsertWithWhereUniqueWithoutLanguage_film_original_language_idTolanguageInput = {
    where: filmWhereUniqueInput
    update: XOR<filmUpdateWithoutLanguage_film_original_language_idTolanguageInput, filmUncheckedUpdateWithoutLanguage_film_original_language_idTolanguageInput>
    create: XOR<filmCreateWithoutLanguage_film_original_language_idTolanguageInput, filmUncheckedCreateWithoutLanguage_film_original_language_idTolanguageInput>
  }

  export type filmUpdateWithWhereUniqueWithoutLanguage_film_original_language_idTolanguageInput = {
    where: filmWhereUniqueInput
    data: XOR<filmUpdateWithoutLanguage_film_original_language_idTolanguageInput, filmUncheckedUpdateWithoutLanguage_film_original_language_idTolanguageInput>
  }

  export type filmUpdateManyWithWhereWithoutLanguage_film_original_language_idTolanguageInput = {
    where: filmScalarWhereInput
    data: XOR<filmUpdateManyMutationInput, filmUncheckedUpdateManyWithoutFilm_film_original_language_idTolanguageInput>
  }

  export type customerCreateWithoutPaymentInput = {
    first_name: string
    last_name: string
    email?: string | null
    active?: boolean
    create_date: Date | string
    last_update?: Date | string | null
    address: addressCreateNestedOneWithoutCustomerInput
    store: storeCreateNestedOneWithoutCustomerInput
    rental?: rentalCreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateWithoutPaymentInput = {
    customer_id?: number
    store_id: number
    first_name: string
    last_name: string
    email?: string | null
    address_id: number
    active?: boolean
    create_date: Date | string
    last_update?: Date | string | null
    rental?: rentalUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerCreateOrConnectWithoutPaymentInput = {
    where: customerWhereUniqueInput
    create: XOR<customerCreateWithoutPaymentInput, customerUncheckedCreateWithoutPaymentInput>
  }

  export type rentalCreateWithoutPaymentInput = {
    rental_date: Date | string
    return_date?: Date | string | null
    last_update?: Date | string
    customer: customerCreateNestedOneWithoutRentalInput
    inventory: inventoryCreateNestedOneWithoutRentalInput
    staff: staffCreateNestedOneWithoutRentalInput
  }

  export type rentalUncheckedCreateWithoutPaymentInput = {
    rental_id?: number
    rental_date: Date | string
    inventory_id: number
    customer_id: number
    return_date?: Date | string | null
    staff_id: number
    last_update?: Date | string
  }

  export type rentalCreateOrConnectWithoutPaymentInput = {
    where: rentalWhereUniqueInput
    create: XOR<rentalCreateWithoutPaymentInput, rentalUncheckedCreateWithoutPaymentInput>
  }

  export type staffCreateWithoutPaymentInput = {
    first_name: string
    last_name: string
    picture?: Buffer | null
    email?: string | null
    active?: boolean
    username: string
    password?: string | null
    last_update?: Date | string
    rental?: rentalCreateNestedManyWithoutStaffInput
    address: addressCreateNestedOneWithoutStaffInput
    store_staff_store_idTostore: storeCreateNestedOneWithoutStaff_staff_store_idTostoreInput
    store_store_manager_staff_idTostaff?: storeCreateNestedOneWithoutStaff_store_manager_staff_idTostaffInput
  }

  export type staffUncheckedCreateWithoutPaymentInput = {
    staff_id?: number
    first_name: string
    last_name: string
    address_id: number
    picture?: Buffer | null
    email?: string | null
    store_id: number
    active?: boolean
    username: string
    password?: string | null
    last_update?: Date | string
    rental?: rentalUncheckedCreateNestedManyWithoutStaffInput
    store_store_manager_staff_idTostaff?: storeUncheckedCreateNestedOneWithoutStaff_store_manager_staff_idTostaffInput
  }

  export type staffCreateOrConnectWithoutPaymentInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutPaymentInput, staffUncheckedCreateWithoutPaymentInput>
  }

  export type customerUpsertWithoutPaymentInput = {
    update: XOR<customerUpdateWithoutPaymentInput, customerUncheckedUpdateWithoutPaymentInput>
    create: XOR<customerCreateWithoutPaymentInput, customerUncheckedCreateWithoutPaymentInput>
  }

  export type customerUpdateWithoutPaymentInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: addressUpdateOneRequiredWithoutCustomerNestedInput
    store?: storeUpdateOneRequiredWithoutCustomerNestedInput
    rental?: rentalUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateWithoutPaymentInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rental?: rentalUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type rentalUpsertWithoutPaymentInput = {
    update: XOR<rentalUpdateWithoutPaymentInput, rentalUncheckedUpdateWithoutPaymentInput>
    create: XOR<rentalCreateWithoutPaymentInput, rentalUncheckedCreateWithoutPaymentInput>
  }

  export type rentalUpdateWithoutPaymentInput = {
    rental_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUpdateOneRequiredWithoutRentalNestedInput
    inventory?: inventoryUpdateOneRequiredWithoutRentalNestedInput
    staff?: staffUpdateOneRequiredWithoutRentalNestedInput
  }

  export type rentalUncheckedUpdateWithoutPaymentInput = {
    rental_id?: IntFieldUpdateOperationsInput | number
    rental_date?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type staffUpsertWithoutPaymentInput = {
    update: XOR<staffUpdateWithoutPaymentInput, staffUncheckedUpdateWithoutPaymentInput>
    create: XOR<staffCreateWithoutPaymentInput, staffUncheckedCreateWithoutPaymentInput>
  }

  export type staffUpdateWithoutPaymentInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    rental?: rentalUpdateManyWithoutStaffNestedInput
    address?: addressUpdateOneRequiredWithoutStaffNestedInput
    store_staff_store_idTostore?: storeUpdateOneRequiredWithoutStaff_staff_store_idTostoreNestedInput
    store_store_manager_staff_idTostaff?: storeUpdateOneWithoutStaff_store_manager_staff_idTostaffNestedInput
  }

  export type staffUncheckedUpdateWithoutPaymentInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    store_id?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    rental?: rentalUncheckedUpdateManyWithoutStaffNestedInput
    store_store_manager_staff_idTostaff?: storeUncheckedUpdateOneWithoutStaff_store_manager_staff_idTostaffNestedInput
  }

  export type paymentCreateWithoutRentalInput = {
    amount: Decimal | DecimalJsLike | number | string
    payment_date: Date | string
    last_update?: Date | string | null
    customer: customerCreateNestedOneWithoutPaymentInput
    staff: staffCreateNestedOneWithoutPaymentInput
  }

  export type paymentUncheckedCreateWithoutRentalInput = {
    payment_id?: number
    customer_id: number
    staff_id: number
    amount: Decimal | DecimalJsLike | number | string
    payment_date: Date | string
    last_update?: Date | string | null
  }

  export type paymentCreateOrConnectWithoutRentalInput = {
    where: paymentWhereUniqueInput
    create: XOR<paymentCreateWithoutRentalInput, paymentUncheckedCreateWithoutRentalInput>
  }

  export type paymentCreateManyRentalInputEnvelope = {
    data: Enumerable<paymentCreateManyRentalInput>
    skipDuplicates?: boolean
  }

  export type customerCreateWithoutRentalInput = {
    first_name: string
    last_name: string
    email?: string | null
    active?: boolean
    create_date: Date | string
    last_update?: Date | string | null
    address: addressCreateNestedOneWithoutCustomerInput
    store: storeCreateNestedOneWithoutCustomerInput
    payment?: paymentCreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateWithoutRentalInput = {
    customer_id?: number
    store_id: number
    first_name: string
    last_name: string
    email?: string | null
    address_id: number
    active?: boolean
    create_date: Date | string
    last_update?: Date | string | null
    payment?: paymentUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerCreateOrConnectWithoutRentalInput = {
    where: customerWhereUniqueInput
    create: XOR<customerCreateWithoutRentalInput, customerUncheckedCreateWithoutRentalInput>
  }

  export type inventoryCreateWithoutRentalInput = {
    last_update?: Date | string
    film: filmCreateNestedOneWithoutInventoryInput
    store: storeCreateNestedOneWithoutInventoryInput
  }

  export type inventoryUncheckedCreateWithoutRentalInput = {
    inventory_id?: number
    film_id: number
    store_id: number
    last_update?: Date | string
  }

  export type inventoryCreateOrConnectWithoutRentalInput = {
    where: inventoryWhereUniqueInput
    create: XOR<inventoryCreateWithoutRentalInput, inventoryUncheckedCreateWithoutRentalInput>
  }

  export type staffCreateWithoutRentalInput = {
    first_name: string
    last_name: string
    picture?: Buffer | null
    email?: string | null
    active?: boolean
    username: string
    password?: string | null
    last_update?: Date | string
    payment?: paymentCreateNestedManyWithoutStaffInput
    address: addressCreateNestedOneWithoutStaffInput
    store_staff_store_idTostore: storeCreateNestedOneWithoutStaff_staff_store_idTostoreInput
    store_store_manager_staff_idTostaff?: storeCreateNestedOneWithoutStaff_store_manager_staff_idTostaffInput
  }

  export type staffUncheckedCreateWithoutRentalInput = {
    staff_id?: number
    first_name: string
    last_name: string
    address_id: number
    picture?: Buffer | null
    email?: string | null
    store_id: number
    active?: boolean
    username: string
    password?: string | null
    last_update?: Date | string
    payment?: paymentUncheckedCreateNestedManyWithoutStaffInput
    store_store_manager_staff_idTostaff?: storeUncheckedCreateNestedOneWithoutStaff_store_manager_staff_idTostaffInput
  }

  export type staffCreateOrConnectWithoutRentalInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutRentalInput, staffUncheckedCreateWithoutRentalInput>
  }

  export type paymentUpsertWithWhereUniqueWithoutRentalInput = {
    where: paymentWhereUniqueInput
    update: XOR<paymentUpdateWithoutRentalInput, paymentUncheckedUpdateWithoutRentalInput>
    create: XOR<paymentCreateWithoutRentalInput, paymentUncheckedCreateWithoutRentalInput>
  }

  export type paymentUpdateWithWhereUniqueWithoutRentalInput = {
    where: paymentWhereUniqueInput
    data: XOR<paymentUpdateWithoutRentalInput, paymentUncheckedUpdateWithoutRentalInput>
  }

  export type paymentUpdateManyWithWhereWithoutRentalInput = {
    where: paymentScalarWhereInput
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutPaymentInput>
  }

  export type customerUpsertWithoutRentalInput = {
    update: XOR<customerUpdateWithoutRentalInput, customerUncheckedUpdateWithoutRentalInput>
    create: XOR<customerCreateWithoutRentalInput, customerUncheckedCreateWithoutRentalInput>
  }

  export type customerUpdateWithoutRentalInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: addressUpdateOneRequiredWithoutCustomerNestedInput
    store?: storeUpdateOneRequiredWithoutCustomerNestedInput
    payment?: paymentUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateWithoutRentalInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment?: paymentUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type inventoryUpsertWithoutRentalInput = {
    update: XOR<inventoryUpdateWithoutRentalInput, inventoryUncheckedUpdateWithoutRentalInput>
    create: XOR<inventoryCreateWithoutRentalInput, inventoryUncheckedCreateWithoutRentalInput>
  }

  export type inventoryUpdateWithoutRentalInput = {
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    film?: filmUpdateOneRequiredWithoutInventoryNestedInput
    store?: storeUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateWithoutRentalInput = {
    inventory_id?: IntFieldUpdateOperationsInput | number
    film_id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type staffUpsertWithoutRentalInput = {
    update: XOR<staffUpdateWithoutRentalInput, staffUncheckedUpdateWithoutRentalInput>
    create: XOR<staffCreateWithoutRentalInput, staffUncheckedCreateWithoutRentalInput>
  }

  export type staffUpdateWithoutRentalInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUpdateManyWithoutStaffNestedInput
    address?: addressUpdateOneRequiredWithoutStaffNestedInput
    store_staff_store_idTostore?: storeUpdateOneRequiredWithoutStaff_staff_store_idTostoreNestedInput
    store_store_manager_staff_idTostaff?: storeUpdateOneWithoutStaff_store_manager_staff_idTostaffNestedInput
  }

  export type staffUncheckedUpdateWithoutRentalInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    store_id?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUncheckedUpdateManyWithoutStaffNestedInput
    store_store_manager_staff_idTostaff?: storeUncheckedUpdateOneWithoutStaff_store_manager_staff_idTostaffNestedInput
  }

  export type paymentCreateWithoutStaffInput = {
    amount: Decimal | DecimalJsLike | number | string
    payment_date: Date | string
    last_update?: Date | string | null
    customer: customerCreateNestedOneWithoutPaymentInput
    rental?: rentalCreateNestedOneWithoutPaymentInput
  }

  export type paymentUncheckedCreateWithoutStaffInput = {
    payment_id?: number
    customer_id: number
    rental_id?: number | null
    amount: Decimal | DecimalJsLike | number | string
    payment_date: Date | string
    last_update?: Date | string | null
  }

  export type paymentCreateOrConnectWithoutStaffInput = {
    where: paymentWhereUniqueInput
    create: XOR<paymentCreateWithoutStaffInput, paymentUncheckedCreateWithoutStaffInput>
  }

  export type paymentCreateManyStaffInputEnvelope = {
    data: Enumerable<paymentCreateManyStaffInput>
    skipDuplicates?: boolean
  }

  export type rentalCreateWithoutStaffInput = {
    rental_date: Date | string
    return_date?: Date | string | null
    last_update?: Date | string
    payment?: paymentCreateNestedManyWithoutRentalInput
    customer: customerCreateNestedOneWithoutRentalInput
    inventory: inventoryCreateNestedOneWithoutRentalInput
  }

  export type rentalUncheckedCreateWithoutStaffInput = {
    rental_id?: number
    rental_date: Date | string
    inventory_id: number
    customer_id: number
    return_date?: Date | string | null
    last_update?: Date | string
    payment?: paymentUncheckedCreateNestedManyWithoutRentalInput
  }

  export type rentalCreateOrConnectWithoutStaffInput = {
    where: rentalWhereUniqueInput
    create: XOR<rentalCreateWithoutStaffInput, rentalUncheckedCreateWithoutStaffInput>
  }

  export type rentalCreateManyStaffInputEnvelope = {
    data: Enumerable<rentalCreateManyStaffInput>
    skipDuplicates?: boolean
  }

  export type storeCreateWithoutStaff_staff_store_idTostoreInput = {
    last_update?: Date | string
    customer?: customerCreateNestedManyWithoutStoreInput
    inventory?: inventoryCreateNestedManyWithoutStoreInput
    address: addressCreateNestedOneWithoutStoreInput
    staff_store_manager_staff_idTostaff: staffCreateNestedOneWithoutStore_store_manager_staff_idTostaffInput
  }

  export type storeUncheckedCreateWithoutStaff_staff_store_idTostoreInput = {
    store_id?: number
    manager_staff_id: number
    address_id: number
    last_update?: Date | string
    customer?: customerUncheckedCreateNestedManyWithoutStoreInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutStoreInput
  }

  export type storeCreateOrConnectWithoutStaff_staff_store_idTostoreInput = {
    where: storeWhereUniqueInput
    create: XOR<storeCreateWithoutStaff_staff_store_idTostoreInput, storeUncheckedCreateWithoutStaff_staff_store_idTostoreInput>
  }

  export type storeCreateWithoutStaff_store_manager_staff_idTostaffInput = {
    last_update?: Date | string
    customer?: customerCreateNestedManyWithoutStoreInput
    inventory?: inventoryCreateNestedManyWithoutStoreInput
    staff_staff_store_idTostore?: staffCreateNestedManyWithoutStore_staff_store_idTostoreInput
    address: addressCreateNestedOneWithoutStoreInput
  }

  export type storeUncheckedCreateWithoutStaff_store_manager_staff_idTostaffInput = {
    store_id?: number
    address_id: number
    last_update?: Date | string
    customer?: customerUncheckedCreateNestedManyWithoutStoreInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutStoreInput
    staff_staff_store_idTostore?: staffUncheckedCreateNestedManyWithoutStore_staff_store_idTostoreInput
  }

  export type storeCreateOrConnectWithoutStaff_store_manager_staff_idTostaffInput = {
    where: storeWhereUniqueInput
    create: XOR<storeCreateWithoutStaff_store_manager_staff_idTostaffInput, storeUncheckedCreateWithoutStaff_store_manager_staff_idTostaffInput>
  }

  export type paymentUpsertWithWhereUniqueWithoutStaffInput = {
    where: paymentWhereUniqueInput
    update: XOR<paymentUpdateWithoutStaffInput, paymentUncheckedUpdateWithoutStaffInput>
    create: XOR<paymentCreateWithoutStaffInput, paymentUncheckedCreateWithoutStaffInput>
  }

  export type paymentUpdateWithWhereUniqueWithoutStaffInput = {
    where: paymentWhereUniqueInput
    data: XOR<paymentUpdateWithoutStaffInput, paymentUncheckedUpdateWithoutStaffInput>
  }

  export type paymentUpdateManyWithWhereWithoutStaffInput = {
    where: paymentScalarWhereInput
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutPaymentInput>
  }

  export type rentalUpsertWithWhereUniqueWithoutStaffInput = {
    where: rentalWhereUniqueInput
    update: XOR<rentalUpdateWithoutStaffInput, rentalUncheckedUpdateWithoutStaffInput>
    create: XOR<rentalCreateWithoutStaffInput, rentalUncheckedCreateWithoutStaffInput>
  }

  export type rentalUpdateWithWhereUniqueWithoutStaffInput = {
    where: rentalWhereUniqueInput
    data: XOR<rentalUpdateWithoutStaffInput, rentalUncheckedUpdateWithoutStaffInput>
  }

  export type rentalUpdateManyWithWhereWithoutStaffInput = {
    where: rentalScalarWhereInput
    data: XOR<rentalUpdateManyMutationInput, rentalUncheckedUpdateManyWithoutRentalInput>
  }

  export type addressUpdateWithoutStaffInput = {
    address?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    district?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: cityUpdateOneRequiredWithoutAddressNestedInput
    customer?: customerUpdateManyWithoutAddressNestedInput
    store?: storeUpdateManyWithoutAddressNestedInput
  }

  export type addressUncheckedUpdateWithoutStaffInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    district?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUncheckedUpdateManyWithoutAddressNestedInput
    store?: storeUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type storeUpsertWithoutStaff_staff_store_idTostoreInput = {
    update: XOR<storeUpdateWithoutStaff_staff_store_idTostoreInput, storeUncheckedUpdateWithoutStaff_staff_store_idTostoreInput>
    create: XOR<storeCreateWithoutStaff_staff_store_idTostoreInput, storeUncheckedCreateWithoutStaff_staff_store_idTostoreInput>
  }

  export type storeUpdateWithoutStaff_staff_store_idTostoreInput = {
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUpdateManyWithoutStoreNestedInput
    inventory?: inventoryUpdateManyWithoutStoreNestedInput
    address?: addressUpdateOneRequiredWithoutStoreNestedInput
    staff_store_manager_staff_idTostaff?: staffUpdateOneRequiredWithoutStore_store_manager_staff_idTostaffNestedInput
  }

  export type storeUncheckedUpdateWithoutStaff_staff_store_idTostoreInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    manager_staff_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUncheckedUpdateManyWithoutStoreNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type storeUpsertWithoutStaff_store_manager_staff_idTostaffInput = {
    update: XOR<storeUpdateWithoutStaff_store_manager_staff_idTostaffInput, storeUncheckedUpdateWithoutStaff_store_manager_staff_idTostaffInput>
    create: XOR<storeCreateWithoutStaff_store_manager_staff_idTostaffInput, storeUncheckedCreateWithoutStaff_store_manager_staff_idTostaffInput>
  }

  export type storeUpdateWithoutStaff_store_manager_staff_idTostaffInput = {
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUpdateManyWithoutStoreNestedInput
    inventory?: inventoryUpdateManyWithoutStoreNestedInput
    staff_staff_store_idTostore?: staffUpdateManyWithoutStore_staff_store_idTostoreNestedInput
    address?: addressUpdateOneRequiredWithoutStoreNestedInput
  }

  export type storeUncheckedUpdateWithoutStaff_store_manager_staff_idTostaffInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUncheckedUpdateManyWithoutStoreNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutStoreNestedInput
    staff_staff_store_idTostore?: staffUncheckedUpdateManyWithoutStore_staff_store_idTostoreNestedInput
  }

  export type customerCreateWithoutStoreInput = {
    first_name: string
    last_name: string
    email?: string | null
    active?: boolean
    create_date: Date | string
    last_update?: Date | string | null
    address: addressCreateNestedOneWithoutCustomerInput
    payment?: paymentCreateNestedManyWithoutCustomerInput
    rental?: rentalCreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateWithoutStoreInput = {
    customer_id?: number
    first_name: string
    last_name: string
    email?: string | null
    address_id: number
    active?: boolean
    create_date: Date | string
    last_update?: Date | string | null
    payment?: paymentUncheckedCreateNestedManyWithoutCustomerInput
    rental?: rentalUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerCreateOrConnectWithoutStoreInput = {
    where: customerWhereUniqueInput
    create: XOR<customerCreateWithoutStoreInput, customerUncheckedCreateWithoutStoreInput>
  }

  export type customerCreateManyStoreInputEnvelope = {
    data: Enumerable<customerCreateManyStoreInput>
    skipDuplicates?: boolean
  }

  export type inventoryCreateWithoutStoreInput = {
    last_update?: Date | string
    film: filmCreateNestedOneWithoutInventoryInput
    rental?: rentalCreateNestedManyWithoutInventoryInput
  }

  export type inventoryUncheckedCreateWithoutStoreInput = {
    inventory_id?: number
    film_id: number
    last_update?: Date | string
    rental?: rentalUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type inventoryCreateOrConnectWithoutStoreInput = {
    where: inventoryWhereUniqueInput
    create: XOR<inventoryCreateWithoutStoreInput, inventoryUncheckedCreateWithoutStoreInput>
  }

  export type inventoryCreateManyStoreInputEnvelope = {
    data: Enumerable<inventoryCreateManyStoreInput>
    skipDuplicates?: boolean
  }

  export type staffCreateWithoutStore_staff_store_idTostoreInput = {
    first_name: string
    last_name: string
    picture?: Buffer | null
    email?: string | null
    active?: boolean
    username: string
    password?: string | null
    last_update?: Date | string
    payment?: paymentCreateNestedManyWithoutStaffInput
    rental?: rentalCreateNestedManyWithoutStaffInput
    address: addressCreateNestedOneWithoutStaffInput
    store_store_manager_staff_idTostaff?: storeCreateNestedOneWithoutStaff_store_manager_staff_idTostaffInput
  }

  export type staffUncheckedCreateWithoutStore_staff_store_idTostoreInput = {
    staff_id?: number
    first_name: string
    last_name: string
    address_id: number
    picture?: Buffer | null
    email?: string | null
    active?: boolean
    username: string
    password?: string | null
    last_update?: Date | string
    payment?: paymentUncheckedCreateNestedManyWithoutStaffInput
    rental?: rentalUncheckedCreateNestedManyWithoutStaffInput
    store_store_manager_staff_idTostaff?: storeUncheckedCreateNestedOneWithoutStaff_store_manager_staff_idTostaffInput
  }

  export type staffCreateOrConnectWithoutStore_staff_store_idTostoreInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutStore_staff_store_idTostoreInput, staffUncheckedCreateWithoutStore_staff_store_idTostoreInput>
  }

  export type staffCreateManyStore_staff_store_idTostoreInputEnvelope = {
    data: Enumerable<staffCreateManyStore_staff_store_idTostoreInput>
    skipDuplicates?: boolean
  }

  export type staffCreateWithoutStore_store_manager_staff_idTostaffInput = {
    first_name: string
    last_name: string
    picture?: Buffer | null
    email?: string | null
    active?: boolean
    username: string
    password?: string | null
    last_update?: Date | string
    payment?: paymentCreateNestedManyWithoutStaffInput
    rental?: rentalCreateNestedManyWithoutStaffInput
    address: addressCreateNestedOneWithoutStaffInput
    store_staff_store_idTostore: storeCreateNestedOneWithoutStaff_staff_store_idTostoreInput
  }

  export type staffUncheckedCreateWithoutStore_store_manager_staff_idTostaffInput = {
    staff_id?: number
    first_name: string
    last_name: string
    address_id: number
    picture?: Buffer | null
    email?: string | null
    store_id: number
    active?: boolean
    username: string
    password?: string | null
    last_update?: Date | string
    payment?: paymentUncheckedCreateNestedManyWithoutStaffInput
    rental?: rentalUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutStore_store_manager_staff_idTostaffInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutStore_store_manager_staff_idTostaffInput, staffUncheckedCreateWithoutStore_store_manager_staff_idTostaffInput>
  }

  export type customerUpsertWithWhereUniqueWithoutStoreInput = {
    where: customerWhereUniqueInput
    update: XOR<customerUpdateWithoutStoreInput, customerUncheckedUpdateWithoutStoreInput>
    create: XOR<customerCreateWithoutStoreInput, customerUncheckedCreateWithoutStoreInput>
  }

  export type customerUpdateWithWhereUniqueWithoutStoreInput = {
    where: customerWhereUniqueInput
    data: XOR<customerUpdateWithoutStoreInput, customerUncheckedUpdateWithoutStoreInput>
  }

  export type customerUpdateManyWithWhereWithoutStoreInput = {
    where: customerScalarWhereInput
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyWithoutCustomerInput>
  }

  export type inventoryUpsertWithWhereUniqueWithoutStoreInput = {
    where: inventoryWhereUniqueInput
    update: XOR<inventoryUpdateWithoutStoreInput, inventoryUncheckedUpdateWithoutStoreInput>
    create: XOR<inventoryCreateWithoutStoreInput, inventoryUncheckedCreateWithoutStoreInput>
  }

  export type inventoryUpdateWithWhereUniqueWithoutStoreInput = {
    where: inventoryWhereUniqueInput
    data: XOR<inventoryUpdateWithoutStoreInput, inventoryUncheckedUpdateWithoutStoreInput>
  }

  export type inventoryUpdateManyWithWhereWithoutStoreInput = {
    where: inventoryScalarWhereInput
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyWithoutInventoryInput>
  }

  export type staffUpsertWithWhereUniqueWithoutStore_staff_store_idTostoreInput = {
    where: staffWhereUniqueInput
    update: XOR<staffUpdateWithoutStore_staff_store_idTostoreInput, staffUncheckedUpdateWithoutStore_staff_store_idTostoreInput>
    create: XOR<staffCreateWithoutStore_staff_store_idTostoreInput, staffUncheckedCreateWithoutStore_staff_store_idTostoreInput>
  }

  export type staffUpdateWithWhereUniqueWithoutStore_staff_store_idTostoreInput = {
    where: staffWhereUniqueInput
    data: XOR<staffUpdateWithoutStore_staff_store_idTostoreInput, staffUncheckedUpdateWithoutStore_staff_store_idTostoreInput>
  }

  export type staffUpdateManyWithWhereWithoutStore_staff_store_idTostoreInput = {
    where: staffScalarWhereInput
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyWithoutStaff_staff_store_idTostoreInput>
  }

  export type addressUpdateWithoutStoreInput = {
    address?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    district?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: cityUpdateOneRequiredWithoutAddressNestedInput
    customer?: customerUpdateManyWithoutAddressNestedInput
    staff?: staffUpdateManyWithoutAddressNestedInput
  }

  export type addressUncheckedUpdateWithoutStoreInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    district?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUncheckedUpdateManyWithoutAddressNestedInput
    staff?: staffUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type staffUpsertWithoutStore_store_manager_staff_idTostaffInput = {
    update: XOR<staffUpdateWithoutStore_store_manager_staff_idTostaffInput, staffUncheckedUpdateWithoutStore_store_manager_staff_idTostaffInput>
    create: XOR<staffCreateWithoutStore_store_manager_staff_idTostaffInput, staffUncheckedCreateWithoutStore_store_manager_staff_idTostaffInput>
  }

  export type staffUpdateWithoutStore_store_manager_staff_idTostaffInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUpdateManyWithoutStaffNestedInput
    rental?: rentalUpdateManyWithoutStaffNestedInput
    address?: addressUpdateOneRequiredWithoutStaffNestedInput
    store_staff_store_idTostore?: storeUpdateOneRequiredWithoutStaff_staff_store_idTostoreNestedInput
  }

  export type staffUncheckedUpdateWithoutStore_store_manager_staff_idTostaffInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    store_id?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUncheckedUpdateManyWithoutStaffNestedInput
    rental?: rentalUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type film_actorCreateManyActorInput = {
    film_id: number
    last_update?: Date | string
  }

  export type film_actorUpdateWithoutActorInput = {
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    film?: filmUpdateOneRequiredWithoutFilm_actorNestedInput
  }

  export type film_actorUncheckedUpdateWithoutActorInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type film_actorUncheckedUpdateManyWithoutFilm_actorInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customerUpdateWithoutAddressInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    store?: storeUpdateOneRequiredWithoutCustomerNestedInput
    payment?: paymentUpdateManyWithoutCustomerNestedInput
    rental?: rentalUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateWithoutAddressInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment?: paymentUncheckedUpdateManyWithoutCustomerNestedInput
    rental?: rentalUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type customerCreateManyAddressInput = {
    customer_id?: number
    store_id: number
    first_name: string
    last_name: string
    email?: string | null
    active?: boolean
    create_date: Date | string
    last_update?: Date | string | null
  }

  export type customerUncheckedUpdateManyWithoutCustomerInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type staffUpdateWithoutAddressInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUpdateManyWithoutStaffNestedInput
    rental?: rentalUpdateManyWithoutStaffNestedInput
    store_staff_store_idTostore?: storeUpdateOneRequiredWithoutStaff_staff_store_idTostoreNestedInput
    store_store_manager_staff_idTostaff?: storeUpdateOneWithoutStaff_store_manager_staff_idTostaffNestedInput
  }

  export type staffUncheckedUpdateWithoutAddressInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    store_id?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUncheckedUpdateManyWithoutStaffNestedInput
    rental?: rentalUncheckedUpdateManyWithoutStaffNestedInput
    store_store_manager_staff_idTostaff?: storeUncheckedUpdateOneWithoutStaff_store_manager_staff_idTostaffNestedInput
  }

  export type staffCreateManyAddressInput = {
    staff_id?: number
    first_name: string
    last_name: string
    picture?: Buffer | null
    email?: string | null
    store_id: number
    active?: boolean
    username: string
    password?: string | null
    last_update?: Date | string
  }

  export type staffUncheckedUpdateManyWithoutStaffInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    store_id?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type storeUpdateWithoutAddressInput = {
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUpdateManyWithoutStoreNestedInput
    inventory?: inventoryUpdateManyWithoutStoreNestedInput
    staff_staff_store_idTostore?: staffUpdateManyWithoutStore_staff_store_idTostoreNestedInput
    staff_store_manager_staff_idTostaff?: staffUpdateOneRequiredWithoutStore_store_manager_staff_idTostaffNestedInput
  }

  export type storeUncheckedUpdateWithoutAddressInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    manager_staff_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUncheckedUpdateManyWithoutStoreNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutStoreNestedInput
    staff_staff_store_idTostore?: staffUncheckedUpdateManyWithoutStore_staff_store_idTostoreNestedInput
  }

  export type storeCreateManyAddressInput = {
    store_id?: number
    manager_staff_id: number
    last_update?: Date | string
  }

  export type storeUncheckedUpdateManyWithoutStoreInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    manager_staff_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type film_categoryCreateManyCategoryInput = {
    film_id: number
    last_update?: Date | string
  }

  export type film_categoryUpdateWithoutCategoryInput = {
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    film?: filmUpdateOneRequiredWithoutFilm_categoryNestedInput
  }

  export type film_categoryUncheckedUpdateWithoutCategoryInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type film_categoryUncheckedUpdateManyWithoutFilm_categoryInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressUpdateWithoutCityInput = {
    address?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    district?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUpdateManyWithoutAddressNestedInput
    staff?: staffUpdateManyWithoutAddressNestedInput
    store?: storeUpdateManyWithoutAddressNestedInput
  }

  export type addressUncheckedUpdateWithoutCityInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    district?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUncheckedUpdateManyWithoutAddressNestedInput
    staff?: staffUncheckedUpdateManyWithoutAddressNestedInput
    store?: storeUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type addressUncheckedUpdateManyWithoutAddressInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    district?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cityCreateManyCountryInput = {
    city_id?: number
    city: string
    last_update?: Date | string
  }

  export type cityUpdateWithoutCountryInput = {
    city?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: addressUpdateManyWithoutCityNestedInput
  }

  export type cityUncheckedUpdateWithoutCountryInput = {
    city_id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: addressUncheckedUpdateManyWithoutCityNestedInput
  }

  export type cityUncheckedUpdateManyWithoutCityInput = {
    city_id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentCreateManyCustomerInput = {
    payment_id?: number
    staff_id: number
    rental_id?: number | null
    amount: Decimal | DecimalJsLike | number | string
    payment_date: Date | string
    last_update?: Date | string | null
  }

  export type rentalCreateManyCustomerInput = {
    rental_id?: number
    rental_date: Date | string
    inventory_id: number
    return_date?: Date | string | null
    staff_id: number
    last_update?: Date | string
  }

  export type paymentUpdateWithoutCustomerInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rental?: rentalUpdateOneWithoutPaymentNestedInput
    staff?: staffUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type paymentUncheckedUpdateWithoutCustomerInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    rental_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentUncheckedUpdateManyWithoutPaymentInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    rental_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rentalUpdateWithoutCustomerInput = {
    rental_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUpdateManyWithoutRentalNestedInput
    inventory?: inventoryUpdateOneRequiredWithoutRentalNestedInput
    staff?: staffUpdateOneRequiredWithoutRentalNestedInput
  }

  export type rentalUncheckedUpdateWithoutCustomerInput = {
    rental_id?: IntFieldUpdateOperationsInput | number
    rental_date?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory_id?: IntFieldUpdateOperationsInput | number
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUncheckedUpdateManyWithoutRentalNestedInput
  }

  export type rentalUncheckedUpdateManyWithoutRentalInput = {
    rental_id?: IntFieldUpdateOperationsInput | number
    rental_date?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory_id?: IntFieldUpdateOperationsInput | number
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type film_actorCreateManyFilmInput = {
    actor_id: number
    last_update?: Date | string
  }

  export type film_categoryCreateManyFilmInput = {
    category_id: number
    last_update?: Date | string
  }

  export type inventoryCreateManyFilmInput = {
    inventory_id?: number
    store_id: number
    last_update?: Date | string
  }

  export type film_actorUpdateWithoutFilmInput = {
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: actorUpdateOneRequiredWithoutFilm_actorNestedInput
  }

  export type film_actorUncheckedUpdateWithoutFilmInput = {
    actor_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type film_categoryUpdateWithoutFilmInput = {
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoryUpdateOneRequiredWithoutFilm_categoryNestedInput
  }

  export type film_categoryUncheckedUpdateWithoutFilmInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inventoryUpdateWithoutFilmInput = {
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: storeUpdateOneRequiredWithoutInventoryNestedInput
    rental?: rentalUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateWithoutFilmInput = {
    inventory_id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    rental?: rentalUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateManyWithoutInventoryInput = {
    inventory_id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rentalCreateManyInventoryInput = {
    rental_id?: number
    rental_date: Date | string
    customer_id: number
    return_date?: Date | string | null
    staff_id: number
    last_update?: Date | string
  }

  export type rentalUpdateWithoutInventoryInput = {
    rental_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUpdateManyWithoutRentalNestedInput
    customer?: customerUpdateOneRequiredWithoutRentalNestedInput
    staff?: staffUpdateOneRequiredWithoutRentalNestedInput
  }

  export type rentalUncheckedUpdateWithoutInventoryInput = {
    rental_id?: IntFieldUpdateOperationsInput | number
    rental_date?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: IntFieldUpdateOperationsInput | number
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUncheckedUpdateManyWithoutRentalNestedInput
  }

  export type filmCreateManyLanguage_film_language_idTolanguageInput = {
    film_id?: number
    title: string
    description?: string | null
    release_year?: number | null
    original_language_id?: number | null
    rental_duration?: number
    rental_rate?: Decimal | DecimalJsLike | number | string
    length?: number | null
    replacement_cost?: Decimal | DecimalJsLike | number | string
    rating?: film_rating | null
    special_features?: string | null
    last_update?: Date | string
  }

  export type filmCreateManyLanguage_film_original_language_idTolanguageInput = {
    film_id?: number
    title: string
    description?: string | null
    release_year?: number | null
    language_id: number
    rental_duration?: number
    rental_rate?: Decimal | DecimalJsLike | number | string
    length?: number | null
    replacement_cost?: Decimal | DecimalJsLike | number | string
    rating?: film_rating | null
    special_features?: string | null
    last_update?: Date | string
  }

  export type filmUpdateWithoutLanguage_film_language_idTolanguageInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    rental_duration?: IntFieldUpdateOperationsInput | number
    rental_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: NullableIntFieldUpdateOperationsInput | number | null
    replacement_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: NullableEnumfilm_ratingFieldUpdateOperationsInput | film_rating | null
    special_features?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    language_film_original_language_idTolanguage?: languageUpdateOneWithoutFilm_film_original_language_idTolanguageNestedInput
    film_actor?: film_actorUpdateManyWithoutFilmNestedInput
    film_category?: film_categoryUpdateManyWithoutFilmNestedInput
    inventory?: inventoryUpdateManyWithoutFilmNestedInput
  }

  export type filmUncheckedUpdateWithoutLanguage_film_language_idTolanguageInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    original_language_id?: NullableIntFieldUpdateOperationsInput | number | null
    rental_duration?: IntFieldUpdateOperationsInput | number
    rental_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: NullableIntFieldUpdateOperationsInput | number | null
    replacement_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: NullableEnumfilm_ratingFieldUpdateOperationsInput | film_rating | null
    special_features?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    film_actor?: film_actorUncheckedUpdateManyWithoutFilmNestedInput
    film_category?: film_categoryUncheckedUpdateManyWithoutFilmNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutFilmNestedInput
  }

  export type filmUncheckedUpdateManyWithoutFilm_film_language_idTolanguageInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    original_language_id?: NullableIntFieldUpdateOperationsInput | number | null
    rental_duration?: IntFieldUpdateOperationsInput | number
    rental_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: NullableIntFieldUpdateOperationsInput | number | null
    replacement_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: NullableEnumfilm_ratingFieldUpdateOperationsInput | film_rating | null
    special_features?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type filmUpdateWithoutLanguage_film_original_language_idTolanguageInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    rental_duration?: IntFieldUpdateOperationsInput | number
    rental_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: NullableIntFieldUpdateOperationsInput | number | null
    replacement_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: NullableEnumfilm_ratingFieldUpdateOperationsInput | film_rating | null
    special_features?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    language_film_language_idTolanguage?: languageUpdateOneRequiredWithoutFilm_film_language_idTolanguageNestedInput
    film_actor?: film_actorUpdateManyWithoutFilmNestedInput
    film_category?: film_categoryUpdateManyWithoutFilmNestedInput
    inventory?: inventoryUpdateManyWithoutFilmNestedInput
  }

  export type filmUncheckedUpdateWithoutLanguage_film_original_language_idTolanguageInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    language_id?: IntFieldUpdateOperationsInput | number
    rental_duration?: IntFieldUpdateOperationsInput | number
    rental_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: NullableIntFieldUpdateOperationsInput | number | null
    replacement_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: NullableEnumfilm_ratingFieldUpdateOperationsInput | film_rating | null
    special_features?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    film_actor?: film_actorUncheckedUpdateManyWithoutFilmNestedInput
    film_category?: film_categoryUncheckedUpdateManyWithoutFilmNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutFilmNestedInput
  }

  export type filmUncheckedUpdateManyWithoutFilm_film_original_language_idTolanguageInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    language_id?: IntFieldUpdateOperationsInput | number
    rental_duration?: IntFieldUpdateOperationsInput | number
    rental_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: NullableIntFieldUpdateOperationsInput | number | null
    replacement_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: NullableEnumfilm_ratingFieldUpdateOperationsInput | film_rating | null
    special_features?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentCreateManyRentalInput = {
    payment_id?: number
    customer_id: number
    staff_id: number
    amount: Decimal | DecimalJsLike | number | string
    payment_date: Date | string
    last_update?: Date | string | null
  }

  export type paymentUpdateWithoutRentalInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: customerUpdateOneRequiredWithoutPaymentNestedInput
    staff?: staffUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type paymentUncheckedUpdateWithoutRentalInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentCreateManyStaffInput = {
    payment_id?: number
    customer_id: number
    rental_id?: number | null
    amount: Decimal | DecimalJsLike | number | string
    payment_date: Date | string
    last_update?: Date | string | null
  }

  export type rentalCreateManyStaffInput = {
    rental_id?: number
    rental_date: Date | string
    inventory_id: number
    customer_id: number
    return_date?: Date | string | null
    last_update?: Date | string
  }

  export type paymentUpdateWithoutStaffInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: customerUpdateOneRequiredWithoutPaymentNestedInput
    rental?: rentalUpdateOneWithoutPaymentNestedInput
  }

  export type paymentUncheckedUpdateWithoutStaffInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    rental_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rentalUpdateWithoutStaffInput = {
    rental_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUpdateManyWithoutRentalNestedInput
    customer?: customerUpdateOneRequiredWithoutRentalNestedInput
    inventory?: inventoryUpdateOneRequiredWithoutRentalNestedInput
  }

  export type rentalUncheckedUpdateWithoutStaffInput = {
    rental_id?: IntFieldUpdateOperationsInput | number
    rental_date?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUncheckedUpdateManyWithoutRentalNestedInput
  }

  export type customerCreateManyStoreInput = {
    customer_id?: number
    first_name: string
    last_name: string
    email?: string | null
    address_id: number
    active?: boolean
    create_date: Date | string
    last_update?: Date | string | null
  }

  export type inventoryCreateManyStoreInput = {
    inventory_id?: number
    film_id: number
    last_update?: Date | string
  }

  export type staffCreateManyStore_staff_store_idTostoreInput = {
    staff_id?: number
    first_name: string
    last_name: string
    address_id: number
    picture?: Buffer | null
    email?: string | null
    active?: boolean
    username: string
    password?: string | null
    last_update?: Date | string
  }

  export type customerUpdateWithoutStoreInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: addressUpdateOneRequiredWithoutCustomerNestedInput
    payment?: paymentUpdateManyWithoutCustomerNestedInput
    rental?: rentalUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateWithoutStoreInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment?: paymentUncheckedUpdateManyWithoutCustomerNestedInput
    rental?: rentalUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type inventoryUpdateWithoutStoreInput = {
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    film?: filmUpdateOneRequiredWithoutInventoryNestedInput
    rental?: rentalUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateWithoutStoreInput = {
    inventory_id?: IntFieldUpdateOperationsInput | number
    film_id?: IntFieldUpdateOperationsInput | number
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    rental?: rentalUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type staffUpdateWithoutStore_staff_store_idTostoreInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUpdateManyWithoutStaffNestedInput
    rental?: rentalUpdateManyWithoutStaffNestedInput
    address?: addressUpdateOneRequiredWithoutStaffNestedInput
    store_store_manager_staff_idTostaff?: storeUpdateOneWithoutStaff_store_manager_staff_idTostaffNestedInput
  }

  export type staffUncheckedUpdateWithoutStore_staff_store_idTostoreInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUncheckedUpdateManyWithoutStaffNestedInput
    rental?: rentalUncheckedUpdateManyWithoutStaffNestedInput
    store_store_manager_staff_idTostaff?: storeUncheckedUpdateOneWithoutStaff_store_manager_staff_idTostaffNestedInput
  }

  export type staffUncheckedUpdateManyWithoutStaff_staff_store_idTostoreInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}