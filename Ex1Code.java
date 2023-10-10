
public class Ex1Code {
    public static int code(String data){
        int res = 0;

        for (char letter : data.toCharArray()) {
            if (letter == 'a') {
                res++;
            }
        }

        return res;
    }
}
