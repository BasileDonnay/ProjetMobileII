import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.awt.Color;
import javax.imageio.ImageIO;

public class StudentExerciceTest {
    private static final String imageFormat = "png";
    private static final String piechartImageName = "assets/PieChartImage." + imageFormat;
    private static final int linesAlreadyInCodeExecutor = 15;
    private static final String newLine = "<br>";
    private static final String failColor = "#ff0000";
    private static final String successColor = "#14eb00";
    private static final String paragraphType = "p";
    private static final String testTitleType = "h1";
    private static final String fontSize = "30";
    private static final String statisticsColor = "#e07634";
    private static final int imageLength = 300;
    private static final int outlineWidth = 3;
    private static long executionTime;
    private static int shownTestsSuccessCounter;
    private static int shownTestsFailCounter;

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
                shownTestsSuccessCounter++;
            } else {
                System.out.println(colorise(failColor, "pas correct..."));
                System.out.print("-> La réponse attendue : " + solution + "</span>");
                shownTestsFailCounter++;
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
        System.out.print("<table><tr>");
            System.out.print("<td><" + paragraphType + " style=\"font-size: " + fontSize + "px;\">");
                System.out.println("Execution time: " + colorise(statisticsColor, executionTime / 1_000L + "") + " milliseconds");
                
                System.out.println("Number of lines of code: " + colorise(statisticsColor, countLinesOfCodeInFile("CodeExecutor.java") + ""));

                System.out.println("Number of iterations: " + colorise(statisticsColor, CodeExecutor.getIteration() + ""));
            System.out.print("</" + paragraphType + "></td>");

            //piechart
            System.out.print("<td><img src=\"http://localhost:8000/" + piechartImageName + "\" /></td>");
        System.out.print("</tr></table>");

        //create image of piechart
        paint();
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

    public static void paint() {
        BufferedImage image = new BufferedImage(imageLength, imageLength, BufferedImage.TYPE_INT_RGB);
        Graphics g = image.createGraphics();

        //background
        g.setColor(Color.white);
        g.fillRect(0, 0, imageLength, imageLength); 

        //-----------------
        //*   PIECHART    *
        //-----------------
        int totalTests = shownTestsFailCounter + shownTestsSuccessCounter;
        int successAngle = (int) (((double) shownTestsSuccessCounter/(double) totalTests) * (double) 360);
        System.out.println(totalTests);
        System.out.println(successAngle);
        drawArc(g, 0, successAngle, Color.green);
        drawArc(g, successAngle, 360-successAngle, Color.red);

        try {
            ImageIO.write(image, imageFormat, new File(piechartImageName));
        }catch (IOException e) {
           e.printStackTrace();
        }
    }

    private static void drawArc(Graphics g, int startAngle, int endAngle, Color color) {
        //outline
        g.setColor(Color.black);
        g.fillArc(0, 0, imageLength, imageLength, startAngle, endAngle);

        //arc
        g.setColor(color);
        g.fillArc(0 + outlineWidth, 
        0 + outlineWidth, 
        imageLength - 2*outlineWidth, 
        imageLength - 2*outlineWidth, 
        startAngle/*+(3*outlineWidth/4)*/, 
        endAngle/*-(3*outlineWidth/4)*/
        );
    }
}