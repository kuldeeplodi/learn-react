(npx)node package excutor

# TO create react project

### npx create-react-app 01basicreact

## or

### npm create vite@latest

### project name: 01vitereact

### select a framework : react

### select a variant: javascript

### cd 01vitereact

### npm install

### npm run dev

##### React (core library which take references)

##### ReactDOM (it is a implementation on web )

# vitual DOM,Fibre and reconciliation

## reconciliation

The algorithm React uses to differentait one tree with another to determine which parts need to be changed.

or 
Reconciliation is the process React uses to update the UI efficiently when the application state or props change. Instead of re-rendering everything from scratch, React compares the new Virtual DOM with the previous one and updates only the necessary parts in the real DOM.

## update

A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

##

# React Fiber
React Fiber introduces a new data structure: the Fiber Tree, which is a more detailed version of the Virtual DOM. Instead of processing the entire tree at once, React Fiber splits rendering into small chunks (units of work).

🎯 Two Phases of React Fiber
## 1 Render Phase (can be paused)

React builds a work-in-progress Fiber Tree by comparing the old and new trees.

If a task with higher priority (like user input) comes in, React can pause and resume later.

This phase runs in a non-blocking way.

## 2 Commit Phase (synchronous & fast)

Once the Fiber Tree is ready, React applies the changes to the real DOM.

This phase cannot be paused and executes:

DOM updates

Side effects (componentDidMount, useEffect)

Ref updates


## We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to
( key features)
- pause work and come back to it later.

- assign priority to different types of work.
- reuse previously completed work.

- abort work if it's no longer needed.



# Context API
