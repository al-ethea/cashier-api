
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cashier
 * 
 */
export type Cashier = $Result.DefaultSelection<Prisma.$CashierPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model CashierBalanceHistory
 * 
 */
export type CashierBalanceHistory = $Result.DefaultSelection<Prisma.$CashierBalanceHistoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductCategory
 * 
 */
export type ProductCategory = $Result.DefaultSelection<Prisma.$ProductCategoryPayload>
/**
 * Model Cart
 * 
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>
/**
 * Model CartItem
 * 
 */
export type CartItem = $Result.DefaultSelection<Prisma.$CartItemPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model TransactionItem
 * 
 */
export type TransactionItem = $Result.DefaultSelection<Prisma.$TransactionItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ShiftSession: {
  SHIFT1: 'SHIFT1',
  SHIFT2: 'SHIFT2'
};

export type ShiftSession = (typeof ShiftSession)[keyof typeof ShiftSession]


export const Gender: {
  Male: 'Male',
  Female: 'Female'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const CartStatus: {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type CartStatus = (typeof CartStatus)[keyof typeof CartStatus]


export const PaymentType: {
  CASH: 'CASH',
  DEBIT: 'DEBIT'
};

export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType]

}

export type ShiftSession = $Enums.ShiftSession

export const ShiftSession: typeof $Enums.ShiftSession

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type CartStatus = $Enums.CartStatus

export const CartStatus: typeof $Enums.CartStatus

export type PaymentType = $Enums.PaymentType

export const PaymentType: typeof $Enums.PaymentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cashiers
 * const cashiers = await prisma.cashier.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cashiers
   * const cashiers = await prisma.cashier.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cashier`: Exposes CRUD operations for the **Cashier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cashiers
    * const cashiers = await prisma.cashier.findMany()
    * ```
    */
  get cashier(): Prisma.CashierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cashierBalanceHistory`: Exposes CRUD operations for the **CashierBalanceHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CashierBalanceHistories
    * const cashierBalanceHistories = await prisma.cashierBalanceHistory.findMany()
    * ```
    */
  get cashierBalanceHistory(): Prisma.CashierBalanceHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productCategory`: Exposes CRUD operations for the **ProductCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductCategories
    * const productCategories = await prisma.productCategory.findMany()
    * ```
    */
  get productCategory(): Prisma.ProductCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItem.findMany()
    * ```
    */
  get cartItem(): Prisma.CartItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionItem`: Exposes CRUD operations for the **TransactionItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionItems
    * const transactionItems = await prisma.transactionItem.findMany()
    * ```
    */
  get transactionItem(): Prisma.TransactionItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cashier: 'Cashier',
    Admin: 'Admin',
    CashierBalanceHistory: 'CashierBalanceHistory',
    Product: 'Product',
    ProductCategory: 'ProductCategory',
    Cart: 'Cart',
    CartItem: 'CartItem',
    Transaction: 'Transaction',
    TransactionItem: 'TransactionItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cashier" | "admin" | "cashierBalanceHistory" | "product" | "productCategory" | "cart" | "cartItem" | "transaction" | "transactionItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cashier: {
        payload: Prisma.$CashierPayload<ExtArgs>
        fields: Prisma.CashierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CashierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CashierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashierPayload>
          }
          findFirst: {
            args: Prisma.CashierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CashierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashierPayload>
          }
          findMany: {
            args: Prisma.CashierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashierPayload>[]
          }
          create: {
            args: Prisma.CashierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashierPayload>
          }
          createMany: {
            args: Prisma.CashierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CashierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashierPayload>[]
          }
          delete: {
            args: Prisma.CashierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashierPayload>
          }
          update: {
            args: Prisma.CashierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashierPayload>
          }
          deleteMany: {
            args: Prisma.CashierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CashierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CashierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashierPayload>[]
          }
          upsert: {
            args: Prisma.CashierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashierPayload>
          }
          aggregate: {
            args: Prisma.CashierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCashier>
          }
          groupBy: {
            args: Prisma.CashierGroupByArgs<ExtArgs>
            result: $Utils.Optional<CashierGroupByOutputType>[]
          }
          count: {
            args: Prisma.CashierCountArgs<ExtArgs>
            result: $Utils.Optional<CashierCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      CashierBalanceHistory: {
        payload: Prisma.$CashierBalanceHistoryPayload<ExtArgs>
        fields: Prisma.CashierBalanceHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CashierBalanceHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashierBalanceHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CashierBalanceHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashierBalanceHistoryPayload>
          }
          findFirst: {
            args: Prisma.CashierBalanceHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashierBalanceHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CashierBalanceHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashierBalanceHistoryPayload>
          }
          findMany: {
            args: Prisma.CashierBalanceHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashierBalanceHistoryPayload>[]
          }
          create: {
            args: Prisma.CashierBalanceHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashierBalanceHistoryPayload>
          }
          createMany: {
            args: Prisma.CashierBalanceHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CashierBalanceHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashierBalanceHistoryPayload>[]
          }
          delete: {
            args: Prisma.CashierBalanceHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashierBalanceHistoryPayload>
          }
          update: {
            args: Prisma.CashierBalanceHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashierBalanceHistoryPayload>
          }
          deleteMany: {
            args: Prisma.CashierBalanceHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CashierBalanceHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CashierBalanceHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashierBalanceHistoryPayload>[]
          }
          upsert: {
            args: Prisma.CashierBalanceHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashierBalanceHistoryPayload>
          }
          aggregate: {
            args: Prisma.CashierBalanceHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCashierBalanceHistory>
          }
          groupBy: {
            args: Prisma.CashierBalanceHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CashierBalanceHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CashierBalanceHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<CashierBalanceHistoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductCategory: {
        payload: Prisma.$ProductCategoryPayload<ExtArgs>
        fields: Prisma.ProductCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          findFirst: {
            args: Prisma.ProductCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          findMany: {
            args: Prisma.ProductCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[]
          }
          create: {
            args: Prisma.ProductCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          createMany: {
            args: Prisma.ProductCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[]
          }
          delete: {
            args: Prisma.ProductCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          update: {
            args: Prisma.ProductCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ProductCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[]
          }
          upsert: {
            args: Prisma.ProductCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          aggregate: {
            args: Prisma.ProductCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductCategory>
          }
          groupBy: {
            args: Prisma.ProductCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCategoryCountAggregateOutputType> | number
          }
        }
      }
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>
        fields: Prisma.CartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      CartItem: {
        payload: Prisma.$CartItemPayload<ExtArgs>
        fields: Prisma.CartItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findFirst: {
            args: Prisma.CartItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findMany: {
            args: Prisma.CartItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          create: {
            args: Prisma.CartItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          createMany: {
            args: Prisma.CartItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          delete: {
            args: Prisma.CartItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          update: {
            args: Prisma.CartItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          deleteMany: {
            args: Prisma.CartItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          upsert: {
            args: Prisma.CartItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItem>
          }
          groupBy: {
            args: Prisma.CartItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      TransactionItem: {
        payload: Prisma.$TransactionItemPayload<ExtArgs>
        fields: Prisma.TransactionItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionItemPayload>
          }
          findFirst: {
            args: Prisma.TransactionItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionItemPayload>
          }
          findMany: {
            args: Prisma.TransactionItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionItemPayload>[]
          }
          create: {
            args: Prisma.TransactionItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionItemPayload>
          }
          createMany: {
            args: Prisma.TransactionItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionItemPayload>[]
          }
          delete: {
            args: Prisma.TransactionItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionItemPayload>
          }
          update: {
            args: Prisma.TransactionItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionItemPayload>
          }
          deleteMany: {
            args: Prisma.TransactionItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionItemPayload>[]
          }
          upsert: {
            args: Prisma.TransactionItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionItemPayload>
          }
          aggregate: {
            args: Prisma.TransactionItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionItem>
          }
          groupBy: {
            args: Prisma.TransactionItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionItemCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cashier?: CashierOmit
    admin?: AdminOmit
    cashierBalanceHistory?: CashierBalanceHistoryOmit
    product?: ProductOmit
    productCategory?: ProductCategoryOmit
    cart?: CartOmit
    cartItem?: CartItemOmit
    transaction?: TransactionOmit
    transactionItem?: TransactionItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CashierCountOutputType
   */

  export type CashierCountOutputType = {
    cashierBalanceHistory: number
    cart: number
    transaction: number
  }

  export type CashierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cashierBalanceHistory?: boolean | CashierCountOutputTypeCountCashierBalanceHistoryArgs
    cart?: boolean | CashierCountOutputTypeCountCartArgs
    transaction?: boolean | CashierCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * CashierCountOutputType without action
   */
  export type CashierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashierCountOutputType
     */
    select?: CashierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CashierCountOutputType without action
   */
  export type CashierCountOutputTypeCountCashierBalanceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashierBalanceHistoryWhereInput
  }

  /**
   * CashierCountOutputType without action
   */
  export type CashierCountOutputTypeCountCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
  }

  /**
   * CashierCountOutputType without action
   */
  export type CashierCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type CashierBalanceHistoryCountOutputType
   */

  export type CashierBalanceHistoryCountOutputType = {
    transaction: number
  }

  export type CashierBalanceHistoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | CashierBalanceHistoryCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * CashierBalanceHistoryCountOutputType without action
   */
  export type CashierBalanceHistoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashierBalanceHistoryCountOutputType
     */
    select?: CashierBalanceHistoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CashierBalanceHistoryCountOutputType without action
   */
  export type CashierBalanceHistoryCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    cartItems: number
    transactionItems: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartItems?: boolean | ProductCountOutputTypeCountCartItemsArgs
    transactionItems?: boolean | ProductCountOutputTypeCountTransactionItemsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountTransactionItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionItemWhereInput
  }


  /**
   * Count Type ProductCategoryCountOutputType
   */

  export type ProductCategoryCountOutputType = {
    product: number
  }

  export type ProductCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductCategoryCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * ProductCategoryCountOutputType without action
   */
  export type ProductCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategoryCountOutputType
     */
    select?: ProductCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCategoryCountOutputType without action
   */
  export type ProductCategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    cartItems: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartItems?: boolean | CartCountOutputTypeCountCartItemsArgs
  }

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountCartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }


  /**
   * Count Type TransactionCountOutputType
   */

  export type TransactionCountOutputType = {
    transactionItems: number
  }

  export type TransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactionItems?: boolean | TransactionCountOutputTypeCountTransactionItemsArgs
  }

  // Custom InputTypes
  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     */
    select?: TransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountTransactionItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cashier
   */

  export type AggregateCashier = {
    _count: CashierCountAggregateOutputType | null
    _min: CashierMinAggregateOutputType | null
    _max: CashierMaxAggregateOutputType | null
  }

  export type CashierMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    phoneNumber: string | null
    gender: $Enums.Gender | null
    isEmailVerified: boolean | null
    avatarImgUrl: string | null
    cldPublicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    shift: $Enums.ShiftSession | null
  }

  export type CashierMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    phoneNumber: string | null
    gender: $Enums.Gender | null
    isEmailVerified: boolean | null
    avatarImgUrl: string | null
    cldPublicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    shift: $Enums.ShiftSession | null
  }

  export type CashierCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    phoneNumber: number
    gender: number
    isEmailVerified: number
    avatarImgUrl: number
    cldPublicId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    shift: number
    _all: number
  }


  export type CashierMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phoneNumber?: true
    gender?: true
    isEmailVerified?: true
    avatarImgUrl?: true
    cldPublicId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    shift?: true
  }

  export type CashierMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phoneNumber?: true
    gender?: true
    isEmailVerified?: true
    avatarImgUrl?: true
    cldPublicId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    shift?: true
  }

  export type CashierCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phoneNumber?: true
    gender?: true
    isEmailVerified?: true
    avatarImgUrl?: true
    cldPublicId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    shift?: true
    _all?: true
  }

  export type CashierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cashier to aggregate.
     */
    where?: CashierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cashiers to fetch.
     */
    orderBy?: CashierOrderByWithRelationInput | CashierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CashierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cashiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cashiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cashiers
    **/
    _count?: true | CashierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CashierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CashierMaxAggregateInputType
  }

  export type GetCashierAggregateType<T extends CashierAggregateArgs> = {
        [P in keyof T & keyof AggregateCashier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCashier[P]>
      : GetScalarType<T[P], AggregateCashier[P]>
  }




  export type CashierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashierWhereInput
    orderBy?: CashierOrderByWithAggregationInput | CashierOrderByWithAggregationInput[]
    by: CashierScalarFieldEnum[] | CashierScalarFieldEnum
    having?: CashierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CashierCountAggregateInputType | true
    _min?: CashierMinAggregateInputType
    _max?: CashierMaxAggregateInputType
  }

  export type CashierGroupByOutputType = {
    id: string
    firstName: string
    lastName: string | null
    email: string
    password: string
    phoneNumber: string | null
    gender: $Enums.Gender | null
    isEmailVerified: boolean
    avatarImgUrl: string | null
    cldPublicId: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    shift: $Enums.ShiftSession
    _count: CashierCountAggregateOutputType | null
    _min: CashierMinAggregateOutputType | null
    _max: CashierMaxAggregateOutputType | null
  }

  type GetCashierGroupByPayload<T extends CashierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CashierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CashierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CashierGroupByOutputType[P]>
            : GetScalarType<T[P], CashierGroupByOutputType[P]>
        }
      >
    >


  export type CashierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    gender?: boolean
    isEmailVerified?: boolean
    avatarImgUrl?: boolean
    cldPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    shift?: boolean
    cashierBalanceHistory?: boolean | Cashier$cashierBalanceHistoryArgs<ExtArgs>
    cart?: boolean | Cashier$cartArgs<ExtArgs>
    transaction?: boolean | Cashier$transactionArgs<ExtArgs>
    _count?: boolean | CashierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashier"]>

  export type CashierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    gender?: boolean
    isEmailVerified?: boolean
    avatarImgUrl?: boolean
    cldPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    shift?: boolean
  }, ExtArgs["result"]["cashier"]>

  export type CashierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    gender?: boolean
    isEmailVerified?: boolean
    avatarImgUrl?: boolean
    cldPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    shift?: boolean
  }, ExtArgs["result"]["cashier"]>

  export type CashierSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    gender?: boolean
    isEmailVerified?: boolean
    avatarImgUrl?: boolean
    cldPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    shift?: boolean
  }

  export type CashierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "phoneNumber" | "gender" | "isEmailVerified" | "avatarImgUrl" | "cldPublicId" | "createdAt" | "updatedAt" | "deletedAt" | "shift", ExtArgs["result"]["cashier"]>
  export type CashierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cashierBalanceHistory?: boolean | Cashier$cashierBalanceHistoryArgs<ExtArgs>
    cart?: boolean | Cashier$cartArgs<ExtArgs>
    transaction?: boolean | Cashier$transactionArgs<ExtArgs>
    _count?: boolean | CashierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CashierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CashierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CashierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cashier"
    objects: {
      cashierBalanceHistory: Prisma.$CashierBalanceHistoryPayload<ExtArgs>[]
      cart: Prisma.$CartPayload<ExtArgs>[]
      transaction: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string | null
      email: string
      password: string
      phoneNumber: string | null
      gender: $Enums.Gender | null
      isEmailVerified: boolean
      avatarImgUrl: string | null
      cldPublicId: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      shift: $Enums.ShiftSession
    }, ExtArgs["result"]["cashier"]>
    composites: {}
  }

  type CashierGetPayload<S extends boolean | null | undefined | CashierDefaultArgs> = $Result.GetResult<Prisma.$CashierPayload, S>

  type CashierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CashierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CashierCountAggregateInputType | true
    }

  export interface CashierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cashier'], meta: { name: 'Cashier' } }
    /**
     * Find zero or one Cashier that matches the filter.
     * @param {CashierFindUniqueArgs} args - Arguments to find a Cashier
     * @example
     * // Get one Cashier
     * const cashier = await prisma.cashier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CashierFindUniqueArgs>(args: SelectSubset<T, CashierFindUniqueArgs<ExtArgs>>): Prisma__CashierClient<$Result.GetResult<Prisma.$CashierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cashier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CashierFindUniqueOrThrowArgs} args - Arguments to find a Cashier
     * @example
     * // Get one Cashier
     * const cashier = await prisma.cashier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CashierFindUniqueOrThrowArgs>(args: SelectSubset<T, CashierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CashierClient<$Result.GetResult<Prisma.$CashierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cashier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashierFindFirstArgs} args - Arguments to find a Cashier
     * @example
     * // Get one Cashier
     * const cashier = await prisma.cashier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CashierFindFirstArgs>(args?: SelectSubset<T, CashierFindFirstArgs<ExtArgs>>): Prisma__CashierClient<$Result.GetResult<Prisma.$CashierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cashier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashierFindFirstOrThrowArgs} args - Arguments to find a Cashier
     * @example
     * // Get one Cashier
     * const cashier = await prisma.cashier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CashierFindFirstOrThrowArgs>(args?: SelectSubset<T, CashierFindFirstOrThrowArgs<ExtArgs>>): Prisma__CashierClient<$Result.GetResult<Prisma.$CashierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cashiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cashiers
     * const cashiers = await prisma.cashier.findMany()
     * 
     * // Get first 10 Cashiers
     * const cashiers = await prisma.cashier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cashierWithIdOnly = await prisma.cashier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CashierFindManyArgs>(args?: SelectSubset<T, CashierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cashier.
     * @param {CashierCreateArgs} args - Arguments to create a Cashier.
     * @example
     * // Create one Cashier
     * const Cashier = await prisma.cashier.create({
     *   data: {
     *     // ... data to create a Cashier
     *   }
     * })
     * 
     */
    create<T extends CashierCreateArgs>(args: SelectSubset<T, CashierCreateArgs<ExtArgs>>): Prisma__CashierClient<$Result.GetResult<Prisma.$CashierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cashiers.
     * @param {CashierCreateManyArgs} args - Arguments to create many Cashiers.
     * @example
     * // Create many Cashiers
     * const cashier = await prisma.cashier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CashierCreateManyArgs>(args?: SelectSubset<T, CashierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cashiers and returns the data saved in the database.
     * @param {CashierCreateManyAndReturnArgs} args - Arguments to create many Cashiers.
     * @example
     * // Create many Cashiers
     * const cashier = await prisma.cashier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cashiers and only return the `id`
     * const cashierWithIdOnly = await prisma.cashier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CashierCreateManyAndReturnArgs>(args?: SelectSubset<T, CashierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cashier.
     * @param {CashierDeleteArgs} args - Arguments to delete one Cashier.
     * @example
     * // Delete one Cashier
     * const Cashier = await prisma.cashier.delete({
     *   where: {
     *     // ... filter to delete one Cashier
     *   }
     * })
     * 
     */
    delete<T extends CashierDeleteArgs>(args: SelectSubset<T, CashierDeleteArgs<ExtArgs>>): Prisma__CashierClient<$Result.GetResult<Prisma.$CashierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cashier.
     * @param {CashierUpdateArgs} args - Arguments to update one Cashier.
     * @example
     * // Update one Cashier
     * const cashier = await prisma.cashier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CashierUpdateArgs>(args: SelectSubset<T, CashierUpdateArgs<ExtArgs>>): Prisma__CashierClient<$Result.GetResult<Prisma.$CashierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cashiers.
     * @param {CashierDeleteManyArgs} args - Arguments to filter Cashiers to delete.
     * @example
     * // Delete a few Cashiers
     * const { count } = await prisma.cashier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CashierDeleteManyArgs>(args?: SelectSubset<T, CashierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cashiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cashiers
     * const cashier = await prisma.cashier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CashierUpdateManyArgs>(args: SelectSubset<T, CashierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cashiers and returns the data updated in the database.
     * @param {CashierUpdateManyAndReturnArgs} args - Arguments to update many Cashiers.
     * @example
     * // Update many Cashiers
     * const cashier = await prisma.cashier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cashiers and only return the `id`
     * const cashierWithIdOnly = await prisma.cashier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CashierUpdateManyAndReturnArgs>(args: SelectSubset<T, CashierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cashier.
     * @param {CashierUpsertArgs} args - Arguments to update or create a Cashier.
     * @example
     * // Update or create a Cashier
     * const cashier = await prisma.cashier.upsert({
     *   create: {
     *     // ... data to create a Cashier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cashier we want to update
     *   }
     * })
     */
    upsert<T extends CashierUpsertArgs>(args: SelectSubset<T, CashierUpsertArgs<ExtArgs>>): Prisma__CashierClient<$Result.GetResult<Prisma.$CashierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cashiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashierCountArgs} args - Arguments to filter Cashiers to count.
     * @example
     * // Count the number of Cashiers
     * const count = await prisma.cashier.count({
     *   where: {
     *     // ... the filter for the Cashiers we want to count
     *   }
     * })
    **/
    count<T extends CashierCountArgs>(
      args?: Subset<T, CashierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CashierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cashier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CashierAggregateArgs>(args: Subset<T, CashierAggregateArgs>): Prisma.PrismaPromise<GetCashierAggregateType<T>>

    /**
     * Group by Cashier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashierGroupByArgs} args - Group by arguments.
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
      T extends CashierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CashierGroupByArgs['orderBy'] }
        : { orderBy?: CashierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CashierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCashierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cashier model
   */
  readonly fields: CashierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cashier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CashierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cashierBalanceHistory<T extends Cashier$cashierBalanceHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Cashier$cashierBalanceHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashierBalanceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cart<T extends Cashier$cartArgs<ExtArgs> = {}>(args?: Subset<T, Cashier$cartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transaction<T extends Cashier$transactionArgs<ExtArgs> = {}>(args?: Subset<T, Cashier$transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cashier model
   */
  interface CashierFieldRefs {
    readonly id: FieldRef<"Cashier", 'String'>
    readonly firstName: FieldRef<"Cashier", 'String'>
    readonly lastName: FieldRef<"Cashier", 'String'>
    readonly email: FieldRef<"Cashier", 'String'>
    readonly password: FieldRef<"Cashier", 'String'>
    readonly phoneNumber: FieldRef<"Cashier", 'String'>
    readonly gender: FieldRef<"Cashier", 'Gender'>
    readonly isEmailVerified: FieldRef<"Cashier", 'Boolean'>
    readonly avatarImgUrl: FieldRef<"Cashier", 'String'>
    readonly cldPublicId: FieldRef<"Cashier", 'String'>
    readonly createdAt: FieldRef<"Cashier", 'DateTime'>
    readonly updatedAt: FieldRef<"Cashier", 'DateTime'>
    readonly deletedAt: FieldRef<"Cashier", 'DateTime'>
    readonly shift: FieldRef<"Cashier", 'ShiftSession'>
  }
    

  // Custom InputTypes
  /**
   * Cashier findUnique
   */
  export type CashierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cashier
     */
    select?: CashierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cashier
     */
    omit?: CashierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierInclude<ExtArgs> | null
    /**
     * Filter, which Cashier to fetch.
     */
    where: CashierWhereUniqueInput
  }

  /**
   * Cashier findUniqueOrThrow
   */
  export type CashierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cashier
     */
    select?: CashierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cashier
     */
    omit?: CashierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierInclude<ExtArgs> | null
    /**
     * Filter, which Cashier to fetch.
     */
    where: CashierWhereUniqueInput
  }

  /**
   * Cashier findFirst
   */
  export type CashierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cashier
     */
    select?: CashierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cashier
     */
    omit?: CashierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierInclude<ExtArgs> | null
    /**
     * Filter, which Cashier to fetch.
     */
    where?: CashierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cashiers to fetch.
     */
    orderBy?: CashierOrderByWithRelationInput | CashierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cashiers.
     */
    cursor?: CashierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cashiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cashiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cashiers.
     */
    distinct?: CashierScalarFieldEnum | CashierScalarFieldEnum[]
  }

  /**
   * Cashier findFirstOrThrow
   */
  export type CashierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cashier
     */
    select?: CashierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cashier
     */
    omit?: CashierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierInclude<ExtArgs> | null
    /**
     * Filter, which Cashier to fetch.
     */
    where?: CashierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cashiers to fetch.
     */
    orderBy?: CashierOrderByWithRelationInput | CashierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cashiers.
     */
    cursor?: CashierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cashiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cashiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cashiers.
     */
    distinct?: CashierScalarFieldEnum | CashierScalarFieldEnum[]
  }

  /**
   * Cashier findMany
   */
  export type CashierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cashier
     */
    select?: CashierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cashier
     */
    omit?: CashierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierInclude<ExtArgs> | null
    /**
     * Filter, which Cashiers to fetch.
     */
    where?: CashierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cashiers to fetch.
     */
    orderBy?: CashierOrderByWithRelationInput | CashierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cashiers.
     */
    cursor?: CashierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cashiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cashiers.
     */
    skip?: number
    distinct?: CashierScalarFieldEnum | CashierScalarFieldEnum[]
  }

  /**
   * Cashier create
   */
  export type CashierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cashier
     */
    select?: CashierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cashier
     */
    omit?: CashierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierInclude<ExtArgs> | null
    /**
     * The data needed to create a Cashier.
     */
    data: XOR<CashierCreateInput, CashierUncheckedCreateInput>
  }

  /**
   * Cashier createMany
   */
  export type CashierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cashiers.
     */
    data: CashierCreateManyInput | CashierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cashier createManyAndReturn
   */
  export type CashierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cashier
     */
    select?: CashierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cashier
     */
    omit?: CashierOmit<ExtArgs> | null
    /**
     * The data used to create many Cashiers.
     */
    data: CashierCreateManyInput | CashierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cashier update
   */
  export type CashierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cashier
     */
    select?: CashierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cashier
     */
    omit?: CashierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierInclude<ExtArgs> | null
    /**
     * The data needed to update a Cashier.
     */
    data: XOR<CashierUpdateInput, CashierUncheckedUpdateInput>
    /**
     * Choose, which Cashier to update.
     */
    where: CashierWhereUniqueInput
  }

  /**
   * Cashier updateMany
   */
  export type CashierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cashiers.
     */
    data: XOR<CashierUpdateManyMutationInput, CashierUncheckedUpdateManyInput>
    /**
     * Filter which Cashiers to update
     */
    where?: CashierWhereInput
    /**
     * Limit how many Cashiers to update.
     */
    limit?: number
  }

  /**
   * Cashier updateManyAndReturn
   */
  export type CashierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cashier
     */
    select?: CashierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cashier
     */
    omit?: CashierOmit<ExtArgs> | null
    /**
     * The data used to update Cashiers.
     */
    data: XOR<CashierUpdateManyMutationInput, CashierUncheckedUpdateManyInput>
    /**
     * Filter which Cashiers to update
     */
    where?: CashierWhereInput
    /**
     * Limit how many Cashiers to update.
     */
    limit?: number
  }

  /**
   * Cashier upsert
   */
  export type CashierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cashier
     */
    select?: CashierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cashier
     */
    omit?: CashierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierInclude<ExtArgs> | null
    /**
     * The filter to search for the Cashier to update in case it exists.
     */
    where: CashierWhereUniqueInput
    /**
     * In case the Cashier found by the `where` argument doesn't exist, create a new Cashier with this data.
     */
    create: XOR<CashierCreateInput, CashierUncheckedCreateInput>
    /**
     * In case the Cashier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CashierUpdateInput, CashierUncheckedUpdateInput>
  }

  /**
   * Cashier delete
   */
  export type CashierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cashier
     */
    select?: CashierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cashier
     */
    omit?: CashierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierInclude<ExtArgs> | null
    /**
     * Filter which Cashier to delete.
     */
    where: CashierWhereUniqueInput
  }

  /**
   * Cashier deleteMany
   */
  export type CashierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cashiers to delete
     */
    where?: CashierWhereInput
    /**
     * Limit how many Cashiers to delete.
     */
    limit?: number
  }

  /**
   * Cashier.cashierBalanceHistory
   */
  export type Cashier$cashierBalanceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashierBalanceHistory
     */
    select?: CashierBalanceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashierBalanceHistory
     */
    omit?: CashierBalanceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierBalanceHistoryInclude<ExtArgs> | null
    where?: CashierBalanceHistoryWhereInput
    orderBy?: CashierBalanceHistoryOrderByWithRelationInput | CashierBalanceHistoryOrderByWithRelationInput[]
    cursor?: CashierBalanceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CashierBalanceHistoryScalarFieldEnum | CashierBalanceHistoryScalarFieldEnum[]
  }

  /**
   * Cashier.cart
   */
  export type Cashier$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    cursor?: CartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cashier.transaction
   */
  export type Cashier$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Cashier without action
   */
  export type CashierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cashier
     */
    select?: CashierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cashier
     */
    omit?: CashierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    phoneNumber: string | null
    isEmailVerified: boolean | null
    avatarImgUrl: string | null
    cldPublicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    phoneNumber: string | null
    isEmailVerified: boolean | null
    avatarImgUrl: string | null
    cldPublicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    phoneNumber: number
    isEmailVerified: number
    avatarImgUrl: number
    cldPublicId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phoneNumber?: true
    isEmailVerified?: true
    avatarImgUrl?: true
    cldPublicId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phoneNumber?: true
    isEmailVerified?: true
    avatarImgUrl?: true
    cldPublicId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phoneNumber?: true
    isEmailVerified?: true
    avatarImgUrl?: true
    cldPublicId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    firstName: string
    lastName: string | null
    email: string
    password: string
    phoneNumber: string
    isEmailVerified: boolean
    avatarImgUrl: string | null
    cldPublicId: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    isEmailVerified?: boolean
    avatarImgUrl?: boolean
    cldPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    isEmailVerified?: boolean
    avatarImgUrl?: boolean
    cldPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    isEmailVerified?: boolean
    avatarImgUrl?: boolean
    cldPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    isEmailVerified?: boolean
    avatarImgUrl?: boolean
    cldPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "phoneNumber" | "isEmailVerified" | "avatarImgUrl" | "cldPublicId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string | null
      email: string
      password: string
      phoneNumber: string
      isEmailVerified: boolean
      avatarImgUrl: string | null
      cldPublicId: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly firstName: FieldRef<"Admin", 'String'>
    readonly lastName: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly phoneNumber: FieldRef<"Admin", 'String'>
    readonly isEmailVerified: FieldRef<"Admin", 'Boolean'>
    readonly avatarImgUrl: FieldRef<"Admin", 'String'>
    readonly cldPublicId: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
    readonly deletedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model CashierBalanceHistory
   */

  export type AggregateCashierBalanceHistory = {
    _count: CashierBalanceHistoryCountAggregateOutputType | null
    _avg: CashierBalanceHistoryAvgAggregateOutputType | null
    _sum: CashierBalanceHistorySumAggregateOutputType | null
    _min: CashierBalanceHistoryMinAggregateOutputType | null
    _max: CashierBalanceHistoryMaxAggregateOutputType | null
  }

  export type CashierBalanceHistoryAvgAggregateOutputType = {
    startingCash: number | null
    endingCash: number | null
  }

  export type CashierBalanceHistorySumAggregateOutputType = {
    startingCash: number | null
    endingCash: number | null
  }

  export type CashierBalanceHistoryMinAggregateOutputType = {
    id: string | null
    cashierId: string | null
    startTime: Date | null
    endTime: Date | null
    startingCash: number | null
    endingCash: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CashierBalanceHistoryMaxAggregateOutputType = {
    id: string | null
    cashierId: string | null
    startTime: Date | null
    endTime: Date | null
    startingCash: number | null
    endingCash: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CashierBalanceHistoryCountAggregateOutputType = {
    id: number
    cashierId: number
    startTime: number
    endTime: number
    startingCash: number
    endingCash: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CashierBalanceHistoryAvgAggregateInputType = {
    startingCash?: true
    endingCash?: true
  }

  export type CashierBalanceHistorySumAggregateInputType = {
    startingCash?: true
    endingCash?: true
  }

  export type CashierBalanceHistoryMinAggregateInputType = {
    id?: true
    cashierId?: true
    startTime?: true
    endTime?: true
    startingCash?: true
    endingCash?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CashierBalanceHistoryMaxAggregateInputType = {
    id?: true
    cashierId?: true
    startTime?: true
    endTime?: true
    startingCash?: true
    endingCash?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CashierBalanceHistoryCountAggregateInputType = {
    id?: true
    cashierId?: true
    startTime?: true
    endTime?: true
    startingCash?: true
    endingCash?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CashierBalanceHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashierBalanceHistory to aggregate.
     */
    where?: CashierBalanceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashierBalanceHistories to fetch.
     */
    orderBy?: CashierBalanceHistoryOrderByWithRelationInput | CashierBalanceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CashierBalanceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashierBalanceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashierBalanceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CashierBalanceHistories
    **/
    _count?: true | CashierBalanceHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CashierBalanceHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CashierBalanceHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CashierBalanceHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CashierBalanceHistoryMaxAggregateInputType
  }

  export type GetCashierBalanceHistoryAggregateType<T extends CashierBalanceHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCashierBalanceHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCashierBalanceHistory[P]>
      : GetScalarType<T[P], AggregateCashierBalanceHistory[P]>
  }




  export type CashierBalanceHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashierBalanceHistoryWhereInput
    orderBy?: CashierBalanceHistoryOrderByWithAggregationInput | CashierBalanceHistoryOrderByWithAggregationInput[]
    by: CashierBalanceHistoryScalarFieldEnum[] | CashierBalanceHistoryScalarFieldEnum
    having?: CashierBalanceHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CashierBalanceHistoryCountAggregateInputType | true
    _avg?: CashierBalanceHistoryAvgAggregateInputType
    _sum?: CashierBalanceHistorySumAggregateInputType
    _min?: CashierBalanceHistoryMinAggregateInputType
    _max?: CashierBalanceHistoryMaxAggregateInputType
  }

  export type CashierBalanceHistoryGroupByOutputType = {
    id: string
    cashierId: string
    startTime: Date
    endTime: Date | null
    startingCash: number
    endingCash: number | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: CashierBalanceHistoryCountAggregateOutputType | null
    _avg: CashierBalanceHistoryAvgAggregateOutputType | null
    _sum: CashierBalanceHistorySumAggregateOutputType | null
    _min: CashierBalanceHistoryMinAggregateOutputType | null
    _max: CashierBalanceHistoryMaxAggregateOutputType | null
  }

  type GetCashierBalanceHistoryGroupByPayload<T extends CashierBalanceHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CashierBalanceHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CashierBalanceHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CashierBalanceHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], CashierBalanceHistoryGroupByOutputType[P]>
        }
      >
    >


  export type CashierBalanceHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cashierId?: boolean
    startTime?: boolean
    endTime?: boolean
    startingCash?: boolean
    endingCash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    cashier?: boolean | CashierDefaultArgs<ExtArgs>
    transaction?: boolean | CashierBalanceHistory$transactionArgs<ExtArgs>
    _count?: boolean | CashierBalanceHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashierBalanceHistory"]>

  export type CashierBalanceHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cashierId?: boolean
    startTime?: boolean
    endTime?: boolean
    startingCash?: boolean
    endingCash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    cashier?: boolean | CashierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashierBalanceHistory"]>

  export type CashierBalanceHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cashierId?: boolean
    startTime?: boolean
    endTime?: boolean
    startingCash?: boolean
    endingCash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    cashier?: boolean | CashierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashierBalanceHistory"]>

  export type CashierBalanceHistorySelectScalar = {
    id?: boolean
    cashierId?: boolean
    startTime?: boolean
    endTime?: boolean
    startingCash?: boolean
    endingCash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CashierBalanceHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cashierId" | "startTime" | "endTime" | "startingCash" | "endingCash" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["cashierBalanceHistory"]>
  export type CashierBalanceHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cashier?: boolean | CashierDefaultArgs<ExtArgs>
    transaction?: boolean | CashierBalanceHistory$transactionArgs<ExtArgs>
    _count?: boolean | CashierBalanceHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CashierBalanceHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cashier?: boolean | CashierDefaultArgs<ExtArgs>
  }
  export type CashierBalanceHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cashier?: boolean | CashierDefaultArgs<ExtArgs>
  }

  export type $CashierBalanceHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CashierBalanceHistory"
    objects: {
      cashier: Prisma.$CashierPayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cashierId: string
      startTime: Date
      endTime: Date | null
      startingCash: number
      endingCash: number | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["cashierBalanceHistory"]>
    composites: {}
  }

  type CashierBalanceHistoryGetPayload<S extends boolean | null | undefined | CashierBalanceHistoryDefaultArgs> = $Result.GetResult<Prisma.$CashierBalanceHistoryPayload, S>

  type CashierBalanceHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CashierBalanceHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CashierBalanceHistoryCountAggregateInputType | true
    }

  export interface CashierBalanceHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CashierBalanceHistory'], meta: { name: 'CashierBalanceHistory' } }
    /**
     * Find zero or one CashierBalanceHistory that matches the filter.
     * @param {CashierBalanceHistoryFindUniqueArgs} args - Arguments to find a CashierBalanceHistory
     * @example
     * // Get one CashierBalanceHistory
     * const cashierBalanceHistory = await prisma.cashierBalanceHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CashierBalanceHistoryFindUniqueArgs>(args: SelectSubset<T, CashierBalanceHistoryFindUniqueArgs<ExtArgs>>): Prisma__CashierBalanceHistoryClient<$Result.GetResult<Prisma.$CashierBalanceHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CashierBalanceHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CashierBalanceHistoryFindUniqueOrThrowArgs} args - Arguments to find a CashierBalanceHistory
     * @example
     * // Get one CashierBalanceHistory
     * const cashierBalanceHistory = await prisma.cashierBalanceHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CashierBalanceHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CashierBalanceHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CashierBalanceHistoryClient<$Result.GetResult<Prisma.$CashierBalanceHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CashierBalanceHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashierBalanceHistoryFindFirstArgs} args - Arguments to find a CashierBalanceHistory
     * @example
     * // Get one CashierBalanceHistory
     * const cashierBalanceHistory = await prisma.cashierBalanceHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CashierBalanceHistoryFindFirstArgs>(args?: SelectSubset<T, CashierBalanceHistoryFindFirstArgs<ExtArgs>>): Prisma__CashierBalanceHistoryClient<$Result.GetResult<Prisma.$CashierBalanceHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CashierBalanceHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashierBalanceHistoryFindFirstOrThrowArgs} args - Arguments to find a CashierBalanceHistory
     * @example
     * // Get one CashierBalanceHistory
     * const cashierBalanceHistory = await prisma.cashierBalanceHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CashierBalanceHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CashierBalanceHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CashierBalanceHistoryClient<$Result.GetResult<Prisma.$CashierBalanceHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CashierBalanceHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashierBalanceHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CashierBalanceHistories
     * const cashierBalanceHistories = await prisma.cashierBalanceHistory.findMany()
     * 
     * // Get first 10 CashierBalanceHistories
     * const cashierBalanceHistories = await prisma.cashierBalanceHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cashierBalanceHistoryWithIdOnly = await prisma.cashierBalanceHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CashierBalanceHistoryFindManyArgs>(args?: SelectSubset<T, CashierBalanceHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashierBalanceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CashierBalanceHistory.
     * @param {CashierBalanceHistoryCreateArgs} args - Arguments to create a CashierBalanceHistory.
     * @example
     * // Create one CashierBalanceHistory
     * const CashierBalanceHistory = await prisma.cashierBalanceHistory.create({
     *   data: {
     *     // ... data to create a CashierBalanceHistory
     *   }
     * })
     * 
     */
    create<T extends CashierBalanceHistoryCreateArgs>(args: SelectSubset<T, CashierBalanceHistoryCreateArgs<ExtArgs>>): Prisma__CashierBalanceHistoryClient<$Result.GetResult<Prisma.$CashierBalanceHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CashierBalanceHistories.
     * @param {CashierBalanceHistoryCreateManyArgs} args - Arguments to create many CashierBalanceHistories.
     * @example
     * // Create many CashierBalanceHistories
     * const cashierBalanceHistory = await prisma.cashierBalanceHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CashierBalanceHistoryCreateManyArgs>(args?: SelectSubset<T, CashierBalanceHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CashierBalanceHistories and returns the data saved in the database.
     * @param {CashierBalanceHistoryCreateManyAndReturnArgs} args - Arguments to create many CashierBalanceHistories.
     * @example
     * // Create many CashierBalanceHistories
     * const cashierBalanceHistory = await prisma.cashierBalanceHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CashierBalanceHistories and only return the `id`
     * const cashierBalanceHistoryWithIdOnly = await prisma.cashierBalanceHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CashierBalanceHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CashierBalanceHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashierBalanceHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CashierBalanceHistory.
     * @param {CashierBalanceHistoryDeleteArgs} args - Arguments to delete one CashierBalanceHistory.
     * @example
     * // Delete one CashierBalanceHistory
     * const CashierBalanceHistory = await prisma.cashierBalanceHistory.delete({
     *   where: {
     *     // ... filter to delete one CashierBalanceHistory
     *   }
     * })
     * 
     */
    delete<T extends CashierBalanceHistoryDeleteArgs>(args: SelectSubset<T, CashierBalanceHistoryDeleteArgs<ExtArgs>>): Prisma__CashierBalanceHistoryClient<$Result.GetResult<Prisma.$CashierBalanceHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CashierBalanceHistory.
     * @param {CashierBalanceHistoryUpdateArgs} args - Arguments to update one CashierBalanceHistory.
     * @example
     * // Update one CashierBalanceHistory
     * const cashierBalanceHistory = await prisma.cashierBalanceHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CashierBalanceHistoryUpdateArgs>(args: SelectSubset<T, CashierBalanceHistoryUpdateArgs<ExtArgs>>): Prisma__CashierBalanceHistoryClient<$Result.GetResult<Prisma.$CashierBalanceHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CashierBalanceHistories.
     * @param {CashierBalanceHistoryDeleteManyArgs} args - Arguments to filter CashierBalanceHistories to delete.
     * @example
     * // Delete a few CashierBalanceHistories
     * const { count } = await prisma.cashierBalanceHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CashierBalanceHistoryDeleteManyArgs>(args?: SelectSubset<T, CashierBalanceHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CashierBalanceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashierBalanceHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CashierBalanceHistories
     * const cashierBalanceHistory = await prisma.cashierBalanceHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CashierBalanceHistoryUpdateManyArgs>(args: SelectSubset<T, CashierBalanceHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CashierBalanceHistories and returns the data updated in the database.
     * @param {CashierBalanceHistoryUpdateManyAndReturnArgs} args - Arguments to update many CashierBalanceHistories.
     * @example
     * // Update many CashierBalanceHistories
     * const cashierBalanceHistory = await prisma.cashierBalanceHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CashierBalanceHistories and only return the `id`
     * const cashierBalanceHistoryWithIdOnly = await prisma.cashierBalanceHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CashierBalanceHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CashierBalanceHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashierBalanceHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CashierBalanceHistory.
     * @param {CashierBalanceHistoryUpsertArgs} args - Arguments to update or create a CashierBalanceHistory.
     * @example
     * // Update or create a CashierBalanceHistory
     * const cashierBalanceHistory = await prisma.cashierBalanceHistory.upsert({
     *   create: {
     *     // ... data to create a CashierBalanceHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CashierBalanceHistory we want to update
     *   }
     * })
     */
    upsert<T extends CashierBalanceHistoryUpsertArgs>(args: SelectSubset<T, CashierBalanceHistoryUpsertArgs<ExtArgs>>): Prisma__CashierBalanceHistoryClient<$Result.GetResult<Prisma.$CashierBalanceHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CashierBalanceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashierBalanceHistoryCountArgs} args - Arguments to filter CashierBalanceHistories to count.
     * @example
     * // Count the number of CashierBalanceHistories
     * const count = await prisma.cashierBalanceHistory.count({
     *   where: {
     *     // ... the filter for the CashierBalanceHistories we want to count
     *   }
     * })
    **/
    count<T extends CashierBalanceHistoryCountArgs>(
      args?: Subset<T, CashierBalanceHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CashierBalanceHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CashierBalanceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashierBalanceHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CashierBalanceHistoryAggregateArgs>(args: Subset<T, CashierBalanceHistoryAggregateArgs>): Prisma.PrismaPromise<GetCashierBalanceHistoryAggregateType<T>>

    /**
     * Group by CashierBalanceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashierBalanceHistoryGroupByArgs} args - Group by arguments.
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
      T extends CashierBalanceHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CashierBalanceHistoryGroupByArgs['orderBy'] }
        : { orderBy?: CashierBalanceHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CashierBalanceHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCashierBalanceHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CashierBalanceHistory model
   */
  readonly fields: CashierBalanceHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CashierBalanceHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CashierBalanceHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cashier<T extends CashierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CashierDefaultArgs<ExtArgs>>): Prisma__CashierClient<$Result.GetResult<Prisma.$CashierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction<T extends CashierBalanceHistory$transactionArgs<ExtArgs> = {}>(args?: Subset<T, CashierBalanceHistory$transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CashierBalanceHistory model
   */
  interface CashierBalanceHistoryFieldRefs {
    readonly id: FieldRef<"CashierBalanceHistory", 'String'>
    readonly cashierId: FieldRef<"CashierBalanceHistory", 'String'>
    readonly startTime: FieldRef<"CashierBalanceHistory", 'DateTime'>
    readonly endTime: FieldRef<"CashierBalanceHistory", 'DateTime'>
    readonly startingCash: FieldRef<"CashierBalanceHistory", 'Float'>
    readonly endingCash: FieldRef<"CashierBalanceHistory", 'Float'>
    readonly createdAt: FieldRef<"CashierBalanceHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"CashierBalanceHistory", 'DateTime'>
    readonly deletedAt: FieldRef<"CashierBalanceHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CashierBalanceHistory findUnique
   */
  export type CashierBalanceHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashierBalanceHistory
     */
    select?: CashierBalanceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashierBalanceHistory
     */
    omit?: CashierBalanceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierBalanceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CashierBalanceHistory to fetch.
     */
    where: CashierBalanceHistoryWhereUniqueInput
  }

  /**
   * CashierBalanceHistory findUniqueOrThrow
   */
  export type CashierBalanceHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashierBalanceHistory
     */
    select?: CashierBalanceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashierBalanceHistory
     */
    omit?: CashierBalanceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierBalanceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CashierBalanceHistory to fetch.
     */
    where: CashierBalanceHistoryWhereUniqueInput
  }

  /**
   * CashierBalanceHistory findFirst
   */
  export type CashierBalanceHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashierBalanceHistory
     */
    select?: CashierBalanceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashierBalanceHistory
     */
    omit?: CashierBalanceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierBalanceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CashierBalanceHistory to fetch.
     */
    where?: CashierBalanceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashierBalanceHistories to fetch.
     */
    orderBy?: CashierBalanceHistoryOrderByWithRelationInput | CashierBalanceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashierBalanceHistories.
     */
    cursor?: CashierBalanceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashierBalanceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashierBalanceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashierBalanceHistories.
     */
    distinct?: CashierBalanceHistoryScalarFieldEnum | CashierBalanceHistoryScalarFieldEnum[]
  }

  /**
   * CashierBalanceHistory findFirstOrThrow
   */
  export type CashierBalanceHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashierBalanceHistory
     */
    select?: CashierBalanceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashierBalanceHistory
     */
    omit?: CashierBalanceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierBalanceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CashierBalanceHistory to fetch.
     */
    where?: CashierBalanceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashierBalanceHistories to fetch.
     */
    orderBy?: CashierBalanceHistoryOrderByWithRelationInput | CashierBalanceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashierBalanceHistories.
     */
    cursor?: CashierBalanceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashierBalanceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashierBalanceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashierBalanceHistories.
     */
    distinct?: CashierBalanceHistoryScalarFieldEnum | CashierBalanceHistoryScalarFieldEnum[]
  }

  /**
   * CashierBalanceHistory findMany
   */
  export type CashierBalanceHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashierBalanceHistory
     */
    select?: CashierBalanceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashierBalanceHistory
     */
    omit?: CashierBalanceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierBalanceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CashierBalanceHistories to fetch.
     */
    where?: CashierBalanceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashierBalanceHistories to fetch.
     */
    orderBy?: CashierBalanceHistoryOrderByWithRelationInput | CashierBalanceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CashierBalanceHistories.
     */
    cursor?: CashierBalanceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashierBalanceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashierBalanceHistories.
     */
    skip?: number
    distinct?: CashierBalanceHistoryScalarFieldEnum | CashierBalanceHistoryScalarFieldEnum[]
  }

  /**
   * CashierBalanceHistory create
   */
  export type CashierBalanceHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashierBalanceHistory
     */
    select?: CashierBalanceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashierBalanceHistory
     */
    omit?: CashierBalanceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierBalanceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a CashierBalanceHistory.
     */
    data: XOR<CashierBalanceHistoryCreateInput, CashierBalanceHistoryUncheckedCreateInput>
  }

  /**
   * CashierBalanceHistory createMany
   */
  export type CashierBalanceHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CashierBalanceHistories.
     */
    data: CashierBalanceHistoryCreateManyInput | CashierBalanceHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CashierBalanceHistory createManyAndReturn
   */
  export type CashierBalanceHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashierBalanceHistory
     */
    select?: CashierBalanceHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CashierBalanceHistory
     */
    omit?: CashierBalanceHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many CashierBalanceHistories.
     */
    data: CashierBalanceHistoryCreateManyInput | CashierBalanceHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierBalanceHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CashierBalanceHistory update
   */
  export type CashierBalanceHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashierBalanceHistory
     */
    select?: CashierBalanceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashierBalanceHistory
     */
    omit?: CashierBalanceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierBalanceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a CashierBalanceHistory.
     */
    data: XOR<CashierBalanceHistoryUpdateInput, CashierBalanceHistoryUncheckedUpdateInput>
    /**
     * Choose, which CashierBalanceHistory to update.
     */
    where: CashierBalanceHistoryWhereUniqueInput
  }

  /**
   * CashierBalanceHistory updateMany
   */
  export type CashierBalanceHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CashierBalanceHistories.
     */
    data: XOR<CashierBalanceHistoryUpdateManyMutationInput, CashierBalanceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which CashierBalanceHistories to update
     */
    where?: CashierBalanceHistoryWhereInput
    /**
     * Limit how many CashierBalanceHistories to update.
     */
    limit?: number
  }

  /**
   * CashierBalanceHistory updateManyAndReturn
   */
  export type CashierBalanceHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashierBalanceHistory
     */
    select?: CashierBalanceHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CashierBalanceHistory
     */
    omit?: CashierBalanceHistoryOmit<ExtArgs> | null
    /**
     * The data used to update CashierBalanceHistories.
     */
    data: XOR<CashierBalanceHistoryUpdateManyMutationInput, CashierBalanceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which CashierBalanceHistories to update
     */
    where?: CashierBalanceHistoryWhereInput
    /**
     * Limit how many CashierBalanceHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierBalanceHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CashierBalanceHistory upsert
   */
  export type CashierBalanceHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashierBalanceHistory
     */
    select?: CashierBalanceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashierBalanceHistory
     */
    omit?: CashierBalanceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierBalanceHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the CashierBalanceHistory to update in case it exists.
     */
    where: CashierBalanceHistoryWhereUniqueInput
    /**
     * In case the CashierBalanceHistory found by the `where` argument doesn't exist, create a new CashierBalanceHistory with this data.
     */
    create: XOR<CashierBalanceHistoryCreateInput, CashierBalanceHistoryUncheckedCreateInput>
    /**
     * In case the CashierBalanceHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CashierBalanceHistoryUpdateInput, CashierBalanceHistoryUncheckedUpdateInput>
  }

  /**
   * CashierBalanceHistory delete
   */
  export type CashierBalanceHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashierBalanceHistory
     */
    select?: CashierBalanceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashierBalanceHistory
     */
    omit?: CashierBalanceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierBalanceHistoryInclude<ExtArgs> | null
    /**
     * Filter which CashierBalanceHistory to delete.
     */
    where: CashierBalanceHistoryWhereUniqueInput
  }

  /**
   * CashierBalanceHistory deleteMany
   */
  export type CashierBalanceHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashierBalanceHistories to delete
     */
    where?: CashierBalanceHistoryWhereInput
    /**
     * Limit how many CashierBalanceHistories to delete.
     */
    limit?: number
  }

  /**
   * CashierBalanceHistory.transaction
   */
  export type CashierBalanceHistory$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * CashierBalanceHistory without action
   */
  export type CashierBalanceHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashierBalanceHistory
     */
    select?: CashierBalanceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashierBalanceHistory
     */
    omit?: CashierBalanceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashierBalanceHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    productCategoryId: number | null
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    productCategoryId: number | null
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    productCategoryId: number | null
    name: string | null
    slug: string | null
    description: string | null
    price: number | null
    productImgUrl: string | null
    cldPublicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    productCategoryId: number | null
    name: string | null
    slug: string | null
    description: string | null
    price: number | null
    productImgUrl: string | null
    cldPublicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    productCategoryId: number
    name: number
    slug: number
    description: number
    price: number
    productImgUrl: number
    cldPublicId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    productCategoryId?: true
    price?: true
  }

  export type ProductSumAggregateInputType = {
    productCategoryId?: true
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    productCategoryId?: true
    name?: true
    slug?: true
    description?: true
    price?: true
    productImgUrl?: true
    cldPublicId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    productCategoryId?: true
    name?: true
    slug?: true
    description?: true
    price?: true
    productImgUrl?: true
    cldPublicId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    productCategoryId?: true
    name?: true
    slug?: true
    description?: true
    price?: true
    productImgUrl?: true
    cldPublicId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    productCategoryId: number
    name: string
    slug: string
    description: string | null
    price: number
    productImgUrl: string | null
    cldPublicId: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productCategoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    productImgUrl?: boolean
    cldPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    productCategory?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    cartItems?: boolean | Product$cartItemsArgs<ExtArgs>
    transactionItems?: boolean | Product$transactionItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productCategoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    productImgUrl?: boolean
    cldPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    productCategory?: boolean | ProductCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productCategoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    productImgUrl?: boolean
    cldPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    productCategory?: boolean | ProductCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    productCategoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    productImgUrl?: boolean
    cldPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productCategoryId" | "name" | "slug" | "description" | "price" | "productImgUrl" | "cldPublicId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productCategory?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    cartItems?: boolean | Product$cartItemsArgs<ExtArgs>
    transactionItems?: boolean | Product$transactionItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productCategory?: boolean | ProductCategoryDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productCategory?: boolean | ProductCategoryDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      productCategory: Prisma.$ProductCategoryPayload<ExtArgs>
      cartItems: Prisma.$CartItemPayload<ExtArgs>[]
      transactionItems: Prisma.$TransactionItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productCategoryId: number
      name: string
      slug: string
      description: string | null
      price: number
      productImgUrl: string | null
      cldPublicId: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productCategory<T extends ProductCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductCategoryDefaultArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cartItems<T extends Product$cartItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactionItems<T extends Product$transactionItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$transactionItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly productCategoryId: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly productImgUrl: FieldRef<"Product", 'String'>
    readonly cldPublicId: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly deletedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.cartItems
   */
  export type Product$cartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Product.transactionItems
   */
  export type Product$transactionItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
    where?: TransactionItemWhereInput
    orderBy?: TransactionItemOrderByWithRelationInput | TransactionItemOrderByWithRelationInput[]
    cursor?: TransactionItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionItemScalarFieldEnum | TransactionItemScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductCategory
   */

  export type AggregateProductCategory = {
    _count: ProductCategoryCountAggregateOutputType | null
    _avg: ProductCategoryAvgAggregateOutputType | null
    _sum: ProductCategorySumAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  export type ProductCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type ProductCategorySumAggregateOutputType = {
    id: number | null
  }

  export type ProductCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProductCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProductCategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ProductCategoryAvgAggregateInputType = {
    id?: true
  }

  export type ProductCategorySumAggregateInputType = {
    id?: true
  }

  export type ProductCategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProductCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProductCategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ProductCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategory to aggregate.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductCategories
    **/
    _count?: true | ProductCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type GetProductCategoryAggregateType<T extends ProductCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductCategory[P]>
      : GetScalarType<T[P], AggregateProductCategory[P]>
  }




  export type ProductCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCategoryWhereInput
    orderBy?: ProductCategoryOrderByWithAggregationInput | ProductCategoryOrderByWithAggregationInput[]
    by: ProductCategoryScalarFieldEnum[] | ProductCategoryScalarFieldEnum
    having?: ProductCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCategoryCountAggregateInputType | true
    _avg?: ProductCategoryAvgAggregateInputType
    _sum?: ProductCategorySumAggregateInputType
    _min?: ProductCategoryMinAggregateInputType
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type ProductCategoryGroupByOutputType = {
    id: number
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ProductCategoryCountAggregateOutputType | null
    _avg: ProductCategoryAvgAggregateOutputType | null
    _sum: ProductCategorySumAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  type GetProductCategoryGroupByPayload<T extends ProductCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ProductCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    product?: boolean | ProductCategory$productArgs<ExtArgs>
    _count?: boolean | ProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCategory"]>

  export type ProductCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["productCategory"]>

  export type ProductCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["productCategory"]>

  export type ProductCategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ProductCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["productCategory"]>
  export type ProductCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductCategory$productArgs<ExtArgs>
    _count?: boolean | ProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductCategory"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["productCategory"]>
    composites: {}
  }

  type ProductCategoryGetPayload<S extends boolean | null | undefined | ProductCategoryDefaultArgs> = $Result.GetResult<Prisma.$ProductCategoryPayload, S>

  type ProductCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCategoryCountAggregateInputType | true
    }

  export interface ProductCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductCategory'], meta: { name: 'ProductCategory' } }
    /**
     * Find zero or one ProductCategory that matches the filter.
     * @param {ProductCategoryFindUniqueArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductCategoryFindUniqueArgs>(args: SelectSubset<T, ProductCategoryFindUniqueArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductCategoryFindUniqueOrThrowArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductCategoryFindFirstArgs>(args?: SelectSubset<T, ProductCategoryFindFirstArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstOrThrowArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCategories
     * const productCategories = await prisma.productCategory.findMany()
     * 
     * // Get first 10 ProductCategories
     * const productCategories = await prisma.productCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productCategoryWithIdOnly = await prisma.productCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductCategoryFindManyArgs>(args?: SelectSubset<T, ProductCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductCategory.
     * @param {ProductCategoryCreateArgs} args - Arguments to create a ProductCategory.
     * @example
     * // Create one ProductCategory
     * const ProductCategory = await prisma.productCategory.create({
     *   data: {
     *     // ... data to create a ProductCategory
     *   }
     * })
     * 
     */
    create<T extends ProductCategoryCreateArgs>(args: SelectSubset<T, ProductCategoryCreateArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductCategories.
     * @param {ProductCategoryCreateManyArgs} args - Arguments to create many ProductCategories.
     * @example
     * // Create many ProductCategories
     * const productCategory = await prisma.productCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCategoryCreateManyArgs>(args?: SelectSubset<T, ProductCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductCategories and returns the data saved in the database.
     * @param {ProductCategoryCreateManyAndReturnArgs} args - Arguments to create many ProductCategories.
     * @example
     * // Create many ProductCategories
     * const productCategory = await prisma.productCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductCategories and only return the `id`
     * const productCategoryWithIdOnly = await prisma.productCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductCategory.
     * @param {ProductCategoryDeleteArgs} args - Arguments to delete one ProductCategory.
     * @example
     * // Delete one ProductCategory
     * const ProductCategory = await prisma.productCategory.delete({
     *   where: {
     *     // ... filter to delete one ProductCategory
     *   }
     * })
     * 
     */
    delete<T extends ProductCategoryDeleteArgs>(args: SelectSubset<T, ProductCategoryDeleteArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductCategory.
     * @param {ProductCategoryUpdateArgs} args - Arguments to update one ProductCategory.
     * @example
     * // Update one ProductCategory
     * const productCategory = await prisma.productCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductCategoryUpdateArgs>(args: SelectSubset<T, ProductCategoryUpdateArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductCategories.
     * @param {ProductCategoryDeleteManyArgs} args - Arguments to filter ProductCategories to delete.
     * @example
     * // Delete a few ProductCategories
     * const { count } = await prisma.productCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductCategoryDeleteManyArgs>(args?: SelectSubset<T, ProductCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCategories
     * const productCategory = await prisma.productCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductCategoryUpdateManyArgs>(args: SelectSubset<T, ProductCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCategories and returns the data updated in the database.
     * @param {ProductCategoryUpdateManyAndReturnArgs} args - Arguments to update many ProductCategories.
     * @example
     * // Update many ProductCategories
     * const productCategory = await prisma.productCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductCategories and only return the `id`
     * const productCategoryWithIdOnly = await prisma.productCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductCategory.
     * @param {ProductCategoryUpsertArgs} args - Arguments to update or create a ProductCategory.
     * @example
     * // Update or create a ProductCategory
     * const productCategory = await prisma.productCategory.upsert({
     *   create: {
     *     // ... data to create a ProductCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCategory we want to update
     *   }
     * })
     */
    upsert<T extends ProductCategoryUpsertArgs>(args: SelectSubset<T, ProductCategoryUpsertArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryCountArgs} args - Arguments to filter ProductCategories to count.
     * @example
     * // Count the number of ProductCategories
     * const count = await prisma.productCategory.count({
     *   where: {
     *     // ... the filter for the ProductCategories we want to count
     *   }
     * })
    **/
    count<T extends ProductCategoryCountArgs>(
      args?: Subset<T, ProductCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductCategoryAggregateArgs>(args: Subset<T, ProductCategoryAggregateArgs>): Prisma.PrismaPromise<GetProductCategoryAggregateType<T>>

    /**
     * Group by ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryGroupByArgs} args - Group by arguments.
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
      T extends ProductCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ProductCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProductCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductCategory model
   */
  readonly fields: ProductCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductCategory$productArgs<ExtArgs> = {}>(args?: Subset<T, ProductCategory$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductCategory model
   */
  interface ProductCategoryFieldRefs {
    readonly id: FieldRef<"ProductCategory", 'Int'>
    readonly name: FieldRef<"ProductCategory", 'String'>
    readonly slug: FieldRef<"ProductCategory", 'String'>
    readonly createdAt: FieldRef<"ProductCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductCategory", 'DateTime'>
    readonly deletedAt: FieldRef<"ProductCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductCategory findUnique
   */
  export type ProductCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory findUniqueOrThrow
   */
  export type ProductCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory findFirst
   */
  export type ProductCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory findFirstOrThrow
   */
  export type ProductCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory findMany
   */
  export type ProductCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategories to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory create
   */
  export type ProductCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductCategory.
     */
    data: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
  }

  /**
   * ProductCategory createMany
   */
  export type ProductCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductCategories.
     */
    data: ProductCategoryCreateManyInput | ProductCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductCategory createManyAndReturn
   */
  export type ProductCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many ProductCategories.
     */
    data: ProductCategoryCreateManyInput | ProductCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductCategory update
   */
  export type ProductCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductCategory.
     */
    data: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
    /**
     * Choose, which ProductCategory to update.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory updateMany
   */
  export type ProductCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductCategories.
     */
    data: XOR<ProductCategoryUpdateManyMutationInput, ProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductCategories to update
     */
    where?: ProductCategoryWhereInput
    /**
     * Limit how many ProductCategories to update.
     */
    limit?: number
  }

  /**
   * ProductCategory updateManyAndReturn
   */
  export type ProductCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * The data used to update ProductCategories.
     */
    data: XOR<ProductCategoryUpdateManyMutationInput, ProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductCategories to update
     */
    where?: ProductCategoryWhereInput
    /**
     * Limit how many ProductCategories to update.
     */
    limit?: number
  }

  /**
   * ProductCategory upsert
   */
  export type ProductCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductCategory to update in case it exists.
     */
    where: ProductCategoryWhereUniqueInput
    /**
     * In case the ProductCategory found by the `where` argument doesn't exist, create a new ProductCategory with this data.
     */
    create: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
    /**
     * In case the ProductCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
  }

  /**
   * ProductCategory delete
   */
  export type ProductCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter which ProductCategory to delete.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory deleteMany
   */
  export type ProductCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategories to delete
     */
    where?: ProductCategoryWhereInput
    /**
     * Limit how many ProductCategories to delete.
     */
    limit?: number
  }

  /**
   * ProductCategory.product
   */
  export type ProductCategory$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * ProductCategory without action
   */
  export type ProductCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartMinAggregateOutputType = {
    id: string | null
    customerName: string | null
    cashierId: string | null
    status: $Enums.CartStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CartMaxAggregateOutputType = {
    id: string | null
    customerName: string | null
    cashierId: string | null
    status: $Enums.CartStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    customerName: number
    cashierId: number
    status: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CartMinAggregateInputType = {
    id?: true
    customerName?: true
    cashierId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    customerName?: true
    cashierId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    customerName?: true
    cashierId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
    orderBy?: CartOrderByWithAggregationInput | CartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: string
    customerName: string
    cashierId: string
    status: $Enums.CartStatus
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: CartCountAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    cashierId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    cartItems?: boolean | Cart$cartItemsArgs<ExtArgs>
    cashier?: boolean | CashierDefaultArgs<ExtArgs>
    transaction?: boolean | Cart$transactionArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    cashierId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    cashier?: boolean | CashierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    cashierId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    cashier?: boolean | CashierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectScalar = {
    id?: boolean
    customerName?: boolean
    cashierId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerName" | "cashierId" | "status" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["cart"]>
  export type CartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartItems?: boolean | Cart$cartItemsArgs<ExtArgs>
    cashier?: boolean | CashierDefaultArgs<ExtArgs>
    transaction?: boolean | Cart$transactionArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cashier?: boolean | CashierDefaultArgs<ExtArgs>
  }
  export type CartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cashier?: boolean | CashierDefaultArgs<ExtArgs>
  }

  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart"
    objects: {
      cartItems: Prisma.$CartItemPayload<ExtArgs>[]
      cashier: Prisma.$CashierPayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerName: string
      cashierId: string
      status: $Enums.CartStatus
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<Prisma.$CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart'], meta: { name: 'Cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartFindUniqueArgs>(args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(args: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartFindFirstArgs>(args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartFindManyArgs>(args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends CartCreateArgs>(args: SelectSubset<T, CartCreateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartCreateManyArgs>(args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {CartCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartCreateManyAndReturnArgs>(args?: SelectSubset<T, CartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends CartDeleteArgs>(args: SelectSubset<T, CartDeleteArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartUpdateArgs>(args: SelectSubset<T, CartUpdateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartDeleteManyArgs>(args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartUpdateManyArgs>(args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {CartUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartUpdateManyAndReturnArgs>(args: SelectSubset<T, CartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends CartUpsertArgs>(args: SelectSubset<T, CartUpsertArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
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
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cart model
   */
  readonly fields: CartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cartItems<T extends Cart$cartItemsArgs<ExtArgs> = {}>(args?: Subset<T, Cart$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cashier<T extends CashierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CashierDefaultArgs<ExtArgs>>): Prisma__CashierClient<$Result.GetResult<Prisma.$CashierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction<T extends Cart$transactionArgs<ExtArgs> = {}>(args?: Subset<T, Cart$transactionArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cart model
   */
  interface CartFieldRefs {
    readonly id: FieldRef<"Cart", 'String'>
    readonly customerName: FieldRef<"Cart", 'String'>
    readonly cashierId: FieldRef<"Cart", 'String'>
    readonly status: FieldRef<"Cart", 'CartStatus'>
    readonly createdAt: FieldRef<"Cart", 'DateTime'>
    readonly updatedAt: FieldRef<"Cart", 'DateTime'>
    readonly deletedAt: FieldRef<"Cart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cart findUnique
   */
  export type CartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findFirst
   */
  export type CartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }

  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cart createManyAndReturn
   */
  export type CartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Cart updateManyAndReturn
   */
  export type CartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }

  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to delete.
     */
    limit?: number
  }

  /**
   * Cart.cartItems
   */
  export type Cart$cartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Cart.transaction
   */
  export type Cart$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
  }

  /**
   * Cart without action
   */
  export type CartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
  }


  /**
   * Model CartItem
   */

  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  export type CartItemAvgAggregateOutputType = {
    quantity: number | null
  }

  export type CartItemSumAggregateOutputType = {
    quantity: number | null
  }

  export type CartItemMinAggregateOutputType = {
    id: string | null
    cartId: string | null
    productId: string | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CartItemMaxAggregateOutputType = {
    id: string | null
    cartId: string | null
    productId: string | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CartItemCountAggregateOutputType = {
    id: number
    cartId: number
    productId: number
    quantity: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CartItemAvgAggregateInputType = {
    quantity?: true
  }

  export type CartItemSumAggregateInputType = {
    quantity?: true
  }

  export type CartItemMinAggregateInputType = {
    id?: true
    cartId?: true
    productId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CartItemMaxAggregateInputType = {
    id?: true
    cartId?: true
    productId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CartItemCountAggregateInputType = {
    id?: true
    cartId?: true
    productId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CartItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItem to aggregate.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemMaxAggregateInputType
  }

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>
  }




  export type CartItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithAggregationInput | CartItemOrderByWithAggregationInput[]
    by: CartItemScalarFieldEnum[] | CartItemScalarFieldEnum
    having?: CartItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemCountAggregateInputType | true
    _avg?: CartItemAvgAggregateInputType
    _sum?: CartItemSumAggregateInputType
    _min?: CartItemMinAggregateInputType
    _max?: CartItemMaxAggregateInputType
  }

  export type CartItemGroupByOutputType = {
    id: string
    cartId: string
    productId: string
    quantity: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
        }
      >
    >


  export type CartItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    productId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    productId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    productId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectScalar = {
    id?: boolean
    cartId?: boolean
    productId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CartItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cartId" | "productId" | "quantity" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["cartItem"]>
  export type CartItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type CartItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type CartItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $CartItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItem"
    objects: {
      cart: Prisma.$CartPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cartId: string
      productId: string
      quantity: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["cartItem"]>
    composites: {}
  }

  type CartItemGetPayload<S extends boolean | null | undefined | CartItemDefaultArgs> = $Result.GetResult<Prisma.$CartItemPayload, S>

  type CartItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartItemCountAggregateInputType | true
    }

  export interface CartItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItem'], meta: { name: 'CartItem' } }
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {CartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemFindUniqueArgs>(args: SelectSubset<T, CartItemFindUniqueArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CartItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemFindFirstArgs>(args?: SelectSubset<T, CartItemFindFirstArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CartItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartItemFindManyArgs>(args?: SelectSubset<T, CartItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartItem.
     * @param {CartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     * 
     */
    create<T extends CartItemCreateArgs>(args: SelectSubset<T, CartItemCreateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartItems.
     * @param {CartItemCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartItemCreateManyArgs>(args?: SelectSubset<T, CartItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CartItems and returns the data saved in the database.
     * @param {CartItemCreateManyAndReturnArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CartItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CartItem.
     * @param {CartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     * 
     */
    delete<T extends CartItemDeleteArgs>(args: SelectSubset<T, CartItemDeleteArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartItem.
     * @param {CartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartItemUpdateArgs>(args: SelectSubset<T, CartItemUpdateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartItemDeleteManyArgs>(args?: SelectSubset<T, CartItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartItemUpdateManyArgs>(args: SelectSubset<T, CartItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems and returns the data updated in the database.
     * @param {CartItemUpdateManyAndReturnArgs} args - Arguments to update many CartItems.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CartItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CartItem.
     * @param {CartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
     */
    upsert<T extends CartItemUpsertArgs>(args: SelectSubset<T, CartItemUpsertArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemCountArgs>(
      args?: Subset<T, CartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartItemAggregateArgs>(args: Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemGroupByArgs} args - Group by arguments.
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
      T extends CartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemGroupByArgs['orderBy'] }
        : { orderBy?: CartItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItem model
   */
  readonly fields: CartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends CartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartDefaultArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CartItem model
   */
  interface CartItemFieldRefs {
    readonly id: FieldRef<"CartItem", 'String'>
    readonly cartId: FieldRef<"CartItem", 'String'>
    readonly productId: FieldRef<"CartItem", 'String'>
    readonly quantity: FieldRef<"CartItem", 'Int'>
    readonly createdAt: FieldRef<"CartItem", 'DateTime'>
    readonly updatedAt: FieldRef<"CartItem", 'DateTime'>
    readonly deletedAt: FieldRef<"CartItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CartItem findUnique
   */
  export type CartItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findUniqueOrThrow
   */
  export type CartItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findFirst
   */
  export type CartItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findFirstOrThrow
   */
  export type CartItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findMany
   */
  export type CartItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem create
   */
  export type CartItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItem.
     */
    data: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
  }

  /**
   * CartItem createMany
   */
  export type CartItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CartItem createManyAndReturn
   */
  export type CartItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem update
   */
  export type CartItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItem.
     */
    data: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
    /**
     * Choose, which CartItem to update.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem updateMany
   */
  export type CartItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
  }

  /**
   * CartItem updateManyAndReturn
   */
  export type CartItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem upsert
   */
  export type CartItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItem to update in case it exists.
     */
    where: CartItemWhereUniqueInput
    /**
     * In case the CartItem found by the `where` argument doesn't exist, create a new CartItem with this data.
     */
    create: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
    /**
     * In case the CartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
  }

  /**
   * CartItem delete
   */
  export type CartItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter which CartItem to delete.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem deleteMany
   */
  export type CartItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to delete.
     */
    limit?: number
  }

  /**
   * CartItem without action
   */
  export type CartItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    totalAmount: number | null
    changeAmount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    totalAmount: number | null
    changeAmount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    cartId: string | null
    cashierId: string | null
    cashierBalanceHistoryId: string | null
    paymentType: $Enums.PaymentType | null
    debitCardNumber: string | null
    totalAmount: number | null
    changeAmount: number | null
    paymentDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    cartId: string | null
    cashierId: string | null
    cashierBalanceHistoryId: string | null
    paymentType: $Enums.PaymentType | null
    debitCardNumber: string | null
    totalAmount: number | null
    changeAmount: number | null
    paymentDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    cartId: number
    cashierId: number
    cashierBalanceHistoryId: number
    paymentType: number
    debitCardNumber: number
    totalAmount: number
    changeAmount: number
    paymentDate: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    totalAmount?: true
    changeAmount?: true
  }

  export type TransactionSumAggregateInputType = {
    totalAmount?: true
    changeAmount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    cartId?: true
    cashierId?: true
    cashierBalanceHistoryId?: true
    paymentType?: true
    debitCardNumber?: true
    totalAmount?: true
    changeAmount?: true
    paymentDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    cartId?: true
    cashierId?: true
    cashierBalanceHistoryId?: true
    paymentType?: true
    debitCardNumber?: true
    totalAmount?: true
    changeAmount?: true
    paymentDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    cartId?: true
    cashierId?: true
    cashierBalanceHistoryId?: true
    paymentType?: true
    debitCardNumber?: true
    totalAmount?: true
    changeAmount?: true
    paymentDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    cartId: string
    cashierId: string
    cashierBalanceHistoryId: string
    paymentType: $Enums.PaymentType
    debitCardNumber: string | null
    totalAmount: number
    changeAmount: number | null
    paymentDate: Date
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    cashierId?: boolean
    cashierBalanceHistoryId?: boolean
    paymentType?: boolean
    debitCardNumber?: boolean
    totalAmount?: boolean
    changeAmount?: boolean
    paymentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    cashier?: boolean | CashierDefaultArgs<ExtArgs>
    cashierBalanceHistory?: boolean | CashierBalanceHistoryDefaultArgs<ExtArgs>
    transactionItems?: boolean | Transaction$transactionItemsArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    cashierId?: boolean
    cashierBalanceHistoryId?: boolean
    paymentType?: boolean
    debitCardNumber?: boolean
    totalAmount?: boolean
    changeAmount?: boolean
    paymentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    cashier?: boolean | CashierDefaultArgs<ExtArgs>
    cashierBalanceHistory?: boolean | CashierBalanceHistoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    cashierId?: boolean
    cashierBalanceHistoryId?: boolean
    paymentType?: boolean
    debitCardNumber?: boolean
    totalAmount?: boolean
    changeAmount?: boolean
    paymentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    cashier?: boolean | CashierDefaultArgs<ExtArgs>
    cashierBalanceHistory?: boolean | CashierBalanceHistoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    cartId?: boolean
    cashierId?: boolean
    cashierBalanceHistoryId?: boolean
    paymentType?: boolean
    debitCardNumber?: boolean
    totalAmount?: boolean
    changeAmount?: boolean
    paymentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cartId" | "cashierId" | "cashierBalanceHistoryId" | "paymentType" | "debitCardNumber" | "totalAmount" | "changeAmount" | "paymentDate" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    cashier?: boolean | CashierDefaultArgs<ExtArgs>
    cashierBalanceHistory?: boolean | CashierBalanceHistoryDefaultArgs<ExtArgs>
    transactionItems?: boolean | Transaction$transactionItemsArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    cashier?: boolean | CashierDefaultArgs<ExtArgs>
    cashierBalanceHistory?: boolean | CashierBalanceHistoryDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    cashier?: boolean | CashierDefaultArgs<ExtArgs>
    cashierBalanceHistory?: boolean | CashierBalanceHistoryDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      cart: Prisma.$CartPayload<ExtArgs>
      cashier: Prisma.$CashierPayload<ExtArgs>
      cashierBalanceHistory: Prisma.$CashierBalanceHistoryPayload<ExtArgs>
      transactionItems: Prisma.$TransactionItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cartId: string
      cashierId: string
      cashierBalanceHistoryId: string
      paymentType: $Enums.PaymentType
      debitCardNumber: string | null
      totalAmount: number
      changeAmount: number | null
      paymentDate: Date
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends CartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartDefaultArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cashier<T extends CashierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CashierDefaultArgs<ExtArgs>>): Prisma__CashierClient<$Result.GetResult<Prisma.$CashierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cashierBalanceHistory<T extends CashierBalanceHistoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CashierBalanceHistoryDefaultArgs<ExtArgs>>): Prisma__CashierBalanceHistoryClient<$Result.GetResult<Prisma.$CashierBalanceHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactionItems<T extends Transaction$transactionItemsArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$transactionItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly cartId: FieldRef<"Transaction", 'String'>
    readonly cashierId: FieldRef<"Transaction", 'String'>
    readonly cashierBalanceHistoryId: FieldRef<"Transaction", 'String'>
    readonly paymentType: FieldRef<"Transaction", 'PaymentType'>
    readonly debitCardNumber: FieldRef<"Transaction", 'String'>
    readonly totalAmount: FieldRef<"Transaction", 'Float'>
    readonly changeAmount: FieldRef<"Transaction", 'Float'>
    readonly paymentDate: FieldRef<"Transaction", 'DateTime'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
    readonly deletedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.transactionItems
   */
  export type Transaction$transactionItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
    where?: TransactionItemWhereInput
    orderBy?: TransactionItemOrderByWithRelationInput | TransactionItemOrderByWithRelationInput[]
    cursor?: TransactionItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionItemScalarFieldEnum | TransactionItemScalarFieldEnum[]
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model TransactionItem
   */

  export type AggregateTransactionItem = {
    _count: TransactionItemCountAggregateOutputType | null
    _avg: TransactionItemAvgAggregateOutputType | null
    _sum: TransactionItemSumAggregateOutputType | null
    _min: TransactionItemMinAggregateOutputType | null
    _max: TransactionItemMaxAggregateOutputType | null
  }

  export type TransactionItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    subTotal: number | null
  }

  export type TransactionItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    subTotal: number | null
  }

  export type TransactionItemMinAggregateOutputType = {
    id: string | null
    transactionId: string | null
    productId: string | null
    quantity: number | null
    unitPrice: number | null
    subTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TransactionItemMaxAggregateOutputType = {
    id: string | null
    transactionId: string | null
    productId: string | null
    quantity: number | null
    unitPrice: number | null
    subTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TransactionItemCountAggregateOutputType = {
    id: number
    transactionId: number
    productId: number
    quantity: number
    unitPrice: number
    subTotal: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type TransactionItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    subTotal?: true
  }

  export type TransactionItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    subTotal?: true
  }

  export type TransactionItemMinAggregateInputType = {
    id?: true
    transactionId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    subTotal?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TransactionItemMaxAggregateInputType = {
    id?: true
    transactionId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    subTotal?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TransactionItemCountAggregateInputType = {
    id?: true
    transactionId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    subTotal?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TransactionItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionItem to aggregate.
     */
    where?: TransactionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionItems to fetch.
     */
    orderBy?: TransactionItemOrderByWithRelationInput | TransactionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionItems
    **/
    _count?: true | TransactionItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionItemMaxAggregateInputType
  }

  export type GetTransactionItemAggregateType<T extends TransactionItemAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionItem[P]>
      : GetScalarType<T[P], AggregateTransactionItem[P]>
  }




  export type TransactionItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionItemWhereInput
    orderBy?: TransactionItemOrderByWithAggregationInput | TransactionItemOrderByWithAggregationInput[]
    by: TransactionItemScalarFieldEnum[] | TransactionItemScalarFieldEnum
    having?: TransactionItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionItemCountAggregateInputType | true
    _avg?: TransactionItemAvgAggregateInputType
    _sum?: TransactionItemSumAggregateInputType
    _min?: TransactionItemMinAggregateInputType
    _max?: TransactionItemMaxAggregateInputType
  }

  export type TransactionItemGroupByOutputType = {
    id: string
    transactionId: string
    productId: string
    quantity: number
    unitPrice: number
    subTotal: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: TransactionItemCountAggregateOutputType | null
    _avg: TransactionItemAvgAggregateOutputType | null
    _sum: TransactionItemSumAggregateOutputType | null
    _min: TransactionItemMinAggregateOutputType | null
    _max: TransactionItemMaxAggregateOutputType | null
  }

  type GetTransactionItemGroupByPayload<T extends TransactionItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionItemGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionItemGroupByOutputType[P]>
        }
      >
    >


  export type TransactionItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionItem"]>

  export type TransactionItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionItem"]>

  export type TransactionItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionItem"]>

  export type TransactionItemSelectScalar = {
    id?: boolean
    transactionId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type TransactionItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transactionId" | "productId" | "quantity" | "unitPrice" | "subTotal" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["transactionItem"]>
  export type TransactionItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type TransactionItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type TransactionItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $TransactionItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionItem"
    objects: {
      transaction: Prisma.$TransactionPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      transactionId: string
      productId: string
      quantity: number
      unitPrice: number
      subTotal: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["transactionItem"]>
    composites: {}
  }

  type TransactionItemGetPayload<S extends boolean | null | undefined | TransactionItemDefaultArgs> = $Result.GetResult<Prisma.$TransactionItemPayload, S>

  type TransactionItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionItemCountAggregateInputType | true
    }

  export interface TransactionItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionItem'], meta: { name: 'TransactionItem' } }
    /**
     * Find zero or one TransactionItem that matches the filter.
     * @param {TransactionItemFindUniqueArgs} args - Arguments to find a TransactionItem
     * @example
     * // Get one TransactionItem
     * const transactionItem = await prisma.transactionItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionItemFindUniqueArgs>(args: SelectSubset<T, TransactionItemFindUniqueArgs<ExtArgs>>): Prisma__TransactionItemClient<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionItemFindUniqueOrThrowArgs} args - Arguments to find a TransactionItem
     * @example
     * // Get one TransactionItem
     * const transactionItem = await prisma.transactionItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionItemFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionItemClient<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionItemFindFirstArgs} args - Arguments to find a TransactionItem
     * @example
     * // Get one TransactionItem
     * const transactionItem = await prisma.transactionItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionItemFindFirstArgs>(args?: SelectSubset<T, TransactionItemFindFirstArgs<ExtArgs>>): Prisma__TransactionItemClient<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionItemFindFirstOrThrowArgs} args - Arguments to find a TransactionItem
     * @example
     * // Get one TransactionItem
     * const transactionItem = await prisma.transactionItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionItemFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionItemClient<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionItems
     * const transactionItems = await prisma.transactionItem.findMany()
     * 
     * // Get first 10 TransactionItems
     * const transactionItems = await prisma.transactionItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionItemWithIdOnly = await prisma.transactionItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionItemFindManyArgs>(args?: SelectSubset<T, TransactionItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionItem.
     * @param {TransactionItemCreateArgs} args - Arguments to create a TransactionItem.
     * @example
     * // Create one TransactionItem
     * const TransactionItem = await prisma.transactionItem.create({
     *   data: {
     *     // ... data to create a TransactionItem
     *   }
     * })
     * 
     */
    create<T extends TransactionItemCreateArgs>(args: SelectSubset<T, TransactionItemCreateArgs<ExtArgs>>): Prisma__TransactionItemClient<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionItems.
     * @param {TransactionItemCreateManyArgs} args - Arguments to create many TransactionItems.
     * @example
     * // Create many TransactionItems
     * const transactionItem = await prisma.transactionItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionItemCreateManyArgs>(args?: SelectSubset<T, TransactionItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransactionItems and returns the data saved in the database.
     * @param {TransactionItemCreateManyAndReturnArgs} args - Arguments to create many TransactionItems.
     * @example
     * // Create many TransactionItems
     * const transactionItem = await prisma.transactionItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransactionItems and only return the `id`
     * const transactionItemWithIdOnly = await prisma.transactionItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionItemCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransactionItem.
     * @param {TransactionItemDeleteArgs} args - Arguments to delete one TransactionItem.
     * @example
     * // Delete one TransactionItem
     * const TransactionItem = await prisma.transactionItem.delete({
     *   where: {
     *     // ... filter to delete one TransactionItem
     *   }
     * })
     * 
     */
    delete<T extends TransactionItemDeleteArgs>(args: SelectSubset<T, TransactionItemDeleteArgs<ExtArgs>>): Prisma__TransactionItemClient<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionItem.
     * @param {TransactionItemUpdateArgs} args - Arguments to update one TransactionItem.
     * @example
     * // Update one TransactionItem
     * const transactionItem = await prisma.transactionItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionItemUpdateArgs>(args: SelectSubset<T, TransactionItemUpdateArgs<ExtArgs>>): Prisma__TransactionItemClient<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionItems.
     * @param {TransactionItemDeleteManyArgs} args - Arguments to filter TransactionItems to delete.
     * @example
     * // Delete a few TransactionItems
     * const { count } = await prisma.transactionItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionItemDeleteManyArgs>(args?: SelectSubset<T, TransactionItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionItems
     * const transactionItem = await prisma.transactionItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionItemUpdateManyArgs>(args: SelectSubset<T, TransactionItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionItems and returns the data updated in the database.
     * @param {TransactionItemUpdateManyAndReturnArgs} args - Arguments to update many TransactionItems.
     * @example
     * // Update many TransactionItems
     * const transactionItem = await prisma.transactionItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransactionItems and only return the `id`
     * const transactionItemWithIdOnly = await prisma.transactionItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionItemUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransactionItem.
     * @param {TransactionItemUpsertArgs} args - Arguments to update or create a TransactionItem.
     * @example
     * // Update or create a TransactionItem
     * const transactionItem = await prisma.transactionItem.upsert({
     *   create: {
     *     // ... data to create a TransactionItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionItem we want to update
     *   }
     * })
     */
    upsert<T extends TransactionItemUpsertArgs>(args: SelectSubset<T, TransactionItemUpsertArgs<ExtArgs>>): Prisma__TransactionItemClient<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionItemCountArgs} args - Arguments to filter TransactionItems to count.
     * @example
     * // Count the number of TransactionItems
     * const count = await prisma.transactionItem.count({
     *   where: {
     *     // ... the filter for the TransactionItems we want to count
     *   }
     * })
    **/
    count<T extends TransactionItemCountArgs>(
      args?: Subset<T, TransactionItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionItemAggregateArgs>(args: Subset<T, TransactionItemAggregateArgs>): Prisma.PrismaPromise<GetTransactionItemAggregateType<T>>

    /**
     * Group by TransactionItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionItemGroupByArgs} args - Group by arguments.
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
      T extends TransactionItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionItemGroupByArgs['orderBy'] }
        : { orderBy?: TransactionItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TransactionItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionItem model
   */
  readonly fields: TransactionItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionDefaultArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TransactionItem model
   */
  interface TransactionItemFieldRefs {
    readonly id: FieldRef<"TransactionItem", 'String'>
    readonly transactionId: FieldRef<"TransactionItem", 'String'>
    readonly productId: FieldRef<"TransactionItem", 'String'>
    readonly quantity: FieldRef<"TransactionItem", 'Int'>
    readonly unitPrice: FieldRef<"TransactionItem", 'Float'>
    readonly subTotal: FieldRef<"TransactionItem", 'Float'>
    readonly createdAt: FieldRef<"TransactionItem", 'DateTime'>
    readonly updatedAt: FieldRef<"TransactionItem", 'DateTime'>
    readonly deletedAt: FieldRef<"TransactionItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TransactionItem findUnique
   */
  export type TransactionItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
    /**
     * Filter, which TransactionItem to fetch.
     */
    where: TransactionItemWhereUniqueInput
  }

  /**
   * TransactionItem findUniqueOrThrow
   */
  export type TransactionItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
    /**
     * Filter, which TransactionItem to fetch.
     */
    where: TransactionItemWhereUniqueInput
  }

  /**
   * TransactionItem findFirst
   */
  export type TransactionItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
    /**
     * Filter, which TransactionItem to fetch.
     */
    where?: TransactionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionItems to fetch.
     */
    orderBy?: TransactionItemOrderByWithRelationInput | TransactionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionItems.
     */
    cursor?: TransactionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionItems.
     */
    distinct?: TransactionItemScalarFieldEnum | TransactionItemScalarFieldEnum[]
  }

  /**
   * TransactionItem findFirstOrThrow
   */
  export type TransactionItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
    /**
     * Filter, which TransactionItem to fetch.
     */
    where?: TransactionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionItems to fetch.
     */
    orderBy?: TransactionItemOrderByWithRelationInput | TransactionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionItems.
     */
    cursor?: TransactionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionItems.
     */
    distinct?: TransactionItemScalarFieldEnum | TransactionItemScalarFieldEnum[]
  }

  /**
   * TransactionItem findMany
   */
  export type TransactionItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
    /**
     * Filter, which TransactionItems to fetch.
     */
    where?: TransactionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionItems to fetch.
     */
    orderBy?: TransactionItemOrderByWithRelationInput | TransactionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionItems.
     */
    cursor?: TransactionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionItems.
     */
    skip?: number
    distinct?: TransactionItemScalarFieldEnum | TransactionItemScalarFieldEnum[]
  }

  /**
   * TransactionItem create
   */
  export type TransactionItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
    /**
     * The data needed to create a TransactionItem.
     */
    data: XOR<TransactionItemCreateInput, TransactionItemUncheckedCreateInput>
  }

  /**
   * TransactionItem createMany
   */
  export type TransactionItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionItems.
     */
    data: TransactionItemCreateManyInput | TransactionItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionItem createManyAndReturn
   */
  export type TransactionItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * The data used to create many TransactionItems.
     */
    data: TransactionItemCreateManyInput | TransactionItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionItem update
   */
  export type TransactionItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
    /**
     * The data needed to update a TransactionItem.
     */
    data: XOR<TransactionItemUpdateInput, TransactionItemUncheckedUpdateInput>
    /**
     * Choose, which TransactionItem to update.
     */
    where: TransactionItemWhereUniqueInput
  }

  /**
   * TransactionItem updateMany
   */
  export type TransactionItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionItems.
     */
    data: XOR<TransactionItemUpdateManyMutationInput, TransactionItemUncheckedUpdateManyInput>
    /**
     * Filter which TransactionItems to update
     */
    where?: TransactionItemWhereInput
    /**
     * Limit how many TransactionItems to update.
     */
    limit?: number
  }

  /**
   * TransactionItem updateManyAndReturn
   */
  export type TransactionItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * The data used to update TransactionItems.
     */
    data: XOR<TransactionItemUpdateManyMutationInput, TransactionItemUncheckedUpdateManyInput>
    /**
     * Filter which TransactionItems to update
     */
    where?: TransactionItemWhereInput
    /**
     * Limit how many TransactionItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionItem upsert
   */
  export type TransactionItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
    /**
     * The filter to search for the TransactionItem to update in case it exists.
     */
    where: TransactionItemWhereUniqueInput
    /**
     * In case the TransactionItem found by the `where` argument doesn't exist, create a new TransactionItem with this data.
     */
    create: XOR<TransactionItemCreateInput, TransactionItemUncheckedCreateInput>
    /**
     * In case the TransactionItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionItemUpdateInput, TransactionItemUncheckedUpdateInput>
  }

  /**
   * TransactionItem delete
   */
  export type TransactionItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
    /**
     * Filter which TransactionItem to delete.
     */
    where: TransactionItemWhereUniqueInput
  }

  /**
   * TransactionItem deleteMany
   */
  export type TransactionItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionItems to delete
     */
    where?: TransactionItemWhereInput
    /**
     * Limit how many TransactionItems to delete.
     */
    limit?: number
  }

  /**
   * TransactionItem without action
   */
  export type TransactionItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CashierScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    phoneNumber: 'phoneNumber',
    gender: 'gender',
    isEmailVerified: 'isEmailVerified',
    avatarImgUrl: 'avatarImgUrl',
    cldPublicId: 'cldPublicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    shift: 'shift'
  };

  export type CashierScalarFieldEnum = (typeof CashierScalarFieldEnum)[keyof typeof CashierScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    phoneNumber: 'phoneNumber',
    isEmailVerified: 'isEmailVerified',
    avatarImgUrl: 'avatarImgUrl',
    cldPublicId: 'cldPublicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const CashierBalanceHistoryScalarFieldEnum: {
    id: 'id',
    cashierId: 'cashierId',
    startTime: 'startTime',
    endTime: 'endTime',
    startingCash: 'startingCash',
    endingCash: 'endingCash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CashierBalanceHistoryScalarFieldEnum = (typeof CashierBalanceHistoryScalarFieldEnum)[keyof typeof CashierBalanceHistoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    productCategoryId: 'productCategoryId',
    name: 'name',
    slug: 'slug',
    description: 'description',
    price: 'price',
    productImgUrl: 'productImgUrl',
    cldPublicId: 'cldPublicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ProductCategoryScalarFieldEnum = (typeof ProductCategoryScalarFieldEnum)[keyof typeof ProductCategoryScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    customerName: 'customerName',
    cashierId: 'cashierId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CartItemScalarFieldEnum: {
    id: 'id',
    cartId: 'cartId',
    productId: 'productId',
    quantity: 'quantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    cartId: 'cartId',
    cashierId: 'cashierId',
    cashierBalanceHistoryId: 'cashierBalanceHistoryId',
    paymentType: 'paymentType',
    debitCardNumber: 'debitCardNumber',
    totalAmount: 'totalAmount',
    changeAmount: 'changeAmount',
    paymentDate: 'paymentDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const TransactionItemScalarFieldEnum: {
    id: 'id',
    transactionId: 'transactionId',
    productId: 'productId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    subTotal: 'subTotal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type TransactionItemScalarFieldEnum = (typeof TransactionItemScalarFieldEnum)[keyof typeof TransactionItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ShiftSession'
   */
  export type EnumShiftSessionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShiftSession'>
    


  /**
   * Reference to a field of type 'ShiftSession[]'
   */
  export type ListEnumShiftSessionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShiftSession[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CartStatus'
   */
  export type EnumCartStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CartStatus'>
    


  /**
   * Reference to a field of type 'CartStatus[]'
   */
  export type ListEnumCartStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CartStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentType'
   */
  export type EnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType'>
    


  /**
   * Reference to a field of type 'PaymentType[]'
   */
  export type ListEnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType[]'>
    
  /**
   * Deep Input Types
   */


  export type CashierWhereInput = {
    AND?: CashierWhereInput | CashierWhereInput[]
    OR?: CashierWhereInput[]
    NOT?: CashierWhereInput | CashierWhereInput[]
    id?: StringFilter<"Cashier"> | string
    firstName?: StringFilter<"Cashier"> | string
    lastName?: StringNullableFilter<"Cashier"> | string | null
    email?: StringFilter<"Cashier"> | string
    password?: StringFilter<"Cashier"> | string
    phoneNumber?: StringNullableFilter<"Cashier"> | string | null
    gender?: EnumGenderNullableFilter<"Cashier"> | $Enums.Gender | null
    isEmailVerified?: BoolFilter<"Cashier"> | boolean
    avatarImgUrl?: StringNullableFilter<"Cashier"> | string | null
    cldPublicId?: StringNullableFilter<"Cashier"> | string | null
    createdAt?: DateTimeFilter<"Cashier"> | Date | string
    updatedAt?: DateTimeFilter<"Cashier"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Cashier"> | Date | string | null
    shift?: EnumShiftSessionFilter<"Cashier"> | $Enums.ShiftSession
    cashierBalanceHistory?: CashierBalanceHistoryListRelationFilter
    cart?: CartListRelationFilter
    transaction?: TransactionListRelationFilter
  }

  export type CashierOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    avatarImgUrl?: SortOrderInput | SortOrder
    cldPublicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    shift?: SortOrder
    cashierBalanceHistory?: CashierBalanceHistoryOrderByRelationAggregateInput
    cart?: CartOrderByRelationAggregateInput
    transaction?: TransactionOrderByRelationAggregateInput
  }

  export type CashierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phoneNumber?: string
    AND?: CashierWhereInput | CashierWhereInput[]
    OR?: CashierWhereInput[]
    NOT?: CashierWhereInput | CashierWhereInput[]
    firstName?: StringFilter<"Cashier"> | string
    lastName?: StringNullableFilter<"Cashier"> | string | null
    password?: StringFilter<"Cashier"> | string
    gender?: EnumGenderNullableFilter<"Cashier"> | $Enums.Gender | null
    isEmailVerified?: BoolFilter<"Cashier"> | boolean
    avatarImgUrl?: StringNullableFilter<"Cashier"> | string | null
    cldPublicId?: StringNullableFilter<"Cashier"> | string | null
    createdAt?: DateTimeFilter<"Cashier"> | Date | string
    updatedAt?: DateTimeFilter<"Cashier"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Cashier"> | Date | string | null
    shift?: EnumShiftSessionFilter<"Cashier"> | $Enums.ShiftSession
    cashierBalanceHistory?: CashierBalanceHistoryListRelationFilter
    cart?: CartListRelationFilter
    transaction?: TransactionListRelationFilter
  }, "id" | "email" | "phoneNumber">

  export type CashierOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    avatarImgUrl?: SortOrderInput | SortOrder
    cldPublicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    shift?: SortOrder
    _count?: CashierCountOrderByAggregateInput
    _max?: CashierMaxOrderByAggregateInput
    _min?: CashierMinOrderByAggregateInput
  }

  export type CashierScalarWhereWithAggregatesInput = {
    AND?: CashierScalarWhereWithAggregatesInput | CashierScalarWhereWithAggregatesInput[]
    OR?: CashierScalarWhereWithAggregatesInput[]
    NOT?: CashierScalarWhereWithAggregatesInput | CashierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cashier"> | string
    firstName?: StringWithAggregatesFilter<"Cashier"> | string
    lastName?: StringNullableWithAggregatesFilter<"Cashier"> | string | null
    email?: StringWithAggregatesFilter<"Cashier"> | string
    password?: StringWithAggregatesFilter<"Cashier"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"Cashier"> | string | null
    gender?: EnumGenderNullableWithAggregatesFilter<"Cashier"> | $Enums.Gender | null
    isEmailVerified?: BoolWithAggregatesFilter<"Cashier"> | boolean
    avatarImgUrl?: StringNullableWithAggregatesFilter<"Cashier"> | string | null
    cldPublicId?: StringNullableWithAggregatesFilter<"Cashier"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Cashier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cashier"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Cashier"> | Date | string | null
    shift?: EnumShiftSessionWithAggregatesFilter<"Cashier"> | $Enums.ShiftSession
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    firstName?: StringFilter<"Admin"> | string
    lastName?: StringNullableFilter<"Admin"> | string | null
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    phoneNumber?: StringFilter<"Admin"> | string
    isEmailVerified?: BoolFilter<"Admin"> | boolean
    avatarImgUrl?: StringNullableFilter<"Admin"> | string | null
    cldPublicId?: StringNullableFilter<"Admin"> | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    isEmailVerified?: SortOrder
    avatarImgUrl?: SortOrderInput | SortOrder
    cldPublicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phoneNumber?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    firstName?: StringFilter<"Admin"> | string
    lastName?: StringNullableFilter<"Admin"> | string | null
    password?: StringFilter<"Admin"> | string
    isEmailVerified?: BoolFilter<"Admin"> | boolean
    avatarImgUrl?: StringNullableFilter<"Admin"> | string | null
    cldPublicId?: StringNullableFilter<"Admin"> | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
  }, "id" | "email" | "phoneNumber">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    isEmailVerified?: SortOrder
    avatarImgUrl?: SortOrderInput | SortOrder
    cldPublicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    firstName?: StringWithAggregatesFilter<"Admin"> | string
    lastName?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    phoneNumber?: StringWithAggregatesFilter<"Admin"> | string
    isEmailVerified?: BoolWithAggregatesFilter<"Admin"> | boolean
    avatarImgUrl?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    cldPublicId?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
  }

  export type CashierBalanceHistoryWhereInput = {
    AND?: CashierBalanceHistoryWhereInput | CashierBalanceHistoryWhereInput[]
    OR?: CashierBalanceHistoryWhereInput[]
    NOT?: CashierBalanceHistoryWhereInput | CashierBalanceHistoryWhereInput[]
    id?: StringFilter<"CashierBalanceHistory"> | string
    cashierId?: StringFilter<"CashierBalanceHistory"> | string
    startTime?: DateTimeFilter<"CashierBalanceHistory"> | Date | string
    endTime?: DateTimeNullableFilter<"CashierBalanceHistory"> | Date | string | null
    startingCash?: FloatFilter<"CashierBalanceHistory"> | number
    endingCash?: FloatNullableFilter<"CashierBalanceHistory"> | number | null
    createdAt?: DateTimeFilter<"CashierBalanceHistory"> | Date | string
    updatedAt?: DateTimeFilter<"CashierBalanceHistory"> | Date | string
    deletedAt?: DateTimeNullableFilter<"CashierBalanceHistory"> | Date | string | null
    cashier?: XOR<CashierScalarRelationFilter, CashierWhereInput>
    transaction?: TransactionListRelationFilter
  }

  export type CashierBalanceHistoryOrderByWithRelationInput = {
    id?: SortOrder
    cashierId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    startingCash?: SortOrder
    endingCash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    cashier?: CashierOrderByWithRelationInput
    transaction?: TransactionOrderByRelationAggregateInput
  }

  export type CashierBalanceHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CashierBalanceHistoryWhereInput | CashierBalanceHistoryWhereInput[]
    OR?: CashierBalanceHistoryWhereInput[]
    NOT?: CashierBalanceHistoryWhereInput | CashierBalanceHistoryWhereInput[]
    cashierId?: StringFilter<"CashierBalanceHistory"> | string
    startTime?: DateTimeFilter<"CashierBalanceHistory"> | Date | string
    endTime?: DateTimeNullableFilter<"CashierBalanceHistory"> | Date | string | null
    startingCash?: FloatFilter<"CashierBalanceHistory"> | number
    endingCash?: FloatNullableFilter<"CashierBalanceHistory"> | number | null
    createdAt?: DateTimeFilter<"CashierBalanceHistory"> | Date | string
    updatedAt?: DateTimeFilter<"CashierBalanceHistory"> | Date | string
    deletedAt?: DateTimeNullableFilter<"CashierBalanceHistory"> | Date | string | null
    cashier?: XOR<CashierScalarRelationFilter, CashierWhereInput>
    transaction?: TransactionListRelationFilter
  }, "id">

  export type CashierBalanceHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    cashierId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    startingCash?: SortOrder
    endingCash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CashierBalanceHistoryCountOrderByAggregateInput
    _avg?: CashierBalanceHistoryAvgOrderByAggregateInput
    _max?: CashierBalanceHistoryMaxOrderByAggregateInput
    _min?: CashierBalanceHistoryMinOrderByAggregateInput
    _sum?: CashierBalanceHistorySumOrderByAggregateInput
  }

  export type CashierBalanceHistoryScalarWhereWithAggregatesInput = {
    AND?: CashierBalanceHistoryScalarWhereWithAggregatesInput | CashierBalanceHistoryScalarWhereWithAggregatesInput[]
    OR?: CashierBalanceHistoryScalarWhereWithAggregatesInput[]
    NOT?: CashierBalanceHistoryScalarWhereWithAggregatesInput | CashierBalanceHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CashierBalanceHistory"> | string
    cashierId?: StringWithAggregatesFilter<"CashierBalanceHistory"> | string
    startTime?: DateTimeWithAggregatesFilter<"CashierBalanceHistory"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"CashierBalanceHistory"> | Date | string | null
    startingCash?: FloatWithAggregatesFilter<"CashierBalanceHistory"> | number
    endingCash?: FloatNullableWithAggregatesFilter<"CashierBalanceHistory"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"CashierBalanceHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CashierBalanceHistory"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"CashierBalanceHistory"> | Date | string | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    productCategoryId?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    productImgUrl?: StringNullableFilter<"Product"> | string | null
    cldPublicId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    productCategory?: XOR<ProductCategoryScalarRelationFilter, ProductCategoryWhereInput>
    cartItems?: CartItemListRelationFilter
    transactionItems?: TransactionItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    productCategoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    productImgUrl?: SortOrderInput | SortOrder
    cldPublicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    productCategory?: ProductCategoryOrderByWithRelationInput
    cartItems?: CartItemOrderByRelationAggregateInput
    transactionItems?: TransactionItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    productCategoryId?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    productImgUrl?: StringNullableFilter<"Product"> | string | null
    cldPublicId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    productCategory?: XOR<ProductCategoryScalarRelationFilter, ProductCategoryWhereInput>
    cartItems?: CartItemListRelationFilter
    transactionItems?: TransactionItemListRelationFilter
  }, "id" | "slug">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    productCategoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    productImgUrl?: SortOrderInput | SortOrder
    cldPublicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    productCategoryId?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    slug?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    price?: FloatWithAggregatesFilter<"Product"> | number
    productImgUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    cldPublicId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
  }

  export type ProductCategoryWhereInput = {
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    id?: IntFilter<"ProductCategory"> | number
    name?: StringFilter<"ProductCategory"> | string
    slug?: StringFilter<"ProductCategory"> | string
    createdAt?: DateTimeFilter<"ProductCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ProductCategory"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ProductCategory"> | Date | string | null
    product?: ProductListRelationFilter
  }

  export type ProductCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    product?: ProductOrderByRelationAggregateInput
  }

  export type ProductCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    name?: StringFilter<"ProductCategory"> | string
    createdAt?: DateTimeFilter<"ProductCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ProductCategory"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ProductCategory"> | Date | string | null
    product?: ProductListRelationFilter
  }, "id" | "slug">

  export type ProductCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ProductCategoryCountOrderByAggregateInput
    _avg?: ProductCategoryAvgOrderByAggregateInput
    _max?: ProductCategoryMaxOrderByAggregateInput
    _min?: ProductCategoryMinOrderByAggregateInput
    _sum?: ProductCategorySumOrderByAggregateInput
  }

  export type ProductCategoryScalarWhereWithAggregatesInput = {
    AND?: ProductCategoryScalarWhereWithAggregatesInput | ProductCategoryScalarWhereWithAggregatesInput[]
    OR?: ProductCategoryScalarWhereWithAggregatesInput[]
    NOT?: ProductCategoryScalarWhereWithAggregatesInput | ProductCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductCategory"> | number
    name?: StringWithAggregatesFilter<"ProductCategory"> | string
    slug?: StringWithAggregatesFilter<"ProductCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProductCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductCategory"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ProductCategory"> | Date | string | null
  }

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    id?: StringFilter<"Cart"> | string
    customerName?: StringFilter<"Cart"> | string
    cashierId?: StringFilter<"Cart"> | string
    status?: EnumCartStatusFilter<"Cart"> | $Enums.CartStatus
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    updatedAt?: DateTimeFilter<"Cart"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Cart"> | Date | string | null
    cartItems?: CartItemListRelationFilter
    cashier?: XOR<CashierScalarRelationFilter, CashierWhereInput>
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    customerName?: SortOrder
    cashierId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    cartItems?: CartItemOrderByRelationAggregateInput
    cashier?: CashierOrderByWithRelationInput
    transaction?: TransactionOrderByWithRelationInput
  }

  export type CartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    customerName?: StringFilter<"Cart"> | string
    cashierId?: StringFilter<"Cart"> | string
    status?: EnumCartStatusFilter<"Cart"> | $Enums.CartStatus
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    updatedAt?: DateTimeFilter<"Cart"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Cart"> | Date | string | null
    cartItems?: CartItemListRelationFilter
    cashier?: XOR<CashierScalarRelationFilter, CashierWhereInput>
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }, "id">

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    customerName?: SortOrder
    cashierId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CartCountOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    OR?: CartScalarWhereWithAggregatesInput[]
    NOT?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cart"> | string
    customerName?: StringWithAggregatesFilter<"Cart"> | string
    cashierId?: StringWithAggregatesFilter<"Cart"> | string
    status?: EnumCartStatusWithAggregatesFilter<"Cart"> | $Enums.CartStatus
    createdAt?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Cart"> | Date | string | null
  }

  export type CartItemWhereInput = {
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    id?: StringFilter<"CartItem"> | string
    cartId?: StringFilter<"CartItem"> | string
    productId?: StringFilter<"CartItem"> | string
    quantity?: IntFilter<"CartItem"> | number
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeFilter<"CartItem"> | Date | string
    deletedAt?: DateTimeNullableFilter<"CartItem"> | Date | string | null
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type CartItemOrderByWithRelationInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    cart?: CartOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type CartItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    cartId?: StringFilter<"CartItem"> | string
    productId?: StringFilter<"CartItem"> | string
    quantity?: IntFilter<"CartItem"> | number
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeFilter<"CartItem"> | Date | string
    deletedAt?: DateTimeNullableFilter<"CartItem"> | Date | string | null
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type CartItemOrderByWithAggregationInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CartItemCountOrderByAggregateInput
    _avg?: CartItemAvgOrderByAggregateInput
    _max?: CartItemMaxOrderByAggregateInput
    _min?: CartItemMinOrderByAggregateInput
    _sum?: CartItemSumOrderByAggregateInput
  }

  export type CartItemScalarWhereWithAggregatesInput = {
    AND?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    OR?: CartItemScalarWhereWithAggregatesInput[]
    NOT?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CartItem"> | string
    cartId?: StringWithAggregatesFilter<"CartItem"> | string
    productId?: StringWithAggregatesFilter<"CartItem"> | string
    quantity?: IntWithAggregatesFilter<"CartItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CartItem"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"CartItem"> | Date | string | null
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    cartId?: StringFilter<"Transaction"> | string
    cashierId?: StringFilter<"Transaction"> | string
    cashierBalanceHistoryId?: StringFilter<"Transaction"> | string
    paymentType?: EnumPaymentTypeFilter<"Transaction"> | $Enums.PaymentType
    debitCardNumber?: StringNullableFilter<"Transaction"> | string | null
    totalAmount?: FloatFilter<"Transaction"> | number
    changeAmount?: FloatNullableFilter<"Transaction"> | number | null
    paymentDate?: DateTimeFilter<"Transaction"> | Date | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    cashier?: XOR<CashierScalarRelationFilter, CashierWhereInput>
    cashierBalanceHistory?: XOR<CashierBalanceHistoryScalarRelationFilter, CashierBalanceHistoryWhereInput>
    transactionItems?: TransactionItemListRelationFilter
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    cartId?: SortOrder
    cashierId?: SortOrder
    cashierBalanceHistoryId?: SortOrder
    paymentType?: SortOrder
    debitCardNumber?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    changeAmount?: SortOrderInput | SortOrder
    paymentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    cart?: CartOrderByWithRelationInput
    cashier?: CashierOrderByWithRelationInput
    cashierBalanceHistory?: CashierBalanceHistoryOrderByWithRelationInput
    transactionItems?: TransactionItemOrderByRelationAggregateInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cartId?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    cashierId?: StringFilter<"Transaction"> | string
    cashierBalanceHistoryId?: StringFilter<"Transaction"> | string
    paymentType?: EnumPaymentTypeFilter<"Transaction"> | $Enums.PaymentType
    debitCardNumber?: StringNullableFilter<"Transaction"> | string | null
    totalAmount?: FloatFilter<"Transaction"> | number
    changeAmount?: FloatNullableFilter<"Transaction"> | number | null
    paymentDate?: DateTimeFilter<"Transaction"> | Date | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    cashier?: XOR<CashierScalarRelationFilter, CashierWhereInput>
    cashierBalanceHistory?: XOR<CashierBalanceHistoryScalarRelationFilter, CashierBalanceHistoryWhereInput>
    transactionItems?: TransactionItemListRelationFilter
  }, "id" | "cartId">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    cartId?: SortOrder
    cashierId?: SortOrder
    cashierBalanceHistoryId?: SortOrder
    paymentType?: SortOrder
    debitCardNumber?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    changeAmount?: SortOrderInput | SortOrder
    paymentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    cartId?: StringWithAggregatesFilter<"Transaction"> | string
    cashierId?: StringWithAggregatesFilter<"Transaction"> | string
    cashierBalanceHistoryId?: StringWithAggregatesFilter<"Transaction"> | string
    paymentType?: EnumPaymentTypeWithAggregatesFilter<"Transaction"> | $Enums.PaymentType
    debitCardNumber?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    totalAmount?: FloatWithAggregatesFilter<"Transaction"> | number
    changeAmount?: FloatNullableWithAggregatesFilter<"Transaction"> | number | null
    paymentDate?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Transaction"> | Date | string | null
  }

  export type TransactionItemWhereInput = {
    AND?: TransactionItemWhereInput | TransactionItemWhereInput[]
    OR?: TransactionItemWhereInput[]
    NOT?: TransactionItemWhereInput | TransactionItemWhereInput[]
    id?: StringFilter<"TransactionItem"> | string
    transactionId?: StringFilter<"TransactionItem"> | string
    productId?: StringFilter<"TransactionItem"> | string
    quantity?: IntFilter<"TransactionItem"> | number
    unitPrice?: FloatFilter<"TransactionItem"> | number
    subTotal?: FloatFilter<"TransactionItem"> | number
    createdAt?: DateTimeFilter<"TransactionItem"> | Date | string
    updatedAt?: DateTimeFilter<"TransactionItem"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TransactionItem"> | Date | string | null
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type TransactionItemOrderByWithRelationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    transaction?: TransactionOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type TransactionItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionItemWhereInput | TransactionItemWhereInput[]
    OR?: TransactionItemWhereInput[]
    NOT?: TransactionItemWhereInput | TransactionItemWhereInput[]
    transactionId?: StringFilter<"TransactionItem"> | string
    productId?: StringFilter<"TransactionItem"> | string
    quantity?: IntFilter<"TransactionItem"> | number
    unitPrice?: FloatFilter<"TransactionItem"> | number
    subTotal?: FloatFilter<"TransactionItem"> | number
    createdAt?: DateTimeFilter<"TransactionItem"> | Date | string
    updatedAt?: DateTimeFilter<"TransactionItem"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TransactionItem"> | Date | string | null
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type TransactionItemOrderByWithAggregationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TransactionItemCountOrderByAggregateInput
    _avg?: TransactionItemAvgOrderByAggregateInput
    _max?: TransactionItemMaxOrderByAggregateInput
    _min?: TransactionItemMinOrderByAggregateInput
    _sum?: TransactionItemSumOrderByAggregateInput
  }

  export type TransactionItemScalarWhereWithAggregatesInput = {
    AND?: TransactionItemScalarWhereWithAggregatesInput | TransactionItemScalarWhereWithAggregatesInput[]
    OR?: TransactionItemScalarWhereWithAggregatesInput[]
    NOT?: TransactionItemScalarWhereWithAggregatesInput | TransactionItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TransactionItem"> | string
    transactionId?: StringWithAggregatesFilter<"TransactionItem"> | string
    productId?: StringWithAggregatesFilter<"TransactionItem"> | string
    quantity?: IntWithAggregatesFilter<"TransactionItem"> | number
    unitPrice?: FloatWithAggregatesFilter<"TransactionItem"> | number
    subTotal?: FloatWithAggregatesFilter<"TransactionItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TransactionItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TransactionItem"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"TransactionItem"> | Date | string | null
  }

  export type CashierCreateInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    isEmailVerified?: boolean
    avatarImgUrl?: string | null
    cldPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shift: $Enums.ShiftSession
    cashierBalanceHistory?: CashierBalanceHistoryCreateNestedManyWithoutCashierInput
    cart?: CartCreateNestedManyWithoutCashierInput
    transaction?: TransactionCreateNestedManyWithoutCashierInput
  }

  export type CashierUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    isEmailVerified?: boolean
    avatarImgUrl?: string | null
    cldPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shift: $Enums.ShiftSession
    cashierBalanceHistory?: CashierBalanceHistoryUncheckedCreateNestedManyWithoutCashierInput
    cart?: CartUncheckedCreateNestedManyWithoutCashierInput
    transaction?: TransactionUncheckedCreateNestedManyWithoutCashierInput
  }

  export type CashierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shift?: EnumShiftSessionFieldUpdateOperationsInput | $Enums.ShiftSession
    cashierBalanceHistory?: CashierBalanceHistoryUpdateManyWithoutCashierNestedInput
    cart?: CartUpdateManyWithoutCashierNestedInput
    transaction?: TransactionUpdateManyWithoutCashierNestedInput
  }

  export type CashierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shift?: EnumShiftSessionFieldUpdateOperationsInput | $Enums.ShiftSession
    cashierBalanceHistory?: CashierBalanceHistoryUncheckedUpdateManyWithoutCashierNestedInput
    cart?: CartUncheckedUpdateManyWithoutCashierNestedInput
    transaction?: TransactionUncheckedUpdateManyWithoutCashierNestedInput
  }

  export type CashierCreateManyInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    isEmailVerified?: boolean
    avatarImgUrl?: string | null
    cldPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shift: $Enums.ShiftSession
  }

  export type CashierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shift?: EnumShiftSessionFieldUpdateOperationsInput | $Enums.ShiftSession
  }

  export type CashierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shift?: EnumShiftSessionFieldUpdateOperationsInput | $Enums.ShiftSession
  }

  export type AdminCreateInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    phoneNumber: string
    isEmailVerified?: boolean
    avatarImgUrl?: string | null
    cldPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    phoneNumber: string
    isEmailVerified?: boolean
    avatarImgUrl?: string | null
    cldPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminCreateManyInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    phoneNumber: string
    isEmailVerified?: boolean
    avatarImgUrl?: string | null
    cldPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CashierBalanceHistoryCreateInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    startingCash: number
    endingCash?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cashier: CashierCreateNestedOneWithoutCashierBalanceHistoryInput
    transaction?: TransactionCreateNestedManyWithoutCashierBalanceHistoryInput
  }

  export type CashierBalanceHistoryUncheckedCreateInput = {
    id?: string
    cashierId: string
    startTime: Date | string
    endTime?: Date | string | null
    startingCash: number
    endingCash?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transaction?: TransactionUncheckedCreateNestedManyWithoutCashierBalanceHistoryInput
  }

  export type CashierBalanceHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startingCash?: FloatFieldUpdateOperationsInput | number
    endingCash?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cashier?: CashierUpdateOneRequiredWithoutCashierBalanceHistoryNestedInput
    transaction?: TransactionUpdateManyWithoutCashierBalanceHistoryNestedInput
  }

  export type CashierBalanceHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cashierId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startingCash?: FloatFieldUpdateOperationsInput | number
    endingCash?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction?: TransactionUncheckedUpdateManyWithoutCashierBalanceHistoryNestedInput
  }

  export type CashierBalanceHistoryCreateManyInput = {
    id?: string
    cashierId: string
    startTime: Date | string
    endTime?: Date | string | null
    startingCash: number
    endingCash?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CashierBalanceHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startingCash?: FloatFieldUpdateOperationsInput | number
    endingCash?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CashierBalanceHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cashierId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startingCash?: FloatFieldUpdateOperationsInput | number
    endingCash?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    price: number
    productImgUrl?: string | null
    cldPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    productCategory: ProductCategoryCreateNestedOneWithoutProductInput
    cartItems?: CartItemCreateNestedManyWithoutProductInput
    transactionItems?: TransactionItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    productCategoryId: number
    name: string
    slug: string
    description?: string | null
    price: number
    productImgUrl?: string | null
    cldPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput
    transactionItems?: TransactionItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    productImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productCategory?: ProductCategoryUpdateOneRequiredWithoutProductNestedInput
    cartItems?: CartItemUpdateManyWithoutProductNestedInput
    transactionItems?: TransactionItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productCategoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    productImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    transactionItems?: TransactionItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    productCategoryId: number
    name: string
    slug: string
    description?: string | null
    price: number
    productImgUrl?: string | null
    cldPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    productImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productCategoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    productImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCategoryCreateInput = {
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    product?: ProductCreateNestedManyWithoutProductCategoryInput
  }

  export type ProductCategoryUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    product?: ProductUncheckedCreateNestedManyWithoutProductCategoryInput
  }

  export type ProductCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: ProductUpdateManyWithoutProductCategoryNestedInput
  }

  export type ProductCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: ProductUncheckedUpdateManyWithoutProductCategoryNestedInput
  }

  export type ProductCategoryCreateManyInput = {
    id?: number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProductCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CartCreateInput = {
    id?: string
    customerName: string
    status?: $Enums.CartStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cartItems?: CartItemCreateNestedManyWithoutCartInput
    cashier: CashierCreateNestedOneWithoutCartInput
    transaction?: TransactionCreateNestedOneWithoutCartInput
  }

  export type CartUncheckedCreateInput = {
    id?: string
    customerName: string
    cashierId: string
    status?: $Enums.CartStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cartItems?: CartItemUncheckedCreateNestedManyWithoutCartInput
    transaction?: TransactionUncheckedCreateNestedOneWithoutCartInput
  }

  export type CartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cartItems?: CartItemUpdateManyWithoutCartNestedInput
    cashier?: CashierUpdateOneRequiredWithoutCartNestedInput
    transaction?: TransactionUpdateOneWithoutCartNestedInput
  }

  export type CartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    cashierId?: StringFieldUpdateOperationsInput | string
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cartItems?: CartItemUncheckedUpdateManyWithoutCartNestedInput
    transaction?: TransactionUncheckedUpdateOneWithoutCartNestedInput
  }

  export type CartCreateManyInput = {
    id?: string
    customerName: string
    cashierId: string
    status?: $Enums.CartStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    cashierId?: StringFieldUpdateOperationsInput | string
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CartItemCreateInput = {
    id?: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cart: CartCreateNestedOneWithoutCartItemsInput
    product: ProductCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateInput = {
    id?: string
    cartId: string
    productId: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CartItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart?: CartUpdateOneRequiredWithoutCartItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CartItemCreateManyInput = {
    id?: string
    cartId: string
    productId: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CartItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CartItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionCreateInput = {
    id?: string
    paymentType: $Enums.PaymentType
    debitCardNumber?: string | null
    totalAmount: number
    changeAmount?: number | null
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cart: CartCreateNestedOneWithoutTransactionInput
    cashier: CashierCreateNestedOneWithoutTransactionInput
    cashierBalanceHistory: CashierBalanceHistoryCreateNestedOneWithoutTransactionInput
    transactionItems?: TransactionItemCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    cartId: string
    cashierId: string
    cashierBalanceHistoryId: string
    paymentType: $Enums.PaymentType
    debitCardNumber?: string | null
    totalAmount: number
    changeAmount?: number | null
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transactionItems?: TransactionItemUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    debitCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    changeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart?: CartUpdateOneRequiredWithoutTransactionNestedInput
    cashier?: CashierUpdateOneRequiredWithoutTransactionNestedInput
    cashierBalanceHistory?: CashierBalanceHistoryUpdateOneRequiredWithoutTransactionNestedInput
    transactionItems?: TransactionItemUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    cashierId?: StringFieldUpdateOperationsInput | string
    cashierBalanceHistoryId?: StringFieldUpdateOperationsInput | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    debitCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    changeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionItems?: TransactionItemUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionCreateManyInput = {
    id?: string
    cartId: string
    cashierId: string
    cashierBalanceHistoryId: string
    paymentType: $Enums.PaymentType
    debitCardNumber?: string | null
    totalAmount: number
    changeAmount?: number | null
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    debitCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    changeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    cashierId?: StringFieldUpdateOperationsInput | string
    cashierBalanceHistoryId?: StringFieldUpdateOperationsInput | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    debitCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    changeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionItemCreateInput = {
    id?: string
    quantity: number
    unitPrice: number
    subTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transaction: TransactionCreateNestedOneWithoutTransactionItemsInput
    product: ProductCreateNestedOneWithoutTransactionItemsInput
  }

  export type TransactionItemUncheckedCreateInput = {
    id?: string
    transactionId: string
    productId: string
    quantity: number
    unitPrice: number
    subTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TransactionItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction?: TransactionUpdateOneRequiredWithoutTransactionItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutTransactionItemsNestedInput
  }

  export type TransactionItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionItemCreateManyInput = {
    id?: string
    transactionId: string
    productId: string
    quantity: number
    unitPrice: number
    subTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TransactionItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumShiftSessionFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftSession | EnumShiftSessionFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftSession[] | ListEnumShiftSessionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftSession[] | ListEnumShiftSessionFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftSessionFilter<$PrismaModel> | $Enums.ShiftSession
  }

  export type CashierBalanceHistoryListRelationFilter = {
    every?: CashierBalanceHistoryWhereInput
    some?: CashierBalanceHistoryWhereInput
    none?: CashierBalanceHistoryWhereInput
  }

  export type CartListRelationFilter = {
    every?: CartWhereInput
    some?: CartWhereInput
    none?: CartWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CashierBalanceHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CashierCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    gender?: SortOrder
    isEmailVerified?: SortOrder
    avatarImgUrl?: SortOrder
    cldPublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    shift?: SortOrder
  }

  export type CashierMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    gender?: SortOrder
    isEmailVerified?: SortOrder
    avatarImgUrl?: SortOrder
    cldPublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    shift?: SortOrder
  }

  export type CashierMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    gender?: SortOrder
    isEmailVerified?: SortOrder
    avatarImgUrl?: SortOrder
    cldPublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    shift?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumShiftSessionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftSession | EnumShiftSessionFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftSession[] | ListEnumShiftSessionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftSession[] | ListEnumShiftSessionFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftSessionWithAggregatesFilter<$PrismaModel> | $Enums.ShiftSession
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShiftSessionFilter<$PrismaModel>
    _max?: NestedEnumShiftSessionFilter<$PrismaModel>
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    isEmailVerified?: SortOrder
    avatarImgUrl?: SortOrder
    cldPublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    isEmailVerified?: SortOrder
    avatarImgUrl?: SortOrder
    cldPublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    isEmailVerified?: SortOrder
    avatarImgUrl?: SortOrder
    cldPublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CashierScalarRelationFilter = {
    is?: CashierWhereInput
    isNot?: CashierWhereInput
  }

  export type CashierBalanceHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    cashierId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    startingCash?: SortOrder
    endingCash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CashierBalanceHistoryAvgOrderByAggregateInput = {
    startingCash?: SortOrder
    endingCash?: SortOrder
  }

  export type CashierBalanceHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    cashierId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    startingCash?: SortOrder
    endingCash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CashierBalanceHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    cashierId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    startingCash?: SortOrder
    endingCash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CashierBalanceHistorySumOrderByAggregateInput = {
    startingCash?: SortOrder
    endingCash?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProductCategoryScalarRelationFilter = {
    is?: ProductCategoryWhereInput
    isNot?: ProductCategoryWhereInput
  }

  export type CartItemListRelationFilter = {
    every?: CartItemWhereInput
    some?: CartItemWhereInput
    none?: CartItemWhereInput
  }

  export type TransactionItemListRelationFilter = {
    every?: TransactionItemWhereInput
    some?: TransactionItemWhereInput
    none?: TransactionItemWhereInput
  }

  export type CartItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    productCategoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    productImgUrl?: SortOrder
    cldPublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    productCategoryId?: SortOrder
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    productCategoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    productImgUrl?: SortOrder
    cldPublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    productCategoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    productImgUrl?: SortOrder
    cldPublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    productCategoryId?: SortOrder
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProductCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProductCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProductCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumCartStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CartStatus | EnumCartStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCartStatusFilter<$PrismaModel> | $Enums.CartStatus
  }

  export type TransactionNullableScalarRelationFilter = {
    is?: TransactionWhereInput | null
    isNot?: TransactionWhereInput | null
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    cashierId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    cashierId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    cashierId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnumCartStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CartStatus | EnumCartStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCartStatusWithAggregatesFilter<$PrismaModel> | $Enums.CartStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCartStatusFilter<$PrismaModel>
    _max?: NestedEnumCartStatusFilter<$PrismaModel>
  }

  export type CartScalarRelationFilter = {
    is?: CartWhereInput
    isNot?: CartWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type CartItemCountOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CartItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type CartItemMaxOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CartItemMinOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CartItemSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type EnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type CashierBalanceHistoryScalarRelationFilter = {
    is?: CashierBalanceHistoryWhereInput
    isNot?: CashierBalanceHistoryWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    cashierId?: SortOrder
    cashierBalanceHistoryId?: SortOrder
    paymentType?: SortOrder
    debitCardNumber?: SortOrder
    totalAmount?: SortOrder
    changeAmount?: SortOrder
    paymentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    changeAmount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    cashierId?: SortOrder
    cashierBalanceHistoryId?: SortOrder
    paymentType?: SortOrder
    debitCardNumber?: SortOrder
    totalAmount?: SortOrder
    changeAmount?: SortOrder
    paymentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    cashierId?: SortOrder
    cashierBalanceHistoryId?: SortOrder
    paymentType?: SortOrder
    debitCardNumber?: SortOrder
    totalAmount?: SortOrder
    changeAmount?: SortOrder
    paymentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    changeAmount?: SortOrder
  }

  export type EnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type TransactionScalarRelationFilter = {
    is?: TransactionWhereInput
    isNot?: TransactionWhereInput
  }

  export type TransactionItemCountOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TransactionItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    subTotal?: SortOrder
  }

  export type TransactionItemMaxOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TransactionItemMinOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TransactionItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    subTotal?: SortOrder
  }

  export type CashierBalanceHistoryCreateNestedManyWithoutCashierInput = {
    create?: XOR<CashierBalanceHistoryCreateWithoutCashierInput, CashierBalanceHistoryUncheckedCreateWithoutCashierInput> | CashierBalanceHistoryCreateWithoutCashierInput[] | CashierBalanceHistoryUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: CashierBalanceHistoryCreateOrConnectWithoutCashierInput | CashierBalanceHistoryCreateOrConnectWithoutCashierInput[]
    createMany?: CashierBalanceHistoryCreateManyCashierInputEnvelope
    connect?: CashierBalanceHistoryWhereUniqueInput | CashierBalanceHistoryWhereUniqueInput[]
  }

  export type CartCreateNestedManyWithoutCashierInput = {
    create?: XOR<CartCreateWithoutCashierInput, CartUncheckedCreateWithoutCashierInput> | CartCreateWithoutCashierInput[] | CartUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: CartCreateOrConnectWithoutCashierInput | CartCreateOrConnectWithoutCashierInput[]
    createMany?: CartCreateManyCashierInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutCashierInput = {
    create?: XOR<TransactionCreateWithoutCashierInput, TransactionUncheckedCreateWithoutCashierInput> | TransactionCreateWithoutCashierInput[] | TransactionUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCashierInput | TransactionCreateOrConnectWithoutCashierInput[]
    createMany?: TransactionCreateManyCashierInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type CashierBalanceHistoryUncheckedCreateNestedManyWithoutCashierInput = {
    create?: XOR<CashierBalanceHistoryCreateWithoutCashierInput, CashierBalanceHistoryUncheckedCreateWithoutCashierInput> | CashierBalanceHistoryCreateWithoutCashierInput[] | CashierBalanceHistoryUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: CashierBalanceHistoryCreateOrConnectWithoutCashierInput | CashierBalanceHistoryCreateOrConnectWithoutCashierInput[]
    createMany?: CashierBalanceHistoryCreateManyCashierInputEnvelope
    connect?: CashierBalanceHistoryWhereUniqueInput | CashierBalanceHistoryWhereUniqueInput[]
  }

  export type CartUncheckedCreateNestedManyWithoutCashierInput = {
    create?: XOR<CartCreateWithoutCashierInput, CartUncheckedCreateWithoutCashierInput> | CartCreateWithoutCashierInput[] | CartUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: CartCreateOrConnectWithoutCashierInput | CartCreateOrConnectWithoutCashierInput[]
    createMany?: CartCreateManyCashierInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCashierInput = {
    create?: XOR<TransactionCreateWithoutCashierInput, TransactionUncheckedCreateWithoutCashierInput> | TransactionCreateWithoutCashierInput[] | TransactionUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCashierInput | TransactionCreateOrConnectWithoutCashierInput[]
    createMany?: TransactionCreateManyCashierInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumShiftSessionFieldUpdateOperationsInput = {
    set?: $Enums.ShiftSession
  }

  export type CashierBalanceHistoryUpdateManyWithoutCashierNestedInput = {
    create?: XOR<CashierBalanceHistoryCreateWithoutCashierInput, CashierBalanceHistoryUncheckedCreateWithoutCashierInput> | CashierBalanceHistoryCreateWithoutCashierInput[] | CashierBalanceHistoryUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: CashierBalanceHistoryCreateOrConnectWithoutCashierInput | CashierBalanceHistoryCreateOrConnectWithoutCashierInput[]
    upsert?: CashierBalanceHistoryUpsertWithWhereUniqueWithoutCashierInput | CashierBalanceHistoryUpsertWithWhereUniqueWithoutCashierInput[]
    createMany?: CashierBalanceHistoryCreateManyCashierInputEnvelope
    set?: CashierBalanceHistoryWhereUniqueInput | CashierBalanceHistoryWhereUniqueInput[]
    disconnect?: CashierBalanceHistoryWhereUniqueInput | CashierBalanceHistoryWhereUniqueInput[]
    delete?: CashierBalanceHistoryWhereUniqueInput | CashierBalanceHistoryWhereUniqueInput[]
    connect?: CashierBalanceHistoryWhereUniqueInput | CashierBalanceHistoryWhereUniqueInput[]
    update?: CashierBalanceHistoryUpdateWithWhereUniqueWithoutCashierInput | CashierBalanceHistoryUpdateWithWhereUniqueWithoutCashierInput[]
    updateMany?: CashierBalanceHistoryUpdateManyWithWhereWithoutCashierInput | CashierBalanceHistoryUpdateManyWithWhereWithoutCashierInput[]
    deleteMany?: CashierBalanceHistoryScalarWhereInput | CashierBalanceHistoryScalarWhereInput[]
  }

  export type CartUpdateManyWithoutCashierNestedInput = {
    create?: XOR<CartCreateWithoutCashierInput, CartUncheckedCreateWithoutCashierInput> | CartCreateWithoutCashierInput[] | CartUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: CartCreateOrConnectWithoutCashierInput | CartCreateOrConnectWithoutCashierInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutCashierInput | CartUpsertWithWhereUniqueWithoutCashierInput[]
    createMany?: CartCreateManyCashierInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutCashierInput | CartUpdateWithWhereUniqueWithoutCashierInput[]
    updateMany?: CartUpdateManyWithWhereWithoutCashierInput | CartUpdateManyWithWhereWithoutCashierInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutCashierNestedInput = {
    create?: XOR<TransactionCreateWithoutCashierInput, TransactionUncheckedCreateWithoutCashierInput> | TransactionCreateWithoutCashierInput[] | TransactionUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCashierInput | TransactionCreateOrConnectWithoutCashierInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCashierInput | TransactionUpsertWithWhereUniqueWithoutCashierInput[]
    createMany?: TransactionCreateManyCashierInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCashierInput | TransactionUpdateWithWhereUniqueWithoutCashierInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCashierInput | TransactionUpdateManyWithWhereWithoutCashierInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type CashierBalanceHistoryUncheckedUpdateManyWithoutCashierNestedInput = {
    create?: XOR<CashierBalanceHistoryCreateWithoutCashierInput, CashierBalanceHistoryUncheckedCreateWithoutCashierInput> | CashierBalanceHistoryCreateWithoutCashierInput[] | CashierBalanceHistoryUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: CashierBalanceHistoryCreateOrConnectWithoutCashierInput | CashierBalanceHistoryCreateOrConnectWithoutCashierInput[]
    upsert?: CashierBalanceHistoryUpsertWithWhereUniqueWithoutCashierInput | CashierBalanceHistoryUpsertWithWhereUniqueWithoutCashierInput[]
    createMany?: CashierBalanceHistoryCreateManyCashierInputEnvelope
    set?: CashierBalanceHistoryWhereUniqueInput | CashierBalanceHistoryWhereUniqueInput[]
    disconnect?: CashierBalanceHistoryWhereUniqueInput | CashierBalanceHistoryWhereUniqueInput[]
    delete?: CashierBalanceHistoryWhereUniqueInput | CashierBalanceHistoryWhereUniqueInput[]
    connect?: CashierBalanceHistoryWhereUniqueInput | CashierBalanceHistoryWhereUniqueInput[]
    update?: CashierBalanceHistoryUpdateWithWhereUniqueWithoutCashierInput | CashierBalanceHistoryUpdateWithWhereUniqueWithoutCashierInput[]
    updateMany?: CashierBalanceHistoryUpdateManyWithWhereWithoutCashierInput | CashierBalanceHistoryUpdateManyWithWhereWithoutCashierInput[]
    deleteMany?: CashierBalanceHistoryScalarWhereInput | CashierBalanceHistoryScalarWhereInput[]
  }

  export type CartUncheckedUpdateManyWithoutCashierNestedInput = {
    create?: XOR<CartCreateWithoutCashierInput, CartUncheckedCreateWithoutCashierInput> | CartCreateWithoutCashierInput[] | CartUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: CartCreateOrConnectWithoutCashierInput | CartCreateOrConnectWithoutCashierInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutCashierInput | CartUpsertWithWhereUniqueWithoutCashierInput[]
    createMany?: CartCreateManyCashierInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutCashierInput | CartUpdateWithWhereUniqueWithoutCashierInput[]
    updateMany?: CartUpdateManyWithWhereWithoutCashierInput | CartUpdateManyWithWhereWithoutCashierInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCashierNestedInput = {
    create?: XOR<TransactionCreateWithoutCashierInput, TransactionUncheckedCreateWithoutCashierInput> | TransactionCreateWithoutCashierInput[] | TransactionUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCashierInput | TransactionCreateOrConnectWithoutCashierInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCashierInput | TransactionUpsertWithWhereUniqueWithoutCashierInput[]
    createMany?: TransactionCreateManyCashierInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCashierInput | TransactionUpdateWithWhereUniqueWithoutCashierInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCashierInput | TransactionUpdateManyWithWhereWithoutCashierInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type CashierCreateNestedOneWithoutCashierBalanceHistoryInput = {
    create?: XOR<CashierCreateWithoutCashierBalanceHistoryInput, CashierUncheckedCreateWithoutCashierBalanceHistoryInput>
    connectOrCreate?: CashierCreateOrConnectWithoutCashierBalanceHistoryInput
    connect?: CashierWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutCashierBalanceHistoryInput = {
    create?: XOR<TransactionCreateWithoutCashierBalanceHistoryInput, TransactionUncheckedCreateWithoutCashierBalanceHistoryInput> | TransactionCreateWithoutCashierBalanceHistoryInput[] | TransactionUncheckedCreateWithoutCashierBalanceHistoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCashierBalanceHistoryInput | TransactionCreateOrConnectWithoutCashierBalanceHistoryInput[]
    createMany?: TransactionCreateManyCashierBalanceHistoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCashierBalanceHistoryInput = {
    create?: XOR<TransactionCreateWithoutCashierBalanceHistoryInput, TransactionUncheckedCreateWithoutCashierBalanceHistoryInput> | TransactionCreateWithoutCashierBalanceHistoryInput[] | TransactionUncheckedCreateWithoutCashierBalanceHistoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCashierBalanceHistoryInput | TransactionCreateOrConnectWithoutCashierBalanceHistoryInput[]
    createMany?: TransactionCreateManyCashierBalanceHistoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CashierUpdateOneRequiredWithoutCashierBalanceHistoryNestedInput = {
    create?: XOR<CashierCreateWithoutCashierBalanceHistoryInput, CashierUncheckedCreateWithoutCashierBalanceHistoryInput>
    connectOrCreate?: CashierCreateOrConnectWithoutCashierBalanceHistoryInput
    upsert?: CashierUpsertWithoutCashierBalanceHistoryInput
    connect?: CashierWhereUniqueInput
    update?: XOR<XOR<CashierUpdateToOneWithWhereWithoutCashierBalanceHistoryInput, CashierUpdateWithoutCashierBalanceHistoryInput>, CashierUncheckedUpdateWithoutCashierBalanceHistoryInput>
  }

  export type TransactionUpdateManyWithoutCashierBalanceHistoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCashierBalanceHistoryInput, TransactionUncheckedCreateWithoutCashierBalanceHistoryInput> | TransactionCreateWithoutCashierBalanceHistoryInput[] | TransactionUncheckedCreateWithoutCashierBalanceHistoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCashierBalanceHistoryInput | TransactionCreateOrConnectWithoutCashierBalanceHistoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCashierBalanceHistoryInput | TransactionUpsertWithWhereUniqueWithoutCashierBalanceHistoryInput[]
    createMany?: TransactionCreateManyCashierBalanceHistoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCashierBalanceHistoryInput | TransactionUpdateWithWhereUniqueWithoutCashierBalanceHistoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCashierBalanceHistoryInput | TransactionUpdateManyWithWhereWithoutCashierBalanceHistoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCashierBalanceHistoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCashierBalanceHistoryInput, TransactionUncheckedCreateWithoutCashierBalanceHistoryInput> | TransactionCreateWithoutCashierBalanceHistoryInput[] | TransactionUncheckedCreateWithoutCashierBalanceHistoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCashierBalanceHistoryInput | TransactionCreateOrConnectWithoutCashierBalanceHistoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCashierBalanceHistoryInput | TransactionUpsertWithWhereUniqueWithoutCashierBalanceHistoryInput[]
    createMany?: TransactionCreateManyCashierBalanceHistoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCashierBalanceHistoryInput | TransactionUpdateWithWhereUniqueWithoutCashierBalanceHistoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCashierBalanceHistoryInput | TransactionUpdateManyWithWhereWithoutCashierBalanceHistoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ProductCategoryCreateNestedOneWithoutProductInput = {
    create?: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductInput
    connect?: ProductCategoryWhereUniqueInput
  }

  export type CartItemCreateNestedManyWithoutProductInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type TransactionItemCreateNestedManyWithoutProductInput = {
    create?: XOR<TransactionItemCreateWithoutProductInput, TransactionItemUncheckedCreateWithoutProductInput> | TransactionItemCreateWithoutProductInput[] | TransactionItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TransactionItemCreateOrConnectWithoutProductInput | TransactionItemCreateOrConnectWithoutProductInput[]
    createMany?: TransactionItemCreateManyProductInputEnvelope
    connect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type TransactionItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<TransactionItemCreateWithoutProductInput, TransactionItemUncheckedCreateWithoutProductInput> | TransactionItemCreateWithoutProductInput[] | TransactionItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TransactionItemCreateOrConnectWithoutProductInput | TransactionItemCreateOrConnectWithoutProductInput[]
    createMany?: TransactionItemCreateManyProductInputEnvelope
    connect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
  }

  export type ProductCategoryUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductInput
    upsert?: ProductCategoryUpsertWithoutProductInput
    connect?: ProductCategoryWhereUniqueInput
    update?: XOR<XOR<ProductCategoryUpdateToOneWithWhereWithoutProductInput, ProductCategoryUpdateWithoutProductInput>, ProductCategoryUncheckedUpdateWithoutProductInput>
  }

  export type CartItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutProductInput | CartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutProductInput | CartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutProductInput | CartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type TransactionItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<TransactionItemCreateWithoutProductInput, TransactionItemUncheckedCreateWithoutProductInput> | TransactionItemCreateWithoutProductInput[] | TransactionItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TransactionItemCreateOrConnectWithoutProductInput | TransactionItemCreateOrConnectWithoutProductInput[]
    upsert?: TransactionItemUpsertWithWhereUniqueWithoutProductInput | TransactionItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: TransactionItemCreateManyProductInputEnvelope
    set?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    disconnect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    delete?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    connect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    update?: TransactionItemUpdateWithWhereUniqueWithoutProductInput | TransactionItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: TransactionItemUpdateManyWithWhereWithoutProductInput | TransactionItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: TransactionItemScalarWhereInput | TransactionItemScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CartItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutProductInput | CartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutProductInput | CartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutProductInput | CartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type TransactionItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<TransactionItemCreateWithoutProductInput, TransactionItemUncheckedCreateWithoutProductInput> | TransactionItemCreateWithoutProductInput[] | TransactionItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TransactionItemCreateOrConnectWithoutProductInput | TransactionItemCreateOrConnectWithoutProductInput[]
    upsert?: TransactionItemUpsertWithWhereUniqueWithoutProductInput | TransactionItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: TransactionItemCreateManyProductInputEnvelope
    set?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    disconnect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    delete?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    connect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    update?: TransactionItemUpdateWithWhereUniqueWithoutProductInput | TransactionItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: TransactionItemUpdateManyWithWhereWithoutProductInput | TransactionItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: TransactionItemScalarWhereInput | TransactionItemScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutProductCategoryInput = {
    create?: XOR<ProductCreateWithoutProductCategoryInput, ProductUncheckedCreateWithoutProductCategoryInput> | ProductCreateWithoutProductCategoryInput[] | ProductUncheckedCreateWithoutProductCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProductCategoryInput | ProductCreateOrConnectWithoutProductCategoryInput[]
    createMany?: ProductCreateManyProductCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutProductCategoryInput = {
    create?: XOR<ProductCreateWithoutProductCategoryInput, ProductUncheckedCreateWithoutProductCategoryInput> | ProductCreateWithoutProductCategoryInput[] | ProductUncheckedCreateWithoutProductCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProductCategoryInput | ProductCreateOrConnectWithoutProductCategoryInput[]
    createMany?: ProductCreateManyProductCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutProductCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutProductCategoryInput, ProductUncheckedCreateWithoutProductCategoryInput> | ProductCreateWithoutProductCategoryInput[] | ProductUncheckedCreateWithoutProductCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProductCategoryInput | ProductCreateOrConnectWithoutProductCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutProductCategoryInput | ProductUpsertWithWhereUniqueWithoutProductCategoryInput[]
    createMany?: ProductCreateManyProductCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutProductCategoryInput | ProductUpdateWithWhereUniqueWithoutProductCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutProductCategoryInput | ProductUpdateManyWithWhereWithoutProductCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutProductCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutProductCategoryInput, ProductUncheckedCreateWithoutProductCategoryInput> | ProductCreateWithoutProductCategoryInput[] | ProductUncheckedCreateWithoutProductCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProductCategoryInput | ProductCreateOrConnectWithoutProductCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutProductCategoryInput | ProductUpsertWithWhereUniqueWithoutProductCategoryInput[]
    createMany?: ProductCreateManyProductCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutProductCategoryInput | ProductUpdateWithWhereUniqueWithoutProductCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutProductCategoryInput | ProductUpdateManyWithWhereWithoutProductCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CartItemCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type CashierCreateNestedOneWithoutCartInput = {
    create?: XOR<CashierCreateWithoutCartInput, CashierUncheckedCreateWithoutCartInput>
    connectOrCreate?: CashierCreateOrConnectWithoutCartInput
    connect?: CashierWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutCartInput = {
    create?: XOR<TransactionCreateWithoutCartInput, TransactionUncheckedCreateWithoutCartInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutCartInput
    connect?: TransactionWhereUniqueInput
  }

  export type CartItemUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedOneWithoutCartInput = {
    create?: XOR<TransactionCreateWithoutCartInput, TransactionUncheckedCreateWithoutCartInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutCartInput
    connect?: TransactionWhereUniqueInput
  }

  export type EnumCartStatusFieldUpdateOperationsInput = {
    set?: $Enums.CartStatus
  }

  export type CartItemUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type CashierUpdateOneRequiredWithoutCartNestedInput = {
    create?: XOR<CashierCreateWithoutCartInput, CashierUncheckedCreateWithoutCartInput>
    connectOrCreate?: CashierCreateOrConnectWithoutCartInput
    upsert?: CashierUpsertWithoutCartInput
    connect?: CashierWhereUniqueInput
    update?: XOR<XOR<CashierUpdateToOneWithWhereWithoutCartInput, CashierUpdateWithoutCartInput>, CashierUncheckedUpdateWithoutCartInput>
  }

  export type TransactionUpdateOneWithoutCartNestedInput = {
    create?: XOR<TransactionCreateWithoutCartInput, TransactionUncheckedCreateWithoutCartInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutCartInput
    upsert?: TransactionUpsertWithoutCartInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutCartInput, TransactionUpdateWithoutCartInput>, TransactionUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateOneWithoutCartNestedInput = {
    create?: XOR<TransactionCreateWithoutCartInput, TransactionUncheckedCreateWithoutCartInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutCartInput
    upsert?: TransactionUpsertWithoutCartInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutCartInput, TransactionUpdateWithoutCartInput>, TransactionUncheckedUpdateWithoutCartInput>
  }

  export type CartCreateNestedOneWithoutCartItemsInput = {
    create?: XOR<CartCreateWithoutCartItemsInput, CartUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutCartItemsInput
    connect?: CartWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutCartItemsInput = {
    create?: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type CartUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: XOR<CartCreateWithoutCartItemsInput, CartUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutCartItemsInput
    upsert?: CartUpsertWithoutCartItemsInput
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutCartItemsInput, CartUpdateWithoutCartItemsInput>, CartUncheckedUpdateWithoutCartItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartItemsInput
    upsert?: ProductUpsertWithoutCartItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCartItemsInput, ProductUpdateWithoutCartItemsInput>, ProductUncheckedUpdateWithoutCartItemsInput>
  }

  export type CartCreateNestedOneWithoutTransactionInput = {
    create?: XOR<CartCreateWithoutTransactionInput, CartUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: CartCreateOrConnectWithoutTransactionInput
    connect?: CartWhereUniqueInput
  }

  export type CashierCreateNestedOneWithoutTransactionInput = {
    create?: XOR<CashierCreateWithoutTransactionInput, CashierUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: CashierCreateOrConnectWithoutTransactionInput
    connect?: CashierWhereUniqueInput
  }

  export type CashierBalanceHistoryCreateNestedOneWithoutTransactionInput = {
    create?: XOR<CashierBalanceHistoryCreateWithoutTransactionInput, CashierBalanceHistoryUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: CashierBalanceHistoryCreateOrConnectWithoutTransactionInput
    connect?: CashierBalanceHistoryWhereUniqueInput
  }

  export type TransactionItemCreateNestedManyWithoutTransactionInput = {
    create?: XOR<TransactionItemCreateWithoutTransactionInput, TransactionItemUncheckedCreateWithoutTransactionInput> | TransactionItemCreateWithoutTransactionInput[] | TransactionItemUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionItemCreateOrConnectWithoutTransactionInput | TransactionItemCreateOrConnectWithoutTransactionInput[]
    createMany?: TransactionItemCreateManyTransactionInputEnvelope
    connect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
  }

  export type TransactionItemUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<TransactionItemCreateWithoutTransactionInput, TransactionItemUncheckedCreateWithoutTransactionInput> | TransactionItemCreateWithoutTransactionInput[] | TransactionItemUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionItemCreateOrConnectWithoutTransactionInput | TransactionItemCreateOrConnectWithoutTransactionInput[]
    createMany?: TransactionItemCreateManyTransactionInputEnvelope
    connect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
  }

  export type EnumPaymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentType
  }

  export type CartUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<CartCreateWithoutTransactionInput, CartUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: CartCreateOrConnectWithoutTransactionInput
    upsert?: CartUpsertWithoutTransactionInput
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutTransactionInput, CartUpdateWithoutTransactionInput>, CartUncheckedUpdateWithoutTransactionInput>
  }

  export type CashierUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<CashierCreateWithoutTransactionInput, CashierUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: CashierCreateOrConnectWithoutTransactionInput
    upsert?: CashierUpsertWithoutTransactionInput
    connect?: CashierWhereUniqueInput
    update?: XOR<XOR<CashierUpdateToOneWithWhereWithoutTransactionInput, CashierUpdateWithoutTransactionInput>, CashierUncheckedUpdateWithoutTransactionInput>
  }

  export type CashierBalanceHistoryUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<CashierBalanceHistoryCreateWithoutTransactionInput, CashierBalanceHistoryUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: CashierBalanceHistoryCreateOrConnectWithoutTransactionInput
    upsert?: CashierBalanceHistoryUpsertWithoutTransactionInput
    connect?: CashierBalanceHistoryWhereUniqueInput
    update?: XOR<XOR<CashierBalanceHistoryUpdateToOneWithWhereWithoutTransactionInput, CashierBalanceHistoryUpdateWithoutTransactionInput>, CashierBalanceHistoryUncheckedUpdateWithoutTransactionInput>
  }

  export type TransactionItemUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<TransactionItemCreateWithoutTransactionInput, TransactionItemUncheckedCreateWithoutTransactionInput> | TransactionItemCreateWithoutTransactionInput[] | TransactionItemUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionItemCreateOrConnectWithoutTransactionInput | TransactionItemCreateOrConnectWithoutTransactionInput[]
    upsert?: TransactionItemUpsertWithWhereUniqueWithoutTransactionInput | TransactionItemUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: TransactionItemCreateManyTransactionInputEnvelope
    set?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    disconnect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    delete?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    connect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    update?: TransactionItemUpdateWithWhereUniqueWithoutTransactionInput | TransactionItemUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: TransactionItemUpdateManyWithWhereWithoutTransactionInput | TransactionItemUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: TransactionItemScalarWhereInput | TransactionItemScalarWhereInput[]
  }

  export type TransactionItemUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<TransactionItemCreateWithoutTransactionInput, TransactionItemUncheckedCreateWithoutTransactionInput> | TransactionItemCreateWithoutTransactionInput[] | TransactionItemUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionItemCreateOrConnectWithoutTransactionInput | TransactionItemCreateOrConnectWithoutTransactionInput[]
    upsert?: TransactionItemUpsertWithWhereUniqueWithoutTransactionInput | TransactionItemUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: TransactionItemCreateManyTransactionInputEnvelope
    set?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    disconnect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    delete?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    connect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    update?: TransactionItemUpdateWithWhereUniqueWithoutTransactionInput | TransactionItemUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: TransactionItemUpdateManyWithWhereWithoutTransactionInput | TransactionItemUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: TransactionItemScalarWhereInput | TransactionItemScalarWhereInput[]
  }

  export type TransactionCreateNestedOneWithoutTransactionItemsInput = {
    create?: XOR<TransactionCreateWithoutTransactionItemsInput, TransactionUncheckedCreateWithoutTransactionItemsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutTransactionItemsInput
    connect?: TransactionWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutTransactionItemsInput = {
    create?: XOR<ProductCreateWithoutTransactionItemsInput, ProductUncheckedCreateWithoutTransactionItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTransactionItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type TransactionUpdateOneRequiredWithoutTransactionItemsNestedInput = {
    create?: XOR<TransactionCreateWithoutTransactionItemsInput, TransactionUncheckedCreateWithoutTransactionItemsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutTransactionItemsInput
    upsert?: TransactionUpsertWithoutTransactionItemsInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutTransactionItemsInput, TransactionUpdateWithoutTransactionItemsInput>, TransactionUncheckedUpdateWithoutTransactionItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutTransactionItemsNestedInput = {
    create?: XOR<ProductCreateWithoutTransactionItemsInput, ProductUncheckedCreateWithoutTransactionItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTransactionItemsInput
    upsert?: ProductUpsertWithoutTransactionItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutTransactionItemsInput, ProductUpdateWithoutTransactionItemsInput>, ProductUncheckedUpdateWithoutTransactionItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumShiftSessionFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftSession | EnumShiftSessionFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftSession[] | ListEnumShiftSessionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftSession[] | ListEnumShiftSessionFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftSessionFilter<$PrismaModel> | $Enums.ShiftSession
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumShiftSessionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftSession | EnumShiftSessionFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftSession[] | ListEnumShiftSessionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftSession[] | ListEnumShiftSessionFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftSessionWithAggregatesFilter<$PrismaModel> | $Enums.ShiftSession
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShiftSessionFilter<$PrismaModel>
    _max?: NestedEnumShiftSessionFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumCartStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CartStatus | EnumCartStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCartStatusFilter<$PrismaModel> | $Enums.CartStatus
  }

  export type NestedEnumCartStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CartStatus | EnumCartStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCartStatusWithAggregatesFilter<$PrismaModel> | $Enums.CartStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCartStatusFilter<$PrismaModel>
    _max?: NestedEnumCartStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type CashierBalanceHistoryCreateWithoutCashierInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    startingCash: number
    endingCash?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transaction?: TransactionCreateNestedManyWithoutCashierBalanceHistoryInput
  }

  export type CashierBalanceHistoryUncheckedCreateWithoutCashierInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    startingCash: number
    endingCash?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transaction?: TransactionUncheckedCreateNestedManyWithoutCashierBalanceHistoryInput
  }

  export type CashierBalanceHistoryCreateOrConnectWithoutCashierInput = {
    where: CashierBalanceHistoryWhereUniqueInput
    create: XOR<CashierBalanceHistoryCreateWithoutCashierInput, CashierBalanceHistoryUncheckedCreateWithoutCashierInput>
  }

  export type CashierBalanceHistoryCreateManyCashierInputEnvelope = {
    data: CashierBalanceHistoryCreateManyCashierInput | CashierBalanceHistoryCreateManyCashierInput[]
    skipDuplicates?: boolean
  }

  export type CartCreateWithoutCashierInput = {
    id?: string
    customerName: string
    status?: $Enums.CartStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cartItems?: CartItemCreateNestedManyWithoutCartInput
    transaction?: TransactionCreateNestedOneWithoutCartInput
  }

  export type CartUncheckedCreateWithoutCashierInput = {
    id?: string
    customerName: string
    status?: $Enums.CartStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cartItems?: CartItemUncheckedCreateNestedManyWithoutCartInput
    transaction?: TransactionUncheckedCreateNestedOneWithoutCartInput
  }

  export type CartCreateOrConnectWithoutCashierInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutCashierInput, CartUncheckedCreateWithoutCashierInput>
  }

  export type CartCreateManyCashierInputEnvelope = {
    data: CartCreateManyCashierInput | CartCreateManyCashierInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutCashierInput = {
    id?: string
    paymentType: $Enums.PaymentType
    debitCardNumber?: string | null
    totalAmount: number
    changeAmount?: number | null
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cart: CartCreateNestedOneWithoutTransactionInput
    cashierBalanceHistory: CashierBalanceHistoryCreateNestedOneWithoutTransactionInput
    transactionItems?: TransactionItemCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutCashierInput = {
    id?: string
    cartId: string
    cashierBalanceHistoryId: string
    paymentType: $Enums.PaymentType
    debitCardNumber?: string | null
    totalAmount: number
    changeAmount?: number | null
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transactionItems?: TransactionItemUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutCashierInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCashierInput, TransactionUncheckedCreateWithoutCashierInput>
  }

  export type TransactionCreateManyCashierInputEnvelope = {
    data: TransactionCreateManyCashierInput | TransactionCreateManyCashierInput[]
    skipDuplicates?: boolean
  }

  export type CashierBalanceHistoryUpsertWithWhereUniqueWithoutCashierInput = {
    where: CashierBalanceHistoryWhereUniqueInput
    update: XOR<CashierBalanceHistoryUpdateWithoutCashierInput, CashierBalanceHistoryUncheckedUpdateWithoutCashierInput>
    create: XOR<CashierBalanceHistoryCreateWithoutCashierInput, CashierBalanceHistoryUncheckedCreateWithoutCashierInput>
  }

  export type CashierBalanceHistoryUpdateWithWhereUniqueWithoutCashierInput = {
    where: CashierBalanceHistoryWhereUniqueInput
    data: XOR<CashierBalanceHistoryUpdateWithoutCashierInput, CashierBalanceHistoryUncheckedUpdateWithoutCashierInput>
  }

  export type CashierBalanceHistoryUpdateManyWithWhereWithoutCashierInput = {
    where: CashierBalanceHistoryScalarWhereInput
    data: XOR<CashierBalanceHistoryUpdateManyMutationInput, CashierBalanceHistoryUncheckedUpdateManyWithoutCashierInput>
  }

  export type CashierBalanceHistoryScalarWhereInput = {
    AND?: CashierBalanceHistoryScalarWhereInput | CashierBalanceHistoryScalarWhereInput[]
    OR?: CashierBalanceHistoryScalarWhereInput[]
    NOT?: CashierBalanceHistoryScalarWhereInput | CashierBalanceHistoryScalarWhereInput[]
    id?: StringFilter<"CashierBalanceHistory"> | string
    cashierId?: StringFilter<"CashierBalanceHistory"> | string
    startTime?: DateTimeFilter<"CashierBalanceHistory"> | Date | string
    endTime?: DateTimeNullableFilter<"CashierBalanceHistory"> | Date | string | null
    startingCash?: FloatFilter<"CashierBalanceHistory"> | number
    endingCash?: FloatNullableFilter<"CashierBalanceHistory"> | number | null
    createdAt?: DateTimeFilter<"CashierBalanceHistory"> | Date | string
    updatedAt?: DateTimeFilter<"CashierBalanceHistory"> | Date | string
    deletedAt?: DateTimeNullableFilter<"CashierBalanceHistory"> | Date | string | null
  }

  export type CartUpsertWithWhereUniqueWithoutCashierInput = {
    where: CartWhereUniqueInput
    update: XOR<CartUpdateWithoutCashierInput, CartUncheckedUpdateWithoutCashierInput>
    create: XOR<CartCreateWithoutCashierInput, CartUncheckedCreateWithoutCashierInput>
  }

  export type CartUpdateWithWhereUniqueWithoutCashierInput = {
    where: CartWhereUniqueInput
    data: XOR<CartUpdateWithoutCashierInput, CartUncheckedUpdateWithoutCashierInput>
  }

  export type CartUpdateManyWithWhereWithoutCashierInput = {
    where: CartScalarWhereInput
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyWithoutCashierInput>
  }

  export type CartScalarWhereInput = {
    AND?: CartScalarWhereInput | CartScalarWhereInput[]
    OR?: CartScalarWhereInput[]
    NOT?: CartScalarWhereInput | CartScalarWhereInput[]
    id?: StringFilter<"Cart"> | string
    customerName?: StringFilter<"Cart"> | string
    cashierId?: StringFilter<"Cart"> | string
    status?: EnumCartStatusFilter<"Cart"> | $Enums.CartStatus
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    updatedAt?: DateTimeFilter<"Cart"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Cart"> | Date | string | null
  }

  export type TransactionUpsertWithWhereUniqueWithoutCashierInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCashierInput, TransactionUncheckedUpdateWithoutCashierInput>
    create: XOR<TransactionCreateWithoutCashierInput, TransactionUncheckedCreateWithoutCashierInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCashierInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCashierInput, TransactionUncheckedUpdateWithoutCashierInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCashierInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCashierInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    cartId?: StringFilter<"Transaction"> | string
    cashierId?: StringFilter<"Transaction"> | string
    cashierBalanceHistoryId?: StringFilter<"Transaction"> | string
    paymentType?: EnumPaymentTypeFilter<"Transaction"> | $Enums.PaymentType
    debitCardNumber?: StringNullableFilter<"Transaction"> | string | null
    totalAmount?: FloatFilter<"Transaction"> | number
    changeAmount?: FloatNullableFilter<"Transaction"> | number | null
    paymentDate?: DateTimeFilter<"Transaction"> | Date | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
  }

  export type CashierCreateWithoutCashierBalanceHistoryInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    isEmailVerified?: boolean
    avatarImgUrl?: string | null
    cldPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shift: $Enums.ShiftSession
    cart?: CartCreateNestedManyWithoutCashierInput
    transaction?: TransactionCreateNestedManyWithoutCashierInput
  }

  export type CashierUncheckedCreateWithoutCashierBalanceHistoryInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    isEmailVerified?: boolean
    avatarImgUrl?: string | null
    cldPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shift: $Enums.ShiftSession
    cart?: CartUncheckedCreateNestedManyWithoutCashierInput
    transaction?: TransactionUncheckedCreateNestedManyWithoutCashierInput
  }

  export type CashierCreateOrConnectWithoutCashierBalanceHistoryInput = {
    where: CashierWhereUniqueInput
    create: XOR<CashierCreateWithoutCashierBalanceHistoryInput, CashierUncheckedCreateWithoutCashierBalanceHistoryInput>
  }

  export type TransactionCreateWithoutCashierBalanceHistoryInput = {
    id?: string
    paymentType: $Enums.PaymentType
    debitCardNumber?: string | null
    totalAmount: number
    changeAmount?: number | null
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cart: CartCreateNestedOneWithoutTransactionInput
    cashier: CashierCreateNestedOneWithoutTransactionInput
    transactionItems?: TransactionItemCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutCashierBalanceHistoryInput = {
    id?: string
    cartId: string
    cashierId: string
    paymentType: $Enums.PaymentType
    debitCardNumber?: string | null
    totalAmount: number
    changeAmount?: number | null
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transactionItems?: TransactionItemUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutCashierBalanceHistoryInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCashierBalanceHistoryInput, TransactionUncheckedCreateWithoutCashierBalanceHistoryInput>
  }

  export type TransactionCreateManyCashierBalanceHistoryInputEnvelope = {
    data: TransactionCreateManyCashierBalanceHistoryInput | TransactionCreateManyCashierBalanceHistoryInput[]
    skipDuplicates?: boolean
  }

  export type CashierUpsertWithoutCashierBalanceHistoryInput = {
    update: XOR<CashierUpdateWithoutCashierBalanceHistoryInput, CashierUncheckedUpdateWithoutCashierBalanceHistoryInput>
    create: XOR<CashierCreateWithoutCashierBalanceHistoryInput, CashierUncheckedCreateWithoutCashierBalanceHistoryInput>
    where?: CashierWhereInput
  }

  export type CashierUpdateToOneWithWhereWithoutCashierBalanceHistoryInput = {
    where?: CashierWhereInput
    data: XOR<CashierUpdateWithoutCashierBalanceHistoryInput, CashierUncheckedUpdateWithoutCashierBalanceHistoryInput>
  }

  export type CashierUpdateWithoutCashierBalanceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shift?: EnumShiftSessionFieldUpdateOperationsInput | $Enums.ShiftSession
    cart?: CartUpdateManyWithoutCashierNestedInput
    transaction?: TransactionUpdateManyWithoutCashierNestedInput
  }

  export type CashierUncheckedUpdateWithoutCashierBalanceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shift?: EnumShiftSessionFieldUpdateOperationsInput | $Enums.ShiftSession
    cart?: CartUncheckedUpdateManyWithoutCashierNestedInput
    transaction?: TransactionUncheckedUpdateManyWithoutCashierNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutCashierBalanceHistoryInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCashierBalanceHistoryInput, TransactionUncheckedUpdateWithoutCashierBalanceHistoryInput>
    create: XOR<TransactionCreateWithoutCashierBalanceHistoryInput, TransactionUncheckedCreateWithoutCashierBalanceHistoryInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCashierBalanceHistoryInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCashierBalanceHistoryInput, TransactionUncheckedUpdateWithoutCashierBalanceHistoryInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCashierBalanceHistoryInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCashierBalanceHistoryInput>
  }

  export type ProductCategoryCreateWithoutProductInput = {
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProductCategoryUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProductCategoryCreateOrConnectWithoutProductInput = {
    where: ProductCategoryWhereUniqueInput
    create: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput>
  }

  export type CartItemCreateWithoutProductInput = {
    id?: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cart: CartCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateWithoutProductInput = {
    id?: string
    cartId: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CartItemCreateOrConnectWithoutProductInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemCreateManyProductInputEnvelope = {
    data: CartItemCreateManyProductInput | CartItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type TransactionItemCreateWithoutProductInput = {
    id?: string
    quantity: number
    unitPrice: number
    subTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transaction: TransactionCreateNestedOneWithoutTransactionItemsInput
  }

  export type TransactionItemUncheckedCreateWithoutProductInput = {
    id?: string
    transactionId: string
    quantity: number
    unitPrice: number
    subTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TransactionItemCreateOrConnectWithoutProductInput = {
    where: TransactionItemWhereUniqueInput
    create: XOR<TransactionItemCreateWithoutProductInput, TransactionItemUncheckedCreateWithoutProductInput>
  }

  export type TransactionItemCreateManyProductInputEnvelope = {
    data: TransactionItemCreateManyProductInput | TransactionItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductCategoryUpsertWithoutProductInput = {
    update: XOR<ProductCategoryUpdateWithoutProductInput, ProductCategoryUncheckedUpdateWithoutProductInput>
    create: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput>
    where?: ProductCategoryWhereInput
  }

  export type ProductCategoryUpdateToOneWithWhereWithoutProductInput = {
    where?: ProductCategoryWhereInput
    data: XOR<ProductCategoryUpdateWithoutProductInput, ProductCategoryUncheckedUpdateWithoutProductInput>
  }

  export type ProductCategoryUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCategoryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CartItemUpsertWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
  }

  export type CartItemUpdateManyWithWhereWithoutProductInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutProductInput>
  }

  export type CartItemScalarWhereInput = {
    AND?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    OR?: CartItemScalarWhereInput[]
    NOT?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    id?: StringFilter<"CartItem"> | string
    cartId?: StringFilter<"CartItem"> | string
    productId?: StringFilter<"CartItem"> | string
    quantity?: IntFilter<"CartItem"> | number
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeFilter<"CartItem"> | Date | string
    deletedAt?: DateTimeNullableFilter<"CartItem"> | Date | string | null
  }

  export type TransactionItemUpsertWithWhereUniqueWithoutProductInput = {
    where: TransactionItemWhereUniqueInput
    update: XOR<TransactionItemUpdateWithoutProductInput, TransactionItemUncheckedUpdateWithoutProductInput>
    create: XOR<TransactionItemCreateWithoutProductInput, TransactionItemUncheckedCreateWithoutProductInput>
  }

  export type TransactionItemUpdateWithWhereUniqueWithoutProductInput = {
    where: TransactionItemWhereUniqueInput
    data: XOR<TransactionItemUpdateWithoutProductInput, TransactionItemUncheckedUpdateWithoutProductInput>
  }

  export type TransactionItemUpdateManyWithWhereWithoutProductInput = {
    where: TransactionItemScalarWhereInput
    data: XOR<TransactionItemUpdateManyMutationInput, TransactionItemUncheckedUpdateManyWithoutProductInput>
  }

  export type TransactionItemScalarWhereInput = {
    AND?: TransactionItemScalarWhereInput | TransactionItemScalarWhereInput[]
    OR?: TransactionItemScalarWhereInput[]
    NOT?: TransactionItemScalarWhereInput | TransactionItemScalarWhereInput[]
    id?: StringFilter<"TransactionItem"> | string
    transactionId?: StringFilter<"TransactionItem"> | string
    productId?: StringFilter<"TransactionItem"> | string
    quantity?: IntFilter<"TransactionItem"> | number
    unitPrice?: FloatFilter<"TransactionItem"> | number
    subTotal?: FloatFilter<"TransactionItem"> | number
    createdAt?: DateTimeFilter<"TransactionItem"> | Date | string
    updatedAt?: DateTimeFilter<"TransactionItem"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TransactionItem"> | Date | string | null
  }

  export type ProductCreateWithoutProductCategoryInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    price: number
    productImgUrl?: string | null
    cldPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cartItems?: CartItemCreateNestedManyWithoutProductInput
    transactionItems?: TransactionItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductCategoryInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    price: number
    productImgUrl?: string | null
    cldPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput
    transactionItems?: TransactionItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductCategoryInput, ProductUncheckedCreateWithoutProductCategoryInput>
  }

  export type ProductCreateManyProductCategoryInputEnvelope = {
    data: ProductCreateManyProductCategoryInput | ProductCreateManyProductCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutProductCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutProductCategoryInput, ProductUncheckedUpdateWithoutProductCategoryInput>
    create: XOR<ProductCreateWithoutProductCategoryInput, ProductUncheckedCreateWithoutProductCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutProductCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutProductCategoryInput, ProductUncheckedUpdateWithoutProductCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutProductCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProductCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    productCategoryId?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    productImgUrl?: StringNullableFilter<"Product"> | string | null
    cldPublicId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
  }

  export type CartItemCreateWithoutCartInput = {
    id?: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    product: ProductCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateWithoutCartInput = {
    id?: string
    productId: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CartItemCreateOrConnectWithoutCartInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemCreateManyCartInputEnvelope = {
    data: CartItemCreateManyCartInput | CartItemCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type CashierCreateWithoutCartInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    isEmailVerified?: boolean
    avatarImgUrl?: string | null
    cldPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shift: $Enums.ShiftSession
    cashierBalanceHistory?: CashierBalanceHistoryCreateNestedManyWithoutCashierInput
    transaction?: TransactionCreateNestedManyWithoutCashierInput
  }

  export type CashierUncheckedCreateWithoutCartInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    isEmailVerified?: boolean
    avatarImgUrl?: string | null
    cldPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shift: $Enums.ShiftSession
    cashierBalanceHistory?: CashierBalanceHistoryUncheckedCreateNestedManyWithoutCashierInput
    transaction?: TransactionUncheckedCreateNestedManyWithoutCashierInput
  }

  export type CashierCreateOrConnectWithoutCartInput = {
    where: CashierWhereUniqueInput
    create: XOR<CashierCreateWithoutCartInput, CashierUncheckedCreateWithoutCartInput>
  }

  export type TransactionCreateWithoutCartInput = {
    id?: string
    paymentType: $Enums.PaymentType
    debitCardNumber?: string | null
    totalAmount: number
    changeAmount?: number | null
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cashier: CashierCreateNestedOneWithoutTransactionInput
    cashierBalanceHistory: CashierBalanceHistoryCreateNestedOneWithoutTransactionInput
    transactionItems?: TransactionItemCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutCartInput = {
    id?: string
    cashierId: string
    cashierBalanceHistoryId: string
    paymentType: $Enums.PaymentType
    debitCardNumber?: string | null
    totalAmount: number
    changeAmount?: number | null
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transactionItems?: TransactionItemUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutCartInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCartInput, TransactionUncheckedCreateWithoutCartInput>
  }

  export type CartItemUpsertWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUpdateManyWithWhereWithoutCartInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutCartInput>
  }

  export type CashierUpsertWithoutCartInput = {
    update: XOR<CashierUpdateWithoutCartInput, CashierUncheckedUpdateWithoutCartInput>
    create: XOR<CashierCreateWithoutCartInput, CashierUncheckedCreateWithoutCartInput>
    where?: CashierWhereInput
  }

  export type CashierUpdateToOneWithWhereWithoutCartInput = {
    where?: CashierWhereInput
    data: XOR<CashierUpdateWithoutCartInput, CashierUncheckedUpdateWithoutCartInput>
  }

  export type CashierUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shift?: EnumShiftSessionFieldUpdateOperationsInput | $Enums.ShiftSession
    cashierBalanceHistory?: CashierBalanceHistoryUpdateManyWithoutCashierNestedInput
    transaction?: TransactionUpdateManyWithoutCashierNestedInput
  }

  export type CashierUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shift?: EnumShiftSessionFieldUpdateOperationsInput | $Enums.ShiftSession
    cashierBalanceHistory?: CashierBalanceHistoryUncheckedUpdateManyWithoutCashierNestedInput
    transaction?: TransactionUncheckedUpdateManyWithoutCashierNestedInput
  }

  export type TransactionUpsertWithoutCartInput = {
    update: XOR<TransactionUpdateWithoutCartInput, TransactionUncheckedUpdateWithoutCartInput>
    create: XOR<TransactionCreateWithoutCartInput, TransactionUncheckedCreateWithoutCartInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutCartInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutCartInput, TransactionUncheckedUpdateWithoutCartInput>
  }

  export type TransactionUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    debitCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    changeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cashier?: CashierUpdateOneRequiredWithoutTransactionNestedInput
    cashierBalanceHistory?: CashierBalanceHistoryUpdateOneRequiredWithoutTransactionNestedInput
    transactionItems?: TransactionItemUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    cashierId?: StringFieldUpdateOperationsInput | string
    cashierBalanceHistoryId?: StringFieldUpdateOperationsInput | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    debitCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    changeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionItems?: TransactionItemUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type CartCreateWithoutCartItemsInput = {
    id?: string
    customerName: string
    status?: $Enums.CartStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cashier: CashierCreateNestedOneWithoutCartInput
    transaction?: TransactionCreateNestedOneWithoutCartInput
  }

  export type CartUncheckedCreateWithoutCartItemsInput = {
    id?: string
    customerName: string
    cashierId: string
    status?: $Enums.CartStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transaction?: TransactionUncheckedCreateNestedOneWithoutCartInput
  }

  export type CartCreateOrConnectWithoutCartItemsInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutCartItemsInput, CartUncheckedCreateWithoutCartItemsInput>
  }

  export type ProductCreateWithoutCartItemsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    price: number
    productImgUrl?: string | null
    cldPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    productCategory: ProductCategoryCreateNestedOneWithoutProductInput
    transactionItems?: TransactionItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCartItemsInput = {
    id?: string
    productCategoryId: number
    name: string
    slug: string
    description?: string | null
    price: number
    productImgUrl?: string | null
    cldPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transactionItems?: TransactionItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCartItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>
  }

  export type CartUpsertWithoutCartItemsInput = {
    update: XOR<CartUpdateWithoutCartItemsInput, CartUncheckedUpdateWithoutCartItemsInput>
    create: XOR<CartCreateWithoutCartItemsInput, CartUncheckedCreateWithoutCartItemsInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutCartItemsInput, CartUncheckedUpdateWithoutCartItemsInput>
  }

  export type CartUpdateWithoutCartItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cashier?: CashierUpdateOneRequiredWithoutCartNestedInput
    transaction?: TransactionUpdateOneWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutCartItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    cashierId?: StringFieldUpdateOperationsInput | string
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction?: TransactionUncheckedUpdateOneWithoutCartNestedInput
  }

  export type ProductUpsertWithoutCartItemsInput = {
    update: XOR<ProductUpdateWithoutCartItemsInput, ProductUncheckedUpdateWithoutCartItemsInput>
    create: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCartItemsInput, ProductUncheckedUpdateWithoutCartItemsInput>
  }

  export type ProductUpdateWithoutCartItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    productImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productCategory?: ProductCategoryUpdateOneRequiredWithoutProductNestedInput
    transactionItems?: TransactionItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCartItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productCategoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    productImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionItems?: TransactionItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CartCreateWithoutTransactionInput = {
    id?: string
    customerName: string
    status?: $Enums.CartStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cartItems?: CartItemCreateNestedManyWithoutCartInput
    cashier: CashierCreateNestedOneWithoutCartInput
  }

  export type CartUncheckedCreateWithoutTransactionInput = {
    id?: string
    customerName: string
    cashierId: string
    status?: $Enums.CartStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cartItems?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutTransactionInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutTransactionInput, CartUncheckedCreateWithoutTransactionInput>
  }

  export type CashierCreateWithoutTransactionInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    isEmailVerified?: boolean
    avatarImgUrl?: string | null
    cldPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shift: $Enums.ShiftSession
    cashierBalanceHistory?: CashierBalanceHistoryCreateNestedManyWithoutCashierInput
    cart?: CartCreateNestedManyWithoutCashierInput
  }

  export type CashierUncheckedCreateWithoutTransactionInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    isEmailVerified?: boolean
    avatarImgUrl?: string | null
    cldPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shift: $Enums.ShiftSession
    cashierBalanceHistory?: CashierBalanceHistoryUncheckedCreateNestedManyWithoutCashierInput
    cart?: CartUncheckedCreateNestedManyWithoutCashierInput
  }

  export type CashierCreateOrConnectWithoutTransactionInput = {
    where: CashierWhereUniqueInput
    create: XOR<CashierCreateWithoutTransactionInput, CashierUncheckedCreateWithoutTransactionInput>
  }

  export type CashierBalanceHistoryCreateWithoutTransactionInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    startingCash: number
    endingCash?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cashier: CashierCreateNestedOneWithoutCashierBalanceHistoryInput
  }

  export type CashierBalanceHistoryUncheckedCreateWithoutTransactionInput = {
    id?: string
    cashierId: string
    startTime: Date | string
    endTime?: Date | string | null
    startingCash: number
    endingCash?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CashierBalanceHistoryCreateOrConnectWithoutTransactionInput = {
    where: CashierBalanceHistoryWhereUniqueInput
    create: XOR<CashierBalanceHistoryCreateWithoutTransactionInput, CashierBalanceHistoryUncheckedCreateWithoutTransactionInput>
  }

  export type TransactionItemCreateWithoutTransactionInput = {
    id?: string
    quantity: number
    unitPrice: number
    subTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    product: ProductCreateNestedOneWithoutTransactionItemsInput
  }

  export type TransactionItemUncheckedCreateWithoutTransactionInput = {
    id?: string
    productId: string
    quantity: number
    unitPrice: number
    subTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TransactionItemCreateOrConnectWithoutTransactionInput = {
    where: TransactionItemWhereUniqueInput
    create: XOR<TransactionItemCreateWithoutTransactionInput, TransactionItemUncheckedCreateWithoutTransactionInput>
  }

  export type TransactionItemCreateManyTransactionInputEnvelope = {
    data: TransactionItemCreateManyTransactionInput | TransactionItemCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type CartUpsertWithoutTransactionInput = {
    update: XOR<CartUpdateWithoutTransactionInput, CartUncheckedUpdateWithoutTransactionInput>
    create: XOR<CartCreateWithoutTransactionInput, CartUncheckedCreateWithoutTransactionInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutTransactionInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutTransactionInput, CartUncheckedUpdateWithoutTransactionInput>
  }

  export type CartUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cartItems?: CartItemUpdateManyWithoutCartNestedInput
    cashier?: CashierUpdateOneRequiredWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    cashierId?: StringFieldUpdateOperationsInput | string
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cartItems?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CashierUpsertWithoutTransactionInput = {
    update: XOR<CashierUpdateWithoutTransactionInput, CashierUncheckedUpdateWithoutTransactionInput>
    create: XOR<CashierCreateWithoutTransactionInput, CashierUncheckedCreateWithoutTransactionInput>
    where?: CashierWhereInput
  }

  export type CashierUpdateToOneWithWhereWithoutTransactionInput = {
    where?: CashierWhereInput
    data: XOR<CashierUpdateWithoutTransactionInput, CashierUncheckedUpdateWithoutTransactionInput>
  }

  export type CashierUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shift?: EnumShiftSessionFieldUpdateOperationsInput | $Enums.ShiftSession
    cashierBalanceHistory?: CashierBalanceHistoryUpdateManyWithoutCashierNestedInput
    cart?: CartUpdateManyWithoutCashierNestedInput
  }

  export type CashierUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shift?: EnumShiftSessionFieldUpdateOperationsInput | $Enums.ShiftSession
    cashierBalanceHistory?: CashierBalanceHistoryUncheckedUpdateManyWithoutCashierNestedInput
    cart?: CartUncheckedUpdateManyWithoutCashierNestedInput
  }

  export type CashierBalanceHistoryUpsertWithoutTransactionInput = {
    update: XOR<CashierBalanceHistoryUpdateWithoutTransactionInput, CashierBalanceHistoryUncheckedUpdateWithoutTransactionInput>
    create: XOR<CashierBalanceHistoryCreateWithoutTransactionInput, CashierBalanceHistoryUncheckedCreateWithoutTransactionInput>
    where?: CashierBalanceHistoryWhereInput
  }

  export type CashierBalanceHistoryUpdateToOneWithWhereWithoutTransactionInput = {
    where?: CashierBalanceHistoryWhereInput
    data: XOR<CashierBalanceHistoryUpdateWithoutTransactionInput, CashierBalanceHistoryUncheckedUpdateWithoutTransactionInput>
  }

  export type CashierBalanceHistoryUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startingCash?: FloatFieldUpdateOperationsInput | number
    endingCash?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cashier?: CashierUpdateOneRequiredWithoutCashierBalanceHistoryNestedInput
  }

  export type CashierBalanceHistoryUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    cashierId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startingCash?: FloatFieldUpdateOperationsInput | number
    endingCash?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionItemUpsertWithWhereUniqueWithoutTransactionInput = {
    where: TransactionItemWhereUniqueInput
    update: XOR<TransactionItemUpdateWithoutTransactionInput, TransactionItemUncheckedUpdateWithoutTransactionInput>
    create: XOR<TransactionItemCreateWithoutTransactionInput, TransactionItemUncheckedCreateWithoutTransactionInput>
  }

  export type TransactionItemUpdateWithWhereUniqueWithoutTransactionInput = {
    where: TransactionItemWhereUniqueInput
    data: XOR<TransactionItemUpdateWithoutTransactionInput, TransactionItemUncheckedUpdateWithoutTransactionInput>
  }

  export type TransactionItemUpdateManyWithWhereWithoutTransactionInput = {
    where: TransactionItemScalarWhereInput
    data: XOR<TransactionItemUpdateManyMutationInput, TransactionItemUncheckedUpdateManyWithoutTransactionInput>
  }

  export type TransactionCreateWithoutTransactionItemsInput = {
    id?: string
    paymentType: $Enums.PaymentType
    debitCardNumber?: string | null
    totalAmount: number
    changeAmount?: number | null
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cart: CartCreateNestedOneWithoutTransactionInput
    cashier: CashierCreateNestedOneWithoutTransactionInput
    cashierBalanceHistory: CashierBalanceHistoryCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutTransactionItemsInput = {
    id?: string
    cartId: string
    cashierId: string
    cashierBalanceHistoryId: string
    paymentType: $Enums.PaymentType
    debitCardNumber?: string | null
    totalAmount: number
    changeAmount?: number | null
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TransactionCreateOrConnectWithoutTransactionItemsInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutTransactionItemsInput, TransactionUncheckedCreateWithoutTransactionItemsInput>
  }

  export type ProductCreateWithoutTransactionItemsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    price: number
    productImgUrl?: string | null
    cldPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    productCategory: ProductCategoryCreateNestedOneWithoutProductInput
    cartItems?: CartItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutTransactionItemsInput = {
    id?: string
    productCategoryId: number
    name: string
    slug: string
    description?: string | null
    price: number
    productImgUrl?: string | null
    cldPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutTransactionItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutTransactionItemsInput, ProductUncheckedCreateWithoutTransactionItemsInput>
  }

  export type TransactionUpsertWithoutTransactionItemsInput = {
    update: XOR<TransactionUpdateWithoutTransactionItemsInput, TransactionUncheckedUpdateWithoutTransactionItemsInput>
    create: XOR<TransactionCreateWithoutTransactionItemsInput, TransactionUncheckedCreateWithoutTransactionItemsInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutTransactionItemsInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutTransactionItemsInput, TransactionUncheckedUpdateWithoutTransactionItemsInput>
  }

  export type TransactionUpdateWithoutTransactionItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    debitCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    changeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart?: CartUpdateOneRequiredWithoutTransactionNestedInput
    cashier?: CashierUpdateOneRequiredWithoutTransactionNestedInput
    cashierBalanceHistory?: CashierBalanceHistoryUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutTransactionItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    cashierId?: StringFieldUpdateOperationsInput | string
    cashierBalanceHistoryId?: StringFieldUpdateOperationsInput | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    debitCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    changeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUpsertWithoutTransactionItemsInput = {
    update: XOR<ProductUpdateWithoutTransactionItemsInput, ProductUncheckedUpdateWithoutTransactionItemsInput>
    create: XOR<ProductCreateWithoutTransactionItemsInput, ProductUncheckedCreateWithoutTransactionItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutTransactionItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutTransactionItemsInput, ProductUncheckedUpdateWithoutTransactionItemsInput>
  }

  export type ProductUpdateWithoutTransactionItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    productImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productCategory?: ProductCategoryUpdateOneRequiredWithoutProductNestedInput
    cartItems?: CartItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutTransactionItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productCategoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    productImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CashierBalanceHistoryCreateManyCashierInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    startingCash: number
    endingCash?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CartCreateManyCashierInput = {
    id?: string
    customerName: string
    status?: $Enums.CartStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TransactionCreateManyCashierInput = {
    id?: string
    cartId: string
    cashierBalanceHistoryId: string
    paymentType: $Enums.PaymentType
    debitCardNumber?: string | null
    totalAmount: number
    changeAmount?: number | null
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CashierBalanceHistoryUpdateWithoutCashierInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startingCash?: FloatFieldUpdateOperationsInput | number
    endingCash?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction?: TransactionUpdateManyWithoutCashierBalanceHistoryNestedInput
  }

  export type CashierBalanceHistoryUncheckedUpdateWithoutCashierInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startingCash?: FloatFieldUpdateOperationsInput | number
    endingCash?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction?: TransactionUncheckedUpdateManyWithoutCashierBalanceHistoryNestedInput
  }

  export type CashierBalanceHistoryUncheckedUpdateManyWithoutCashierInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startingCash?: FloatFieldUpdateOperationsInput | number
    endingCash?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CartUpdateWithoutCashierInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cartItems?: CartItemUpdateManyWithoutCartNestedInput
    transaction?: TransactionUpdateOneWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutCashierInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cartItems?: CartItemUncheckedUpdateManyWithoutCartNestedInput
    transaction?: TransactionUncheckedUpdateOneWithoutCartNestedInput
  }

  export type CartUncheckedUpdateManyWithoutCashierInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUpdateWithoutCashierInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    debitCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    changeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart?: CartUpdateOneRequiredWithoutTransactionNestedInput
    cashierBalanceHistory?: CashierBalanceHistoryUpdateOneRequiredWithoutTransactionNestedInput
    transactionItems?: TransactionItemUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCashierInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    cashierBalanceHistoryId?: StringFieldUpdateOperationsInput | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    debitCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    changeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionItems?: TransactionItemUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutCashierInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    cashierBalanceHistoryId?: StringFieldUpdateOperationsInput | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    debitCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    changeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionCreateManyCashierBalanceHistoryInput = {
    id?: string
    cartId: string
    cashierId: string
    paymentType: $Enums.PaymentType
    debitCardNumber?: string | null
    totalAmount: number
    changeAmount?: number | null
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TransactionUpdateWithoutCashierBalanceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    debitCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    changeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart?: CartUpdateOneRequiredWithoutTransactionNestedInput
    cashier?: CashierUpdateOneRequiredWithoutTransactionNestedInput
    transactionItems?: TransactionItemUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCashierBalanceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    cashierId?: StringFieldUpdateOperationsInput | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    debitCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    changeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionItems?: TransactionItemUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutCashierBalanceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    cashierId?: StringFieldUpdateOperationsInput | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    debitCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    changeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CartItemCreateManyProductInput = {
    id?: string
    cartId: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TransactionItemCreateManyProductInput = {
    id?: string
    transactionId: string
    quantity: number
    unitPrice: number
    subTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CartItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart?: CartUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CartItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction?: TransactionUpdateOneRequiredWithoutTransactionItemsNestedInput
  }

  export type TransactionItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCreateManyProductCategoryInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    price: number
    productImgUrl?: string | null
    cldPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProductUpdateWithoutProductCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    productImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cartItems?: CartItemUpdateManyWithoutProductNestedInput
    transactionItems?: TransactionItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    productImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    transactionItems?: TransactionItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutProductCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    productImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cldPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CartItemCreateManyCartInput = {
    id?: string
    productId: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CartItemUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: ProductUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CartItemUncheckedUpdateManyWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionItemCreateManyTransactionInput = {
    id?: string
    productId: string
    quantity: number
    unitPrice: number
    subTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TransactionItemUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: ProductUpdateOneRequiredWithoutTransactionItemsNestedInput
  }

  export type TransactionItemUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionItemUncheckedUpdateManyWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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