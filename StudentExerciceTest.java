public class StudentExerciceTest {
    private static final String newLine = "<br>";
    private static final String failColor = "#ff0000";
    private static final String successColor = "#14eb00";
    private static final String paragraphType = "p";
    private static final String testTitleType = "h1";
    private static final String fontSize = "30";
    
    public static void testStudentResult(String... tests) {
        for (String test: tests) {
            Object studentResult = CodeExecutor.code(test);
            Object solution = CodeExecutor.solution(test);

            System.out.print("<" + paragraphType + " style=\"font-size: " + fontSize + "px;\">Test avec : '" + test + "' votre réponse : " + studentResult + " ");
            if(solution.equals(studentResult)){
                System.out.print(colorise(successColor, "correct !"));
            } else {
                System.out.println(colorise(failColor, "pas correct..."));
                System.out.print("-> La réponse attendue : " + solution + "</span>");
            }
            System.out.print(newLine);
        }
        System.out.print(newLine);
    }

    public static void hiddenTestStudentResult(String... tests) {
        for (String test: tests) {
            Object studentResult = CodeExecutor.code(test);
            Object solution = CodeExecutor.solution(test);

            if(!solution.equals(studentResult)){
                System.out.println("Un ou plusieurs des tests cachés a " + colorise(failColor, "échoué") + "</" + paragraphType + ">");
                return;
            }
        }
        System.out.println("Tous les tests cachés ont été " + colorise(successColor, "réussis") + "</" + paragraphType + ">");
    }

    private static String colorise(String color, String text) {
        return "<span style=\"color: " + color + "\">" + text + "</span>";
    }

    public static void printTestTitle() {
        System.out.print("<" + testTitleType + " style=\"font-size: " + fontSize + "px;\">TESTS</" + testTitleType + ">");
    }
}
