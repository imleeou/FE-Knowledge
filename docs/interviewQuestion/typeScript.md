# TypeScript 相关面试题

## TypeScript 有哪些常见工具类型？{#ts-tool-type}

### `Partial<T>`

将类型 `T` 的所有属性标记为可选的。这对于希望能够部分更新对象时非常有用。

```typescript
interface MyType {
  id: number;
  name: string;
}

type PartialMyType = Partial<MyType>;
// 等同于
// {
//   id?: number;
//   name?: string;
// }
```

### `Required<T>`

与 `Partial` 相反，`Required<T>` 会将类型 `T` 的所有属性标记为必选的。

```typescript
interface MyType {
  id?: number;
  name?: string;
}

type RequiredMyType = Required<MyType>;
// 等同于
// {
//   id: number;
//   name: string;
// }

```

### `Readonly<T>`

将类型 `T` 的所有属性标记为只读，这意味着一旦属性被赋值，就不能再被修改。

```typescript
interface MyType {
  id: number;
  name: string;
}

type ReadonlyMyType = Readonly<MyType>;
// 等同于
// {
//   readonly id: number;
//   readonly name: string;
// }
```

### `Pick<T, K>`

从类型 `T` 中选择一组属性 `K` 来构造类型。

```typescript
interface MyType {
  id: number;
  name: string;
  age: number;
}

type PickedMyType = Pick<MyType, 'id' | 'name'>;
// 等同于
// {
//   id: number;
//   name: string;
// }
```

### `Omit<T, K>`

构造一个类型，它由类型 `T` 中所有属性除了 `K` 指定的属性集合之外的属性组成。

```typescript
interface MyType {
  id: number;
  name: string;
  age: number;
}

type OmittedMyType = Omit<MyType, 'age'>;
// 等同于
// {
//   id: number;
//   name: string;
// }

```

### `Record<K, T>`

创建一个类型，其属性键为 `K`，属性值为 `T`。这对于映射类型特别有用。

```typescript
type MyRecord = Record<string, number>;
// 等同于
// {
//   [key: string]: number;
// }

```

### `Exclude<T, U>`

从类型 `T` 中排除所有可以赋值给类型 `U` 的类型。

```typescript
type T = string | number | boolean;
type Excluded = Exclude<T, number>;
// 结果类型为 string | boolean

```

### `Extract<T, U>`

从类型 `T` 中提取所有可以赋值给类型 `U` 的类型。

```typescript
type T = string | number | boolean;
type Extracted = Extract<T, number | string>;
// 结果类型为 string | number

```

### `NonNullable<T>`

从类型 `T` 中排除 `null` 和 `undefined` 类型。

```typescript
type T = string | number | null | undefined;
type NonNullableT = NonNullable<T>;
// 结果类型为 string | number

```

### `ReturnType<T>`

用于获取函数 `T` 的返回类型。

```typescript
function foo() {
  return { x: 10, y: 3 };
}

type FooReturnType = ReturnType<typeof foo>;
// 等同于
// {
//   x: number;
//   y: number;
// }
```

### `InstanceType<T>`

用于获取构造函数类型的实例类型。

```typescript
class MyClass {
  x: number;
  y: number;
}

type MyInstance = InstanceType<typeof MyClass>;
// 等同于
// MyClass
```

### `Parameters<T>`

用于获取函数 T 的参数类型作为一个元组。

```typescript
function foo(x: number, y: string, z: boolean) {}

type FooParameters = Parameters<typeof foo>;
// 等同于
// [number, string, boolean]

```

### `Infer`

Infer 类型在条件类型中非常有用，它允许你在条件类型的 extends 子句中推断类型变量。

```typescript
type UnpackPromise<T> = T extends Promise<infer U> ? U : T;

type ResolvedType = UnpackPromise<Promise<string>>;
// 等同于
// string

```
