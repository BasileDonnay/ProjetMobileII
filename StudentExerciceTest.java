import java.io.BufferedReader;
import java.io.FileReader;

public class StudentExerciceTest {
    private static final int linesAlreadyInCodeExecutor = 15;
    private static final String newLine = "<br>";
    private static final String failColor = "#ff0000";
    private static final String successColor = "#14eb00";
    private static final String paragraphType = "p";
    private static final String testTitleType = "h1";
    private static final String fontSize = "30";
    private static long executionTime;

    public static void testStudentResult(String... tests) {
        for (String test: tests) {
            long startTime = System.nanoTime();

            Object studentResult = CodeExecutor.code(test);

            long endTime = System.nanoTime();
            executionTime = endTime - startTime;

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

    public static void printStatisticsTitle() {
        System.out.print("<" + testTitleType + " style=\"font-size: " + fontSize + "px;\">STATISTICS</" + testTitleType + ">");
    }

    public static void Statistics() {
        System.out.println("Execution time: " + executionTime / 1_000L + " miliseconds");
        
        System.out.println("Number of lines of code: " + countLinesOfCodeInFile("CodeExecutor.java"));

        System.out.println("Number of iterations: " + CodeExecutor.getIteration());
    }

    public static int countLinesOfCodeInFile(String fileName) {
        int count = 0;
        try {
            // Open the Java file.
            FileReader fileReader = new FileReader(fileName);

            // Create a BufferedReader object to read the file line by line.
            BufferedReader bufferedReader = new BufferedReader(fileReader);

            // Iterate over the lines in the file and increment a counter for each line of code.
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                // Ignore empty lines and comment lines.
                if (line != null && !line.startsWith("//")) {
                    count++;
                }
            }

            // Close the BufferedReader object and the FileReader object.
            bufferedReader.close();
            fileReader.close();
        } catch (Exception e) {
            count = Integer.MAX_VALUE;
        }

        //remove amount of lines already in code
        count -= linesAlreadyInCodeExecutor;

        // Return the number of lines of code.
        return count;
    }
}