
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
 * Model Status
 * 
 */
export type Status = $Result.DefaultSelection<Prisma.$StatusPayload>
/**
 * Model GpsData
 * 
 */
export type GpsData = $Result.DefaultSelection<Prisma.$GpsDataPayload>
/**
 * Model PositionData
 * 
 */
export type PositionData = $Result.DefaultSelection<Prisma.$PositionDataPayload>
/**
 * Model AlarmData
 * 
 */
export type AlarmData = $Result.DefaultSelection<Prisma.$AlarmDataPayload>
/**
 * Model HeartbeatData
 * 
 */
export type HeartbeatData = $Result.DefaultSelection<Prisma.$HeartbeatDataPayload>
/**
 * Model TrackerStatus
 * 
 */
export type TrackerStatus = $Result.DefaultSelection<Prisma.$TrackerStatusPayload>
/**
 * Model IButtonData
 * 
 */
export type IButtonData = $Result.DefaultSelection<Prisma.$IButtonDataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Statuses
 * const statuses = await prisma.status.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Statuses
   * const statuses = await prisma.status.findMany()
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
   * `prisma.status`: Exposes CRUD operations for the **Status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statuses
    * const statuses = await prisma.status.findMany()
    * ```
    */
  get status(): Prisma.StatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gpsData`: Exposes CRUD operations for the **GpsData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GpsData
    * const gpsData = await prisma.gpsData.findMany()
    * ```
    */
  get gpsData(): Prisma.GpsDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.positionData`: Exposes CRUD operations for the **PositionData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PositionData
    * const positionData = await prisma.positionData.findMany()
    * ```
    */
  get positionData(): Prisma.PositionDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alarmData`: Exposes CRUD operations for the **AlarmData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlarmData
    * const alarmData = await prisma.alarmData.findMany()
    * ```
    */
  get alarmData(): Prisma.AlarmDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.heartbeatData`: Exposes CRUD operations for the **HeartbeatData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HeartbeatData
    * const heartbeatData = await prisma.heartbeatData.findMany()
    * ```
    */
  get heartbeatData(): Prisma.HeartbeatDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trackerStatus`: Exposes CRUD operations for the **TrackerStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackerStatuses
    * const trackerStatuses = await prisma.trackerStatus.findMany()
    * ```
    */
  get trackerStatus(): Prisma.TrackerStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.iButtonData`: Exposes CRUD operations for the **IButtonData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IButtonData
    * const iButtonData = await prisma.iButtonData.findMany()
    * ```
    */
  get iButtonData(): Prisma.IButtonDataDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Status: 'Status',
    GpsData: 'GpsData',
    PositionData: 'PositionData',
    AlarmData: 'AlarmData',
    HeartbeatData: 'HeartbeatData',
    TrackerStatus: 'TrackerStatus',
    IButtonData: 'IButtonData'
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
      modelProps: "status" | "gpsData" | "positionData" | "alarmData" | "heartbeatData" | "trackerStatus" | "iButtonData"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Status: {
        payload: Prisma.$StatusPayload<ExtArgs>
        fields: Prisma.StatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          findFirst: {
            args: Prisma.StatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          findMany: {
            args: Prisma.StatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          create: {
            args: Prisma.StatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          createMany: {
            args: Prisma.StatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          delete: {
            args: Prisma.StatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          update: {
            args: Prisma.StatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          deleteMany: {
            args: Prisma.StatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          upsert: {
            args: Prisma.StatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          aggregate: {
            args: Prisma.StatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatus>
          }
          groupBy: {
            args: Prisma.StatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusCountArgs<ExtArgs>
            result: $Utils.Optional<StatusCountAggregateOutputType> | number
          }
        }
      }
      GpsData: {
        payload: Prisma.$GpsDataPayload<ExtArgs>
        fields: Prisma.GpsDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GpsDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GpsDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsDataPayload>
          }
          findFirst: {
            args: Prisma.GpsDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GpsDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsDataPayload>
          }
          findMany: {
            args: Prisma.GpsDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsDataPayload>[]
          }
          create: {
            args: Prisma.GpsDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsDataPayload>
          }
          createMany: {
            args: Prisma.GpsDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GpsDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsDataPayload>[]
          }
          delete: {
            args: Prisma.GpsDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsDataPayload>
          }
          update: {
            args: Prisma.GpsDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsDataPayload>
          }
          deleteMany: {
            args: Prisma.GpsDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GpsDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GpsDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsDataPayload>[]
          }
          upsert: {
            args: Prisma.GpsDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsDataPayload>
          }
          aggregate: {
            args: Prisma.GpsDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGpsData>
          }
          groupBy: {
            args: Prisma.GpsDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<GpsDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.GpsDataCountArgs<ExtArgs>
            result: $Utils.Optional<GpsDataCountAggregateOutputType> | number
          }
        }
      }
      PositionData: {
        payload: Prisma.$PositionDataPayload<ExtArgs>
        fields: Prisma.PositionDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PositionDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PositionDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionDataPayload>
          }
          findFirst: {
            args: Prisma.PositionDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PositionDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionDataPayload>
          }
          findMany: {
            args: Prisma.PositionDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionDataPayload>[]
          }
          create: {
            args: Prisma.PositionDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionDataPayload>
          }
          createMany: {
            args: Prisma.PositionDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PositionDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionDataPayload>[]
          }
          delete: {
            args: Prisma.PositionDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionDataPayload>
          }
          update: {
            args: Prisma.PositionDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionDataPayload>
          }
          deleteMany: {
            args: Prisma.PositionDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PositionDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PositionDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionDataPayload>[]
          }
          upsert: {
            args: Prisma.PositionDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionDataPayload>
          }
          aggregate: {
            args: Prisma.PositionDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePositionData>
          }
          groupBy: {
            args: Prisma.PositionDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<PositionDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.PositionDataCountArgs<ExtArgs>
            result: $Utils.Optional<PositionDataCountAggregateOutputType> | number
          }
        }
      }
      AlarmData: {
        payload: Prisma.$AlarmDataPayload<ExtArgs>
        fields: Prisma.AlarmDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlarmDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlarmDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmDataPayload>
          }
          findFirst: {
            args: Prisma.AlarmDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlarmDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmDataPayload>
          }
          findMany: {
            args: Prisma.AlarmDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmDataPayload>[]
          }
          create: {
            args: Prisma.AlarmDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmDataPayload>
          }
          createMany: {
            args: Prisma.AlarmDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlarmDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmDataPayload>[]
          }
          delete: {
            args: Prisma.AlarmDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmDataPayload>
          }
          update: {
            args: Prisma.AlarmDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmDataPayload>
          }
          deleteMany: {
            args: Prisma.AlarmDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlarmDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlarmDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmDataPayload>[]
          }
          upsert: {
            args: Prisma.AlarmDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmDataPayload>
          }
          aggregate: {
            args: Prisma.AlarmDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlarmData>
          }
          groupBy: {
            args: Prisma.AlarmDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlarmDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlarmDataCountArgs<ExtArgs>
            result: $Utils.Optional<AlarmDataCountAggregateOutputType> | number
          }
        }
      }
      HeartbeatData: {
        payload: Prisma.$HeartbeatDataPayload<ExtArgs>
        fields: Prisma.HeartbeatDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeartbeatDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartbeatDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeartbeatDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartbeatDataPayload>
          }
          findFirst: {
            args: Prisma.HeartbeatDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartbeatDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeartbeatDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartbeatDataPayload>
          }
          findMany: {
            args: Prisma.HeartbeatDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartbeatDataPayload>[]
          }
          create: {
            args: Prisma.HeartbeatDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartbeatDataPayload>
          }
          createMany: {
            args: Prisma.HeartbeatDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HeartbeatDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartbeatDataPayload>[]
          }
          delete: {
            args: Prisma.HeartbeatDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartbeatDataPayload>
          }
          update: {
            args: Prisma.HeartbeatDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartbeatDataPayload>
          }
          deleteMany: {
            args: Prisma.HeartbeatDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeartbeatDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HeartbeatDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartbeatDataPayload>[]
          }
          upsert: {
            args: Prisma.HeartbeatDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartbeatDataPayload>
          }
          aggregate: {
            args: Prisma.HeartbeatDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHeartbeatData>
          }
          groupBy: {
            args: Prisma.HeartbeatDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeartbeatDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeartbeatDataCountArgs<ExtArgs>
            result: $Utils.Optional<HeartbeatDataCountAggregateOutputType> | number
          }
        }
      }
      TrackerStatus: {
        payload: Prisma.$TrackerStatusPayload<ExtArgs>
        fields: Prisma.TrackerStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackerStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackerStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackerStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackerStatusPayload>
          }
          findFirst: {
            args: Prisma.TrackerStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackerStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackerStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackerStatusPayload>
          }
          findMany: {
            args: Prisma.TrackerStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackerStatusPayload>[]
          }
          create: {
            args: Prisma.TrackerStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackerStatusPayload>
          }
          createMany: {
            args: Prisma.TrackerStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackerStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackerStatusPayload>[]
          }
          delete: {
            args: Prisma.TrackerStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackerStatusPayload>
          }
          update: {
            args: Prisma.TrackerStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackerStatusPayload>
          }
          deleteMany: {
            args: Prisma.TrackerStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackerStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrackerStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackerStatusPayload>[]
          }
          upsert: {
            args: Prisma.TrackerStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackerStatusPayload>
          }
          aggregate: {
            args: Prisma.TrackerStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrackerStatus>
          }
          groupBy: {
            args: Prisma.TrackerStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackerStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackerStatusCountArgs<ExtArgs>
            result: $Utils.Optional<TrackerStatusCountAggregateOutputType> | number
          }
        }
      }
      IButtonData: {
        payload: Prisma.$IButtonDataPayload<ExtArgs>
        fields: Prisma.IButtonDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IButtonDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IButtonDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IButtonDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IButtonDataPayload>
          }
          findFirst: {
            args: Prisma.IButtonDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IButtonDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IButtonDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IButtonDataPayload>
          }
          findMany: {
            args: Prisma.IButtonDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IButtonDataPayload>[]
          }
          create: {
            args: Prisma.IButtonDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IButtonDataPayload>
          }
          createMany: {
            args: Prisma.IButtonDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IButtonDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IButtonDataPayload>[]
          }
          delete: {
            args: Prisma.IButtonDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IButtonDataPayload>
          }
          update: {
            args: Prisma.IButtonDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IButtonDataPayload>
          }
          deleteMany: {
            args: Prisma.IButtonDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IButtonDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IButtonDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IButtonDataPayload>[]
          }
          upsert: {
            args: Prisma.IButtonDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IButtonDataPayload>
          }
          aggregate: {
            args: Prisma.IButtonDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIButtonData>
          }
          groupBy: {
            args: Prisma.IButtonDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<IButtonDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.IButtonDataCountArgs<ExtArgs>
            result: $Utils.Optional<IButtonDataCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    status?: StatusOmit
    gpsData?: GpsDataOmit
    positionData?: PositionDataOmit
    alarmData?: AlarmDataOmit
    heartbeatData?: HeartbeatDataOmit
    trackerStatus?: TrackerStatusOmit
    iButtonData?: IButtonDataOmit
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
   * Models
   */

  /**
   * Model Status
   */

  export type AggregateStatus = {
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  export type StatusAvgAggregateOutputType = {
    id: number | null
  }

  export type StatusSumAggregateOutputType = {
    id: number | null
  }

  export type StatusMinAggregateOutputType = {
    id: number | null
    status: string | null
    database: string | null
    timestamp: Date | null
    error: string | null
    createdAt: Date | null
    updatedAt: Date | null
    redis: string | null
  }

  export type StatusMaxAggregateOutputType = {
    id: number | null
    status: string | null
    database: string | null
    timestamp: Date | null
    error: string | null
    createdAt: Date | null
    updatedAt: Date | null
    redis: string | null
  }

  export type StatusCountAggregateOutputType = {
    id: number
    status: number
    database: number
    timestamp: number
    error: number
    createdAt: number
    updatedAt: number
    redis: number
    _all: number
  }


  export type StatusAvgAggregateInputType = {
    id?: true
  }

  export type StatusSumAggregateInputType = {
    id?: true
  }

  export type StatusMinAggregateInputType = {
    id?: true
    status?: true
    database?: true
    timestamp?: true
    error?: true
    createdAt?: true
    updatedAt?: true
    redis?: true
  }

  export type StatusMaxAggregateInputType = {
    id?: true
    status?: true
    database?: true
    timestamp?: true
    error?: true
    createdAt?: true
    updatedAt?: true
    redis?: true
  }

  export type StatusCountAggregateInputType = {
    id?: true
    status?: true
    database?: true
    timestamp?: true
    error?: true
    createdAt?: true
    updatedAt?: true
    redis?: true
    _all?: true
  }

  export type StatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Status to aggregate.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Statuses
    **/
    _count?: true | StatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusMaxAggregateInputType
  }

  export type GetStatusAggregateType<T extends StatusAggregateArgs> = {
        [P in keyof T & keyof AggregateStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatus[P]>
      : GetScalarType<T[P], AggregateStatus[P]>
  }




  export type StatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusWhereInput
    orderBy?: StatusOrderByWithAggregationInput | StatusOrderByWithAggregationInput[]
    by: StatusScalarFieldEnum[] | StatusScalarFieldEnum
    having?: StatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusCountAggregateInputType | true
    _avg?: StatusAvgAggregateInputType
    _sum?: StatusSumAggregateInputType
    _min?: StatusMinAggregateInputType
    _max?: StatusMaxAggregateInputType
  }

  export type StatusGroupByOutputType = {
    id: number
    status: string
    database: string
    timestamp: Date
    error: string | null
    createdAt: Date
    updatedAt: Date
    redis: string
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  type GetStatusGroupByPayload<T extends StatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusGroupByOutputType[P]>
            : GetScalarType<T[P], StatusGroupByOutputType[P]>
        }
      >
    >


  export type StatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    database?: boolean
    timestamp?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    redis?: boolean
  }, ExtArgs["result"]["status"]>

  export type StatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    database?: boolean
    timestamp?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    redis?: boolean
  }, ExtArgs["result"]["status"]>

  export type StatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    database?: boolean
    timestamp?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    redis?: boolean
  }, ExtArgs["result"]["status"]>

  export type StatusSelectScalar = {
    id?: boolean
    status?: boolean
    database?: boolean
    timestamp?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    redis?: boolean
  }

  export type StatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "database" | "timestamp" | "error" | "createdAt" | "updatedAt" | "redis", ExtArgs["result"]["status"]>

  export type $StatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Status"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: string
      database: string
      timestamp: Date
      error: string | null
      createdAt: Date
      updatedAt: Date
      redis: string
    }, ExtArgs["result"]["status"]>
    composites: {}
  }

  type StatusGetPayload<S extends boolean | null | undefined | StatusDefaultArgs> = $Result.GetResult<Prisma.$StatusPayload, S>

  type StatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusCountAggregateInputType | true
    }

  export interface StatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Status'], meta: { name: 'Status' } }
    /**
     * Find zero or one Status that matches the filter.
     * @param {StatusFindUniqueArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusFindUniqueArgs>(args: SelectSubset<T, StatusFindUniqueArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusFindUniqueOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusFindFirstArgs>(args?: SelectSubset<T, StatusFindFirstArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statuses
     * const statuses = await prisma.status.findMany()
     * 
     * // Get first 10 Statuses
     * const statuses = await prisma.status.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusWithIdOnly = await prisma.status.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusFindManyArgs>(args?: SelectSubset<T, StatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Status.
     * @param {StatusCreateArgs} args - Arguments to create a Status.
     * @example
     * // Create one Status
     * const Status = await prisma.status.create({
     *   data: {
     *     // ... data to create a Status
     *   }
     * })
     * 
     */
    create<T extends StatusCreateArgs>(args: SelectSubset<T, StatusCreateArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Statuses.
     * @param {StatusCreateManyArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusCreateManyArgs>(args?: SelectSubset<T, StatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Statuses and returns the data saved in the database.
     * @param {StatusCreateManyAndReturnArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Statuses and only return the `id`
     * const statusWithIdOnly = await prisma.status.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatusCreateManyAndReturnArgs>(args?: SelectSubset<T, StatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Status.
     * @param {StatusDeleteArgs} args - Arguments to delete one Status.
     * @example
     * // Delete one Status
     * const Status = await prisma.status.delete({
     *   where: {
     *     // ... filter to delete one Status
     *   }
     * })
     * 
     */
    delete<T extends StatusDeleteArgs>(args: SelectSubset<T, StatusDeleteArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Status.
     * @param {StatusUpdateArgs} args - Arguments to update one Status.
     * @example
     * // Update one Status
     * const status = await prisma.status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusUpdateArgs>(args: SelectSubset<T, StatusUpdateArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Statuses.
     * @param {StatusDeleteManyArgs} args - Arguments to filter Statuses to delete.
     * @example
     * // Delete a few Statuses
     * const { count } = await prisma.status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusDeleteManyArgs>(args?: SelectSubset<T, StatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusUpdateManyArgs>(args: SelectSubset<T, StatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses and returns the data updated in the database.
     * @param {StatusUpdateManyAndReturnArgs} args - Arguments to update many Statuses.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Statuses and only return the `id`
     * const statusWithIdOnly = await prisma.status.updateManyAndReturn({
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
    updateManyAndReturn<T extends StatusUpdateManyAndReturnArgs>(args: SelectSubset<T, StatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Status.
     * @param {StatusUpsertArgs} args - Arguments to update or create a Status.
     * @example
     * // Update or create a Status
     * const status = await prisma.status.upsert({
     *   create: {
     *     // ... data to create a Status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Status we want to update
     *   }
     * })
     */
    upsert<T extends StatusUpsertArgs>(args: SelectSubset<T, StatusUpsertArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusCountArgs} args - Arguments to filter Statuses to count.
     * @example
     * // Count the number of Statuses
     * const count = await prisma.status.count({
     *   where: {
     *     // ... the filter for the Statuses we want to count
     *   }
     * })
    **/
    count<T extends StatusCountArgs>(
      args?: Subset<T, StatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatusAggregateArgs>(args: Subset<T, StatusAggregateArgs>): Prisma.PrismaPromise<GetStatusAggregateType<T>>

    /**
     * Group by Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusGroupByArgs} args - Group by arguments.
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
      T extends StatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusGroupByArgs['orderBy'] }
        : { orderBy?: StatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Status model
   */
  readonly fields: StatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Status model
   */
  interface StatusFieldRefs {
    readonly id: FieldRef<"Status", 'Int'>
    readonly status: FieldRef<"Status", 'String'>
    readonly database: FieldRef<"Status", 'String'>
    readonly timestamp: FieldRef<"Status", 'DateTime'>
    readonly error: FieldRef<"Status", 'String'>
    readonly createdAt: FieldRef<"Status", 'DateTime'>
    readonly updatedAt: FieldRef<"Status", 'DateTime'>
    readonly redis: FieldRef<"Status", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Status findUnique
   */
  export type StatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status findUniqueOrThrow
   */
  export type StatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status findFirst
   */
  export type StatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status findFirstOrThrow
   */
  export type StatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status findMany
   */
  export type StatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Filter, which Statuses to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status create
   */
  export type StatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * The data needed to create a Status.
     */
    data: XOR<StatusCreateInput, StatusUncheckedCreateInput>
  }

  /**
   * Status createMany
   */
  export type StatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Statuses.
     */
    data: StatusCreateManyInput | StatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Status createManyAndReturn
   */
  export type StatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * The data used to create many Statuses.
     */
    data: StatusCreateManyInput | StatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Status update
   */
  export type StatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * The data needed to update a Status.
     */
    data: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
    /**
     * Choose, which Status to update.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status updateMany
   */
  export type StatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Statuses.
     */
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyInput>
    /**
     * Filter which Statuses to update
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to update.
     */
    limit?: number
  }

  /**
   * Status updateManyAndReturn
   */
  export type StatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * The data used to update Statuses.
     */
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyInput>
    /**
     * Filter which Statuses to update
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to update.
     */
    limit?: number
  }

  /**
   * Status upsert
   */
  export type StatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * The filter to search for the Status to update in case it exists.
     */
    where: StatusWhereUniqueInput
    /**
     * In case the Status found by the `where` argument doesn't exist, create a new Status with this data.
     */
    create: XOR<StatusCreateInput, StatusUncheckedCreateInput>
    /**
     * In case the Status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
  }

  /**
   * Status delete
   */
  export type StatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Filter which Status to delete.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status deleteMany
   */
  export type StatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statuses to delete
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to delete.
     */
    limit?: number
  }

  /**
   * Status without action
   */
  export type StatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
  }


  /**
   * Model GpsData
   */

  export type AggregateGpsData = {
    _count: GpsDataCountAggregateOutputType | null
    _avg: GpsDataAvgAggregateOutputType | null
    _sum: GpsDataSumAggregateOutputType | null
    _min: GpsDataMinAggregateOutputType | null
    _max: GpsDataMaxAggregateOutputType | null
  }

  export type GpsDataAvgAggregateOutputType = {
    id: number | null
  }

  export type GpsDataSumAggregateOutputType = {
    id: number | null
  }

  export type GpsDataMinAggregateOutputType = {
    id: number | null
    rawData: string | null
    timestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    from: string | null
    mainCommand: string | null
    parsedData: string | null
    packetInfo: string | null
  }

  export type GpsDataMaxAggregateOutputType = {
    id: number | null
    rawData: string | null
    timestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    from: string | null
    mainCommand: string | null
    parsedData: string | null
    packetInfo: string | null
  }

  export type GpsDataCountAggregateOutputType = {
    id: number
    rawData: number
    timestamp: number
    createdAt: number
    updatedAt: number
    from: number
    mainCommand: number
    parsedData: number
    packetInfo: number
    _all: number
  }


  export type GpsDataAvgAggregateInputType = {
    id?: true
  }

  export type GpsDataSumAggregateInputType = {
    id?: true
  }

  export type GpsDataMinAggregateInputType = {
    id?: true
    rawData?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
    from?: true
    mainCommand?: true
    parsedData?: true
    packetInfo?: true
  }

  export type GpsDataMaxAggregateInputType = {
    id?: true
    rawData?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
    from?: true
    mainCommand?: true
    parsedData?: true
    packetInfo?: true
  }

  export type GpsDataCountAggregateInputType = {
    id?: true
    rawData?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
    from?: true
    mainCommand?: true
    parsedData?: true
    packetInfo?: true
    _all?: true
  }

  export type GpsDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GpsData to aggregate.
     */
    where?: GpsDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GpsData to fetch.
     */
    orderBy?: GpsDataOrderByWithRelationInput | GpsDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GpsDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GpsData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GpsData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GpsData
    **/
    _count?: true | GpsDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GpsDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GpsDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GpsDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GpsDataMaxAggregateInputType
  }

  export type GetGpsDataAggregateType<T extends GpsDataAggregateArgs> = {
        [P in keyof T & keyof AggregateGpsData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGpsData[P]>
      : GetScalarType<T[P], AggregateGpsData[P]>
  }




  export type GpsDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GpsDataWhereInput
    orderBy?: GpsDataOrderByWithAggregationInput | GpsDataOrderByWithAggregationInput[]
    by: GpsDataScalarFieldEnum[] | GpsDataScalarFieldEnum
    having?: GpsDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GpsDataCountAggregateInputType | true
    _avg?: GpsDataAvgAggregateInputType
    _sum?: GpsDataSumAggregateInputType
    _min?: GpsDataMinAggregateInputType
    _max?: GpsDataMaxAggregateInputType
  }

  export type GpsDataGroupByOutputType = {
    id: number
    rawData: string
    timestamp: Date
    createdAt: Date
    updatedAt: Date
    from: string
    mainCommand: string | null
    parsedData: string | null
    packetInfo: string | null
    _count: GpsDataCountAggregateOutputType | null
    _avg: GpsDataAvgAggregateOutputType | null
    _sum: GpsDataSumAggregateOutputType | null
    _min: GpsDataMinAggregateOutputType | null
    _max: GpsDataMaxAggregateOutputType | null
  }

  type GetGpsDataGroupByPayload<T extends GpsDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GpsDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GpsDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GpsDataGroupByOutputType[P]>
            : GetScalarType<T[P], GpsDataGroupByOutputType[P]>
        }
      >
    >


  export type GpsDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rawData?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    from?: boolean
    mainCommand?: boolean
    parsedData?: boolean
    packetInfo?: boolean
  }, ExtArgs["result"]["gpsData"]>

  export type GpsDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rawData?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    from?: boolean
    mainCommand?: boolean
    parsedData?: boolean
    packetInfo?: boolean
  }, ExtArgs["result"]["gpsData"]>

  export type GpsDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rawData?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    from?: boolean
    mainCommand?: boolean
    parsedData?: boolean
    packetInfo?: boolean
  }, ExtArgs["result"]["gpsData"]>

  export type GpsDataSelectScalar = {
    id?: boolean
    rawData?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    from?: boolean
    mainCommand?: boolean
    parsedData?: boolean
    packetInfo?: boolean
  }

  export type GpsDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rawData" | "timestamp" | "createdAt" | "updatedAt" | "from" | "mainCommand" | "parsedData" | "packetInfo", ExtArgs["result"]["gpsData"]>

  export type $GpsDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GpsData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rawData: string
      timestamp: Date
      createdAt: Date
      updatedAt: Date
      from: string
      mainCommand: string | null
      parsedData: string | null
      packetInfo: string | null
    }, ExtArgs["result"]["gpsData"]>
    composites: {}
  }

  type GpsDataGetPayload<S extends boolean | null | undefined | GpsDataDefaultArgs> = $Result.GetResult<Prisma.$GpsDataPayload, S>

  type GpsDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GpsDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GpsDataCountAggregateInputType | true
    }

  export interface GpsDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GpsData'], meta: { name: 'GpsData' } }
    /**
     * Find zero or one GpsData that matches the filter.
     * @param {GpsDataFindUniqueArgs} args - Arguments to find a GpsData
     * @example
     * // Get one GpsData
     * const gpsData = await prisma.gpsData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GpsDataFindUniqueArgs>(args: SelectSubset<T, GpsDataFindUniqueArgs<ExtArgs>>): Prisma__GpsDataClient<$Result.GetResult<Prisma.$GpsDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GpsData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GpsDataFindUniqueOrThrowArgs} args - Arguments to find a GpsData
     * @example
     * // Get one GpsData
     * const gpsData = await prisma.gpsData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GpsDataFindUniqueOrThrowArgs>(args: SelectSubset<T, GpsDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GpsDataClient<$Result.GetResult<Prisma.$GpsDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GpsData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpsDataFindFirstArgs} args - Arguments to find a GpsData
     * @example
     * // Get one GpsData
     * const gpsData = await prisma.gpsData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GpsDataFindFirstArgs>(args?: SelectSubset<T, GpsDataFindFirstArgs<ExtArgs>>): Prisma__GpsDataClient<$Result.GetResult<Prisma.$GpsDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GpsData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpsDataFindFirstOrThrowArgs} args - Arguments to find a GpsData
     * @example
     * // Get one GpsData
     * const gpsData = await prisma.gpsData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GpsDataFindFirstOrThrowArgs>(args?: SelectSubset<T, GpsDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__GpsDataClient<$Result.GetResult<Prisma.$GpsDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GpsData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpsDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GpsData
     * const gpsData = await prisma.gpsData.findMany()
     * 
     * // Get first 10 GpsData
     * const gpsData = await prisma.gpsData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gpsDataWithIdOnly = await prisma.gpsData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GpsDataFindManyArgs>(args?: SelectSubset<T, GpsDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GpsDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GpsData.
     * @param {GpsDataCreateArgs} args - Arguments to create a GpsData.
     * @example
     * // Create one GpsData
     * const GpsData = await prisma.gpsData.create({
     *   data: {
     *     // ... data to create a GpsData
     *   }
     * })
     * 
     */
    create<T extends GpsDataCreateArgs>(args: SelectSubset<T, GpsDataCreateArgs<ExtArgs>>): Prisma__GpsDataClient<$Result.GetResult<Prisma.$GpsDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GpsData.
     * @param {GpsDataCreateManyArgs} args - Arguments to create many GpsData.
     * @example
     * // Create many GpsData
     * const gpsData = await prisma.gpsData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GpsDataCreateManyArgs>(args?: SelectSubset<T, GpsDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GpsData and returns the data saved in the database.
     * @param {GpsDataCreateManyAndReturnArgs} args - Arguments to create many GpsData.
     * @example
     * // Create many GpsData
     * const gpsData = await prisma.gpsData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GpsData and only return the `id`
     * const gpsDataWithIdOnly = await prisma.gpsData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GpsDataCreateManyAndReturnArgs>(args?: SelectSubset<T, GpsDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GpsDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GpsData.
     * @param {GpsDataDeleteArgs} args - Arguments to delete one GpsData.
     * @example
     * // Delete one GpsData
     * const GpsData = await prisma.gpsData.delete({
     *   where: {
     *     // ... filter to delete one GpsData
     *   }
     * })
     * 
     */
    delete<T extends GpsDataDeleteArgs>(args: SelectSubset<T, GpsDataDeleteArgs<ExtArgs>>): Prisma__GpsDataClient<$Result.GetResult<Prisma.$GpsDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GpsData.
     * @param {GpsDataUpdateArgs} args - Arguments to update one GpsData.
     * @example
     * // Update one GpsData
     * const gpsData = await prisma.gpsData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GpsDataUpdateArgs>(args: SelectSubset<T, GpsDataUpdateArgs<ExtArgs>>): Prisma__GpsDataClient<$Result.GetResult<Prisma.$GpsDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GpsData.
     * @param {GpsDataDeleteManyArgs} args - Arguments to filter GpsData to delete.
     * @example
     * // Delete a few GpsData
     * const { count } = await prisma.gpsData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GpsDataDeleteManyArgs>(args?: SelectSubset<T, GpsDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GpsData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpsDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GpsData
     * const gpsData = await prisma.gpsData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GpsDataUpdateManyArgs>(args: SelectSubset<T, GpsDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GpsData and returns the data updated in the database.
     * @param {GpsDataUpdateManyAndReturnArgs} args - Arguments to update many GpsData.
     * @example
     * // Update many GpsData
     * const gpsData = await prisma.gpsData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GpsData and only return the `id`
     * const gpsDataWithIdOnly = await prisma.gpsData.updateManyAndReturn({
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
    updateManyAndReturn<T extends GpsDataUpdateManyAndReturnArgs>(args: SelectSubset<T, GpsDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GpsDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GpsData.
     * @param {GpsDataUpsertArgs} args - Arguments to update or create a GpsData.
     * @example
     * // Update or create a GpsData
     * const gpsData = await prisma.gpsData.upsert({
     *   create: {
     *     // ... data to create a GpsData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GpsData we want to update
     *   }
     * })
     */
    upsert<T extends GpsDataUpsertArgs>(args: SelectSubset<T, GpsDataUpsertArgs<ExtArgs>>): Prisma__GpsDataClient<$Result.GetResult<Prisma.$GpsDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GpsData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpsDataCountArgs} args - Arguments to filter GpsData to count.
     * @example
     * // Count the number of GpsData
     * const count = await prisma.gpsData.count({
     *   where: {
     *     // ... the filter for the GpsData we want to count
     *   }
     * })
    **/
    count<T extends GpsDataCountArgs>(
      args?: Subset<T, GpsDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GpsDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GpsData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpsDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GpsDataAggregateArgs>(args: Subset<T, GpsDataAggregateArgs>): Prisma.PrismaPromise<GetGpsDataAggregateType<T>>

    /**
     * Group by GpsData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpsDataGroupByArgs} args - Group by arguments.
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
      T extends GpsDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GpsDataGroupByArgs['orderBy'] }
        : { orderBy?: GpsDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GpsDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGpsDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GpsData model
   */
  readonly fields: GpsDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GpsData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GpsDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GpsData model
   */
  interface GpsDataFieldRefs {
    readonly id: FieldRef<"GpsData", 'Int'>
    readonly rawData: FieldRef<"GpsData", 'String'>
    readonly timestamp: FieldRef<"GpsData", 'DateTime'>
    readonly createdAt: FieldRef<"GpsData", 'DateTime'>
    readonly updatedAt: FieldRef<"GpsData", 'DateTime'>
    readonly from: FieldRef<"GpsData", 'String'>
    readonly mainCommand: FieldRef<"GpsData", 'String'>
    readonly parsedData: FieldRef<"GpsData", 'String'>
    readonly packetInfo: FieldRef<"GpsData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GpsData findUnique
   */
  export type GpsDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsData
     */
    select?: GpsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsData
     */
    omit?: GpsDataOmit<ExtArgs> | null
    /**
     * Filter, which GpsData to fetch.
     */
    where: GpsDataWhereUniqueInput
  }

  /**
   * GpsData findUniqueOrThrow
   */
  export type GpsDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsData
     */
    select?: GpsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsData
     */
    omit?: GpsDataOmit<ExtArgs> | null
    /**
     * Filter, which GpsData to fetch.
     */
    where: GpsDataWhereUniqueInput
  }

  /**
   * GpsData findFirst
   */
  export type GpsDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsData
     */
    select?: GpsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsData
     */
    omit?: GpsDataOmit<ExtArgs> | null
    /**
     * Filter, which GpsData to fetch.
     */
    where?: GpsDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GpsData to fetch.
     */
    orderBy?: GpsDataOrderByWithRelationInput | GpsDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GpsData.
     */
    cursor?: GpsDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GpsData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GpsData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GpsData.
     */
    distinct?: GpsDataScalarFieldEnum | GpsDataScalarFieldEnum[]
  }

  /**
   * GpsData findFirstOrThrow
   */
  export type GpsDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsData
     */
    select?: GpsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsData
     */
    omit?: GpsDataOmit<ExtArgs> | null
    /**
     * Filter, which GpsData to fetch.
     */
    where?: GpsDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GpsData to fetch.
     */
    orderBy?: GpsDataOrderByWithRelationInput | GpsDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GpsData.
     */
    cursor?: GpsDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GpsData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GpsData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GpsData.
     */
    distinct?: GpsDataScalarFieldEnum | GpsDataScalarFieldEnum[]
  }

  /**
   * GpsData findMany
   */
  export type GpsDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsData
     */
    select?: GpsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsData
     */
    omit?: GpsDataOmit<ExtArgs> | null
    /**
     * Filter, which GpsData to fetch.
     */
    where?: GpsDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GpsData to fetch.
     */
    orderBy?: GpsDataOrderByWithRelationInput | GpsDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GpsData.
     */
    cursor?: GpsDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GpsData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GpsData.
     */
    skip?: number
    distinct?: GpsDataScalarFieldEnum | GpsDataScalarFieldEnum[]
  }

  /**
   * GpsData create
   */
  export type GpsDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsData
     */
    select?: GpsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsData
     */
    omit?: GpsDataOmit<ExtArgs> | null
    /**
     * The data needed to create a GpsData.
     */
    data: XOR<GpsDataCreateInput, GpsDataUncheckedCreateInput>
  }

  /**
   * GpsData createMany
   */
  export type GpsDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GpsData.
     */
    data: GpsDataCreateManyInput | GpsDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GpsData createManyAndReturn
   */
  export type GpsDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsData
     */
    select?: GpsDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GpsData
     */
    omit?: GpsDataOmit<ExtArgs> | null
    /**
     * The data used to create many GpsData.
     */
    data: GpsDataCreateManyInput | GpsDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GpsData update
   */
  export type GpsDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsData
     */
    select?: GpsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsData
     */
    omit?: GpsDataOmit<ExtArgs> | null
    /**
     * The data needed to update a GpsData.
     */
    data: XOR<GpsDataUpdateInput, GpsDataUncheckedUpdateInput>
    /**
     * Choose, which GpsData to update.
     */
    where: GpsDataWhereUniqueInput
  }

  /**
   * GpsData updateMany
   */
  export type GpsDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GpsData.
     */
    data: XOR<GpsDataUpdateManyMutationInput, GpsDataUncheckedUpdateManyInput>
    /**
     * Filter which GpsData to update
     */
    where?: GpsDataWhereInput
    /**
     * Limit how many GpsData to update.
     */
    limit?: number
  }

  /**
   * GpsData updateManyAndReturn
   */
  export type GpsDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsData
     */
    select?: GpsDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GpsData
     */
    omit?: GpsDataOmit<ExtArgs> | null
    /**
     * The data used to update GpsData.
     */
    data: XOR<GpsDataUpdateManyMutationInput, GpsDataUncheckedUpdateManyInput>
    /**
     * Filter which GpsData to update
     */
    where?: GpsDataWhereInput
    /**
     * Limit how many GpsData to update.
     */
    limit?: number
  }

  /**
   * GpsData upsert
   */
  export type GpsDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsData
     */
    select?: GpsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsData
     */
    omit?: GpsDataOmit<ExtArgs> | null
    /**
     * The filter to search for the GpsData to update in case it exists.
     */
    where: GpsDataWhereUniqueInput
    /**
     * In case the GpsData found by the `where` argument doesn't exist, create a new GpsData with this data.
     */
    create: XOR<GpsDataCreateInput, GpsDataUncheckedCreateInput>
    /**
     * In case the GpsData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GpsDataUpdateInput, GpsDataUncheckedUpdateInput>
  }

  /**
   * GpsData delete
   */
  export type GpsDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsData
     */
    select?: GpsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsData
     */
    omit?: GpsDataOmit<ExtArgs> | null
    /**
     * Filter which GpsData to delete.
     */
    where: GpsDataWhereUniqueInput
  }

  /**
   * GpsData deleteMany
   */
  export type GpsDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GpsData to delete
     */
    where?: GpsDataWhereInput
    /**
     * Limit how many GpsData to delete.
     */
    limit?: number
  }

  /**
   * GpsData without action
   */
  export type GpsDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsData
     */
    select?: GpsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsData
     */
    omit?: GpsDataOmit<ExtArgs> | null
  }


  /**
   * Model PositionData
   */

  export type AggregatePositionData = {
    _count: PositionDataCountAggregateOutputType | null
    _avg: PositionDataAvgAggregateOutputType | null
    _sum: PositionDataSumAggregateOutputType | null
    _min: PositionDataMinAggregateOutputType | null
    _max: PositionDataMaxAggregateOutputType | null
  }

  export type PositionDataAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    speed: number | null
    angle: number | null
    oilResistance: number | null
    voltage: number | null
    mileage: number | null
    temperature: number | null
    packetLength: number | null
  }

  export type PositionDataSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    speed: number | null
    angle: number | null
    oilResistance: number | null
    voltage: number | null
    mileage: number | null
    temperature: number | null
    packetLength: number | null
  }

  export type PositionDataMinAggregateOutputType = {
    id: number | null
    clientId: string | null
    latitude: number | null
    longitude: number | null
    speed: number | null
    angle: number | null
    gpsStatus: string | null
    digitalInputs: string | null
    ignition: boolean | null
    oilResistance: number | null
    voltage: number | null
    mileage: number | null
    temperature: number | null
    createdAt: Date | null
    updatedAt: Date | null
    mainCommand: string | null
    packetLength: number | null
    pseudoIP: string | null
    rawData: string | null
    timestamp: Date | null
  }

  export type PositionDataMaxAggregateOutputType = {
    id: number | null
    clientId: string | null
    latitude: number | null
    longitude: number | null
    speed: number | null
    angle: number | null
    gpsStatus: string | null
    digitalInputs: string | null
    ignition: boolean | null
    oilResistance: number | null
    voltage: number | null
    mileage: number | null
    temperature: number | null
    createdAt: Date | null
    updatedAt: Date | null
    mainCommand: string | null
    packetLength: number | null
    pseudoIP: string | null
    rawData: string | null
    timestamp: Date | null
  }

  export type PositionDataCountAggregateOutputType = {
    id: number
    clientId: number
    latitude: number
    longitude: number
    speed: number
    angle: number
    gpsStatus: number
    digitalInputs: number
    ignition: number
    oilResistance: number
    voltage: number
    mileage: number
    temperature: number
    createdAt: number
    updatedAt: number
    mainCommand: number
    packetLength: number
    pseudoIP: number
    rawData: number
    timestamp: number
    _all: number
  }


  export type PositionDataAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    speed?: true
    angle?: true
    oilResistance?: true
    voltage?: true
    mileage?: true
    temperature?: true
    packetLength?: true
  }

  export type PositionDataSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    speed?: true
    angle?: true
    oilResistance?: true
    voltage?: true
    mileage?: true
    temperature?: true
    packetLength?: true
  }

  export type PositionDataMinAggregateInputType = {
    id?: true
    clientId?: true
    latitude?: true
    longitude?: true
    speed?: true
    angle?: true
    gpsStatus?: true
    digitalInputs?: true
    ignition?: true
    oilResistance?: true
    voltage?: true
    mileage?: true
    temperature?: true
    createdAt?: true
    updatedAt?: true
    mainCommand?: true
    packetLength?: true
    pseudoIP?: true
    rawData?: true
    timestamp?: true
  }

  export type PositionDataMaxAggregateInputType = {
    id?: true
    clientId?: true
    latitude?: true
    longitude?: true
    speed?: true
    angle?: true
    gpsStatus?: true
    digitalInputs?: true
    ignition?: true
    oilResistance?: true
    voltage?: true
    mileage?: true
    temperature?: true
    createdAt?: true
    updatedAt?: true
    mainCommand?: true
    packetLength?: true
    pseudoIP?: true
    rawData?: true
    timestamp?: true
  }

  export type PositionDataCountAggregateInputType = {
    id?: true
    clientId?: true
    latitude?: true
    longitude?: true
    speed?: true
    angle?: true
    gpsStatus?: true
    digitalInputs?: true
    ignition?: true
    oilResistance?: true
    voltage?: true
    mileage?: true
    temperature?: true
    createdAt?: true
    updatedAt?: true
    mainCommand?: true
    packetLength?: true
    pseudoIP?: true
    rawData?: true
    timestamp?: true
    _all?: true
  }

  export type PositionDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PositionData to aggregate.
     */
    where?: PositionDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PositionData to fetch.
     */
    orderBy?: PositionDataOrderByWithRelationInput | PositionDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PositionDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PositionData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PositionData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PositionData
    **/
    _count?: true | PositionDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PositionDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PositionDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionDataMaxAggregateInputType
  }

  export type GetPositionDataAggregateType<T extends PositionDataAggregateArgs> = {
        [P in keyof T & keyof AggregatePositionData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePositionData[P]>
      : GetScalarType<T[P], AggregatePositionData[P]>
  }




  export type PositionDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionDataWhereInput
    orderBy?: PositionDataOrderByWithAggregationInput | PositionDataOrderByWithAggregationInput[]
    by: PositionDataScalarFieldEnum[] | PositionDataScalarFieldEnum
    having?: PositionDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionDataCountAggregateInputType | true
    _avg?: PositionDataAvgAggregateInputType
    _sum?: PositionDataSumAggregateInputType
    _min?: PositionDataMinAggregateInputType
    _max?: PositionDataMaxAggregateInputType
  }

  export type PositionDataGroupByOutputType = {
    id: number
    clientId: string
    latitude: number
    longitude: number
    speed: number | null
    angle: number | null
    gpsStatus: string | null
    digitalInputs: string | null
    ignition: boolean | null
    oilResistance: number | null
    voltage: number | null
    mileage: number | null
    temperature: number | null
    createdAt: Date
    updatedAt: Date
    mainCommand: string | null
    packetLength: number | null
    pseudoIP: string | null
    rawData: string | null
    timestamp: Date
    _count: PositionDataCountAggregateOutputType | null
    _avg: PositionDataAvgAggregateOutputType | null
    _sum: PositionDataSumAggregateOutputType | null
    _min: PositionDataMinAggregateOutputType | null
    _max: PositionDataMaxAggregateOutputType | null
  }

  type GetPositionDataGroupByPayload<T extends PositionDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionDataGroupByOutputType[P]>
            : GetScalarType<T[P], PositionDataGroupByOutputType[P]>
        }
      >
    >


  export type PositionDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    latitude?: boolean
    longitude?: boolean
    speed?: boolean
    angle?: boolean
    gpsStatus?: boolean
    digitalInputs?: boolean
    ignition?: boolean
    oilResistance?: boolean
    voltage?: boolean
    mileage?: boolean
    temperature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainCommand?: boolean
    packetLength?: boolean
    pseudoIP?: boolean
    rawData?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["positionData"]>

  export type PositionDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    latitude?: boolean
    longitude?: boolean
    speed?: boolean
    angle?: boolean
    gpsStatus?: boolean
    digitalInputs?: boolean
    ignition?: boolean
    oilResistance?: boolean
    voltage?: boolean
    mileage?: boolean
    temperature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainCommand?: boolean
    packetLength?: boolean
    pseudoIP?: boolean
    rawData?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["positionData"]>

  export type PositionDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    latitude?: boolean
    longitude?: boolean
    speed?: boolean
    angle?: boolean
    gpsStatus?: boolean
    digitalInputs?: boolean
    ignition?: boolean
    oilResistance?: boolean
    voltage?: boolean
    mileage?: boolean
    temperature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainCommand?: boolean
    packetLength?: boolean
    pseudoIP?: boolean
    rawData?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["positionData"]>

  export type PositionDataSelectScalar = {
    id?: boolean
    clientId?: boolean
    latitude?: boolean
    longitude?: boolean
    speed?: boolean
    angle?: boolean
    gpsStatus?: boolean
    digitalInputs?: boolean
    ignition?: boolean
    oilResistance?: boolean
    voltage?: boolean
    mileage?: boolean
    temperature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainCommand?: boolean
    packetLength?: boolean
    pseudoIP?: boolean
    rawData?: boolean
    timestamp?: boolean
  }

  export type PositionDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "latitude" | "longitude" | "speed" | "angle" | "gpsStatus" | "digitalInputs" | "ignition" | "oilResistance" | "voltage" | "mileage" | "temperature" | "createdAt" | "updatedAt" | "mainCommand" | "packetLength" | "pseudoIP" | "rawData" | "timestamp", ExtArgs["result"]["positionData"]>

  export type $PositionDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PositionData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: string
      latitude: number
      longitude: number
      speed: number | null
      angle: number | null
      gpsStatus: string | null
      digitalInputs: string | null
      ignition: boolean | null
      oilResistance: number | null
      voltage: number | null
      mileage: number | null
      temperature: number | null
      createdAt: Date
      updatedAt: Date
      mainCommand: string | null
      packetLength: number | null
      pseudoIP: string | null
      rawData: string | null
      timestamp: Date
    }, ExtArgs["result"]["positionData"]>
    composites: {}
  }

  type PositionDataGetPayload<S extends boolean | null | undefined | PositionDataDefaultArgs> = $Result.GetResult<Prisma.$PositionDataPayload, S>

  type PositionDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PositionDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PositionDataCountAggregateInputType | true
    }

  export interface PositionDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PositionData'], meta: { name: 'PositionData' } }
    /**
     * Find zero or one PositionData that matches the filter.
     * @param {PositionDataFindUniqueArgs} args - Arguments to find a PositionData
     * @example
     * // Get one PositionData
     * const positionData = await prisma.positionData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PositionDataFindUniqueArgs>(args: SelectSubset<T, PositionDataFindUniqueArgs<ExtArgs>>): Prisma__PositionDataClient<$Result.GetResult<Prisma.$PositionDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PositionData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PositionDataFindUniqueOrThrowArgs} args - Arguments to find a PositionData
     * @example
     * // Get one PositionData
     * const positionData = await prisma.positionData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PositionDataFindUniqueOrThrowArgs>(args: SelectSubset<T, PositionDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PositionDataClient<$Result.GetResult<Prisma.$PositionDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PositionData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionDataFindFirstArgs} args - Arguments to find a PositionData
     * @example
     * // Get one PositionData
     * const positionData = await prisma.positionData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PositionDataFindFirstArgs>(args?: SelectSubset<T, PositionDataFindFirstArgs<ExtArgs>>): Prisma__PositionDataClient<$Result.GetResult<Prisma.$PositionDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PositionData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionDataFindFirstOrThrowArgs} args - Arguments to find a PositionData
     * @example
     * // Get one PositionData
     * const positionData = await prisma.positionData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PositionDataFindFirstOrThrowArgs>(args?: SelectSubset<T, PositionDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__PositionDataClient<$Result.GetResult<Prisma.$PositionDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PositionData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PositionData
     * const positionData = await prisma.positionData.findMany()
     * 
     * // Get first 10 PositionData
     * const positionData = await prisma.positionData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const positionDataWithIdOnly = await prisma.positionData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PositionDataFindManyArgs>(args?: SelectSubset<T, PositionDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PositionData.
     * @param {PositionDataCreateArgs} args - Arguments to create a PositionData.
     * @example
     * // Create one PositionData
     * const PositionData = await prisma.positionData.create({
     *   data: {
     *     // ... data to create a PositionData
     *   }
     * })
     * 
     */
    create<T extends PositionDataCreateArgs>(args: SelectSubset<T, PositionDataCreateArgs<ExtArgs>>): Prisma__PositionDataClient<$Result.GetResult<Prisma.$PositionDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PositionData.
     * @param {PositionDataCreateManyArgs} args - Arguments to create many PositionData.
     * @example
     * // Create many PositionData
     * const positionData = await prisma.positionData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PositionDataCreateManyArgs>(args?: SelectSubset<T, PositionDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PositionData and returns the data saved in the database.
     * @param {PositionDataCreateManyAndReturnArgs} args - Arguments to create many PositionData.
     * @example
     * // Create many PositionData
     * const positionData = await prisma.positionData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PositionData and only return the `id`
     * const positionDataWithIdOnly = await prisma.positionData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PositionDataCreateManyAndReturnArgs>(args?: SelectSubset<T, PositionDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PositionData.
     * @param {PositionDataDeleteArgs} args - Arguments to delete one PositionData.
     * @example
     * // Delete one PositionData
     * const PositionData = await prisma.positionData.delete({
     *   where: {
     *     // ... filter to delete one PositionData
     *   }
     * })
     * 
     */
    delete<T extends PositionDataDeleteArgs>(args: SelectSubset<T, PositionDataDeleteArgs<ExtArgs>>): Prisma__PositionDataClient<$Result.GetResult<Prisma.$PositionDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PositionData.
     * @param {PositionDataUpdateArgs} args - Arguments to update one PositionData.
     * @example
     * // Update one PositionData
     * const positionData = await prisma.positionData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PositionDataUpdateArgs>(args: SelectSubset<T, PositionDataUpdateArgs<ExtArgs>>): Prisma__PositionDataClient<$Result.GetResult<Prisma.$PositionDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PositionData.
     * @param {PositionDataDeleteManyArgs} args - Arguments to filter PositionData to delete.
     * @example
     * // Delete a few PositionData
     * const { count } = await prisma.positionData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PositionDataDeleteManyArgs>(args?: SelectSubset<T, PositionDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PositionData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PositionData
     * const positionData = await prisma.positionData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PositionDataUpdateManyArgs>(args: SelectSubset<T, PositionDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PositionData and returns the data updated in the database.
     * @param {PositionDataUpdateManyAndReturnArgs} args - Arguments to update many PositionData.
     * @example
     * // Update many PositionData
     * const positionData = await prisma.positionData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PositionData and only return the `id`
     * const positionDataWithIdOnly = await prisma.positionData.updateManyAndReturn({
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
    updateManyAndReturn<T extends PositionDataUpdateManyAndReturnArgs>(args: SelectSubset<T, PositionDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PositionData.
     * @param {PositionDataUpsertArgs} args - Arguments to update or create a PositionData.
     * @example
     * // Update or create a PositionData
     * const positionData = await prisma.positionData.upsert({
     *   create: {
     *     // ... data to create a PositionData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PositionData we want to update
     *   }
     * })
     */
    upsert<T extends PositionDataUpsertArgs>(args: SelectSubset<T, PositionDataUpsertArgs<ExtArgs>>): Prisma__PositionDataClient<$Result.GetResult<Prisma.$PositionDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PositionData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionDataCountArgs} args - Arguments to filter PositionData to count.
     * @example
     * // Count the number of PositionData
     * const count = await prisma.positionData.count({
     *   where: {
     *     // ... the filter for the PositionData we want to count
     *   }
     * })
    **/
    count<T extends PositionDataCountArgs>(
      args?: Subset<T, PositionDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PositionData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PositionDataAggregateArgs>(args: Subset<T, PositionDataAggregateArgs>): Prisma.PrismaPromise<GetPositionDataAggregateType<T>>

    /**
     * Group by PositionData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionDataGroupByArgs} args - Group by arguments.
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
      T extends PositionDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PositionDataGroupByArgs['orderBy'] }
        : { orderBy?: PositionDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PositionDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PositionData model
   */
  readonly fields: PositionDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PositionData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PositionDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PositionData model
   */
  interface PositionDataFieldRefs {
    readonly id: FieldRef<"PositionData", 'Int'>
    readonly clientId: FieldRef<"PositionData", 'String'>
    readonly latitude: FieldRef<"PositionData", 'Float'>
    readonly longitude: FieldRef<"PositionData", 'Float'>
    readonly speed: FieldRef<"PositionData", 'Float'>
    readonly angle: FieldRef<"PositionData", 'Float'>
    readonly gpsStatus: FieldRef<"PositionData", 'String'>
    readonly digitalInputs: FieldRef<"PositionData", 'String'>
    readonly ignition: FieldRef<"PositionData", 'Boolean'>
    readonly oilResistance: FieldRef<"PositionData", 'Int'>
    readonly voltage: FieldRef<"PositionData", 'Float'>
    readonly mileage: FieldRef<"PositionData", 'Int'>
    readonly temperature: FieldRef<"PositionData", 'Float'>
    readonly createdAt: FieldRef<"PositionData", 'DateTime'>
    readonly updatedAt: FieldRef<"PositionData", 'DateTime'>
    readonly mainCommand: FieldRef<"PositionData", 'String'>
    readonly packetLength: FieldRef<"PositionData", 'Int'>
    readonly pseudoIP: FieldRef<"PositionData", 'String'>
    readonly rawData: FieldRef<"PositionData", 'String'>
    readonly timestamp: FieldRef<"PositionData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PositionData findUnique
   */
  export type PositionDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionData
     */
    select?: PositionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionData
     */
    omit?: PositionDataOmit<ExtArgs> | null
    /**
     * Filter, which PositionData to fetch.
     */
    where: PositionDataWhereUniqueInput
  }

  /**
   * PositionData findUniqueOrThrow
   */
  export type PositionDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionData
     */
    select?: PositionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionData
     */
    omit?: PositionDataOmit<ExtArgs> | null
    /**
     * Filter, which PositionData to fetch.
     */
    where: PositionDataWhereUniqueInput
  }

  /**
   * PositionData findFirst
   */
  export type PositionDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionData
     */
    select?: PositionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionData
     */
    omit?: PositionDataOmit<ExtArgs> | null
    /**
     * Filter, which PositionData to fetch.
     */
    where?: PositionDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PositionData to fetch.
     */
    orderBy?: PositionDataOrderByWithRelationInput | PositionDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PositionData.
     */
    cursor?: PositionDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PositionData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PositionData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PositionData.
     */
    distinct?: PositionDataScalarFieldEnum | PositionDataScalarFieldEnum[]
  }

  /**
   * PositionData findFirstOrThrow
   */
  export type PositionDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionData
     */
    select?: PositionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionData
     */
    omit?: PositionDataOmit<ExtArgs> | null
    /**
     * Filter, which PositionData to fetch.
     */
    where?: PositionDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PositionData to fetch.
     */
    orderBy?: PositionDataOrderByWithRelationInput | PositionDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PositionData.
     */
    cursor?: PositionDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PositionData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PositionData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PositionData.
     */
    distinct?: PositionDataScalarFieldEnum | PositionDataScalarFieldEnum[]
  }

  /**
   * PositionData findMany
   */
  export type PositionDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionData
     */
    select?: PositionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionData
     */
    omit?: PositionDataOmit<ExtArgs> | null
    /**
     * Filter, which PositionData to fetch.
     */
    where?: PositionDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PositionData to fetch.
     */
    orderBy?: PositionDataOrderByWithRelationInput | PositionDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PositionData.
     */
    cursor?: PositionDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PositionData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PositionData.
     */
    skip?: number
    distinct?: PositionDataScalarFieldEnum | PositionDataScalarFieldEnum[]
  }

  /**
   * PositionData create
   */
  export type PositionDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionData
     */
    select?: PositionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionData
     */
    omit?: PositionDataOmit<ExtArgs> | null
    /**
     * The data needed to create a PositionData.
     */
    data: XOR<PositionDataCreateInput, PositionDataUncheckedCreateInput>
  }

  /**
   * PositionData createMany
   */
  export type PositionDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PositionData.
     */
    data: PositionDataCreateManyInput | PositionDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PositionData createManyAndReturn
   */
  export type PositionDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionData
     */
    select?: PositionDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PositionData
     */
    omit?: PositionDataOmit<ExtArgs> | null
    /**
     * The data used to create many PositionData.
     */
    data: PositionDataCreateManyInput | PositionDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PositionData update
   */
  export type PositionDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionData
     */
    select?: PositionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionData
     */
    omit?: PositionDataOmit<ExtArgs> | null
    /**
     * The data needed to update a PositionData.
     */
    data: XOR<PositionDataUpdateInput, PositionDataUncheckedUpdateInput>
    /**
     * Choose, which PositionData to update.
     */
    where: PositionDataWhereUniqueInput
  }

  /**
   * PositionData updateMany
   */
  export type PositionDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PositionData.
     */
    data: XOR<PositionDataUpdateManyMutationInput, PositionDataUncheckedUpdateManyInput>
    /**
     * Filter which PositionData to update
     */
    where?: PositionDataWhereInput
    /**
     * Limit how many PositionData to update.
     */
    limit?: number
  }

  /**
   * PositionData updateManyAndReturn
   */
  export type PositionDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionData
     */
    select?: PositionDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PositionData
     */
    omit?: PositionDataOmit<ExtArgs> | null
    /**
     * The data used to update PositionData.
     */
    data: XOR<PositionDataUpdateManyMutationInput, PositionDataUncheckedUpdateManyInput>
    /**
     * Filter which PositionData to update
     */
    where?: PositionDataWhereInput
    /**
     * Limit how many PositionData to update.
     */
    limit?: number
  }

  /**
   * PositionData upsert
   */
  export type PositionDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionData
     */
    select?: PositionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionData
     */
    omit?: PositionDataOmit<ExtArgs> | null
    /**
     * The filter to search for the PositionData to update in case it exists.
     */
    where: PositionDataWhereUniqueInput
    /**
     * In case the PositionData found by the `where` argument doesn't exist, create a new PositionData with this data.
     */
    create: XOR<PositionDataCreateInput, PositionDataUncheckedCreateInput>
    /**
     * In case the PositionData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PositionDataUpdateInput, PositionDataUncheckedUpdateInput>
  }

  /**
   * PositionData delete
   */
  export type PositionDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionData
     */
    select?: PositionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionData
     */
    omit?: PositionDataOmit<ExtArgs> | null
    /**
     * Filter which PositionData to delete.
     */
    where: PositionDataWhereUniqueInput
  }

  /**
   * PositionData deleteMany
   */
  export type PositionDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PositionData to delete
     */
    where?: PositionDataWhereInput
    /**
     * Limit how many PositionData to delete.
     */
    limit?: number
  }

  /**
   * PositionData without action
   */
  export type PositionDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionData
     */
    select?: PositionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionData
     */
    omit?: PositionDataOmit<ExtArgs> | null
  }


  /**
   * Model AlarmData
   */

  export type AggregateAlarmData = {
    _count: AlarmDataCountAggregateOutputType | null
    _avg: AlarmDataAvgAggregateOutputType | null
    _sum: AlarmDataSumAggregateOutputType | null
    _min: AlarmDataMinAggregateOutputType | null
    _max: AlarmDataMaxAggregateOutputType | null
  }

  export type AlarmDataAvgAggregateOutputType = {
    id: number | null
    packetLength: number | null
  }

  export type AlarmDataSumAggregateOutputType = {
    id: number | null
    packetLength: number | null
  }

  export type AlarmDataMinAggregateOutputType = {
    id: number | null
    clientId: string | null
    alarms: string | null
    createdAt: Date | null
    updatedAt: Date | null
    mainCommand: string | null
    packetLength: number | null
    pseudoIP: string | null
    rawData: string | null
    centerEnabledAlarm: boolean | null
    crossBorder: boolean | null
    emergency: boolean | null
    enterBorder: boolean | null
    illegalDoorOpen: boolean | null
    illegalStart: boolean | null
    oilChange: boolean | null
    overSpeed: boolean | null
    overVoltage: boolean | null
    overload: boolean | null
    overtimeDriving: boolean | null
    parking: boolean | null
    powerFailure: boolean | null
    underVoltage: boolean | null
    vibration: boolean | null
    timestamp: Date | null
  }

  export type AlarmDataMaxAggregateOutputType = {
    id: number | null
    clientId: string | null
    alarms: string | null
    createdAt: Date | null
    updatedAt: Date | null
    mainCommand: string | null
    packetLength: number | null
    pseudoIP: string | null
    rawData: string | null
    centerEnabledAlarm: boolean | null
    crossBorder: boolean | null
    emergency: boolean | null
    enterBorder: boolean | null
    illegalDoorOpen: boolean | null
    illegalStart: boolean | null
    oilChange: boolean | null
    overSpeed: boolean | null
    overVoltage: boolean | null
    overload: boolean | null
    overtimeDriving: boolean | null
    parking: boolean | null
    powerFailure: boolean | null
    underVoltage: boolean | null
    vibration: boolean | null
    timestamp: Date | null
  }

  export type AlarmDataCountAggregateOutputType = {
    id: number
    clientId: number
    alarms: number
    createdAt: number
    updatedAt: number
    mainCommand: number
    packetLength: number
    pseudoIP: number
    rawData: number
    centerEnabledAlarm: number
    crossBorder: number
    emergency: number
    enterBorder: number
    illegalDoorOpen: number
    illegalStart: number
    oilChange: number
    overSpeed: number
    overVoltage: number
    overload: number
    overtimeDriving: number
    parking: number
    powerFailure: number
    underVoltage: number
    vibration: number
    timestamp: number
    _all: number
  }


  export type AlarmDataAvgAggregateInputType = {
    id?: true
    packetLength?: true
  }

  export type AlarmDataSumAggregateInputType = {
    id?: true
    packetLength?: true
  }

  export type AlarmDataMinAggregateInputType = {
    id?: true
    clientId?: true
    alarms?: true
    createdAt?: true
    updatedAt?: true
    mainCommand?: true
    packetLength?: true
    pseudoIP?: true
    rawData?: true
    centerEnabledAlarm?: true
    crossBorder?: true
    emergency?: true
    enterBorder?: true
    illegalDoorOpen?: true
    illegalStart?: true
    oilChange?: true
    overSpeed?: true
    overVoltage?: true
    overload?: true
    overtimeDriving?: true
    parking?: true
    powerFailure?: true
    underVoltage?: true
    vibration?: true
    timestamp?: true
  }

  export type AlarmDataMaxAggregateInputType = {
    id?: true
    clientId?: true
    alarms?: true
    createdAt?: true
    updatedAt?: true
    mainCommand?: true
    packetLength?: true
    pseudoIP?: true
    rawData?: true
    centerEnabledAlarm?: true
    crossBorder?: true
    emergency?: true
    enterBorder?: true
    illegalDoorOpen?: true
    illegalStart?: true
    oilChange?: true
    overSpeed?: true
    overVoltage?: true
    overload?: true
    overtimeDriving?: true
    parking?: true
    powerFailure?: true
    underVoltage?: true
    vibration?: true
    timestamp?: true
  }

  export type AlarmDataCountAggregateInputType = {
    id?: true
    clientId?: true
    alarms?: true
    createdAt?: true
    updatedAt?: true
    mainCommand?: true
    packetLength?: true
    pseudoIP?: true
    rawData?: true
    centerEnabledAlarm?: true
    crossBorder?: true
    emergency?: true
    enterBorder?: true
    illegalDoorOpen?: true
    illegalStart?: true
    oilChange?: true
    overSpeed?: true
    overVoltage?: true
    overload?: true
    overtimeDriving?: true
    parking?: true
    powerFailure?: true
    underVoltage?: true
    vibration?: true
    timestamp?: true
    _all?: true
  }

  export type AlarmDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlarmData to aggregate.
     */
    where?: AlarmDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlarmData to fetch.
     */
    orderBy?: AlarmDataOrderByWithRelationInput | AlarmDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlarmDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlarmData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlarmData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlarmData
    **/
    _count?: true | AlarmDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlarmDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlarmDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlarmDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlarmDataMaxAggregateInputType
  }

  export type GetAlarmDataAggregateType<T extends AlarmDataAggregateArgs> = {
        [P in keyof T & keyof AggregateAlarmData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlarmData[P]>
      : GetScalarType<T[P], AggregateAlarmData[P]>
  }




  export type AlarmDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlarmDataWhereInput
    orderBy?: AlarmDataOrderByWithAggregationInput | AlarmDataOrderByWithAggregationInput[]
    by: AlarmDataScalarFieldEnum[] | AlarmDataScalarFieldEnum
    having?: AlarmDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlarmDataCountAggregateInputType | true
    _avg?: AlarmDataAvgAggregateInputType
    _sum?: AlarmDataSumAggregateInputType
    _min?: AlarmDataMinAggregateInputType
    _max?: AlarmDataMaxAggregateInputType
  }

  export type AlarmDataGroupByOutputType = {
    id: number
    clientId: string
    alarms: string
    createdAt: Date
    updatedAt: Date
    mainCommand: string | null
    packetLength: number | null
    pseudoIP: string | null
    rawData: string | null
    centerEnabledAlarm: boolean | null
    crossBorder: boolean | null
    emergency: boolean | null
    enterBorder: boolean | null
    illegalDoorOpen: boolean | null
    illegalStart: boolean | null
    oilChange: boolean | null
    overSpeed: boolean | null
    overVoltage: boolean | null
    overload: boolean | null
    overtimeDriving: boolean | null
    parking: boolean | null
    powerFailure: boolean | null
    underVoltage: boolean | null
    vibration: boolean | null
    timestamp: Date
    _count: AlarmDataCountAggregateOutputType | null
    _avg: AlarmDataAvgAggregateOutputType | null
    _sum: AlarmDataSumAggregateOutputType | null
    _min: AlarmDataMinAggregateOutputType | null
    _max: AlarmDataMaxAggregateOutputType | null
  }

  type GetAlarmDataGroupByPayload<T extends AlarmDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlarmDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlarmDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlarmDataGroupByOutputType[P]>
            : GetScalarType<T[P], AlarmDataGroupByOutputType[P]>
        }
      >
    >


  export type AlarmDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    alarms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainCommand?: boolean
    packetLength?: boolean
    pseudoIP?: boolean
    rawData?: boolean
    centerEnabledAlarm?: boolean
    crossBorder?: boolean
    emergency?: boolean
    enterBorder?: boolean
    illegalDoorOpen?: boolean
    illegalStart?: boolean
    oilChange?: boolean
    overSpeed?: boolean
    overVoltage?: boolean
    overload?: boolean
    overtimeDriving?: boolean
    parking?: boolean
    powerFailure?: boolean
    underVoltage?: boolean
    vibration?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["alarmData"]>

  export type AlarmDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    alarms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainCommand?: boolean
    packetLength?: boolean
    pseudoIP?: boolean
    rawData?: boolean
    centerEnabledAlarm?: boolean
    crossBorder?: boolean
    emergency?: boolean
    enterBorder?: boolean
    illegalDoorOpen?: boolean
    illegalStart?: boolean
    oilChange?: boolean
    overSpeed?: boolean
    overVoltage?: boolean
    overload?: boolean
    overtimeDriving?: boolean
    parking?: boolean
    powerFailure?: boolean
    underVoltage?: boolean
    vibration?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["alarmData"]>

  export type AlarmDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    alarms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainCommand?: boolean
    packetLength?: boolean
    pseudoIP?: boolean
    rawData?: boolean
    centerEnabledAlarm?: boolean
    crossBorder?: boolean
    emergency?: boolean
    enterBorder?: boolean
    illegalDoorOpen?: boolean
    illegalStart?: boolean
    oilChange?: boolean
    overSpeed?: boolean
    overVoltage?: boolean
    overload?: boolean
    overtimeDriving?: boolean
    parking?: boolean
    powerFailure?: boolean
    underVoltage?: boolean
    vibration?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["alarmData"]>

  export type AlarmDataSelectScalar = {
    id?: boolean
    clientId?: boolean
    alarms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainCommand?: boolean
    packetLength?: boolean
    pseudoIP?: boolean
    rawData?: boolean
    centerEnabledAlarm?: boolean
    crossBorder?: boolean
    emergency?: boolean
    enterBorder?: boolean
    illegalDoorOpen?: boolean
    illegalStart?: boolean
    oilChange?: boolean
    overSpeed?: boolean
    overVoltage?: boolean
    overload?: boolean
    overtimeDriving?: boolean
    parking?: boolean
    powerFailure?: boolean
    underVoltage?: boolean
    vibration?: boolean
    timestamp?: boolean
  }

  export type AlarmDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "alarms" | "createdAt" | "updatedAt" | "mainCommand" | "packetLength" | "pseudoIP" | "rawData" | "centerEnabledAlarm" | "crossBorder" | "emergency" | "enterBorder" | "illegalDoorOpen" | "illegalStart" | "oilChange" | "overSpeed" | "overVoltage" | "overload" | "overtimeDriving" | "parking" | "powerFailure" | "underVoltage" | "vibration" | "timestamp", ExtArgs["result"]["alarmData"]>

  export type $AlarmDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlarmData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: string
      alarms: string
      createdAt: Date
      updatedAt: Date
      mainCommand: string | null
      packetLength: number | null
      pseudoIP: string | null
      rawData: string | null
      centerEnabledAlarm: boolean | null
      crossBorder: boolean | null
      emergency: boolean | null
      enterBorder: boolean | null
      illegalDoorOpen: boolean | null
      illegalStart: boolean | null
      oilChange: boolean | null
      overSpeed: boolean | null
      overVoltage: boolean | null
      overload: boolean | null
      overtimeDriving: boolean | null
      parking: boolean | null
      powerFailure: boolean | null
      underVoltage: boolean | null
      vibration: boolean | null
      timestamp: Date
    }, ExtArgs["result"]["alarmData"]>
    composites: {}
  }

  type AlarmDataGetPayload<S extends boolean | null | undefined | AlarmDataDefaultArgs> = $Result.GetResult<Prisma.$AlarmDataPayload, S>

  type AlarmDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlarmDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlarmDataCountAggregateInputType | true
    }

  export interface AlarmDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlarmData'], meta: { name: 'AlarmData' } }
    /**
     * Find zero or one AlarmData that matches the filter.
     * @param {AlarmDataFindUniqueArgs} args - Arguments to find a AlarmData
     * @example
     * // Get one AlarmData
     * const alarmData = await prisma.alarmData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlarmDataFindUniqueArgs>(args: SelectSubset<T, AlarmDataFindUniqueArgs<ExtArgs>>): Prisma__AlarmDataClient<$Result.GetResult<Prisma.$AlarmDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlarmData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlarmDataFindUniqueOrThrowArgs} args - Arguments to find a AlarmData
     * @example
     * // Get one AlarmData
     * const alarmData = await prisma.alarmData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlarmDataFindUniqueOrThrowArgs>(args: SelectSubset<T, AlarmDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlarmDataClient<$Result.GetResult<Prisma.$AlarmDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlarmData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmDataFindFirstArgs} args - Arguments to find a AlarmData
     * @example
     * // Get one AlarmData
     * const alarmData = await prisma.alarmData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlarmDataFindFirstArgs>(args?: SelectSubset<T, AlarmDataFindFirstArgs<ExtArgs>>): Prisma__AlarmDataClient<$Result.GetResult<Prisma.$AlarmDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlarmData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmDataFindFirstOrThrowArgs} args - Arguments to find a AlarmData
     * @example
     * // Get one AlarmData
     * const alarmData = await prisma.alarmData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlarmDataFindFirstOrThrowArgs>(args?: SelectSubset<T, AlarmDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlarmDataClient<$Result.GetResult<Prisma.$AlarmDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlarmData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlarmData
     * const alarmData = await prisma.alarmData.findMany()
     * 
     * // Get first 10 AlarmData
     * const alarmData = await prisma.alarmData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alarmDataWithIdOnly = await prisma.alarmData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlarmDataFindManyArgs>(args?: SelectSubset<T, AlarmDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlarmDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlarmData.
     * @param {AlarmDataCreateArgs} args - Arguments to create a AlarmData.
     * @example
     * // Create one AlarmData
     * const AlarmData = await prisma.alarmData.create({
     *   data: {
     *     // ... data to create a AlarmData
     *   }
     * })
     * 
     */
    create<T extends AlarmDataCreateArgs>(args: SelectSubset<T, AlarmDataCreateArgs<ExtArgs>>): Prisma__AlarmDataClient<$Result.GetResult<Prisma.$AlarmDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlarmData.
     * @param {AlarmDataCreateManyArgs} args - Arguments to create many AlarmData.
     * @example
     * // Create many AlarmData
     * const alarmData = await prisma.alarmData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlarmDataCreateManyArgs>(args?: SelectSubset<T, AlarmDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlarmData and returns the data saved in the database.
     * @param {AlarmDataCreateManyAndReturnArgs} args - Arguments to create many AlarmData.
     * @example
     * // Create many AlarmData
     * const alarmData = await prisma.alarmData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlarmData and only return the `id`
     * const alarmDataWithIdOnly = await prisma.alarmData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlarmDataCreateManyAndReturnArgs>(args?: SelectSubset<T, AlarmDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlarmDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlarmData.
     * @param {AlarmDataDeleteArgs} args - Arguments to delete one AlarmData.
     * @example
     * // Delete one AlarmData
     * const AlarmData = await prisma.alarmData.delete({
     *   where: {
     *     // ... filter to delete one AlarmData
     *   }
     * })
     * 
     */
    delete<T extends AlarmDataDeleteArgs>(args: SelectSubset<T, AlarmDataDeleteArgs<ExtArgs>>): Prisma__AlarmDataClient<$Result.GetResult<Prisma.$AlarmDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlarmData.
     * @param {AlarmDataUpdateArgs} args - Arguments to update one AlarmData.
     * @example
     * // Update one AlarmData
     * const alarmData = await prisma.alarmData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlarmDataUpdateArgs>(args: SelectSubset<T, AlarmDataUpdateArgs<ExtArgs>>): Prisma__AlarmDataClient<$Result.GetResult<Prisma.$AlarmDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlarmData.
     * @param {AlarmDataDeleteManyArgs} args - Arguments to filter AlarmData to delete.
     * @example
     * // Delete a few AlarmData
     * const { count } = await prisma.alarmData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlarmDataDeleteManyArgs>(args?: SelectSubset<T, AlarmDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlarmData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlarmData
     * const alarmData = await prisma.alarmData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlarmDataUpdateManyArgs>(args: SelectSubset<T, AlarmDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlarmData and returns the data updated in the database.
     * @param {AlarmDataUpdateManyAndReturnArgs} args - Arguments to update many AlarmData.
     * @example
     * // Update many AlarmData
     * const alarmData = await prisma.alarmData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlarmData and only return the `id`
     * const alarmDataWithIdOnly = await prisma.alarmData.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlarmDataUpdateManyAndReturnArgs>(args: SelectSubset<T, AlarmDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlarmDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlarmData.
     * @param {AlarmDataUpsertArgs} args - Arguments to update or create a AlarmData.
     * @example
     * // Update or create a AlarmData
     * const alarmData = await prisma.alarmData.upsert({
     *   create: {
     *     // ... data to create a AlarmData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlarmData we want to update
     *   }
     * })
     */
    upsert<T extends AlarmDataUpsertArgs>(args: SelectSubset<T, AlarmDataUpsertArgs<ExtArgs>>): Prisma__AlarmDataClient<$Result.GetResult<Prisma.$AlarmDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlarmData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmDataCountArgs} args - Arguments to filter AlarmData to count.
     * @example
     * // Count the number of AlarmData
     * const count = await prisma.alarmData.count({
     *   where: {
     *     // ... the filter for the AlarmData we want to count
     *   }
     * })
    **/
    count<T extends AlarmDataCountArgs>(
      args?: Subset<T, AlarmDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlarmDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlarmData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlarmDataAggregateArgs>(args: Subset<T, AlarmDataAggregateArgs>): Prisma.PrismaPromise<GetAlarmDataAggregateType<T>>

    /**
     * Group by AlarmData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmDataGroupByArgs} args - Group by arguments.
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
      T extends AlarmDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlarmDataGroupByArgs['orderBy'] }
        : { orderBy?: AlarmDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlarmDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlarmDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlarmData model
   */
  readonly fields: AlarmDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlarmData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlarmDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AlarmData model
   */
  interface AlarmDataFieldRefs {
    readonly id: FieldRef<"AlarmData", 'Int'>
    readonly clientId: FieldRef<"AlarmData", 'String'>
    readonly alarms: FieldRef<"AlarmData", 'String'>
    readonly createdAt: FieldRef<"AlarmData", 'DateTime'>
    readonly updatedAt: FieldRef<"AlarmData", 'DateTime'>
    readonly mainCommand: FieldRef<"AlarmData", 'String'>
    readonly packetLength: FieldRef<"AlarmData", 'Int'>
    readonly pseudoIP: FieldRef<"AlarmData", 'String'>
    readonly rawData: FieldRef<"AlarmData", 'String'>
    readonly centerEnabledAlarm: FieldRef<"AlarmData", 'Boolean'>
    readonly crossBorder: FieldRef<"AlarmData", 'Boolean'>
    readonly emergency: FieldRef<"AlarmData", 'Boolean'>
    readonly enterBorder: FieldRef<"AlarmData", 'Boolean'>
    readonly illegalDoorOpen: FieldRef<"AlarmData", 'Boolean'>
    readonly illegalStart: FieldRef<"AlarmData", 'Boolean'>
    readonly oilChange: FieldRef<"AlarmData", 'Boolean'>
    readonly overSpeed: FieldRef<"AlarmData", 'Boolean'>
    readonly overVoltage: FieldRef<"AlarmData", 'Boolean'>
    readonly overload: FieldRef<"AlarmData", 'Boolean'>
    readonly overtimeDriving: FieldRef<"AlarmData", 'Boolean'>
    readonly parking: FieldRef<"AlarmData", 'Boolean'>
    readonly powerFailure: FieldRef<"AlarmData", 'Boolean'>
    readonly underVoltage: FieldRef<"AlarmData", 'Boolean'>
    readonly vibration: FieldRef<"AlarmData", 'Boolean'>
    readonly timestamp: FieldRef<"AlarmData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AlarmData findUnique
   */
  export type AlarmDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmData
     */
    select?: AlarmDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmData
     */
    omit?: AlarmDataOmit<ExtArgs> | null
    /**
     * Filter, which AlarmData to fetch.
     */
    where: AlarmDataWhereUniqueInput
  }

  /**
   * AlarmData findUniqueOrThrow
   */
  export type AlarmDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmData
     */
    select?: AlarmDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmData
     */
    omit?: AlarmDataOmit<ExtArgs> | null
    /**
     * Filter, which AlarmData to fetch.
     */
    where: AlarmDataWhereUniqueInput
  }

  /**
   * AlarmData findFirst
   */
  export type AlarmDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmData
     */
    select?: AlarmDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmData
     */
    omit?: AlarmDataOmit<ExtArgs> | null
    /**
     * Filter, which AlarmData to fetch.
     */
    where?: AlarmDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlarmData to fetch.
     */
    orderBy?: AlarmDataOrderByWithRelationInput | AlarmDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlarmData.
     */
    cursor?: AlarmDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlarmData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlarmData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlarmData.
     */
    distinct?: AlarmDataScalarFieldEnum | AlarmDataScalarFieldEnum[]
  }

  /**
   * AlarmData findFirstOrThrow
   */
  export type AlarmDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmData
     */
    select?: AlarmDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmData
     */
    omit?: AlarmDataOmit<ExtArgs> | null
    /**
     * Filter, which AlarmData to fetch.
     */
    where?: AlarmDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlarmData to fetch.
     */
    orderBy?: AlarmDataOrderByWithRelationInput | AlarmDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlarmData.
     */
    cursor?: AlarmDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlarmData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlarmData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlarmData.
     */
    distinct?: AlarmDataScalarFieldEnum | AlarmDataScalarFieldEnum[]
  }

  /**
   * AlarmData findMany
   */
  export type AlarmDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmData
     */
    select?: AlarmDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmData
     */
    omit?: AlarmDataOmit<ExtArgs> | null
    /**
     * Filter, which AlarmData to fetch.
     */
    where?: AlarmDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlarmData to fetch.
     */
    orderBy?: AlarmDataOrderByWithRelationInput | AlarmDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlarmData.
     */
    cursor?: AlarmDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlarmData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlarmData.
     */
    skip?: number
    distinct?: AlarmDataScalarFieldEnum | AlarmDataScalarFieldEnum[]
  }

  /**
   * AlarmData create
   */
  export type AlarmDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmData
     */
    select?: AlarmDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmData
     */
    omit?: AlarmDataOmit<ExtArgs> | null
    /**
     * The data needed to create a AlarmData.
     */
    data: XOR<AlarmDataCreateInput, AlarmDataUncheckedCreateInput>
  }

  /**
   * AlarmData createMany
   */
  export type AlarmDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlarmData.
     */
    data: AlarmDataCreateManyInput | AlarmDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlarmData createManyAndReturn
   */
  export type AlarmDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmData
     */
    select?: AlarmDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmData
     */
    omit?: AlarmDataOmit<ExtArgs> | null
    /**
     * The data used to create many AlarmData.
     */
    data: AlarmDataCreateManyInput | AlarmDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlarmData update
   */
  export type AlarmDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmData
     */
    select?: AlarmDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmData
     */
    omit?: AlarmDataOmit<ExtArgs> | null
    /**
     * The data needed to update a AlarmData.
     */
    data: XOR<AlarmDataUpdateInput, AlarmDataUncheckedUpdateInput>
    /**
     * Choose, which AlarmData to update.
     */
    where: AlarmDataWhereUniqueInput
  }

  /**
   * AlarmData updateMany
   */
  export type AlarmDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlarmData.
     */
    data: XOR<AlarmDataUpdateManyMutationInput, AlarmDataUncheckedUpdateManyInput>
    /**
     * Filter which AlarmData to update
     */
    where?: AlarmDataWhereInput
    /**
     * Limit how many AlarmData to update.
     */
    limit?: number
  }

  /**
   * AlarmData updateManyAndReturn
   */
  export type AlarmDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmData
     */
    select?: AlarmDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmData
     */
    omit?: AlarmDataOmit<ExtArgs> | null
    /**
     * The data used to update AlarmData.
     */
    data: XOR<AlarmDataUpdateManyMutationInput, AlarmDataUncheckedUpdateManyInput>
    /**
     * Filter which AlarmData to update
     */
    where?: AlarmDataWhereInput
    /**
     * Limit how many AlarmData to update.
     */
    limit?: number
  }

  /**
   * AlarmData upsert
   */
  export type AlarmDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmData
     */
    select?: AlarmDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmData
     */
    omit?: AlarmDataOmit<ExtArgs> | null
    /**
     * The filter to search for the AlarmData to update in case it exists.
     */
    where: AlarmDataWhereUniqueInput
    /**
     * In case the AlarmData found by the `where` argument doesn't exist, create a new AlarmData with this data.
     */
    create: XOR<AlarmDataCreateInput, AlarmDataUncheckedCreateInput>
    /**
     * In case the AlarmData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlarmDataUpdateInput, AlarmDataUncheckedUpdateInput>
  }

  /**
   * AlarmData delete
   */
  export type AlarmDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmData
     */
    select?: AlarmDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmData
     */
    omit?: AlarmDataOmit<ExtArgs> | null
    /**
     * Filter which AlarmData to delete.
     */
    where: AlarmDataWhereUniqueInput
  }

  /**
   * AlarmData deleteMany
   */
  export type AlarmDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlarmData to delete
     */
    where?: AlarmDataWhereInput
    /**
     * Limit how many AlarmData to delete.
     */
    limit?: number
  }

  /**
   * AlarmData without action
   */
  export type AlarmDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmData
     */
    select?: AlarmDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmData
     */
    omit?: AlarmDataOmit<ExtArgs> | null
  }


  /**
   * Model HeartbeatData
   */

  export type AggregateHeartbeatData = {
    _count: HeartbeatDataCountAggregateOutputType | null
    _avg: HeartbeatDataAvgAggregateOutputType | null
    _sum: HeartbeatDataSumAggregateOutputType | null
    _min: HeartbeatDataMinAggregateOutputType | null
    _max: HeartbeatDataMaxAggregateOutputType | null
  }

  export type HeartbeatDataAvgAggregateOutputType = {
    id: number | null
    calibrationValue: number | null
    mainOrderReply: number | null
    slaveOrderReply: number | null
    packetLength: number | null
  }

  export type HeartbeatDataSumAggregateOutputType = {
    id: number | null
    calibrationValue: number | null
    mainOrderReply: number | null
    slaveOrderReply: number | null
    packetLength: number | null
  }

  export type HeartbeatDataMinAggregateOutputType = {
    id: number | null
    clientId: string | null
    calibrationValue: number | null
    mainOrderReply: number | null
    slaveOrderReply: number | null
    createdAt: Date | null
    updatedAt: Date | null
    mainCommand: string | null
    packetLength: number | null
    pseudoIP: string | null
    rawData: string | null
    timestamp: Date | null
  }

  export type HeartbeatDataMaxAggregateOutputType = {
    id: number | null
    clientId: string | null
    calibrationValue: number | null
    mainOrderReply: number | null
    slaveOrderReply: number | null
    createdAt: Date | null
    updatedAt: Date | null
    mainCommand: string | null
    packetLength: number | null
    pseudoIP: string | null
    rawData: string | null
    timestamp: Date | null
  }

  export type HeartbeatDataCountAggregateOutputType = {
    id: number
    clientId: number
    calibrationValue: number
    mainOrderReply: number
    slaveOrderReply: number
    createdAt: number
    updatedAt: number
    mainCommand: number
    packetLength: number
    pseudoIP: number
    rawData: number
    timestamp: number
    _all: number
  }


  export type HeartbeatDataAvgAggregateInputType = {
    id?: true
    calibrationValue?: true
    mainOrderReply?: true
    slaveOrderReply?: true
    packetLength?: true
  }

  export type HeartbeatDataSumAggregateInputType = {
    id?: true
    calibrationValue?: true
    mainOrderReply?: true
    slaveOrderReply?: true
    packetLength?: true
  }

  export type HeartbeatDataMinAggregateInputType = {
    id?: true
    clientId?: true
    calibrationValue?: true
    mainOrderReply?: true
    slaveOrderReply?: true
    createdAt?: true
    updatedAt?: true
    mainCommand?: true
    packetLength?: true
    pseudoIP?: true
    rawData?: true
    timestamp?: true
  }

  export type HeartbeatDataMaxAggregateInputType = {
    id?: true
    clientId?: true
    calibrationValue?: true
    mainOrderReply?: true
    slaveOrderReply?: true
    createdAt?: true
    updatedAt?: true
    mainCommand?: true
    packetLength?: true
    pseudoIP?: true
    rawData?: true
    timestamp?: true
  }

  export type HeartbeatDataCountAggregateInputType = {
    id?: true
    clientId?: true
    calibrationValue?: true
    mainOrderReply?: true
    slaveOrderReply?: true
    createdAt?: true
    updatedAt?: true
    mainCommand?: true
    packetLength?: true
    pseudoIP?: true
    rawData?: true
    timestamp?: true
    _all?: true
  }

  export type HeartbeatDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeartbeatData to aggregate.
     */
    where?: HeartbeatDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeartbeatData to fetch.
     */
    orderBy?: HeartbeatDataOrderByWithRelationInput | HeartbeatDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeartbeatDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeartbeatData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeartbeatData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HeartbeatData
    **/
    _count?: true | HeartbeatDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeartbeatDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeartbeatDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeartbeatDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeartbeatDataMaxAggregateInputType
  }

  export type GetHeartbeatDataAggregateType<T extends HeartbeatDataAggregateArgs> = {
        [P in keyof T & keyof AggregateHeartbeatData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeartbeatData[P]>
      : GetScalarType<T[P], AggregateHeartbeatData[P]>
  }




  export type HeartbeatDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeartbeatDataWhereInput
    orderBy?: HeartbeatDataOrderByWithAggregationInput | HeartbeatDataOrderByWithAggregationInput[]
    by: HeartbeatDataScalarFieldEnum[] | HeartbeatDataScalarFieldEnum
    having?: HeartbeatDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeartbeatDataCountAggregateInputType | true
    _avg?: HeartbeatDataAvgAggregateInputType
    _sum?: HeartbeatDataSumAggregateInputType
    _min?: HeartbeatDataMinAggregateInputType
    _max?: HeartbeatDataMaxAggregateInputType
  }

  export type HeartbeatDataGroupByOutputType = {
    id: number
    clientId: string
    calibrationValue: number | null
    mainOrderReply: number | null
    slaveOrderReply: number | null
    createdAt: Date
    updatedAt: Date
    mainCommand: string | null
    packetLength: number | null
    pseudoIP: string | null
    rawData: string | null
    timestamp: Date
    _count: HeartbeatDataCountAggregateOutputType | null
    _avg: HeartbeatDataAvgAggregateOutputType | null
    _sum: HeartbeatDataSumAggregateOutputType | null
    _min: HeartbeatDataMinAggregateOutputType | null
    _max: HeartbeatDataMaxAggregateOutputType | null
  }

  type GetHeartbeatDataGroupByPayload<T extends HeartbeatDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeartbeatDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeartbeatDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeartbeatDataGroupByOutputType[P]>
            : GetScalarType<T[P], HeartbeatDataGroupByOutputType[P]>
        }
      >
    >


  export type HeartbeatDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    calibrationValue?: boolean
    mainOrderReply?: boolean
    slaveOrderReply?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainCommand?: boolean
    packetLength?: boolean
    pseudoIP?: boolean
    rawData?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["heartbeatData"]>

  export type HeartbeatDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    calibrationValue?: boolean
    mainOrderReply?: boolean
    slaveOrderReply?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainCommand?: boolean
    packetLength?: boolean
    pseudoIP?: boolean
    rawData?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["heartbeatData"]>

  export type HeartbeatDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    calibrationValue?: boolean
    mainOrderReply?: boolean
    slaveOrderReply?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainCommand?: boolean
    packetLength?: boolean
    pseudoIP?: boolean
    rawData?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["heartbeatData"]>

  export type HeartbeatDataSelectScalar = {
    id?: boolean
    clientId?: boolean
    calibrationValue?: boolean
    mainOrderReply?: boolean
    slaveOrderReply?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainCommand?: boolean
    packetLength?: boolean
    pseudoIP?: boolean
    rawData?: boolean
    timestamp?: boolean
  }

  export type HeartbeatDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "calibrationValue" | "mainOrderReply" | "slaveOrderReply" | "createdAt" | "updatedAt" | "mainCommand" | "packetLength" | "pseudoIP" | "rawData" | "timestamp", ExtArgs["result"]["heartbeatData"]>

  export type $HeartbeatDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HeartbeatData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: string
      calibrationValue: number | null
      mainOrderReply: number | null
      slaveOrderReply: number | null
      createdAt: Date
      updatedAt: Date
      mainCommand: string | null
      packetLength: number | null
      pseudoIP: string | null
      rawData: string | null
      timestamp: Date
    }, ExtArgs["result"]["heartbeatData"]>
    composites: {}
  }

  type HeartbeatDataGetPayload<S extends boolean | null | undefined | HeartbeatDataDefaultArgs> = $Result.GetResult<Prisma.$HeartbeatDataPayload, S>

  type HeartbeatDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeartbeatDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeartbeatDataCountAggregateInputType | true
    }

  export interface HeartbeatDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HeartbeatData'], meta: { name: 'HeartbeatData' } }
    /**
     * Find zero or one HeartbeatData that matches the filter.
     * @param {HeartbeatDataFindUniqueArgs} args - Arguments to find a HeartbeatData
     * @example
     * // Get one HeartbeatData
     * const heartbeatData = await prisma.heartbeatData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeartbeatDataFindUniqueArgs>(args: SelectSubset<T, HeartbeatDataFindUniqueArgs<ExtArgs>>): Prisma__HeartbeatDataClient<$Result.GetResult<Prisma.$HeartbeatDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HeartbeatData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeartbeatDataFindUniqueOrThrowArgs} args - Arguments to find a HeartbeatData
     * @example
     * // Get one HeartbeatData
     * const heartbeatData = await prisma.heartbeatData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeartbeatDataFindUniqueOrThrowArgs>(args: SelectSubset<T, HeartbeatDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeartbeatDataClient<$Result.GetResult<Prisma.$HeartbeatDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HeartbeatData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeartbeatDataFindFirstArgs} args - Arguments to find a HeartbeatData
     * @example
     * // Get one HeartbeatData
     * const heartbeatData = await prisma.heartbeatData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeartbeatDataFindFirstArgs>(args?: SelectSubset<T, HeartbeatDataFindFirstArgs<ExtArgs>>): Prisma__HeartbeatDataClient<$Result.GetResult<Prisma.$HeartbeatDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HeartbeatData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeartbeatDataFindFirstOrThrowArgs} args - Arguments to find a HeartbeatData
     * @example
     * // Get one HeartbeatData
     * const heartbeatData = await prisma.heartbeatData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeartbeatDataFindFirstOrThrowArgs>(args?: SelectSubset<T, HeartbeatDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeartbeatDataClient<$Result.GetResult<Prisma.$HeartbeatDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HeartbeatData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeartbeatDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HeartbeatData
     * const heartbeatData = await prisma.heartbeatData.findMany()
     * 
     * // Get first 10 HeartbeatData
     * const heartbeatData = await prisma.heartbeatData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const heartbeatDataWithIdOnly = await prisma.heartbeatData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HeartbeatDataFindManyArgs>(args?: SelectSubset<T, HeartbeatDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeartbeatDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HeartbeatData.
     * @param {HeartbeatDataCreateArgs} args - Arguments to create a HeartbeatData.
     * @example
     * // Create one HeartbeatData
     * const HeartbeatData = await prisma.heartbeatData.create({
     *   data: {
     *     // ... data to create a HeartbeatData
     *   }
     * })
     * 
     */
    create<T extends HeartbeatDataCreateArgs>(args: SelectSubset<T, HeartbeatDataCreateArgs<ExtArgs>>): Prisma__HeartbeatDataClient<$Result.GetResult<Prisma.$HeartbeatDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HeartbeatData.
     * @param {HeartbeatDataCreateManyArgs} args - Arguments to create many HeartbeatData.
     * @example
     * // Create many HeartbeatData
     * const heartbeatData = await prisma.heartbeatData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeartbeatDataCreateManyArgs>(args?: SelectSubset<T, HeartbeatDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HeartbeatData and returns the data saved in the database.
     * @param {HeartbeatDataCreateManyAndReturnArgs} args - Arguments to create many HeartbeatData.
     * @example
     * // Create many HeartbeatData
     * const heartbeatData = await prisma.heartbeatData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HeartbeatData and only return the `id`
     * const heartbeatDataWithIdOnly = await prisma.heartbeatData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HeartbeatDataCreateManyAndReturnArgs>(args?: SelectSubset<T, HeartbeatDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeartbeatDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HeartbeatData.
     * @param {HeartbeatDataDeleteArgs} args - Arguments to delete one HeartbeatData.
     * @example
     * // Delete one HeartbeatData
     * const HeartbeatData = await prisma.heartbeatData.delete({
     *   where: {
     *     // ... filter to delete one HeartbeatData
     *   }
     * })
     * 
     */
    delete<T extends HeartbeatDataDeleteArgs>(args: SelectSubset<T, HeartbeatDataDeleteArgs<ExtArgs>>): Prisma__HeartbeatDataClient<$Result.GetResult<Prisma.$HeartbeatDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HeartbeatData.
     * @param {HeartbeatDataUpdateArgs} args - Arguments to update one HeartbeatData.
     * @example
     * // Update one HeartbeatData
     * const heartbeatData = await prisma.heartbeatData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeartbeatDataUpdateArgs>(args: SelectSubset<T, HeartbeatDataUpdateArgs<ExtArgs>>): Prisma__HeartbeatDataClient<$Result.GetResult<Prisma.$HeartbeatDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HeartbeatData.
     * @param {HeartbeatDataDeleteManyArgs} args - Arguments to filter HeartbeatData to delete.
     * @example
     * // Delete a few HeartbeatData
     * const { count } = await prisma.heartbeatData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeartbeatDataDeleteManyArgs>(args?: SelectSubset<T, HeartbeatDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeartbeatData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeartbeatDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HeartbeatData
     * const heartbeatData = await prisma.heartbeatData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeartbeatDataUpdateManyArgs>(args: SelectSubset<T, HeartbeatDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeartbeatData and returns the data updated in the database.
     * @param {HeartbeatDataUpdateManyAndReturnArgs} args - Arguments to update many HeartbeatData.
     * @example
     * // Update many HeartbeatData
     * const heartbeatData = await prisma.heartbeatData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HeartbeatData and only return the `id`
     * const heartbeatDataWithIdOnly = await prisma.heartbeatData.updateManyAndReturn({
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
    updateManyAndReturn<T extends HeartbeatDataUpdateManyAndReturnArgs>(args: SelectSubset<T, HeartbeatDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeartbeatDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HeartbeatData.
     * @param {HeartbeatDataUpsertArgs} args - Arguments to update or create a HeartbeatData.
     * @example
     * // Update or create a HeartbeatData
     * const heartbeatData = await prisma.heartbeatData.upsert({
     *   create: {
     *     // ... data to create a HeartbeatData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HeartbeatData we want to update
     *   }
     * })
     */
    upsert<T extends HeartbeatDataUpsertArgs>(args: SelectSubset<T, HeartbeatDataUpsertArgs<ExtArgs>>): Prisma__HeartbeatDataClient<$Result.GetResult<Prisma.$HeartbeatDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HeartbeatData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeartbeatDataCountArgs} args - Arguments to filter HeartbeatData to count.
     * @example
     * // Count the number of HeartbeatData
     * const count = await prisma.heartbeatData.count({
     *   where: {
     *     // ... the filter for the HeartbeatData we want to count
     *   }
     * })
    **/
    count<T extends HeartbeatDataCountArgs>(
      args?: Subset<T, HeartbeatDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeartbeatDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HeartbeatData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeartbeatDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HeartbeatDataAggregateArgs>(args: Subset<T, HeartbeatDataAggregateArgs>): Prisma.PrismaPromise<GetHeartbeatDataAggregateType<T>>

    /**
     * Group by HeartbeatData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeartbeatDataGroupByArgs} args - Group by arguments.
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
      T extends HeartbeatDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeartbeatDataGroupByArgs['orderBy'] }
        : { orderBy?: HeartbeatDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HeartbeatDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeartbeatDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HeartbeatData model
   */
  readonly fields: HeartbeatDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HeartbeatData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeartbeatDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the HeartbeatData model
   */
  interface HeartbeatDataFieldRefs {
    readonly id: FieldRef<"HeartbeatData", 'Int'>
    readonly clientId: FieldRef<"HeartbeatData", 'String'>
    readonly calibrationValue: FieldRef<"HeartbeatData", 'Int'>
    readonly mainOrderReply: FieldRef<"HeartbeatData", 'Int'>
    readonly slaveOrderReply: FieldRef<"HeartbeatData", 'Int'>
    readonly createdAt: FieldRef<"HeartbeatData", 'DateTime'>
    readonly updatedAt: FieldRef<"HeartbeatData", 'DateTime'>
    readonly mainCommand: FieldRef<"HeartbeatData", 'String'>
    readonly packetLength: FieldRef<"HeartbeatData", 'Int'>
    readonly pseudoIP: FieldRef<"HeartbeatData", 'String'>
    readonly rawData: FieldRef<"HeartbeatData", 'String'>
    readonly timestamp: FieldRef<"HeartbeatData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HeartbeatData findUnique
   */
  export type HeartbeatDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartbeatData
     */
    select?: HeartbeatDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeartbeatData
     */
    omit?: HeartbeatDataOmit<ExtArgs> | null
    /**
     * Filter, which HeartbeatData to fetch.
     */
    where: HeartbeatDataWhereUniqueInput
  }

  /**
   * HeartbeatData findUniqueOrThrow
   */
  export type HeartbeatDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartbeatData
     */
    select?: HeartbeatDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeartbeatData
     */
    omit?: HeartbeatDataOmit<ExtArgs> | null
    /**
     * Filter, which HeartbeatData to fetch.
     */
    where: HeartbeatDataWhereUniqueInput
  }

  /**
   * HeartbeatData findFirst
   */
  export type HeartbeatDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartbeatData
     */
    select?: HeartbeatDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeartbeatData
     */
    omit?: HeartbeatDataOmit<ExtArgs> | null
    /**
     * Filter, which HeartbeatData to fetch.
     */
    where?: HeartbeatDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeartbeatData to fetch.
     */
    orderBy?: HeartbeatDataOrderByWithRelationInput | HeartbeatDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeartbeatData.
     */
    cursor?: HeartbeatDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeartbeatData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeartbeatData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeartbeatData.
     */
    distinct?: HeartbeatDataScalarFieldEnum | HeartbeatDataScalarFieldEnum[]
  }

  /**
   * HeartbeatData findFirstOrThrow
   */
  export type HeartbeatDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartbeatData
     */
    select?: HeartbeatDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeartbeatData
     */
    omit?: HeartbeatDataOmit<ExtArgs> | null
    /**
     * Filter, which HeartbeatData to fetch.
     */
    where?: HeartbeatDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeartbeatData to fetch.
     */
    orderBy?: HeartbeatDataOrderByWithRelationInput | HeartbeatDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeartbeatData.
     */
    cursor?: HeartbeatDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeartbeatData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeartbeatData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeartbeatData.
     */
    distinct?: HeartbeatDataScalarFieldEnum | HeartbeatDataScalarFieldEnum[]
  }

  /**
   * HeartbeatData findMany
   */
  export type HeartbeatDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartbeatData
     */
    select?: HeartbeatDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeartbeatData
     */
    omit?: HeartbeatDataOmit<ExtArgs> | null
    /**
     * Filter, which HeartbeatData to fetch.
     */
    where?: HeartbeatDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeartbeatData to fetch.
     */
    orderBy?: HeartbeatDataOrderByWithRelationInput | HeartbeatDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HeartbeatData.
     */
    cursor?: HeartbeatDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeartbeatData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeartbeatData.
     */
    skip?: number
    distinct?: HeartbeatDataScalarFieldEnum | HeartbeatDataScalarFieldEnum[]
  }

  /**
   * HeartbeatData create
   */
  export type HeartbeatDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartbeatData
     */
    select?: HeartbeatDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeartbeatData
     */
    omit?: HeartbeatDataOmit<ExtArgs> | null
    /**
     * The data needed to create a HeartbeatData.
     */
    data: XOR<HeartbeatDataCreateInput, HeartbeatDataUncheckedCreateInput>
  }

  /**
   * HeartbeatData createMany
   */
  export type HeartbeatDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HeartbeatData.
     */
    data: HeartbeatDataCreateManyInput | HeartbeatDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HeartbeatData createManyAndReturn
   */
  export type HeartbeatDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartbeatData
     */
    select?: HeartbeatDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HeartbeatData
     */
    omit?: HeartbeatDataOmit<ExtArgs> | null
    /**
     * The data used to create many HeartbeatData.
     */
    data: HeartbeatDataCreateManyInput | HeartbeatDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HeartbeatData update
   */
  export type HeartbeatDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartbeatData
     */
    select?: HeartbeatDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeartbeatData
     */
    omit?: HeartbeatDataOmit<ExtArgs> | null
    /**
     * The data needed to update a HeartbeatData.
     */
    data: XOR<HeartbeatDataUpdateInput, HeartbeatDataUncheckedUpdateInput>
    /**
     * Choose, which HeartbeatData to update.
     */
    where: HeartbeatDataWhereUniqueInput
  }

  /**
   * HeartbeatData updateMany
   */
  export type HeartbeatDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HeartbeatData.
     */
    data: XOR<HeartbeatDataUpdateManyMutationInput, HeartbeatDataUncheckedUpdateManyInput>
    /**
     * Filter which HeartbeatData to update
     */
    where?: HeartbeatDataWhereInput
    /**
     * Limit how many HeartbeatData to update.
     */
    limit?: number
  }

  /**
   * HeartbeatData updateManyAndReturn
   */
  export type HeartbeatDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartbeatData
     */
    select?: HeartbeatDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HeartbeatData
     */
    omit?: HeartbeatDataOmit<ExtArgs> | null
    /**
     * The data used to update HeartbeatData.
     */
    data: XOR<HeartbeatDataUpdateManyMutationInput, HeartbeatDataUncheckedUpdateManyInput>
    /**
     * Filter which HeartbeatData to update
     */
    where?: HeartbeatDataWhereInput
    /**
     * Limit how many HeartbeatData to update.
     */
    limit?: number
  }

  /**
   * HeartbeatData upsert
   */
  export type HeartbeatDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartbeatData
     */
    select?: HeartbeatDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeartbeatData
     */
    omit?: HeartbeatDataOmit<ExtArgs> | null
    /**
     * The filter to search for the HeartbeatData to update in case it exists.
     */
    where: HeartbeatDataWhereUniqueInput
    /**
     * In case the HeartbeatData found by the `where` argument doesn't exist, create a new HeartbeatData with this data.
     */
    create: XOR<HeartbeatDataCreateInput, HeartbeatDataUncheckedCreateInput>
    /**
     * In case the HeartbeatData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeartbeatDataUpdateInput, HeartbeatDataUncheckedUpdateInput>
  }

  /**
   * HeartbeatData delete
   */
  export type HeartbeatDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartbeatData
     */
    select?: HeartbeatDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeartbeatData
     */
    omit?: HeartbeatDataOmit<ExtArgs> | null
    /**
     * Filter which HeartbeatData to delete.
     */
    where: HeartbeatDataWhereUniqueInput
  }

  /**
   * HeartbeatData deleteMany
   */
  export type HeartbeatDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeartbeatData to delete
     */
    where?: HeartbeatDataWhereInput
    /**
     * Limit how many HeartbeatData to delete.
     */
    limit?: number
  }

  /**
   * HeartbeatData without action
   */
  export type HeartbeatDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartbeatData
     */
    select?: HeartbeatDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeartbeatData
     */
    omit?: HeartbeatDataOmit<ExtArgs> | null
  }


  /**
   * Model TrackerStatus
   */

  export type AggregateTrackerStatus = {
    _count: TrackerStatusCountAggregateOutputType | null
    _avg: TrackerStatusAvgAggregateOutputType | null
    _sum: TrackerStatusSumAggregateOutputType | null
    _min: TrackerStatusMinAggregateOutputType | null
    _max: TrackerStatusMaxAggregateOutputType | null
  }

  export type TrackerStatusAvgAggregateOutputType = {
    id: number | null
    alarmStatus: number | null
    samplingValue: number | null
    carStopSetting: number | null
    overspeedSetting: number | null
    safeSetting: number | null
    longTimeDriving: number | null
    samplingValueAccOff: number | null
    photographRelated: number | null
    packetLength: number | null
  }

  export type TrackerStatusSumAggregateOutputType = {
    id: number | null
    alarmStatus: number | null
    samplingValue: number | null
    carStopSetting: number | null
    overspeedSetting: number | null
    safeSetting: number | null
    longTimeDriving: number | null
    samplingValueAccOff: number | null
    photographRelated: number | null
    packetLength: number | null
  }

  export type TrackerStatusMinAggregateOutputType = {
    id: number | null
    clientId: string | null
    samplingTime: string | null
    alarmStatus: number | null
    located: boolean | null
    samplingType: string | null
    samplingValue: number | null
    sendingType: string | null
    carStopSetting: number | null
    overspeedSetting: number | null
    phoneLimit: boolean | null
    areaNodeLimit: boolean | null
    safeSetting: number | null
    longTimeDriving: number | null
    samplingValueAccOff: number | null
    emergencyAlarmSwitch: boolean | null
    photographRelated: number | null
    createdAt: Date | null
    updatedAt: Date | null
    mainCommand: string | null
    packetLength: number | null
    pseudoIP: string | null
    rawData: string | null
    timestamp: Date | null
  }

  export type TrackerStatusMaxAggregateOutputType = {
    id: number | null
    clientId: string | null
    samplingTime: string | null
    alarmStatus: number | null
    located: boolean | null
    samplingType: string | null
    samplingValue: number | null
    sendingType: string | null
    carStopSetting: number | null
    overspeedSetting: number | null
    phoneLimit: boolean | null
    areaNodeLimit: boolean | null
    safeSetting: number | null
    longTimeDriving: number | null
    samplingValueAccOff: number | null
    emergencyAlarmSwitch: boolean | null
    photographRelated: number | null
    createdAt: Date | null
    updatedAt: Date | null
    mainCommand: string | null
    packetLength: number | null
    pseudoIP: string | null
    rawData: string | null
    timestamp: Date | null
  }

  export type TrackerStatusCountAggregateOutputType = {
    id: number
    clientId: number
    samplingTime: number
    alarmStatus: number
    located: number
    samplingType: number
    samplingValue: number
    sendingType: number
    carStopSetting: number
    overspeedSetting: number
    phoneLimit: number
    areaNodeLimit: number
    safeSetting: number
    longTimeDriving: number
    samplingValueAccOff: number
    emergencyAlarmSwitch: number
    photographRelated: number
    createdAt: number
    updatedAt: number
    mainCommand: number
    packetLength: number
    pseudoIP: number
    rawData: number
    timestamp: number
    _all: number
  }


  export type TrackerStatusAvgAggregateInputType = {
    id?: true
    alarmStatus?: true
    samplingValue?: true
    carStopSetting?: true
    overspeedSetting?: true
    safeSetting?: true
    longTimeDriving?: true
    samplingValueAccOff?: true
    photographRelated?: true
    packetLength?: true
  }

  export type TrackerStatusSumAggregateInputType = {
    id?: true
    alarmStatus?: true
    samplingValue?: true
    carStopSetting?: true
    overspeedSetting?: true
    safeSetting?: true
    longTimeDriving?: true
    samplingValueAccOff?: true
    photographRelated?: true
    packetLength?: true
  }

  export type TrackerStatusMinAggregateInputType = {
    id?: true
    clientId?: true
    samplingTime?: true
    alarmStatus?: true
    located?: true
    samplingType?: true
    samplingValue?: true
    sendingType?: true
    carStopSetting?: true
    overspeedSetting?: true
    phoneLimit?: true
    areaNodeLimit?: true
    safeSetting?: true
    longTimeDriving?: true
    samplingValueAccOff?: true
    emergencyAlarmSwitch?: true
    photographRelated?: true
    createdAt?: true
    updatedAt?: true
    mainCommand?: true
    packetLength?: true
    pseudoIP?: true
    rawData?: true
    timestamp?: true
  }

  export type TrackerStatusMaxAggregateInputType = {
    id?: true
    clientId?: true
    samplingTime?: true
    alarmStatus?: true
    located?: true
    samplingType?: true
    samplingValue?: true
    sendingType?: true
    carStopSetting?: true
    overspeedSetting?: true
    phoneLimit?: true
    areaNodeLimit?: true
    safeSetting?: true
    longTimeDriving?: true
    samplingValueAccOff?: true
    emergencyAlarmSwitch?: true
    photographRelated?: true
    createdAt?: true
    updatedAt?: true
    mainCommand?: true
    packetLength?: true
    pseudoIP?: true
    rawData?: true
    timestamp?: true
  }

  export type TrackerStatusCountAggregateInputType = {
    id?: true
    clientId?: true
    samplingTime?: true
    alarmStatus?: true
    located?: true
    samplingType?: true
    samplingValue?: true
    sendingType?: true
    carStopSetting?: true
    overspeedSetting?: true
    phoneLimit?: true
    areaNodeLimit?: true
    safeSetting?: true
    longTimeDriving?: true
    samplingValueAccOff?: true
    emergencyAlarmSwitch?: true
    photographRelated?: true
    createdAt?: true
    updatedAt?: true
    mainCommand?: true
    packetLength?: true
    pseudoIP?: true
    rawData?: true
    timestamp?: true
    _all?: true
  }

  export type TrackerStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackerStatus to aggregate.
     */
    where?: TrackerStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackerStatuses to fetch.
     */
    orderBy?: TrackerStatusOrderByWithRelationInput | TrackerStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackerStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackerStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackerStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackerStatuses
    **/
    _count?: true | TrackerStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackerStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackerStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackerStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackerStatusMaxAggregateInputType
  }

  export type GetTrackerStatusAggregateType<T extends TrackerStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackerStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackerStatus[P]>
      : GetScalarType<T[P], AggregateTrackerStatus[P]>
  }




  export type TrackerStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackerStatusWhereInput
    orderBy?: TrackerStatusOrderByWithAggregationInput | TrackerStatusOrderByWithAggregationInput[]
    by: TrackerStatusScalarFieldEnum[] | TrackerStatusScalarFieldEnum
    having?: TrackerStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackerStatusCountAggregateInputType | true
    _avg?: TrackerStatusAvgAggregateInputType
    _sum?: TrackerStatusSumAggregateInputType
    _min?: TrackerStatusMinAggregateInputType
    _max?: TrackerStatusMaxAggregateInputType
  }

  export type TrackerStatusGroupByOutputType = {
    id: number
    clientId: string
    samplingTime: string
    alarmStatus: number | null
    located: boolean | null
    samplingType: string | null
    samplingValue: number | null
    sendingType: string | null
    carStopSetting: number | null
    overspeedSetting: number | null
    phoneLimit: boolean | null
    areaNodeLimit: boolean | null
    safeSetting: number | null
    longTimeDriving: number | null
    samplingValueAccOff: number | null
    emergencyAlarmSwitch: boolean | null
    photographRelated: number | null
    createdAt: Date
    updatedAt: Date
    mainCommand: string | null
    packetLength: number | null
    pseudoIP: string | null
    rawData: string | null
    timestamp: Date
    _count: TrackerStatusCountAggregateOutputType | null
    _avg: TrackerStatusAvgAggregateOutputType | null
    _sum: TrackerStatusSumAggregateOutputType | null
    _min: TrackerStatusMinAggregateOutputType | null
    _max: TrackerStatusMaxAggregateOutputType | null
  }

  type GetTrackerStatusGroupByPayload<T extends TrackerStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackerStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackerStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackerStatusGroupByOutputType[P]>
            : GetScalarType<T[P], TrackerStatusGroupByOutputType[P]>
        }
      >
    >


  export type TrackerStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    samplingTime?: boolean
    alarmStatus?: boolean
    located?: boolean
    samplingType?: boolean
    samplingValue?: boolean
    sendingType?: boolean
    carStopSetting?: boolean
    overspeedSetting?: boolean
    phoneLimit?: boolean
    areaNodeLimit?: boolean
    safeSetting?: boolean
    longTimeDriving?: boolean
    samplingValueAccOff?: boolean
    emergencyAlarmSwitch?: boolean
    photographRelated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainCommand?: boolean
    packetLength?: boolean
    pseudoIP?: boolean
    rawData?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["trackerStatus"]>

  export type TrackerStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    samplingTime?: boolean
    alarmStatus?: boolean
    located?: boolean
    samplingType?: boolean
    samplingValue?: boolean
    sendingType?: boolean
    carStopSetting?: boolean
    overspeedSetting?: boolean
    phoneLimit?: boolean
    areaNodeLimit?: boolean
    safeSetting?: boolean
    longTimeDriving?: boolean
    samplingValueAccOff?: boolean
    emergencyAlarmSwitch?: boolean
    photographRelated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainCommand?: boolean
    packetLength?: boolean
    pseudoIP?: boolean
    rawData?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["trackerStatus"]>

  export type TrackerStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    samplingTime?: boolean
    alarmStatus?: boolean
    located?: boolean
    samplingType?: boolean
    samplingValue?: boolean
    sendingType?: boolean
    carStopSetting?: boolean
    overspeedSetting?: boolean
    phoneLimit?: boolean
    areaNodeLimit?: boolean
    safeSetting?: boolean
    longTimeDriving?: boolean
    samplingValueAccOff?: boolean
    emergencyAlarmSwitch?: boolean
    photographRelated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainCommand?: boolean
    packetLength?: boolean
    pseudoIP?: boolean
    rawData?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["trackerStatus"]>

  export type TrackerStatusSelectScalar = {
    id?: boolean
    clientId?: boolean
    samplingTime?: boolean
    alarmStatus?: boolean
    located?: boolean
    samplingType?: boolean
    samplingValue?: boolean
    sendingType?: boolean
    carStopSetting?: boolean
    overspeedSetting?: boolean
    phoneLimit?: boolean
    areaNodeLimit?: boolean
    safeSetting?: boolean
    longTimeDriving?: boolean
    samplingValueAccOff?: boolean
    emergencyAlarmSwitch?: boolean
    photographRelated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainCommand?: boolean
    packetLength?: boolean
    pseudoIP?: boolean
    rawData?: boolean
    timestamp?: boolean
  }

  export type TrackerStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "samplingTime" | "alarmStatus" | "located" | "samplingType" | "samplingValue" | "sendingType" | "carStopSetting" | "overspeedSetting" | "phoneLimit" | "areaNodeLimit" | "safeSetting" | "longTimeDriving" | "samplingValueAccOff" | "emergencyAlarmSwitch" | "photographRelated" | "createdAt" | "updatedAt" | "mainCommand" | "packetLength" | "pseudoIP" | "rawData" | "timestamp", ExtArgs["result"]["trackerStatus"]>

  export type $TrackerStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackerStatus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: string
      samplingTime: string
      alarmStatus: number | null
      located: boolean | null
      samplingType: string | null
      samplingValue: number | null
      sendingType: string | null
      carStopSetting: number | null
      overspeedSetting: number | null
      phoneLimit: boolean | null
      areaNodeLimit: boolean | null
      safeSetting: number | null
      longTimeDriving: number | null
      samplingValueAccOff: number | null
      emergencyAlarmSwitch: boolean | null
      photographRelated: number | null
      createdAt: Date
      updatedAt: Date
      mainCommand: string | null
      packetLength: number | null
      pseudoIP: string | null
      rawData: string | null
      timestamp: Date
    }, ExtArgs["result"]["trackerStatus"]>
    composites: {}
  }

  type TrackerStatusGetPayload<S extends boolean | null | undefined | TrackerStatusDefaultArgs> = $Result.GetResult<Prisma.$TrackerStatusPayload, S>

  type TrackerStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrackerStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrackerStatusCountAggregateInputType | true
    }

  export interface TrackerStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackerStatus'], meta: { name: 'TrackerStatus' } }
    /**
     * Find zero or one TrackerStatus that matches the filter.
     * @param {TrackerStatusFindUniqueArgs} args - Arguments to find a TrackerStatus
     * @example
     * // Get one TrackerStatus
     * const trackerStatus = await prisma.trackerStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackerStatusFindUniqueArgs>(args: SelectSubset<T, TrackerStatusFindUniqueArgs<ExtArgs>>): Prisma__TrackerStatusClient<$Result.GetResult<Prisma.$TrackerStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrackerStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrackerStatusFindUniqueOrThrowArgs} args - Arguments to find a TrackerStatus
     * @example
     * // Get one TrackerStatus
     * const trackerStatus = await prisma.trackerStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackerStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackerStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackerStatusClient<$Result.GetResult<Prisma.$TrackerStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackerStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackerStatusFindFirstArgs} args - Arguments to find a TrackerStatus
     * @example
     * // Get one TrackerStatus
     * const trackerStatus = await prisma.trackerStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackerStatusFindFirstArgs>(args?: SelectSubset<T, TrackerStatusFindFirstArgs<ExtArgs>>): Prisma__TrackerStatusClient<$Result.GetResult<Prisma.$TrackerStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackerStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackerStatusFindFirstOrThrowArgs} args - Arguments to find a TrackerStatus
     * @example
     * // Get one TrackerStatus
     * const trackerStatus = await prisma.trackerStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackerStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackerStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackerStatusClient<$Result.GetResult<Prisma.$TrackerStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrackerStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackerStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackerStatuses
     * const trackerStatuses = await prisma.trackerStatus.findMany()
     * 
     * // Get first 10 TrackerStatuses
     * const trackerStatuses = await prisma.trackerStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackerStatusWithIdOnly = await prisma.trackerStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrackerStatusFindManyArgs>(args?: SelectSubset<T, TrackerStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackerStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrackerStatus.
     * @param {TrackerStatusCreateArgs} args - Arguments to create a TrackerStatus.
     * @example
     * // Create one TrackerStatus
     * const TrackerStatus = await prisma.trackerStatus.create({
     *   data: {
     *     // ... data to create a TrackerStatus
     *   }
     * })
     * 
     */
    create<T extends TrackerStatusCreateArgs>(args: SelectSubset<T, TrackerStatusCreateArgs<ExtArgs>>): Prisma__TrackerStatusClient<$Result.GetResult<Prisma.$TrackerStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrackerStatuses.
     * @param {TrackerStatusCreateManyArgs} args - Arguments to create many TrackerStatuses.
     * @example
     * // Create many TrackerStatuses
     * const trackerStatus = await prisma.trackerStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackerStatusCreateManyArgs>(args?: SelectSubset<T, TrackerStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrackerStatuses and returns the data saved in the database.
     * @param {TrackerStatusCreateManyAndReturnArgs} args - Arguments to create many TrackerStatuses.
     * @example
     * // Create many TrackerStatuses
     * const trackerStatus = await prisma.trackerStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrackerStatuses and only return the `id`
     * const trackerStatusWithIdOnly = await prisma.trackerStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackerStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackerStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackerStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrackerStatus.
     * @param {TrackerStatusDeleteArgs} args - Arguments to delete one TrackerStatus.
     * @example
     * // Delete one TrackerStatus
     * const TrackerStatus = await prisma.trackerStatus.delete({
     *   where: {
     *     // ... filter to delete one TrackerStatus
     *   }
     * })
     * 
     */
    delete<T extends TrackerStatusDeleteArgs>(args: SelectSubset<T, TrackerStatusDeleteArgs<ExtArgs>>): Prisma__TrackerStatusClient<$Result.GetResult<Prisma.$TrackerStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrackerStatus.
     * @param {TrackerStatusUpdateArgs} args - Arguments to update one TrackerStatus.
     * @example
     * // Update one TrackerStatus
     * const trackerStatus = await prisma.trackerStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackerStatusUpdateArgs>(args: SelectSubset<T, TrackerStatusUpdateArgs<ExtArgs>>): Prisma__TrackerStatusClient<$Result.GetResult<Prisma.$TrackerStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrackerStatuses.
     * @param {TrackerStatusDeleteManyArgs} args - Arguments to filter TrackerStatuses to delete.
     * @example
     * // Delete a few TrackerStatuses
     * const { count } = await prisma.trackerStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackerStatusDeleteManyArgs>(args?: SelectSubset<T, TrackerStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackerStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackerStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackerStatuses
     * const trackerStatus = await prisma.trackerStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackerStatusUpdateManyArgs>(args: SelectSubset<T, TrackerStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackerStatuses and returns the data updated in the database.
     * @param {TrackerStatusUpdateManyAndReturnArgs} args - Arguments to update many TrackerStatuses.
     * @example
     * // Update many TrackerStatuses
     * const trackerStatus = await prisma.trackerStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrackerStatuses and only return the `id`
     * const trackerStatusWithIdOnly = await prisma.trackerStatus.updateManyAndReturn({
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
    updateManyAndReturn<T extends TrackerStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, TrackerStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackerStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrackerStatus.
     * @param {TrackerStatusUpsertArgs} args - Arguments to update or create a TrackerStatus.
     * @example
     * // Update or create a TrackerStatus
     * const trackerStatus = await prisma.trackerStatus.upsert({
     *   create: {
     *     // ... data to create a TrackerStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackerStatus we want to update
     *   }
     * })
     */
    upsert<T extends TrackerStatusUpsertArgs>(args: SelectSubset<T, TrackerStatusUpsertArgs<ExtArgs>>): Prisma__TrackerStatusClient<$Result.GetResult<Prisma.$TrackerStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrackerStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackerStatusCountArgs} args - Arguments to filter TrackerStatuses to count.
     * @example
     * // Count the number of TrackerStatuses
     * const count = await prisma.trackerStatus.count({
     *   where: {
     *     // ... the filter for the TrackerStatuses we want to count
     *   }
     * })
    **/
    count<T extends TrackerStatusCountArgs>(
      args?: Subset<T, TrackerStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackerStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackerStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackerStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackerStatusAggregateArgs>(args: Subset<T, TrackerStatusAggregateArgs>): Prisma.PrismaPromise<GetTrackerStatusAggregateType<T>>

    /**
     * Group by TrackerStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackerStatusGroupByArgs} args - Group by arguments.
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
      T extends TrackerStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackerStatusGroupByArgs['orderBy'] }
        : { orderBy?: TrackerStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrackerStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackerStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackerStatus model
   */
  readonly fields: TrackerStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackerStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackerStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TrackerStatus model
   */
  interface TrackerStatusFieldRefs {
    readonly id: FieldRef<"TrackerStatus", 'Int'>
    readonly clientId: FieldRef<"TrackerStatus", 'String'>
    readonly samplingTime: FieldRef<"TrackerStatus", 'String'>
    readonly alarmStatus: FieldRef<"TrackerStatus", 'Int'>
    readonly located: FieldRef<"TrackerStatus", 'Boolean'>
    readonly samplingType: FieldRef<"TrackerStatus", 'String'>
    readonly samplingValue: FieldRef<"TrackerStatus", 'Int'>
    readonly sendingType: FieldRef<"TrackerStatus", 'String'>
    readonly carStopSetting: FieldRef<"TrackerStatus", 'Int'>
    readonly overspeedSetting: FieldRef<"TrackerStatus", 'Int'>
    readonly phoneLimit: FieldRef<"TrackerStatus", 'Boolean'>
    readonly areaNodeLimit: FieldRef<"TrackerStatus", 'Boolean'>
    readonly safeSetting: FieldRef<"TrackerStatus", 'Int'>
    readonly longTimeDriving: FieldRef<"TrackerStatus", 'Int'>
    readonly samplingValueAccOff: FieldRef<"TrackerStatus", 'Int'>
    readonly emergencyAlarmSwitch: FieldRef<"TrackerStatus", 'Boolean'>
    readonly photographRelated: FieldRef<"TrackerStatus", 'Int'>
    readonly createdAt: FieldRef<"TrackerStatus", 'DateTime'>
    readonly updatedAt: FieldRef<"TrackerStatus", 'DateTime'>
    readonly mainCommand: FieldRef<"TrackerStatus", 'String'>
    readonly packetLength: FieldRef<"TrackerStatus", 'Int'>
    readonly pseudoIP: FieldRef<"TrackerStatus", 'String'>
    readonly rawData: FieldRef<"TrackerStatus", 'String'>
    readonly timestamp: FieldRef<"TrackerStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrackerStatus findUnique
   */
  export type TrackerStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackerStatus
     */
    select?: TrackerStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackerStatus
     */
    omit?: TrackerStatusOmit<ExtArgs> | null
    /**
     * Filter, which TrackerStatus to fetch.
     */
    where: TrackerStatusWhereUniqueInput
  }

  /**
   * TrackerStatus findUniqueOrThrow
   */
  export type TrackerStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackerStatus
     */
    select?: TrackerStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackerStatus
     */
    omit?: TrackerStatusOmit<ExtArgs> | null
    /**
     * Filter, which TrackerStatus to fetch.
     */
    where: TrackerStatusWhereUniqueInput
  }

  /**
   * TrackerStatus findFirst
   */
  export type TrackerStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackerStatus
     */
    select?: TrackerStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackerStatus
     */
    omit?: TrackerStatusOmit<ExtArgs> | null
    /**
     * Filter, which TrackerStatus to fetch.
     */
    where?: TrackerStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackerStatuses to fetch.
     */
    orderBy?: TrackerStatusOrderByWithRelationInput | TrackerStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackerStatuses.
     */
    cursor?: TrackerStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackerStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackerStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackerStatuses.
     */
    distinct?: TrackerStatusScalarFieldEnum | TrackerStatusScalarFieldEnum[]
  }

  /**
   * TrackerStatus findFirstOrThrow
   */
  export type TrackerStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackerStatus
     */
    select?: TrackerStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackerStatus
     */
    omit?: TrackerStatusOmit<ExtArgs> | null
    /**
     * Filter, which TrackerStatus to fetch.
     */
    where?: TrackerStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackerStatuses to fetch.
     */
    orderBy?: TrackerStatusOrderByWithRelationInput | TrackerStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackerStatuses.
     */
    cursor?: TrackerStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackerStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackerStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackerStatuses.
     */
    distinct?: TrackerStatusScalarFieldEnum | TrackerStatusScalarFieldEnum[]
  }

  /**
   * TrackerStatus findMany
   */
  export type TrackerStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackerStatus
     */
    select?: TrackerStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackerStatus
     */
    omit?: TrackerStatusOmit<ExtArgs> | null
    /**
     * Filter, which TrackerStatuses to fetch.
     */
    where?: TrackerStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackerStatuses to fetch.
     */
    orderBy?: TrackerStatusOrderByWithRelationInput | TrackerStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackerStatuses.
     */
    cursor?: TrackerStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackerStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackerStatuses.
     */
    skip?: number
    distinct?: TrackerStatusScalarFieldEnum | TrackerStatusScalarFieldEnum[]
  }

  /**
   * TrackerStatus create
   */
  export type TrackerStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackerStatus
     */
    select?: TrackerStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackerStatus
     */
    omit?: TrackerStatusOmit<ExtArgs> | null
    /**
     * The data needed to create a TrackerStatus.
     */
    data: XOR<TrackerStatusCreateInput, TrackerStatusUncheckedCreateInput>
  }

  /**
   * TrackerStatus createMany
   */
  export type TrackerStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrackerStatuses.
     */
    data: TrackerStatusCreateManyInput | TrackerStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrackerStatus createManyAndReturn
   */
  export type TrackerStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackerStatus
     */
    select?: TrackerStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackerStatus
     */
    omit?: TrackerStatusOmit<ExtArgs> | null
    /**
     * The data used to create many TrackerStatuses.
     */
    data: TrackerStatusCreateManyInput | TrackerStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrackerStatus update
   */
  export type TrackerStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackerStatus
     */
    select?: TrackerStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackerStatus
     */
    omit?: TrackerStatusOmit<ExtArgs> | null
    /**
     * The data needed to update a TrackerStatus.
     */
    data: XOR<TrackerStatusUpdateInput, TrackerStatusUncheckedUpdateInput>
    /**
     * Choose, which TrackerStatus to update.
     */
    where: TrackerStatusWhereUniqueInput
  }

  /**
   * TrackerStatus updateMany
   */
  export type TrackerStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackerStatuses.
     */
    data: XOR<TrackerStatusUpdateManyMutationInput, TrackerStatusUncheckedUpdateManyInput>
    /**
     * Filter which TrackerStatuses to update
     */
    where?: TrackerStatusWhereInput
    /**
     * Limit how many TrackerStatuses to update.
     */
    limit?: number
  }

  /**
   * TrackerStatus updateManyAndReturn
   */
  export type TrackerStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackerStatus
     */
    select?: TrackerStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackerStatus
     */
    omit?: TrackerStatusOmit<ExtArgs> | null
    /**
     * The data used to update TrackerStatuses.
     */
    data: XOR<TrackerStatusUpdateManyMutationInput, TrackerStatusUncheckedUpdateManyInput>
    /**
     * Filter which TrackerStatuses to update
     */
    where?: TrackerStatusWhereInput
    /**
     * Limit how many TrackerStatuses to update.
     */
    limit?: number
  }

  /**
   * TrackerStatus upsert
   */
  export type TrackerStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackerStatus
     */
    select?: TrackerStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackerStatus
     */
    omit?: TrackerStatusOmit<ExtArgs> | null
    /**
     * The filter to search for the TrackerStatus to update in case it exists.
     */
    where: TrackerStatusWhereUniqueInput
    /**
     * In case the TrackerStatus found by the `where` argument doesn't exist, create a new TrackerStatus with this data.
     */
    create: XOR<TrackerStatusCreateInput, TrackerStatusUncheckedCreateInput>
    /**
     * In case the TrackerStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackerStatusUpdateInput, TrackerStatusUncheckedUpdateInput>
  }

  /**
   * TrackerStatus delete
   */
  export type TrackerStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackerStatus
     */
    select?: TrackerStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackerStatus
     */
    omit?: TrackerStatusOmit<ExtArgs> | null
    /**
     * Filter which TrackerStatus to delete.
     */
    where: TrackerStatusWhereUniqueInput
  }

  /**
   * TrackerStatus deleteMany
   */
  export type TrackerStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackerStatuses to delete
     */
    where?: TrackerStatusWhereInput
    /**
     * Limit how many TrackerStatuses to delete.
     */
    limit?: number
  }

  /**
   * TrackerStatus without action
   */
  export type TrackerStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackerStatus
     */
    select?: TrackerStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackerStatus
     */
    omit?: TrackerStatusOmit<ExtArgs> | null
  }


  /**
   * Model IButtonData
   */

  export type AggregateIButtonData = {
    _count: IButtonDataCountAggregateOutputType | null
    _avg: IButtonDataAvgAggregateOutputType | null
    _sum: IButtonDataSumAggregateOutputType | null
    _min: IButtonDataMinAggregateOutputType | null
    _max: IButtonDataMaxAggregateOutputType | null
  }

  export type IButtonDataAvgAggregateOutputType = {
    id: number | null
    subCommand: number | null
    packetLength: number | null
  }

  export type IButtonDataSumAggregateOutputType = {
    id: number | null
    subCommand: number | null
    packetLength: number | null
  }

  export type IButtonDataMinAggregateOutputType = {
    id: number | null
    clientId: string | null
    subCommand: number | null
    message: string | null
    driverName: string | null
    driverId: string | null
    swipeData: string | null
    createdAt: Date | null
    updatedAt: Date | null
    mainCommand: string | null
    packetLength: number | null
    pseudoIP: string | null
    rawData: string | null
    timestamp: Date | null
  }

  export type IButtonDataMaxAggregateOutputType = {
    id: number | null
    clientId: string | null
    subCommand: number | null
    message: string | null
    driverName: string | null
    driverId: string | null
    swipeData: string | null
    createdAt: Date | null
    updatedAt: Date | null
    mainCommand: string | null
    packetLength: number | null
    pseudoIP: string | null
    rawData: string | null
    timestamp: Date | null
  }

  export type IButtonDataCountAggregateOutputType = {
    id: number
    clientId: number
    subCommand: number
    message: number
    driverName: number
    driverId: number
    swipeData: number
    createdAt: number
    updatedAt: number
    mainCommand: number
    packetLength: number
    pseudoIP: number
    rawData: number
    timestamp: number
    _all: number
  }


  export type IButtonDataAvgAggregateInputType = {
    id?: true
    subCommand?: true
    packetLength?: true
  }

  export type IButtonDataSumAggregateInputType = {
    id?: true
    subCommand?: true
    packetLength?: true
  }

  export type IButtonDataMinAggregateInputType = {
    id?: true
    clientId?: true
    subCommand?: true
    message?: true
    driverName?: true
    driverId?: true
    swipeData?: true
    createdAt?: true
    updatedAt?: true
    mainCommand?: true
    packetLength?: true
    pseudoIP?: true
    rawData?: true
    timestamp?: true
  }

  export type IButtonDataMaxAggregateInputType = {
    id?: true
    clientId?: true
    subCommand?: true
    message?: true
    driverName?: true
    driverId?: true
    swipeData?: true
    createdAt?: true
    updatedAt?: true
    mainCommand?: true
    packetLength?: true
    pseudoIP?: true
    rawData?: true
    timestamp?: true
  }

  export type IButtonDataCountAggregateInputType = {
    id?: true
    clientId?: true
    subCommand?: true
    message?: true
    driverName?: true
    driverId?: true
    swipeData?: true
    createdAt?: true
    updatedAt?: true
    mainCommand?: true
    packetLength?: true
    pseudoIP?: true
    rawData?: true
    timestamp?: true
    _all?: true
  }

  export type IButtonDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IButtonData to aggregate.
     */
    where?: IButtonDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IButtonData to fetch.
     */
    orderBy?: IButtonDataOrderByWithRelationInput | IButtonDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IButtonDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IButtonData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IButtonData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IButtonData
    **/
    _count?: true | IButtonDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IButtonDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IButtonDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IButtonDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IButtonDataMaxAggregateInputType
  }

  export type GetIButtonDataAggregateType<T extends IButtonDataAggregateArgs> = {
        [P in keyof T & keyof AggregateIButtonData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIButtonData[P]>
      : GetScalarType<T[P], AggregateIButtonData[P]>
  }




  export type IButtonDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IButtonDataWhereInput
    orderBy?: IButtonDataOrderByWithAggregationInput | IButtonDataOrderByWithAggregationInput[]
    by: IButtonDataScalarFieldEnum[] | IButtonDataScalarFieldEnum
    having?: IButtonDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IButtonDataCountAggregateInputType | true
    _avg?: IButtonDataAvgAggregateInputType
    _sum?: IButtonDataSumAggregateInputType
    _min?: IButtonDataMinAggregateInputType
    _max?: IButtonDataMaxAggregateInputType
  }

  export type IButtonDataGroupByOutputType = {
    id: number
    clientId: string
    subCommand: number | null
    message: string | null
    driverName: string | null
    driverId: string | null
    swipeData: string | null
    createdAt: Date
    updatedAt: Date
    mainCommand: string | null
    packetLength: number | null
    pseudoIP: string | null
    rawData: string | null
    timestamp: Date
    _count: IButtonDataCountAggregateOutputType | null
    _avg: IButtonDataAvgAggregateOutputType | null
    _sum: IButtonDataSumAggregateOutputType | null
    _min: IButtonDataMinAggregateOutputType | null
    _max: IButtonDataMaxAggregateOutputType | null
  }

  type GetIButtonDataGroupByPayload<T extends IButtonDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IButtonDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IButtonDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IButtonDataGroupByOutputType[P]>
            : GetScalarType<T[P], IButtonDataGroupByOutputType[P]>
        }
      >
    >


  export type IButtonDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    subCommand?: boolean
    message?: boolean
    driverName?: boolean
    driverId?: boolean
    swipeData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainCommand?: boolean
    packetLength?: boolean
    pseudoIP?: boolean
    rawData?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["iButtonData"]>

  export type IButtonDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    subCommand?: boolean
    message?: boolean
    driverName?: boolean
    driverId?: boolean
    swipeData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainCommand?: boolean
    packetLength?: boolean
    pseudoIP?: boolean
    rawData?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["iButtonData"]>

  export type IButtonDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    subCommand?: boolean
    message?: boolean
    driverName?: boolean
    driverId?: boolean
    swipeData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainCommand?: boolean
    packetLength?: boolean
    pseudoIP?: boolean
    rawData?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["iButtonData"]>

  export type IButtonDataSelectScalar = {
    id?: boolean
    clientId?: boolean
    subCommand?: boolean
    message?: boolean
    driverName?: boolean
    driverId?: boolean
    swipeData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainCommand?: boolean
    packetLength?: boolean
    pseudoIP?: boolean
    rawData?: boolean
    timestamp?: boolean
  }

  export type IButtonDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "subCommand" | "message" | "driverName" | "driverId" | "swipeData" | "createdAt" | "updatedAt" | "mainCommand" | "packetLength" | "pseudoIP" | "rawData" | "timestamp", ExtArgs["result"]["iButtonData"]>

  export type $IButtonDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IButtonData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: string
      subCommand: number | null
      message: string | null
      driverName: string | null
      driverId: string | null
      swipeData: string | null
      createdAt: Date
      updatedAt: Date
      mainCommand: string | null
      packetLength: number | null
      pseudoIP: string | null
      rawData: string | null
      timestamp: Date
    }, ExtArgs["result"]["iButtonData"]>
    composites: {}
  }

  type IButtonDataGetPayload<S extends boolean | null | undefined | IButtonDataDefaultArgs> = $Result.GetResult<Prisma.$IButtonDataPayload, S>

  type IButtonDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IButtonDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IButtonDataCountAggregateInputType | true
    }

  export interface IButtonDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IButtonData'], meta: { name: 'IButtonData' } }
    /**
     * Find zero or one IButtonData that matches the filter.
     * @param {IButtonDataFindUniqueArgs} args - Arguments to find a IButtonData
     * @example
     * // Get one IButtonData
     * const iButtonData = await prisma.iButtonData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IButtonDataFindUniqueArgs>(args: SelectSubset<T, IButtonDataFindUniqueArgs<ExtArgs>>): Prisma__IButtonDataClient<$Result.GetResult<Prisma.$IButtonDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IButtonData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IButtonDataFindUniqueOrThrowArgs} args - Arguments to find a IButtonData
     * @example
     * // Get one IButtonData
     * const iButtonData = await prisma.iButtonData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IButtonDataFindUniqueOrThrowArgs>(args: SelectSubset<T, IButtonDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IButtonDataClient<$Result.GetResult<Prisma.$IButtonDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IButtonData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IButtonDataFindFirstArgs} args - Arguments to find a IButtonData
     * @example
     * // Get one IButtonData
     * const iButtonData = await prisma.iButtonData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IButtonDataFindFirstArgs>(args?: SelectSubset<T, IButtonDataFindFirstArgs<ExtArgs>>): Prisma__IButtonDataClient<$Result.GetResult<Prisma.$IButtonDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IButtonData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IButtonDataFindFirstOrThrowArgs} args - Arguments to find a IButtonData
     * @example
     * // Get one IButtonData
     * const iButtonData = await prisma.iButtonData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IButtonDataFindFirstOrThrowArgs>(args?: SelectSubset<T, IButtonDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__IButtonDataClient<$Result.GetResult<Prisma.$IButtonDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IButtonData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IButtonDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IButtonData
     * const iButtonData = await prisma.iButtonData.findMany()
     * 
     * // Get first 10 IButtonData
     * const iButtonData = await prisma.iButtonData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const iButtonDataWithIdOnly = await prisma.iButtonData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IButtonDataFindManyArgs>(args?: SelectSubset<T, IButtonDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IButtonDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IButtonData.
     * @param {IButtonDataCreateArgs} args - Arguments to create a IButtonData.
     * @example
     * // Create one IButtonData
     * const IButtonData = await prisma.iButtonData.create({
     *   data: {
     *     // ... data to create a IButtonData
     *   }
     * })
     * 
     */
    create<T extends IButtonDataCreateArgs>(args: SelectSubset<T, IButtonDataCreateArgs<ExtArgs>>): Prisma__IButtonDataClient<$Result.GetResult<Prisma.$IButtonDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IButtonData.
     * @param {IButtonDataCreateManyArgs} args - Arguments to create many IButtonData.
     * @example
     * // Create many IButtonData
     * const iButtonData = await prisma.iButtonData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IButtonDataCreateManyArgs>(args?: SelectSubset<T, IButtonDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IButtonData and returns the data saved in the database.
     * @param {IButtonDataCreateManyAndReturnArgs} args - Arguments to create many IButtonData.
     * @example
     * // Create many IButtonData
     * const iButtonData = await prisma.iButtonData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IButtonData and only return the `id`
     * const iButtonDataWithIdOnly = await prisma.iButtonData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IButtonDataCreateManyAndReturnArgs>(args?: SelectSubset<T, IButtonDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IButtonDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IButtonData.
     * @param {IButtonDataDeleteArgs} args - Arguments to delete one IButtonData.
     * @example
     * // Delete one IButtonData
     * const IButtonData = await prisma.iButtonData.delete({
     *   where: {
     *     // ... filter to delete one IButtonData
     *   }
     * })
     * 
     */
    delete<T extends IButtonDataDeleteArgs>(args: SelectSubset<T, IButtonDataDeleteArgs<ExtArgs>>): Prisma__IButtonDataClient<$Result.GetResult<Prisma.$IButtonDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IButtonData.
     * @param {IButtonDataUpdateArgs} args - Arguments to update one IButtonData.
     * @example
     * // Update one IButtonData
     * const iButtonData = await prisma.iButtonData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IButtonDataUpdateArgs>(args: SelectSubset<T, IButtonDataUpdateArgs<ExtArgs>>): Prisma__IButtonDataClient<$Result.GetResult<Prisma.$IButtonDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IButtonData.
     * @param {IButtonDataDeleteManyArgs} args - Arguments to filter IButtonData to delete.
     * @example
     * // Delete a few IButtonData
     * const { count } = await prisma.iButtonData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IButtonDataDeleteManyArgs>(args?: SelectSubset<T, IButtonDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IButtonData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IButtonDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IButtonData
     * const iButtonData = await prisma.iButtonData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IButtonDataUpdateManyArgs>(args: SelectSubset<T, IButtonDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IButtonData and returns the data updated in the database.
     * @param {IButtonDataUpdateManyAndReturnArgs} args - Arguments to update many IButtonData.
     * @example
     * // Update many IButtonData
     * const iButtonData = await prisma.iButtonData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IButtonData and only return the `id`
     * const iButtonDataWithIdOnly = await prisma.iButtonData.updateManyAndReturn({
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
    updateManyAndReturn<T extends IButtonDataUpdateManyAndReturnArgs>(args: SelectSubset<T, IButtonDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IButtonDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IButtonData.
     * @param {IButtonDataUpsertArgs} args - Arguments to update or create a IButtonData.
     * @example
     * // Update or create a IButtonData
     * const iButtonData = await prisma.iButtonData.upsert({
     *   create: {
     *     // ... data to create a IButtonData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IButtonData we want to update
     *   }
     * })
     */
    upsert<T extends IButtonDataUpsertArgs>(args: SelectSubset<T, IButtonDataUpsertArgs<ExtArgs>>): Prisma__IButtonDataClient<$Result.GetResult<Prisma.$IButtonDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IButtonData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IButtonDataCountArgs} args - Arguments to filter IButtonData to count.
     * @example
     * // Count the number of IButtonData
     * const count = await prisma.iButtonData.count({
     *   where: {
     *     // ... the filter for the IButtonData we want to count
     *   }
     * })
    **/
    count<T extends IButtonDataCountArgs>(
      args?: Subset<T, IButtonDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IButtonDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IButtonData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IButtonDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IButtonDataAggregateArgs>(args: Subset<T, IButtonDataAggregateArgs>): Prisma.PrismaPromise<GetIButtonDataAggregateType<T>>

    /**
     * Group by IButtonData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IButtonDataGroupByArgs} args - Group by arguments.
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
      T extends IButtonDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IButtonDataGroupByArgs['orderBy'] }
        : { orderBy?: IButtonDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IButtonDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIButtonDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IButtonData model
   */
  readonly fields: IButtonDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IButtonData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IButtonDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the IButtonData model
   */
  interface IButtonDataFieldRefs {
    readonly id: FieldRef<"IButtonData", 'Int'>
    readonly clientId: FieldRef<"IButtonData", 'String'>
    readonly subCommand: FieldRef<"IButtonData", 'Int'>
    readonly message: FieldRef<"IButtonData", 'String'>
    readonly driverName: FieldRef<"IButtonData", 'String'>
    readonly driverId: FieldRef<"IButtonData", 'String'>
    readonly swipeData: FieldRef<"IButtonData", 'String'>
    readonly createdAt: FieldRef<"IButtonData", 'DateTime'>
    readonly updatedAt: FieldRef<"IButtonData", 'DateTime'>
    readonly mainCommand: FieldRef<"IButtonData", 'String'>
    readonly packetLength: FieldRef<"IButtonData", 'Int'>
    readonly pseudoIP: FieldRef<"IButtonData", 'String'>
    readonly rawData: FieldRef<"IButtonData", 'String'>
    readonly timestamp: FieldRef<"IButtonData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IButtonData findUnique
   */
  export type IButtonDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IButtonData
     */
    select?: IButtonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IButtonData
     */
    omit?: IButtonDataOmit<ExtArgs> | null
    /**
     * Filter, which IButtonData to fetch.
     */
    where: IButtonDataWhereUniqueInput
  }

  /**
   * IButtonData findUniqueOrThrow
   */
  export type IButtonDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IButtonData
     */
    select?: IButtonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IButtonData
     */
    omit?: IButtonDataOmit<ExtArgs> | null
    /**
     * Filter, which IButtonData to fetch.
     */
    where: IButtonDataWhereUniqueInput
  }

  /**
   * IButtonData findFirst
   */
  export type IButtonDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IButtonData
     */
    select?: IButtonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IButtonData
     */
    omit?: IButtonDataOmit<ExtArgs> | null
    /**
     * Filter, which IButtonData to fetch.
     */
    where?: IButtonDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IButtonData to fetch.
     */
    orderBy?: IButtonDataOrderByWithRelationInput | IButtonDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IButtonData.
     */
    cursor?: IButtonDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IButtonData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IButtonData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IButtonData.
     */
    distinct?: IButtonDataScalarFieldEnum | IButtonDataScalarFieldEnum[]
  }

  /**
   * IButtonData findFirstOrThrow
   */
  export type IButtonDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IButtonData
     */
    select?: IButtonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IButtonData
     */
    omit?: IButtonDataOmit<ExtArgs> | null
    /**
     * Filter, which IButtonData to fetch.
     */
    where?: IButtonDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IButtonData to fetch.
     */
    orderBy?: IButtonDataOrderByWithRelationInput | IButtonDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IButtonData.
     */
    cursor?: IButtonDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IButtonData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IButtonData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IButtonData.
     */
    distinct?: IButtonDataScalarFieldEnum | IButtonDataScalarFieldEnum[]
  }

  /**
   * IButtonData findMany
   */
  export type IButtonDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IButtonData
     */
    select?: IButtonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IButtonData
     */
    omit?: IButtonDataOmit<ExtArgs> | null
    /**
     * Filter, which IButtonData to fetch.
     */
    where?: IButtonDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IButtonData to fetch.
     */
    orderBy?: IButtonDataOrderByWithRelationInput | IButtonDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IButtonData.
     */
    cursor?: IButtonDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IButtonData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IButtonData.
     */
    skip?: number
    distinct?: IButtonDataScalarFieldEnum | IButtonDataScalarFieldEnum[]
  }

  /**
   * IButtonData create
   */
  export type IButtonDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IButtonData
     */
    select?: IButtonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IButtonData
     */
    omit?: IButtonDataOmit<ExtArgs> | null
    /**
     * The data needed to create a IButtonData.
     */
    data: XOR<IButtonDataCreateInput, IButtonDataUncheckedCreateInput>
  }

  /**
   * IButtonData createMany
   */
  export type IButtonDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IButtonData.
     */
    data: IButtonDataCreateManyInput | IButtonDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IButtonData createManyAndReturn
   */
  export type IButtonDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IButtonData
     */
    select?: IButtonDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IButtonData
     */
    omit?: IButtonDataOmit<ExtArgs> | null
    /**
     * The data used to create many IButtonData.
     */
    data: IButtonDataCreateManyInput | IButtonDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IButtonData update
   */
  export type IButtonDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IButtonData
     */
    select?: IButtonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IButtonData
     */
    omit?: IButtonDataOmit<ExtArgs> | null
    /**
     * The data needed to update a IButtonData.
     */
    data: XOR<IButtonDataUpdateInput, IButtonDataUncheckedUpdateInput>
    /**
     * Choose, which IButtonData to update.
     */
    where: IButtonDataWhereUniqueInput
  }

  /**
   * IButtonData updateMany
   */
  export type IButtonDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IButtonData.
     */
    data: XOR<IButtonDataUpdateManyMutationInput, IButtonDataUncheckedUpdateManyInput>
    /**
     * Filter which IButtonData to update
     */
    where?: IButtonDataWhereInput
    /**
     * Limit how many IButtonData to update.
     */
    limit?: number
  }

  /**
   * IButtonData updateManyAndReturn
   */
  export type IButtonDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IButtonData
     */
    select?: IButtonDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IButtonData
     */
    omit?: IButtonDataOmit<ExtArgs> | null
    /**
     * The data used to update IButtonData.
     */
    data: XOR<IButtonDataUpdateManyMutationInput, IButtonDataUncheckedUpdateManyInput>
    /**
     * Filter which IButtonData to update
     */
    where?: IButtonDataWhereInput
    /**
     * Limit how many IButtonData to update.
     */
    limit?: number
  }

  /**
   * IButtonData upsert
   */
  export type IButtonDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IButtonData
     */
    select?: IButtonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IButtonData
     */
    omit?: IButtonDataOmit<ExtArgs> | null
    /**
     * The filter to search for the IButtonData to update in case it exists.
     */
    where: IButtonDataWhereUniqueInput
    /**
     * In case the IButtonData found by the `where` argument doesn't exist, create a new IButtonData with this data.
     */
    create: XOR<IButtonDataCreateInput, IButtonDataUncheckedCreateInput>
    /**
     * In case the IButtonData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IButtonDataUpdateInput, IButtonDataUncheckedUpdateInput>
  }

  /**
   * IButtonData delete
   */
  export type IButtonDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IButtonData
     */
    select?: IButtonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IButtonData
     */
    omit?: IButtonDataOmit<ExtArgs> | null
    /**
     * Filter which IButtonData to delete.
     */
    where: IButtonDataWhereUniqueInput
  }

  /**
   * IButtonData deleteMany
   */
  export type IButtonDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IButtonData to delete
     */
    where?: IButtonDataWhereInput
    /**
     * Limit how many IButtonData to delete.
     */
    limit?: number
  }

  /**
   * IButtonData without action
   */
  export type IButtonDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IButtonData
     */
    select?: IButtonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IButtonData
     */
    omit?: IButtonDataOmit<ExtArgs> | null
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


  export const StatusScalarFieldEnum: {
    id: 'id',
    status: 'status',
    database: 'database',
    timestamp: 'timestamp',
    error: 'error',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    redis: 'redis'
  };

  export type StatusScalarFieldEnum = (typeof StatusScalarFieldEnum)[keyof typeof StatusScalarFieldEnum]


  export const GpsDataScalarFieldEnum: {
    id: 'id',
    rawData: 'rawData',
    timestamp: 'timestamp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    from: 'from',
    mainCommand: 'mainCommand',
    parsedData: 'parsedData',
    packetInfo: 'packetInfo'
  };

  export type GpsDataScalarFieldEnum = (typeof GpsDataScalarFieldEnum)[keyof typeof GpsDataScalarFieldEnum]


  export const PositionDataScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    latitude: 'latitude',
    longitude: 'longitude',
    speed: 'speed',
    angle: 'angle',
    gpsStatus: 'gpsStatus',
    digitalInputs: 'digitalInputs',
    ignition: 'ignition',
    oilResistance: 'oilResistance',
    voltage: 'voltage',
    mileage: 'mileage',
    temperature: 'temperature',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    mainCommand: 'mainCommand',
    packetLength: 'packetLength',
    pseudoIP: 'pseudoIP',
    rawData: 'rawData',
    timestamp: 'timestamp'
  };

  export type PositionDataScalarFieldEnum = (typeof PositionDataScalarFieldEnum)[keyof typeof PositionDataScalarFieldEnum]


  export const AlarmDataScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    alarms: 'alarms',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    mainCommand: 'mainCommand',
    packetLength: 'packetLength',
    pseudoIP: 'pseudoIP',
    rawData: 'rawData',
    centerEnabledAlarm: 'centerEnabledAlarm',
    crossBorder: 'crossBorder',
    emergency: 'emergency',
    enterBorder: 'enterBorder',
    illegalDoorOpen: 'illegalDoorOpen',
    illegalStart: 'illegalStart',
    oilChange: 'oilChange',
    overSpeed: 'overSpeed',
    overVoltage: 'overVoltage',
    overload: 'overload',
    overtimeDriving: 'overtimeDriving',
    parking: 'parking',
    powerFailure: 'powerFailure',
    underVoltage: 'underVoltage',
    vibration: 'vibration',
    timestamp: 'timestamp'
  };

  export type AlarmDataScalarFieldEnum = (typeof AlarmDataScalarFieldEnum)[keyof typeof AlarmDataScalarFieldEnum]


  export const HeartbeatDataScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    calibrationValue: 'calibrationValue',
    mainOrderReply: 'mainOrderReply',
    slaveOrderReply: 'slaveOrderReply',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    mainCommand: 'mainCommand',
    packetLength: 'packetLength',
    pseudoIP: 'pseudoIP',
    rawData: 'rawData',
    timestamp: 'timestamp'
  };

  export type HeartbeatDataScalarFieldEnum = (typeof HeartbeatDataScalarFieldEnum)[keyof typeof HeartbeatDataScalarFieldEnum]


  export const TrackerStatusScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    samplingTime: 'samplingTime',
    alarmStatus: 'alarmStatus',
    located: 'located',
    samplingType: 'samplingType',
    samplingValue: 'samplingValue',
    sendingType: 'sendingType',
    carStopSetting: 'carStopSetting',
    overspeedSetting: 'overspeedSetting',
    phoneLimit: 'phoneLimit',
    areaNodeLimit: 'areaNodeLimit',
    safeSetting: 'safeSetting',
    longTimeDriving: 'longTimeDriving',
    samplingValueAccOff: 'samplingValueAccOff',
    emergencyAlarmSwitch: 'emergencyAlarmSwitch',
    photographRelated: 'photographRelated',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    mainCommand: 'mainCommand',
    packetLength: 'packetLength',
    pseudoIP: 'pseudoIP',
    rawData: 'rawData',
    timestamp: 'timestamp'
  };

  export type TrackerStatusScalarFieldEnum = (typeof TrackerStatusScalarFieldEnum)[keyof typeof TrackerStatusScalarFieldEnum]


  export const IButtonDataScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    subCommand: 'subCommand',
    message: 'message',
    driverName: 'driverName',
    driverId: 'driverId',
    swipeData: 'swipeData',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    mainCommand: 'mainCommand',
    packetLength: 'packetLength',
    pseudoIP: 'pseudoIP',
    rawData: 'rawData',
    timestamp: 'timestamp'
  };

  export type IButtonDataScalarFieldEnum = (typeof IButtonDataScalarFieldEnum)[keyof typeof IButtonDataScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type StatusWhereInput = {
    AND?: StatusWhereInput | StatusWhereInput[]
    OR?: StatusWhereInput[]
    NOT?: StatusWhereInput | StatusWhereInput[]
    id?: IntFilter<"Status"> | number
    status?: StringFilter<"Status"> | string
    database?: StringFilter<"Status"> | string
    timestamp?: DateTimeFilter<"Status"> | Date | string
    error?: StringNullableFilter<"Status"> | string | null
    createdAt?: DateTimeFilter<"Status"> | Date | string
    updatedAt?: DateTimeFilter<"Status"> | Date | string
    redis?: StringFilter<"Status"> | string
  }

  export type StatusOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    database?: SortOrder
    timestamp?: SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    redis?: SortOrder
  }

  export type StatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StatusWhereInput | StatusWhereInput[]
    OR?: StatusWhereInput[]
    NOT?: StatusWhereInput | StatusWhereInput[]
    status?: StringFilter<"Status"> | string
    database?: StringFilter<"Status"> | string
    timestamp?: DateTimeFilter<"Status"> | Date | string
    error?: StringNullableFilter<"Status"> | string | null
    createdAt?: DateTimeFilter<"Status"> | Date | string
    updatedAt?: DateTimeFilter<"Status"> | Date | string
    redis?: StringFilter<"Status"> | string
  }, "id">

  export type StatusOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    database?: SortOrder
    timestamp?: SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    redis?: SortOrder
    _count?: StatusCountOrderByAggregateInput
    _avg?: StatusAvgOrderByAggregateInput
    _max?: StatusMaxOrderByAggregateInput
    _min?: StatusMinOrderByAggregateInput
    _sum?: StatusSumOrderByAggregateInput
  }

  export type StatusScalarWhereWithAggregatesInput = {
    AND?: StatusScalarWhereWithAggregatesInput | StatusScalarWhereWithAggregatesInput[]
    OR?: StatusScalarWhereWithAggregatesInput[]
    NOT?: StatusScalarWhereWithAggregatesInput | StatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Status"> | number
    status?: StringWithAggregatesFilter<"Status"> | string
    database?: StringWithAggregatesFilter<"Status"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Status"> | Date | string
    error?: StringNullableWithAggregatesFilter<"Status"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Status"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Status"> | Date | string
    redis?: StringWithAggregatesFilter<"Status"> | string
  }

  export type GpsDataWhereInput = {
    AND?: GpsDataWhereInput | GpsDataWhereInput[]
    OR?: GpsDataWhereInput[]
    NOT?: GpsDataWhereInput | GpsDataWhereInput[]
    id?: IntFilter<"GpsData"> | number
    rawData?: StringFilter<"GpsData"> | string
    timestamp?: DateTimeFilter<"GpsData"> | Date | string
    createdAt?: DateTimeFilter<"GpsData"> | Date | string
    updatedAt?: DateTimeFilter<"GpsData"> | Date | string
    from?: StringFilter<"GpsData"> | string
    mainCommand?: StringNullableFilter<"GpsData"> | string | null
    parsedData?: StringNullableFilter<"GpsData"> | string | null
    packetInfo?: StringNullableFilter<"GpsData"> | string | null
  }

  export type GpsDataOrderByWithRelationInput = {
    id?: SortOrder
    rawData?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    from?: SortOrder
    mainCommand?: SortOrderInput | SortOrder
    parsedData?: SortOrderInput | SortOrder
    packetInfo?: SortOrderInput | SortOrder
  }

  export type GpsDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GpsDataWhereInput | GpsDataWhereInput[]
    OR?: GpsDataWhereInput[]
    NOT?: GpsDataWhereInput | GpsDataWhereInput[]
    rawData?: StringFilter<"GpsData"> | string
    timestamp?: DateTimeFilter<"GpsData"> | Date | string
    createdAt?: DateTimeFilter<"GpsData"> | Date | string
    updatedAt?: DateTimeFilter<"GpsData"> | Date | string
    from?: StringFilter<"GpsData"> | string
    mainCommand?: StringNullableFilter<"GpsData"> | string | null
    parsedData?: StringNullableFilter<"GpsData"> | string | null
    packetInfo?: StringNullableFilter<"GpsData"> | string | null
  }, "id">

  export type GpsDataOrderByWithAggregationInput = {
    id?: SortOrder
    rawData?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    from?: SortOrder
    mainCommand?: SortOrderInput | SortOrder
    parsedData?: SortOrderInput | SortOrder
    packetInfo?: SortOrderInput | SortOrder
    _count?: GpsDataCountOrderByAggregateInput
    _avg?: GpsDataAvgOrderByAggregateInput
    _max?: GpsDataMaxOrderByAggregateInput
    _min?: GpsDataMinOrderByAggregateInput
    _sum?: GpsDataSumOrderByAggregateInput
  }

  export type GpsDataScalarWhereWithAggregatesInput = {
    AND?: GpsDataScalarWhereWithAggregatesInput | GpsDataScalarWhereWithAggregatesInput[]
    OR?: GpsDataScalarWhereWithAggregatesInput[]
    NOT?: GpsDataScalarWhereWithAggregatesInput | GpsDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GpsData"> | number
    rawData?: StringWithAggregatesFilter<"GpsData"> | string
    timestamp?: DateTimeWithAggregatesFilter<"GpsData"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"GpsData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GpsData"> | Date | string
    from?: StringWithAggregatesFilter<"GpsData"> | string
    mainCommand?: StringNullableWithAggregatesFilter<"GpsData"> | string | null
    parsedData?: StringNullableWithAggregatesFilter<"GpsData"> | string | null
    packetInfo?: StringNullableWithAggregatesFilter<"GpsData"> | string | null
  }

  export type PositionDataWhereInput = {
    AND?: PositionDataWhereInput | PositionDataWhereInput[]
    OR?: PositionDataWhereInput[]
    NOT?: PositionDataWhereInput | PositionDataWhereInput[]
    id?: IntFilter<"PositionData"> | number
    clientId?: StringFilter<"PositionData"> | string
    latitude?: FloatFilter<"PositionData"> | number
    longitude?: FloatFilter<"PositionData"> | number
    speed?: FloatNullableFilter<"PositionData"> | number | null
    angle?: FloatNullableFilter<"PositionData"> | number | null
    gpsStatus?: StringNullableFilter<"PositionData"> | string | null
    digitalInputs?: StringNullableFilter<"PositionData"> | string | null
    ignition?: BoolNullableFilter<"PositionData"> | boolean | null
    oilResistance?: IntNullableFilter<"PositionData"> | number | null
    voltage?: FloatNullableFilter<"PositionData"> | number | null
    mileage?: IntNullableFilter<"PositionData"> | number | null
    temperature?: FloatNullableFilter<"PositionData"> | number | null
    createdAt?: DateTimeFilter<"PositionData"> | Date | string
    updatedAt?: DateTimeFilter<"PositionData"> | Date | string
    mainCommand?: StringNullableFilter<"PositionData"> | string | null
    packetLength?: IntNullableFilter<"PositionData"> | number | null
    pseudoIP?: StringNullableFilter<"PositionData"> | string | null
    rawData?: StringNullableFilter<"PositionData"> | string | null
    timestamp?: DateTimeFilter<"PositionData"> | Date | string
  }

  export type PositionDataOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speed?: SortOrderInput | SortOrder
    angle?: SortOrderInput | SortOrder
    gpsStatus?: SortOrderInput | SortOrder
    digitalInputs?: SortOrderInput | SortOrder
    ignition?: SortOrderInput | SortOrder
    oilResistance?: SortOrderInput | SortOrder
    voltage?: SortOrderInput | SortOrder
    mileage?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrderInput | SortOrder
    packetLength?: SortOrderInput | SortOrder
    pseudoIP?: SortOrderInput | SortOrder
    rawData?: SortOrderInput | SortOrder
    timestamp?: SortOrder
  }

  export type PositionDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PositionDataWhereInput | PositionDataWhereInput[]
    OR?: PositionDataWhereInput[]
    NOT?: PositionDataWhereInput | PositionDataWhereInput[]
    clientId?: StringFilter<"PositionData"> | string
    latitude?: FloatFilter<"PositionData"> | number
    longitude?: FloatFilter<"PositionData"> | number
    speed?: FloatNullableFilter<"PositionData"> | number | null
    angle?: FloatNullableFilter<"PositionData"> | number | null
    gpsStatus?: StringNullableFilter<"PositionData"> | string | null
    digitalInputs?: StringNullableFilter<"PositionData"> | string | null
    ignition?: BoolNullableFilter<"PositionData"> | boolean | null
    oilResistance?: IntNullableFilter<"PositionData"> | number | null
    voltage?: FloatNullableFilter<"PositionData"> | number | null
    mileage?: IntNullableFilter<"PositionData"> | number | null
    temperature?: FloatNullableFilter<"PositionData"> | number | null
    createdAt?: DateTimeFilter<"PositionData"> | Date | string
    updatedAt?: DateTimeFilter<"PositionData"> | Date | string
    mainCommand?: StringNullableFilter<"PositionData"> | string | null
    packetLength?: IntNullableFilter<"PositionData"> | number | null
    pseudoIP?: StringNullableFilter<"PositionData"> | string | null
    rawData?: StringNullableFilter<"PositionData"> | string | null
    timestamp?: DateTimeFilter<"PositionData"> | Date | string
  }, "id">

  export type PositionDataOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speed?: SortOrderInput | SortOrder
    angle?: SortOrderInput | SortOrder
    gpsStatus?: SortOrderInput | SortOrder
    digitalInputs?: SortOrderInput | SortOrder
    ignition?: SortOrderInput | SortOrder
    oilResistance?: SortOrderInput | SortOrder
    voltage?: SortOrderInput | SortOrder
    mileage?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrderInput | SortOrder
    packetLength?: SortOrderInput | SortOrder
    pseudoIP?: SortOrderInput | SortOrder
    rawData?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: PositionDataCountOrderByAggregateInput
    _avg?: PositionDataAvgOrderByAggregateInput
    _max?: PositionDataMaxOrderByAggregateInput
    _min?: PositionDataMinOrderByAggregateInput
    _sum?: PositionDataSumOrderByAggregateInput
  }

  export type PositionDataScalarWhereWithAggregatesInput = {
    AND?: PositionDataScalarWhereWithAggregatesInput | PositionDataScalarWhereWithAggregatesInput[]
    OR?: PositionDataScalarWhereWithAggregatesInput[]
    NOT?: PositionDataScalarWhereWithAggregatesInput | PositionDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PositionData"> | number
    clientId?: StringWithAggregatesFilter<"PositionData"> | string
    latitude?: FloatWithAggregatesFilter<"PositionData"> | number
    longitude?: FloatWithAggregatesFilter<"PositionData"> | number
    speed?: FloatNullableWithAggregatesFilter<"PositionData"> | number | null
    angle?: FloatNullableWithAggregatesFilter<"PositionData"> | number | null
    gpsStatus?: StringNullableWithAggregatesFilter<"PositionData"> | string | null
    digitalInputs?: StringNullableWithAggregatesFilter<"PositionData"> | string | null
    ignition?: BoolNullableWithAggregatesFilter<"PositionData"> | boolean | null
    oilResistance?: IntNullableWithAggregatesFilter<"PositionData"> | number | null
    voltage?: FloatNullableWithAggregatesFilter<"PositionData"> | number | null
    mileage?: IntNullableWithAggregatesFilter<"PositionData"> | number | null
    temperature?: FloatNullableWithAggregatesFilter<"PositionData"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"PositionData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PositionData"> | Date | string
    mainCommand?: StringNullableWithAggregatesFilter<"PositionData"> | string | null
    packetLength?: IntNullableWithAggregatesFilter<"PositionData"> | number | null
    pseudoIP?: StringNullableWithAggregatesFilter<"PositionData"> | string | null
    rawData?: StringNullableWithAggregatesFilter<"PositionData"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"PositionData"> | Date | string
  }

  export type AlarmDataWhereInput = {
    AND?: AlarmDataWhereInput | AlarmDataWhereInput[]
    OR?: AlarmDataWhereInput[]
    NOT?: AlarmDataWhereInput | AlarmDataWhereInput[]
    id?: IntFilter<"AlarmData"> | number
    clientId?: StringFilter<"AlarmData"> | string
    alarms?: StringFilter<"AlarmData"> | string
    createdAt?: DateTimeFilter<"AlarmData"> | Date | string
    updatedAt?: DateTimeFilter<"AlarmData"> | Date | string
    mainCommand?: StringNullableFilter<"AlarmData"> | string | null
    packetLength?: IntNullableFilter<"AlarmData"> | number | null
    pseudoIP?: StringNullableFilter<"AlarmData"> | string | null
    rawData?: StringNullableFilter<"AlarmData"> | string | null
    centerEnabledAlarm?: BoolNullableFilter<"AlarmData"> | boolean | null
    crossBorder?: BoolNullableFilter<"AlarmData"> | boolean | null
    emergency?: BoolNullableFilter<"AlarmData"> | boolean | null
    enterBorder?: BoolNullableFilter<"AlarmData"> | boolean | null
    illegalDoorOpen?: BoolNullableFilter<"AlarmData"> | boolean | null
    illegalStart?: BoolNullableFilter<"AlarmData"> | boolean | null
    oilChange?: BoolNullableFilter<"AlarmData"> | boolean | null
    overSpeed?: BoolNullableFilter<"AlarmData"> | boolean | null
    overVoltage?: BoolNullableFilter<"AlarmData"> | boolean | null
    overload?: BoolNullableFilter<"AlarmData"> | boolean | null
    overtimeDriving?: BoolNullableFilter<"AlarmData"> | boolean | null
    parking?: BoolNullableFilter<"AlarmData"> | boolean | null
    powerFailure?: BoolNullableFilter<"AlarmData"> | boolean | null
    underVoltage?: BoolNullableFilter<"AlarmData"> | boolean | null
    vibration?: BoolNullableFilter<"AlarmData"> | boolean | null
    timestamp?: DateTimeFilter<"AlarmData"> | Date | string
  }

  export type AlarmDataOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    alarms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrderInput | SortOrder
    packetLength?: SortOrderInput | SortOrder
    pseudoIP?: SortOrderInput | SortOrder
    rawData?: SortOrderInput | SortOrder
    centerEnabledAlarm?: SortOrderInput | SortOrder
    crossBorder?: SortOrderInput | SortOrder
    emergency?: SortOrderInput | SortOrder
    enterBorder?: SortOrderInput | SortOrder
    illegalDoorOpen?: SortOrderInput | SortOrder
    illegalStart?: SortOrderInput | SortOrder
    oilChange?: SortOrderInput | SortOrder
    overSpeed?: SortOrderInput | SortOrder
    overVoltage?: SortOrderInput | SortOrder
    overload?: SortOrderInput | SortOrder
    overtimeDriving?: SortOrderInput | SortOrder
    parking?: SortOrderInput | SortOrder
    powerFailure?: SortOrderInput | SortOrder
    underVoltage?: SortOrderInput | SortOrder
    vibration?: SortOrderInput | SortOrder
    timestamp?: SortOrder
  }

  export type AlarmDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlarmDataWhereInput | AlarmDataWhereInput[]
    OR?: AlarmDataWhereInput[]
    NOT?: AlarmDataWhereInput | AlarmDataWhereInput[]
    clientId?: StringFilter<"AlarmData"> | string
    alarms?: StringFilter<"AlarmData"> | string
    createdAt?: DateTimeFilter<"AlarmData"> | Date | string
    updatedAt?: DateTimeFilter<"AlarmData"> | Date | string
    mainCommand?: StringNullableFilter<"AlarmData"> | string | null
    packetLength?: IntNullableFilter<"AlarmData"> | number | null
    pseudoIP?: StringNullableFilter<"AlarmData"> | string | null
    rawData?: StringNullableFilter<"AlarmData"> | string | null
    centerEnabledAlarm?: BoolNullableFilter<"AlarmData"> | boolean | null
    crossBorder?: BoolNullableFilter<"AlarmData"> | boolean | null
    emergency?: BoolNullableFilter<"AlarmData"> | boolean | null
    enterBorder?: BoolNullableFilter<"AlarmData"> | boolean | null
    illegalDoorOpen?: BoolNullableFilter<"AlarmData"> | boolean | null
    illegalStart?: BoolNullableFilter<"AlarmData"> | boolean | null
    oilChange?: BoolNullableFilter<"AlarmData"> | boolean | null
    overSpeed?: BoolNullableFilter<"AlarmData"> | boolean | null
    overVoltage?: BoolNullableFilter<"AlarmData"> | boolean | null
    overload?: BoolNullableFilter<"AlarmData"> | boolean | null
    overtimeDriving?: BoolNullableFilter<"AlarmData"> | boolean | null
    parking?: BoolNullableFilter<"AlarmData"> | boolean | null
    powerFailure?: BoolNullableFilter<"AlarmData"> | boolean | null
    underVoltage?: BoolNullableFilter<"AlarmData"> | boolean | null
    vibration?: BoolNullableFilter<"AlarmData"> | boolean | null
    timestamp?: DateTimeFilter<"AlarmData"> | Date | string
  }, "id">

  export type AlarmDataOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    alarms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrderInput | SortOrder
    packetLength?: SortOrderInput | SortOrder
    pseudoIP?: SortOrderInput | SortOrder
    rawData?: SortOrderInput | SortOrder
    centerEnabledAlarm?: SortOrderInput | SortOrder
    crossBorder?: SortOrderInput | SortOrder
    emergency?: SortOrderInput | SortOrder
    enterBorder?: SortOrderInput | SortOrder
    illegalDoorOpen?: SortOrderInput | SortOrder
    illegalStart?: SortOrderInput | SortOrder
    oilChange?: SortOrderInput | SortOrder
    overSpeed?: SortOrderInput | SortOrder
    overVoltage?: SortOrderInput | SortOrder
    overload?: SortOrderInput | SortOrder
    overtimeDriving?: SortOrderInput | SortOrder
    parking?: SortOrderInput | SortOrder
    powerFailure?: SortOrderInput | SortOrder
    underVoltage?: SortOrderInput | SortOrder
    vibration?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: AlarmDataCountOrderByAggregateInput
    _avg?: AlarmDataAvgOrderByAggregateInput
    _max?: AlarmDataMaxOrderByAggregateInput
    _min?: AlarmDataMinOrderByAggregateInput
    _sum?: AlarmDataSumOrderByAggregateInput
  }

  export type AlarmDataScalarWhereWithAggregatesInput = {
    AND?: AlarmDataScalarWhereWithAggregatesInput | AlarmDataScalarWhereWithAggregatesInput[]
    OR?: AlarmDataScalarWhereWithAggregatesInput[]
    NOT?: AlarmDataScalarWhereWithAggregatesInput | AlarmDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AlarmData"> | number
    clientId?: StringWithAggregatesFilter<"AlarmData"> | string
    alarms?: StringWithAggregatesFilter<"AlarmData"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AlarmData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AlarmData"> | Date | string
    mainCommand?: StringNullableWithAggregatesFilter<"AlarmData"> | string | null
    packetLength?: IntNullableWithAggregatesFilter<"AlarmData"> | number | null
    pseudoIP?: StringNullableWithAggregatesFilter<"AlarmData"> | string | null
    rawData?: StringNullableWithAggregatesFilter<"AlarmData"> | string | null
    centerEnabledAlarm?: BoolNullableWithAggregatesFilter<"AlarmData"> | boolean | null
    crossBorder?: BoolNullableWithAggregatesFilter<"AlarmData"> | boolean | null
    emergency?: BoolNullableWithAggregatesFilter<"AlarmData"> | boolean | null
    enterBorder?: BoolNullableWithAggregatesFilter<"AlarmData"> | boolean | null
    illegalDoorOpen?: BoolNullableWithAggregatesFilter<"AlarmData"> | boolean | null
    illegalStart?: BoolNullableWithAggregatesFilter<"AlarmData"> | boolean | null
    oilChange?: BoolNullableWithAggregatesFilter<"AlarmData"> | boolean | null
    overSpeed?: BoolNullableWithAggregatesFilter<"AlarmData"> | boolean | null
    overVoltage?: BoolNullableWithAggregatesFilter<"AlarmData"> | boolean | null
    overload?: BoolNullableWithAggregatesFilter<"AlarmData"> | boolean | null
    overtimeDriving?: BoolNullableWithAggregatesFilter<"AlarmData"> | boolean | null
    parking?: BoolNullableWithAggregatesFilter<"AlarmData"> | boolean | null
    powerFailure?: BoolNullableWithAggregatesFilter<"AlarmData"> | boolean | null
    underVoltage?: BoolNullableWithAggregatesFilter<"AlarmData"> | boolean | null
    vibration?: BoolNullableWithAggregatesFilter<"AlarmData"> | boolean | null
    timestamp?: DateTimeWithAggregatesFilter<"AlarmData"> | Date | string
  }

  export type HeartbeatDataWhereInput = {
    AND?: HeartbeatDataWhereInput | HeartbeatDataWhereInput[]
    OR?: HeartbeatDataWhereInput[]
    NOT?: HeartbeatDataWhereInput | HeartbeatDataWhereInput[]
    id?: IntFilter<"HeartbeatData"> | number
    clientId?: StringFilter<"HeartbeatData"> | string
    calibrationValue?: IntNullableFilter<"HeartbeatData"> | number | null
    mainOrderReply?: IntNullableFilter<"HeartbeatData"> | number | null
    slaveOrderReply?: IntNullableFilter<"HeartbeatData"> | number | null
    createdAt?: DateTimeFilter<"HeartbeatData"> | Date | string
    updatedAt?: DateTimeFilter<"HeartbeatData"> | Date | string
    mainCommand?: StringNullableFilter<"HeartbeatData"> | string | null
    packetLength?: IntNullableFilter<"HeartbeatData"> | number | null
    pseudoIP?: StringNullableFilter<"HeartbeatData"> | string | null
    rawData?: StringNullableFilter<"HeartbeatData"> | string | null
    timestamp?: DateTimeFilter<"HeartbeatData"> | Date | string
  }

  export type HeartbeatDataOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    calibrationValue?: SortOrderInput | SortOrder
    mainOrderReply?: SortOrderInput | SortOrder
    slaveOrderReply?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrderInput | SortOrder
    packetLength?: SortOrderInput | SortOrder
    pseudoIP?: SortOrderInput | SortOrder
    rawData?: SortOrderInput | SortOrder
    timestamp?: SortOrder
  }

  export type HeartbeatDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HeartbeatDataWhereInput | HeartbeatDataWhereInput[]
    OR?: HeartbeatDataWhereInput[]
    NOT?: HeartbeatDataWhereInput | HeartbeatDataWhereInput[]
    clientId?: StringFilter<"HeartbeatData"> | string
    calibrationValue?: IntNullableFilter<"HeartbeatData"> | number | null
    mainOrderReply?: IntNullableFilter<"HeartbeatData"> | number | null
    slaveOrderReply?: IntNullableFilter<"HeartbeatData"> | number | null
    createdAt?: DateTimeFilter<"HeartbeatData"> | Date | string
    updatedAt?: DateTimeFilter<"HeartbeatData"> | Date | string
    mainCommand?: StringNullableFilter<"HeartbeatData"> | string | null
    packetLength?: IntNullableFilter<"HeartbeatData"> | number | null
    pseudoIP?: StringNullableFilter<"HeartbeatData"> | string | null
    rawData?: StringNullableFilter<"HeartbeatData"> | string | null
    timestamp?: DateTimeFilter<"HeartbeatData"> | Date | string
  }, "id">

  export type HeartbeatDataOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    calibrationValue?: SortOrderInput | SortOrder
    mainOrderReply?: SortOrderInput | SortOrder
    slaveOrderReply?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrderInput | SortOrder
    packetLength?: SortOrderInput | SortOrder
    pseudoIP?: SortOrderInput | SortOrder
    rawData?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: HeartbeatDataCountOrderByAggregateInput
    _avg?: HeartbeatDataAvgOrderByAggregateInput
    _max?: HeartbeatDataMaxOrderByAggregateInput
    _min?: HeartbeatDataMinOrderByAggregateInput
    _sum?: HeartbeatDataSumOrderByAggregateInput
  }

  export type HeartbeatDataScalarWhereWithAggregatesInput = {
    AND?: HeartbeatDataScalarWhereWithAggregatesInput | HeartbeatDataScalarWhereWithAggregatesInput[]
    OR?: HeartbeatDataScalarWhereWithAggregatesInput[]
    NOT?: HeartbeatDataScalarWhereWithAggregatesInput | HeartbeatDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HeartbeatData"> | number
    clientId?: StringWithAggregatesFilter<"HeartbeatData"> | string
    calibrationValue?: IntNullableWithAggregatesFilter<"HeartbeatData"> | number | null
    mainOrderReply?: IntNullableWithAggregatesFilter<"HeartbeatData"> | number | null
    slaveOrderReply?: IntNullableWithAggregatesFilter<"HeartbeatData"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"HeartbeatData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HeartbeatData"> | Date | string
    mainCommand?: StringNullableWithAggregatesFilter<"HeartbeatData"> | string | null
    packetLength?: IntNullableWithAggregatesFilter<"HeartbeatData"> | number | null
    pseudoIP?: StringNullableWithAggregatesFilter<"HeartbeatData"> | string | null
    rawData?: StringNullableWithAggregatesFilter<"HeartbeatData"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"HeartbeatData"> | Date | string
  }

  export type TrackerStatusWhereInput = {
    AND?: TrackerStatusWhereInput | TrackerStatusWhereInput[]
    OR?: TrackerStatusWhereInput[]
    NOT?: TrackerStatusWhereInput | TrackerStatusWhereInput[]
    id?: IntFilter<"TrackerStatus"> | number
    clientId?: StringFilter<"TrackerStatus"> | string
    samplingTime?: StringFilter<"TrackerStatus"> | string
    alarmStatus?: IntNullableFilter<"TrackerStatus"> | number | null
    located?: BoolNullableFilter<"TrackerStatus"> | boolean | null
    samplingType?: StringNullableFilter<"TrackerStatus"> | string | null
    samplingValue?: IntNullableFilter<"TrackerStatus"> | number | null
    sendingType?: StringNullableFilter<"TrackerStatus"> | string | null
    carStopSetting?: IntNullableFilter<"TrackerStatus"> | number | null
    overspeedSetting?: IntNullableFilter<"TrackerStatus"> | number | null
    phoneLimit?: BoolNullableFilter<"TrackerStatus"> | boolean | null
    areaNodeLimit?: BoolNullableFilter<"TrackerStatus"> | boolean | null
    safeSetting?: IntNullableFilter<"TrackerStatus"> | number | null
    longTimeDriving?: IntNullableFilter<"TrackerStatus"> | number | null
    samplingValueAccOff?: IntNullableFilter<"TrackerStatus"> | number | null
    emergencyAlarmSwitch?: BoolNullableFilter<"TrackerStatus"> | boolean | null
    photographRelated?: IntNullableFilter<"TrackerStatus"> | number | null
    createdAt?: DateTimeFilter<"TrackerStatus"> | Date | string
    updatedAt?: DateTimeFilter<"TrackerStatus"> | Date | string
    mainCommand?: StringNullableFilter<"TrackerStatus"> | string | null
    packetLength?: IntNullableFilter<"TrackerStatus"> | number | null
    pseudoIP?: StringNullableFilter<"TrackerStatus"> | string | null
    rawData?: StringNullableFilter<"TrackerStatus"> | string | null
    timestamp?: DateTimeFilter<"TrackerStatus"> | Date | string
  }

  export type TrackerStatusOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    samplingTime?: SortOrder
    alarmStatus?: SortOrderInput | SortOrder
    located?: SortOrderInput | SortOrder
    samplingType?: SortOrderInput | SortOrder
    samplingValue?: SortOrderInput | SortOrder
    sendingType?: SortOrderInput | SortOrder
    carStopSetting?: SortOrderInput | SortOrder
    overspeedSetting?: SortOrderInput | SortOrder
    phoneLimit?: SortOrderInput | SortOrder
    areaNodeLimit?: SortOrderInput | SortOrder
    safeSetting?: SortOrderInput | SortOrder
    longTimeDriving?: SortOrderInput | SortOrder
    samplingValueAccOff?: SortOrderInput | SortOrder
    emergencyAlarmSwitch?: SortOrderInput | SortOrder
    photographRelated?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrderInput | SortOrder
    packetLength?: SortOrderInput | SortOrder
    pseudoIP?: SortOrderInput | SortOrder
    rawData?: SortOrderInput | SortOrder
    timestamp?: SortOrder
  }

  export type TrackerStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TrackerStatusWhereInput | TrackerStatusWhereInput[]
    OR?: TrackerStatusWhereInput[]
    NOT?: TrackerStatusWhereInput | TrackerStatusWhereInput[]
    clientId?: StringFilter<"TrackerStatus"> | string
    samplingTime?: StringFilter<"TrackerStatus"> | string
    alarmStatus?: IntNullableFilter<"TrackerStatus"> | number | null
    located?: BoolNullableFilter<"TrackerStatus"> | boolean | null
    samplingType?: StringNullableFilter<"TrackerStatus"> | string | null
    samplingValue?: IntNullableFilter<"TrackerStatus"> | number | null
    sendingType?: StringNullableFilter<"TrackerStatus"> | string | null
    carStopSetting?: IntNullableFilter<"TrackerStatus"> | number | null
    overspeedSetting?: IntNullableFilter<"TrackerStatus"> | number | null
    phoneLimit?: BoolNullableFilter<"TrackerStatus"> | boolean | null
    areaNodeLimit?: BoolNullableFilter<"TrackerStatus"> | boolean | null
    safeSetting?: IntNullableFilter<"TrackerStatus"> | number | null
    longTimeDriving?: IntNullableFilter<"TrackerStatus"> | number | null
    samplingValueAccOff?: IntNullableFilter<"TrackerStatus"> | number | null
    emergencyAlarmSwitch?: BoolNullableFilter<"TrackerStatus"> | boolean | null
    photographRelated?: IntNullableFilter<"TrackerStatus"> | number | null
    createdAt?: DateTimeFilter<"TrackerStatus"> | Date | string
    updatedAt?: DateTimeFilter<"TrackerStatus"> | Date | string
    mainCommand?: StringNullableFilter<"TrackerStatus"> | string | null
    packetLength?: IntNullableFilter<"TrackerStatus"> | number | null
    pseudoIP?: StringNullableFilter<"TrackerStatus"> | string | null
    rawData?: StringNullableFilter<"TrackerStatus"> | string | null
    timestamp?: DateTimeFilter<"TrackerStatus"> | Date | string
  }, "id">

  export type TrackerStatusOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    samplingTime?: SortOrder
    alarmStatus?: SortOrderInput | SortOrder
    located?: SortOrderInput | SortOrder
    samplingType?: SortOrderInput | SortOrder
    samplingValue?: SortOrderInput | SortOrder
    sendingType?: SortOrderInput | SortOrder
    carStopSetting?: SortOrderInput | SortOrder
    overspeedSetting?: SortOrderInput | SortOrder
    phoneLimit?: SortOrderInput | SortOrder
    areaNodeLimit?: SortOrderInput | SortOrder
    safeSetting?: SortOrderInput | SortOrder
    longTimeDriving?: SortOrderInput | SortOrder
    samplingValueAccOff?: SortOrderInput | SortOrder
    emergencyAlarmSwitch?: SortOrderInput | SortOrder
    photographRelated?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrderInput | SortOrder
    packetLength?: SortOrderInput | SortOrder
    pseudoIP?: SortOrderInput | SortOrder
    rawData?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: TrackerStatusCountOrderByAggregateInput
    _avg?: TrackerStatusAvgOrderByAggregateInput
    _max?: TrackerStatusMaxOrderByAggregateInput
    _min?: TrackerStatusMinOrderByAggregateInput
    _sum?: TrackerStatusSumOrderByAggregateInput
  }

  export type TrackerStatusScalarWhereWithAggregatesInput = {
    AND?: TrackerStatusScalarWhereWithAggregatesInput | TrackerStatusScalarWhereWithAggregatesInput[]
    OR?: TrackerStatusScalarWhereWithAggregatesInput[]
    NOT?: TrackerStatusScalarWhereWithAggregatesInput | TrackerStatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TrackerStatus"> | number
    clientId?: StringWithAggregatesFilter<"TrackerStatus"> | string
    samplingTime?: StringWithAggregatesFilter<"TrackerStatus"> | string
    alarmStatus?: IntNullableWithAggregatesFilter<"TrackerStatus"> | number | null
    located?: BoolNullableWithAggregatesFilter<"TrackerStatus"> | boolean | null
    samplingType?: StringNullableWithAggregatesFilter<"TrackerStatus"> | string | null
    samplingValue?: IntNullableWithAggregatesFilter<"TrackerStatus"> | number | null
    sendingType?: StringNullableWithAggregatesFilter<"TrackerStatus"> | string | null
    carStopSetting?: IntNullableWithAggregatesFilter<"TrackerStatus"> | number | null
    overspeedSetting?: IntNullableWithAggregatesFilter<"TrackerStatus"> | number | null
    phoneLimit?: BoolNullableWithAggregatesFilter<"TrackerStatus"> | boolean | null
    areaNodeLimit?: BoolNullableWithAggregatesFilter<"TrackerStatus"> | boolean | null
    safeSetting?: IntNullableWithAggregatesFilter<"TrackerStatus"> | number | null
    longTimeDriving?: IntNullableWithAggregatesFilter<"TrackerStatus"> | number | null
    samplingValueAccOff?: IntNullableWithAggregatesFilter<"TrackerStatus"> | number | null
    emergencyAlarmSwitch?: BoolNullableWithAggregatesFilter<"TrackerStatus"> | boolean | null
    photographRelated?: IntNullableWithAggregatesFilter<"TrackerStatus"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"TrackerStatus"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TrackerStatus"> | Date | string
    mainCommand?: StringNullableWithAggregatesFilter<"TrackerStatus"> | string | null
    packetLength?: IntNullableWithAggregatesFilter<"TrackerStatus"> | number | null
    pseudoIP?: StringNullableWithAggregatesFilter<"TrackerStatus"> | string | null
    rawData?: StringNullableWithAggregatesFilter<"TrackerStatus"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"TrackerStatus"> | Date | string
  }

  export type IButtonDataWhereInput = {
    AND?: IButtonDataWhereInput | IButtonDataWhereInput[]
    OR?: IButtonDataWhereInput[]
    NOT?: IButtonDataWhereInput | IButtonDataWhereInput[]
    id?: IntFilter<"IButtonData"> | number
    clientId?: StringFilter<"IButtonData"> | string
    subCommand?: IntNullableFilter<"IButtonData"> | number | null
    message?: StringNullableFilter<"IButtonData"> | string | null
    driverName?: StringNullableFilter<"IButtonData"> | string | null
    driverId?: StringNullableFilter<"IButtonData"> | string | null
    swipeData?: StringNullableFilter<"IButtonData"> | string | null
    createdAt?: DateTimeFilter<"IButtonData"> | Date | string
    updatedAt?: DateTimeFilter<"IButtonData"> | Date | string
    mainCommand?: StringNullableFilter<"IButtonData"> | string | null
    packetLength?: IntNullableFilter<"IButtonData"> | number | null
    pseudoIP?: StringNullableFilter<"IButtonData"> | string | null
    rawData?: StringNullableFilter<"IButtonData"> | string | null
    timestamp?: DateTimeFilter<"IButtonData"> | Date | string
  }

  export type IButtonDataOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    subCommand?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    driverName?: SortOrderInput | SortOrder
    driverId?: SortOrderInput | SortOrder
    swipeData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrderInput | SortOrder
    packetLength?: SortOrderInput | SortOrder
    pseudoIP?: SortOrderInput | SortOrder
    rawData?: SortOrderInput | SortOrder
    timestamp?: SortOrder
  }

  export type IButtonDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IButtonDataWhereInput | IButtonDataWhereInput[]
    OR?: IButtonDataWhereInput[]
    NOT?: IButtonDataWhereInput | IButtonDataWhereInput[]
    clientId?: StringFilter<"IButtonData"> | string
    subCommand?: IntNullableFilter<"IButtonData"> | number | null
    message?: StringNullableFilter<"IButtonData"> | string | null
    driverName?: StringNullableFilter<"IButtonData"> | string | null
    driverId?: StringNullableFilter<"IButtonData"> | string | null
    swipeData?: StringNullableFilter<"IButtonData"> | string | null
    createdAt?: DateTimeFilter<"IButtonData"> | Date | string
    updatedAt?: DateTimeFilter<"IButtonData"> | Date | string
    mainCommand?: StringNullableFilter<"IButtonData"> | string | null
    packetLength?: IntNullableFilter<"IButtonData"> | number | null
    pseudoIP?: StringNullableFilter<"IButtonData"> | string | null
    rawData?: StringNullableFilter<"IButtonData"> | string | null
    timestamp?: DateTimeFilter<"IButtonData"> | Date | string
  }, "id">

  export type IButtonDataOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    subCommand?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    driverName?: SortOrderInput | SortOrder
    driverId?: SortOrderInput | SortOrder
    swipeData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrderInput | SortOrder
    packetLength?: SortOrderInput | SortOrder
    pseudoIP?: SortOrderInput | SortOrder
    rawData?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: IButtonDataCountOrderByAggregateInput
    _avg?: IButtonDataAvgOrderByAggregateInput
    _max?: IButtonDataMaxOrderByAggregateInput
    _min?: IButtonDataMinOrderByAggregateInput
    _sum?: IButtonDataSumOrderByAggregateInput
  }

  export type IButtonDataScalarWhereWithAggregatesInput = {
    AND?: IButtonDataScalarWhereWithAggregatesInput | IButtonDataScalarWhereWithAggregatesInput[]
    OR?: IButtonDataScalarWhereWithAggregatesInput[]
    NOT?: IButtonDataScalarWhereWithAggregatesInput | IButtonDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IButtonData"> | number
    clientId?: StringWithAggregatesFilter<"IButtonData"> | string
    subCommand?: IntNullableWithAggregatesFilter<"IButtonData"> | number | null
    message?: StringNullableWithAggregatesFilter<"IButtonData"> | string | null
    driverName?: StringNullableWithAggregatesFilter<"IButtonData"> | string | null
    driverId?: StringNullableWithAggregatesFilter<"IButtonData"> | string | null
    swipeData?: StringNullableWithAggregatesFilter<"IButtonData"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IButtonData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IButtonData"> | Date | string
    mainCommand?: StringNullableWithAggregatesFilter<"IButtonData"> | string | null
    packetLength?: IntNullableWithAggregatesFilter<"IButtonData"> | number | null
    pseudoIP?: StringNullableWithAggregatesFilter<"IButtonData"> | string | null
    rawData?: StringNullableWithAggregatesFilter<"IButtonData"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"IButtonData"> | Date | string
  }

  export type StatusCreateInput = {
    status?: string
    database?: string
    timestamp?: Date | string
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    redis?: string
  }

  export type StatusUncheckedCreateInput = {
    id?: number
    status?: string
    database?: string
    timestamp?: Date | string
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    redis?: string
  }

  export type StatusUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redis?: StringFieldUpdateOperationsInput | string
  }

  export type StatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redis?: StringFieldUpdateOperationsInput | string
  }

  export type StatusCreateManyInput = {
    id?: number
    status?: string
    database?: string
    timestamp?: Date | string
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    redis?: string
  }

  export type StatusUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redis?: StringFieldUpdateOperationsInput | string
  }

  export type StatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redis?: StringFieldUpdateOperationsInput | string
  }

  export type GpsDataCreateInput = {
    rawData: string
    timestamp?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    from: string
    mainCommand?: string | null
    parsedData?: string | null
    packetInfo?: string | null
  }

  export type GpsDataUncheckedCreateInput = {
    id?: number
    rawData: string
    timestamp?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    from: string
    mainCommand?: string | null
    parsedData?: string | null
    packetInfo?: string | null
  }

  export type GpsDataUpdateInput = {
    rawData?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    from?: StringFieldUpdateOperationsInput | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    parsedData?: NullableStringFieldUpdateOperationsInput | string | null
    packetInfo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GpsDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rawData?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    from?: StringFieldUpdateOperationsInput | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    parsedData?: NullableStringFieldUpdateOperationsInput | string | null
    packetInfo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GpsDataCreateManyInput = {
    id?: number
    rawData: string
    timestamp?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    from: string
    mainCommand?: string | null
    parsedData?: string | null
    packetInfo?: string | null
  }

  export type GpsDataUpdateManyMutationInput = {
    rawData?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    from?: StringFieldUpdateOperationsInput | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    parsedData?: NullableStringFieldUpdateOperationsInput | string | null
    packetInfo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GpsDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rawData?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    from?: StringFieldUpdateOperationsInput | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    parsedData?: NullableStringFieldUpdateOperationsInput | string | null
    packetInfo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PositionDataCreateInput = {
    clientId: string
    latitude: number
    longitude: number
    speed?: number | null
    angle?: number | null
    gpsStatus?: string | null
    digitalInputs?: string | null
    ignition?: boolean | null
    oilResistance?: number | null
    voltage?: number | null
    mileage?: number | null
    temperature?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mainCommand?: string | null
    packetLength?: number | null
    pseudoIP?: string | null
    rawData?: string | null
    timestamp?: Date | string
  }

  export type PositionDataUncheckedCreateInput = {
    id?: number
    clientId: string
    latitude: number
    longitude: number
    speed?: number | null
    angle?: number | null
    gpsStatus?: string | null
    digitalInputs?: string | null
    ignition?: boolean | null
    oilResistance?: number | null
    voltage?: number | null
    mileage?: number | null
    temperature?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mainCommand?: string | null
    packetLength?: number | null
    pseudoIP?: string | null
    rawData?: string | null
    timestamp?: Date | string
  }

  export type PositionDataUpdateInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    angle?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsStatus?: NullableStringFieldUpdateOperationsInput | string | null
    digitalInputs?: NullableStringFieldUpdateOperationsInput | string | null
    ignition?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oilResistance?: NullableIntFieldUpdateOperationsInput | number | null
    voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    mileage?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    packetLength?: NullableIntFieldUpdateOperationsInput | number | null
    pseudoIP?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    angle?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsStatus?: NullableStringFieldUpdateOperationsInput | string | null
    digitalInputs?: NullableStringFieldUpdateOperationsInput | string | null
    ignition?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oilResistance?: NullableIntFieldUpdateOperationsInput | number | null
    voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    mileage?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    packetLength?: NullableIntFieldUpdateOperationsInput | number | null
    pseudoIP?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionDataCreateManyInput = {
    id?: number
    clientId: string
    latitude: number
    longitude: number
    speed?: number | null
    angle?: number | null
    gpsStatus?: string | null
    digitalInputs?: string | null
    ignition?: boolean | null
    oilResistance?: number | null
    voltage?: number | null
    mileage?: number | null
    temperature?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mainCommand?: string | null
    packetLength?: number | null
    pseudoIP?: string | null
    rawData?: string | null
    timestamp?: Date | string
  }

  export type PositionDataUpdateManyMutationInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    angle?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsStatus?: NullableStringFieldUpdateOperationsInput | string | null
    digitalInputs?: NullableStringFieldUpdateOperationsInput | string | null
    ignition?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oilResistance?: NullableIntFieldUpdateOperationsInput | number | null
    voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    mileage?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    packetLength?: NullableIntFieldUpdateOperationsInput | number | null
    pseudoIP?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    angle?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsStatus?: NullableStringFieldUpdateOperationsInput | string | null
    digitalInputs?: NullableStringFieldUpdateOperationsInput | string | null
    ignition?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oilResistance?: NullableIntFieldUpdateOperationsInput | number | null
    voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    mileage?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    packetLength?: NullableIntFieldUpdateOperationsInput | number | null
    pseudoIP?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmDataCreateInput = {
    clientId: string
    alarms: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mainCommand?: string | null
    packetLength?: number | null
    pseudoIP?: string | null
    rawData?: string | null
    centerEnabledAlarm?: boolean | null
    crossBorder?: boolean | null
    emergency?: boolean | null
    enterBorder?: boolean | null
    illegalDoorOpen?: boolean | null
    illegalStart?: boolean | null
    oilChange?: boolean | null
    overSpeed?: boolean | null
    overVoltage?: boolean | null
    overload?: boolean | null
    overtimeDriving?: boolean | null
    parking?: boolean | null
    powerFailure?: boolean | null
    underVoltage?: boolean | null
    vibration?: boolean | null
    timestamp?: Date | string
  }

  export type AlarmDataUncheckedCreateInput = {
    id?: number
    clientId: string
    alarms: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mainCommand?: string | null
    packetLength?: number | null
    pseudoIP?: string | null
    rawData?: string | null
    centerEnabledAlarm?: boolean | null
    crossBorder?: boolean | null
    emergency?: boolean | null
    enterBorder?: boolean | null
    illegalDoorOpen?: boolean | null
    illegalStart?: boolean | null
    oilChange?: boolean | null
    overSpeed?: boolean | null
    overVoltage?: boolean | null
    overload?: boolean | null
    overtimeDriving?: boolean | null
    parking?: boolean | null
    powerFailure?: boolean | null
    underVoltage?: boolean | null
    vibration?: boolean | null
    timestamp?: Date | string
  }

  export type AlarmDataUpdateInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    alarms?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    packetLength?: NullableIntFieldUpdateOperationsInput | number | null
    pseudoIP?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    centerEnabledAlarm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    crossBorder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emergency?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enterBorder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    illegalDoorOpen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    illegalStart?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oilChange?: NullableBoolFieldUpdateOperationsInput | boolean | null
    overSpeed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    overVoltage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    overload?: NullableBoolFieldUpdateOperationsInput | boolean | null
    overtimeDriving?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    powerFailure?: NullableBoolFieldUpdateOperationsInput | boolean | null
    underVoltage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vibration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    alarms?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    packetLength?: NullableIntFieldUpdateOperationsInput | number | null
    pseudoIP?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    centerEnabledAlarm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    crossBorder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emergency?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enterBorder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    illegalDoorOpen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    illegalStart?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oilChange?: NullableBoolFieldUpdateOperationsInput | boolean | null
    overSpeed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    overVoltage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    overload?: NullableBoolFieldUpdateOperationsInput | boolean | null
    overtimeDriving?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    powerFailure?: NullableBoolFieldUpdateOperationsInput | boolean | null
    underVoltage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vibration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmDataCreateManyInput = {
    id?: number
    clientId: string
    alarms: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mainCommand?: string | null
    packetLength?: number | null
    pseudoIP?: string | null
    rawData?: string | null
    centerEnabledAlarm?: boolean | null
    crossBorder?: boolean | null
    emergency?: boolean | null
    enterBorder?: boolean | null
    illegalDoorOpen?: boolean | null
    illegalStart?: boolean | null
    oilChange?: boolean | null
    overSpeed?: boolean | null
    overVoltage?: boolean | null
    overload?: boolean | null
    overtimeDriving?: boolean | null
    parking?: boolean | null
    powerFailure?: boolean | null
    underVoltage?: boolean | null
    vibration?: boolean | null
    timestamp?: Date | string
  }

  export type AlarmDataUpdateManyMutationInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    alarms?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    packetLength?: NullableIntFieldUpdateOperationsInput | number | null
    pseudoIP?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    centerEnabledAlarm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    crossBorder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emergency?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enterBorder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    illegalDoorOpen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    illegalStart?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oilChange?: NullableBoolFieldUpdateOperationsInput | boolean | null
    overSpeed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    overVoltage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    overload?: NullableBoolFieldUpdateOperationsInput | boolean | null
    overtimeDriving?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    powerFailure?: NullableBoolFieldUpdateOperationsInput | boolean | null
    underVoltage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vibration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    alarms?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    packetLength?: NullableIntFieldUpdateOperationsInput | number | null
    pseudoIP?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    centerEnabledAlarm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    crossBorder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emergency?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enterBorder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    illegalDoorOpen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    illegalStart?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oilChange?: NullableBoolFieldUpdateOperationsInput | boolean | null
    overSpeed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    overVoltage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    overload?: NullableBoolFieldUpdateOperationsInput | boolean | null
    overtimeDriving?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    powerFailure?: NullableBoolFieldUpdateOperationsInput | boolean | null
    underVoltage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vibration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeartbeatDataCreateInput = {
    clientId: string
    calibrationValue?: number | null
    mainOrderReply?: number | null
    slaveOrderReply?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mainCommand?: string | null
    packetLength?: number | null
    pseudoIP?: string | null
    rawData?: string | null
    timestamp?: Date | string
  }

  export type HeartbeatDataUncheckedCreateInput = {
    id?: number
    clientId: string
    calibrationValue?: number | null
    mainOrderReply?: number | null
    slaveOrderReply?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mainCommand?: string | null
    packetLength?: number | null
    pseudoIP?: string | null
    rawData?: string | null
    timestamp?: Date | string
  }

  export type HeartbeatDataUpdateInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    calibrationValue?: NullableIntFieldUpdateOperationsInput | number | null
    mainOrderReply?: NullableIntFieldUpdateOperationsInput | number | null
    slaveOrderReply?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    packetLength?: NullableIntFieldUpdateOperationsInput | number | null
    pseudoIP?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeartbeatDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    calibrationValue?: NullableIntFieldUpdateOperationsInput | number | null
    mainOrderReply?: NullableIntFieldUpdateOperationsInput | number | null
    slaveOrderReply?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    packetLength?: NullableIntFieldUpdateOperationsInput | number | null
    pseudoIP?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeartbeatDataCreateManyInput = {
    id?: number
    clientId: string
    calibrationValue?: number | null
    mainOrderReply?: number | null
    slaveOrderReply?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mainCommand?: string | null
    packetLength?: number | null
    pseudoIP?: string | null
    rawData?: string | null
    timestamp?: Date | string
  }

  export type HeartbeatDataUpdateManyMutationInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    calibrationValue?: NullableIntFieldUpdateOperationsInput | number | null
    mainOrderReply?: NullableIntFieldUpdateOperationsInput | number | null
    slaveOrderReply?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    packetLength?: NullableIntFieldUpdateOperationsInput | number | null
    pseudoIP?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeartbeatDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    calibrationValue?: NullableIntFieldUpdateOperationsInput | number | null
    mainOrderReply?: NullableIntFieldUpdateOperationsInput | number | null
    slaveOrderReply?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    packetLength?: NullableIntFieldUpdateOperationsInput | number | null
    pseudoIP?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackerStatusCreateInput = {
    clientId: string
    samplingTime: string
    alarmStatus?: number | null
    located?: boolean | null
    samplingType?: string | null
    samplingValue?: number | null
    sendingType?: string | null
    carStopSetting?: number | null
    overspeedSetting?: number | null
    phoneLimit?: boolean | null
    areaNodeLimit?: boolean | null
    safeSetting?: number | null
    longTimeDriving?: number | null
    samplingValueAccOff?: number | null
    emergencyAlarmSwitch?: boolean | null
    photographRelated?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mainCommand?: string | null
    packetLength?: number | null
    pseudoIP?: string | null
    rawData?: string | null
    timestamp?: Date | string
  }

  export type TrackerStatusUncheckedCreateInput = {
    id?: number
    clientId: string
    samplingTime: string
    alarmStatus?: number | null
    located?: boolean | null
    samplingType?: string | null
    samplingValue?: number | null
    sendingType?: string | null
    carStopSetting?: number | null
    overspeedSetting?: number | null
    phoneLimit?: boolean | null
    areaNodeLimit?: boolean | null
    safeSetting?: number | null
    longTimeDriving?: number | null
    samplingValueAccOff?: number | null
    emergencyAlarmSwitch?: boolean | null
    photographRelated?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mainCommand?: string | null
    packetLength?: number | null
    pseudoIP?: string | null
    rawData?: string | null
    timestamp?: Date | string
  }

  export type TrackerStatusUpdateInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    samplingTime?: StringFieldUpdateOperationsInput | string
    alarmStatus?: NullableIntFieldUpdateOperationsInput | number | null
    located?: NullableBoolFieldUpdateOperationsInput | boolean | null
    samplingType?: NullableStringFieldUpdateOperationsInput | string | null
    samplingValue?: NullableIntFieldUpdateOperationsInput | number | null
    sendingType?: NullableStringFieldUpdateOperationsInput | string | null
    carStopSetting?: NullableIntFieldUpdateOperationsInput | number | null
    overspeedSetting?: NullableIntFieldUpdateOperationsInput | number | null
    phoneLimit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    areaNodeLimit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    safeSetting?: NullableIntFieldUpdateOperationsInput | number | null
    longTimeDriving?: NullableIntFieldUpdateOperationsInput | number | null
    samplingValueAccOff?: NullableIntFieldUpdateOperationsInput | number | null
    emergencyAlarmSwitch?: NullableBoolFieldUpdateOperationsInput | boolean | null
    photographRelated?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    packetLength?: NullableIntFieldUpdateOperationsInput | number | null
    pseudoIP?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackerStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    samplingTime?: StringFieldUpdateOperationsInput | string
    alarmStatus?: NullableIntFieldUpdateOperationsInput | number | null
    located?: NullableBoolFieldUpdateOperationsInput | boolean | null
    samplingType?: NullableStringFieldUpdateOperationsInput | string | null
    samplingValue?: NullableIntFieldUpdateOperationsInput | number | null
    sendingType?: NullableStringFieldUpdateOperationsInput | string | null
    carStopSetting?: NullableIntFieldUpdateOperationsInput | number | null
    overspeedSetting?: NullableIntFieldUpdateOperationsInput | number | null
    phoneLimit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    areaNodeLimit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    safeSetting?: NullableIntFieldUpdateOperationsInput | number | null
    longTimeDriving?: NullableIntFieldUpdateOperationsInput | number | null
    samplingValueAccOff?: NullableIntFieldUpdateOperationsInput | number | null
    emergencyAlarmSwitch?: NullableBoolFieldUpdateOperationsInput | boolean | null
    photographRelated?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    packetLength?: NullableIntFieldUpdateOperationsInput | number | null
    pseudoIP?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackerStatusCreateManyInput = {
    id?: number
    clientId: string
    samplingTime: string
    alarmStatus?: number | null
    located?: boolean | null
    samplingType?: string | null
    samplingValue?: number | null
    sendingType?: string | null
    carStopSetting?: number | null
    overspeedSetting?: number | null
    phoneLimit?: boolean | null
    areaNodeLimit?: boolean | null
    safeSetting?: number | null
    longTimeDriving?: number | null
    samplingValueAccOff?: number | null
    emergencyAlarmSwitch?: boolean | null
    photographRelated?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mainCommand?: string | null
    packetLength?: number | null
    pseudoIP?: string | null
    rawData?: string | null
    timestamp?: Date | string
  }

  export type TrackerStatusUpdateManyMutationInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    samplingTime?: StringFieldUpdateOperationsInput | string
    alarmStatus?: NullableIntFieldUpdateOperationsInput | number | null
    located?: NullableBoolFieldUpdateOperationsInput | boolean | null
    samplingType?: NullableStringFieldUpdateOperationsInput | string | null
    samplingValue?: NullableIntFieldUpdateOperationsInput | number | null
    sendingType?: NullableStringFieldUpdateOperationsInput | string | null
    carStopSetting?: NullableIntFieldUpdateOperationsInput | number | null
    overspeedSetting?: NullableIntFieldUpdateOperationsInput | number | null
    phoneLimit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    areaNodeLimit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    safeSetting?: NullableIntFieldUpdateOperationsInput | number | null
    longTimeDriving?: NullableIntFieldUpdateOperationsInput | number | null
    samplingValueAccOff?: NullableIntFieldUpdateOperationsInput | number | null
    emergencyAlarmSwitch?: NullableBoolFieldUpdateOperationsInput | boolean | null
    photographRelated?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    packetLength?: NullableIntFieldUpdateOperationsInput | number | null
    pseudoIP?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackerStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    samplingTime?: StringFieldUpdateOperationsInput | string
    alarmStatus?: NullableIntFieldUpdateOperationsInput | number | null
    located?: NullableBoolFieldUpdateOperationsInput | boolean | null
    samplingType?: NullableStringFieldUpdateOperationsInput | string | null
    samplingValue?: NullableIntFieldUpdateOperationsInput | number | null
    sendingType?: NullableStringFieldUpdateOperationsInput | string | null
    carStopSetting?: NullableIntFieldUpdateOperationsInput | number | null
    overspeedSetting?: NullableIntFieldUpdateOperationsInput | number | null
    phoneLimit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    areaNodeLimit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    safeSetting?: NullableIntFieldUpdateOperationsInput | number | null
    longTimeDriving?: NullableIntFieldUpdateOperationsInput | number | null
    samplingValueAccOff?: NullableIntFieldUpdateOperationsInput | number | null
    emergencyAlarmSwitch?: NullableBoolFieldUpdateOperationsInput | boolean | null
    photographRelated?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    packetLength?: NullableIntFieldUpdateOperationsInput | number | null
    pseudoIP?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IButtonDataCreateInput = {
    clientId: string
    subCommand?: number | null
    message?: string | null
    driverName?: string | null
    driverId?: string | null
    swipeData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mainCommand?: string | null
    packetLength?: number | null
    pseudoIP?: string | null
    rawData?: string | null
    timestamp?: Date | string
  }

  export type IButtonDataUncheckedCreateInput = {
    id?: number
    clientId: string
    subCommand?: number | null
    message?: string | null
    driverName?: string | null
    driverId?: string | null
    swipeData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mainCommand?: string | null
    packetLength?: number | null
    pseudoIP?: string | null
    rawData?: string | null
    timestamp?: Date | string
  }

  export type IButtonDataUpdateInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    subCommand?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    swipeData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    packetLength?: NullableIntFieldUpdateOperationsInput | number | null
    pseudoIP?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IButtonDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    subCommand?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    swipeData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    packetLength?: NullableIntFieldUpdateOperationsInput | number | null
    pseudoIP?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IButtonDataCreateManyInput = {
    id?: number
    clientId: string
    subCommand?: number | null
    message?: string | null
    driverName?: string | null
    driverId?: string | null
    swipeData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mainCommand?: string | null
    packetLength?: number | null
    pseudoIP?: string | null
    rawData?: string | null
    timestamp?: Date | string
  }

  export type IButtonDataUpdateManyMutationInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    subCommand?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    swipeData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    packetLength?: NullableIntFieldUpdateOperationsInput | number | null
    pseudoIP?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IButtonDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    subCommand?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    swipeData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCommand?: NullableStringFieldUpdateOperationsInput | string | null
    packetLength?: NullableIntFieldUpdateOperationsInput | number | null
    pseudoIP?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StatusCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    database?: SortOrder
    timestamp?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    redis?: SortOrder
  }

  export type StatusAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StatusMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    database?: SortOrder
    timestamp?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    redis?: SortOrder
  }

  export type StatusMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    database?: SortOrder
    timestamp?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    redis?: SortOrder
  }

  export type StatusSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type GpsDataCountOrderByAggregateInput = {
    id?: SortOrder
    rawData?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    from?: SortOrder
    mainCommand?: SortOrder
    parsedData?: SortOrder
    packetInfo?: SortOrder
  }

  export type GpsDataAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GpsDataMaxOrderByAggregateInput = {
    id?: SortOrder
    rawData?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    from?: SortOrder
    mainCommand?: SortOrder
    parsedData?: SortOrder
    packetInfo?: SortOrder
  }

  export type GpsDataMinOrderByAggregateInput = {
    id?: SortOrder
    rawData?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    from?: SortOrder
    mainCommand?: SortOrder
    parsedData?: SortOrder
    packetInfo?: SortOrder
  }

  export type GpsDataSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PositionDataCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speed?: SortOrder
    angle?: SortOrder
    gpsStatus?: SortOrder
    digitalInputs?: SortOrder
    ignition?: SortOrder
    oilResistance?: SortOrder
    voltage?: SortOrder
    mileage?: SortOrder
    temperature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrder
    packetLength?: SortOrder
    pseudoIP?: SortOrder
    rawData?: SortOrder
    timestamp?: SortOrder
  }

  export type PositionDataAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speed?: SortOrder
    angle?: SortOrder
    oilResistance?: SortOrder
    voltage?: SortOrder
    mileage?: SortOrder
    temperature?: SortOrder
    packetLength?: SortOrder
  }

  export type PositionDataMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speed?: SortOrder
    angle?: SortOrder
    gpsStatus?: SortOrder
    digitalInputs?: SortOrder
    ignition?: SortOrder
    oilResistance?: SortOrder
    voltage?: SortOrder
    mileage?: SortOrder
    temperature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrder
    packetLength?: SortOrder
    pseudoIP?: SortOrder
    rawData?: SortOrder
    timestamp?: SortOrder
  }

  export type PositionDataMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speed?: SortOrder
    angle?: SortOrder
    gpsStatus?: SortOrder
    digitalInputs?: SortOrder
    ignition?: SortOrder
    oilResistance?: SortOrder
    voltage?: SortOrder
    mileage?: SortOrder
    temperature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrder
    packetLength?: SortOrder
    pseudoIP?: SortOrder
    rawData?: SortOrder
    timestamp?: SortOrder
  }

  export type PositionDataSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speed?: SortOrder
    angle?: SortOrder
    oilResistance?: SortOrder
    voltage?: SortOrder
    mileage?: SortOrder
    temperature?: SortOrder
    packetLength?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AlarmDataCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    alarms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrder
    packetLength?: SortOrder
    pseudoIP?: SortOrder
    rawData?: SortOrder
    centerEnabledAlarm?: SortOrder
    crossBorder?: SortOrder
    emergency?: SortOrder
    enterBorder?: SortOrder
    illegalDoorOpen?: SortOrder
    illegalStart?: SortOrder
    oilChange?: SortOrder
    overSpeed?: SortOrder
    overVoltage?: SortOrder
    overload?: SortOrder
    overtimeDriving?: SortOrder
    parking?: SortOrder
    powerFailure?: SortOrder
    underVoltage?: SortOrder
    vibration?: SortOrder
    timestamp?: SortOrder
  }

  export type AlarmDataAvgOrderByAggregateInput = {
    id?: SortOrder
    packetLength?: SortOrder
  }

  export type AlarmDataMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    alarms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrder
    packetLength?: SortOrder
    pseudoIP?: SortOrder
    rawData?: SortOrder
    centerEnabledAlarm?: SortOrder
    crossBorder?: SortOrder
    emergency?: SortOrder
    enterBorder?: SortOrder
    illegalDoorOpen?: SortOrder
    illegalStart?: SortOrder
    oilChange?: SortOrder
    overSpeed?: SortOrder
    overVoltage?: SortOrder
    overload?: SortOrder
    overtimeDriving?: SortOrder
    parking?: SortOrder
    powerFailure?: SortOrder
    underVoltage?: SortOrder
    vibration?: SortOrder
    timestamp?: SortOrder
  }

  export type AlarmDataMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    alarms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrder
    packetLength?: SortOrder
    pseudoIP?: SortOrder
    rawData?: SortOrder
    centerEnabledAlarm?: SortOrder
    crossBorder?: SortOrder
    emergency?: SortOrder
    enterBorder?: SortOrder
    illegalDoorOpen?: SortOrder
    illegalStart?: SortOrder
    oilChange?: SortOrder
    overSpeed?: SortOrder
    overVoltage?: SortOrder
    overload?: SortOrder
    overtimeDriving?: SortOrder
    parking?: SortOrder
    powerFailure?: SortOrder
    underVoltage?: SortOrder
    vibration?: SortOrder
    timestamp?: SortOrder
  }

  export type AlarmDataSumOrderByAggregateInput = {
    id?: SortOrder
    packetLength?: SortOrder
  }

  export type HeartbeatDataCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    calibrationValue?: SortOrder
    mainOrderReply?: SortOrder
    slaveOrderReply?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrder
    packetLength?: SortOrder
    pseudoIP?: SortOrder
    rawData?: SortOrder
    timestamp?: SortOrder
  }

  export type HeartbeatDataAvgOrderByAggregateInput = {
    id?: SortOrder
    calibrationValue?: SortOrder
    mainOrderReply?: SortOrder
    slaveOrderReply?: SortOrder
    packetLength?: SortOrder
  }

  export type HeartbeatDataMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    calibrationValue?: SortOrder
    mainOrderReply?: SortOrder
    slaveOrderReply?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrder
    packetLength?: SortOrder
    pseudoIP?: SortOrder
    rawData?: SortOrder
    timestamp?: SortOrder
  }

  export type HeartbeatDataMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    calibrationValue?: SortOrder
    mainOrderReply?: SortOrder
    slaveOrderReply?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrder
    packetLength?: SortOrder
    pseudoIP?: SortOrder
    rawData?: SortOrder
    timestamp?: SortOrder
  }

  export type HeartbeatDataSumOrderByAggregateInput = {
    id?: SortOrder
    calibrationValue?: SortOrder
    mainOrderReply?: SortOrder
    slaveOrderReply?: SortOrder
    packetLength?: SortOrder
  }

  export type TrackerStatusCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    samplingTime?: SortOrder
    alarmStatus?: SortOrder
    located?: SortOrder
    samplingType?: SortOrder
    samplingValue?: SortOrder
    sendingType?: SortOrder
    carStopSetting?: SortOrder
    overspeedSetting?: SortOrder
    phoneLimit?: SortOrder
    areaNodeLimit?: SortOrder
    safeSetting?: SortOrder
    longTimeDriving?: SortOrder
    samplingValueAccOff?: SortOrder
    emergencyAlarmSwitch?: SortOrder
    photographRelated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrder
    packetLength?: SortOrder
    pseudoIP?: SortOrder
    rawData?: SortOrder
    timestamp?: SortOrder
  }

  export type TrackerStatusAvgOrderByAggregateInput = {
    id?: SortOrder
    alarmStatus?: SortOrder
    samplingValue?: SortOrder
    carStopSetting?: SortOrder
    overspeedSetting?: SortOrder
    safeSetting?: SortOrder
    longTimeDriving?: SortOrder
    samplingValueAccOff?: SortOrder
    photographRelated?: SortOrder
    packetLength?: SortOrder
  }

  export type TrackerStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    samplingTime?: SortOrder
    alarmStatus?: SortOrder
    located?: SortOrder
    samplingType?: SortOrder
    samplingValue?: SortOrder
    sendingType?: SortOrder
    carStopSetting?: SortOrder
    overspeedSetting?: SortOrder
    phoneLimit?: SortOrder
    areaNodeLimit?: SortOrder
    safeSetting?: SortOrder
    longTimeDriving?: SortOrder
    samplingValueAccOff?: SortOrder
    emergencyAlarmSwitch?: SortOrder
    photographRelated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrder
    packetLength?: SortOrder
    pseudoIP?: SortOrder
    rawData?: SortOrder
    timestamp?: SortOrder
  }

  export type TrackerStatusMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    samplingTime?: SortOrder
    alarmStatus?: SortOrder
    located?: SortOrder
    samplingType?: SortOrder
    samplingValue?: SortOrder
    sendingType?: SortOrder
    carStopSetting?: SortOrder
    overspeedSetting?: SortOrder
    phoneLimit?: SortOrder
    areaNodeLimit?: SortOrder
    safeSetting?: SortOrder
    longTimeDriving?: SortOrder
    samplingValueAccOff?: SortOrder
    emergencyAlarmSwitch?: SortOrder
    photographRelated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrder
    packetLength?: SortOrder
    pseudoIP?: SortOrder
    rawData?: SortOrder
    timestamp?: SortOrder
  }

  export type TrackerStatusSumOrderByAggregateInput = {
    id?: SortOrder
    alarmStatus?: SortOrder
    samplingValue?: SortOrder
    carStopSetting?: SortOrder
    overspeedSetting?: SortOrder
    safeSetting?: SortOrder
    longTimeDriving?: SortOrder
    samplingValueAccOff?: SortOrder
    photographRelated?: SortOrder
    packetLength?: SortOrder
  }

  export type IButtonDataCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    subCommand?: SortOrder
    message?: SortOrder
    driverName?: SortOrder
    driverId?: SortOrder
    swipeData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrder
    packetLength?: SortOrder
    pseudoIP?: SortOrder
    rawData?: SortOrder
    timestamp?: SortOrder
  }

  export type IButtonDataAvgOrderByAggregateInput = {
    id?: SortOrder
    subCommand?: SortOrder
    packetLength?: SortOrder
  }

  export type IButtonDataMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    subCommand?: SortOrder
    message?: SortOrder
    driverName?: SortOrder
    driverId?: SortOrder
    swipeData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrder
    packetLength?: SortOrder
    pseudoIP?: SortOrder
    rawData?: SortOrder
    timestamp?: SortOrder
  }

  export type IButtonDataMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    subCommand?: SortOrder
    message?: SortOrder
    driverName?: SortOrder
    driverId?: SortOrder
    swipeData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainCommand?: SortOrder
    packetLength?: SortOrder
    pseudoIP?: SortOrder
    rawData?: SortOrder
    timestamp?: SortOrder
  }

  export type IButtonDataSumOrderByAggregateInput = {
    id?: SortOrder
    subCommand?: SortOrder
    packetLength?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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