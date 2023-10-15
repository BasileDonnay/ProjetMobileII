
public class CodeExecutor {
    public static int code(String data){
        int res = 0;

        res = 1;

        return res;
    }

    public static int solution(String test) {
        int counter = 0;
        for (char letter : test.toCharArray()) {
            if (letter == 'a') {
                counter++;
            }
        }
        return counter;
        //return Ex1.solution(test);
    }
}
        