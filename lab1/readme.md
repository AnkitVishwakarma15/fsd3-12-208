# Eventloop 
js is synchronous and single theraded by default 
## There can be async behaviour 
- with browserAPI - setTimeout, setInterval, setImmediate, nextTick 
- with promises 
- with event handlers 

# PROMISE 
- a function not excuted emidiately but it must be excuted after a while it has some status during the excution at final it may resolve(success) or reject  (unsuccess) 

## call back function =>
that pass as argument or the parameter to another function 

## modern java script devide into two categries
- commonJs (.cjs)-> supports oops -> require 
     - piority (nextTick, promise , setImmediate/setTimeout)
  
- moduleJs (.mjs)-> follow modular approach ->import
    - priority (promise, nextTick, setImmediate/setTimeout)