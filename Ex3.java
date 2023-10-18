public class Ex3 {
    public static void main(String[] args) {
        StudentExerciceTest.printTestTitle();

        StudentExerciceTest.testStudentResult("haBilLer", "abbA");

        StudentExerciceTest.hiddenTestStudentResult("avalANche", "ARABIC", "QD", "a");

        //give statistics time, lines of code and executions
        //System.out.println("STATISTIQUES<br>");
    }

    public static int solution(String data) {
        int resultat = 0;
        for (int i = 0; i < data.length(); i++) {
            char lettre = data.charAt(i);
            if (Character.isUpperCase(lettre)) {
                resultat++;
            }
        }
        return resultat;
    }
}
