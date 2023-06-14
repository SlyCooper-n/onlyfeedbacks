interface ForProps<T> {
  each: T[] | null;
  children: (item: T, index: number) => JSX.Element;
}

export function For<T>(props: ForProps<T>) {
  if (!props.each) return null;

  return <>{props.each.map((item, index) => props.children(item, index))}</>;
}
