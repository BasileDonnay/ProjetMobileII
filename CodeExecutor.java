public class CodeExecutor {
    private static int iterationCounterADMINONLY = 0;
    public static Object code(String data){
        iterationCounterADMINONLY = 0;
        int i = 0;
while (i <10){ iterationCounterADMINONLY++;
  i = 9;
};
return "s";
    }

    public static Object solution(String test) {
        return Ex1.solution(test);
    }

    public static int getIteration(){
        return iterationCounterADMINONLY;
    }
}
        