public class CodeExecutor {
    private static int iterationCounterADMINONLY = 0;
    public static Object code(String data){
        iterationCounterADMINONLY = 0;
        return 1;
    }

    public static Object solution(String test) {
        return Ex2.solution(test);
    }

    public static int getIteration(){
        return iterationCounterADMINONLY;
    }
}
        