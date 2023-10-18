public class Ex1 {
    public static void main(String[] args) {
        //give test results
        StudentExerciceTest.printTestTitle();

        StudentExerciceTest.testStudentResult("salut");

        StudentExerciceTest.hiddenTestStudentResult("rat", "maison", "école", "zebre");

        //give statistics time, lines of code and executions
        StudentExerciceTest.printStatisticsTitle();

        StudentExerciceTest.Statistics();
    }

    public static Object solution(String test) {
        return test.charAt(0) + "";
    }
}
