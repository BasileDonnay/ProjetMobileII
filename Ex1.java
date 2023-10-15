public class Ex1 {
    public static void main(String[] args) {
        System.out.println("TESTS");

        StudentExerciceTest.testStudentResult("salut", "abba");

        StudentExerciceTest.hiddenTestStudentResult("avalanche", "arabic", "", "a");

        //give statistics time, lines of code and executions
        //System.out.println("STATISTIQUES<br>");
    }

    public static int solution(String test) {
        int counter = 0;
        for (char letter : test.toCharArray()) {
            if (letter == 'a') {
                counter++;
            }
        }
        return counter;
    }
}
