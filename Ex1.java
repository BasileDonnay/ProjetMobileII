public class Ex1 {
    public static void main(String[] args) {
        StudentExerciceTest.printTestTitle();

        StudentExerciceTest.testStudentResult("salut");

        StudentExerciceTest.hiddenTestStudentResult("rat", "maison", "école", "zebre");

        //give statistics time, lines of code and executions
        //System.out.println("STATISTIQUES<br>");
    }

    //TODO
    public static Object solution(String test) {
        return test.charAt(0);
    }
}
