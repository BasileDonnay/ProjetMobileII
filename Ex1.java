public class Ex1 {
    public static void main(String[] args) {
        System.out.println("TESTS<br>");

        testStudentResult("salut", "abba");

        hiddenTestStudentResult("avalanche", "arabic", "", "a");

        //give statistics time, lines of code and executions
        //System.out.println("STATISTIQUES<br>");
    }

    private static void hiddenTestStudentResult(String... tests) {
        for (String test: tests) {
            int studentResult = CodeExecutor.code(test);
            int solution = solution(test);

            if(solution != studentResult){
                System.out.println("Un ou plusieurs des tests cachés a <span style=\"color: #ff0000\">échoué</span>");
                return;
            }
        }
        System.out.println("Tous les tests cachés ont été <span style=\"color: #14eb00\">réussis</span>");
    }

    private static int solution(String test) {
        int counter = 0;
        for (char letter : test.toCharArray()) {
            if (letter == 'a') {
                counter++;
            }
        }
        return counter;
    }

    private static void testStudentResult(String... tests) {
        for (String test: tests) {
            int studentResult = CodeExecutor.code(test);
            int solution = solution(test);

            System.out.println("Test avec : '" + test + "' votre réponse : " + studentResult);
            if(solution == studentResult){
                System.out.println("<span style=\"color: #14eb00\">correct !</span>");
            } else {
                System.out.println("<span style=\"color: #ff0000\">pas correct...<br>");
                System.out.println("La réponse attendue : " + solution + "</span>");
            }
            System.out.println("<br>");
        }
    }
}
