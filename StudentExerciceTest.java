public class StudentExerciceTest {
    public static void testStudentResult(String... tests) {
        for (String test: tests) {
            int studentResult = CodeExecutor.code(test);
            int solution = CodeExecutor.solution(test);

            System.out.print("Test avec : '" + test + "' votre réponse : " + studentResult + " ");
            if(solution == studentResult){
                System.out.print("<span style=\"color: #14eb00\">correct !</span>");
            } else {
                System.out.print("<span style=\"color: #ff0000\">pas correct...<br>");
                System.out.print("La réponse attendue : " + solution + "</span>");
            }
            System.out.print("<br>");
        }
        System.out.print("<br>");
    }

    public static void hiddenTestStudentResult(String... tests) {
        for (String test: tests) {
            int studentResult = CodeExecutor.code(test);
            int solution = CodeExecutor.solution(test);

            if(solution != studentResult){
                System.out.println("Un ou plusieurs des tests cachés a <span style=\"color: #ff0000\">échoué</span>");
                return;
            }
        }
        System.out.println("Tous les tests cachés ont été <span style=\"color: #14eb00\">réussis</span>");
    }
}
