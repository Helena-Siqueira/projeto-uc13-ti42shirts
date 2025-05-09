
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
 * Model Produto
 * 
 */
export type Produto = $Result.DefaultSelection<Prisma.$ProdutoPayload>
/**
 * Model Transacao
 * 
 */
export type Transacao = $Result.DefaultSelection<Prisma.$TransacaoPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Venda
 * 
 */
export type Venda = $Result.DefaultSelection<Prisma.$VendaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Produtos
 * const produtos = await prisma.produto.findMany()
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
   * // Fetch zero or more Produtos
   * const produtos = await prisma.produto.findMany()
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
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transacao`: Exposes CRUD operations for the **Transacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transacaos
    * const transacaos = await prisma.transacao.findMany()
    * ```
    */
  get transacao(): Prisma.TransacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venda`: Exposes CRUD operations for the **Venda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendas
    * const vendas = await prisma.venda.findMany()
    * ```
    */
  get venda(): Prisma.VendaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Produto: 'Produto',
    Transacao: 'Transacao',
    Usuario: 'Usuario',
    Venda: 'Venda'
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
      modelProps: "produto" | "transacao" | "usuario" | "venda"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Produto: {
        payload: Prisma.$ProdutoPayload<ExtArgs>
        fields: Prisma.ProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findMany: {
            args: Prisma.ProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          create: {
            args: Prisma.ProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          createMany: {
            args: Prisma.ProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          update: {
            args: Prisma.ProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.ProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      Transacao: {
        payload: Prisma.$TransacaoPayload<ExtArgs>
        fields: Prisma.TransacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          findFirst: {
            args: Prisma.TransacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          findMany: {
            args: Prisma.TransacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>[]
          }
          create: {
            args: Prisma.TransacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          createMany: {
            args: Prisma.TransacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          update: {
            args: Prisma.TransacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          deleteMany: {
            args: Prisma.TransacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          aggregate: {
            args: Prisma.TransacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransacao>
          }
          groupBy: {
            args: Prisma.TransacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransacaoCountArgs<ExtArgs>
            result: $Utils.Optional<TransacaoCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Venda: {
        payload: Prisma.$VendaPayload<ExtArgs>
        fields: Prisma.VendaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>
          }
          findFirst: {
            args: Prisma.VendaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>
          }
          findMany: {
            args: Prisma.VendaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>[]
          }
          create: {
            args: Prisma.VendaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>
          }
          createMany: {
            args: Prisma.VendaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VendaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>
          }
          update: {
            args: Prisma.VendaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>
          }
          deleteMany: {
            args: Prisma.VendaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VendaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>
          }
          aggregate: {
            args: Prisma.VendaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenda>
          }
          groupBy: {
            args: Prisma.VendaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendaCountArgs<ExtArgs>
            result: $Utils.Optional<VendaCountAggregateOutputType> | number
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
    produto?: ProdutoOmit
    transacao?: TransacaoOmit
    usuario?: UsuarioOmit
    venda?: VendaOmit
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
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    vendas: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendas?: boolean | ProdutoCountOutputTypeCountVendasArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountVendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendaWhereInput
  }


  /**
   * Count Type TransacaoCountOutputType
   */

  export type TransacaoCountOutputType = {
    vendas: number
  }

  export type TransacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendas?: boolean | TransacaoCountOutputTypeCountVendasArgs
  }

  // Custom InputTypes
  /**
   * TransacaoCountOutputType without action
   */
  export type TransacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransacaoCountOutputType
     */
    select?: TransacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransacaoCountOutputType without action
   */
  export type TransacaoCountOutputTypeCountVendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    id: number | null
    preco: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    id: number | null
    preco: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: number | null
    nome_do_produto: string | null
    preco: number | null
    tamanho: string | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: number | null
    nome_do_produto: string | null
    preco: number | null
    tamanho: string | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    nome_do_produto: number
    preco: number
    tamanho: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    id?: true
    preco?: true
  }

  export type ProdutoSumAggregateInputType = {
    id?: true
    preco?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    nome_do_produto?: true
    preco?: true
    tamanho?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    nome_do_produto?: true
    preco?: true
    tamanho?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    nome_do_produto?: true
    preco?: true
    tamanho?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produto to aggregate.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithAggregationInput | ProdutoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: number
    nome_do_produto: string
    preco: number
    tamanho: string
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_do_produto?: boolean
    preco?: boolean
    tamanho?: boolean
    vendas?: boolean | Produto$vendasArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>



  export type ProdutoSelectScalar = {
    id?: boolean
    nome_do_produto?: boolean
    preco?: boolean
    tamanho?: boolean
  }

  export type ProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome_do_produto" | "preco" | "tamanho", ExtArgs["result"]["produto"]>
  export type ProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendas?: boolean | Produto$vendasArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produto"
    objects: {
      vendas: Prisma.$VendaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome_do_produto: string
      preco: number
      tamanho: string
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoPayload, S>

  type ProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface ProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produto'], meta: { name: 'Produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoFindUniqueArgs>(args: SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoFindFirstArgs>(args?: SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutoFindManyArgs>(args?: SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends ProdutoCreateArgs>(args: SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoCreateManyArgs>(args?: SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends ProdutoDeleteArgs>(args: SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoUpdateArgs>(args: SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoUpdateManyArgs>(args: SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoUpsertArgs>(args: SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
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
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produto model
   */
  readonly fields: ProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendas<T extends Produto$vendasArgs<ExtArgs> = {}>(args?: Subset<T, Produto$vendasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Produto model
   */
  interface ProdutoFieldRefs {
    readonly id: FieldRef<"Produto", 'Int'>
    readonly nome_do_produto: FieldRef<"Produto", 'String'>
    readonly preco: FieldRef<"Produto", 'Float'>
    readonly tamanho: FieldRef<"Produto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findUniqueOrThrow
   */
  export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findFirstOrThrow
   */
  export type ProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto create
   */
  export type ProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Produto.
     */
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }

  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produto update
   */
  export type ProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Produto.
     */
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Produto to update in case it exists.
     */
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     */
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }

  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter which Produto to delete.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to delete.
     */
    limit?: number
  }

  /**
   * Produto.vendas
   */
  export type Produto$vendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    where?: VendaWhereInput
    orderBy?: VendaOrderByWithRelationInput | VendaOrderByWithRelationInput[]
    cursor?: VendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VendaScalarFieldEnum | VendaScalarFieldEnum[]
  }

  /**
   * Produto without action
   */
  export type ProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
  }


  /**
   * Model Transacao
   */

  export type AggregateTransacao = {
    _count: TransacaoCountAggregateOutputType | null
    _avg: TransacaoAvgAggregateOutputType | null
    _sum: TransacaoSumAggregateOutputType | null
    _min: TransacaoMinAggregateOutputType | null
    _max: TransacaoMaxAggregateOutputType | null
  }

  export type TransacaoAvgAggregateOutputType = {
    id: number | null
    preco: number | null
    id_usuario: number | null
  }

  export type TransacaoSumAggregateOutputType = {
    id: number | null
    preco: number | null
    id_usuario: number | null
  }

  export type TransacaoMinAggregateOutputType = {
    id: number | null
    data: Date | null
    preco: number | null
    id_usuario: number | null
  }

  export type TransacaoMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    preco: number | null
    id_usuario: number | null
  }

  export type TransacaoCountAggregateOutputType = {
    id: number
    data: number
    preco: number
    id_usuario: number
    _all: number
  }


  export type TransacaoAvgAggregateInputType = {
    id?: true
    preco?: true
    id_usuario?: true
  }

  export type TransacaoSumAggregateInputType = {
    id?: true
    preco?: true
    id_usuario?: true
  }

  export type TransacaoMinAggregateInputType = {
    id?: true
    data?: true
    preco?: true
    id_usuario?: true
  }

  export type TransacaoMaxAggregateInputType = {
    id?: true
    data?: true
    preco?: true
    id_usuario?: true
  }

  export type TransacaoCountAggregateInputType = {
    id?: true
    data?: true
    preco?: true
    id_usuario?: true
    _all?: true
  }

  export type TransacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transacao to aggregate.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transacaos
    **/
    _count?: true | TransacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransacaoMaxAggregateInputType
  }

  export type GetTransacaoAggregateType<T extends TransacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateTransacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransacao[P]>
      : GetScalarType<T[P], AggregateTransacao[P]>
  }




  export type TransacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransacaoWhereInput
    orderBy?: TransacaoOrderByWithAggregationInput | TransacaoOrderByWithAggregationInput[]
    by: TransacaoScalarFieldEnum[] | TransacaoScalarFieldEnum
    having?: TransacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransacaoCountAggregateInputType | true
    _avg?: TransacaoAvgAggregateInputType
    _sum?: TransacaoSumAggregateInputType
    _min?: TransacaoMinAggregateInputType
    _max?: TransacaoMaxAggregateInputType
  }

  export type TransacaoGroupByOutputType = {
    id: number
    data: Date
    preco: number
    id_usuario: number
    _count: TransacaoCountAggregateOutputType | null
    _avg: TransacaoAvgAggregateOutputType | null
    _sum: TransacaoSumAggregateOutputType | null
    _min: TransacaoMinAggregateOutputType | null
    _max: TransacaoMaxAggregateOutputType | null
  }

  type GetTransacaoGroupByPayload<T extends TransacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransacaoGroupByOutputType[P]>
            : GetScalarType<T[P], TransacaoGroupByOutputType[P]>
        }
      >
    >


  export type TransacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    preco?: boolean
    id_usuario?: boolean
    vendas?: boolean | Transacao$vendasArgs<ExtArgs>
    _count?: boolean | TransacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transacao"]>



  export type TransacaoSelectScalar = {
    id?: boolean
    data?: boolean
    preco?: boolean
    id_usuario?: boolean
  }

  export type TransacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "preco" | "id_usuario", ExtArgs["result"]["transacao"]>
  export type TransacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendas?: boolean | Transacao$vendasArgs<ExtArgs>
    _count?: boolean | TransacaoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TransacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transacao"
    objects: {
      vendas: Prisma.$VendaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Date
      preco: number
      id_usuario: number
    }, ExtArgs["result"]["transacao"]>
    composites: {}
  }

  type TransacaoGetPayload<S extends boolean | null | undefined | TransacaoDefaultArgs> = $Result.GetResult<Prisma.$TransacaoPayload, S>

  type TransacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransacaoCountAggregateInputType | true
    }

  export interface TransacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transacao'], meta: { name: 'Transacao' } }
    /**
     * Find zero or one Transacao that matches the filter.
     * @param {TransacaoFindUniqueArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransacaoFindUniqueArgs>(args: SelectSubset<T, TransacaoFindUniqueArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransacaoFindUniqueOrThrowArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, TransacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFindFirstArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransacaoFindFirstArgs>(args?: SelectSubset<T, TransacaoFindFirstArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFindFirstOrThrowArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, TransacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transacaos
     * const transacaos = await prisma.transacao.findMany()
     * 
     * // Get first 10 Transacaos
     * const transacaos = await prisma.transacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transacaoWithIdOnly = await prisma.transacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransacaoFindManyArgs>(args?: SelectSubset<T, TransacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transacao.
     * @param {TransacaoCreateArgs} args - Arguments to create a Transacao.
     * @example
     * // Create one Transacao
     * const Transacao = await prisma.transacao.create({
     *   data: {
     *     // ... data to create a Transacao
     *   }
     * })
     * 
     */
    create<T extends TransacaoCreateArgs>(args: SelectSubset<T, TransacaoCreateArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transacaos.
     * @param {TransacaoCreateManyArgs} args - Arguments to create many Transacaos.
     * @example
     * // Create many Transacaos
     * const transacao = await prisma.transacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransacaoCreateManyArgs>(args?: SelectSubset<T, TransacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transacao.
     * @param {TransacaoDeleteArgs} args - Arguments to delete one Transacao.
     * @example
     * // Delete one Transacao
     * const Transacao = await prisma.transacao.delete({
     *   where: {
     *     // ... filter to delete one Transacao
     *   }
     * })
     * 
     */
    delete<T extends TransacaoDeleteArgs>(args: SelectSubset<T, TransacaoDeleteArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transacao.
     * @param {TransacaoUpdateArgs} args - Arguments to update one Transacao.
     * @example
     * // Update one Transacao
     * const transacao = await prisma.transacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransacaoUpdateArgs>(args: SelectSubset<T, TransacaoUpdateArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transacaos.
     * @param {TransacaoDeleteManyArgs} args - Arguments to filter Transacaos to delete.
     * @example
     * // Delete a few Transacaos
     * const { count } = await prisma.transacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransacaoDeleteManyArgs>(args?: SelectSubset<T, TransacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transacaos
     * const transacao = await prisma.transacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransacaoUpdateManyArgs>(args: SelectSubset<T, TransacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transacao.
     * @param {TransacaoUpsertArgs} args - Arguments to update or create a Transacao.
     * @example
     * // Update or create a Transacao
     * const transacao = await prisma.transacao.upsert({
     *   create: {
     *     // ... data to create a Transacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transacao we want to update
     *   }
     * })
     */
    upsert<T extends TransacaoUpsertArgs>(args: SelectSubset<T, TransacaoUpsertArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoCountArgs} args - Arguments to filter Transacaos to count.
     * @example
     * // Count the number of Transacaos
     * const count = await prisma.transacao.count({
     *   where: {
     *     // ... the filter for the Transacaos we want to count
     *   }
     * })
    **/
    count<T extends TransacaoCountArgs>(
      args?: Subset<T, TransacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransacaoAggregateArgs>(args: Subset<T, TransacaoAggregateArgs>): Prisma.PrismaPromise<GetTransacaoAggregateType<T>>

    /**
     * Group by Transacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoGroupByArgs} args - Group by arguments.
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
      T extends TransacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransacaoGroupByArgs['orderBy'] }
        : { orderBy?: TransacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transacao model
   */
  readonly fields: TransacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendas<T extends Transacao$vendasArgs<ExtArgs> = {}>(args?: Subset<T, Transacao$vendasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Transacao model
   */
  interface TransacaoFieldRefs {
    readonly id: FieldRef<"Transacao", 'Int'>
    readonly data: FieldRef<"Transacao", 'DateTime'>
    readonly preco: FieldRef<"Transacao", 'Float'>
    readonly id_usuario: FieldRef<"Transacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Transacao findUnique
   */
  export type TransacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao findUniqueOrThrow
   */
  export type TransacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao findFirst
   */
  export type TransacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transacaos.
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transacaos.
     */
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Transacao findFirstOrThrow
   */
  export type TransacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transacaos.
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transacaos.
     */
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Transacao findMany
   */
  export type TransacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacaos to fetch.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transacaos.
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Transacao create
   */
  export type TransacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Transacao.
     */
    data: XOR<TransacaoCreateInput, TransacaoUncheckedCreateInput>
  }

  /**
   * Transacao createMany
   */
  export type TransacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transacaos.
     */
    data: TransacaoCreateManyInput | TransacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transacao update
   */
  export type TransacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Transacao.
     */
    data: XOR<TransacaoUpdateInput, TransacaoUncheckedUpdateInput>
    /**
     * Choose, which Transacao to update.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao updateMany
   */
  export type TransacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transacaos.
     */
    data: XOR<TransacaoUpdateManyMutationInput, TransacaoUncheckedUpdateManyInput>
    /**
     * Filter which Transacaos to update
     */
    where?: TransacaoWhereInput
    /**
     * Limit how many Transacaos to update.
     */
    limit?: number
  }

  /**
   * Transacao upsert
   */
  export type TransacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Transacao to update in case it exists.
     */
    where: TransacaoWhereUniqueInput
    /**
     * In case the Transacao found by the `where` argument doesn't exist, create a new Transacao with this data.
     */
    create: XOR<TransacaoCreateInput, TransacaoUncheckedCreateInput>
    /**
     * In case the Transacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransacaoUpdateInput, TransacaoUncheckedUpdateInput>
  }

  /**
   * Transacao delete
   */
  export type TransacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter which Transacao to delete.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao deleteMany
   */
  export type TransacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transacaos to delete
     */
    where?: TransacaoWhereInput
    /**
     * Limit how many Transacaos to delete.
     */
    limit?: number
  }

  /**
   * Transacao.vendas
   */
  export type Transacao$vendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    where?: VendaWhereInput
    orderBy?: VendaOrderByWithRelationInput | VendaOrderByWithRelationInput[]
    cursor?: VendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VendaScalarFieldEnum | VendaScalarFieldEnum[]
  }

  /**
   * Transacao without action
   */
  export type TransacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    sexo: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    sexo: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    data_nascimento: string | null
    sexo: number | null
    email: string | null
    senha: string | null
    cpf: string | null
    telefone: string | null
    cep: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    data_nascimento: string | null
    sexo: number | null
    email: string | null
    senha: string | null
    cpf: string | null
    telefone: string | null
    cep: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    data_nascimento: number
    sexo: number
    email: number
    senha: number
    cpf: number
    telefone: number
    cep: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    sexo?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    sexo?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    data_nascimento?: true
    sexo?: true
    email?: true
    senha?: true
    cpf?: true
    telefone?: true
    cep?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    data_nascimento?: true
    sexo?: true
    email?: true
    senha?: true
    cpf?: true
    telefone?: true
    cep?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    data_nascimento?: true
    sexo?: true
    email?: true
    senha?: true
    cpf?: true
    telefone?: true
    cep?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    data_nascimento: string
    sexo: number
    email: string
    senha: string
    cpf: string
    telefone: string
    cep: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    data_nascimento?: boolean
    sexo?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    telefone?: boolean
    cep?: boolean
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    data_nascimento?: boolean
    sexo?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    telefone?: boolean
    cep?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "data_nascimento" | "sexo" | "email" | "senha" | "cpf" | "telefone" | "cep", ExtArgs["result"]["usuario"]>

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      data_nascimento: string
      sexo: number
      email: string
      senha: string
      cpf: string
      telefone: string
      cep: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly data_nascimento: FieldRef<"Usuario", 'String'>
    readonly sexo: FieldRef<"Usuario", 'Int'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly cpf: FieldRef<"Usuario", 'String'>
    readonly telefone: FieldRef<"Usuario", 'String'>
    readonly cep: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
  }


  /**
   * Model Venda
   */

  export type AggregateVenda = {
    _count: VendaCountAggregateOutputType | null
    _avg: VendaAvgAggregateOutputType | null
    _sum: VendaSumAggregateOutputType | null
    _min: VendaMinAggregateOutputType | null
    _max: VendaMaxAggregateOutputType | null
  }

  export type VendaAvgAggregateOutputType = {
    quantidade: number | null
    id_transacao: number | null
    id_produto: number | null
  }

  export type VendaSumAggregateOutputType = {
    quantidade: number | null
    id_transacao: number | null
    id_produto: number | null
  }

  export type VendaMinAggregateOutputType = {
    quantidade: number | null
    id_transacao: number | null
    id_produto: number | null
  }

  export type VendaMaxAggregateOutputType = {
    quantidade: number | null
    id_transacao: number | null
    id_produto: number | null
  }

  export type VendaCountAggregateOutputType = {
    quantidade: number
    id_transacao: number
    id_produto: number
    _all: number
  }


  export type VendaAvgAggregateInputType = {
    quantidade?: true
    id_transacao?: true
    id_produto?: true
  }

  export type VendaSumAggregateInputType = {
    quantidade?: true
    id_transacao?: true
    id_produto?: true
  }

  export type VendaMinAggregateInputType = {
    quantidade?: true
    id_transacao?: true
    id_produto?: true
  }

  export type VendaMaxAggregateInputType = {
    quantidade?: true
    id_transacao?: true
    id_produto?: true
  }

  export type VendaCountAggregateInputType = {
    quantidade?: true
    id_transacao?: true
    id_produto?: true
    _all?: true
  }

  export type VendaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venda to aggregate.
     */
    where?: VendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendas to fetch.
     */
    orderBy?: VendaOrderByWithRelationInput | VendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendas
    **/
    _count?: true | VendaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendaMaxAggregateInputType
  }

  export type GetVendaAggregateType<T extends VendaAggregateArgs> = {
        [P in keyof T & keyof AggregateVenda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenda[P]>
      : GetScalarType<T[P], AggregateVenda[P]>
  }




  export type VendaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendaWhereInput
    orderBy?: VendaOrderByWithAggregationInput | VendaOrderByWithAggregationInput[]
    by: VendaScalarFieldEnum[] | VendaScalarFieldEnum
    having?: VendaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendaCountAggregateInputType | true
    _avg?: VendaAvgAggregateInputType
    _sum?: VendaSumAggregateInputType
    _min?: VendaMinAggregateInputType
    _max?: VendaMaxAggregateInputType
  }

  export type VendaGroupByOutputType = {
    quantidade: number
    id_transacao: number
    id_produto: number
    _count: VendaCountAggregateOutputType | null
    _avg: VendaAvgAggregateOutputType | null
    _sum: VendaSumAggregateOutputType | null
    _min: VendaMinAggregateOutputType | null
    _max: VendaMaxAggregateOutputType | null
  }

  type GetVendaGroupByPayload<T extends VendaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendaGroupByOutputType[P]>
            : GetScalarType<T[P], VendaGroupByOutputType[P]>
        }
      >
    >


  export type VendaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    quantidade?: boolean
    id_transacao?: boolean
    id_produto?: boolean
    transacao?: boolean | TransacaoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venda"]>



  export type VendaSelectScalar = {
    quantidade?: boolean
    id_transacao?: boolean
    id_produto?: boolean
  }

  export type VendaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"quantidade" | "id_transacao" | "id_produto", ExtArgs["result"]["venda"]>
  export type VendaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transacao?: boolean | TransacaoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }

  export type $VendaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venda"
    objects: {
      transacao: Prisma.$TransacaoPayload<ExtArgs>
      produto: Prisma.$ProdutoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      quantidade: number
      id_transacao: number
      id_produto: number
    }, ExtArgs["result"]["venda"]>
    composites: {}
  }

  type VendaGetPayload<S extends boolean | null | undefined | VendaDefaultArgs> = $Result.GetResult<Prisma.$VendaPayload, S>

  type VendaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendaCountAggregateInputType | true
    }

  export interface VendaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venda'], meta: { name: 'Venda' } }
    /**
     * Find zero or one Venda that matches the filter.
     * @param {VendaFindUniqueArgs} args - Arguments to find a Venda
     * @example
     * // Get one Venda
     * const venda = await prisma.venda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendaFindUniqueArgs>(args: SelectSubset<T, VendaFindUniqueArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venda that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendaFindUniqueOrThrowArgs} args - Arguments to find a Venda
     * @example
     * // Get one Venda
     * const venda = await prisma.venda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendaFindUniqueOrThrowArgs>(args: SelectSubset<T, VendaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaFindFirstArgs} args - Arguments to find a Venda
     * @example
     * // Get one Venda
     * const venda = await prisma.venda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendaFindFirstArgs>(args?: SelectSubset<T, VendaFindFirstArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaFindFirstOrThrowArgs} args - Arguments to find a Venda
     * @example
     * // Get one Venda
     * const venda = await prisma.venda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendaFindFirstOrThrowArgs>(args?: SelectSubset<T, VendaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendas
     * const vendas = await prisma.venda.findMany()
     * 
     * // Get first 10 Vendas
     * const vendas = await prisma.venda.findMany({ take: 10 })
     * 
     * // Only select the `quantidade`
     * const vendaWithQuantidadeOnly = await prisma.venda.findMany({ select: { quantidade: true } })
     * 
     */
    findMany<T extends VendaFindManyArgs>(args?: SelectSubset<T, VendaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venda.
     * @param {VendaCreateArgs} args - Arguments to create a Venda.
     * @example
     * // Create one Venda
     * const Venda = await prisma.venda.create({
     *   data: {
     *     // ... data to create a Venda
     *   }
     * })
     * 
     */
    create<T extends VendaCreateArgs>(args: SelectSubset<T, VendaCreateArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendas.
     * @param {VendaCreateManyArgs} args - Arguments to create many Vendas.
     * @example
     * // Create many Vendas
     * const venda = await prisma.venda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendaCreateManyArgs>(args?: SelectSubset<T, VendaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Venda.
     * @param {VendaDeleteArgs} args - Arguments to delete one Venda.
     * @example
     * // Delete one Venda
     * const Venda = await prisma.venda.delete({
     *   where: {
     *     // ... filter to delete one Venda
     *   }
     * })
     * 
     */
    delete<T extends VendaDeleteArgs>(args: SelectSubset<T, VendaDeleteArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venda.
     * @param {VendaUpdateArgs} args - Arguments to update one Venda.
     * @example
     * // Update one Venda
     * const venda = await prisma.venda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendaUpdateArgs>(args: SelectSubset<T, VendaUpdateArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendas.
     * @param {VendaDeleteManyArgs} args - Arguments to filter Vendas to delete.
     * @example
     * // Delete a few Vendas
     * const { count } = await prisma.venda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendaDeleteManyArgs>(args?: SelectSubset<T, VendaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendas
     * const venda = await prisma.venda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendaUpdateManyArgs>(args: SelectSubset<T, VendaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Venda.
     * @param {VendaUpsertArgs} args - Arguments to update or create a Venda.
     * @example
     * // Update or create a Venda
     * const venda = await prisma.venda.upsert({
     *   create: {
     *     // ... data to create a Venda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venda we want to update
     *   }
     * })
     */
    upsert<T extends VendaUpsertArgs>(args: SelectSubset<T, VendaUpsertArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaCountArgs} args - Arguments to filter Vendas to count.
     * @example
     * // Count the number of Vendas
     * const count = await prisma.venda.count({
     *   where: {
     *     // ... the filter for the Vendas we want to count
     *   }
     * })
    **/
    count<T extends VendaCountArgs>(
      args?: Subset<T, VendaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VendaAggregateArgs>(args: Subset<T, VendaAggregateArgs>): Prisma.PrismaPromise<GetVendaAggregateType<T>>

    /**
     * Group by Venda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaGroupByArgs} args - Group by arguments.
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
      T extends VendaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendaGroupByArgs['orderBy'] }
        : { orderBy?: VendaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VendaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venda model
   */
  readonly fields: VendaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transacao<T extends TransacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransacaoDefaultArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Venda model
   */
  interface VendaFieldRefs {
    readonly quantidade: FieldRef<"Venda", 'Int'>
    readonly id_transacao: FieldRef<"Venda", 'Int'>
    readonly id_produto: FieldRef<"Venda", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Venda findUnique
   */
  export type VendaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * Filter, which Venda to fetch.
     */
    where: VendaWhereUniqueInput
  }

  /**
   * Venda findUniqueOrThrow
   */
  export type VendaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * Filter, which Venda to fetch.
     */
    where: VendaWhereUniqueInput
  }

  /**
   * Venda findFirst
   */
  export type VendaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * Filter, which Venda to fetch.
     */
    where?: VendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendas to fetch.
     */
    orderBy?: VendaOrderByWithRelationInput | VendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendas.
     */
    cursor?: VendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendas.
     */
    distinct?: VendaScalarFieldEnum | VendaScalarFieldEnum[]
  }

  /**
   * Venda findFirstOrThrow
   */
  export type VendaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * Filter, which Venda to fetch.
     */
    where?: VendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendas to fetch.
     */
    orderBy?: VendaOrderByWithRelationInput | VendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendas.
     */
    cursor?: VendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendas.
     */
    distinct?: VendaScalarFieldEnum | VendaScalarFieldEnum[]
  }

  /**
   * Venda findMany
   */
  export type VendaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * Filter, which Vendas to fetch.
     */
    where?: VendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendas to fetch.
     */
    orderBy?: VendaOrderByWithRelationInput | VendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendas.
     */
    cursor?: VendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendas.
     */
    skip?: number
    distinct?: VendaScalarFieldEnum | VendaScalarFieldEnum[]
  }

  /**
   * Venda create
   */
  export type VendaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * The data needed to create a Venda.
     */
    data: XOR<VendaCreateInput, VendaUncheckedCreateInput>
  }

  /**
   * Venda createMany
   */
  export type VendaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendas.
     */
    data: VendaCreateManyInput | VendaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venda update
   */
  export type VendaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * The data needed to update a Venda.
     */
    data: XOR<VendaUpdateInput, VendaUncheckedUpdateInput>
    /**
     * Choose, which Venda to update.
     */
    where: VendaWhereUniqueInput
  }

  /**
   * Venda updateMany
   */
  export type VendaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendas.
     */
    data: XOR<VendaUpdateManyMutationInput, VendaUncheckedUpdateManyInput>
    /**
     * Filter which Vendas to update
     */
    where?: VendaWhereInput
    /**
     * Limit how many Vendas to update.
     */
    limit?: number
  }

  /**
   * Venda upsert
   */
  export type VendaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * The filter to search for the Venda to update in case it exists.
     */
    where: VendaWhereUniqueInput
    /**
     * In case the Venda found by the `where` argument doesn't exist, create a new Venda with this data.
     */
    create: XOR<VendaCreateInput, VendaUncheckedCreateInput>
    /**
     * In case the Venda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendaUpdateInput, VendaUncheckedUpdateInput>
  }

  /**
   * Venda delete
   */
  export type VendaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * Filter which Venda to delete.
     */
    where: VendaWhereUniqueInput
  }

  /**
   * Venda deleteMany
   */
  export type VendaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendas to delete
     */
    where?: VendaWhereInput
    /**
     * Limit how many Vendas to delete.
     */
    limit?: number
  }

  /**
   * Venda without action
   */
  export type VendaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
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


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    nome_do_produto: 'nome_do_produto',
    preco: 'preco',
    tamanho: 'tamanho'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const TransacaoScalarFieldEnum: {
    id: 'id',
    data: 'data',
    preco: 'preco',
    id_usuario: 'id_usuario'
  };

  export type TransacaoScalarFieldEnum = (typeof TransacaoScalarFieldEnum)[keyof typeof TransacaoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    data_nascimento: 'data_nascimento',
    sexo: 'sexo',
    email: 'email',
    senha: 'senha',
    cpf: 'cpf',
    telefone: 'telefone',
    cep: 'cep'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const VendaScalarFieldEnum: {
    quantidade: 'quantidade',
    id_transacao: 'id_transacao',
    id_produto: 'id_produto'
  };

  export type VendaScalarFieldEnum = (typeof VendaScalarFieldEnum)[keyof typeof VendaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const ProdutoOrderByRelevanceFieldEnum: {
    nome_do_produto: 'nome_do_produto',
    tamanho: 'tamanho'
  };

  export type ProdutoOrderByRelevanceFieldEnum = (typeof ProdutoOrderByRelevanceFieldEnum)[keyof typeof ProdutoOrderByRelevanceFieldEnum]


  export const UsuarioOrderByRelevanceFieldEnum: {
    nome: 'nome',
    data_nascimento: 'data_nascimento',
    email: 'email',
    senha: 'senha',
    cpf: 'cpf',
    telefone: 'telefone',
    cep: 'cep'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type ProdutoWhereInput = {
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    id?: IntFilter<"Produto"> | number
    nome_do_produto?: StringFilter<"Produto"> | string
    preco?: FloatFilter<"Produto"> | number
    tamanho?: StringFilter<"Produto"> | string
    vendas?: VendaListRelationFilter
  }

  export type ProdutoOrderByWithRelationInput = {
    id?: SortOrder
    nome_do_produto?: SortOrder
    preco?: SortOrder
    tamanho?: SortOrder
    vendas?: VendaOrderByRelationAggregateInput
    _relevance?: ProdutoOrderByRelevanceInput
  }

  export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    nome_do_produto?: StringFilter<"Produto"> | string
    preco?: FloatFilter<"Produto"> | number
    tamanho?: StringFilter<"Produto"> | string
    vendas?: VendaListRelationFilter
  }, "id">

  export type ProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    nome_do_produto?: SortOrder
    preco?: SortOrder
    tamanho?: SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _avg?: ProdutoAvgOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
    _sum?: ProdutoSumOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    OR?: ProdutoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Produto"> | number
    nome_do_produto?: StringWithAggregatesFilter<"Produto"> | string
    preco?: FloatWithAggregatesFilter<"Produto"> | number
    tamanho?: StringWithAggregatesFilter<"Produto"> | string
  }

  export type TransacaoWhereInput = {
    AND?: TransacaoWhereInput | TransacaoWhereInput[]
    OR?: TransacaoWhereInput[]
    NOT?: TransacaoWhereInput | TransacaoWhereInput[]
    id?: IntFilter<"Transacao"> | number
    data?: DateTimeFilter<"Transacao"> | Date | string
    preco?: FloatFilter<"Transacao"> | number
    id_usuario?: IntFilter<"Transacao"> | number
    vendas?: VendaListRelationFilter
  }

  export type TransacaoOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    preco?: SortOrder
    id_usuario?: SortOrder
    vendas?: VendaOrderByRelationAggregateInput
  }

  export type TransacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransacaoWhereInput | TransacaoWhereInput[]
    OR?: TransacaoWhereInput[]
    NOT?: TransacaoWhereInput | TransacaoWhereInput[]
    data?: DateTimeFilter<"Transacao"> | Date | string
    preco?: FloatFilter<"Transacao"> | number
    id_usuario?: IntFilter<"Transacao"> | number
    vendas?: VendaListRelationFilter
  }, "id">

  export type TransacaoOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    preco?: SortOrder
    id_usuario?: SortOrder
    _count?: TransacaoCountOrderByAggregateInput
    _avg?: TransacaoAvgOrderByAggregateInput
    _max?: TransacaoMaxOrderByAggregateInput
    _min?: TransacaoMinOrderByAggregateInput
    _sum?: TransacaoSumOrderByAggregateInput
  }

  export type TransacaoScalarWhereWithAggregatesInput = {
    AND?: TransacaoScalarWhereWithAggregatesInput | TransacaoScalarWhereWithAggregatesInput[]
    OR?: TransacaoScalarWhereWithAggregatesInput[]
    NOT?: TransacaoScalarWhereWithAggregatesInput | TransacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transacao"> | number
    data?: DateTimeWithAggregatesFilter<"Transacao"> | Date | string
    preco?: FloatWithAggregatesFilter<"Transacao"> | number
    id_usuario?: IntWithAggregatesFilter<"Transacao"> | number
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    data_nascimento?: StringFilter<"Usuario"> | string
    sexo?: IntFilter<"Usuario"> | number
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    cpf?: StringFilter<"Usuario"> | string
    telefone?: StringFilter<"Usuario"> | string
    cep?: StringFilter<"Usuario"> | string
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    data_nascimento?: SortOrder
    sexo?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    cep?: SortOrder
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    data_nascimento?: StringFilter<"Usuario"> | string
    sexo?: IntFilter<"Usuario"> | number
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    cpf?: StringFilter<"Usuario"> | string
    telefone?: StringFilter<"Usuario"> | string
    cep?: StringFilter<"Usuario"> | string
  }, "id">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    data_nascimento?: SortOrder
    sexo?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    cep?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    data_nascimento?: StringWithAggregatesFilter<"Usuario"> | string
    sexo?: IntWithAggregatesFilter<"Usuario"> | number
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    cpf?: StringWithAggregatesFilter<"Usuario"> | string
    telefone?: StringWithAggregatesFilter<"Usuario"> | string
    cep?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type VendaWhereInput = {
    AND?: VendaWhereInput | VendaWhereInput[]
    OR?: VendaWhereInput[]
    NOT?: VendaWhereInput | VendaWhereInput[]
    quantidade?: IntFilter<"Venda"> | number
    id_transacao?: IntFilter<"Venda"> | number
    id_produto?: IntFilter<"Venda"> | number
    transacao?: XOR<TransacaoScalarRelationFilter, TransacaoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }

  export type VendaOrderByWithRelationInput = {
    quantidade?: SortOrder
    id_transacao?: SortOrder
    id_produto?: SortOrder
    transacao?: TransacaoOrderByWithRelationInput
    produto?: ProdutoOrderByWithRelationInput
  }

  export type VendaWhereUniqueInput = Prisma.AtLeast<{
    id_transacao_id_produto?: VendaId_transacaoId_produtoCompoundUniqueInput
    AND?: VendaWhereInput | VendaWhereInput[]
    OR?: VendaWhereInput[]
    NOT?: VendaWhereInput | VendaWhereInput[]
    quantidade?: IntFilter<"Venda"> | number
    id_transacao?: IntFilter<"Venda"> | number
    id_produto?: IntFilter<"Venda"> | number
    transacao?: XOR<TransacaoScalarRelationFilter, TransacaoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }, "id_transacao_id_produto">

  export type VendaOrderByWithAggregationInput = {
    quantidade?: SortOrder
    id_transacao?: SortOrder
    id_produto?: SortOrder
    _count?: VendaCountOrderByAggregateInput
    _avg?: VendaAvgOrderByAggregateInput
    _max?: VendaMaxOrderByAggregateInput
    _min?: VendaMinOrderByAggregateInput
    _sum?: VendaSumOrderByAggregateInput
  }

  export type VendaScalarWhereWithAggregatesInput = {
    AND?: VendaScalarWhereWithAggregatesInput | VendaScalarWhereWithAggregatesInput[]
    OR?: VendaScalarWhereWithAggregatesInput[]
    NOT?: VendaScalarWhereWithAggregatesInput | VendaScalarWhereWithAggregatesInput[]
    quantidade?: IntWithAggregatesFilter<"Venda"> | number
    id_transacao?: IntWithAggregatesFilter<"Venda"> | number
    id_produto?: IntWithAggregatesFilter<"Venda"> | number
  }

  export type ProdutoCreateInput = {
    nome_do_produto: string
    preco: number
    tamanho: string
    vendas?: VendaCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateInput = {
    id?: number
    nome_do_produto: string
    preco: number
    tamanho: string
    vendas?: VendaUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUpdateInput = {
    nome_do_produto?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    tamanho?: StringFieldUpdateOperationsInput | string
    vendas?: VendaUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_do_produto?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    tamanho?: StringFieldUpdateOperationsInput | string
    vendas?: VendaUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoCreateManyInput = {
    id?: number
    nome_do_produto: string
    preco: number
    tamanho: string
  }

  export type ProdutoUpdateManyMutationInput = {
    nome_do_produto?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    tamanho?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_do_produto?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    tamanho?: StringFieldUpdateOperationsInput | string
  }

  export type TransacaoCreateInput = {
    data: Date | string
    preco: number
    id_usuario: number
    vendas?: VendaCreateNestedManyWithoutTransacaoInput
  }

  export type TransacaoUncheckedCreateInput = {
    id?: number
    data: Date | string
    preco: number
    id_usuario: number
    vendas?: VendaUncheckedCreateNestedManyWithoutTransacaoInput
  }

  export type TransacaoUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: FloatFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    vendas?: VendaUpdateManyWithoutTransacaoNestedInput
  }

  export type TransacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: FloatFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    vendas?: VendaUncheckedUpdateManyWithoutTransacaoNestedInput
  }

  export type TransacaoCreateManyInput = {
    id?: number
    data: Date | string
    preco: number
    id_usuario: number
  }

  export type TransacaoUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: FloatFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type TransacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: FloatFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateInput = {
    nome: string
    data_nascimento: string
    sexo: number
    email: string
    senha: string
    cpf: string
    telefone: string
    cep: string
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    data_nascimento: string
    sexo: number
    email: string
    senha: string
    cpf: string
    telefone: string
    cep: string
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: StringFieldUpdateOperationsInput | string
    sexo?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: StringFieldUpdateOperationsInput | string
    sexo?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    data_nascimento: string
    sexo: number
    email: string
    senha: string
    cpf: string
    telefone: string
    cep: string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: StringFieldUpdateOperationsInput | string
    sexo?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: StringFieldUpdateOperationsInput | string
    sexo?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
  }

  export type VendaCreateInput = {
    quantidade: number
    transacao: TransacaoCreateNestedOneWithoutVendasInput
    produto: ProdutoCreateNestedOneWithoutVendasInput
  }

  export type VendaUncheckedCreateInput = {
    quantidade: number
    id_transacao: number
    id_produto: number
  }

  export type VendaUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    transacao?: TransacaoUpdateOneRequiredWithoutVendasNestedInput
    produto?: ProdutoUpdateOneRequiredWithoutVendasNestedInput
  }

  export type VendaUncheckedUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    id_transacao?: IntFieldUpdateOperationsInput | number
    id_produto?: IntFieldUpdateOperationsInput | number
  }

  export type VendaCreateManyInput = {
    quantidade: number
    id_transacao: number
    id_produto: number
  }

  export type VendaUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type VendaUncheckedUpdateManyInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    id_transacao?: IntFieldUpdateOperationsInput | number
    id_produto?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type VendaListRelationFilter = {
    every?: VendaWhereInput
    some?: VendaWhereInput
    none?: VendaWhereInput
  }

  export type VendaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutoOrderByRelevanceInput = {
    fields: ProdutoOrderByRelevanceFieldEnum | ProdutoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    nome_do_produto?: SortOrder
    preco?: SortOrder
    tamanho?: SortOrder
  }

  export type ProdutoAvgOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_do_produto?: SortOrder
    preco?: SortOrder
    tamanho?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    nome_do_produto?: SortOrder
    preco?: SortOrder
    tamanho?: SortOrder
  }

  export type ProdutoSumOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TransacaoCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    preco?: SortOrder
    id_usuario?: SortOrder
  }

  export type TransacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    id_usuario?: SortOrder
  }

  export type TransacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    preco?: SortOrder
    id_usuario?: SortOrder
  }

  export type TransacaoMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    preco?: SortOrder
    id_usuario?: SortOrder
  }

  export type TransacaoSumOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    id_usuario?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data_nascimento?: SortOrder
    sexo?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    cep?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    sexo?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data_nascimento?: SortOrder
    sexo?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    cep?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data_nascimento?: SortOrder
    sexo?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    cep?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    sexo?: SortOrder
  }

  export type TransacaoScalarRelationFilter = {
    is?: TransacaoWhereInput
    isNot?: TransacaoWhereInput
  }

  export type ProdutoScalarRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type VendaId_transacaoId_produtoCompoundUniqueInput = {
    id_transacao: number
    id_produto: number
  }

  export type VendaCountOrderByAggregateInput = {
    quantidade?: SortOrder
    id_transacao?: SortOrder
    id_produto?: SortOrder
  }

  export type VendaAvgOrderByAggregateInput = {
    quantidade?: SortOrder
    id_transacao?: SortOrder
    id_produto?: SortOrder
  }

  export type VendaMaxOrderByAggregateInput = {
    quantidade?: SortOrder
    id_transacao?: SortOrder
    id_produto?: SortOrder
  }

  export type VendaMinOrderByAggregateInput = {
    quantidade?: SortOrder
    id_transacao?: SortOrder
    id_produto?: SortOrder
  }

  export type VendaSumOrderByAggregateInput = {
    quantidade?: SortOrder
    id_transacao?: SortOrder
    id_produto?: SortOrder
  }

  export type VendaCreateNestedManyWithoutProdutoInput = {
    create?: XOR<VendaCreateWithoutProdutoInput, VendaUncheckedCreateWithoutProdutoInput> | VendaCreateWithoutProdutoInput[] | VendaUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: VendaCreateOrConnectWithoutProdutoInput | VendaCreateOrConnectWithoutProdutoInput[]
    createMany?: VendaCreateManyProdutoInputEnvelope
    connect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
  }

  export type VendaUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<VendaCreateWithoutProdutoInput, VendaUncheckedCreateWithoutProdutoInput> | VendaCreateWithoutProdutoInput[] | VendaUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: VendaCreateOrConnectWithoutProdutoInput | VendaCreateOrConnectWithoutProdutoInput[]
    createMany?: VendaCreateManyProdutoInputEnvelope
    connect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VendaUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<VendaCreateWithoutProdutoInput, VendaUncheckedCreateWithoutProdutoInput> | VendaCreateWithoutProdutoInput[] | VendaUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: VendaCreateOrConnectWithoutProdutoInput | VendaCreateOrConnectWithoutProdutoInput[]
    upsert?: VendaUpsertWithWhereUniqueWithoutProdutoInput | VendaUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: VendaCreateManyProdutoInputEnvelope
    set?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    disconnect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    delete?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    connect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    update?: VendaUpdateWithWhereUniqueWithoutProdutoInput | VendaUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: VendaUpdateManyWithWhereWithoutProdutoInput | VendaUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: VendaScalarWhereInput | VendaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VendaUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<VendaCreateWithoutProdutoInput, VendaUncheckedCreateWithoutProdutoInput> | VendaCreateWithoutProdutoInput[] | VendaUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: VendaCreateOrConnectWithoutProdutoInput | VendaCreateOrConnectWithoutProdutoInput[]
    upsert?: VendaUpsertWithWhereUniqueWithoutProdutoInput | VendaUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: VendaCreateManyProdutoInputEnvelope
    set?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    disconnect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    delete?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    connect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    update?: VendaUpdateWithWhereUniqueWithoutProdutoInput | VendaUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: VendaUpdateManyWithWhereWithoutProdutoInput | VendaUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: VendaScalarWhereInput | VendaScalarWhereInput[]
  }

  export type VendaCreateNestedManyWithoutTransacaoInput = {
    create?: XOR<VendaCreateWithoutTransacaoInput, VendaUncheckedCreateWithoutTransacaoInput> | VendaCreateWithoutTransacaoInput[] | VendaUncheckedCreateWithoutTransacaoInput[]
    connectOrCreate?: VendaCreateOrConnectWithoutTransacaoInput | VendaCreateOrConnectWithoutTransacaoInput[]
    createMany?: VendaCreateManyTransacaoInputEnvelope
    connect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
  }

  export type VendaUncheckedCreateNestedManyWithoutTransacaoInput = {
    create?: XOR<VendaCreateWithoutTransacaoInput, VendaUncheckedCreateWithoutTransacaoInput> | VendaCreateWithoutTransacaoInput[] | VendaUncheckedCreateWithoutTransacaoInput[]
    connectOrCreate?: VendaCreateOrConnectWithoutTransacaoInput | VendaCreateOrConnectWithoutTransacaoInput[]
    createMany?: VendaCreateManyTransacaoInputEnvelope
    connect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VendaUpdateManyWithoutTransacaoNestedInput = {
    create?: XOR<VendaCreateWithoutTransacaoInput, VendaUncheckedCreateWithoutTransacaoInput> | VendaCreateWithoutTransacaoInput[] | VendaUncheckedCreateWithoutTransacaoInput[]
    connectOrCreate?: VendaCreateOrConnectWithoutTransacaoInput | VendaCreateOrConnectWithoutTransacaoInput[]
    upsert?: VendaUpsertWithWhereUniqueWithoutTransacaoInput | VendaUpsertWithWhereUniqueWithoutTransacaoInput[]
    createMany?: VendaCreateManyTransacaoInputEnvelope
    set?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    disconnect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    delete?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    connect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    update?: VendaUpdateWithWhereUniqueWithoutTransacaoInput | VendaUpdateWithWhereUniqueWithoutTransacaoInput[]
    updateMany?: VendaUpdateManyWithWhereWithoutTransacaoInput | VendaUpdateManyWithWhereWithoutTransacaoInput[]
    deleteMany?: VendaScalarWhereInput | VendaScalarWhereInput[]
  }

  export type VendaUncheckedUpdateManyWithoutTransacaoNestedInput = {
    create?: XOR<VendaCreateWithoutTransacaoInput, VendaUncheckedCreateWithoutTransacaoInput> | VendaCreateWithoutTransacaoInput[] | VendaUncheckedCreateWithoutTransacaoInput[]
    connectOrCreate?: VendaCreateOrConnectWithoutTransacaoInput | VendaCreateOrConnectWithoutTransacaoInput[]
    upsert?: VendaUpsertWithWhereUniqueWithoutTransacaoInput | VendaUpsertWithWhereUniqueWithoutTransacaoInput[]
    createMany?: VendaCreateManyTransacaoInputEnvelope
    set?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    disconnect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    delete?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    connect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    update?: VendaUpdateWithWhereUniqueWithoutTransacaoInput | VendaUpdateWithWhereUniqueWithoutTransacaoInput[]
    updateMany?: VendaUpdateManyWithWhereWithoutTransacaoInput | VendaUpdateManyWithWhereWithoutTransacaoInput[]
    deleteMany?: VendaScalarWhereInput | VendaScalarWhereInput[]
  }

  export type TransacaoCreateNestedOneWithoutVendasInput = {
    create?: XOR<TransacaoCreateWithoutVendasInput, TransacaoUncheckedCreateWithoutVendasInput>
    connectOrCreate?: TransacaoCreateOrConnectWithoutVendasInput
    connect?: TransacaoWhereUniqueInput
  }

  export type ProdutoCreateNestedOneWithoutVendasInput = {
    create?: XOR<ProdutoCreateWithoutVendasInput, ProdutoUncheckedCreateWithoutVendasInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutVendasInput
    connect?: ProdutoWhereUniqueInput
  }

  export type TransacaoUpdateOneRequiredWithoutVendasNestedInput = {
    create?: XOR<TransacaoCreateWithoutVendasInput, TransacaoUncheckedCreateWithoutVendasInput>
    connectOrCreate?: TransacaoCreateOrConnectWithoutVendasInput
    upsert?: TransacaoUpsertWithoutVendasInput
    connect?: TransacaoWhereUniqueInput
    update?: XOR<XOR<TransacaoUpdateToOneWithWhereWithoutVendasInput, TransacaoUpdateWithoutVendasInput>, TransacaoUncheckedUpdateWithoutVendasInput>
  }

  export type ProdutoUpdateOneRequiredWithoutVendasNestedInput = {
    create?: XOR<ProdutoCreateWithoutVendasInput, ProdutoUncheckedCreateWithoutVendasInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutVendasInput
    upsert?: ProdutoUpsertWithoutVendasInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutVendasInput, ProdutoUpdateWithoutVendasInput>, ProdutoUncheckedUpdateWithoutVendasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VendaCreateWithoutProdutoInput = {
    quantidade: number
    transacao: TransacaoCreateNestedOneWithoutVendasInput
  }

  export type VendaUncheckedCreateWithoutProdutoInput = {
    quantidade: number
    id_transacao: number
  }

  export type VendaCreateOrConnectWithoutProdutoInput = {
    where: VendaWhereUniqueInput
    create: XOR<VendaCreateWithoutProdutoInput, VendaUncheckedCreateWithoutProdutoInput>
  }

  export type VendaCreateManyProdutoInputEnvelope = {
    data: VendaCreateManyProdutoInput | VendaCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type VendaUpsertWithWhereUniqueWithoutProdutoInput = {
    where: VendaWhereUniqueInput
    update: XOR<VendaUpdateWithoutProdutoInput, VendaUncheckedUpdateWithoutProdutoInput>
    create: XOR<VendaCreateWithoutProdutoInput, VendaUncheckedCreateWithoutProdutoInput>
  }

  export type VendaUpdateWithWhereUniqueWithoutProdutoInput = {
    where: VendaWhereUniqueInput
    data: XOR<VendaUpdateWithoutProdutoInput, VendaUncheckedUpdateWithoutProdutoInput>
  }

  export type VendaUpdateManyWithWhereWithoutProdutoInput = {
    where: VendaScalarWhereInput
    data: XOR<VendaUpdateManyMutationInput, VendaUncheckedUpdateManyWithoutProdutoInput>
  }

  export type VendaScalarWhereInput = {
    AND?: VendaScalarWhereInput | VendaScalarWhereInput[]
    OR?: VendaScalarWhereInput[]
    NOT?: VendaScalarWhereInput | VendaScalarWhereInput[]
    quantidade?: IntFilter<"Venda"> | number
    id_transacao?: IntFilter<"Venda"> | number
    id_produto?: IntFilter<"Venda"> | number
  }

  export type VendaCreateWithoutTransacaoInput = {
    quantidade: number
    produto: ProdutoCreateNestedOneWithoutVendasInput
  }

  export type VendaUncheckedCreateWithoutTransacaoInput = {
    quantidade: number
    id_produto: number
  }

  export type VendaCreateOrConnectWithoutTransacaoInput = {
    where: VendaWhereUniqueInput
    create: XOR<VendaCreateWithoutTransacaoInput, VendaUncheckedCreateWithoutTransacaoInput>
  }

  export type VendaCreateManyTransacaoInputEnvelope = {
    data: VendaCreateManyTransacaoInput | VendaCreateManyTransacaoInput[]
    skipDuplicates?: boolean
  }

  export type VendaUpsertWithWhereUniqueWithoutTransacaoInput = {
    where: VendaWhereUniqueInput
    update: XOR<VendaUpdateWithoutTransacaoInput, VendaUncheckedUpdateWithoutTransacaoInput>
    create: XOR<VendaCreateWithoutTransacaoInput, VendaUncheckedCreateWithoutTransacaoInput>
  }

  export type VendaUpdateWithWhereUniqueWithoutTransacaoInput = {
    where: VendaWhereUniqueInput
    data: XOR<VendaUpdateWithoutTransacaoInput, VendaUncheckedUpdateWithoutTransacaoInput>
  }

  export type VendaUpdateManyWithWhereWithoutTransacaoInput = {
    where: VendaScalarWhereInput
    data: XOR<VendaUpdateManyMutationInput, VendaUncheckedUpdateManyWithoutTransacaoInput>
  }

  export type TransacaoCreateWithoutVendasInput = {
    data: Date | string
    preco: number
    id_usuario: number
  }

  export type TransacaoUncheckedCreateWithoutVendasInput = {
    id?: number
    data: Date | string
    preco: number
    id_usuario: number
  }

  export type TransacaoCreateOrConnectWithoutVendasInput = {
    where: TransacaoWhereUniqueInput
    create: XOR<TransacaoCreateWithoutVendasInput, TransacaoUncheckedCreateWithoutVendasInput>
  }

  export type ProdutoCreateWithoutVendasInput = {
    nome_do_produto: string
    preco: number
    tamanho: string
  }

  export type ProdutoUncheckedCreateWithoutVendasInput = {
    id?: number
    nome_do_produto: string
    preco: number
    tamanho: string
  }

  export type ProdutoCreateOrConnectWithoutVendasInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutVendasInput, ProdutoUncheckedCreateWithoutVendasInput>
  }

  export type TransacaoUpsertWithoutVendasInput = {
    update: XOR<TransacaoUpdateWithoutVendasInput, TransacaoUncheckedUpdateWithoutVendasInput>
    create: XOR<TransacaoCreateWithoutVendasInput, TransacaoUncheckedCreateWithoutVendasInput>
    where?: TransacaoWhereInput
  }

  export type TransacaoUpdateToOneWithWhereWithoutVendasInput = {
    where?: TransacaoWhereInput
    data: XOR<TransacaoUpdateWithoutVendasInput, TransacaoUncheckedUpdateWithoutVendasInput>
  }

  export type TransacaoUpdateWithoutVendasInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: FloatFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type TransacaoUncheckedUpdateWithoutVendasInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: FloatFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoUpsertWithoutVendasInput = {
    update: XOR<ProdutoUpdateWithoutVendasInput, ProdutoUncheckedUpdateWithoutVendasInput>
    create: XOR<ProdutoCreateWithoutVendasInput, ProdutoUncheckedCreateWithoutVendasInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutVendasInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutVendasInput, ProdutoUncheckedUpdateWithoutVendasInput>
  }

  export type ProdutoUpdateWithoutVendasInput = {
    nome_do_produto?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    tamanho?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutoUncheckedUpdateWithoutVendasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_do_produto?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    tamanho?: StringFieldUpdateOperationsInput | string
  }

  export type VendaCreateManyProdutoInput = {
    quantidade: number
    id_transacao: number
  }

  export type VendaUpdateWithoutProdutoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    transacao?: TransacaoUpdateOneRequiredWithoutVendasNestedInput
  }

  export type VendaUncheckedUpdateWithoutProdutoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    id_transacao?: IntFieldUpdateOperationsInput | number
  }

  export type VendaUncheckedUpdateManyWithoutProdutoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    id_transacao?: IntFieldUpdateOperationsInput | number
  }

  export type VendaCreateManyTransacaoInput = {
    quantidade: number
    id_produto: number
  }

  export type VendaUpdateWithoutTransacaoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    produto?: ProdutoUpdateOneRequiredWithoutVendasNestedInput
  }

  export type VendaUncheckedUpdateWithoutTransacaoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    id_produto?: IntFieldUpdateOperationsInput | number
  }

  export type VendaUncheckedUpdateManyWithoutTransacaoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    id_produto?: IntFieldUpdateOperationsInput | number
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