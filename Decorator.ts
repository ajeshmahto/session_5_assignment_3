function MyMethodDecorator(){
    return function(target,key, descriptor){
        console.log(target+key+descriptor);
    }
}

function MyStaticMethodDecorator(){
    return function(target,key,descriptor){
       console.log(target+key+descriptor);
    }
}

class Example {
    @MyMethodDecorator()
    method(){

    }
    @MyStaticMethodDecorator()
    static myStaticMethod(){

    }

}