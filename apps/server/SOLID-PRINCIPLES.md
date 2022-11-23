# SOLID Principles

1. Single Responsability Principle
2. Open/Closed Principle
3. Liskov Substitution Principle
4. Interface Segragation Principle
5. Dependency Inversion Principle

---

1. Each class[^class] should have a single responsability
2. The aplication classes should be opened for extending, but closed for modification
3. We should be able to replace a parent class with its child and everything would still work
4. e.g. `Printer implements Print, Scan` instead of `Printer implements SuperPrinter`
5. We should invert our classes dependencies, externally passing their dependencies

[^class]: I say **class** but it can also be used in a functions context.
