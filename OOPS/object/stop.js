console.log('I am Stop JS=============================================>');

function StopWatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if(running)
        throw new Error('Stopwatch has already started');

        running = truw;
        startTime = new Date();
    };

    this.stop = function(){
        if(!running)
        throw new Error('StopWatch is not started');
        
        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime())/1000;
        duration += seconds;
    };

    this.reset = function(){
        startTime = null;
        endTime= null;
        running=false;
        duration=0;
    };

    Object.defineProperty
}