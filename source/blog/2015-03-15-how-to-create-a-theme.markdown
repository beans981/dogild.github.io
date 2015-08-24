---
title: How to create a new theme
date: 2015-03-15 09:27 -04:00
author: Alexandre Wilhelm
tags:
 - theme
 - appkit
 - cappuccino
---

Cappuccino and Cocoa are quite simular in a lot of aspects, however Cappuccino proposes a theming engine which allows you to easily custom an application. Let's now customize a new flat `CPButton`.

### What you should know before theming ?

Firstly, you will have to know few things about the theming engine. Every `CPView` ans subclass of CPView implement the method `+(CPDictionary)themeAttributes`. I won't suprise you by saying that method returns a dictionary of `themeAttributes` where the keys are the attribute names and their default value as values. These attributes are used to theme the application. We will see later how to change these default values.

Secondly, every `CPView` has, at every moment, a `themeState`. This themeState represents the current state of the control. For instance a disable CPButton will have the themeStates `[CPThemeStateBordered, CPThemeStateDisabled]`.

You can change the themeState of a view by using the methods `-(BOOL)setThemeState:`, `-(BOOL)unsetThemeState:`.

### How to make a new one ?

Surprise, there is a capp command for that : `capp gen -F BlendKit -t ThemeDescriptor -l MyFlatTheme`

### Use the Theme with an Application

### Demo

You can find these pieces of code [here](https://github.com/Dogild/)

Follow me on [@WilhelmAlex](https://twitter.com/WilhelmAlex) or [github](https://github.com/Dogild).