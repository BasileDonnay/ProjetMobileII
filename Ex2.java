public class Ex2 {
    public static void main(String[] args) {
        //give test results
        StudentExerciceTest.printTestTitle();

        StudentExerciceTest.testStudentResult("habiller", "abba");

        StudentExerciceTest.hiddenTestStudentResult("avalanche", "arabic", "", "a");

        //give statistics time, lines of code and executions
        StudentExerciceTest.printStatisticsTitle();

        StudentExerciceTest.Statistics();
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
