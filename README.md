# Javascript Design Patterns

## Introduction

Design patterns are advanced object-oriented solutions to commonly occurring software problems. Patterns are about reusable designs and interactions of objects. Each pattern has a name and becomes part of a vocabulary when discussing complex design solutions.

The 23 Gang of Four (GoF) patterns are generally considered the foundation for all other patterns. They are categorized in three groups: Creational, Structural, and Behavioral (see below for a complete list).

In this tutorial we provide JavaScript examples for each of the GoF patterns. Mostly, they follow the structure and intent of the original pattern designs. These examples demonstrate the principles behind each pattern, but are not optimized for JavaScript.

## Algorithm

- [Linked List](/algorithm/LinkedList.ts)

## Design Patterns

- Creational patterns

  - [Abstract Factory](/design-patterns/creational/AbstractFactory.ts) `is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.`

  - [Builder](/design-patterns/creational/Builder.ts) `is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.`

  - [Factory Method](/design-patterns/creational/FactoryMethod.ts) `is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.`

  - [Prototype](/design-patterns/creational/Prototype.ts) `is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.`

  - [Singleton](/design-patterns/creational/Singleton.ts) `is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.`

- Structural patterns

  - [Adapter](/design-patterns/structural/Adapter.ts) `is a structural design pattern that allows objects with incompatible interfaces to collaborate.`

  - [Bridge](/design-patterns/structural/Bridge.ts) `is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.`

  - [Composite](/design-patterns/structural/Composite.ts) `is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects.`

  - [Decorator](/design-patterns/structural/Decorator.ts) `is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.`

  - [Facade](/design-patterns/structural/Facade.ts) `is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.`

  - [Flyweight](/design-patterns/structural/Flyweight.ts) `is a structural design pattern that lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.`

  - [Proxy](/design-patterns/structural/Proxy.ts) `is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.`

- Behavioral patterns

  - [Chain of Responsibility](/design-patterns/behavioral/ChainOfResponsibility.ts) `is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.`

  - [Command](/design-patterns/behavioral/Command.ts) `is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.`

  - [Interpreter](/design-patterns/behavioral/Interpreter.ts) ``

  - [Iterator](/design-patterns/behavioral/Iterator.ts) `is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).`

  - [Mediator](/design-patterns/behavioral/Mediator.ts) `is a behavioral design pattern that lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.`

  - [Memento](/design-patterns/behavioral/Memento.ts) `is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation.`

  - [Observer](/design-patterns/behavioral/Observer.ts) `is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.`

  - [State](/design-patterns/behavioral/State.ts) `is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.`

  - [Strategy](/design-patterns/behavioral/Strategy.ts) `is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.`

  - [Template Method](/design-patterns/behavioral/TemplateMethod.ts) `is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.`

  - [Visitor](/design-patterns/behavioral/Visitor.ts) `is a behavioral design pattern that lets you separate algorithms from the objects on which they operate.`
