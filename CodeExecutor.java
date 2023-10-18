public class CodeExecutor {
    private static int iterationCounterADMINONLY = 0;
    public static Object code(String data){
        for (int i = 0; i < 10000; i++) { iterationCounterADMINONLY++;
    System.out.print("");    
}    
for (int i = 0; i < 10000; i++) { iterationCounterADMINONLY++;
    System.out.print("");    
}    
for (int i = 0; i < 10000; i++) { iterationCounterADMINONLY++;
    System.out.print("");    
}
return 1;
    }

    public static Object solution(String test) {
        return Ex1.solution(test);
    }

    public static int getIteration(){
        return iterationCounterADMINONLY/2;
    }
}
        