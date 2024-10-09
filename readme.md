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

The algorithm React uses to diff one tree with another to determine which parts need to be changed.

## update

A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

##

## We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

### pause work and come back to it later.

### assign priority to different types of work.

### reuse previously completed work.

### abort work if it's no longer needed.
